/*
  # Reschedule article generation to daily at 8:00 AM Beijing time (UTC+8)

  ## Summary
  Changes the cron schedule to run at 00:00 UTC, which is 08:00 Beijing time (UTC+8).

  ## Changes
  - Unschedule existing 'generate-brazil-article' cron job
  - Reschedule to run at 00:00 UTC every day (cron: '0 0 * * *')
*/

SELECT cron.unschedule('generate-brazil-article')
WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'generate-brazil-article'
);

SELECT cron.schedule(
  'generate-brazil-article',
  '0 0 * * *',
  $$
  SELECT net.http_post(
    url := 'https://sqffmvdzldtnjlfamgci.supabase.co/functions/v1/generate-article',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{}'::jsonb
  );
  $$
);
