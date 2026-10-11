import { useEffect, type RefObject } from "react";

/** Motion is progressive enhancement: content is readable before these effects run. */
export default function useCVMotion(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const animations = new Set<Animation>();
    const frames = new Set<number>();
    const cleanups: (() => void)[] = [];
    const frame = (callback: (time: number) => void) => {
      const id = requestAnimationFrame((time) => { frames.delete(id); callback(time); });
      frames.add(id);
      return id;
    };
    const animate = (element: HTMLElement, keyframes: Keyframe[], options: KeyframeAnimationOptions) => {
      if (reduced.matches || !element.animate) return;
      const animation = element.animate(keyframes, options);
      animations.add(animation);
      animation.onfinish = () => { animations.delete(animation); animation.cancel(); };
    };
    const syncMotion = () => {
      root.dataset.cvMotion = reduced.matches || document.hidden ? "paused" : "running";
      if (reduced.matches) { animations.forEach((animation) => animation.cancel()); animations.clear(); }
    };
    syncMotion();
    reduced.addEventListener("change", syncMotion);
    document.addEventListener("visibilitychange", syncMotion);
    cleanups.push(() => { reduced.removeEventListener("change", syncMotion); document.removeEventListener("visibilitychange", syncMotion); });

    root.querySelectorAll<HTMLElement>("[data-hero-reveal]").forEach((element) => {
      const line = element.dataset.heroReveal === "line";
      animate(element, [{ opacity: line ? 1 : 0, transform: line ? "translateY(100%)" : "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: line ? 900 : 800, delay: Number(element.dataset.delay ?? 0), easing: "cubic-bezier(.16, 1, .3, 1)", fill: "backwards" });
    });

    if ("IntersectionObserver" in window) {
      const ambientObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { (entry.target as HTMLElement).dataset.cvAmbientActive = String(entry.isIntersecting); });
      });
      root.querySelectorAll("[data-halo-region]").forEach((element) => ambientObserver.observe(element));
      cleanups.push(() => ambientObserver.disconnect());
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          animate(element, [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 800, delay: Number(element.dataset.delay ?? 0), easing: "cubic-bezier(.16, 1, .3, 1)", fill: "backwards" });
          revealObserver.unobserve(element);
        });
      }, { rootMargin: "0px 0px -60px 0px", threshold: 0 });
      root.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
      cleanups.push(() => revealObserver.disconnect());
      const countObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          countObserver.unobserve(element);
          const to = Number(element.dataset.count);
          const decimals = Number(element.dataset.decimals ?? 0);
          const suffix = element.dataset.suffix ?? "";
          const format = (value: number) => `${value.toLocaleString("es-PE", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;
          if (reduced.matches || to === 0) return;
          const started = performance.now();
          const update = (time: number) => {
            const progress = reduced.matches ? 1 : Math.min(1, (time - started) / 1600);
            element.textContent = format(to * (1 - Math.pow(1 - progress, 3)));
            if (progress < 1) frame(update);
          };
          frame(update);
        });
      }, { rootMargin: "0px 0px -40px 0px", threshold: 0 });
      root.querySelectorAll("[data-count]").forEach((element) => countObserver.observe(element));
      cleanups.push(() => countObserver.disconnect());
    }

    root.querySelectorAll<HTMLElement>("[data-tilt], [data-magnet]").forEach((element) => {
      let pending = false;
      let targetX = 0;
      let targetY = 0;
      let x = 0;
      let y = 0;
      const magnetic = element.hasAttribute("data-magnet");
      const strength = magnetic ? 10 : Number(element.dataset.tilt ?? 6);
      const update = () => {
        pending = false;
        if (reduced.matches || !fine.matches) { x = 0; y = 0; targetX = 0; targetY = 0; }
        else { x += (targetX - x) * .14; y += (targetY - y) * .14; }
        element.style.setProperty("--cv-pointer-dx", `${x.toFixed(3)}${magnetic ? "px" : "deg"}`);
        element.style.setProperty("--cv-pointer-dy", `${y.toFixed(3)}${magnetic ? "px" : "deg"}`);
        if (Math.abs(targetX - x) + Math.abs(targetY - y) > .01) { pending = true; frame(update); }
      };
      const schedule = () => { if (!pending) { pending = true; frame(update); } };
      const move = (event: PointerEvent) => {
        if (reduced.matches || !fine.matches || event.pointerType === "touch") return;
        const rect = element.getBoundingClientRect();
        const normalizedX = (event.clientX - rect.left) / rect.width * 2 - 1;
        const normalizedY = (event.clientY - rect.top) / rect.height * 2 - 1;
        targetX = normalizedX * strength;
        targetY = -normalizedY * strength;
        element.style.setProperty("--cv-pointer-x", `${event.clientX - rect.left}px`);
        element.style.setProperty("--cv-pointer-y", `${event.clientY - rect.top}px`);
        schedule();
      };
      const reset = () => { targetX = 0; targetY = 0; schedule(); };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", reset);
      reduced.addEventListener("change", reset);
      cleanups.push(() => { element.removeEventListener("pointermove", move); element.removeEventListener("pointerleave", reset); reduced.removeEventListener("change", reset); });
    });

    root.querySelectorAll<HTMLElement>("[data-halo-region]").forEach((element) => {
      let pending = false;
      let x = 50;
      let y = 40;
      let targetX = 50;
      let targetY = 40;
      const update = () => {
        pending = false;
        x += (targetX - x) * .08; y += (targetY - y) * .08;
        element.style.setProperty("--cv-halo-x", `${x.toFixed(2)}%`);
        element.style.setProperty("--cv-halo-y", `${y.toFixed(2)}%`);
        if (!reduced.matches && Math.abs(targetX - x) + Math.abs(targetY - y) > .05) { pending = true; frame(update); }
      };
      const move = (event: PointerEvent) => {
        if (reduced.matches || !fine.matches) return;
        const rect = element.getBoundingClientRect();
        targetX = 50 + ((event.clientX - rect.left) / rect.width * 2 - 1) * 20;
        targetY = 40 + ((event.clientY - rect.top) / rect.height * 2 - 1) * 20;
        if (!pending) { pending = true; frame(update); }
      };
      element.addEventListener("pointermove", move);
      cleanups.push(() => element.removeEventListener("pointermove", move));
    });

    let navFrame = 0;
    const navUpdate = () => { navFrame = 0; root.style.setProperty("--cv-nav-progress", String(Math.min(window.scrollY / 80, 1))); };
    const scroll = () => { if (!navFrame) navFrame = requestAnimationFrame(navUpdate); };
    navUpdate();
    window.addEventListener("scroll", scroll, { passive: true });
    cleanups.push(() => { window.removeEventListener("scroll", scroll); cancelAnimationFrame(navFrame); });
    return () => { cleanups.forEach((cleanup) => cleanup()); frames.forEach((id) => cancelAnimationFrame(id)); animations.forEach((animation) => animation.cancel()); };
  }, [ref]);
}
