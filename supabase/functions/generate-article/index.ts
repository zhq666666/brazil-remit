import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const ARTICLE_TOPICS = [
  { tag: "Economy", topicEn: "BRL exchange rate movements and impact on remittances", topicZh: "巴西雷亚尔汇率波动对汇款的影响", topicPt: "Movimentos da taxa de câmbio do BRL e impacto nas remessas" },
  { tag: "Technology", topicEn: "Digital payment innovations for Brazil cross-border transfers", topicZh: "巴西跨境转账的数字支付创新", topicPt: "Inovações em pagamentos digitais para transferências internacionais do Brasil" },
  { tag: "Diaspora", topicEn: "Brazilian communities abroad and their remittance habits", topicZh: "海外巴西侨民社区及其汇款习惯", topicPt: "Comunidades brasileiras no exterior e seus hábitos de remessas" },
  { tag: "Finance", topicEn: "Cost comparison: sending money from Brazil to Asia", topicZh: "比较：从巴西向亚洲汇款的成本", topicPt: "Comparação de custos: enviando dinheiro do Brasil para a Ásia" },
  { tag: "Regulation", topicEn: "Banco Central do Brasil new rules for international transfers", topicZh: "巴西中央银行国际转账新规", topicPt: "Novas regras do Banco Central do Brasil para transferências internacionais" },
  { tag: "Market", topicEn: "Top remittance corridors from Brazil: trends and tips", topicZh: "巴西主要汇款走廊：趋势与技巧", topicPt: "Principais corredores de remessas do Brasil: tendências e dicas" },
  { tag: "Culture", topicEn: "How Brazilian holidays affect international money transfers", topicZh: "巴西节假日如何影响国际汇款", topicPt: "Como os feriados brasileiros afetam as transferências internacionais" },
  { tag: "Tips", topicEn: "Best strategies to maximize your BRL when sending abroad", topicZh: "向海外汇款时最大化巴西雷亚尔价值的最佳策略", topicPt: "Melhores estratégias para maximizar seu BRL ao enviar para o exterior" },
  { tag: "Economy", topicEn: "Brazil's trade balance and its effect on the real exchange rate", topicZh: "巴西贸易平衡及其对雷亚尔汇率的影响", topicPt: "Balança comercial do Brasil e seu efeito na taxa de câmbio do real" },
  { tag: "Finance", topicEn: "Hidden fees in international bank transfers from Brazil", topicZh: "从巴西进行国际银行转账的隐性费用", topicPt: "Taxas ocultas em transferências bancárias internacionais do Brasil" },
  { tag: "Technology", topicEn: "Mobile apps revolutionizing how Brazilians send money home", topicZh: "手机应用程序如何革命性地改变巴西人的汇款方式", topicPt: "Aplicativos móveis revolucionando como os brasileiros enviam dinheiro" },
  { tag: "Market", topicEn: "Remittance flows from Brazil to China: a growing corridor", topicZh: "从巴西到中国的汇款流：一个不断增长的走廊", topicPt: "Fluxos de remessas do Brasil para a China: um corredor crescente" },
];

const PEXELS_IMAGES = [
  "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  "https://images.pexels.com/photos/1796743/pexels-photo-1796743.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  "https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  "https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

async function generateArticleWithAI(topic: typeof ARTICLE_TOPICS[0], openaiKey: string) {
  const prompt = `You are a professional financial journalist specializing in Brazil remittance and international money transfers.

Write a detailed article about: "${topic.topicEn}"

Return a JSON object with exactly these fields:
{
  "title_en": "Engaging English title (max 80 chars)",
  "title_zh": "Chinese title translation",
  "title_pt": "Portuguese title translation",
  "excerpt_en": "2-sentence English summary (max 200 chars)",
  "excerpt_zh": "2-sentence Chinese summary",
  "excerpt_pt": "2-sentence Portuguese summary",
  "body_en": "Full HTML article body in English (4-6 paragraphs, use <p> tags, include relevant context about sending money from Brazil to destinations like China, Hong Kong, Singapore, Japan, USA, UK)",
  "body_zh": "Full HTML article body in Chinese (same structure)",
  "body_pt": "Full HTML article body in Portuguese (same structure)"
}

Make the content informative, current (March 2026), and relevant to people sending money from Brazil internationally. Include practical tips where appropriate.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${openaiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenAI API error: ${err}`);
  }

  const data = await response.json();
  return JSON.parse(data.choices[0].message.content);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const openaiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openaiKey) {
      return new Response(
        JSON.stringify({ error: "OPENAI_API_KEY not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { data: existing } = await supabase
      .from("articles")
      .select("tag")
      .eq("section", "today-brazil")
      .order("created_at", { ascending: false })
      .limit(5);

    const recentTags = (existing ?? []).map((a: { tag: string }) => a.tag);
    const availableTopics = ARTICLE_TOPICS.filter((t) => !recentTags.includes(t.tag));
    const topicPool = availableTopics.length > 0 ? availableTopics : ARTICLE_TOPICS;
    const topic = topicPool[Math.floor(Math.random() * topicPool.length)];

    const generated = await generateArticleWithAI(topic, openaiKey);

    const now = new Date();
    const dateStr = now.toISOString().split("T")[0];
    const timestamp = now.getTime();
    const baseSlug = slugify(generated.title_en);
    const slug = `${baseSlug}-${timestamp}`;

    const imageUrl = PEXELS_IMAGES[Math.floor(Math.random() * PEXELS_IMAGES.length)];

    const { data: latestArticle } = await supabase
      .from("articles")
      .select("slug")
      .eq("section", "today-brazil")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    const { data: inserted, error: insertError } = await supabase
      .from("articles")
      .insert({
        slug,
        section: "today-brazil",
        tag: topic.tag,
        published_date: dateStr,
        image_url: imageUrl,
        title_en: generated.title_en,
        title_zh: generated.title_zh,
        title_pt: generated.title_pt,
        excerpt_en: generated.excerpt_en,
        excerpt_zh: generated.excerpt_zh,
        excerpt_pt: generated.excerpt_pt,
        body_en: generated.body_en,
        body_zh: generated.body_zh,
        body_pt: generated.body_pt,
        prev_slug: latestArticle?.slug ?? null,
        next_slug: null,
      })
      .select()
      .single();

    if (insertError) {
      throw new Error(`Insert error: ${insertError.message}`);
    }

    if (latestArticle?.slug) {
      await supabase
        .from("articles")
        .update({ next_slug: slug })
        .eq("slug", latestArticle.slug);
    }

    return new Response(
      JSON.stringify({ success: true, article: { slug, title_en: generated.title_en } }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
