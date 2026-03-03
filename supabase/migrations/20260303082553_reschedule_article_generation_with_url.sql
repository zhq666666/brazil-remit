/*
  # Reschedule article generation cron job with hardcoded project URL

  ## Summary
  Removes the previous cron job that relied on app settings (which weren't configured)
  and replaces it with one that uses the actual Supabase project URL directly.
  The Edge Function is called every 5 minutes to generate new trilingual articles.
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
