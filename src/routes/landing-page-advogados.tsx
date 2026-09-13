import { createFileRoute } from "@tanstack/react-router";
import { LawyerLanding } from "@/components/lawyers/LawyerLanding";
import { buildMetaTags } from "@/lib/seo";

const url = "https://shinodalabs.com/landing-page-advogados";
const title = "Criação de Sites para Advogados e Escritórios | ShinodaLabs";
const description =
  "Sites profissionais sob medida para advogados e escritórios de advocacia. Estratégia, design premium, desenvolvimento responsivo e SEO técnico. Converse com a ShinodaLabs.";

export const Route = createFileRoute("/landing-page-advogados")({
  component: LawyerLanding,
  head: () => ({
    meta: buildMetaTags({
      title,
      description,
      path: "/landing-page-advogados",
      keywords: "criação de sites para advogados, sites para escritórios de advocacia, ShinodaLabs",
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
          name: "Sites para advogados",
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
