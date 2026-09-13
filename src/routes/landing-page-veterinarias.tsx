import { createFileRoute } from "@tanstack/react-router";
import { VetLanding } from "@/components/vets/VetLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-veterinarias";
const title = "Criação de Sites para Veterinárias e Pet Shops | ShinodaLabs";
const description = "Sites profissionais sob medida para clínicas veterinárias, hospitais e pet shops. Estratégia, design premium, desenvolvimento responsivo e SEO técnico.";

export const Route = createFileRoute("/landing-page-veterinarias")({
  component: VetLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-veterinarias",
      image: "https://shinodalabs.com/images/hero-landing-page-veterinarias.webp",
      imageAlt: "Prévia conceitual de um site para clínica veterinária: recepção acolhedora e chamada para contato",
      keywords: "criação de sites para veterinárias, sites para pet shops, sites para clínicas veterinárias, ShinodaLabs",
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
          name: "Sites para veterinárias",
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
