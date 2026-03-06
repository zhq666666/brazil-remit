/*
  # Add Rebuild Debounce Table

  1. New Tables
    - `rebuild_lock`
      - `id` (text, primary key) — lock key identifier
      - `last_triggered_at` (timestamptz) — timestamp of last trigger

  2. Purpose
    - Prevents duplicate GitHub Actions runs when multiple articles are inserted
      in quick succession (e.g., batch inserts trigger the webhook multiple times)
    - The edge function checks this table and skips triggering if a rebuild was
      already dispatched within the last 60 seconds

  3. Security
    - Enable RLS
    - Only the service role can read/write this table (used by edge function via service key)
*/

CREATE TABLE IF NOT EXISTS rebuild_lock (
  id text PRIMARY KEY,
  last_triggered_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE rebuild_lock ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage rebuild lock"
  ON rebuild_lock
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can insert rebuild lock"
  ON rebuild_lock
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update rebuild lock"
  ON rebuild_lock
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);
