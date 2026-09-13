import { useEffect, useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import {
  animate,
  inView,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type Background = "mesh" | "orbits" | "aurora";
const easing = [0.22, 1, 0.36, 1] as const;

export function MotionSection({
  children,
  className = "",
  background,
  ...props
}: ComponentPropsWithoutRef<"section"> & { background?: Background }) {
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const root = section.current;
    if (!root) return;
    const cleanups: (() => void)[] = [];
    const animations: ReturnType<typeof animate>[] = [];
    const targets = root.querySelectorAll<HTMLElement>(
      ".sl-section-title > *, .sl-hero-grid > div:first-child > *, .sl-stats > div, .sl-benefit, .sl-tech-grid > div, .sl-process-row, .sl-project, .sl-launch, .sl-contact-card",
    );
    if (reduced) {
      targets.forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "none";
      });
      return;
    }
    targets.forEach((element, index) => {
      cleanups.push(
        inView(
          element,
          () => {
            animations.push(
              animate(
                element,
                { opacity: [0.15, 1], y: [24, 0] },
                { duration: 0.75, delay: (index % 4) * 0.07, ease: easing },
              ),
            );
          },
          { amount: 0.15 },
        ),
      );
    });
    root
      .querySelectorAll<HTMLElement>(".sl-project, .sl-tech-grid > div, .sl-contact-card")
      .forEach((element) => {
        let hoverAnimation: ReturnType<typeof animate> | undefined;
        const enter = () => {
          if (!window.matchMedia("(hover: hover)").matches) return;
          hoverAnimation?.stop();
          hoverAnimation = animate(
            element,
            { y: -8 },
            { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          );
        };
        const leave = () => {
          hoverAnimation?.stop();
          hoverAnimation = animate(
            element,
            { y: 0 },
            { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          );
        };
        element.addEventListener("pointerenter", enter);
        element.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          element.removeEventListener("pointerenter", enter);
          element.removeEventListener("pointerleave", leave);
          hoverAnimation?.stop();
        });
      });
    return () => {
      cleanups.forEach((cleanup) => cleanup());
      animations.forEach((animation) => animation.stop());
    };
  }, [reduced]);
  return (
    <section ref={section} className={`${className} sl-motion-section`} {...props}>
      {background && <ScrollBackground target={section} variant={background} />}
      {children}
    </section>
  );
}

function ScrollBackground({
  target,
  variant,
}: {
  target: React.RefObject<HTMLElement | null>;
  variant: Background;
}) {
  const reduced = useReducedMotion();
  const visible = useInView(target, { margin: "100px" });
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 65, damping: 25, restDelta: 0.001 });
  const y = useTransform(progress, [0, 1], [-90, 90]);
  const rotate = useTransform(progress, [0, 1], [-18, 28]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.85, 1.08, 0.95]);
  return (
    <div className={`sl-scroll-background sl-scroll-background-${variant}`} aria-hidden="true">
      <motion.div className="sl-background-grid" style={reduced ? undefined : { y }} />
      <motion.div className="sl-background-glow" style={reduced ? undefined : { y, scale }} />
      {variant === "orbits" ? (
        <motion.div
          className="sl-background-orbits"
          style={reduced ? undefined : { rotate, scale }}
        >
          <i />
          <i />
          <i />
        </motion.div>
      ) : (
        <motion.div
          className="sl-background-beam"
          animate={visible && !reduced ? { x: ["-15%", "15%", "-15%"] } : { x: 0 }}
          transition={{
            duration: visible && !reduced ? 18 : 0,
            repeat: visible && !reduced ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      )}
      <motion.div className="sl-background-line" style={{ scaleX: reduced ? 1 : progress }} />
    </div>
  );
}

export function AnimatedIcon({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref);
  const reduced = useReducedMotion();
  return (
    <motion.span
      ref={ref}
      className="sl-animated-icon"
      animate={
        visible && !reduced ? { y: [0, -4, 0], rotate: [0, 5, 0, -5, 0] } : { y: 0, rotate: 0 }
      }
      transition={{
        duration: visible && !reduced ? 4.5 : 0,
        delay: visible && !reduced ? delay : 0,
        repeat: visible && !reduced ? Infinity : 0,
        ease: "easeInOut",
      }}
      whileHover={reduced ? undefined : { scale: 1.16 }}
    >
      {children}
    </motion.span>
  );
}

export function ServiceTransition({ children, active }: { children: ReactNode; active: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      key={active}
      className="sl-service-transition"
      initial={reduced ? false : { opacity: 0.3, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: easing }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      className="sl-reading-progress"
      style={{ scaleX: reduced ? scrollYProgress : progress }}
      aria-hidden="true"
    />
  );
}
