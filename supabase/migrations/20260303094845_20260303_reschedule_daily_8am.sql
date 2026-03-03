/*
  # Reschedule article generation to daily at 8:00 AM UTC

  ## Summary
  Changes the cron schedule from every 5 minutes to once per day at 08:00 UTC.

  ## Changes
  - Unschedule existing 'generate-brazil-article' cron job
  - Reschedule to run at 08:00 UTC every day (cron: '0 8 * * *')
*/

SELECT cron.unschedule('generate-brazil-article')
WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'generate-brazil-article'
);

SELECT cron.schedule(
  'generate-brazil-article',
  '0 8 * * *',
  $$
  SELECT net.http_post(
    url := 'https://sqffmvdzldtnjlfamgci.supabase.co/functions/v1/generate-article',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{}'::jsonb
  );
  $$
);
