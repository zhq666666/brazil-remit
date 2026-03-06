import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const DESTINATIONS = [
  {
    name_en: "China", name_zh: "中国", name_pt: "China",
    url: "https://www.pandaremit.com/en/bra/send-money-to-china",
    currency: "CNY", currency_name: "Chinese Yuan",
  },
  {
    name_en: "United States", name_zh: "美国", name_pt: "Estados Unidos",
    url: "https://www.pandaremit.com/en/bra/send-money-to-unitedstates",
    currency: "USD", currency_name: "US Dollar",
  },
  {
    name_en: "Japan", name_zh: "日本", name_pt: "Japão",
    url: "https://www.pandaremit.com/en/bra/send-money-to-japan",
    currency: "JPY", currency_name: "Japanese Yen",
  },
  {
    name_en: "Hong Kong", name_zh: "香港", name_pt: "Hong Kong",
    url: "https://www.pandaremit.com/en/bra/send-money-to-hongkong",
    currency: "HKD", currency_name: "Hong Kong Dollar",
  },
  {
    name_en: "Singapore", name_zh: "新加坡", name_pt: "Cingapura",
    url: "https://www.pandaremit.com/en/bra/send-money-to-singapore",
    currency: "SGD", currency_name: "Singapore Dollar",
  },
  {
    name_en: "Portugal", name_zh: "葡萄牙", name_pt: "Portugal",
    url: "https://www.pandaremit.com/en/bra/send-money-to-portugal",
    currency: "EUR", currency_name: "Euro",
  },
  {
    name_en: "United Kingdom", name_zh: "英国", name_pt: "Reino Unido",
    url: "https://www.pandaremit.com/en/bra/send-money-to-unitedkingdom",
    currency: "GBP", currency_name: "British Pound",
  },
];

