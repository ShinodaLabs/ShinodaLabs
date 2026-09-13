export const salonCampaign = {
  headline: "Sites para salões e barbearias.",
  highlight: "À altura da sua cadeira.",
  description: "A ShinodaLabs cria sites profissionais para salões, barbearias e studios. Apresente o espaço, esclareça serviços e profissionais e facilite o agendamento.",
  cta: "Quero um site para meu salão",
};

export const salonGoals = [
  "Quero criar o primeiro site",
  "Quero renovar o site",
  "Quero um site além das redes sociais",
  "Quero apresentar serviços, equipe e unidades",
] as const;

export function salonWhatsAppMessage(name: string, business: string, goal: string) {
  return `Olá ShinodaLabs, sou o(a) ${name}${business ? `, sou do salão/barbearia ${business}` : ""}.${goal ? ` ${goal}.` : ""} Quero conversar para tirar algumas dúvidas.`;
}

export const salonFaq = [
  [
    "Já tenho um site. Vocês podem renová-lo?",
    "Sim. Podemos redesenhar e desenvolver o site do salão, da barbearia ou do studio.",
  ],
  [
    "Instagram não basta?",
    "O Instagram mostra o trabalho. Um site fecha serviços, equipe, localização e o caminho para agendar.",
  ],
  [
    "Vocês integram Booksy, Trinks ou WhatsApp?",
    "WhatsApp pode fazer parte da jornada. Outras agendas avaliamos no briefing.",
  ],
  [
    "Posso ter portfólio de trabalhos?",
    "Sim, quando fizer parte do escopo. Cuidamos da performance das imagens.",
  ],
  [
    "Tabela de preços entra?",
    "Pode entrar se vocês quiserem. Definimos na proposta, junto com o restante do conteúdo.",
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
