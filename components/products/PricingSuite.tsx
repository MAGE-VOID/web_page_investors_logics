import { useState, type CSSProperties } from "react";
import { demoBundle, licensePlans, products } from "@/data/products";
import { ProductModalTrigger } from "./ProductModal";

export default function PricingSuite() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [focusedItem, setFocusedItem] = useState<string | null>(null);
  const hotItem = hoveredItem ?? focusedItem;
  const total = products.reduce((sum, product) => sum + product.price, 0);
  const difference = total - demoBundle.price;
  const percentage = Math.round(difference / total * 100);
  const segmentGaps = (products.length - 1) * 2;

  return (
    <section className="pv-own" id="pricing" aria-labelledby="own-h" data-suite-section="">
      <div className="pv-wrap" id="own">
        <div className="pv-o-head">
          <h2 id="own-h">The collection. <em>In one.</em></h2>
          <p>Eight original research concepts. A sample collection, not a commercial offer.</p>
        </div>
        <div className="pv-o-stage">
          <div className="pv-o-card-wrap">
            <article className="pv-o-card" aria-label="Illustrative research collection">
              <div>
                <span className="pv-label">Research collection · design sample</span>
                <h3>Every concept on this list.<span>One illustration.</span></h3>
              </div>
              <div className="pv-o-anchor"><span>Sample items</span><s className="pv-o-was">${total.toFixed(2)}</s><b className="pv-o-save">{percentage}% sample</b></div>
              <div className="pv-o-price">
                <span className="pv-sr">${demoBundle.price}, illustrative pricing only. This collection is not for sale.</span>
                <span className="pv-o-cur" aria-hidden="true">$</span>
                <span className="pv-o-num" aria-hidden="true">{demoBundle.price}</span>
                <span className="pv-o-terms" aria-hidden="true">Sample USD<br />Not for sale</span>
              </div>
              <p className="pv-o-per"><b>${(demoBundle.price / products.length).toFixed(2)}</b> per concept. <em>${difference} example difference.</em></p>
              <div className="pv-o-cta-block">
                <a className="pv-o-cta" href="#license-options"><span>Blue Boost licensing <span className="pv-o-p">↗</span></span></a>
                <p className="pv-o-secure">No payment collected on this website</p>
              </div>
              <p className="pv-o-trust"><span>Original concepts</span><i aria-hidden="true">/</i> <span>Simulated sessions</span><i aria-hidden="true">/</i> <span>Sample prices</span><i aria-hidden="true">/</i> <span>Not performance evidence</span></p>
            </article>
          </div>
          <div>
            <div className="pv-o-list-head"><span className="pv-label">Inside the illustration</span><span className="pv-label">Sample price</span></div>
            <ol className="pv-o-list" data-receipt="">
              {products.map(product => (
                <li
                  className="pv-o-row"
                  key={product.id}
                  data-k={product.id}
                  data-hot={hotItem === product.id || undefined}
                  style={{ "--c": product.accent } as CSSProperties}
                  onPointerEnter={() => setHoveredItem(product.id)}
                  onPointerLeave={() => setHoveredItem(null)}
                  onFocus={() => setFocusedItem(product.id)}
                  onBlur={() => setFocusedItem(null)}
                >
                  <ProductModalTrigger productId={product.id} href={product.href} className="pv-o-row-link">
                    <i className="pv-o-key" aria-hidden="true" />
                    <span><span className="pv-o-nm">{product.name} {product.suffix}</span><span className="pv-o-ln">{product.headline}</span></span>
                    <span className="pv-o-pr">${product.price.toFixed(2)}</span>
                  </ProductModalTrigger>
                </li>
              ))}
            </ol>
            <div className="pv-o-sum"><span>Eight example prices</span><b>${total.toFixed(2)}</b></div>
          </div>
        </div>
        <div className="pv-o-math" data-suite-math="" data-hot={hotItem || undefined}>
          <span className="pv-label">The illustration, to scale</span>
          <div className="pv-o-mrow">
            <span className="pv-o-mlbl">Sample items</span>
            <div className="pv-o-bar" role="img" aria-label={"Individual example prices total " + total + " dollars"}>
              {products.map((product, index) => <i
                className="pv-o-seg"
                key={product.id}
                data-k={product.id}
                data-hot={hotItem === product.id || undefined}
                title={product.name + " " + (product.suffix ?? "") + " · $" + product.price}
                style={{ "--c": product.accent, "--i": index, width: "calc((100% - " + segmentGaps + "px) * " + product.price / total + ")" } as CSSProperties}
                onPointerEnter={() => setHoveredItem(product.id)}
                onPointerLeave={() => setHoveredItem(null)}
              />)}
            </div>
            <span className="pv-o-mval">${total.toFixed(2)}</span>
          </div>
          <div className="pv-o-mrow" data-suite="">
            <span className="pv-o-mlbl">Sample bundle</span>
            <div className="pv-o-bar" data-suite="" role="img" aria-label={"Illustrative collection " + demoBundle.price + " dollars. Hypothetical difference " + difference + " dollars."} style={{ "--sw": demoBundle.price / total * 100 + "%" } as CSSProperties}>
              <i className="pv-o-sbar" /><span className="pv-o-kept">${difference} example difference</span>
            </div>
            <span className="pv-o-mval">${demoBundle.price.toFixed(2)}</span>
          </div>
        </div>
        <div className="pv-o-alts" id="license-options" data-alts="hub" aria-label="Blue Boost Bot licensing">
          <article className="pv-o-alt">
            <h3>Rent Blue Boost Bot</h3>
            <span className="pv-o-ap">${licensePlans[0].price}–{licensePlans[2].price}<small>USD</small></span>
            <span className="pv-o-note">{licensePlans.map(plan => plan.days).join(" / ")} days. Compiled .ex5 access.</span>
            <a className="pv-o-go" href="/contact?mode=rental"><span>Request rental terms <span aria-hidden="true">→</span></span></a>
          </article>
          <article className="pv-o-alt">
            <h3>Purchase Blue Boost Bot</h3>
            <span className="pv-o-ap">Enquire</span>
            <span className="pv-o-note">Price and access duration confirmed individually.</span>
            <a className="pv-o-go" href="/contact?mode=purchase"><span>Request purchase conditions <span aria-hidden="true">→</span></span></a>
          </article>
        </div>
        <p className="pv-o-fine">The catalogue and its collection prices are temporary design content, not available products or a discount. Proposed Blue Boost Bot rentals: ${licensePlans[0].price} / {licensePlans[0].days} days, ${licensePlans[1].price} / {licensePlans[1].days} days, ${licensePlans[2].price} / {licensePlans[2].days} days. Final delivery, activation, price and license terms must be confirmed before payment. Source code and the underlying strategy are not included.</p>
      </div>
    </section>
  );
}
