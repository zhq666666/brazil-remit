import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const ARTICLES = [
  {
    tag: "Economy",
    imageUrl: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    title_en: "BRL Exchange Rate in March 2026: What Senders Need to Know",
    title_zh: "2026年3月巴西雷亚尔汇率：汇款人必知要点",
    title_pt: "Taxa de Câmbio do BRL em Março de 2026: O Que os Remetentes Precisam Saber",
    excerpt_en: "The Brazilian real has stabilized around BRL 5.7 per USD in early 2026, creating favorable conditions for Brazilians sending money abroad. Understanding the rate dynamics can help you time your transfers for maximum value.",
    excerpt_zh: "2026年初，巴西雷亚尔汇率稳定在约5.7雷亚尔兑1美元，为巴西人向海外汇款创造了有利条件。了解汇率动态可以帮助你把握最佳汇款时机。",
    excerpt_pt: "O real brasileiro estabilizou-se em torno de BRL 5,7 por USD no início de 2026, criando condições favoráveis para brasileiros enviando dinheiro ao exterior. Entender a dinâmica da taxa pode ajudá-lo a cronometrar suas transferências.",
    body_en: `<p>The Brazilian real (BRL) has shown notable resilience in early 2026, hovering around BRL 5.65–5.75 per US dollar. This relative stability comes after a period of volatility driven by global commodity price shifts and domestic monetary policy decisions. For Brazilians sending money internationally, understanding this dynamic is crucial for maximizing the value of each transfer.</p>

<h2>Current Rate Environment</h2>
<p>As of March 2026, the BRL/USD rate sits at approximately 5.70, while BRL/EUR stands near 6.20 and BRL/CNY at around 0.79. These rates represent a meaningful improvement compared to the highs seen in late 2024, when the real weakened significantly against most major currencies. The Central Bank of Brazil's (Banco Central) consistent monetary policy has played a key role in anchoring expectations.</p>

<h2>Factors Driving the BRL</h2>
<p>Several macroeconomic forces are shaping the real's trajectory. Brazil's robust agricultural export sector — particularly soybeans, beef, and coffee — continues to generate strong foreign currency inflows. In January and February 2026 alone, agribusiness exports rose 12% year-on-year, underpinning demand for BRL in international currency markets. Meanwhile, foreign direct investment into Brazil's growing fintech and green energy sectors adds further support.</p>

<p>On the downside, Brazil's relatively high public debt ratio and the Selic rate at 13.75% continue to weigh on growth expectations. Inflation, while now within the official 3–4.5% target band at 4.1%, remains a key variable that the Banco Central monitors closely before any rate adjustment.</p>

<h2>Impact on Remittance Senders</h2>
<p>For Brazilians living in the US, UK, China, Japan, Singapore, or Portugal, the current exchange rate environment has a direct impact on how much value arrives in Brazil. A sender in the United States remitting USD 500 will deliver approximately BRL 2,850 to a recipient in Brazil at current rates — a meaningful amount for covering monthly household expenses, education fees, or medical costs.</p>

<p>Timing matters. Exchange rates fluctuate daily based on global risk sentiment, Brazilian economic data releases, and US Federal Reserve communications. Using rate-alert tools offered by modern remittance platforms allows senders to lock in favorable rates rather than transacting at unfavorable moments.</p>

<h2>Practical Tips for Senders</h2>
<p>Consider using specialist remittance services rather than traditional banks for international transfers. Companies focused on BRL corridors typically offer exchange rates 2–4% better than high-street banks, and transfer fees are often lower. For larger amounts, some platforms offer forward contracts — locking in today's rate for a transfer executed in the future — which can be valuable when the rate is particularly favorable.</p>

<p>As Brazil heads deeper into 2026, currency analysts broadly expect the BRL to remain in the 5.5–6.0 range against the dollar, barring major global shocks. This window provides a relatively predictable environment for planning regular international transfers.</p>`,
    body_zh: `<p>2026年初，巴西雷亚尔（BRL）展现出显著韧性，徘徊在1美元兑5.65至5.75雷亚尔之间。这一相对稳定局面出现在全球大宗商品价格波动和国内货币政策调整所引发的动荡之后。对于向海外汇款的巴西人而言，了解这一动态对于最大化每笔转账的价值至关重要。</p>

<h2>当前汇率环境</h2>
<p>截至2026年3月，巴西雷亚尔兑美元汇率约为5.70，兑欧元约为6.20，兑人民币约为0.79。与2024年底雷亚尔大幅贬值时的高点相比，这些汇率已有显著改善。巴西中央银行一贯的货币政策在稳定市场预期方面发挥了关键作用。</p>

<h2>影响雷亚尔的因素</h2>
<p>多种宏观经济力量正在塑造雷亚尔的走势。巴西强劲的农业出口部门——特别是大豆、牛肉和咖啡——持续产生强劲的外汇流入。仅2026年1月和2月，农业出口就同比增长12%，为国际货币市场上雷亚尔需求提供了支撑。与此同时，流入巴西金融科技和绿色能源领域的外商直接投资也进一步提供了支持。</p>

<p>不利方面，巴西相对较高的公共债务比率以及13.75%的Selic利率继续制约增长预期。通胀率虽已回落至官方目标区间3至4.5%内的4.1%，但仍是巴西央行在任何利率调整前密切监测的关键变量。</p>

<h2>对汇款人的影响</h2>
<p>对于居住在美国、英国、中国、日本、新加坡或葡萄牙的巴西人，当前汇率环境直接影响汇款到达巴西时的价值。按当前汇率，在美国汇出500美元将为巴西收款人送达约2850雷亚尔——这对于支付每月家庭开销、教育费用或医疗费用来说是一笔相当可观的金额。</p>

<p>时机很重要。汇率每天随全球风险情绪、巴西经济数据发布以及美联储通讯而波动。利用现代汇款平台提供的汇率提醒工具，汇款人可以锁定有利汇率，避免在不利时机进行交易。</p>

<h2>给汇款人的实用建议</h2>
<p>考虑使用专业汇款服务而非传统银行进行国际转账。专注于雷亚尔走廊的公司通常提供比商业银行高出2至4个百分点的汇率，且转账费用通常更低。对于较大金额，一些平台提供远期合约——锁定当前汇率以便未来执行转账——当汇率特别有利时，这一工具非常有价值。</p>

<p>随着巴西进入2026年深处，货币分析师普遍预计雷亚尔兑美元将维持在5.5至6.0区间内，除非发生重大全球冲击。这一窗口为规划定期国际转账提供了相对可预测的环境。</p>`,
    body_pt: `<p>O real brasileiro (BRL) demonstrou resiliência notável no início de 2026, oscilando em torno de BRL 5,65–5,75 por dólar americano. Esta estabilidade relativa surge após um período de volatilidade impulsionado por mudanças nos preços globais de commodities e decisões de política monetária doméstica. Para brasileiros enviando dinheiro internacionalmente, entender esta dinâmica é crucial para maximizar o valor de cada transferência.</p>

<h2>Ambiente de Taxa Atual</h2>
<p>Em março de 2026, a taxa BRL/USD está em aproximadamente 5,70, enquanto BRL/EUR está perto de 6,20 e BRL/CNY em torno de 0,79. Essas taxas representam uma melhoria significativa em comparação com as máximas vistas no final de 2024, quando o real se enfraqueceu significativamente frente à maioria das principais moedas. A política monetária consistente do Banco Central do Brasil desempenhou papel fundamental na ancoragem das expectativas.</p>

<h2>Fatores que Impulsionam o BRL</h2>
<p>Várias forças macroeconômicas estão moldando a trajetória do real. O robusto setor de exportação agrícola do Brasil — particularmente soja, carne bovina e café — continua gerando fortes entradas de moeda estrangeira. Apenas em janeiro e fevereiro de 2026, as exportações do agronegócio cresceram 12% em relação ao ano anterior, sustentando a demanda por BRL nos mercados de câmbio internacionais. Enquanto isso, o investimento estrangeiro direto nos setores de fintech e energia verde do Brasil adiciona suporte adicional.</p>

<p>No lado negativo, a relação dívida pública/PIB relativamente alta do Brasil e a taxa Selic em 13,75% continuam pesando sobre as expectativas de crescimento. A inflação, embora agora dentro da faixa-alvo oficial de 3–4,5% em 4,1%, permanece uma variável-chave que o Banco Central monitora de perto antes de qualquer ajuste de taxa.</p>

<h2>Impacto nos Remetentes</h2>
<p>Para brasileiros que vivem nos EUA, Reino Unido, China, Japão, Cingapura ou Portugal, o ambiente de taxa de câmbio atual tem impacto direto em quanto valor chega ao Brasil. Um remetente nos Estados Unidos enviando USD 500 entregará aproximadamente BRL 2.850 a um beneficiário no Brasil às taxas atuais — um valor significativo para cobrir despesas domésticas mensais, mensalidades escolares ou custos médicos.</p>

<p>O tempo importa. As taxas de câmbio flutuam diariamente com base no sentimento de risco global, divulgações de dados econômicos brasileiros e comunicações do Federal Reserve dos EUA. Usar ferramentas de alerta de taxa oferecidas por plataformas modernas de remessas permite que os remetentes travem taxas favoráveis em vez de transacionar em momentos desfavoráveis.</p>

<h2>Dicas Práticas para Remetentes</h2>
<p>Considere usar serviços especializados de remessas em vez de bancos tradicionais para transferências internacionais. Empresas focadas em corredores BRL tipicamente oferecem taxas de câmbio 2–4% melhores do que bancos comerciais, e as taxas de transferência costumam ser menores. Para valores maiores, algumas plataformas oferecem contratos a termo — travando a taxa de hoje para uma transferência executada no futuro — o que pode ser valioso quando a taxa é particularmente favorável.</p>

<p>À medida que o Brasil avança em 2026, analistas de câmbio amplamente esperam que o BRL permaneça na faixa de 5,5–6,0 frente ao dólar, salvo grandes choques globais. Esta janela fornece um ambiente relativamente previsível para planejar transferências internacionais regulares.</p>`,
  },
  {
    tag: "Technology",
    imageUrl: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    title_en: "PIX and the Future of Brazil's International Payment Ecosystem",
    title_zh: "PIX与巴西国际支付生态系统的未来",
    title_pt: "PIX e o Futuro do Ecossistema de Pagamentos Internacionais do Brasil",
    excerpt_en: "Brazil's PIX instant payment system now processes over 4 billion transactions monthly and is beginning to extend its reach into cross-border remittances. Here's how this is changing the landscape for Brazilians abroad.",
    excerpt_zh: "巴西PIX即时支付系统现在每月处理超过40亿笔交易，并开始将覆盖范围扩展到跨境汇款。以下是这一变革对海外巴西人的影响。",
    excerpt_pt: "O sistema de pagamentos instantâneos PIX do Brasil agora processa mais de 4 bilhões de transações mensalmente e está começando a expandir seu alcance para remessas internacionais. Veja como isso está mudando o panorama.",
    body_en: `<p>When Brazil's Central Bank launched PIX in November 2020, few anticipated how rapidly it would transform the country's financial ecosystem. By March 2026, PIX processes over 4 billion transactions per month, making Brazil one of the world's leading nations in real-time payments infrastructure. Now, the focus is turning outward — toward using PIX as the backbone of a new generation of international remittance services.</p>

<h2>PIX's Domestic Success Story</h2>
<p>PIX's adoption has been nothing short of extraordinary. Within just five years of launch, virtually every Brazilian with a bank or digital wallet account uses PIX for everyday payments. The system operates 24/7, settles in under 10 seconds, and is free for individuals. This has democratized financial access, bringing millions of previously underserved Brazilians into the formal financial system.</p>

<p>The Open Finance initiative, launched alongside PIX, has created a thriving ecosystem of over 800 fintechs building on top of Brazil's payment rails. These companies are now turning their attention to the international corridor — particularly the significant remittance flows between Brazil and destinations such as the United States, Portugal, China, Japan, and Singapore.</p>

<h2>PIX Going International</h2>
<p>In 2025 and 2026, several Brazilian fintech companies and international money transfer operators have begun integrating PIX as the last-mile delivery mechanism for inbound remittances. This means that when a Brazilian in London sends money home, the recipient in São Paulo or Belo Horizonte can receive it directly into their PIX key — their CPF number, phone number, or email — in near real-time.</p>

<p>The impact on transfer speed has been dramatic. Previously, bank-to-bank international transfers to Brazil could take 2–5 business days and incur significant fees at each end. PIX-enabled remittance services can now deliver funds in under an hour, sometimes within minutes, at considerably lower total costs.</p>

<h2>What This Means for the Diaspora</h2>
<p>For the estimated 4.5 million Brazilians living abroad, PIX integration into international transfer platforms represents a major quality-of-life improvement. Sending money home no longer requires recipients to share bank account details or navigate complex SWIFT wire instructions. A simple PIX key is sufficient. This ease of use is especially valuable for elderly relatives or those with limited banking experience.</p>

<p>Remittance corridors benefiting most from PIX integration include Brazil–USA, Brazil–UK, Brazil–Portugal, Brazil–Japan, and Brazil–China. Transfer platforms operating in these corridors report significantly higher customer satisfaction scores and lower support ticket volumes since integrating PIX delivery.</p>

<h2>Looking Ahead</h2>
<p>The Banco Central is actively working on bilateral PIX interoperability agreements with payment systems in other countries. A potential PIX-to-PayNow (Singapore) or PIX-to-FPS (UK) integration would further slash the cost and friction of international transfers. While regulatory timelines remain uncertain, the direction of travel is clear: Brazil's domestic payment revolution is going global, and the diaspora stands to benefit enormously.</p>`,
    body_zh: `<p>2020年11月巴西中央银行推出PIX时，几乎没有人预料到它会如此迅速地改变巴西的金融生态系统。到2026年3月，PIX每月处理超过40亿笔交易，使巴西成为全球实时支付基础设施领域的领先国家之一。现在，目光开始转向国际——将PIX作为新一代国际汇款服务的骨干。</p>

<h2>PIX的国内成功故事</h2>
<p>PIX的采用速度堪称非凡。仅在推出五年内，几乎每位拥有银行账户或数字钱包的巴西人都在日常支付中使用PIX。该系统全天候运行，10秒内结算，个人使用免费。这使金融服务民主化，将数百万此前未获充分服务的巴西人纳入正规金融体系。</p>

<p>与PIX同步推出的开放金融计划，在巴西支付基础设施之上创建了一个拥有800多家金融科技公司的繁荣生态系统。这些公司现在将目光转向国际走廊——特别是巴西与美国、葡萄牙、中国、日本和新加坡之间的重要汇款流。</p>

<h2>PIX走向国际</h2>
<p>2025年和2026年，多家巴西金融科技公司和国际汇款运营商开始将PIX整合为入境汇款的最后一公里配送机制。这意味着当伦敦的巴西人汇款回国时，圣保罗或贝洛奥里藏特的收款人可以近实时地直接收到汇款到他们的PIX密钥——他们的CPF号码、手机号码或电子邮件。</p>

<p>转账速度的提升是显著的。以前，到巴西的银行间国际转账可能需要2至5个工作日，并在每个节点产生大量费用。支持PIX的汇款服务现在可以在一小时内、有时在几分钟内完成资金交付，总成本大幅降低。</p>

<h2>对侨民的意义</h2>
<p>对于估计450万在海外生活的巴西人，PIX融入国际转账平台代表着生活质量的重大改善。汇款回国不再需要收款人提供银行账户详情或navigating复杂的SWIFT电汇说明。一个简单的PIX密钥就足够了。这种易用性对于老年亲属或银行经验有限的人尤为珍贵。</p>

<p>从PIX整合中获益最多的汇款走廊包括巴西—美国、巴西—英国、巴西—葡萄牙、巴西—日本和巴西—中国。在这些走廊运营的转账平台报告称，自整合PIX交付以来，客户满意度大幅提升，支持工单量显著下降。</p>

<h2>展望未来</h2>
<p>巴西中央银行正在积极推进与其他国家支付系统的双边PIX互操作协议。PIX与PayNow（新加坡）或PIX与FPS（英国）的潜在整合将进一步降低国际转账的成本和摩擦。尽管监管时间表仍不确定，但发展方向很明确：巴西的国内支付革命正在走向全球，侨民将从中受益巨大。</p>`,
    body_pt: `<p>Quando o Banco Central do Brasil lançou o PIX em novembro de 2020, poucos antecipavam com que rapidez ele transformaria o ecossistema financeiro do país. Em março de 2026, o PIX processa mais de 4 bilhões de transações por mês, tornando o Brasil um dos países líderes mundiais em infraestrutura de pagamentos em tempo real. Agora, o foco está se voltando para fora — para usar o PIX como espinha dorsal de uma nova geração de serviços de remessas internacionais.</p>

<h2>A História de Sucesso Doméstico do PIX</h2>
<p>A adoção do PIX foi nada menos que extraordinária. Em apenas cinco anos após o lançamento, praticamente todo brasileiro com conta bancária ou carteira digital usa o PIX para pagamentos cotidianos. O sistema opera 24/7, liquida em menos de 10 segundos e é gratuito para pessoas físicas. Isso democratizou o acesso financeiro, trazendo milhões de brasileiros anteriormente desatendidos para o sistema financeiro formal.</p>

<p>A iniciativa Open Finance, lançada junto com o PIX, criou um ecossistema florescente de mais de 800 fintechs construindo sobre os trilhos de pagamento do Brasil. Essas empresas agora estão voltando sua atenção para o corredor internacional — particularmente os fluxos significativos de remessas entre o Brasil e destinos como Estados Unidos, Portugal, China, Japão e Cingapura.</p>

<h2>PIX Indo Internacional</h2>
<p>Em 2025 e 2026, diversas empresas brasileiras de fintech e operadoras de transferência de dinheiro internacional começaram a integrar o PIX como mecanismo de entrega de última milha para remessas de entrada. Isso significa que quando um brasileiro em Londres envia dinheiro para casa, o beneficiário em São Paulo ou Belo Horizonte pode recebê-lo diretamente em sua chave PIX — CPF, número de telefone ou e-mail — em tempo quase real.</p>

<p>O impacto na velocidade de transferência foi dramático. Anteriormente, transferências internacionais banco a banco para o Brasil podiam levar 2–5 dias úteis e incorrer em taxas significativas em cada ponta. Serviços de remessa habilitados para PIX agora podem entregar fundos em menos de uma hora, às vezes em minutos, com custos totais consideravelmente menores.</p>

<h2>O Que Isso Significa para a Diáspora</h2>
<p>Para os estimados 4,5 milhões de brasileiros que vivem no exterior, a integração do PIX em plataformas de transferência internacional representa uma grande melhoria de qualidade de vida. Enviar dinheiro para casa não requer mais que os beneficiários compartilhem detalhes de conta bancária ou naveguem por instruções complexas de transferência SWIFT. Uma chave PIX simples é suficiente. Esta facilidade de uso é especialmente valiosa para parentes idosos ou aqueles com experiência bancária limitada.</p>

<p>Os corredores de remessas que mais se beneficiam da integração PIX incluem Brasil–EUA, Brasil–Reino Unido, Brasil–Portugal, Brasil–Japão e Brasil–China. Plataformas de transferência operando nesses corredores relatam pontuações de satisfação do cliente significativamente maiores e volumes menores de tickets de suporte desde a integração da entrega via PIX.</p>

<h2>Olhando para o Futuro</h2>
<p>O Banco Central está trabalhando ativamente em acordos bilaterais de interoperabilidade do PIX com sistemas de pagamento em outros países. Uma potencial integração PIX-para-PayNow (Cingapura) ou PIX-para-FPS (Reino Unido) reduziria ainda mais o custo e o atrito das transferências internacionais. Embora os prazos regulatórios permaneçam incertos, a direção do caminho é clara: a revolução de pagamentos domésticos do Brasil está indo global, e a diáspora tem muito a ganhar.</p>`,
  },
  {
    tag: "Diaspora",
    imageUrl: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    title_en: "Brazilian Communities Abroad: Remittance Habits and Trends in 2026",
    title_zh: "海外巴西社区：2026年汇款习惯与趋势",
    title_pt: "Comunidades Brasileiras no Exterior: Hábitos e Tendências de Remessas em 2026",
    excerpt_en: "With 4.5 million Brazilians living abroad, remittances play a vital role in supporting families back home. New research reveals how sending habits are evolving across different diaspora communities.",
    excerpt_zh: "随着450万巴西人生活在海外，汇款在支持国内家庭方面发挥着至关重要的作用。新研究揭示了不同侨民社区汇款习惯的演变趋势。",
    excerpt_pt: "Com 4,5 milhões de brasileiros vivendo no exterior, as remessas desempenham papel vital no sustento de famílias no Brasil. Nova pesquisa revela como os hábitos de envio estão evoluindo entre as comunidades da diáspora.",
    body_en: `<p>Brazil's diaspora is one of the most economically significant in Latin America. With an estimated 4.5 million Brazilians living outside the country — primarily in the United States, Portugal, the United Kingdom, Japan, Italy, and increasingly in China and Singapore — remittance flows represent a vital financial lifeline for millions of families. In 2025, total remittances to Brazil exceeded USD 4.8 billion, a figure that continues to grow steadily.</p>

<h2>Where Brazilians Live and Send From</h2>
<p>The United States remains the largest source of remittances to Brazil, accounting for approximately 35% of total inflows. The Brazilian communities in Florida, Massachusetts, and New York are particularly active senders. Portugal has grown substantially as a destination for Brazilian emigrants following expanded visa access, and the Brazilian community there now exceeds 500,000 people. Japan hosts an estimated 210,000 Brazilians — descendants of the early 20th-century immigration wave — who maintain strong financial ties to Brazil.</p>

<p>In Asia, Singapore and Hong Kong have seen growing Brazilian professional communities, particularly in finance, technology, and education sectors. These tend to be higher earners sending larger individual transfers less frequently, contrasted with the higher-frequency, smaller-value transfers typical of working-class communities in the US and Portugal.</p>

<h2>How Sending Habits Are Changing</h2>
<p>The shift toward digital remittance platforms has accelerated dramatically. Five years ago, many Brazilians abroad still relied on traditional bank wires or in-person money transfer agents. Today, over 70% of remittances from the US to Brazil are sent via app-based platforms. This trend is even more pronounced among younger senders — Brazilians aged 18–35 overwhelmingly prefer mobile-first solutions.</p>

<p>Transfer frequency is also changing. Rather than sending large lump sums monthly, many senders now prefer smaller, more frequent transfers enabled by the low transaction costs of modern platforms. This mirrors the needs of recipients who can use PIX to access funds immediately as needed, rather than budgeting around a single monthly payment.</p>

<h2>What Recipients Use Remittances For</h2>
<p>Research consistently shows that remittances to Brazil are primarily used for household consumption — food, utilities, and housing — accounting for roughly 65% of funds received. Education (school fees, university tuition, private tutoring) accounts for approximately 15%, healthcare for 10%, and savings or investment for the remaining 10%. The investment share is growing as Brazil's investment platform ecosystem expands and recipients become more financially literate.</p>

<h2>Challenges Facing the Diaspora</h2>
<p>Despite improvements, challenges remain. Exchange rate volatility continues to create uncertainty for senders planning regular transfers. Tax compliance is a growing concern, particularly for those in the US navigating FBAR and FATCA reporting requirements for Brazilian financial assets. And for the most vulnerable diaspora members — undocumented workers or those in informal employment — access to regulated remittance services remains limited.</p>

<p>Community organizations, fintech companies, and financial regulators are increasingly working together to address these gaps, with initiatives ranging from financial literacy programs to regulatory sandboxes enabling new payment models. The goal is a more inclusive, efficient, and cost-effective system for the millions of Brazilians maintaining vital financial connections across borders.</p>`,
    body_zh: `<p>巴西侨民是拉丁美洲经济影响力最重要的侨民群体之一。估计有450万巴西人生活在海外——主要在美国、葡萄牙、英国、日本、意大利，以及越来越多地在中国和新加坡——汇款流对数百万家庭来说是重要的金融生命线。2025年，汇往巴西的总汇款额超过48亿美元，这一数字持续稳步增长。</p>

<h2>巴西人居住在哪里以及从哪里汇款</h2>
<p>美国仍然是巴西最大的汇款来源，约占总流入量的35%。佛罗里达州、马萨诸塞州和纽约的巴西社区是特别活跃的汇款者。随着签证准入的扩大，葡萄牙已成为巴西移民的重要目的地，当地的巴西社区现在超过50万人。日本估计有21万巴西人——20世纪初移民浪潮的后代——他们与巴西保持着强烈的金融联系。</p>

<p>在亚洲，新加坡和香港的巴西专业人士社区日益壮大，特别是在金融、技术和教育领域。这些人往往收入较高，发送较大金额但频率较低，与美国和葡萄牙工人阶级社区典型的高频率、小额汇款形成对比。</p>

<h2>汇款习惯如何变化</h2>
<p>向数字汇款平台的转变已急剧加速。五年前，许多海外巴西人仍依赖传统银行电汇或现场汇款代理商。如今，超过70%从美国汇往巴西的款项通过基于应用的平台发送。这一趋势在年轻汇款人中更为明显——18至35岁的巴西人压倒性地倾向于移动优先的解决方案。</p>

<p>转账频率也在变化。许多汇款人现在不再每月发送一笔大额款项，而是倾向于通过现代平台的低交易成本实现更小额、更频繁的转账。这与收款人的需求相符——他们可以使用PIX按需即时获取资金，而不必围绕每月一次付款进行预算。</p>

<h2>收款人如何使用汇款</h2>
<p>研究一致表明，汇往巴西的款项主要用于家庭消费——食品、公用事业和住房——约占收到资金的65%。教育（学费、大学学费、私人辅导）约占15%，医疗保健占10%，储蓄或投资占剩余10%。随着巴西投资平台生态系统的扩展和收款人金融素养的提升，投资份额正在增长。</p>

<h2>侨民面临的挑战</h2>
<p>尽管有所改善，挑战依然存在。汇率波动继续为计划定期转账的汇款人制造不确定性。税务合规是日益增长的关注点，特别是对于在美国需要就巴西金融资产进行FBAR和FATCA申报的人。对于最脆弱的侨民成员——无证件工人或非正规就业者——获得受监管汇款服务的渠道仍然有限。</p>

<p>社区组织、金融科技公司和金融监管机构日益携手合作解决这些差距，举措涵盖金融素养项目到支持新支付模式的监管沙盒。目标是为数百万跨境维护重要金融联系的巴西人建立更具包容性、更高效、更具成本效益的体系。</p>`,
    body_pt: `<p>A diáspora brasileira é uma das mais economicamente significativas na América Latina. Com um estimado de 4,5 milhões de brasileiros vivendo fora do país — principalmente nos Estados Unidos, Portugal, Reino Unido, Japão, Itália e, cada vez mais, na China e em Cingapura — os fluxos de remessas representam uma linha vital para milhões de famílias. Em 2025, o total de remessas para o Brasil ultrapassou USD 4,8 bilhões, um valor que continua crescendo de forma constante.</p>

<h2>Onde os Brasileiros Vivem e de Onde Enviam</h2>
<p>Os Estados Unidos permanecem a maior fonte de remessas para o Brasil, respondendo por aproximadamente 35% do total de entradas. As comunidades brasileiras na Flórida, Massachusetts e Nova York são remetentes particularmente ativos. Portugal cresceu substancialmente como destino para emigrantes brasileiros após o acesso expandido a vistos, e a comunidade brasileira lá agora ultrapassa 500.000 pessoas. O Japão abriga um estimado de 210.000 brasileiros — descendentes da onda de imigração do início do século XX — que mantêm fortes laços financeiros com o Brasil.</p>

<p>Na Ásia, Cingapura e Hong Kong viram crescer comunidades de profissionais brasileiros, particularmente nos setores de finanças, tecnologia e educação. Estes tendem a ser de renda mais alta, enviando transferências individuais maiores com menos frequência, em contraste com as transferências de alta frequência e menor valor típicas das comunidades de classe trabalhadora nos EUA e em Portugal.</p>

<h2>Como os Hábitos de Envio Estão Mudando</h2>
<p>A mudança para plataformas digitais de remessas acelerou dramaticamente. Cinco anos atrás, muitos brasileiros no exterior ainda dependiam de transferências bancárias tradicionais ou agentes de transferência presenciais. Hoje, mais de 70% das remessas dos EUA para o Brasil são enviadas via plataformas baseadas em aplicativos. Essa tendência é ainda mais pronunciada entre remetentes mais jovens — brasileiros de 18 a 35 anos preferem esmagadoramente soluções mobile-first.</p>

<p>A frequência de transferência também está mudando. Em vez de enviar grandes somas mensalmente, muitos remetentes agora preferem transferências menores e mais frequentes habilitadas pelos baixos custos de transação das plataformas modernas. Isso espelha as necessidades dos beneficiários que podem usar o PIX para acessar fundos imediatamente conforme necessário, em vez de orçar em torno de um único pagamento mensal.</p>

<h2>Para Que os Beneficiários Usam as Remessas</h2>
<p>Pesquisas mostram consistentemente que as remessas para o Brasil são usadas principalmente para consumo doméstico — alimentação, utilidades e moradia — respondendo por cerca de 65% dos fundos recebidos. Educação (mensalidades escolares, mensalidades universitárias, tutoria particular) responde por aproximadamente 15%, saúde por 10%, e poupança ou investimento pelos 10% restantes. A parcela de investimento está crescendo à medida que o ecossistema de plataformas de investimento do Brasil se expande e os beneficiários se tornam mais instruídos financeiramente.</p>

<h2>Desafios Enfrentados pela Diáspora</h2>
<p>Apesar das melhorias, os desafios persistem. A volatilidade da taxa de câmbio continua criando incerteza para remetentes que planejam transferências regulares. A conformidade fiscal é uma preocupação crescente, particularmente para aqueles nos EUA navegando pelos requisitos de relatório FBAR e FATCA para ativos financeiros brasileiros. E para os membros mais vulneráveis da diáspora — trabalhadores indocumentados ou em emprego informal — o acesso a serviços de remessas regulamentados permanece limitado.</p>

<p>Organizações comunitárias, empresas de fintech e reguladores financeiros estão trabalhando cada vez mais juntos para abordar essas lacunas, com iniciativas que vão de programas de educação financeira a sandboxes regulatórios que permitem novos modelos de pagamento. O objetivo é um sistema mais inclusivo, eficiente e rentável para os milhões de brasileiros que mantêm conexões financeiras vitais através das fronteiras.</p>`,
  },
  {
    tag: "Finance",
    imageUrl: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    title_en: "Sending Money from Brazil to Asia: Costs, Speed, and Best Options",
    title_zh: "从巴西向亚洲汇款：成本、速度与最佳选择",
    title_pt: "Enviando Dinheiro do Brasil para a Ásia: Custos, Velocidade e Melhores Opções",
    excerpt_en: "The Brazil-to-Asia remittance corridor is growing rapidly, driven by business, diaspora, and education flows. Comparing providers can save senders hundreds of reais per transfer.",
    excerpt_zh: "受商业、侨民和教育流动驱动，巴西至亚洲的汇款走廊正在快速增长。比较服务提供商可以为汇款人每笔转账节省数百雷亚尔。",
    excerpt_pt: "O corredor de remessas Brasil–Ásia está crescendo rapidamente, impulsionado por fluxos de negócios, diáspora e educação. Comparar provedores pode economizar centenas de reais por transferência.",
    body_en: `<p>The remittance corridor between Brazil and Asia — encompassing China, Japan, Singapore, and Hong Kong — has grown significantly in recent years, driven by expanding business ties, a growing diaspora, and Brazilian students pursuing education in Asia. Yet many senders still overpay for these transfers, often unaware of the significant cost differences between providers. This guide breaks down the current landscape.</p>

<h2>The Brazil–China Corridor</h2>
<p>China and Brazil have one of the world's largest bilateral trade relationships, and private money flows follow a similar scale. Brazilian business owners importing goods from China, families with relatives studying or working in Chinese cities, and students at Chinese universities all contribute to this corridor's volume. Transfer costs have fallen substantially in recent years as competition among specialist providers has intensified.</p>

<p>A typical bank-to-bank wire from Brazil to China might cost BRL 150–250 in flat fees plus a 2–4% spread on the exchange rate. In contrast, specialist digital transfer services now offer the same transaction for BRL 30–80 in fees with exchange rate spreads of 0.5–1.5%. On a BRL 5,000 transfer, this difference can amount to BRL 150–300 in savings per transaction.</p>

<h2>The Brazil–Japan Corridor</h2>
<p>Japan hosts Brazil's largest Asian diaspora community, estimated at over 210,000 Brazilians of Japanese descent (Nikkei). This community maintains strong financial ties in both directions. The Japan–Brazil corridor benefits from dedicated service providers with experience in this specific market, and transfer costs are generally competitive. Japanese banking regulations require sender identity verification, but the process has been streamlined by digital platforms.</p>

<h2>The Brazil–Singapore and Brazil–Hong Kong Corridors</h2>
<p>These corridors are characterized by smaller volume but higher average transfer amounts, reflecting the professional profiles of Brazilian expatriates in these financial hubs. Transfers in these corridors often relate to business payments, investment flows, or salaries. Both Singapore's PayNow and Hong Kong's FPS instant payment systems are increasingly integrated as delivery rails by global transfer platforms, improving delivery speed significantly.</p>

<h2>How to Compare and Choose a Provider</h2>
<p>The total cost of a transfer is determined by two factors: the upfront fee and the exchange rate margin. Some providers advertise zero fees but apply a wide exchange rate spread; others charge visible fees but offer rates close to the mid-market rate. The only reliable way to compare is to calculate the total BRL amount delivered to the recipient for a given send amount.</p>

<p>Key factors to consider beyond cost include: transfer speed (does the recipient need funds urgently?), supported delivery methods (bank account, digital wallet, cash pickup), payment methods accepted (bank transfer, credit/debit card), and customer support availability. For large or recurring transfers, it is worth contacting providers directly to negotiate rates or ask about business accounts.</p>

<h2>Regulatory Considerations</h2>
<p>All international transfers from Brazil require compliance with Banco Central regulations. For transfers above certain thresholds, documentation of the transfer's purpose may be required. Reputable providers handle this compliance process on behalf of senders. Using unregulated informal channels (known as "doleiros") is illegal and carries significant financial and legal risks — a risk not worth taking when legitimate, cost-effective digital options are readily available.</p>`,
    body_zh: `<p>巴西与亚洲之间的汇款走廊——涵盖中国、日本、新加坡和香港——近年来随着商业往来扩大、侨民社区增长以及巴西留学生赴亚洲求学而显著增长。然而，许多汇款人仍然为这些转账支付过高费用，往往不知道不同服务提供商之间的巨大成本差异。本指南对当前格局进行了详细解析。</p>

<h2>巴西—中国走廊</h2>
<p>中国和巴西拥有全球最大的双边贸易关系之一，私人资金流动规模类似。从中国进口商品的巴西企业主、在中国城市学习或工作的家庭成员，以及在中国大学就读的留学生，共同构成这一走廊的流量。随着专业服务提供商之间竞争加剧，近年来转账成本已大幅下降。</p>

<p>从巴西到中国的典型银行间电汇可能需要150至250雷亚尔的固定费用，加上汇率价差2至4%。相比之下，专业数字转账服务现在仅收取30至80雷亚尔的费用，汇率价差为0.5至1.5%。对于5000雷亚尔的转账，这一差异每笔可节省150至300雷亚尔。</p>

<h2>巴西—日本走廊</h2>
<p>日本拥有巴西最大的亚洲侨民社区，估计有超过21万名日裔巴西人（日本移民后裔）。这一社区在两国之间保持着强烈的金融联系。日本—巴西走廊得益于在这一特定市场经验丰富的专业服务提供商，转账成本总体上具有竞争力。日本银行法规要求汇款人身份验证，但数字平台已简化了这一流程。</p>

<h2>巴西—新加坡和巴西—香港走廊</h2>
<p>这些走廊的特点是交易量较小但平均转账金额较高，反映了在这些金融中心的巴西外籍人士的职业特征。这些走廊的转账通常涉及商业付款、投资流动或薪资。新加坡的PayNow和香港的FPS即时支付系统越来越多地被全球转账平台整合为交付基础设施，显著提高了交付速度。</p>

<h2>如何比较和选择服务提供商</h2>
<p>转账总成本由两个因素决定：前期费用和汇率价差。一些服务提供商宣传零手续费但应用较宽的汇率价差；另一些收取明显费用但提供接近中间市场汇率的价格。唯一可靠的比较方式是计算给定发送金额后收款人实际收到的雷亚尔总额。</p>

<p>除成本外，还需考虑的关键因素包括：转账速度（收款人是否急需资金？）、支持的交付方式（银行账户、数字钱包、现金提取）、接受的付款方式（银行转账、信用/借记卡），以及客户支持的可用性。对于大额或定期转账，值得直接联系服务提供商协商汇率或询问企业账户。</p>

<h2>监管注意事项</h2>
<p>所有从巴西进行的国际转账都需要符合巴西中央银行法规。对于超过一定门槛的转账，可能需要提供转账目的的文件证明。正规服务提供商代表汇款人处理这一合规流程。使用非正规的非正式渠道（称为"doleiros"）是非法的，存在重大财务和法律风险——当合法、具有成本效益的数字选择随时可用时，这一风险完全没必要承担。</p>`,
    body_pt: `<p>O corredor de remessas entre o Brasil e a Ásia — abrangendo China, Japão, Cingapura e Hong Kong — cresceu significativamente nos últimos anos, impulsionado pela expansão dos laços comerciais, uma diáspora crescente e estudantes brasileiros buscando educação na Ásia. No entanto, muitos remetentes ainda pagam demais por essas transferências, muitas vezes sem saber as diferenças significativas de custo entre os provedores. Este guia detalha o cenário atual.</p>

<h2>O Corredor Brasil–China</h2>
<p>China e Brasil têm uma das maiores relações comerciais bilaterais do mundo, e os fluxos de dinheiro privado seguem escala semelhante. Empresários brasileiros importando mercadorias da China, famílias com parentes estudando ou trabalhando em cidades chinesas e estudantes em universidades chinesas contribuem para o volume deste corredor. Os custos de transferência caíram substancialmente nos últimos anos à medida que a concorrência entre provedores especializados se intensificou.</p>

<p>Uma transferência bancária típica do Brasil para a China pode custar BRL 150–250 em taxas fixas mais um spread de 2–4% na taxa de câmbio. Em contraste, serviços de transferência digital especializados agora oferecem a mesma transação por BRL 30–80 em taxas com spreads de taxa de câmbio de 0,5–1,5%. Em uma transferência de BRL 5.000, essa diferença pode representar BRL 150–300 em economia por transação.</p>

<h2>O Corredor Brasil–Japão</h2>
<p>O Japão abriga a maior comunidade da diáspora brasileira asiática, estimada em mais de 210.000 brasileiros de descendência japonesa (Nikkei). Esta comunidade mantém fortes laços financeiros em ambas as direções. O corredor Japão–Brasil se beneficia de provedores de serviços dedicados com experiência neste mercado específico, e os custos de transferência são geralmente competitivos. As regulamentações bancárias japonesas exigem verificação de identidade do remetente, mas o processo foi simplificado por plataformas digitais.</p>

<h2>Os Corredores Brasil–Cingapura e Brasil–Hong Kong</h2>
<p>Esses corredores são caracterizados por menor volume, mas maiores valores médios de transferência, refletindo os perfis profissionais dos expatriados brasileiros nesses centros financeiros. As transferências nesses corredores frequentemente se relacionam a pagamentos comerciais, fluxos de investimento ou salários. Tanto o PayNow de Cingapura quanto o FPS de Hong Kong estão cada vez mais integrados como trilhos de entrega por plataformas de transferência globais, melhorando significativamente a velocidade de entrega.</p>

<h2>Como Comparar e Escolher um Provedor</h2>
<p>O custo total de uma transferência é determinado por dois fatores: a taxa inicial e a margem da taxa de câmbio. Alguns provedores anunciam taxas zero, mas aplicam um spread de taxa de câmbio amplo; outros cobram taxas visíveis, mas oferecem taxas próximas à taxa de mercado médio. A única maneira confiável de comparar é calcular o valor total em BRL entregue ao beneficiário para um determinado valor de envio.</p>

<p>Fatores-chave a considerar além do custo incluem: velocidade de transferência (o beneficiário precisa de fundos urgentemente?), métodos de entrega suportados (conta bancária, carteira digital, retirada em dinheiro), métodos de pagamento aceitos (transferência bancária, cartão de crédito/débito) e disponibilidade de suporte ao cliente. Para transferências grandes ou recorrentes, vale a pena contatar os provedores diretamente para negociar taxas ou perguntar sobre contas corporativas.</p>

<h2>Considerações Regulatórias</h2>
<p>Todas as transferências internacionais do Brasil exigem conformidade com as regulamentações do Banco Central. Para transferências acima de certos limites, pode ser necessária documentação do propósito da transferência. Provedores respeitáveis lidam com esse processo de conformidade em nome dos remetentes. Usar canais informais não regulamentados (conhecidos como "doleiros") é ilegal e carrega riscos financeiros e legais significativos — um risco que não vale a pena correr quando opções digitais legítimas e econômicas estão prontamente disponíveis.</p>`,
  },
  {
    tag: "Regulation",
    imageUrl: "https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    title_en: "Banco Central's 2026 Rules for International Transfers: What Changed",
    title_zh: "巴西中央银行2026年国际转账新规：有哪些变化",
    title_pt: "Regras de 2026 do Banco Central para Transferências Internacionais: O Que Mudou",
    excerpt_en: "The Banco Central do Brasil updated its framework for international money transfers in 2025–2026. Here's what individuals and businesses sending money abroad need to know.",
    excerpt_zh: "巴西中央银行在2025至2026年更新了国际汇款框架。以下是向海外汇款的个人和企业需要了解的内容。",
    excerpt_pt: "O Banco Central do Brasil atualizou seu framework para transferências internacionais de dinheiro em 2025–2026. Veja o que pessoas físicas e jurídicas que enviam dinheiro ao exterior precisam saber.",
    body_en: `<p>Brazil's Banco Central (BCB) has been steadily modernizing the regulatory framework governing international money transfers, part of its broader agenda to integrate Brazil more deeply into global payment networks while maintaining appropriate oversight. The reforms introduced in 2025 and extended into 2026 have meaningful implications for individuals sending money abroad and for businesses managing cross-border financial flows.</p>

<h2>The Old Framework and Its Limitations</h2>
<p>Under Brazil's previous foreign exchange rules — governed primarily by Law 4,131/1962 and subsequent regulations — international transfers were heavily document-intensive and often slow. Even routine personal remittances required bank intervention, detailed purpose-of-payment declarations, and significant compliance overhead. This created a high cost of compliance that was disproportionate for small transfers, discouraging use of formal channels and inadvertently driving some flows to informal or unregulated operators.</p>

<h2>Key Changes Under the New Framework</h2>
<p>The modernized framework significantly reduces paperwork requirements for transfers below BRL 20,000 (approximately USD 3,500). For routine personal transfers in this range, senders now need only provide basic identification and a simplified purpose declaration. This removes a major barrier to using regulated channels for diaspora remittances and small business payments.</p>

<p>For transfers above BRL 500,000, enhanced due diligence requirements remain in place, consistent with international anti-money laundering standards. Documentation of the economic basis for the transfer, source of funds, and recipient details is required. Institutional senders — companies and financial institutions — face more extensive reporting requirements aligned with FATF (Financial Action Task Force) recommendations.</p>

<h2>Licensing for Remittance Platforms</h2>
<p>The new framework also clarifies and streamlines the licensing regime for non-bank payment institutions offering international transfer services. Previously, the regulatory path for fintech companies entering the cross-border payments market was ambiguous, creating barriers to competition. The updated rules create a clearer licensing pathway under the BCB's Payment Institution regulatory framework, which has already enabled several new digital-native remittance platforms to obtain authorization and begin serving customers.</p>

<h2>Open Finance and Data Sharing</h2>
<p>Brazil's Open Finance initiative — which the BCB has been implementing since 2021 — is increasingly intersecting with international transfers. Consented data sharing between financial institutions is now beginning to facilitate faster, cheaper cross-border payments by enabling automated KYC (Know Your Customer) and AML (Anti-Money Laundering) checks. This has the potential to dramatically reduce friction in the compliance process for both senders and providers.</p>

<h2>Implications for Senders</h2>
<p>In practical terms, the regulatory modernization means that Brazilians using reputable digital remittance platforms should experience less documentation friction than in the past, particularly for routine personal transfers. For those sending larger amounts — for property purchases abroad, business investments, or large family support payments — working with a licensed provider experienced in BCB compliance documentation remains important. The regulations are genuinely protective, designed to keep Brazil's financial system safe and internationally reputable, but they are increasingly proportionate to the actual risk of each transaction type.</p>`,
    body_zh: `<p>巴西中央银行（BCB）一直在稳步现代化管理国际汇款的监管框架，这是其更广泛议程的一部分——使巴西更深入地融入全球支付网络，同时保持适当的监管。2025年推出并延伸至2026年的改革对向海外汇款的个人和管理跨境资金流动的企业具有深远影响。</p>

<h2>旧框架及其局限性</h2>
<p>在巴西之前的外汇规则下——主要受1962年第4131号法律及后续法规约束——国际转账文件繁重，往往速度缓慢。即使是常规个人汇款也需要银行介入、详细的付款目的声明以及大量的合规工作。这造成了与小额转账不成比例的高合规成本，不鼓励使用正规渠道，无意中将部分资金流推向非正式或非受监管的运营商。</p>

<h2>新框架下的主要变化</h2>
<p>现代化框架显著降低了20000雷亚尔以下（约3500美元）转账的文件要求。对于此范围内的常规个人转账，汇款人现在只需提供基本身份证明和简化的目的声明。这消除了侨民汇款和小企业付款使用正规渠道的主要障碍。</p>

<p>对于500000雷亚尔以上的转账，增强尽职调查要求仍然适用，与国际反洗钱标准一致。转账的经济基础、资金来源和收款人详情的文件证明是必须的。机构汇款人——公司和金融机构——面临与金融行动特别工作组（FATF）建议相符的更广泛报告要求。</p>

<h2>汇款平台的许可证</h2>
<p>新框架还明确和简化了提供国际转账服务的非银行支付机构的许可证制度。此前，金融科技公司进入跨境支付市场的监管路径模糊，造成了竞争壁垒。更新的规则在BCB的支付机构监管框架下创建了更清晰的许可路径，已使几家数字原生汇款平台获得授权并开始为客户提供服务。</p>

<h2>开放金融与数据共享</h2>
<p>巴西自2021年开始实施的开放金融计划正越来越多地与国际转账交汇。金融机构之间的经同意的数据共享现在开始通过实现自动化KYC（了解你的客户）和AML（反洗钱）检查，促进更快、更便宜的跨境支付。这有潜力大幅降低汇款人和服务提供商合规流程的摩擦。</p>

<h2>对汇款人的影响</h2>
<p>从实际角度来看，监管现代化意味着使用正规数字汇款平台的巴西人在文件方面的摩擦应比以前少，特别是对于常规个人转账。对于汇出较大金额的人——用于海外房产购买、商业投资或大额家庭支持付款——与在BCB合规文件方面经验丰富的持牌服务提供商合作仍然重要。这些法规具有真正的保护性，旨在保持巴西金融体系的安全和国际声誉，但对每种交易类型的实际风险越来越合乎比例。</p>`,
    body_pt: `<p>O Banco Central do Brasil (BCB) tem modernizado constantemente o framework regulatório que governa as transferências internacionais de dinheiro, parte de sua agenda mais ampla para integrar o Brasil mais profundamente nas redes de pagamento globais, mantendo a supervisão adequada. As reformas introduzidas em 2025 e estendidas em 2026 têm implicações significativas para indivíduos que enviam dinheiro ao exterior e empresas que gerenciam fluxos financeiros transfronteiriços.</p>

<h2>O Framework Antigo e Suas Limitações</h2>
<p>Sob as regras anteriores de câmbio do Brasil — governadas principalmente pela Lei 4.131/1962 e regulamentações subsequentes — as transferências internacionais eram muito intensivas em documentos e frequentemente lentas. Mesmo remessas pessoais de rotina exigiam intervenção bancária, declarações detalhadas de finalidade do pagamento e significativa sobrecarga de conformidade. Isso criava um alto custo de conformidade desproporcional para pequenas transferências, desencorajando o uso de canais formais e inadvertidamente direcionando alguns fluxos para operadores informais ou não regulamentados.</p>

<h2>Principais Mudanças sob o Novo Framework</h2>
<p>O framework modernizado reduz significativamente os requisitos de documentação para transferências abaixo de BRL 20.000 (aproximadamente USD 3.500). Para transferências pessoais de rotina nessa faixa, os remetentes agora precisam fornecer apenas identificação básica e uma declaração de propósito simplificada. Isso remove uma barreira importante para o uso de canais regulamentados para remessas da diáspora e pagamentos de pequenas empresas.</p>

<p>Para transferências acima de BRL 500.000, requisitos aprimorados de due diligence permanecem em vigor, consistentes com os padrões internacionais de combate à lavagem de dinheiro. Documentação da base econômica para a transferência, origem dos fundos e detalhes do beneficiário é necessária. Remetentes institucionais — empresas e instituições financeiras — enfrentam requisitos de relatório mais extensivos alinhados com as recomendações do GAFI (Grupo de Ação Financeira).</p>

<h2>Licenciamento para Plataformas de Remessas</h2>
<p>O novo framework também esclarece e simplifica o regime de licenciamento para instituições de pagamento não bancárias que oferecem serviços de transferência internacional. Anteriormente, o caminho regulatório para empresas fintech que entravam no mercado de pagamentos transfronteiriços era ambíguo, criando barreiras à concorrência. As regras atualizadas criam um caminho de licenciamento mais claro sob o framework regulatório de Instituição de Pagamento do BCB, que já permitiu que várias plataformas de remessas digitais nativas obtivessem autorização e começassem a atender clientes.</p>

<h2>Open Finance e Compartilhamento de Dados</h2>
<p>A iniciativa Open Finance do Brasil — que o BCB implementa desde 2021 — está cada vez mais se cruzando com transferências internacionais. O compartilhamento de dados com consentimento entre instituições financeiras agora está começando a facilitar pagamentos transfronteiriços mais rápidos e baratos, permitindo verificações automatizadas de KYC (Conheça Seu Cliente) e AML (Anti-Lavagem de Dinheiro). Isso tem potencial para reduzir dramaticamente o atrito no processo de conformidade tanto para remetentes quanto para provedores.</p>

<h2>Implicações para Remetentes</h2>
<p>Em termos práticos, a modernização regulatória significa que brasileiros que usam plataformas digitais de remessas respeitáveis devem experimentar menos atrito de documentação do que no passado, especialmente para transferências pessoais de rotina. Para aqueles que enviam valores maiores — para compras de imóveis no exterior, investimentos comerciais ou grandes pagamentos de suporte familiar — trabalhar com um provedor licenciado experiente em documentação de conformidade do BCB continua sendo importante. Os regulamentos são genuinamente protetores, projetados para manter o sistema financeiro do Brasil seguro e com boa reputação internacional, mas são cada vez mais proporcionais ao risco real de cada tipo de transação.</p>`,
  },
  {
    tag: "Market",
    imageUrl: "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    title_en: "Top Remittance Corridors from Brazil: 2026 Trends and Analysis",
    title_zh: "2026年巴西主要汇款走廊：趋势与分析",
    title_pt: "Principais Corredores de Remessas do Brasil: Tendências e Análise em 2026",
    excerpt_en: "Brazil's international remittance market is diversifying, with Asia-Pacific corridors growing faster than traditional routes to Europe and the US. Understanding volume trends helps senders find better service options.",
    excerpt_zh: "巴西国际汇款市场正在多元化，亚太走廊的增长速度快于传统的欧洲和美国路线。了解交易量趋势有助于汇款人找到更好的服务选择。",
    excerpt_pt: "O mercado de remessas internacionais do Brasil está se diversificando, com corredores da Ásia-Pacífico crescendo mais rápido do que as rotas tradicionais para a Europa e EUA. Entender as tendências de volume ajuda os remetentes a encontrar melhores opções.",
    body_en: `<p>Brazil's international remittance landscape is undergoing significant structural change in 2026. While traditional corridors to the United States, Portugal, and Japan remain dominant by volume, the fastest growth is occurring in newer corridors — particularly those connecting Brazil with China, Singapore, the United Arab Emirates, and Canada. This shift reflects Brazil's evolving economic relationships and the changing composition of its diaspora.</p>

<h2>Corridor Volume Rankings</h2>
<p>The Brazil–USA corridor remains the largest single remittance route by value, accounting for approximately 35% of total outbound remittance volume from Brazil. This reflects the size of the Brazilian-American community — estimated at over 1.5 million people — and the economic disparities that drive sustained migration. The corridor has matured substantially, with competition among digital providers keeping costs relatively low and service quality high.</p>

<p>Brazil–Portugal has grown rapidly, now representing approximately 15% of total volume. The significant increase in Brazilian migration to Portugal following expanded visa access has created a large new sending community. Brazil–Japan accounts for approximately 10% of volume, reflecting the Nikkei community's established remittance patterns.</p>

<h2>Fastest Growing Corridors</h2>
<p>The Brazil–China corridor has grown at approximately 20% annually for the past three years, driven by Brazil–China trade flows and a growing Chinese-Brazilian business community. This corridor is notable for its diverse composition: commercial payment flows from Brazilian importers, personal remittances from Chinese nationals working in Brazil sending money home, and increasingly, educational payments as Brazilian students enroll in Chinese universities.</p>

<p>The Brazil–Singapore corridor, while smaller in absolute volume, has shown exceptional growth — over 30% annually — driven by the relocation of Brazilian financial and technology professionals to Singapore. These tend to be high-value individual transfers. The Brazil–UAE corridor is also expanding rapidly, driven by Brazilian workers in the construction and hospitality sectors in Dubai and Abu Dhabi.</p>

<h2>Impact of Digital Platform Competition</h2>
<p>The entry of global digital remittance platforms into the Brazilian market over the past three years has had a significant effect on pricing across all corridors. Average transfer costs have fallen from approximately 6–7% of transfer value in 2021 to around 3–4% in 2026, with the most competitive corridors (Brazil–USA, Brazil–Portugal) seeing costs as low as 1–2% for digital transfers.</p>

<p>This price compression has particularly benefited senders in smaller, previously underserved corridors. A transfer to Singapore or Hong Kong that once required a premium bank wire can now be completed at near-parity with the USA corridor on modern digital platforms.</p>

<h2>What to Watch in 2026</h2>
<p>Several trends will shape corridor dynamics through the rest of 2026. Brazil's trade relationship with China continues to deepen, which historically correlates with growth in associated private remittance flows. Regulatory changes enabling more non-bank payment providers are expected to spur further competition and price reduction. And PIX's potential integration with payment systems in other countries could fundamentally alter the economics of the Brazil-outbound remittance market within the next 12–24 months.</p>`,
    body_zh: `<p>2026年，巴西国际汇款格局正在经历重大结构性变化。虽然前往美国、葡萄牙和日本的传统走廊在交易量上仍占主导地位，但增长最快的是较新的走廊——特别是连接巴西与中国、新加坡、阿联酋和加拿大的走廊。这一转变反映了巴西不断演变的经济关系以及其侨民构成的变化。</p>

<h2>走廊交易量排名</h2>
<p>巴西—美国走廊仍然是按价值计算最大的单一汇款路线，约占巴西出境汇款总量的35%。这反映了巴西裔美国人社区的规模——估计超过150万人——以及推动持续移民的经济差距。该走廊已相当成熟，数字服务提供商之间的竞争保持了相对较低的成本和较高的服务质量。</p>

<p>巴西—葡萄牙走廊增长迅速，现在约占总量的15%。巴西移民向葡萄牙的大量迁移——随着签证准入的扩大——创造了一个大型新汇款社区。巴西—日本约占总量的10%，反映了日裔巴西人社区既有的汇款模式。</p>

<h2>增长最快的走廊</h2>
<p>过去三年，巴西—中国走廊每年增长约20%，受巴西—中国贸易流和不断壮大的中巴商业社区驱动。该走廊因其多元化构成而引人注目：来自巴西进口商的商业付款流、在巴西工作的中国公民向国内汇款，以及随着巴西学生在中国大学注册而日益增长的教育付款。</p>

<p>巴西—新加坡走廊虽然绝对交易量较小，但增长异常迅猛——每年超过30%——受巴西金融和技术专业人士迁往新加坡驱动。这些通常是高价值的个人转账。巴西—阿联酋走廊也在快速扩张，受在迪拜和阿布扎比建筑和酒店行业工作的巴西工人驱动。</p>

<h2>数字平台竞争的影响</h2>
<p>过去三年全球数字汇款平台进入巴西市场对所有走廊的定价产生了重大影响。平均转账成本从2021年约占转账价值的6至7%降至2026年的约3至4%，竞争最激烈的走廊（巴西—美国、巴西—葡萄牙）的数字转账成本低至1至2%。</p>

<p>这种价格压缩特别惠及较小、此前服务不足的走廊中的汇款人。曾经需要高价银行电汇的新加坡或香港转账，现在可以在现代数字平台上以接近美国走廊相当的价格完成。</p>

<h2>2026年关注重点</h2>
<p>几个趋势将在2026年剩余时间塑造走廊动态。巴西与中国的贸易关系持续深化，历史上这与相关私人汇款流的增长相关。预计允许更多非银行支付提供商的监管变化将进一步刺激竞争和���格降低。PIX与其他国家支付系统的潜在整合可能在未来12至24个月内从根本上改变巴西对外汇款市场的经济格局。</p>`,
    body_pt: `<p>O cenário de remessas internacionais do Brasil está passando por mudanças estruturais significativas em 2026. Embora os corredores tradicionais para os Estados Unidos, Portugal e Japão permaneçam dominantes em volume, o crescimento mais rápido está ocorrendo em corredores mais novos — particularmente aqueles que conectam o Brasil com China, Cingapura, Emirados Árabes Unidos e Canadá. Essa mudança reflete as relações econômicas em evolução do Brasil e a composição cambiante de sua diáspora.</p>

<h2>Classificações de Volume por Corredor</h2>
<p>O corredor Brasil–EUA permanece a maior rota única de remessas por valor, respondendo por aproximadamente 35% do volume total de remessas de saída do Brasil. Isso reflete o tamanho da comunidade brasileiro-americana — estimada em mais de 1,5 milhão de pessoas — e as disparidades econômicas que impulsionam a migração sustentada. O corredor amadureceu substancialmente, com a concorrência entre provedores digitais mantendo os custos relativamente baixos e a qualidade do serviço alta.</p>

<p>Brasil–Portugal cresceu rapidamente, agora representando aproximadamente 15% do volume total. O aumento significativo da migração brasileira para Portugal após o acesso expandido a vistos criou uma grande nova comunidade remetente. Brasil–Japão responde por aproximadamente 10% do volume, refletindo os padrões estabelecidos de remessas da comunidade Nikkei.</p>

<h2>Corredores de Crescimento Mais Rápido</h2>
<p>O corredor Brasil–China cresceu aproximadamente 20% ao ano nos últimos três anos, impulsionado pelos fluxos comerciais Brasil–China e por uma crescente comunidade de negócios sino-brasileira. Este corredor é notável por sua composição diversa: fluxos de pagamentos comerciais de importadores brasileiros, remessas pessoais de nacionais chineses trabalhando no Brasil enviando dinheiro para casa, e, crescentemente, pagamentos educacionais à medida que estudantes brasileiros se matriculam em universidades chinesas.</p>

<p>O corredor Brasil–Cingapura, embora menor em volume absoluto, mostrou crescimento excepcional — mais de 30% ao ano — impulsionado pela relocação de profissionais financeiros e tecnológicos brasileiros para Cingapura. Estes tendem a ser transferências individuais de alto valor. O corredor Brasil–EAU também está se expandindo rapidamente, impulsionado por trabalhadores brasileiros nos setores de construção e hotelaria em Dubai e Abu Dhabi.</p>

<h2>Impacto da Concorrência entre Plataformas Digitais</h2>
<p>A entrada de plataformas globais de remessas digitais no mercado brasileiro nos últimos três anos teve um efeito significativo nos preços em todos os corredores. Os custos médios de transferência caíram de aproximadamente 6–7% do valor da transferência em 2021 para cerca de 3–4% em 2026, com os corredores mais competitivos (Brasil–EUA, Brasil–Portugal) vendo custos tão baixos quanto 1–2% para transferências digitais.</p>

<p>Essa compressão de preços beneficiou particularmente os remetentes em corredores menores e anteriormente desatendidos. Uma transferência para Cingapura ou Hong Kong que antes exigia uma transferência bancária premium agora pode ser concluída quase na paridade com o corredor dos EUA em plataformas digitais modernas.</p>

<h2>O Que Observar em 2026</h2>
<p>Várias tendências moldarão a dinâmica dos corredores pelo restante de 2026. A relação comercial do Brasil com a China continua se aprofundando, o que historicamente se correlaciona com o crescimento nos fluxos de remessas privadas associados. Espera-se que mudanças regulatórias que permitam mais provedores de pagamento não bancários estimulem maior concorrência e redução de preços. E a potencial integração do PIX com sistemas de pagamento em outros países poderia alterar fundamentalmente a economia do mercado de remessas de saída do Brasil nos próximos 12–24 meses.</p>`,
  },
  {
    tag: "Culture",
    imageUrl: "https://images.pexels.com/photos/1796743/pexels-photo-1796743.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    title_en: "Carnival, Semana Santa, and Transfers: How Brazilian Holidays Shape Remittances",
    title_zh: "狂欢节、圣周与汇款：巴西节假日如何影响国际转账",
    title_pt: "Carnaval, Semana Santa e Transferências: Como os Feriados Brasileiros Moldam as Remessas",
    excerpt_en: "Brazilian public holidays cause significant spikes in remittance volumes and can affect processing times. Planning transfers around key dates helps families avoid delays and take advantage of seasonal exchange rate patterns.",
    excerpt_zh: "巴西公共假日会导致汇款量大幅飙升，并可能影响处理时间。围绕关键日期规划转账有助于家庭避免延误，并利用季节性汇率规律。",
    excerpt_pt: "Os feriados públicos brasileiros causam picos significativos nos volumes de remessas e podem afetar os tempos de processamento. Planejar transferências em torno de datas importantes ajuda famílias a evitar atrasos e aproveitar padrões sazonais.",
    body_en: `<p>Brazil's rich calendar of public holidays, cultural celebrations, and religious observances creates predictable but significant seasonal patterns in international remittance flows. Understanding these patterns allows both senders and recipients to plan more effectively, avoid processing delays, and sometimes take advantage of exchange rate dynamics that accompany major seasonal events.</p>

<h2>Carnival: February's Remittance Surge</h2>
<p>Carnival is Brazil's most internationally recognized cultural event, and it coincides with one of the year's largest spikes in inbound remittance volumes. Brazilians living abroad often send extra money home in January and February to help family members enjoy the celebrations — covering costumes, travel to carnival cities, and festive food and entertainment. Remittance platforms typically report a 20–35% increase in transfer volumes in the two weeks leading up to Carnival.</p>

<p>Senders should be aware that Brazilian banks observe extended holiday periods around Carnival, which can delay bank-to-bank wire transfers by 2–4 business days. Digital platforms using PIX for last-mile delivery are less affected, as PIX operates continuously. Planning transfers 5–7 days in advance is advisable to ensure funds arrive in time.</p>

<h2>Semana Santa and Easter</h2>
<p>The week before Easter (Semana Santa) is observed as a public holiday throughout Brazil, with Holy Thursday and Good Friday designated as national public holidays. Banks close for these days, and retail businesses observe reduced hours. For remittance senders, this creates a similar consideration to Carnival: transfers initiated via traditional bank channels in the days immediately before Semana Santa may face processing delays, arriving after the holiday period begins.</p>

<h2>July and December: Family Support Peaks</h2>
<p>Two other periods show consistent remittance volume spikes. July coincides with Brazilian school holidays and mid-year breaks, when families often plan travel, home repairs, or educational expenses. December sees the largest and most sustained remittance surge of the year, driven by Christmas celebrations, year-end expenses, and the Brazilian custom of paying the "13th salary" — an additional month's wage typically paid to formal sector employees in December — which creates heightened consumer spending.</p>

<p>The December surge is also associated with exchange rate seasonality. Historically, increased demand for BRL to support holiday spending has occasionally created temporary favorable conditions for senders in late November and early December, before the holiday period itself begins to affect market liquidity.</p>

<h2>Practical Planning Tips</h2>
<p>The most important practical advice for managing holiday-period transfers is to plan ahead. For transfers needed by specific dates — to fund Carnival celebrations, pay school fees at the start of a semester, or ensure Christmas funds arrive in time — initiating transfers 7–10 days early provides a comfortable buffer against holiday processing delays and any exchange rate volatility.</p>

<p>Setting up automatic, recurring transfers is another strategy that smooths the impact of seasonal spikes. Rather than sending large one-time amounts around holidays, consistent monthly transfers maintain a steady financial support flow regardless of the calendar, and often result in better average exchange rates through cost averaging over time.</p>`,
    body_zh: `<p>巴西丰富的公共假日、文化庆典和宗教节日日历在国际汇款流中创造了可预测但显著的季节性模式。了解这些模式使汇款人和收款人都能更有效地规划，避免处理延误，有时还能利用重大季节性事件所带来的汇率动态。</p>

<h2>狂欢节：二月的汇款激增</h2>
<p>狂欢节是巴西最具国际知名度的文化活动，恰好与全年最大的入境汇款量峰值之一重合。海外巴西人通常在一月和二月向国内家人额外汇款，帮助他们享受庆典——包括购置服装、前往狂欢节城市旅行，以及节庆饮食和娱乐。汇款平台通常报告在狂欢节前两周转账量增加20至35%。</p>

<p>汇款人应注意，巴西银行在狂欢节期间观察延长假期，这可能使银行间电汇延迟2至4个工作日。使用PIX进行最后一公里配送的数字平台受影响较小，因为PIX持续运行。建议提前5至7天发起转账，以确保资金及时到达。</p>

<h2>圣周与复活节</h2>
<p>复活节前一周（圣周）在巴西全国被视为公共假日，圣星期四和耶稣受难日被指定为全国公共假日。银行在这几天关闭，零售商业观察缩短营业时间。对于汇款人来说，这与狂欢节创造了类似的考量：在圣周前几天通过传统银行渠道发起的转账可能面临处理延误，在假期开始后才能到达。</p>

<h2>七月和十二月：家庭支持高峰</h2>
<p>另外两个时期显示出一致的汇款量峰值。七月与巴西学校假期和年中休息重合，家庭通常计划旅行、家庭维修或教育支出。十二月是全年最大且最持久的汇款激增期，受圣诞庆典、年末支出以及巴西支付"第13个月薪水"的习惯——通常在十二月支付给正规部门员工的额外一个月工资——驱动，这创造了高涨的消费支出。</p>

<p>十二月的激增还与汇率季节性相关。历史上，节假日消费支出对雷亚尔的增加需求有时在十一月底和十二月初——假期本身开始影响市场流动性之前——为汇款人创造了临时有利条件。</p>

<h2>实用规划建议</h2>
<p>管理假期转账最重要的实用建议是提前计划。对于需要在特定日期到达的转账——为狂欢节庆典提供资金、在学期开始时支付学费，或确保圣诞节资金及时到达——提前7至10天发起转账为节假日处理延误和任何汇率波动提供了舒适的缓冲。</p>

<p>设置自动定期转账是另一种平滑季节性峰值影响的策略。与其在节假日前后发送大额一次性款项，不如保持稳定的每月转账，无论日历如何都能维持稳定的财务支持流，并且随时间通过成本平均往往能获得更好的平均汇率。</p>`,
    body_pt: `<p>O rico calendário de feriados públicos, celebrações culturais e observâncias religiosas do Brasil cria padrões sazonais previsíveis, mas significativos, nos fluxos de remessas internacionais. Compreender esses padrões permite que tanto remetentes quanto beneficiários planejem com mais eficácia, evitem atrasos no processamento e, às vezes, aproveitem a dinâmica das taxas de câmbio que acompanha os principais eventos sazonais.</p>

<h2>Carnaval: O Pico de Remessas de Fevereiro</h2>
<p>O Carnaval é o evento cultural mais reconhecido internacionalmente do Brasil e coincide com um dos maiores picos de volume de remessas de entrada do ano. Brasileiros que vivem no exterior frequentemente enviam dinheiro extra para casa em janeiro e fevereiro para ajudar os familiares a aproveitar as celebrações — cobrindo fantasias, viagens para cidades de carnaval e festas e entretenimento. As plataformas de remessas tipicamente reportam um aumento de 20–35% nos volumes de transferência nas duas semanas que antecedem o Carnaval.</p>

<p>Os remetentes devem estar cientes de que os bancos brasileiros observam períodos de feriado estendidos durante o Carnaval, o que pode atrasar transferências bancárias de 2–4 dias úteis. Plataformas digitais que usam PIX para entrega de última milha são menos afetadas, pois o PIX opera continuamente. É aconselhável planejar transferências com 5–7 dias de antecedência para garantir que os fundos cheguem a tempo.</p>

<h2>Semana Santa e Páscoa</h2>
<p>A semana antes da Páscoa (Semana Santa) é observada como feriado público em todo o Brasil, com Quinta-feira Santa e Sexta-feira Santa designadas como feriados nacionais. Os bancos fecham nesses dias, e os negócios varejistas observam horários reduzidos. Para remetentes, isso cria uma consideração similar ao Carnaval: transferências iniciadas via canais bancários tradicionais nos dias imediatamente antes da Semana Santa podem enfrentar atrasos de processamento, chegando após o início do período de feriado.</p>

<h2>Julho e Dezembro: Picos de Suporte Familiar</h2>
<p>Dois outros períodos mostram picos consistentes de volume de remessas. Julho coincide com as férias escolares brasileiras e os recessos de meio de ano, quando as famílias frequentemente planejam viagens, reformas domésticas ou despesas educacionais. Dezembro vê o maior e mais sustentado pico de remessas do ano, impulsionado pelas celebrações de Natal, despesas de fim de ano e o costume brasileiro de pagar o "13º salário" — um salário adicional de um mês tipicamente pago aos funcionários do setor formal em dezembro — o que cria gastos elevados do consumidor.</p>

<p>O pico de dezembro também está associado à sazonalidade das taxas de câmbio. Historicamente, o aumento da demanda por BRL para sustentar os gastos com feriados ocasionalmente criou condições temporariamente favoráveis para remetentes no final de novembro e início de dezembro — antes que o próprio período de feriado comece a afetar a liquidez do mercado.</p>

<h2>Dicas Práticas de Planejamento</h2>
<p>O conselho prático mais importante para gerenciar transferências em períodos de feriado é planejar com antecedência. Para transferências necessárias em datas específicas — para financiar as celebrações do Carnaval, pagar mensalidades no início de um semestre ou garantir que os fundos de Natal cheguem a tempo — iniciar transferências com 7–10 dias de antecedência fornece um buffer confortável contra atrasos de processamento de feriados e qualquer volatilidade de taxa de câmbio.</p>

<p>Configurar transferências automáticas e recorrentes é outra estratégia que suaviza o impacto dos picos sazonais. Em vez de enviar grandes quantias únicas em torno dos feriados, transferências mensais consistentes mantêm um fluxo de suporte financeiro constante independentemente do calendário, e frequentemente resultam em melhores taxas de câmbio médias por meio de uma média de custo ao longo do tempo.</p>`,
  },
  {
    tag: "Tips",
    imageUrl: "https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    title_en: "10 Strategies to Get the Best Rate When Sending Money from Brazil",
    title_zh: "从巴西汇款时获得最佳汇率的10个策略",
    title_pt: "10 Estratégias para Obter a Melhor Taxa ao Enviar Dinheiro do Brasil",
    excerpt_en: "Savvy senders can save hundreds of reais per year by optimizing when and how they transfer money internationally. These practical strategies work for both personal and business transfers.",
    excerpt_zh: "精明的汇款人通过优化国际汇款的时机和方式，每年可以节省数百雷亚尔。这些实用策略适用于个人和商业转账。",
    excerpt_pt: "Remetentes experientes podem economizar centenas de reais por ano otimizando quando e como transferem dinheiro internacionalmente. Essas estratégias práticas funcionam para transferências pessoais e comerciais.",
    body_en: `<p>International money transfers involve two potential costs that can significantly erode the value of what you send: transaction fees and exchange rate margins. Most people focus on advertised fees but pay less attention to the exchange rate — often the larger of the two costs. This guide outlines ten actionable strategies to minimize both and ensure more of your money arrives at its destination.</p>

<h2>1. Always Compare the Total Cost, Not Just the Fee</h2>
<p>The most important strategy is to calculate the total cost of a transfer by comparing how much the recipient actually receives, not just what fee is advertised. Two providers charging identical fees can deliver very different amounts if their exchange rates differ. Always use a comparison tool that shows the total BRL cost for a specific receive amount.</p>

<h2>2. Use Specialist Digital Transfer Services</h2>
<p>Bank wire transfers typically apply exchange rate margins of 2.5–4% above the mid-market rate. Specialist digital services typically offer margins of 0.3–1.5%. On a BRL 10,000 transfer, this difference can amount to BRL 200–350 in additional cost with a bank versus a digital provider. The regulatory environment for these services in Brazil has improved significantly, making it safe and practical to use licensed non-bank providers.</p>

<h2>3. Set Rate Alerts</h2>
<p>Exchange rates fluctuate daily. Most digital transfer platforms offer rate-alert functionality — you set a target rate, and the platform notifies you when that rate is available. This allows you to transact at favorable moments rather than at whatever rate happens to apply when you're ready to send.</p>

<h2>4. Consider Forward Contracts for Large Transfers</h2>
<p>If you know you'll need to send a large amount in the future — for a property purchase, business payment, or major expense — a forward contract allows you to lock in today's exchange rate for a transfer executed weeks or months later. This eliminates exchange rate risk for large transactions and is available through several remittance providers and foreign exchange specialists.</p>

<h2>5. Consolidate Transfers Where Possible</h2>
<p>Per-transaction fees are proportionally higher on small transfers. If you're making multiple small transfers to the same recipient, consolidating them into fewer, larger transfers reduces the total fee burden. However, compare this against the rate-alert benefit of smaller, more frequent transfers — the optimal approach depends on the specific fee structure of your chosen provider.</p>

<h2>6. Avoid Weekend and Holiday Transfers (via Banks)</h2>
<p>Bank-to-bank international transfers initiated on Fridays, weekends, or before public holidays often don't begin processing until the next business day. This extends the effective transfer time without reducing cost. If you need to send money urgently around a holiday, use a digital platform with PIX delivery rather than a bank wire.</p>

<h2>7. Use the Right Payment Method</h2>
<p>How you fund your transfer affects cost. Bank transfers (TED or PIX) from your Brazilian account to a transfer platform are typically the cheapest funding method. Credit and debit card payments often incur additional charges of 1–3%. Where possible, fund transfers via bank transfer to minimize the total cost.</p>

<h2>8. Build a Sending Track Record</h2>
<p>Regular, documented transfers build a compliance track record with your transfer provider, which can reduce friction in identity verification and may qualify you for loyalty benefits or preferential rates on some platforms. For business senders, establishing a formal business account with a remittance provider can unlock better pricing tiers.</p>

<h2>9. Understand Tax Implications</h2>
<p>International transfers may have tax implications in both Brazil and the destination country. For transfers above Banco Central reporting thresholds, ensuring your transfers are properly documented and declared avoids penalties and complications. If you regularly transfer large amounts, consulting a tax advisor familiar with Brazilian international tax rules is a worthwhile investment.</p>

<h2>10. Review Your Provider Annually</h2>
<p>The remittance market is competitive and evolving rapidly. A provider that offered the best rates and service two years ago may no longer be the best option today. Reviewing your provider annually — comparing current rates and fees against competitors — ensures you're benefiting from market improvements and not paying a loyalty premium for a service that has been superseded by better alternatives.</p>`,
    body_zh: `<p>国际汇款涉及两种可能大幅侵蚀转账价值的潜在成本：交易费用和汇率差价。大多数人关注广告费用，但对汇率——通常是两者中较大的成本——关注不够。本指南概述了最小化这两种成本的十种可行策略，确保更多资金到达目的地。</p>

<h2>1. 始终比较总成本，而非仅仅是费用</h2>
<p>最重要的策略是通过比较收款人实际收到的金额来计算转账总成本，而不仅仅是广告宣传的费用。如果两家服务提供商收取相同费用但汇率不同，实际交付金额可能差异很大。始终使用能显示特定收款金额的总雷亚尔成本的比较工具。</p>

<h2>2. 使用专业数字转账服务</h2>
<p>银行电汇通常在中间市场汇率基础上加收2.5至4%的汇率差价。专业数字服务通常提供0.3至1.5%的差价。对于10000雷亚尔的转账，与数字服务提供商相比，通过银行转账的额外成本可能高达200至350雷亚尔。巴西这些服务的监管环境已显著改善，使用持牌非银行服务提供商既安全又实用。</p>

<h2>3. 设置汇率提醒</h2>
<p>汇率每天波动。大多数数字转账平台提供汇率提醒功能——你设定目标汇率，当该汇率可用时平台会通知你。这使你能够在有利时机进行交易，而不是在你准备好汇款时接受碰巧适用的任何汇率。</p>

<h2>4. 考虑大额转账使用远期合约</h2>
<p>如果你知道未来需要汇出大额款项——用于房产购买、商业付款或重大支出——远期合约允许你锁定今天的汇率，用于数周或数月后执行的转账。这消除了大额交易的汇率风险，可通过多家汇款服务提供商和外汇专家获得。</p>

<h2>5. 尽可能整合转账</h2>
<p>每笔交易的手续费在小额转账上比例更高。如果你向同一收款人进行多次小额转账，将其整合为更少、更大额的转账可以降低总费用负担。然而，将此与汇率提醒带来的小额、更频繁转账的好处相比较——最优方案取决于你所选服务提供商的具体费率结构。</p>

<h2>6. 避免通过银行在周末和假日转账</h2>
<p>周五、周末或公共假日前发起的银行间国际转账通常直到下一个工作日才开始处理。这延长了有效转账时间而不降低成本。如果你需要在节假日前后紧急汇款，请使用提供PIX交付的数字平台，而非银行电汇。</p>

<h2>7. 使用正确的付款方式</h2>
<p>资金转账的方式影响成本。从你的巴西账户向转账平台进行银行转账（TED或PIX）通常是最便宜的资金方式。信用卡和借记卡付款通常会产生1至3%的额外费用。尽可能通过银行转账为转账提供资金，以最小化总成本。</p>

<h2>8. 建立汇款记录</h2>
<p>定期有记录的转账在你的转账服务提供商处建立合规记录，这可以减少身份验证的摩擦，并可能使你在某些平台上获得忠诚度福利或优惠汇率。对于商业汇款人，与汇款服务提供商建立正式业务账户可以解锁更好的定价层级。</p>

<h2>9. 了解税务影响</h2>
<p>国际转账在巴西和目的地国家可能都有税务影响。对于超过巴西中央银行报告门槛的转账，确保你的转账有适当的文件证明和申报，可避免罚款和复杂情况。如果你定期转账大额款项，咨询熟悉巴西国际税务规则的税务顾问是一项值得的投资。</p>

<h2>10. 每年审查你的服务提供商</h2>
<p>汇款市场竞争激烈且快速演变。两年前提供最佳汇率和服务的提供商今天可能不再是最佳选择。每年审查你的服务提供商——将当前汇率和费用与竞争对手进行比较——确保你从市场改进中受益，而不是为已被更好替代品取代的服务支付忠诚度溢价。</p>`,
    body_pt: `<p>As transferências internacionais de dinheiro envolvem dois custos potenciais que podem corroer significativamente o valor do que você envia: taxas de transação e margens de taxa de câmbio. A maioria das pessoas se concentra nas taxas anunciadas, mas presta menos atenção à taxa de câmbio — frequentemente o maior dos dois custos. Este guia descreve dez estratégias acionáveis para minimizar ambos e garantir que mais do seu dinheiro chegue ao destino.</p>

<h2>1. Sempre Compare o Custo Total, Não Apenas a Taxa</h2>
<p>A estratégia mais importante é calcular o custo total de uma transferência comparando quanto o beneficiário realmente recebe, não apenas qual taxa é anunciada. Dois provedores cobrando taxas idênticas podem entregar valores muito diferentes se suas taxas de câmbio diferirem. Sempre use uma ferramenta de comparação que mostre o custo total em BRL para um valor específico de recebimento.</p>

<h2>2. Use Serviços de Transferência Digital Especializados</h2>
<p>Transferências bancárias tipicamente aplicam margens de taxa de câmbio de 2,5–4% acima da taxa de mercado médio. Serviços digitais especializados tipicamente oferecem margens de 0,3–1,5%. Em uma transferência de BRL 10.000, essa diferença pode representar BRL 200–350 em custo adicional com um banco versus um provedor digital. O ambiente regulatório para esses serviços no Brasil melhorou significativamente, tornando seguro e prático usar provedores não bancários licenciados.</p>

<h2>3. Configure Alertas de Taxa</h2>
<p>As taxas de câmbio flutuam diariamente. A maioria das plataformas de transferência digital oferece funcionalidade de alerta de taxa — você define uma taxa-alvo e a plataforma notifica quando essa taxa está disponível. Isso permite que você transacione em momentos favoráveis em vez de aceitar qualquer taxa que se aplique quando você estiver pronto para enviar.</p>

<h2>4. Considere Contratos a Termo para Grandes Transferências</h2>
<p>Se você sabe que precisará enviar um valor grande no futuro — para uma compra de imóvel, pagamento comercial ou despesa importante — um contrato a termo permite que você trave a taxa de câmbio de hoje para uma transferência executada semanas ou meses depois. Isso elimina o risco de taxa de câmbio para grandes transações e está disponível através de vários provedores de remessas e especialistas em câmbio.</p>

<h2>5. Consolide Transferências Quando Possível</h2>
<p>As taxas por transação são proporcionalmente maiores em pequenas transferências. Se você estiver fazendo múltiplas pequenas transferências para o mesmo beneficiário, consolidá-las em transferências maiores e menos frequentes reduz o ônus total de taxas. No entanto, compare isso com o benefício de alerta de taxa de transferências menores e mais frequentes — a abordagem ótima depende da estrutura de taxas específica do seu provedor escolhido.</p>

<h2>6. Evite Transferências (via Bancos) em Fins de Semana e Feriados</h2>
<p>Transferências internacionais banco a banco iniciadas às sextas-feiras, fins de semana ou antes de feriados públicos frequentemente não começam a processar até o próximo dia útil. Isso estende o tempo efetivo de transferência sem reduzir o custo. Se você precisar enviar dinheiro urgentemente em torno de um feriado, use uma plataforma digital com entrega PIX em vez de transferência bancária.</p>

<h2>7. Use o Método de Pagamento Correto</h2>
<p>Como você financia sua transferência afeta o custo. Transferências bancárias (TED ou PIX) da sua conta brasileira para uma plataforma de transferência são tipicamente o método de financiamento mais barato. Pagamentos com cartão de crédito e débito frequentemente incorrem em cobranças adicionais de 1–3%. Sempre que possível, financie transferências via transferência bancária para minimizar o custo total.</p>

<h2>8. Construa um Histórico de Envios</h2>
<p>Transferências regulares e documentadas constroem um histórico de conformidade com seu provedor de transferência, o que pode reduzir o atrito na verificação de identidade e pode qualificá-lo para benefícios de fidelidade ou taxas preferenciais em algumas plataformas. Para remetentes comerciais, estabelecer uma conta empresarial formal com um provedor de remessas pode desbloquear níveis de preços melhores.</p>

<h2>9. Entenda as Implicações Fiscais</h2>
<p>As transferências internacionais podem ter implicações fiscais tanto no Brasil quanto no país de destino. Para transferências acima dos limites de relatório do Banco Central, garantir que suas transferências sejam devidamente documentadas e declaradas evita penalidades e complicações. Se você regularmente transfere grandes quantias, consultar um assessor fiscal familiarizado com as regras fiscais internacionais brasileiras é um investimento que vale a pena.</p>

<h2>10. Revise Seu Provedor Anualmente</h2>
<p>O mercado de remessas é competitivo e está evoluindo rapidamente. Um provedor que oferecia as melhores taxas e serviços dois anos atrás pode não ser mais a melhor opção hoje. Revisar seu provedor anualmente — comparando as taxas e tarifas atuais com as dos concorrentes — garante que você está se beneficiando das melhorias do mercado e não pagando um prêmio de fidelidade por um serviço que foi superado por alternativas melhores.</p>`,
  },
  {
    tag: "Finance",
    imageUrl: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    title_en: "Hidden Fees in Bank Wire Transfers from Brazil: A Complete Guide",
    title_zh: "从巴西进行银行电汇的隐性费用：完整指南",
    title_pt: "Taxas Ocultas em Transferências Bancárias do Brasil: Um Guia Completo",
    excerpt_en: "Traditional banks rarely show the full cost of international wire transfers upfront. Understanding the complete fee structure — including hidden margins — can save Brazilian senders thousands of reais annually.",
    excerpt_zh: "传统银行很少提前显示国际电汇的全部成本。了解完整的费用结构——包括隐性差价——每年可以为巴西汇款人节省数千雷亚尔。",
    excerpt_pt: "Os bancos tradicionais raramente mostram o custo completo das transferências internacionais antecipadamente. Entender a estrutura completa de taxas — incluindo margens ocultas — pode economizar milhares de reais anualmente.",
    body_en: `<p>If you've ever sent money internationally from Brazil through a traditional bank, you may have noticed that the amount received at the other end was noticeably less than you expected, even after accounting for the fee shown on your receipt. This discrepancy is usually explained by the exchange rate margin — a hidden cost embedded in the rate your bank applies, rather than disclosed as a separate line item. Understanding this and other hidden fees is essential for any Brazilian sending money abroad.</p>

<h2>The Exchange Rate Margin: The Biggest Hidden Cost</h2>
<p>When you initiate an international transfer, your bank converts your reais into the destination currency (or USD as an intermediary) at a rate that is worse than the mid-market exchange rate — the rate you'll see on Google or Bloomberg. The difference between what you receive and the mid-market rate is the bank's exchange rate margin, typically 2.5–4% for major Brazilian banks on international wire transfers.</p>

<p>On a BRL 10,000 transfer, a 3% margin represents BRL 300 in additional cost — money you pay but never see because it's embedded in the rate rather than stated as a fee. Over a year of monthly transfers, this adds up to BRL 3,600 — the equivalent of several months of additional transfer fees that most senders don't realize they're paying.</p>

<h2>IOF: Brazil's Financial Operations Tax</h2>
<p>All international remittances from Brazil are subject to the IOF (Imposto sobre Operações Financeiras — Financial Operations Tax). The rate varies by transfer type: personal remittances and transfers to maintain dependents abroad are taxed at 1.1%, while transfers classified as foreign investment or financial account funding may be taxed at higher rates. The IOF is a legitimate regulatory cost and applies to all providers, but ensuring your transfer is classified correctly can affect the rate applied.</p>

<h2>Correspondent Bank Fees</h2>
<p>International bank wire transfers typically route through one or more correspondent banks — intermediary institutions that facilitate settlement between banks in different countries. Each correspondent bank may deduct a fee (typically USD 10–35) before forwarding the funds. These fees are often not disclosed upfront by the sending bank and can represent a significant additional cost, particularly for smaller transfers. A USD 500 transfer paying two USD 25 correspondent bank fees effectively has an additional 10% cost before even accounting for exchange rate margins.</p>

<h2>SWIFT Fees</h2>
<p>International bank wires typically use the SWIFT network, which charges fees at both the sending and receiving bank ends. These are usually in the range of USD 15–40 per transaction and are sometimes passed directly to the customer, sometimes absorbed by the bank (and recouped through wider exchange rate margins).</p>

<h2>SHA vs. OUR vs. BEN Instructions</h2>
<p>When initiating a bank wire, you'll often be asked how fees should be shared. "SHA" (shared) means both sender and receiver pay their respective bank's fees. "OUR" means the sender pays all fees. "BEN" means the beneficiary pays all fees. Each option has different implications for how much the recipient receives. For family support transfers where the recipient needs a specific amount, using "OUR" instructions (sender pays all fees) ensures the recipient receives the full intended amount, though at higher total cost to the sender.</p>

<h2>The Alternative: Digital Transfer Platforms</h2>
<p>Regulated digital remittance platforms operate with a fundamentally different cost structure. Rather than earning revenue primarily from exchange rate margins, many charge transparent, flat fees and offer rates within 0.3–1% of the mid-market rate. They also typically use modern payment rails that avoid correspondent bank fees, routing transfers more directly to the destination. This transparency and efficiency translates directly into better outcomes for senders.</p>

<p>The key consideration when switching from bank wires to digital platforms is regulatory assurance. Any platform handling international transfers from Brazil must be licensed by the Banco Central as a Payment Institution. Verifying this authorization — easily checked on the BCB's public registry — is the essential first step before using any new service.</p>`,
    body_zh: `<p>如果你曾经通过传统银行从巴西向国际汇款，你可能注意到，即使考虑了收据上显示的手续费，另一端收到的金额也明显少于预期。这一差异通常由汇率差价来解释——这是嵌入在你银行应用汇率中的隐性成本，而非作为单独条目披露。了解这一点及其他隐性费用，对于任何向海外汇款的巴西人来说都至关重要。</p>

<h2>汇率差价：最大的隐性成本</h2>
<p>当你发起国际转账时，你的银行会将你的雷亚尔转换为目标货币（或作为中间货币的美元），适用的汇率比中间市场汇率——你在谷歌或彭博看到的汇率——更差。你收到的金额与中间市场汇率之间的差距就是银行的汇率差价，巴西主要银行国际电汇的典型差价为2.5至4%。</p>

<p>对于10000雷亚尔的转账，3%的差价代表300雷亚尔的额外成本——你支付的钱但从未看见，因为它嵌入在汇率中而非声明为费用。一年的每月转账，总计3600雷亚尔——相当于大多数汇款人没有意识到自己正在支付的几个月额外转账费用。</p>

<h2>IOF：巴西金融操作税</h2>
<p>所有从巴西的国际汇款都需缴纳IOF（Imposto sobre Operações Financeiras——金融操作税）。税率因转账类型而异：个人汇款和向海外赡养人的转账按1.1%征税，而被归类为外国投资或金融账户资金的转账可能按更高税率征税。IOF是合法的监管成本，适用于所有服务提供商，但确保你的转账被正确分类会影响适用税率。</p>

<h2>代理银行费用</h2>
<p>国际银行电汇通常通过一家或多家代理银行——促进不同国家银行间结算的中介机构——路由。每家代理银行可能在转发资金前扣除费用（通常为10至35美元）。这些费用通常不由汇款银行提前披露，特别是对于较小金额的转账，可能代表重大的额外成本。支付两笔25美元代理银行费用的500美元转账，即使不考虑汇率差价，实际上也增加了10%的成本。</p>

<h2>SWIFT费用</h2>
<p>国际银行电汇通常使用SWIFT网络，该网络在汇款银行和收款银行两端均收取费用。这些费用通常在每笔交易15至40美元范围内，有时直接转嫁给客户，有时由银行吸收（并通过更宽的汇率差价收回）。</p>

<h2>SHA、OUR与BEN指令</h2>
<p>发起银行电汇时，你通常会被问及费用应如何分担。"SHA"（共享）意味着汇款人和收款人各自支付其银行的费用。"OUR"意味着汇款人支付所有费用。"BEN"意味着收款人支付所有费用。每种选项对收款人实际收到多少金额有不同影响。对于收款人需要特定金额的家庭支持转账，使用"OUR"指令（汇款人支付所有费用）确保收款人收到全额预期款项，尽管汇款人的总成本更高。</p>

<h2>替代方案：数字转账平台</h2>
<p>受监管的数字汇款平台以根本不同的成本结构运营。许多平台不是主要通过汇率差价获得收益，而是收取透明的固定费用，并提供与中间市场汇率相差0.3至1%以内的汇率。它们通常也使用避免代理银行费用的现代支付基础设施，将转账更直接地路由到目的地。这种透明度和效率直接转化为汇款人的更好结果。</p>

<p>从银行电汇切换到数字平台时的关键考量是监管保障。任何处理从巴西国际转账的平台必须获得巴西中央银行的支付机构许可证。核实此授权——可在BCB公共注册表上轻松查验——是使用任何新服务前必不可少的第一步。</p>`,
    body_pt: `<p>Se você já enviou dinheiro internacionalmente do Brasil por meio de um banco tradicional, pode ter notado que o valor recebido do outro lado era notavelmente menor do que o esperado, mesmo após contabilizar a taxa mostrada no seu recibo. Essa discrepância geralmente é explicada pela margem da taxa de câmbio — um custo oculto embutido na taxa que seu banco aplica, em vez de divulgado como um item separado. Entender isso e outras taxas ocultas é essencial para qualquer brasileiro que envia dinheiro ao exterior.</p>

<h2>A Margem da Taxa de Câmbio: O Maior Custo Oculto</h2>
<p>Quando você inicia uma transferência internacional, seu banco converte seus reais para a moeda de destino (ou USD como intermediário) a uma taxa pior do que a taxa de câmbio de mercado médio — a taxa que você verá no Google ou Bloomberg. A diferença entre o que você recebe e a taxa de mercado médio é a margem da taxa de câmbio do banco, tipicamente 2,5–4% para os principais bancos brasileiros em transferências bancárias internacionais.</p>

<p>Em uma transferência de BRL 10.000, uma margem de 3% representa BRL 300 em custo adicional — dinheiro que você paga, mas nunca vê, porque está embutido na taxa em vez de declarado como uma taxa. Ao longo de um ano de transferências mensais, isso soma BRL 3.600 — o equivalente a vários meses de taxas de transferência adicionais que a maioria dos remetentes não percebe que está pagando.</p>

<h2>IOF: Imposto sobre Operações Financeiras do Brasil</h2>
<p>Todas as remessas internacionais do Brasil estão sujeitas ao IOF (Imposto sobre Operações Financeiras). A alíquota varia por tipo de transferência: remessas pessoais e transferências para manutenção de dependentes no exterior são tributadas a 1,1%, enquanto transferências classificadas como investimento estrangeiro ou financiamento de conta financeira podem ser tributadas a alíquotas mais altas. O IOF é um custo regulatório legítimo e se aplica a todos os provedores, mas garantir que sua transferência seja classificada corretamente pode afetar a alíquota aplicada.</p>

<h2>Taxas de Banco Correspondente</h2>
<p>As transferências bancárias internacionais tipicamente são roteadas por um ou mais bancos correspondentes — instituições intermediárias que facilitam a liquidação entre bancos em diferentes países. Cada banco correspondente pode deduzir uma taxa (tipicamente USD 10–35) antes de encaminhar os fundos. Essas taxas frequentemente não são divulgadas antecipadamente pelo banco remetente e podem representar um custo adicional significativo, particularmente para transferências menores. Uma transferência de USD 500 pagando duas taxas de banco correspondente de USD 25 efetivamente tem um custo adicional de 10% mesmo antes de contabilizar as margens de taxa de câmbio.</p>

<h2>Taxas SWIFT</h2>
<p>As transferências bancárias internacionais tipicamente usam a rede SWIFT, que cobra taxas nas pontas do banco remetente e do banco destinatário. Estas geralmente estão na faixa de USD 15–40 por transação e às vezes são repassadas diretamente ao cliente, às vezes absorvidas pelo banco (e recuperadas por meio de margens de taxa de câmbio mais amplas).</p>

<h2>Instruções SHA vs. OUR vs. BEN</h2>
<p>Ao iniciar uma transferência bancária, você frequentemente será perguntado como as taxas devem ser compartilhadas. "SHA" (compartilhado) significa que tanto o remetente quanto o destinatário pagam as taxas de seus respectivos bancos. "OUR" significa que o remetente paga todas as taxas. "BEN" significa que o beneficiário paga todas as taxas. Cada opção tem implicações diferentes para quanto o destinatário recebe. Para transferências de suporte familiar onde o destinatário precisa de um valor específico, usar instruções "OUR" (remetente paga todas as taxas) garante que o destinatário receba o valor total pretendido, embora com custo total maior para o remetente.</p>

<h2>A Alternativa: Plataformas de Transferência Digital</h2>
<p>Plataformas de remessas digitais regulamentadas operam com uma estrutura de custos fundamentalmente diferente. Em vez de gerar receita principalmente por meio de margens de taxa de câmbio, muitas cobram taxas transparentes e fixas e oferecem taxas dentro de 0,3–1% da taxa de mercado médio. Elas também tipicamente usam trilhos de pagamento modernos que evitam taxas de banco correspondente, roteando transferências mais diretamente ao destino. Essa transparência e eficiência se traduz diretamente em melhores resultados para os remetentes.</p>

<p>A consideração principal ao mudar de transferências bancárias para plataformas digitais é a garantia regulatória. Qualquer plataforma que lide com transferências internacionais do Brasil deve ser licenciada pelo Banco Central como Instituição de Pagamento. Verificar essa autorização — facilmente verificável no registro público do BCB — é o primeiro passo essencial antes de usar qualquer novo serviço.</p>`,
  },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
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

    const { data: existing } = await supabase
      .from("articles")
      .select("tag, title_en")
      .eq("section", "today-brazil")
      .order("created_at", { ascending: false })
      .limit(20);

    const existingTitles = new Set((existing ?? []).map((a: { title_en: string }) => a.title_en));
    const recentTags = (existing ?? []).slice(0, 5).map((a: { tag: string }) => a.tag);

    const available = ARTICLES.filter((a) => !existingTitles.has(a.title_en));
    const pool = available.length > 0 ? available : ARTICLES;

    const preferredPool = pool.filter((a) => !recentTags.includes(a.tag));
    const finalPool = preferredPool.length > 0 ? preferredPool : pool;

    const article = finalPool[Math.floor(Math.random() * finalPool.length)];

    const now = new Date();
    const dateStr = now.toISOString().split("T")[0];
    const timestamp = now.getTime();
    const baseSlug = slugify(article.title_en);
    const slug = `${baseSlug}-${timestamp}`;

    const { data: latestArticle } = await supabase
      .from("articles")
      .select("slug")
      .eq("section", "today-brazil")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    const { error: insertError } = await supabase
      .from("articles")
      .insert({
        slug,
        section: "today-brazil",
        tag: article.tag,
        published_date: dateStr,
        image_url: article.imageUrl,
        title_en: article.title_en,
        title_zh: article.title_zh,
        title_pt: article.title_pt,
        excerpt_en: article.excerpt_en,
        excerpt_zh: article.excerpt_zh,
        excerpt_pt: article.excerpt_pt,
        body_en: article.body_en,
        body_zh: article.body_zh,
        body_pt: article.body_pt,
        prev_slug: latestArticle?.slug ?? null,
        next_slug: null,
      });

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
      JSON.stringify({ success: true, article: { slug, title_en: article.title_en } }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
