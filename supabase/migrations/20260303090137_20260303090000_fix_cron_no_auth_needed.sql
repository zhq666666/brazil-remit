/*
  # Fix cron job for generate-article edge function

  ## Summary
  The edge function now has JWT verification disabled, so the cron job
  no longer needs an Authorization header. This migration reschedules
  the cron job cleanly to ensure it works correctly.

  ## Changes
  - Unschedule any existing cron job named 'generate-brazil-article'
  - Reschedule with the correct URL and no auth header required
*/

SELECT cron.unschedule('generate-brazil-article')
WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'generate-brazil-article'
);

SELECT cron.schedule(
  'generate-brazil-article',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url := 'https://sqffmvdzldtnjlfamgci.supabase.co/functions/v1/generate-article',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{}'::jsonb
  );
  $$
);
