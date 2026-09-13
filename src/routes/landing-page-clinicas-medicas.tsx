import { createFileRoute } from "@tanstack/react-router";
import { ClinicLanding } from "@/components/clinics/ClinicLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-clinicas-medicas";
const title = "Criação de Sites para Clínicas Médicas | ShinodaLabs";
const description = "Sites profissionais sob medida para clínicas médicas e consultórios. Estratégia, design premium, desenvolvimento responsivo e SEO técnico. Converse com a ShinodaLabs.";

export const Route = createFileRoute("/landing-page-clinicas-medicas")({
  component: ClinicLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-clinicas-medicas",
      image: "https://shinodalabs.com/images/hero-landing-page-clinicas-medicas.webp",
      imageAlt: "Prévia conceitual de um site para clínica médica: recepção contemporânea e chamada para contato",
      keywords: "criação de sites para clínicas médicas, sites para consultórios, sites para clínicas, ShinodaLabs",
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
          name: "Sites para clínicas médicas",
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
