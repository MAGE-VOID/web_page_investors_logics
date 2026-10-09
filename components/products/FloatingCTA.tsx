import { useEffect, useState } from "react";
import { demoBundle } from "@/data/products";

export default function FloatingCTA() {
  const [betweenSections, setBetweenSections] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("product-hero") ?? document.querySelector<HTMLElement>("[data-pw-hero-root]");
    const pricing = document.getElementById("pricing");
    const close = document.querySelector<HTMLElement>(".pw-close");
    if (!hero || !pricing) return;
    let heroPassed = false;
    let pricingReached = false;
    let closeVisible = false;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) heroPassed = entry.boundingClientRect.bottom <= 0;
        if (entry.target === pricing) pricingReached = entry.boundingClientRect.top <= window.innerHeight;
        if (entry.target === close) closeVisible = entry.isIntersecting;
      }
      setBetweenSections(heroPassed && !pricingReached && !closeVisible);
    }, { threshold: 0 });
    observer.observe(hero);
    observer.observe(pricing);
    if (close) observer.observe(close);
    const handleDialog = (event: Event) => {
      setDialogOpen(Boolean((event as CustomEvent<{ open: boolean }>).detail?.open));
    };
    window.addEventListener("investors:product-dialog", handleDialog);
    return () => {
      observer.disconnect();
      window.removeEventListener("investors:product-dialog", handleDialog);
    };
  }, []);

  const visible = betweenSections && !dialogOpen;
  return (
    <aside className="pw-dock" data-pw-dock="" data-show={visible ? "" : undefined} aria-hidden={!visible} inert={!visible} aria-label="Illustrative collection">
      <span className="pw-dock-t">
        <b>8 concept tools</b> · sample
        <span className="pw-dock-fine"> · not for sale</span>
      </span>
      <a className="pw-buy pw-dock-go" href="#pricing" tabIndex={visible ? 0 : -1}>
        <span>{"View sample · $" + demoBundle.price}</span>
      </a>
    </aside>
  );
}
