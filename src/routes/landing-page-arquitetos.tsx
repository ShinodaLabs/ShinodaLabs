import { createFileRoute } from "@tanstack/react-router";
import { ArchitectLanding } from "@/components/architects/ArchitectLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-arquitetos";
const title = "Criação de Sites para Arquitetos e Engenheiros | ShinodaLabs";
const description = "Sites profissionais sob medida para escritórios de arquitetura, interiores e engenharia. Estratégia, design editorial, desenvolvimento responsivo e SEO técnico.";

export const Route = createFileRoute("/landing-page-arquitetos")({
  component: ArchitectLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-arquitetos",
      image: "https://shinodalabs.com/images/hero-landing-page-arquitetos.webp",
      imageAlt: "Prévia conceitual de um site para escritório de arquitetura: interior com luz natural",
      keywords: "criação de sites para arquitetos, sites para engenheiros, sites para escritórios de arquitetura, ShinodaLabs",
    }).map((tag) =>
      "property" in tag && tag.property === "og:url" ? { ...tag, content: url } : tag,
    ),
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sites para arquitetos e engenheiros",
          description,
          url,
          serviceType: "Criação de sites profissionais",
          provider: {
            "@type": "Organization",
            name: "ShinodaLabs",
            url: "https://shinodalabs.com",
          },
          areaServed: { "@type": "Country", name: "Brasil" },
        }),
      },
    ],
  }),
});
