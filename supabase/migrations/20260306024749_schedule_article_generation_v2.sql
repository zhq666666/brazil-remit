/*
  # Schedule article generation every 5 minutes

  Uses pg_cron + pg_net to call the generate-article Supabase Edge Function every 5 minutes.

  - Calls the deployed edge function via HTTP POST
  - The function generates a new article using OpenAI and inserts it into the articles table
  - pg_net handles async HTTP so the cron job returns immediately
*/

SELECT cron.schedule(
  'generate-article-every-5-minutes',
  '*/5 * * * *',
  $$
  SELECT net.http_post(
    url := 'https://sqffmvdzldtnjlfamgci.supabase.co/functions/v1/generate-article',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZmZtdmR6bGR0bmpsZmFtZ2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyNjU3NzgsImV4cCI6MjA4Nzg0MTc3OH0.h2qbGoWPTaSngg-c89-M0Sn8vECYhy25sacgxaN7eQc"}'::jsonb,
    body := '{}'::jsonb
  )
  $$
);
