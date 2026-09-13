import { createFileRoute } from "@tanstack/react-router";
import { TattooLanding } from "@/components/tattoo/TattooLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-tatuagem";
const title = "Criação de Sites para Studios de Tatuagem | ShinodaLabs";
const description = "Sites profissionais sob medida para tatuadores e studios. Estratégia, design com identidade, desenvolvimento responsivo e SEO técnico.";

export const Route = createFileRoute("/landing-page-tatuagem")({
  component: TattooLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-tatuagem",
      image: "https://shinodalabs.com/images/hero-landing-page-tatuagem.webp",
      imageAlt: "Prévia conceitual de um site para studio de tatuagem: interior contemporâneo",
      keywords: "criação de sites para tatuadores, sites para studios de tatuagem, sites para tatuagem, ShinodaLabs",
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
          name: "Sites para studios de tatuagem",
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
