import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Article {
  id: string;
  slug: string;
  section: string;
  tag: string;
  published_date: string;
  image_url: string;
  title_en: string;
  title_zh: string;
  title_pt: string;
  excerpt_en: string;
  excerpt_zh: string;
  excerpt_pt: string;
  body_en: string;
  body_zh: string;
  body_pt: string;
  prev_slug: string | null;
  next_slug: string | null;
  created_at: string;
}

export async function getArticlesBySection(section: string): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('section', section)
    .order('published_date', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) throw error;
  return data;
}
