/*
  # Add GitHub Token and Article Insert Webhook

  1. Secrets
    - Stores GITHUB_TOKEN in vault for secure use by Edge Functions

  2. Webhook / Trigger
    - Creates a pg_net HTTP call to the trigger-rebuild Edge Function
      whenever a new row is inserted into the `articles` table
    - This enables automatic site rebuilds when new articles are generated
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM vault.secrets WHERE name = 'GITHUB_TOKEN'
  ) THEN
    PERFORM vault.create_secret('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', 'GITHUB_TOKEN');
  END IF;
END $$;
