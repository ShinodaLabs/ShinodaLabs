export const therapistCampaign = {
  headline: "Sites para psicólogos.",
  highlight: "À altura da sua escuta.",
  description: "A ShinodaLabs cria sites profissionais para psicólogos, terapeutas e clínicas de saúde mental. Apresente a abordagem, esclareça formatos e facilite o primeiro contato com calma e ética.",
  cta: "Quero um site para meu consultório",
};

export const therapistGoals = [
  "Quero criar o primeiro site do consultório",
  "Quero renovar o site",
  "Quero um site além das redes sociais",
  "Quero apresentar abordagem, formatos e equipe",
] as const;

export function therapistWhatsAppMessage(name: string, business: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${business ? `, sou do consultório ${business}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const therapistFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o site do consultório ou da clínica, com tom alinhado à sua prática.",
  ],
  [
    "Tenho Instagram. Por que um site?",
    "O Instagram inicia a conversa. Um site acolhe, explica a abordagem e oferece um caminho de contato em um endereço próprio.",
  ],
  [
    "Como falar de terapia sem parecer marketing agressivo?",
    "Trabalhamos copy ética e clara: o que você faz, para quem, formatos e como entrar em contato — sem promessas de cura.",
  ],
  [
    "O site funciona no celular e pode ter WhatsApp?",
    "Sim. O desenvolvimento é responsivo. O canal de contato é definido no briefing.",
  ],
  [
    "Vocês integram agenda ou prontuário?",
    "Integrações dependem do que você já usa. Avaliamos no briefing. Não são prometidas como padrão.",
  ],
  [
    "Quem cuida do design, da publicação e do domínio?",
    "A ShinodaLabs cuida do design, desenvolvimento e lançamento previstos no projeto. Domínio e hospedagem são alinhados na proposta.",
  ],
  [
    "Qual é o investimento e o prazo?",
    "Entendemos o tamanho do site e apresentamos proposta com investimento, entregas e cronograma.",
  ],
  [
    "Posso ter página para a clínica e para cada profissional?",
    "Sim, quando fizer parte do escopo. Quantidade de páginas é combinada na proposta.",
  ],
];
