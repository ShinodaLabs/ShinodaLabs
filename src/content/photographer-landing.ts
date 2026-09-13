export const photographerCampaign = {
  headline: "Sites para fotógrafos.",
  highlight: "À altura da sua imagem.",
  description: "A ShinodaLabs cria sites profissionais para fotógrafos e estúdios. Apresente o olhar, esclareça serviços e facilite o contato — com a fotografia no centro e a performance que a maioria dos portfólios ignora.",
  cta: "Quero um site para meu estúdio",
};

export const photographerGoals = [
  "Quero criar o primeiro site",
  "Quero renovar o portfólio",
  "Quero um site além do Instagram",
  "Quero apresentar serviços e tipos de trabalho",
] as const;

export function photographerWhatsAppMessage(name: string, business: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${business ? `, sou do estúdio ${business}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const photographerFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o portfólio digital do fotógrafo ou do estúdio.",
  ],
  [
    "Instagram não basta?",
    "O Instagram é um recorte. Um site mostra o trabalho com mais controle de cor, recorte e contato.",
  ],
  [
    "Como fica a qualidade das fotos?",
    "Usamos formatos modernos, dimensões corretas e carregamento inteligente. O acervo é seu.",
  ],
  [
    "Vocês integram galeria de entrega ao cliente?",
    "Ferramentas de entrega (como Pixieset) podem ser avaliadas no briefing. Não são o produto padrão desta página.",
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
