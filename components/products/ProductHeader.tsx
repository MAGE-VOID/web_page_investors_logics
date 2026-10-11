import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import { categories } from "@/data/products";
import ProductMenu from "./ProductMenu";

export default function ProductHeader() {
  return (
    <header className="site-header" data-sh-mode="light" data-sh-fold="false" style={{ "--sh-accent": "#4a6fd6", "--sh-top": "calc(var(--banner-h, 0px) + 14px)" } as CSSProperties}>
      <div className="sh-left">
        <Link to="/home" className="sh-logo" aria-label="Investors Logics home">
          <span className="sh-glyph" aria-hidden="true">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7v12M17 2v20" /><rect x="3.5" y="10" width="7" height="6" rx="1.1" /><rect x="13.5" y="5" width="7" height="13" rx="1.1" fill="currentColor" />
            </svg>
          </span>
          <span className="sh-logo-txt">Investors Logics</span>
        </Link>
        <ProductMenu />
      </div>
      <nav className="sh-links" aria-label="Product categories">
        {categories.map(category => <Link key={category.id} to={"/home#" + category.id}>{category.label}</Link>)}
        <Link to="/home#pricing">Pricing</Link>
      </nav>
      <nav className="sh-actions" aria-label="Resources">
        <Link to="/home/documentation" className="sh-blog">Guides</Link>
        <Link to="/home/contact" className="sh-signin">Contact</Link>
      </nav>
    </header>
  );
}
