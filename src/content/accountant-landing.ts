export const accountantCampaign = {
  headline: "Sites para contadores.",
  highlight: "À altura do seu escritório.",
  description: "A ShinodaLabs cria sites profissionais para contadores e escritórios de contabilidade. Apresente o escritório, esclareça serviços e facilite o contato com a seriedade que o empresário espera.",
  cta: "Quero um site para meu escritório",
};

export const accountantGoals = [
  "Quero criar o primeiro site",
  "Quero renovar o site",
  "Quero um site além das redes",
  "Quero apresentar serviços, nichos e equipe",
] as const;

export function accountantWhatsAppMessage(name: string, business: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${business ? `, sou do escritório ${business}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const accountantFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o site do escritório.",
  ],
  [
    "Indicação não basta?",
    "Indicação continua importante. Um site explica serviços e ajuda quem chega pelo Google a confiar antes de chamar.",
  ],
  [
    "Vocês integram portal do cliente ou sistema contábil?",
    "Integrações dependem do que o escritório já usa. Avaliamos no briefing. Não são prometidas como padrão.",
  ],
  [
    "Posso ter páginas por serviço ou nicho?",
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
