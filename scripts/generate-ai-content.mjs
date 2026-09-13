import { readFile, writeFile } from "node:fs/promises";
const root = new URL("../", import.meta.url);
const content = JSON.parse(await readFile(new URL("src/content/site.json", root), "utf8"));
const typeLinks = content.siteTypes
  .map((siteType) => `[${siteType.name.toLowerCase()}](https://shinodalabs.com${siteType.href})`)
  .join(", ");
const summary = `# ShinodaLabs

> Estúdio digital independente de Rodrigo, especializado em sites e landing pages sob medida, design de interfaces, desenvolvimento web, SEO técnico e performance.

Site oficial em português do Brasil: https://shinodalabs.com/

## Conteúdo

- [Apresentação completa em Markdown](https://shinodalabs.com/site-content.md): serviços, perguntas frequentes e canais de contato.
- [Sobre o estúdio](https://shinodalabs.com/#about): design e desenvolvimento com atenção aos detalhes.
- [Soluções digitais](https://shinodalabs.com/#services): serviços oferecidos.
- [Processo](https://shinodalabs.com/#process): discovery, estratégia, design, engenharia e lançamento.
- [Tipos de sites](https://shinodalabs.com/#work): sites e landing pages por mercado, incluindo ${typeLinks}.
- [Perguntas frequentes](https://shinodalabs.com/#faq): respostas sobre o estúdio e como começar.
- [Contato](https://shinodalabs.com/#contact): WhatsApp e e-mail.
`;
const full = `# ShinodaLabs

> Estúdio digital independente. Design com intenção. Código com precisão.

Página original: https://shinodalabs.com/
Idioma: português do Brasil (pt-BR).

## Sobre o estúdio

A ShinodaLabs cria sites e landing pages sob medida para empresas e marcas. Rodrigo é o fundador e desenvolvedor do estúdio. O trabalho une design de interfaces, desenvolvimento web, performance e SEO técnico.

## Serviços

${content.services.map((s) => `### ${s.name}\n\n${s.description}\n\n${s.points.map((p) => `- ${p}`).join("\n")}`).join("\n\n")}

## Processo

1. Discovery: negócio, audiência, objetivos e escopo.
2. Estratégia & UX: arquitetura de informação, fluxos e protótipos navegáveis.
3. Design system: identidade visual, componentes e direção de movimento.
4. Engenharia: desenvolvimento com tipagem forte, revisão e performance.
5. Lançamento & evolução: deploy, SEO técnico e próximos passos do produto.

## Tipos de sites

A ShinodaLabs cria sites e landing pages sob medida para diferentes mercados. Cada nicho tem uma página dedicada com o posicionamento, o formato e o caminho de contato adequados.

${content.siteTypes.map((siteType) => `- ${siteType.name}: ${siteType.text} https://shinodalabs.com${siteType.href}`).join("\n")}

Os tipos de sites estão em https://shinodalabs.com/#work.

## Perguntas frequentes

${content.faq.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}

## Contato

- E-mail: shinodalabs@gmail.com
- WhatsApp: https://wa.me/5551996236798
- Primeiro contato: resposta em até 24 horas.
- GitHub: https://github.com/rodrigordgfs/
- LinkedIn: https://www.linkedin.com/in/shinoda-labs/
- Instagram: https://instagram.com/shinodalabs/
`;
await Promise.all([
  writeFile(new URL("public/llms.txt", root), summary),
  writeFile(new URL("public/site-content.md", root), full),
]);
console.log("Generated llms.txt and site-content.md from shared site content.");