const TEMPLATES = [
  {
    tag: "Guide",
    image: "https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    generate: (dest: typeof DESTINATIONS[0], seed: number) => {
      const steps = ["open a free account on PandaRemit", "enter the recipient's details and bank information", `choose the amount in BRL to convert to ${dest.currency}`, "confirm the rate and pay via PIX or bank transfer", "track delivery in real time through the app"];
      const fees = [2.5, 1.8, 2.1, 1.5, 2.0][seed % 5];
      const time = ["1–2 business days", "same day", "within 24 hours", "2–3 business days"][seed % 4];
      return {
        title_en: `How to Send Money from Brazil to ${dest.name_en}: Step-by-Step Guide`,
        title_zh: `如何从巴西汇款到${dest.name_zh}：详细指南`,
        title_pt: `Como Enviar Dinheiro do Brasil para ${dest.name_pt}: Guia Passo a Passo`,
        excerpt_en: `Sending money from Brazil to ${dest.name_en} has never been easier. Here's your complete guide to fast, low-cost international transfers in 2026.`,
        excerpt_zh: `从巴西汇款到${dest.name_zh}从未如此简单。以下是2026年快速、低成本国际转账的完整指南。`,
        excerpt_pt: `Enviar dinheiro do Brasil para ${dest.name_pt} nunca foi tão fácil. Veja o guia completo para transferências internacionais rápidas e baratas em 2026.`,
        body_en: `<p>Whether you're supporting family, paying for services, or managing international business expenses, sending money from Brazil to <a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_en}</a> is a common need for thousands of Brazilians in 2026. The good news: modern remittance platforms have made the process faster and cheaper than ever.</p><p>Here's a simple step-by-step process using <strong>PandaRemit</strong>, one of the most trusted platforms for BRL-to-${dest.currency} transfers:</p><ul>${steps.map(s => `<li>${s.charAt(0).toUpperCase() + s.slice(1)}</li>`).join('')}</ul><p>The average fee for BRL-to-${dest.currency} transfers through PandaRemit is around <strong>${fees}%</strong>, which is significantly lower than traditional bank wire transfers that can charge 4–6%. Transfer times typically run <strong>${time}</strong>, depending on the method and destination bank.</p><p>Before sending, always compare the mid-market rate (available on Google or XE.com) with the rate offered by the platform. PandaRemit consistently offers competitive rates with transparent pricing, so you know exactly how much ${dest.currency} your recipient will receive before you confirm the transfer.</p><p>For regular senders, setting up recurring transfers or rate alerts can help you take advantage of favorable BRL exchange moments and maximize the value of each transfer to ${dest.name_en}.</p>`,
        body_zh: `<p>无论是支持家人、支付服务费用还是处理国际业务开支，从巴西汇款到<a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_zh}</a>是2026年众多巴西人的常见需求。好消息是：现代汇款平台让这一过程比以往任何时候都更快捷、更便宜。</p><p>以下是使用<strong>PandaRemit</strong>（BRL兑${dest.currency}转账最受信赖的平台之一）的简单步骤：</p><ul>${steps.map(s => `<li>${s.charAt(0).toUpperCase() + s.slice(1)}</li>`).join('')}</ul><p>通过PandaRemit进行BRL兑${dest.currency}转账的平均费率约为<strong>${fees}%</strong>，远低于传统银行电汇通常收取的4–6%。转账时间通常为<strong>${time}</strong>，具体取决于转账方式和目标银行。</p><p>汇款前，始终将市场中间价（可在Google或XE.com上查询）与平台报价进行比较。PandaRemit始终提供具有竞争力的汇率和透明定价，让您在确认转账前就清楚知道收款人将收到多少${dest.currency}。</p><p>对于定期汇款者，设置定期转账或汇率提醒可以帮助您把握有利的BRL汇率时机，最大化每次向${dest.name_zh}转账的价值。</p>`,
        body_pt: `<p>Seja para apoiar a família, pagar por serviços ou gerenciar despesas de negócios internacionais, enviar dinheiro do Brasil para <a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_pt}</a> é uma necessidade comum para milhares de brasileiros em 2026. A boa notícia: plataformas modernas de remessa tornaram o processo mais rápido e barato do que nunca.</p><p>Veja um processo simples passo a passo usando o <strong>PandaRemit</strong>, uma das plataformas mais confiáveis para transferências de BRL para ${dest.currency}:</p><ul>${steps.map(s => `<li>${s.charAt(0).toUpperCase() + s.slice(1)}</li>`).join('')}</ul><p>A taxa média para transferências de BRL para ${dest.currency} pelo PandaRemit é de cerca de <strong>${fees}%</strong>, significativamente mais baixa do que as transferências bancárias tradicionais, que podem cobrar 4–6%. Os prazos de transferência geralmente são de <strong>${time}</strong>, dependendo do método e do banco de destino.</p><p>Antes de enviar, sempre compare a taxa de câmbio de mercado (disponível no Google ou XE.com) com a taxa oferecida pela plataforma. O PandaRemit oferece consistentemente taxas competitivas com preços transparentes, para que você saiba exatamente quanto ${dest.currency} seu destinatário receberá antes de confirmar a transferência.</p><p>Para quem envia regularmente, configurar transferências recorrentes ou alertas de taxa pode ajudar a aproveitar momentos favoráveis do câmbio BRL e maximizar o valor de cada transferência para ${dest.name_pt}.</p>`,
      };
    },
  },
  {
    tag: "Exchange Rates",
    image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    generate: (dest: typeof DESTINATIONS[0], seed: number) => {
      const rate_change = ["+1.2%", "-0.8%", "+2.1%", "-1.5%", "+0.5%", "-2.3%"][seed % 6];
      const trend = seed % 2 === 0 ? "strengthened" : "weakened";
      const factors = ["Brazil's current account balance", "commodity export performance", "Banco Central do Brasil interest rate decisions", "global risk sentiment", "US Federal Reserve policy"][seed % 5];
      return {
        title_en: `BRL to ${dest.currency}: Exchange Rate Outlook and What It Means for Senders`,
        title_zh: `巴西雷亚尔兑${dest.currency}：汇率展望及对汇款者的意义`,
        title_pt: `BRL para ${dest.currency}: Perspectivas de Taxa de Câmbio e o Que Significa para Quem Envia`,
        excerpt_en: `The BRL-${dest.currency} exchange rate has ${trend} recently. Here's what's driving the movement and how to time your transfers to ${dest.name_en} for maximum value.`,
        excerpt_zh: `近期巴西雷亚尔兑${dest.currency}汇率有所${trend === 'strengthened' ? '走强' : '走弱'}。以下是驱动这一走势的因素以及如何把握时机，最大化向${dest.name_zh}汇款的价值。`,
        excerpt_pt: `A taxa de câmbio BRL-${dest.currency} ${trend === 'strengthened' ? 'valorizou' : 'desvalorizou'} recentemente. Veja o que está impulsionando esse movimento e como aproveitar o melhor momento para enviar dinheiro para ${dest.name_pt}.`,
        body_en: `<p>The Brazilian real has ${trend} against the ${dest.currency_name} by approximately <strong>${rate_change}</strong> over the past month, driven primarily by ${factors}. For Brazilians sending money to <a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_en}</a>, understanding these movements is key to maximizing transfer value.</p><p>Exchange rate volatility is a constant challenge for international senders. When the real strengthens, your BRL buys more ${dest.currency}, making it an ideal time to send larger amounts. Conversely, when the real weakens, sending smaller, more frequent transfers can help average out the cost.</p><p>Several tools can help you stay informed: rate alert apps, economic news from Banco Central do Brasil, and commodity price trackers (since Brazil's real is closely tied to agricultural and mineral exports). PandaRemit offers real-time rate tracking and allows you to lock in a favorable rate when conditions align.</p><p>For 2026, analysts expect continued volatility in the BRL due to election cycles, global commodity demand, and evolving monetary policy. Rather than trying to perfectly time the market, most financial advisors recommend a dollar-cost averaging approach — sending consistent amounts at regular intervals to smooth out rate fluctuations over time.</p><p>The best platform for navigating BRL-${dest.currency} volatility is one that offers transparent rates, low fees, and fast execution. PandaRemit checks all these boxes, making it a reliable choice for Brazilians sending money to ${dest.name_en} regardless of market conditions.</p>`,
        body_zh: `<p>受${factors}影响，过去一个月巴西雷亚尔兑${dest.currency_name}${trend === 'strengthened' ? '升值' : '贬值'}约<strong>${rate_change}</strong>。对于向<a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_zh}</a>汇款的巴西人而言，了解这些走势是最大化转账价值的关键。</p><p>汇率波动是国际汇款者面临的持续挑战。当雷亚尔走强时，您的巴西雷亚尔可以兑换更多${dest.currency}，是汇送较大金额的理想时机。反之，当雷亚尔走弱时，少量多次汇款有助于平摊成本。</p><p>多种工具可以帮助您保持信息灵通：汇率提醒应用、巴西中央银行的经济新闻，以及大宗商品价格追踪工具（因为巴西雷亚尔与农业和矿产出口密切相关）。PandaRemit提供实时汇率追踪，让您在条件有利时锁定优惠汇率。</p><p>2026年，受选举周期、全球大宗商品需求和货币政策演变影响，分析师预计巴西雷亚尔将持续波动。与其试图完美把握市场时机，大多数财务顾问建议采用定期定额策略——定期发送固定金额，以平滑长期的汇率波动。</p><p>应对BRL-${dest.currency}波动的最佳平台是提供透明汇率、低费率和快速执行的平台。PandaRemit满足所有这些条件，无论市场状况如何，都是巴西人向${dest.name_zh}汇款的可靠选择。</p>`,
        body_pt: `<p>O real brasileiro ${trend === 'strengthened' ? 'valorizou' : 'desvalorizou'} aproximadamente <strong>${rate_change}</strong> frente ao ${dest.currency_name} no último mês, impulsionado principalmente por ${factors}. Para brasileiros enviando dinheiro para <a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_pt}</a>, entender esses movimentos é fundamental para maximizar o valor das transferências.</p><p>A volatilidade cambial é um desafio constante para quem faz remessas internacionais. Quando o real se fortalece, seu BRL compra mais ${dest.currency}, tornando-se um momento ideal para enviar valores maiores. Por outro lado, quando o real enfraquece, envios menores e mais frequentes podem ajudar a distribuir o custo.</p><p>Várias ferramentas podem ajudá-lo a se manter informado: aplicativos de alerta de taxa, notícias econômicas do Banco Central do Brasil e rastreadores de preços de commodities (já que o real está intimamente ligado às exportações agrícolas e minerais). O PandaRemit oferece rastreamento de taxas em tempo real e permite travar uma taxa favorável quando as condições se alinham.</p><p>Para 2026, analistas esperam volatilidade contínua no BRL devido a ciclos eleitorais, demanda global por commodities e evolução da política monetária. Em vez de tentar cronometrar o mercado perfeitamente, a maioria dos consultores financeiros recomenda uma abordagem de custo médio — enviar valores consistentes em intervalos regulares para suavizar as flutuações cambiais ao longo do tempo.</p><p>A melhor plataforma para navegar pela volatilidade BRL-${dest.currency} é aquela que oferece taxas transparentes, taxas baixas e execução rápida. O PandaRemit atende todos esses requisitos, tornando-se uma escolha confiável para brasileiros enviando dinheiro para ${dest.name_pt}, independentemente das condições de mercado.</p>`,
      };
    },
  },
  {
    tag: "Remittance",
    image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    generate: (dest: typeof DESTINATIONS[0], seed: number) => {
      const volume = [2.1, 3.4, 1.8, 4.2, 2.9][seed % 5];
      const growth = [12, 18, 8, 22, 15][seed % 5];
      return {
        title_en: `Brazil to ${dest.name_en} Remittances: Trends, Costs, and Best Practices in 2026`,
        title_zh: `巴西至${dest.name_zh}汇款：2026年趋势、成本与最佳实践`,
        title_pt: `Remessas do Brasil para ${dest.name_pt}: Tendências, Custos e Melhores Práticas em 2026`,
        excerpt_en: `Remittance flows from Brazil to ${dest.name_en} reached an estimated $${volume}B in 2025. Here's what's driving growth and how to send smarter.`,
        excerpt_zh: `2025年巴西至${dest.name_zh}的汇款额估计达到${volume}亿美元。以下是推动增长的因素以及如何更聪明地汇款。`,
        excerpt_pt: `Os fluxos de remessas do Brasil para ${dest.name_pt} atingiram um estimado de US$${volume}B em 2025. Veja o que está impulsionando o crescimento e como enviar de forma mais inteligente.`,
        body_en: `<p>Remittance flows from Brazil to <a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_en}</a> have grown by approximately <strong>${growth}%</strong> year-over-year, reflecting both the growth of the Brazilian diaspora and increasing cross-border business ties. This corridor now represents one of Brazil's most active international money transfer routes.</p><p>The primary senders include Brazilian workers and professionals living abroad, students supporting their families back home, and Brazilian businesses paying suppliers or partners in ${dest.name_en}. Each of these use cases has slightly different requirements in terms of speed, amount limits, and required documentation.</p><p>Cost remains the most important factor for regular senders. Banks typically charge 3–5% in fees plus an unfavorable exchange rate spread, meaning the effective cost can exceed 6–8%. Modern platforms like PandaRemit have disrupted this model, offering fees often below 2% with mid-market-aligned exchange rates.</p><p>Compliance is another key consideration. Brazil's Banco Central regulates international transfers, and legitimate platforms like PandaRemit ensure full regulatory compliance on both the Brazilian and ${dest.name_en} sides, protecting both sender and recipient.</p><p>For anyone regularly sending money between Brazil and ${dest.name_en}, establishing a reliable, low-cost corridor is an investment that pays dividends over time. Compare providers quarterly, watch for fee changes, and take advantage of any loyalty or volume discounts offered by your chosen platform.</p>`,
        body_zh: `<p>巴西至<a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_zh}</a>的汇款额同比增长约<strong>${growth}%</strong>，反映了巴西海外华人群体的增长和跨境业务往来的加深。这条汇款通道如今是巴西最活跃的国际转账路线之一。</p><p>主要汇款人包括在海外工作的巴西工人和专业人士、在家乡支持家人的学生，以及向${dest.name_zh}供应商或合作伙伴付款的巴西企业。这些使用场景在速度、金额限制和所需文件方面各有不同要求。</p><p>成本仍是定期汇款者最重要的考量因素。银行通常收取3–5%的费用加上不利的汇率价差，意味着实际成本可能超过6–8%。像PandaRemit这样的现代平台颠覆了这一模式，提供通常低于2%的费率和接近市场中间价的汇率。</p><p>合规性是另一个关键考量。巴西中央银行监管国际转账，PandaRemit等合法平台确保在巴西和${dest.name_zh}两端完全符合监管要求，保护汇款人和收款人的权益。</p><p>对于定期在巴西和${dest.name_zh}之间汇款的人来说，建立可靠、低成本的汇款通道是一项长期回报丰厚的投资。定期比较服务商、关注费率变化，并充分利用您所选平台提供的任何忠诚度或批量折扣。</p>`,
        body_pt: `<p>Os fluxos de remessas do Brasil para <a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_pt}</a> cresceram aproximadamente <strong>${growth}%</strong> ano a ano, refletindo tanto o crescimento da diáspora brasileira quanto os crescentes laços comerciais transfronteiriços. Este corredor agora representa uma das rotas de transferência de dinheiro internacional mais ativas do Brasil.</p><p>Os principais remetentes incluem trabalhadores e profissionais brasileiros que vivem no exterior, estudantes que apoiam suas famílias no Brasil, e empresas brasileiras pagando fornecedores ou parceiros em ${dest.name_pt}. Cada um desses casos de uso tem requisitos ligeiramente diferentes em termos de velocidade, limites de valor e documentação necessária.</p><p>O custo continua sendo o fator mais importante para quem envia regularmente. Os bancos geralmente cobram 3–5% em taxas mais um spread desfavorável na taxa de câmbio, significando que o custo efetivo pode ultrapassar 6–8%. Plataformas modernas como o PandaRemit perturbaram esse modelo, oferecendo taxas frequentemente abaixo de 2% com taxas de câmbio alinhadas ao mercado.</p><p>A conformidade é outra consideração fundamental. O Banco Central do Brasil regula as transferências internacionais, e plataformas legítimas como o PandaRemit garantem conformidade regulatória total tanto no lado brasileiro quanto no de ${dest.name_pt}, protegendo tanto o remetente quanto o destinatário.</p><p>Para quem envia dinheiro regularmente entre o Brasil e ${dest.name_pt}, estabelecer um corredor confiável e de baixo custo é um investimento que rende dividendos ao longo do tempo. Compare provedores trimestralmente, fique atento a mudanças de taxas e aproveite quaisquer descontos de fidelidade ou volume oferecidos pela plataforma escolhida.</p>`,
      };
    },
  },
  {
    tag: "Economy",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    generate: (dest: typeof DESTINATIONS[0], seed: number) => {
      const gdp = [2.3, 2.8, 3.1, 1.9, 2.5][seed % 5];
      const inflation = [4.2, 3.8, 5.1, 4.7, 3.5][seed % 5];
      return {
        title_en: `Brazil's Economy in 2026: What Remittance Senders to ${dest.name_en} Need to Know`,
        title_zh: `2026年巴西经济：向${dest.name_zh}汇款者需要了解的内容`,
        title_pt: `A Economia do Brasil em 2026: O Que Quem Envia Remessas para ${dest.name_pt} Precisa Saber`,
        excerpt_en: `With GDP growth of ${gdp}% and inflation at ${inflation}%, Brazil's economic landscape directly affects the value of every BRL transfer to ${dest.name_en}.`,
        excerpt_zh: `GDP增长${gdp}%，通胀率${inflation}%，巴西经济格局直接影响每笔向${dest.name_zh}转账的巴西雷亚尔价值。`,
        excerpt_pt: `Com crescimento do PIB de ${gdp}% e inflação de ${inflation}%, o cenário econômico brasileiro afeta diretamente o valor de cada transferência de BRL para ${dest.name_pt}.`,
        body_en: `<p>Brazil's economy in 2026 presents a mixed picture for international senders. GDP growth is projected at <strong>${gdp}%</strong>, supported by strong agricultural exports and recovering domestic consumption, while inflation remains above the central bank target at <strong>${inflation}%</strong>. For those sending money to <a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_en}</a>, these numbers have direct implications for how much value reaches the recipient.</p><p>The Banco Central do Brasil's monetary policy response to inflation has kept the Selic rate elevated, which has mixed effects on the real. Higher rates tend to attract foreign capital and support the currency, but they also slow domestic growth and can dampen consumer confidence among potential senders.</p><p>Brazil's trade balance remains a bright spot. Record agricultural exports — particularly soybeans, beef, and coffee — have generated strong foreign currency inflows, providing a natural support for the BRL. This positive trade dynamic is expected to persist through 2026, offering some stability for those planning regular transfers.</p><p>For the Brazilian diaspora sending money to ${dest.name_en}, the key takeaway is that economic uncertainty makes choosing the right transfer platform even more important. Fixed-fee structures and real-time rate locking — both features offered by PandaRemit — can protect you from adverse currency movements and ensure predictable costs.</p><p>Staying informed about Brazil's economic indicators — quarterly GDP releases, monthly IPCA inflation data, and Banco Central rate decisions — can help you make smarter decisions about when and how much to transfer to ${dest.name_en}.</p>`,
        body_zh: `<p>2026年巴西经济对国际汇款者呈现出复杂的图景。GDP增长预计为<strong>${gdp}%</strong>，得到强劲农业出口和国内消费复苏的支撑，而通胀率仍高于央行目标，达<strong>${inflation}%</strong>。对于向<a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_zh}</a>汇款的人而言，这些数字直接影响收款人实际收到的金额价值。</p><p>巴西中央银行应对通胀的货币政策使Selic利率保持高位，对雷亚尔产生了复杂影响。较高的利率往往吸引外资并支撑货币，但也会减缓国内增长，可能打压潜在汇款人的消费信心。</p><p>巴西的贸易平衡仍是亮点。创纪录的农业出口——尤其是大豆、牛肉和咖啡——带来了强劲的外汇流入，为巴西雷亚尔提供了天然支撑。这种积极的贸易动态预计将持续整个2026年，为计划定期汇款的人提供一定的稳定性。</p><p>对于向${dest.name_zh}汇款的巴西海外群体来说，关键启示是经济不确定性使选择正确的转账平台变得更加重要。固定费率结构和实时汇率锁定——PandaRemit提供的两个特性——可以保护您免受不利汇率波动的影响，确保成本可预测。</p><p>及时了解巴西经济指标——季度GDP发布、月度IPCA通胀数据和央行利率决策——有助于您就何时以及汇多少钱到${dest.name_zh}做出更明智的决策。</p>`,
        body_pt: `<p>A economia do Brasil em 2026 apresenta um quadro misto para quem faz remessas internacionais. O crescimento do PIB é projetado em <strong>${gdp}%</strong>, sustentado por fortes exportações agrícolas e recuperação do consumo doméstico, enquanto a inflação permanece acima da meta do banco central em <strong>${inflation}%</strong>. Para quem envia dinheiro para <a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_pt}</a>, esses números têm implicações diretas para quanto valor chega ao destinatário.</p><p>A resposta da política monetária do Banco Central do Brasil à inflação manteve a taxa Selic elevada, com efeitos mistos sobre o real. Taxas mais altas tendem a atrair capital estrangeiro e apoiar a moeda, mas também desaceleram o crescimento doméstico e podem diminuir a confiança dos consumidores entre os potenciais remetentes.</p><p>A balança comercial do Brasil continua sendo um ponto positivo. Exportações agrícolas recordes — especialmente soja, carne bovina e café — geraram fortes entradas de divisas, proporcionando suporte natural ao BRL. Essa dinâmica comercial positiva deve persistir ao longo de 2026, oferecendo alguma estabilidade para quem planeja transferências regulares.</p><p>Para a diáspora brasileira enviando dinheiro para ${dest.name_pt}, a principal conclusão é que a incerteza econômica torna ainda mais importante escolher a plataforma de transferência certa. Estruturas de taxa fixa e bloqueio de taxa em tempo real — ambas funcionalidades oferecidas pelo PandaRemit — podem protegê-lo de movimentos cambiais adversos e garantir custos previsíveis.</p><p>Manter-se informado sobre os indicadores econômicos do Brasil — divulgações trimestrais do PIB, dados mensais de inflação do IPCA e decisões de taxa do Banco Central — pode ajudá-lo a tomar decisões mais inteligentes sobre quando e quanto transferir para ${dest.name_pt}.</p>`,
      };
    },
  },
  {
    tag: "Tips",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    generate: (dest: typeof DESTINATIONS[0], seed: number) => {
      const tip_themes = [
        "timing your transfers to avoid weekends and holidays",
        "using rate alerts to catch favorable exchange windows",
        "consolidating smaller transfers into larger ones to reduce per-transfer fees",
        "verifying recipient bank details before sending",
        "using PIX as a funding source for faster processing",
      ];
      const featured_tips = [tip_themes[seed % 5], tip_themes[(seed + 1) % 5], tip_themes[(seed + 2) % 5]];
      return {
        title_en: `5 Tips to Save Money on Every Transfer from Brazil to ${dest.name_en}`,
        title_zh: `从巴西汇款到${dest.name_zh}省钱的5个技巧`,
        title_pt: `5 Dicas para Economizar em Cada Transferência do Brasil para ${dest.name_pt}`,
        excerpt_en: `Small optimizations add up. These practical tips can save you hundreds of reais on international transfers to ${dest.name_en} over the course of a year.`,
        excerpt_zh: `小的优化积少成多。这些实用技巧可以帮助您在一年内为向${dest.name_zh}的国际转账节省数百雷亚尔。`,
        excerpt_pt: `Pequenas otimizações se acumulam. Essas dicas práticas podem economizar centenas de reais em transferências internacionais para ${dest.name_pt} ao longo do ano.`,
        body_en: `<p>If you regularly send money from Brazil to <a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_en}</a>, the cumulative cost of fees and unfavorable exchange rates can add up to thousands of reais per year. Here are five actionable tips to reduce that cost.</p><p><strong>1. Compare total cost, not just the exchange rate.</strong> Many providers advertise favorable rates but offset them with high flat fees. Always calculate the total amount your recipient will receive — this is the only number that truly matters.</p><p><strong>2. ${featured_tips[0].charAt(0).toUpperCase() + featured_tips[0].slice(1)}.</strong> This alone can save 0.5–1% on many transactions.</p><p><strong>3. ${featured_tips[1].charAt(0).toUpperCase() + featured_tips[1].slice(1)}.</strong> Platforms like PandaRemit offer this feature for free, helping you send when conditions are most favorable.</p><p><strong>4. ${featured_tips[2].charAt(0).toUpperCase() + featured_tips[2].slice(1)}.</strong> Many platforms charge a minimum fee per transaction, so this strategy can significantly reduce your cost per BRL transferred.</p><p><strong>5. Choose a platform built for your corridor.</strong> PandaRemit specializes in transfers from Brazil to destinations like ${dest.name_en}, meaning they've optimized their rates, speeds, and compliance for exactly your needs. This specialization often translates into better value than general-purpose transfer services.</p>`,
        body_zh: `<p>如果您经常从巴西向<a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_zh}</a>汇款，手续费和不利汇率的累计成本每年可能高达数千雷亚尔。以下是降低成本的五个可操作技巧。</p><p><strong>1. 比较总成本，而不仅仅是汇率。</strong> 许多服务商宣传有利汇率，但用高额固定费用来弥补。始终计算收款人实际收到的金额——这是唯一真正重要的数字。</p><p><strong>2. ${featured_tips[0].charAt(0).toUpperCase() + featured_tips[0].slice(1)}。</strong> 仅此一项就可以为许多交易节省0.5–1%。</p><p><strong>3. ${featured_tips[1].charAt(0).toUpperCase() + featured_tips[1].slice(1)}。</strong> PandaRemit等平台免费提供此功能，帮助您在条件最有利时汇款。</p><p><strong>4. ${featured_tips[2].charAt(0).toUpperCase() + featured_tips[2].slice(1)}。</strong> 许多平台对每笔交易收取最低费用，因此这一策略可以显著降低每笔转账的每雷亚尔成本。</p><p><strong>5. 选择专为您的汇款通道打造的平台。</strong> PandaRemit专注于从巴西汇款到${dest.name_zh}等目的地，这意味着他们专门针对您的需求优化了汇率、速度和合规性。这种专业化通常意味着比通用转账服务提供更好的价值。</p>`,
        body_pt: `<p>Se você envia regularmente dinheiro do Brasil para <a href="${dest.url}" target="_blank" rel="noopener" class="text-brazil-green hover:underline">${dest.name_pt}</a>, o custo acumulado de taxas e taxas de câmbio desfavoráveis pode somar milhares de reais por ano. Aqui estão cinco dicas práticas para reduzir esse custo.</p><p><strong>1. Compare o custo total, não apenas a taxa de câmbio.</strong> Muitos provedores anunciam taxas favoráveis mas as compensam com altas taxas fixas. Sempre calcule o valor total que seu destinatário receberá — este é o único número que realmente importa.</p><p><strong>2. ${featured_tips[0].charAt(0).toUpperCase() + featured_tips[0].slice(1)}.</strong> Só isso pode economizar 0,5–1% em muitas transações.</p><p><strong>3. ${featured_tips[1].charAt(0).toUpperCase() + featured_tips[1].slice(1)}.</strong> Plataformas como o PandaRemit oferecem esse recurso gratuitamente, ajudando você a enviar quando as condições são mais favoráveis.</p><p><strong>4. ${featured_tips[2].charAt(0).toUpperCase() + featured_tips[2].slice(1)}.</strong> Muitas plataformas cobram uma taxa mínima por transação, então essa estratégia pode reduzir significativamente seu custo por BRL transferido.</p><p><strong>5. Escolha uma plataforma construída para seu corredor.</strong> O PandaRemit se especializa em transferências do Brasil para destinos como ${dest.name_pt}, o que significa que otimizaram suas taxas, velocidades e conformidade exatamente para suas necessidades. Essa especialização frequentemente se traduz em melhor valor do que serviços de transferência de uso geral.</p>`,
      };
    },
  },
];

