import { createFileRoute } from "@tanstack/react-router";
import { TherapistLanding } from "@/components/therapists/TherapistLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-psicologos";
const title = "Criação de Sites para Psicólogos e Terapeutas | ShinodaLabs";
const description = "Sites profissionais sob medida para psicólogos, terapeutas e clínicas de saúde mental. Estratégia, design sereno, desenvolvimento responsivo e SEO técnico.";

export const Route = createFileRoute("/landing-page-psicologos")({
  component: TherapistLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-psicologos",
      image: "https://shinodalabs.com/images/hero-landing-page-psicologos.webp",
      imageAlt: "Prévia conceitual de um site para consultório de psicologia: sala de atendimento serena",
      keywords: "criação de sites para psicólogos, sites para terapeutas, sites para clínicas de psicologia, ShinodaLabs",
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
          name: "Sites para psicólogos",
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
