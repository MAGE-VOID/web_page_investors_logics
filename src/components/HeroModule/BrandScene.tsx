import { useEffect, useId, useRef, useState } from "react";
import styles from "./BrandScene.module.css";

interface BrandSceneProps {
  staticOnly?: boolean;
}

const SHORT_CANDLE_PATH = "M-34-25h26a4 4 0 0 1 4 4v42a4 4 0 0 1-4 4h-26a4 4 0 0 1-4-4v-42a4 4 0 0 1 4-4ZM-30-17v34h18v-34ZM-25-35h8v10h-8ZM-25 25h8v10h-8Z";
const TALL_CANDLE_PATH = "M8-68h26a4 4 0 0 1 4 4V64a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V-64a4 4 0 0 1 4-4ZM17-83h8v15h-8ZM17 68h8v15h-8Z";

/** The static artwork is also the low-power and WebGL-unavailable experience. */
export default function BrandScene({ staticOnly = false }: BrandSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const id = useId().replace(/:/g, "");
  const metal = id + "-metal";
  const steel = id + "-steel";
  const blue = id + "-blue";
  const shadow = id + "-shadow";

  useEffect(() => {
    const host = hostRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const device = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    if (!host || staticOnly || preference.matches || device.connection?.saveData ||
      (device.deviceMemory !== undefined && device.deviceMemory <= 2)) return;

    let cancelled = false;
    let loading = false;
    let dispose: (() => void) | undefined;

    async function loadScene() {
      if (loading || cancelled) return;
      loading = true;
      try {
        const { mountBrandScene } = await import("./brandSceneRenderer");
        if (cancelled) return;
        dispose = mountBrandScene(host!, (isReady) => {
          if (!cancelled) setReady(isReady);
        });
      } catch {
        // The first paint remains complete if the module or WebGL cannot load.
        if (!cancelled) setReady(false);
      }
    }

    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer?.disconnect();
          void loadScene();
        }
      },
      { rootMargin: "160px" },
    );
    if (observer) observer.observe(host);
    else void loadScene();

    return () => {
      cancelled = true;
      observer?.disconnect();
      dispose?.();
    };
  }, [staticOnly]);

  return (
    <div className={styles.scene} data-ready={(!staticOnly && ready) || undefined} aria-hidden="true">
      <svg className={styles.poster} viewBox="0 0 640 640" focusable="false">
        <defs>
          <linearGradient id={metal} x1="0" y1="0" x2="1" y2=".8">
            <stop stopColor="#ffffff" />
            <stop offset=".3" stopColor="#e4eaf4" />
            <stop offset=".55" stopColor="#9aadc5" />
            <stop offset=".73" stopColor="#e4eaf4" />
            <stop offset="1" stopColor="#788ca8" />
          </linearGradient>
          <linearGradient id={steel} x1="0" y1="0" x2=".9" y2="1">
            <stop stopColor="#dce6f3" />
            <stop offset=".33" stopColor="#94a6bd" />
            <stop offset=".68" stopColor="#455975" />
            <stop offset="1" stopColor="#8b9bb2" />
          </linearGradient>
          <linearGradient id={blue} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#79c0ff" />
            <stop offset="1" stopColor="#1f6feb" />
          </linearGradient>
          <radialGradient id={shadow}>
            <stop stopColor="#010409" stopOpacity=".8" />
            <stop offset="1" stopColor="#010409" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="334" cy="548" rx="185" ry="23" fill={"url(#" + shadow + ")"} />
        <g transform="translate(322 306) rotate(-16) skewY(7) scale(1 .91)" fill="none">
          <path d="M205 75A218 218 0 0 0-140-167" transform="translate(7 9)"
            stroke="#27354a" strokeWidth="23" />
          <path d="M205 75A218 218 0 0 0-140-167"
            stroke={"url(#" + steel + ")"} strokeWidth="16" />
          <path d="M205 75A218 218 0 0 0-140-167" transform="translate(12 10) rotate(180)"
            stroke="#35445a" strokeWidth="18" />
          <path d="M205 75A218 218 0 0 0-140-167" transform="translate(10 7) rotate(180)"
            stroke="#657994" strokeWidth="2" />
          <path d="M185-19A186 186 0 1 0 177 59" stroke="#35445a" strokeWidth="2" />
          <path d="M183-33A186 186 0 0 0 154-105"
            stroke={"url(#" + blue + ")"} strokeWidth="6" strokeLinecap="round" />
          <circle cx="154" cy="-105" r="5.5" fill="#79c0ff" stroke="none" />
        </g>
        <g transform="translate(317 310) scale(1.6)">
          <g transform="translate(4 6)" fill="#36445d">
            <path d={SHORT_CANDLE_PATH} fillRule="evenodd" />
            <path d={TALL_CANDLE_PATH} />
          </g>
          <g fill={"url(#" + metal + ")"}>
            <path d={SHORT_CANDLE_PATH} fillRule="evenodd" />
            <path d={TALL_CANDLE_PATH} />
          </g>
        </g>
      </svg>
      <div ref={hostRef} className={styles.stage} />
    </div>
  );
}
