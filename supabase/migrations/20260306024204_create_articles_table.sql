/*
  # Create articles table for BrazilRemit blog

  1. New Tables
    - `articles`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL-friendly identifier like "mar-06"
      - `tag` (text) - Article category: Market, Guide, Economy, etc.
      - `published_date` (date) - Publication date
      - `image_url` (text) - Pexels image URL
      - `title_en`, `title_zh`, `title_pt` (text) - Trilingual titles
      - `excerpt_en`, `excerpt_zh`, `excerpt_pt` (text) - Trilingual excerpts
      - `body_en`, `body_zh`, `body_pt` (text) - Trilingual HTML body content
      - `prev_slug` (text, nullable) - Previous article slug for navigation
      - `next_slug` (text, nullable) - Next article slug for navigation
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `articles` table
    - Public read access (articles are public content)
    - No write access from client side (writes happen via service role in edge functions)

  3. Indexes
    - Index on `published_date` for sorting
    - Index on `slug` for lookups
*/

CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  tag text NOT NULL DEFAULT 'General',
  published_date date NOT NULL,
  image_url text NOT NULL DEFAULT '',
  title_en text NOT NULL DEFAULT '',
  title_zh text NOT NULL DEFAULT '',
  title_pt text NOT NULL DEFAULT '',
  excerpt_en text NOT NULL DEFAULT '',
  excerpt_zh text NOT NULL DEFAULT '',
  excerpt_pt text NOT NULL DEFAULT '',
  body_en text NOT NULL DEFAULT '',
  body_zh text NOT NULL DEFAULT '',
  body_pt text NOT NULL DEFAULT '',
  prev_slug text,
  next_slug text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read articles"
  ON articles FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS articles_published_date_idx ON articles (published_date DESC);
CREATE INDEX IF NOT EXISTS articles_slug_idx ON articles (slug);
