/*
  # Allow service role to insert articles

  ## Summary
  Adds an INSERT policy for the service_role so that Edge Functions
  (which use the service role key) can insert new auto-generated articles
  into the articles table.

  ## Security Changes
  - Add INSERT policy for service_role on articles table
  - service_role bypasses RLS by default in Supabase, but this makes intent explicit
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'articles' AND policyname = 'Service role can insert articles'
  ) THEN
    CREATE POLICY "Service role can insert articles"
      ON articles FOR INSERT
      TO service_role
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'articles' AND policyname = 'Service role can update articles'
  ) THEN
    CREATE POLICY "Service role can update articles"
      ON articles FOR UPDATE
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;
