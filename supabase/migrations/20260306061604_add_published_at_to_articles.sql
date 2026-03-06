/*
  # Add published_at timestamptz column to articles

  ## Summary
  Adds a `published_at` column to store the full publication datetime with seconds precision.
  Backfills existing rows using the `published_date` date column.

  ## Changes
  - `articles` table: add `published_at` (timestamptz) column
  - Backfill: set `published_at` from `published_date` at noon UTC for existing rows
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'articles' AND column_name = 'published_at'
  ) THEN
    ALTER TABLE articles ADD COLUMN published_at timestamptz;
  END IF;
END $$;

UPDATE articles SET published_at = (published_date::text || 'T12:00:00Z')::timestamptz WHERE published_at IS NULL;

CREATE INDEX IF NOT EXISTS articles_published_at_idx ON articles (published_at DESC);
