import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { FileRouteTypes } from "@/routeTree.gen";
import siteContent from "@/content/site.json";
import { SectionBackdrop } from "./SectionBackdrop";

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-32">
      <SectionBackdrop variant="lines" align="right" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-teal">01 / Tipos de sites</div>
            <h2 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Sites pensados para{" "}
              <span className="text-gradient-teal">o seu mercado</span>.
            </h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteContent.siteTypes.map((siteType) => (
            <Link
              key={siteType.href}
              to={siteType.href as FileRouteTypes["to"]}
              preload="intent"
              className="group h-full overflow-hidden border-y border-border card-premium"
            >
              <article>
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={siteType.image}
                    alt={siteType.name}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/0 to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 border-l-2 border-teal bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                    {siteType.category}
                  </div>
                  <span className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center border border-border bg-background/90 text-foreground opacity-90 transition-colors group-hover:border-teal group-hover:text-teal sm:opacity-0 sm:group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-foreground">{siteType.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{siteType.text}</p>
                  <p className="mt-4 border-l border-border pl-2 text-[11px] font-mono text-muted-foreground">
                    {siteType.code}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
