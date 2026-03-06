/*
  # Fix cron job timeout for AI article generation

  The pg_net default timeout of 5000ms is too short for AI model inference.
  Update the every-5-minutes cron job to use a 30-second timeout.
*/

SELECT cron.unschedule('generate-article-every-5-minutes');

SELECT cron.schedule(
  'generate-article-every-5-minutes',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url := 'https://sqffmvdzldtnjlfamgci.supabase.co/functions/v1/generate-article',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZmZtdmR6bGR0bmpsZmFtZ2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyNjU3NzgsImV4cCI6MjA4Nzg0MTc3OH0.h2qbGoWPTaSngg-c89-M0Sn8vECYhy25sacgxaN7eQc"}'::jsonb,
    body := '{}'::jsonb,
    timeout_milliseconds := 30000
  )
  $$
);
