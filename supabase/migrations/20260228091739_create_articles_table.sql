/*
  # Create articles table for Today's Brazil blog

  ## Summary
  Creates a multilingual articles table to store Today's Brazil blog posts,
  replacing the hardcoded static arrays in the Astro pages.

  ## New Tables
  - `articles`
    - `id` (uuid, primary key)
    - `slug` (text, unique) - URL-friendly identifier, e.g. "feb-20"
    - `section` (text) - which section this belongs to, e.g. "today-brazil"
    - `tag` (text) - article category tag
    - `published_date` (date) - publication date
    - `image_url` (text) - Pexels image URL
    - `title_en` / `title_zh` / `title_pt` - multilingual titles
    - `excerpt_en` / `excerpt_zh` / `excerpt_pt` - multilingual excerpts
    - `body_en` / `body_zh` / `body_pt` - multilingual full HTML content
    - `prev_slug` / `next_slug` - navigation between articles
    - `created_at` (timestamptz)

  ## Security
  - Enable RLS on `articles` table
  - Public SELECT policy: anyone can read published articles (public content)
  - No INSERT/UPDATE/DELETE for anonymous users
*/

CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  section text NOT NULL DEFAULT 'today-brazil',
  tag text NOT NULL DEFAULT '',
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

CREATE POLICY "Public can read articles"
  ON articles FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can read articles"
  ON articles FOR SELECT
  TO authenticated
  USING (true);
