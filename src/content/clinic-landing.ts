export const clinicCampaign = {
  headline: "Sites para clínicas.",
  highlight: "À altura do seu cuidado.",
  description: "A ShinodaLabs cria sites profissionais para clínicas médicas e consultórios. Apresente a clínica, esclareça especialidades e facilite o contato em um site sob medida.",
  cta: "Quero um site para minha clínica",
};

export const clinicGoals = [
  "Quero criar o primeiro site da clínica",
  "Quero renovar o site da clínica",
  "Quero um site além das redes sociais",
  "Quero ampliar páginas de especialidades e unidades",
] as const;

export function clinicWhatsAppMessage(name: string, business: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${business ? `, sou da clínica ${business}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const clinicFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o site da sua clínica, reorganizando o conteúdo e melhorando a experiência em diferentes telas.",
  ],
  [
    "Tenho Instagram e Google. Por que um site?",
    "Eles mostram que a clínica existe. Um site reúne marca, especialidades, equipe, unidades e o caminho para marcar consulta em um endereço próprio.",
  ],
  [
    "O que pode fazer parte do site?",
    "Apresentação da clínica, especialidades, equipe, unidades, localização e canais de contato. Blog e integrações podem ser avaliados no briefing.",
  ],
  [
    "O site funciona no celular e pode ter WhatsApp?",
    "Sim. O desenvolvimento é responsivo. O WhatsApp pode fazer parte da jornada de contato.",
  ],
  [
    "Vocês integram agenda, prontuário ou convênio?",
    "Integrações dependem do que a clínica já usa. Avaliamos no briefing. Sistemas clínicos não são prometidos como padrão.",
  ],
  [
    "Quem cuida do design, da publicação e do domínio?",
    "A ShinodaLabs cuida do design, desenvolvimento e lançamento previstos no projeto. Domínio, hospedagem e custos recorrentes são alinhados na proposta.",
  ],
  [
    "Qual é o investimento e o prazo?",
    "Entendemos o tamanho do site e as funcionalidades. Em seguida, apresentamos proposta com investimento, entregas e cronograma.",
  ],
  [
    "Posso ampliar o site e contratar manutenção depois?",
    "Sim. Novas páginas, unidades e evolução do site fazem parte dos serviços do estúdio.",
  ],
];
