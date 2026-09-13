export const gymCampaign = {
  headline: "Sites para academias.",
  highlight: "À altura da sua marca.",
  description:
    "A ShinodaLabs cria sites profissionais para academias, estúdios e boxes. Apresente sua estrutura, valorize modalidades e equipe e facilite o próximo contato em um site sob medida para o seu espaço.",
  cta: "Quero um site para minha academia",
};

export const gymGoals = [
  "Quero criar o primeiro site da academia",
  "Quero renovar o site da academia",
  "Quero um site além das redes sociais",
  "Quero ampliar as páginas e funcionalidades do site",
] as const;

export function gymWhatsAppMessage(name: string, academy: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${academy ? `, sou da academia ${academy}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const gymFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o site da sua academia, reorganizando o conteúdo e melhorando a experiência em diferentes telas. Na conversa inicial, avaliamos a estrutura atual e o que precisa evoluir.",
  ],
  [
    "Tenho Instagram. Por que criar um site para a academia?",
    "O Instagram mostra o dia a dia. Um site reúne marca, estrutura, modalidades, localização e canais de contato em um endereço próprio. Ele complementa as redes e ajuda quem chegou por indicação, anúncio ou busca a conhecer melhor o espaço antes de ir.",
  ],
  [
    "O que pode fazer parte do site?",
    "Apresentação da academia, modalidades, planos, equipe, unidades, localização e canais de contato. Grade de aulas, blog, novas seções e integrações podem ser avaliados no briefing. O conjunto de páginas e funcionalidades é definido na proposta.",
  ],
  [
    "O site funciona no celular e pode ter WhatsApp?",
    "Sim. O desenvolvimento é responsivo, com leitura, navegação e contato adaptados para celular, tablet e desktop. O WhatsApp pode fazer parte da jornada de contato.",
  ],
  [
    "Vocês integram sistema de matrícula, grade de aulas ou app?",
    "Integrações dependem do que a academia já usa e do que faz sentido no projeto. Na conversa inicial, avaliamos o que entra no escopo. Esta página trata da criação do site; sistemas de gestão e apps não são prometidos como padrão.",
  ],
  [
    "Quem cuida do design, da publicação e do domínio?",
    "A ShinodaLabs cuida do design, desenvolvimento e lançamento previstos no projeto. Você participa das aprovações de conteúdo e apresentação. Se já possui um domínio, avaliamos como utilizá-lo; configuração, hospedagem e custos recorrentes são alinhados na proposta.",
  ],
  [
    "Qual é o investimento e o prazo?",
    "Primeiro, entendemos o tamanho do site, os conteúdos e as funcionalidades necessárias. Com isso, apresentamos uma proposta com investimento, entregas, cronograma e etapas de aprovação. A disponibilidade dos materiais e os retornos da academia também entram nesse planejamento.",
  ],
  [
    "Posso ampliar o site e contratar manutenção depois?",
    "Sim. Novas páginas, unidades e evolução do site fazem parte dos serviços do estúdio. Quantidade de páginas, manutenção e acompanhamento são combinados conforme a necessidade da operação.",
  ],
];
