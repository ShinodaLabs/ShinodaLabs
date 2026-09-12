import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    const scroll = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.09,
      respectReducedMotion: true,
      anchors: {
        duration: 1.4,
        lerp: 0,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      },
    });
    return () => scroll.destroy();
  }, []);
  return null;
}
