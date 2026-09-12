import { createFileRoute } from "@tanstack/react-router";
import { RustInspiredSite } from "@/components/site/RustInspiredSite";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_KEYWORDS,
  buildCanonicalLink,
  buildMetaTags,
  buildStructuredDataGraph,
} from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: RustInspiredSite,
  head: () => ({
    meta: buildMetaTags({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      keywords: SITE_KEYWORDS,
      path: "/",
    }),
    links: [
      buildCanonicalLink("/"),
      { rel: "describedby", href: "/llms.txt", type: "text/plain" },
      { rel: "alternate", href: "/site-content.md", type: "text/markdown", title: "ShinodaLabs em texto" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildStructuredDataGraph("/")).replace(/</g, "\\u003c"),
      },
    ],
  }),
});
