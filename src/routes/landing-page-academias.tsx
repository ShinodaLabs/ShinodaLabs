import { createFileRoute } from "@tanstack/react-router";
import { GymLanding } from "@/components/gyms/GymLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-academias";
const title = "Criação de Sites para Academias e Estúdios | ShinodaLabs";
const description =
  "Sites profissionais sob medida para academias, estúdios e boxes. Estratégia, design premium, desenvolvimento responsivo e SEO técnico. Converse com a ShinodaLabs.";

export const Route = createFileRoute("/landing-page-academias")({
  component: GymLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-academias",
      image: "https://shinodalabs.com/images/hero-landing-page-academias.webp",
      imageAlt: "Prévia conceitual de um site para academia: interior contemporâneo de estúdio de treino",
      keywords:
        "criação de sites para academias, sites para estúdios de pilates, sites para boxes, ShinodaLabs",
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
          name: "Sites para academias",
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
