import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const TOPICS = [
  { tag: "Market", topic: "current trends in Brazil's international remittance market" },
  { tag: "Economy", topic: "Brazil's economic indicators affecting remittance senders in 2026" },
  { tag: "Guide", topic: "practical tips for sending money from Brazil internationally" },
  { tag: "Technology", topic: "fintech innovations shaping Brazil's cross-border payment landscape" },
  { tag: "Remittance", topic: "cost comparison of sending money from Brazil to popular destinations" },
  { tag: "Exchange Rates", topic: "BRL exchange rate analysis and what it means for international transfers" },
  { tag: "Culture", topic: "how Brazilian cultural events and diaspora communities affect remittance flows" },
  { tag: "Finance", topic: "regulatory updates from Banco Central do Brasil affecting international transfers" },
  { tag: "Tips", topic: "strategies to minimize fees and maximize value when sending money from Brazil" },
  { tag: "Diaspora", topic: "stories and financial strategies of Brazilian communities abroad" },
];

const PEXELS_IMAGES: Record<string, string> = {
  Market: "https://images.pexels.com/photos/1796743/pexels-photo-1796743.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  Economy: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  Guide: "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  Technology: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  Remittance: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  "Exchange Rates": "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  Culture: "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  Finance: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  Tips: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  Diaspora: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
};

const PANDAREMIT_LINKS = {
  china: 'https://www.pandaremit.com/en/bra/send-money-to-china',
  usa: 'https://www.pandaremit.com/en/bra/send-money-to-unitedstates',
  hongkong: 'https://www.pandaremit.com/en/bra/send-money-to-hongkong',
  singapore: 'https://www.pandaremit.com/en/bra/send-money-to-singapore',
  japan: 'https://www.pandaremit.com/en/bra/send-money-to-japan',
  portugal: 'https://www.pandaremit.com/en/bra/send-money-to-portugal',
  uk: 'https://www.pandaremit.com/en/bra/send-money-to-unitedkingdom',
};

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60)
    .replace(/-$/, '') + '-' + Date.now();
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const topicEntry = TOPICS[Math.floor(Math.random() * TOPICS.length)];
    const today = new Date().toISOString().split('T')[0];

    const linksContext = Object.entries(PANDAREMIT_LINKS)
      .map(([dest, url]) => `${dest}: <a href="${url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.charAt(0).toUpperCase() + dest.slice(1)}</a>`)
      .join('\n');

    const prompt = `You are a financial content writer for BrazilRemit, a website about international money transfers from Brazil. Write a detailed, informative article about: ${topicEntry.topic}.

Requirements:
- Write in a professional but accessible tone
- Include specific facts, figures, and practical advice relevant to 2026
- Naturally reference PandaRemit as a recommended service for sending money from Brazil
- Include 1-2 inline HTML anchor tags using these exact links where relevant:
${linksContext}
- Format the body as clean HTML paragraphs (use <p>, <strong>, <ul>, <li> tags only)
- Each version should be 4-6 paragraphs

Return a JSON object with exactly these fields:
{
  "title_en": "English title (max 80 chars)",
  "title_zh": "Chinese title",
  "title_pt": "Portuguese title",
  "excerpt_en": "English excerpt (1-2 sentences, max 200 chars)",
  "excerpt_zh": "Chinese excerpt",
  "excerpt_pt": "Portuguese excerpt",
  "body_en": "Full article body in English HTML",
  "body_zh": "Full article body in Simplified Chinese HTML",
  "body_pt": "Full article body in Brazilian Portuguese HTML"
}

Return ONLY the JSON object, no markdown code blocks.`;

    const session = new Supabase.ai.Session('claude-haiku-4');
    const aiResponse = await session.run(prompt, {
      mode: 'json',
    });

    let article: Record<string, string>;
    if (typeof aiResponse === 'string') {
      try {
        article = JSON.parse(aiResponse);
      } catch {
        const match = aiResponse.match(/\{[\s\S]*\}/);
        if (!match) {
          return new Response(JSON.stringify({ error: "Failed to parse AI response as JSON", raw: aiResponse }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        article = JSON.parse(match[0]);
      }
    } else {
      article = aiResponse as Record<string, string>;
    }

    const slug = generateSlug(article.title_en);

    const { data: latestArticle } = await supabase
      .from("articles")
      .select("slug")
      .order("published_date", { ascending: false })
      .limit(1)
      .maybeSingle();

    const prevSlug = latestArticle?.slug ?? null;

    const { data: inserted, error: insertError } = await supabase
      .from("articles")
      .insert({
        slug,
        tag: topicEntry.tag,
        published_date: today,
        image_url: PEXELS_IMAGES[topicEntry.tag] ?? PEXELS_IMAGES["Market"],
        title_en: article.title_en,
        title_zh: article.title_zh,
        title_pt: article.title_pt,
        excerpt_en: article.excerpt_en,
        excerpt_zh: article.excerpt_zh,
        excerpt_pt: article.excerpt_pt,
        body_en: article.body_en,
        body_zh: article.body_zh,
        body_pt: article.body_pt,
        prev_slug: prevSlug,
        next_slug: null,
      })
      .select("slug")
      .single();

    if (insertError) {
      return new Response(JSON.stringify({ error: insertError.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (prevSlug) {
      await supabase
        .from("articles")
        .update({ next_slug: inserted.slug })
        .eq("slug", prevSlug);
    }

    return new Response(
      JSON.stringify({ success: true, slug: inserted.slug, tag: topicEntry.tag }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
