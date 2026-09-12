import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
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
    const visible = useInView(element);
    const reduced = useReducedMotion();
    useEffect(() => {
      const controller = handle.current;
      if (!controller) return;
      let restartTimer: ReturnType<typeof setTimeout> | undefined;
      const play = () => {
        if (!visible || document.hidden) return;
        clearTimeout(restartTimer);
        controller.stopAnimation();
        restartTimer = setTimeout(() => controller.startAnimation(), 180);
      };
      if (visible) play();
      else controller.stopAnimation();
      // Replay one-shot icons too; reduced motion uses longer rests between cycles.
      const interval = visible ? setInterval(play, reduced ? 8000 : 4500) : undefined;
      const target =
        element.current?.closest("a, button, article, .sl-launch-diagram > div") ?? element.current;
      const visibility = () => {
        clearTimeout(restartTimer);
        if (document.hidden) controller.stopAnimation();
        else play();
      };
      target?.addEventListener("pointerenter", play);
      target?.addEventListener("focusin", play);
      document.addEventListener("visibilitychange", visibility);
      return () => {
        clearTimeout(restartTimer);
        clearInterval(interval);
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
