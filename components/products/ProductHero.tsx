import { demoBundle, products } from "@/data/products";
import HeroFilm from "./HeroFilm";

// Own, simple line artwork; none of the reference site's assets are used.
const icons = [
  ["M4 7V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5", "M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"],
  ["M4 18h16M5 14a7 7 0 0 1 14 0M8 14a4 4 0 0 1 8 0", "M12 3v3M4 7l2 2M20 7l-2 2"],
  ["M5 3h10l4 4v14H5zM15 3v5h4", "M8 11h8M8 15h6M8 18h4"],
  ["M3 7h5v5H3zM16 12h5v5h-5z", "M8 9h4v5h4M11 6l3 3-3 3"],
  ["M3 18h4l4-7h4l3-5h3", "M5 16v4M11 9v4M18 4v4"],
  ["M12 3 22 20H2z", "M12 8v6M12 17h.01"],
  ["M3 3h7v7H3zM14 14h7v7h-7z", "M14 3h7v7h-7zM3 14h7v7H3zM10 7h4M7 10v4"],
  ["M4 6h16v14H4zM8 3h8v3M8 10h8", "M8 14h3M14 14h2M8 17h8"],
] as const;

export default function ProductHero() {
  const tools = products.map((product, index) => ({
    id: product.id,
    name: product.name,
    fullName: [product.name, product.suffix].filter(Boolean).join(" "),
    accent: product.accent,
    paths: [...icons[index % icons.length]],
  }));
  const individualTotal = products.reduce((total, product) => total + product.price, 0);

  return (
    <section id="product-hero" className="pw-hero pw-wrap" aria-labelledby="pw-h1" data-pw-hero-root="" data-section="hero">
      <div className="pw-h-top">
        <p className="pw-eyebrow">Built for research &amp; MetaTrader 5</p>
        <h1 id="pw-h1" className="pw-h1">Explore every tool <span>with intent.</span></h1>
        <div className="pw-h-side">
          <p className="pw-thesis">Explore the context. Shape a routine. Review the decisions. Eight concepts, one collection.</p>
          <div className="pw-h-cta">
            <div className="hero__cta-wrap">
              <a className="pw-buy" href="#pricing"><span>Collection · ${demoBundle.price}</span></a>
            </div>
            <a className="pw-ghost" href="#discover">See each tool <span aria-hidden="true">↓</span></a>
          </div>
          <p className="pw-hero-quiet">Illustrative catalogue · not for sale · bot licensing is separate</p>
        </div>
        <HeroFilm tools={tools} price={demoBundle.price} individualTotal={individualTotal} />
      </div>
    </section>
  );
}
