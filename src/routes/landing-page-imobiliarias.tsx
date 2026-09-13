import { createFileRoute } from "@tanstack/react-router";
import { EstateLanding } from "@/components/real-estate/EstateLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-imobiliarias";
const title = "Criação de Sites para Imobiliárias e Corretores | ShinodaLabs";
const description = "Sites profissionais sob medida para imobiliárias e corretores. Estratégia, design premium, desenvolvimento responsivo e SEO técnico.";

export const Route = createFileRoute("/landing-page-imobiliarias")({
  component: EstateLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-imobiliarias",
      image: "https://shinodalabs.com/images/hero-landing-page-imobiliarias.webp",
      imageAlt: "Prévia conceitual de um site para imobiliária: interior residencial contemporâneo",
      keywords: "criação de sites para imobiliárias, sites para corretores, sites para o mercado imobiliário, ShinodaLabs",
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
          name: "Sites para imobiliárias",
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
