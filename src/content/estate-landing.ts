export const estateCampaign = {
  headline: "Sites para imobiliárias.",
  highlight: "À altura do seu portfólio.",
  description: "A ShinodaLabs cria sites profissionais para imobiliárias e corretores. Apresente a marca, esclareça a atuação e facilite o contato — além dos portais e do Instagram.",
  cta: "Quero um site para minha imobiliária",
};

export const estateGoals = [
  "Quero criar o primeiro site",
  "Quero renovar o site",
  "Quero um site além dos portais e redes",
  "Quero apresentar marca, equipe e atuação",
] as const;

export function estateWhatsAppMessage(name: string, business: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${business ? `, sou da imobiliária ${business}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const estateFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o site da imobiliária ou da marca do corretor.",
  ],
  [
    "Portais não bastam?",
    "Portais mostram anúncios. Um site constrói a marca, apresenta a equipe e concentra o contato em um endereço próprio.",
  ],
  [
    "Vocês integram CRM ou feed de imóveis?",
    "Integrações dependem do que vocês já usam. Avaliamos no briefing. Não são prometidas como padrão.",
  ],
  [
    "Posso ter área de lançamentos?",
    "Sim, quando fizer parte do escopo.",
  ],
  [
    "O site funciona no celular?",
    "Sim. O desenvolvimento é responsivo.",
  ],
  [
    "Quem cuida do design, da publicação e do domínio?",
    "A ShinodaLabs cuida do design, desenvolvimento e lançamento previstos no projeto.",
  ],
  [
    "Qual é o investimento e o prazo?",
    "Entendemos o tamanho do site e apresentamos proposta com investimento, entregas e cronograma.",
  ],
  [
    "Posso ampliar o site depois?",
    "Sim. Novas páginas e evolução fazem parte dos serviços do estúdio.",
  ],
];
