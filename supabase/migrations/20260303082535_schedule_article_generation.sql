/*
  # Schedule automatic article generation every 5 minutes

  ## Summary
  Enables pg_cron and pg_net extensions, then creates a cron job that
  calls the generate-article Edge Function every 5 minutes to automatically
  publish new trilingual articles to the Today's Brazil section.

  ## Changes
  - Enable pg_cron extension for job scheduling
  - Enable pg_net extension for HTTP requests from database
  - Create a cron job "generate-brazil-article" that fires every 5 minutes
    and sends a POST request to the generate-article Edge Function
*/

CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

SELECT cron.unschedule('generate-brazil-article')
WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'generate-brazil-article'
);

SELECT cron.schedule(
  'generate-brazil-article',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url := (SELECT current_setting('app.settings.supabase_url', true) || '/functions/v1/generate-article'),
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
    ),
    body := '{}'::jsonb
  );
  $$
);
