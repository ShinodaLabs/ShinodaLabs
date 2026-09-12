import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const interactiveSelector = "a, button, summary, [role='button'], [role='tab'], .sl-globe-canvas";

export function CustomCursor() {
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
