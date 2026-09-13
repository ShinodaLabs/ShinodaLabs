export const architectCampaign = {
  headline: "Sites para arquitetos.",
  highlight: "À altura do seu traço.",
  description: "A ShinodaLabs cria sites profissionais para escritórios de arquitetura, interiores e engenharia. Apresente o olhar, esclareça o processo e facilite o briefing.",
  cta: "Quero um site para meu escritório",
};

export const architectGoals = [
  "Quero criar o primeiro site",
  "Quero renovar o site / portfólio",
  "Quero um site além das redes",
  "Quero apresentar disciplinas, equipe e processo",
] as const;

export function architectWhatsAppMessage(name: string, business: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${business ? `, sou do escritório ${business}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const architectFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o site e o portfólio digital do escritório.",
  ],
  [
    "Instagram e Behance não bastam?",
    "Eles mostram recortes. Um site reúne linguagem, processo e contato em um endereço próprio, com imagens otimizadas.",
  ],
  [
    "Como fica o portfólio?",
    "Galeria, cases e páginas por obra podem fazer parte do escopo. Definimos na proposta.",
  ],
  [
    "E a performance com fotos grandes?",
    "Imagens de arquitetura são o maior risco de LCP. Tratamos formato, dimensões e carregamento.",
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
