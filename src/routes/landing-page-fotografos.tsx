import { createFileRoute } from "@tanstack/react-router";
import { PhotographerLanding } from "@/components/photographers/PhotographerLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-fotografos";
const title = "Criação de Sites para Fotógrafos e Estúdios | ShinodaLabs";
const description = "Sites profissionais sob medida para fotógrafos e estúdios. Portfólio rápido, design editorial, desenvolvimento responsivo e SEO técnico.";

export const Route = createFileRoute("/landing-page-fotografos")({
  component: PhotographerLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-fotografos",
      image: "https://shinodalabs.com/images/hero-landing-page-fotografos.webp",
      imageAlt: "Prévia conceitual de um site para fotógrafo: estúdio com luz de tungstênio",
      keywords: "criação de sites para fotógrafos, sites para estúdios fotográficos, portfólio para fotógrafos, ShinodaLabs",
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
          name: "Sites para fotógrafos",
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
