/*
  # Create Article Insert Rebuild Trigger

  1. Changes
    - Creates a trigger function that fires after each INSERT on the `articles` table
    - Uses pg_net to make an async HTTP POST to the `trigger-rebuild` Edge Function
    - This causes the GitHub Pages site to automatically rebuild whenever a new article is added

  2. Notes
    - pg_net is used for non-blocking async HTTP calls
    - The Edge Function uses GITHUB_TOKEN to dispatch a workflow_dispatch event to GitHub Actions
*/

CREATE OR REPLACE FUNCTION notify_rebuild_on_article_insert()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  supabase_url text;
  anon_key text;
BEGIN
  supabase_url := 'https://sqffmvdzldtnjlfamgci.supabase.co';
  anon_key := current_setting('app.supabase_anon_key', true);

  PERFORM net.http_post(
    url := supabase_url || '/functions/v1/trigger-rebuild',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZmZtdmR6bGR0bmpsZmFtZ2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyNjU3NzgsImV4cCI6MjA4Nzg0MTc3OH0.h2qbGoWPTaSngg-c89-M0Sn8vECYhy25sacgxaN7eQc'
    ),
    body := jsonb_build_object('trigger', 'article_insert', 'slug', NEW.slug)
  );

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_article_insert_rebuild ON articles;

CREATE TRIGGER on_article_insert_rebuild
  AFTER INSERT ON articles
  FOR EACH ROW
  EXECUTE FUNCTION notify_rebuild_on_article_insert();