function generateSlug(title: string, timestamp: number): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60)
    .replace(/-$/, '') + '-' + timestamp;
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

    const now = Date.now();
    const seed = Math.floor(now / 300000);

    const templateIndex = seed % TEMPLATES.length;
    const destIndex = (seed + Math.floor(seed / TEMPLATES.length)) % DESTINATIONS.length;

    const template = TEMPLATES[templateIndex];
    const dest = DESTINATIONS[destIndex];
    const today = new Date().toISOString().split('T')[0];

    const content = template.generate(dest, seed);
    const slug = generateSlug(content.title_en, now);

    const { data: latestArticle } = await supabase
      .from("articles")
      .select("slug")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    const prevSlug = latestArticle?.slug ?? null;

    const { data: inserted, error: insertError } = await supabase
      .from("articles")
      .insert({
        slug,
        tag: template.tag,
        published_date: today,
        image_url: template.image,
        title_en: content.title_en,
        title_zh: content.title_zh,
        title_pt: content.title_pt,
        excerpt_en: content.excerpt_en,
        excerpt_zh: content.excerpt_zh,
        excerpt_pt: content.excerpt_pt,
        body_en: content.body_en,
        body_zh: content.body_zh,
        body_pt: content.body_pt,
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
      JSON.stringify({ success: true, slug: inserted.slug, tag: template.tag, dest: dest.name_en }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
