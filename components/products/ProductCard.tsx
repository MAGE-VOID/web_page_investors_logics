import type { Product } from "@/data/products";
import ProductDemoCanvas from "./ProductDemoCanvas";
import { ProductModalTrigger } from "./ProductModal";

type ProductCardProps = {
  product: Product;
  index: number;
};

export default function ProductCard({ product, index }: ProductCardProps) {
  const title = [product.name, product.suffix].filter(Boolean).join(" ");
  const tone = product.tone === "success" ? "win" : product.tone === "loss" ? "loss" : product.tone === "data" ? "map" : "skip";

  return (
    <article className="pw-cell" aria-labelledby={product.id + "-title"} data-reveal>
      <ProductModalTrigger productId={product.id} href={product.href} className="pw-card">
        <div className="pw-stage">
          <ProductDemoCanvas
            type={product.demoType}
            status={product.tone}
            seed={index + 1}
            label={title + ": an original synthetic concept session, not live trading data or bot performance."}
          />
          <span className="pw-sim">{product.demoLabel}</span>
          <span className="pw-chip" data-tone={tone}><i aria-hidden="true" />{product.demoResult}</span>
          <span className="pw-play" aria-hidden="true">
            <svg viewBox="0 0 10 12" focusable="false"><path d="M0 0l10 6-10 6z" /></svg>
            Watch
          </span>
        </div>
        <div className="pw-body">
          <div className="pw-top">
            <h3 id={product.id + "-title"} className="pw-name">{product.name}{" "}<span>{product.suffix}</span></h3>
            <span className="pw-platform">{product.platform}</span>
          </div>
          <span className="pw-flow" aria-label="Concept sequence">
            {product.flow.map((step) => <span key={step}>{step}</span>)}
          </span>
          <span className="pw-eg">
            <span className="e"><small>{product.doesLabel ?? "Does"}</small>{product.does}</span>
            <span className="g"><small>Guards</small>{product.guards}</span>
          </span>
          <span className="pw-chips">{product.chips.map((chip) => <i key={chip}>{chip}</i>)}</span>
          <span className="pw-foot"><b>${product.price}</b><span>sample USD</span><span className="in">Not for sale</span></span>
        </div>
      </ProductModalTrigger>
    </article>
  );
}
