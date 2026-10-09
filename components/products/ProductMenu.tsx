import { Link } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";
import { categories } from "@/data/products";

export default function ProductMenu() {
  const [open, setOpen] = useState(false);
  const host = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => { if (!host.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); } };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [open]);

  return (
    <div className="sh-products" ref={host} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <button ref={trigger} type="button" className="sh-pm-trigger" aria-expanded={open} aria-controls={menuId} aria-label="Product navigation" onClick={() => setOpen(value => !value)}>
        <svg className="sh-pm-grid" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="1" width="6" height="6" rx="1.25" /><rect x="9" y="1" width="6" height="6" rx="1.25" /><rect x="1" y="9" width="6" height="6" rx="1.25" /><rect x="9" y="9" width="6" height="6" rx="1.25" /></svg>
        <span className="sh-pm-txt">Products</span><span className="sh-pm-caret" aria-hidden="true">▾</span>
      </button>
      <nav id={menuId} className="sh-pm-menu" aria-label="Browse Investors Logics" hidden={!open}>
        <Link className="sh-pm-item sh-pm-current" to="/" onClick={() => setOpen(false)}><span className="sh-pm-label">Products <span className="sh-pm-here">Explore</span></span><span className="sh-pm-desc">The collection and its original demonstrations.</span></Link>
        {categories.map(category => <Link className="sh-pm-item" key={category.id} to={"/#" + category.id} onClick={() => setOpen(false)}><span className="sh-pm-label">{category.label}</span><span className="sh-pm-desc">{category.question}</span></Link>)}
        <Link className="sh-pm-item" to="/#pricing" onClick={() => setOpen(false)}><span className="sh-pm-label">Pricing &amp; licensing</span><span className="sh-pm-desc">Sample collection and Blue Boost access.</span></Link>
        <Link className="sh-pm-item" to="/documentation" onClick={() => setOpen(false)}><span className="sh-pm-label">Documentation</span><span className="sh-pm-desc">Public setup, product and support guides.</span></Link>
      </nav>
    </div>
  );
}

