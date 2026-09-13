export const tattooCampaign = {
  headline: "Sites para tatuadores.",
  highlight: "À altura do seu traço.",
  description: "A ShinodaLabs cria sites profissionais para tatuadores e studios. Apresente o espaço, esclareça estilos e artistas e facilite o orçamento — com a identidade do estúdio.",
  cta: "Quero um site para meu studio",
};

export const tattooGoals = [
  "Quero criar o primeiro site",
  "Quero renovar o site",
  "Quero um site além do Instagram",
  "Quero apresentar artistas, estilos e o studio",
] as const;

export function tattooWhatsAppMessage(name: string, business: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${business ? `, sou do studio ${business}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const tattooFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o site do studio ou do tatuador.",
  ],
  [
    "Instagram não basta?",
    "O Instagram mostra o flash. Um site apresenta o studio, os artistas e o caminho do orçamento em um endereço próprio.",
  ],
  [
    "Posso ter página por artista?",
    "Sim, quando fizer parte do escopo.",
  ],
  [
    "Como fica o portfólio de tatuagens?",
    "Galerias e páginas de trabalho podem entrar no projeto. Cuidamos da performance das imagens. O acervo e as autorizações são do studio.",
  ],
  [
    "Vocês integram agenda?",
    "Agenda e WhatsApp podem fazer parte da jornada. Integrações específicas avaliamos no briefing.",
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
