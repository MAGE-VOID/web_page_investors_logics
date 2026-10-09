import { categories, products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div id="tools" className="pw-wall" data-pw-wall>
      {categories.map((category) => {
        const categoryProducts = products.filter((product) => product.category === category.id);
        return (
          <section
            id={category.id}
            key={category.id}
            className="pw-group pw-wrap"
            data-section={"group-" + category.id}
            data-pw-group={category.id}
            data-category={category.id}
            aria-labelledby={category.id + "-heading"}
          >
            <div className="pw-group-head">
              <h2 id={category.id + "-heading"} className="pw-h2">{category.title}</h2>
              <p className="pw-q">
                <svg className="pw-ico" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                  <circle cx="8" cy="8" r="5.5" /><path d="m5.8 8 1.5 1.5 3-3" />
                </svg>
                {category.question}
              </p>
            </div>
            <div className="pw-grid" data-n={categoryProducts.length}>
              {categoryProducts.map((product) => <ProductCard key={product.id} product={product} index={products.indexOf(product)} />)}
            </div>
          </section>
        );
      })}
    </div>
  );
}
