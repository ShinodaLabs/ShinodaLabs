import { createFileRoute } from "@tanstack/react-router";
import { SalonLanding } from "@/components/salons/SalonLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-saloes";
const title = "Criação de Sites para Salões e Barbearias | ShinodaLabs";
const description = "Sites profissionais sob medida para salões, barbearias e studios. Estratégia, design premium, desenvolvimento responsivo e SEO técnico.";

export const Route = createFileRoute("/landing-page-saloes")({
  component: SalonLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-saloes",
      image: "https://shinodalabs.com/images/hero-landing-page-saloes.webp",
      imageAlt: "Prévia conceitual de um site para salão: interior contemporâneo e chamada para agendar",
      keywords: "criação de sites para salões, sites para barbearias, sites para studios de beleza, ShinodaLabs",
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
          name: "Sites para salões e barbearias",
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
