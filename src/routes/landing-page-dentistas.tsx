import { createFileRoute } from "@tanstack/react-router";
import { DentistLanding } from "@/components/dentists/DentistLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-dentistas";
const title = "Criação de Sites para Dentistas e Clínicas Odontológicas | ShinodaLabs";
const description = "Sites profissionais sob medida para dentistas e clínicas odontológicas. Estratégia, design premium, desenvolvimento responsivo e SEO técnico. Converse com a ShinodaLabs.";

export const Route = createFileRoute("/landing-page-dentistas")({
  component: DentistLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-dentistas",
      image: "https://shinodalabs.com/images/hero-landing-page-dentistas.webp",
      imageAlt: "Prévia conceitual de um site para clínica odontológica: consultório contemporâneo e chamada para contato",
      keywords: "criação de sites para dentistas, sites para clínicas odontológicas, sites para ortodontia, ShinodaLabs",
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
          name: "Sites para dentistas",
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
