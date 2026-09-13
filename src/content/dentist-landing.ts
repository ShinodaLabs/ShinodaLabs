export const dentistCampaign = {
  headline: "Sites para dentistas.",
  highlight: "À altura do seu consultório.",
  description: "A ShinodaLabs cria sites profissionais para dentistas e clínicas odontológicas. Apresente a clínica, esclareça especialidades e facilite o agendamento em um site sob medida.",
  cta: "Quero um site para minha clínica",
};

export const dentistGoals = [
  "Quero criar o primeiro site da clínica",
  "Quero renovar o site da clínica",
  "Quero um site além das redes sociais",
  "Quero ampliar páginas e especialidades do site",
] as const;

export function dentistWhatsAppMessage(name: string, business: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${business ? `, sou da clínica ${business}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const dentistFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o site da sua clínica, reorganizando o conteúdo e melhorando a experiência em diferentes telas. Na conversa inicial, avaliamos a estrutura atual e o que precisa evoluir.",
  ],
  [
    "Tenho Instagram. Por que criar um site para a clínica?",
    "O Instagram mostra o dia a dia. Um site reúne marca, especialidades, equipe, localização e canais de contato em um endereço próprio. Ele complementa as redes e ajuda quem chegou por indicação, anúncio ou busca.",
  ],
  [
    "O que pode fazer parte do site?",
    "Apresentação da clínica, especialidades, equipe, unidades, localização e canais de contato. Blog, novas seções e integrações podem ser avaliados no briefing. O conjunto de páginas é definido na proposta.",
  ],
  [
    "O site funciona no celular e pode ter WhatsApp?",
    "Sim. O desenvolvimento é responsivo, com leitura, navegação e contato adaptados para celular, tablet e desktop. O WhatsApp pode fazer parte da jornada de contato.",
  ],
  [
    "Vocês integram agenda, prontuário ou convênio?",
    "Integrações dependem do que a clínica já usa e do que faz sentido no projeto. Na conversa inicial, avaliamos o que entra no escopo. Esta página trata da criação do site; sistemas clínicos não são prometidos como padrão.",
  ],
  [
    "Quem cuida do design, da publicação e do domínio?",
    "A ShinodaLabs cuida do design, desenvolvimento e lançamento previstos no projeto. Você participa das aprovações. Se já possui um domínio, avaliamos como utilizá-lo; configuração, hospedagem e custos recorrentes são alinhados na proposta.",
  ],
  [
    "Qual é o investimento e o prazo?",
    "Primeiro, entendemos o tamanho do site, os conteúdos e as funcionalidades necessárias. Com isso, apresentamos uma proposta com investimento, entregas, cronograma e etapas de aprovação.",
  ],
  [
    "Posso ampliar o site e contratar manutenção depois?",
    "Sim. Novas páginas, unidades e evolução do site fazem parte dos serviços do estúdio. Quantidade de páginas, manutenção e acompanhamento são combinados conforme a necessidade.",
  ],
];
