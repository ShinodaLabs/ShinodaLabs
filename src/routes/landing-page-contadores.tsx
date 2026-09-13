import { createFileRoute } from "@tanstack/react-router";
import { AccountantLanding } from "@/components/accountants/AccountantLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-contadores";
const title = "Criação de Sites para Contadores e Escritórios | ShinodaLabs";
const description = "Sites profissionais sob medida para contadores e escritórios de contabilidade. Estratégia, design premium, desenvolvimento responsivo e SEO técnico.";

export const Route = createFileRoute("/landing-page-contadores")({
  component: AccountantLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-contadores",
      image: "https://shinodalabs.com/images/hero-landing-page-contadores.webp",
      imageAlt: "Prévia conceitual de um site para escritório de contabilidade: sala contemporânea",
      keywords: "criação de sites para contadores, sites para escritórios de contabilidade, sites para BPO, ShinodaLabs",
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
          name: "Sites para contadores",
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
