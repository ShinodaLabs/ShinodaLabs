import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const interactiveSelector =
  "a, button, summary, [role='button'], [role='tab'], .sl-globe-canvas, .law-button, .law-header-contact, .law-presence-card, .law-service-card, .law-email, .law-browser, .law-preview-badge, .law-faq-help, .law-mobile-cta a";

const landingAccents: Record<string, string> = {
  "/landing-page-advogados": "#5ee3bd",
  "/landing-page-academias": "#ff7a3c",
  "/landing-page-dentistas": "#4fd4c4",
  "/landing-page-clinicas-medicas": "#4aa8e0",
  "/landing-page-psicologos": "#b4a5e8",
  "/landing-page-veterinarias": "#f08a5a",
  "/landing-page-saloes": "#d4926a",
  "/landing-page-imobiliarias": "#c4b06a",
  "/landing-page-arquitetos": "#4ec4e0",
  "/landing-page-fotografos": "#e8b84a",
  "/landing-page-contadores": "#3dba8a",
  "/landing-page-tatuagem": "#e84545",
};

const homeDarkAccent = "#719fff";
const homeLightAccent = "#2568f5";

function accentForPath(pathname: string) {
  const landing = landingAccents[pathname];
  if (landing) return landing;
  const isLightHome = document.querySelector(".sl-site:not(.sl-dark)");
  return isLightHome ? homeLightAccent : homeDarkAccent;
}

export function CustomCursor() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 520, damping: 36, mass: 0.2 });
  const smoothY = useSpring(cursorY, { stiffness: 520, damping: 36, mass: 0.2 });

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (forced-colors: none)",
    );
    const updateEnabled = () => setEnabled(canUseCustomCursor.matches);

    updateEnabled();
    canUseCustomCursor.addEventListener("change", updateEnabled);

    return () => canUseCustomCursor.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    const apply = () => {
      document.documentElement.style.setProperty("--cursor-accent", accentForPath(pathname));
    };
    apply();

    if (pathname !== "/") return;

    const site = document.querySelector(".sl-site");
    if (!site) return;
    const observer = new MutationObserver(apply);
    observer.observe(site, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("custom-cursor-enabled");
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) {
        handlePointerLeave();
        return;
      }
      document.documentElement.classList.add("custom-cursor-enabled");
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setVisible(true);
      setActive(Boolean((event.target as Element | null)?.closest(interactiveSelector)));
    };

    const handlePointerLeave = () => {
      setVisible(false);
      setPressed(false);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerLeave);
    };
  }, [cursorX, cursorY, enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="sl-cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: visible ? 1 : 0, scale: pressed ? 0.65 : 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="sl-cursor-ring"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.8 : active ? 1.5 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
