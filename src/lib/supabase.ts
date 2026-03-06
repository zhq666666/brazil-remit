const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export interface Article {
  slug: string;
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
}

export async function fetchAllArticles(): Promise<Article[]> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/articles?select=slug,tag,published_date,image_url,title_en,title_zh,title_pt,excerpt_en,excerpt_zh,excerpt_pt,body_en,body_zh,body_pt,prev_slug,next_slug&order=published_date.desc`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );
  if (!res.ok) throw new Error(`Failed to fetch articles: ${res.statusText}`);
  return res.json();
}

export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/articles?slug=eq.${encodeURIComponent(slug)}&select=*&limit=1`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  );
  if (!res.ok) return null;
  const data: Article[] = await res.json();
  return data[0] ?? null;
}
