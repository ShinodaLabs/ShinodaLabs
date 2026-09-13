export const vetCampaign = {
  headline: "Sites para veterinárias.",
  highlight: "À altura do seu cuidado.",
  description: "A ShinodaLabs cria sites profissionais para clínicas veterinárias, hospitais e pet shops. Apresente o espaço, esclareça serviços e facilite o contato — inclusive quando o tutor precisa de clareza agora.",
  cta: "Quero um site para minha clínica",
};

export const vetGoals = [
  "Quero criar o primeiro site",
  "Quero renovar o site",
  "Quero um site além das redes sociais",
  "Quero ampliar páginas de serviços, emergência ou unidades",
] as const;

export function vetWhatsAppMessage(name: string, business: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${business ? `, sou da clínica/pet ${business}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const vetFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o site da clínica, do hospital ou do pet shop.",
  ],
  [
    "Instagram não basta?",
    "O Instagram mostra o carinho do dia a dia. Um site concentra serviços, emergência, equipe e localização em um endereço próprio.",
  ],
  [
    "O que pode entrar no site?",
    "Clínica, pet, banho e tosa, emergência, equipe, unidades, mapa e WhatsApp. Loja e integrações podem ser avaliadas no briefing.",
  ],
  [
    "O site funciona no celular e pode ter WhatsApp?",
    "Sim. O desenvolvimento é responsivo. O WhatsApp pode fazer parte da jornada de contato.",
  ],
  [
    "Vocês integram agendamento, loja ou sistema veterinário?",
    "Integrações dependem do que vocês já usam. Avaliamos no briefing. Não são prometidas como padrão.",
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
    "Posso ter páginas por unidade?",
    "Sim, quando fizer parte do escopo.",
  ],
];
