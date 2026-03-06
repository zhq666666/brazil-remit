/*
  # Schedule article generation every 5 minutes

  Uses pg_cron to call the generate-article edge function every 5 minutes via pg_net HTTP request.

  1. Enables pg_net for async HTTP calls from the database
  2. Creates a cron job that fires every 5 minutes and POSTs to the edge function
*/

SELECT cron.schedule(
  'generate-article-every-5-minutes',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url := current_setting('app.supabase_url', true) || '/functions/v1/generate-article',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.anon_key', true)
    ),
    body := '{}'::jsonb
  )
  $$
);
