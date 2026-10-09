import { useEffect, useRef, useState, type ReactNode } from "react";
import { categories, demoBundle, products, type CategoryId } from "@/data/products";

type ActiveSection = CategoryId | "pricing";

function GroupIcon({ group }: { group: CategoryId }): ReactNode {
  return (
    <svg className="pw-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      {group === "discover" ? <>
        <circle cx="8" cy="8" r="5.5" /><circle cx="8" cy="8" r="1.4" />
        <path d="M8 1v2.4M8 12.6V15M1 8h2.4M12.6 8H15" />
      </> : group === "automate" ? <>
        <circle cx="8" cy="8" r="2.3" />
        <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4" />
      </> : group === "analyze" ? <>
        <path d="M6 1.5h4M6.6 1.5v4.2L2.6 12.8a1 1 0 0 0 .9 1.7h9a1 1 0 0 0 .9-1.7L9.4 5.7V1.5" />
        <path d="M4.4 10h7.2" />
      </> : <path d="M5.5 4.5L2 8l3.5 3.5M10.5 4.5L14 8l-3.5 3.5M9 3l-2 10" />}
    </svg>
  );
}

export default function CategoryNav() {
  const navRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<ActiveSection>("discover");
  const [folded, setFolded] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const root = document.getElementById("pw-root") ?? nav?.closest<HTMLElement>(".pv.pw");
    const header = document.querySelector<HTMLElement>("header.site-header, header.sh") ?? document.querySelector<HTMLElement>("body > header");
    const hero = document.getElementById("product-hero") ?? document.querySelector<HTMLElement>("[data-pw-hero-root]");
    if (!nav || !root) return;
    const previousFold = root.dataset.pwFold;
    const previousLive = root.dataset.pwLive;
    const previousPause = root.dataset.pause;
    const previousHeaderFold = header?.dataset.shFold;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isFolded = false;
    let sectionObserver: IntersectionObserver | null = null;
    const visibleSections = new Set<HTMLElement>();
    const sections = [...categories.map((category) => document.getElementById(category.id)), document.getElementById("pricing")]
      .filter((section): section is HTMLElement => Boolean(section));

    const observeSections = () => {
      sectionObserver?.disconnect();
      visibleSections.clear();
      const navTop = Math.max(0, Number.parseFloat(getComputedStyle(nav).top) || 0);
      const bandTop = Math.min(Math.round(navTop + nav.getBoundingClientRect().height + 8), Math.round(window.innerHeight * 0.6));
      const bandHeight = Math.min(200, Math.max(40, window.innerHeight - bandTop));
      const bottom = Math.max(0, window.innerHeight - bandTop - bandHeight);
      sectionObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleSections.add(entry.target as HTMLElement);
          else visibleSections.delete(entry.target as HTMLElement);
        }
        const closest = Array.from(visibleSections).map((section) => ({
          id: section.id,
          distance: Math.abs(section.getBoundingClientRect().top - bandTop),
        })).sort((a, b) => a.distance - b.distance)[0];
        if (closest?.id === "pricing") setActive("pricing");
        else {
          const category = categories.find((item) => item.id === closest?.id);
          if (category) setActive(category.id);
          else if (!closest && hero && hero.getBoundingClientRect().bottom > 0) setActive(categories[0].id);
        }
      }, { rootMargin: "-" + bandTop + "px 0px -" + bottom + "px 0px", threshold: [0, 0.05, 0.25, 0.5, 1] });
      sections.forEach((section) => sectionObserver?.observe(section));
    };

    const updateFold = (next: boolean) => {
      root.dataset.pwFold = String(next);
      if (header) header.dataset.shFold = String(next);
      setFolded(next);
      if (next !== isFolded) {
        isFolded = next;
        observeSections();
      }
    };
    root.dataset.pwLive = "true";
    updateFold(Boolean(hero && hero.getBoundingClientRect().bottom <= 0));
    observeSections();
    const foldObserver = hero ? new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry) updateFold(entry.boundingClientRect.bottom <= 0);
    }, { threshold: 0 }) : null;
    if (hero) foldObserver?.observe(hero);
    window.addEventListener("resize", observeSections, { passive: true });
    const foldTransitionEnded = (event: TransitionEvent) => {
      if (event.target === nav && event.propertyName === "top") observeSections();
    };
    nav.addEventListener("transitionend", foldTransitionEnded);

    const revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const target = entry.target as HTMLElement;
        if (target.classList.contains("pw-why-card")) target.classList.add("go");
        else {
          target.dataset.arrive = "true";
          target.dataset.play = "true";
        }
        revealObserver.unobserve(target);
      }
    }, { threshold: 0.1 });
    root.querySelectorAll<HTMLElement>(".pw-why-card, .pv-own").forEach((element) => revealObserver.observe(element));

    const publishPause = (value: boolean) => {
      root.dataset.pause = String(value);
      setPaused(value);
      window.dispatchEvent(new CustomEvent("investors:films-pause", { detail: { paused: value } }));
    };
    const preferenceChanged = () => {
      setReducedMotion(preference.matches);
      if (preference.matches) publishPause(true);
      // Reduced motion cancels the sticky transition, so there is no transitionend to measure from.
      observeSections();
    };
    const handlePause = (event: Event) => {
      const detail = (event as CustomEvent<{ paused: boolean }>).detail;
      if (typeof detail?.paused !== "boolean") return;
      root.dataset.pause = String(detail.paused);
      setPaused(detail.paused);
    };
    window.addEventListener("investors:films-pause", handlePause);
    setPaused(root.dataset.pause === "true");
    preferenceChanged();
    preference.addEventListener("change", preferenceChanged);

    return () => {
      sectionObserver?.disconnect();
      foldObserver?.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("resize", observeSections);
      nav.removeEventListener("transitionend", foldTransitionEnded);
      window.removeEventListener("investors:films-pause", handlePause);
      preference.removeEventListener("change", preferenceChanged);
      if (previousFold === undefined) delete root.dataset.pwFold; else root.dataset.pwFold = previousFold;
      if (previousLive === undefined) delete root.dataset.pwLive; else root.dataset.pwLive = previousLive;
      if (previousPause === undefined) delete root.dataset.pause; else root.dataset.pause = previousPause;
      if (header) {
        if (previousHeaderFold === undefined) delete header.dataset.shFold;
        else header.dataset.shFold = previousHeaderFold;
      }
    };
  }, []);

  function toggleFilms() {
    const next = !paused;
    const root = document.getElementById("pw-root") ?? navRef.current?.closest<HTMLElement>(".pv.pw");
    if (root) root.dataset.pause = String(next);
    setPaused(next);
    window.dispatchEvent(new CustomEvent("investors:films-pause", { detail: { paused: next } }));
  }

  return (
    <nav ref={navRef} className="pw-jump" aria-label="Tool groups" data-fold={folded}>
      <div className="pw-wrap pw-jump-in">
        {categories.map((category) => (
          <a
            className="pw-jump-a"
            key={category.id}
            href={"#" + category.id}
            data-pw-jump={category.id}
            aria-current={active === category.id ? true : undefined}
            onClick={() => setActive(category.id)}
          >
            <GroupIcon group={category.id} />{category.label} <b>{products.filter((product) => product.category === category.id).length}</b>
          </a>
        ))}
        <span className="pw-jump-sp" />
        <a
          className="pw-suite-link"
          href="#pricing"
          data-pw-jump="pricing"
          aria-current={active === "pricing" ? true : undefined}
          onClick={() => setActive("pricing")}
          title="Illustrative collection; not for sale"
        >Sample <b>{"$" + demoBundle.price}</b></a>
        <button type="button" className="pw-ghost" data-pw-pause-all="" aria-pressed={paused} disabled={reducedMotion} onClick={toggleFilms} title={reducedMotion ? "Films are paused for your reduced-motion preference" : undefined}>
          {paused ? "Resume films" : "Pause films"}
        </button>
      </div>
    </nav>
  );
}
