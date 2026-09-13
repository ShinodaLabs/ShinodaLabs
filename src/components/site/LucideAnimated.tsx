import { forwardRef, useEffect, useImperativeHandle, useRef, type HTMLAttributes } from "react";
import { motion, useAnimation, useInView, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDown as StaticArrowDown,
  Check as StaticCheck,
  MessageCircle as StaticMessageCircle,
  Smartphone as StaticSmartphone,
  type LucideIcon,
} from "lucide-react";
import { EarthIcon } from "@/components/icons/lucide-animated/earth";
import { LayersIcon } from "@/components/icons/lucide-animated/layers";
import { FolderCodeIcon } from "@/components/icons/lucide-animated/folder-code";
import { CursorClickIcon } from "@/components/icons/lucide-animated/cursor-click";
import { ShieldCheckIcon } from "@/components/icons/lucide-animated/shield-check";
import { SearchIcon } from "@/components/icons/lucide-animated/search";
import { ZapIcon } from "@/components/icons/lucide-animated/zap";
import { RocketIcon } from "@/components/icons/lucide-animated/rocket";
import { ArrowRightIcon } from "@/components/icons/lucide-animated/arrow-right";
import { ArrowUpRightIcon } from "@/components/icons/lucide-animated/arrow-up-right";

function interactiveIcon(Icon: typeof RocketIcon) {
  function InteractiveIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
    const element = useRef<HTMLSpanElement>(null);
    const handle = useRef<{ startAnimation: () => void; stopAnimation: () => void }>(null);
    const visible = useInView(element, { amount: 0.15, margin: "120px", once: false });
    const reduced = useReducedMotion();
    useEffect(() => {
      if (reduced) {
        handle.current?.stopAnimation();
        return;
      }
      const play = () => {
        if (document.hidden) return;
        handle.current?.startAnimation();
      };
      const autoPlay = () => {
        if (!visible) return;
        play();
      };
      autoPlay();
      const interval = visible ? setInterval(autoPlay, 2200) : undefined;
      const target =
        element.current?.closest(
          "a, button, article, summary, li, .law-icon, .law-faq-help, .sl-launch-diagram > div",
        ) ?? element.current;
      const visibility = () => {
        if (document.hidden) handle.current?.stopAnimation();
        else autoPlay();
      };
      target?.addEventListener("pointerenter", play);
      target?.addEventListener("focusin", play);
      document.addEventListener("visibilitychange", visibility);
      return () => {
        clearInterval(interval);
        handle.current?.stopAnimation();
        target?.removeEventListener("pointerenter", play);
        target?.removeEventListener("focusin", play);
        document.removeEventListener("visibilitychange", visibility);
      };
    }, [visible, reduced]);
    return (
      <span ref={element} className={`sl-lucide-animated ${className}`} aria-hidden="true">
        <Icon ref={handle} size={size} />
      </span>
    );
  }
  return InteractiveIcon;
}
export const Globe = interactiveIcon(EarthIcon);
export const Layers = interactiveIcon(LayersIcon);
export const Code2 = interactiveIcon(FolderCodeIcon);
export const MousePointer2 = interactiveIcon(CursorClickIcon);
export const ShieldCheck = interactiveIcon(ShieldCheckIcon);
export const Search = interactiveIcon(SearchIcon);
export const Zap = interactiveIcon(ZapIcon);
export const Rocket = interactiveIcon(RocketIcon);
export const ArrowRight = interactiveIcon(ArrowRightIcon);
export const ArrowUpRight = interactiveIcon(ArrowUpRightIcon);

// Additional symbols share the home page's visibility, replay and reduced-motion controls.
function detailIcon(Icon: LucideIcon, variants: Variants) {
  const DetailIcon = forwardRef<
    { startAnimation: () => void; stopAnimation: () => void },
    HTMLAttributes<HTMLSpanElement> & { size?: number }
  >(({ size = 24, ...props }, ref) => {
    const controls = useAnimation();
    useImperativeHandle(
      ref,
      () => ({
        startAnimation: () => {
          void controls.start("animate");
        },
        stopAnimation: () => {
          controls.stop();
          controls.set("normal");
        },
      }),
      [controls],
    );
    return (
      <span {...props}>
        <motion.span
          style={{ display: "inline-flex" }}
          initial="normal"
          animate={controls}
          variants={variants}
        >
          <Icon size={size} />
        </motion.span>
      </span>
    );
  });
  DetailIcon.displayName = "AnimatedDetailIcon";
  return interactiveIcon(DetailIcon);
}

export const ArrowDown = detailIcon(StaticArrowDown, {
  normal: { y: 0 },
  animate: { y: [0, 4, 0], transition: { duration: 0.8 } },
});
export const Check = detailIcon(StaticCheck, {
  normal: { scale: 1 },
  animate: { scale: [1, 0.8, 1.15, 1], transition: { duration: 0.6 } },
});
export const MessageCircle = detailIcon(StaticMessageCircle, {
  normal: { rotate: 0, scale: 1 },
  animate: { rotate: [0, -8, 8, 0], scale: [1, 1.1, 1], transition: { duration: 0.8 } },
});
export const Smartphone = detailIcon(StaticSmartphone, {
  normal: { rotate: 0 },
  animate: { rotate: [0, -7, 7, -4, 4, 0], transition: { duration: 0.7 } },
});
