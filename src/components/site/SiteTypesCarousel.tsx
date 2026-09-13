import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import type { FileRouteTypes } from "@/routeTree.gen";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowUpRight } from "./LucideAnimated";

type SiteType = {
  href: string;
  image: string;
  name: string;
  category: string;
  text: string;
  code: string;
};

export function SiteTypesCarousel({ items }: { items: SiteType[] }) {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: "auto",
    duration: 28,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback((api: NonNullable<typeof emblaApi>) => {
    setSelected(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const onReInit = () => {
      setSnaps(emblaApi.scrollSnapList());
      sync(emblaApi);
    };
    onReInit();
    emblaApi.on("reInit", onReInit);
    emblaApi.on("select", sync);
    return () => {
      emblaApi.off("reInit", onReInit);
      emblaApi.off("select", sync);
    };
  }, [emblaApi, sync]);

  return (
    <div className="sl-site-types">
      <div className="sl-site-types-viewport" ref={viewportRef}>
        <div className="sl-site-types-track">
          {items.map((siteType, index) => (
            <div className="sl-site-types-slide" key={siteType.href}>
              <Link
                to={siteType.href as FileRouteTypes["to"]}
                preload="intent"
                className="sl-project"
              >
                <div className="sl-project-image">
                  <img
                    src={siteType.image}
                    alt={siteType.name}
                    loading={index === 0 ? "eager" : "lazy"}
                    width="800"
                    height="500"
                  />
                </div>
                <div className="sl-project-content">
                  <div className="sl-project-label">
                    <span>{siteType.category}</span>
                    <ArrowUpRight size={18} />
                  </div>
                  <h3>{siteType.name}</h3>
                  <p>{siteType.text}</p>
                  <code>{siteType.code}</code>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="sl-site-types-controls">
        <div className="sl-site-types-dots" role="tablist" aria-label="Páginas de tipos de sites">
          {snaps.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`sl-site-types-dot${index === selected ? " is-active" : ""}`}
              aria-label={`Ir para o grupo ${index + 1}`}
              aria-current={index === selected ? "true" : undefined}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
        <div className="sl-site-types-arrows">
          <button
            type="button"
            className="sl-site-types-arrow"
            aria-label="Anterior"
            disabled={!canPrev}
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="sl-site-types-arrow"
            aria-label="Próximo"
            disabled={!canNext}
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
