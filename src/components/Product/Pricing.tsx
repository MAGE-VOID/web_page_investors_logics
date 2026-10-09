import { Link } from "react-router-dom";
import { licenseIncludes, licensePlans } from "@/data/product";
import Icon from "@/components/UI/Icon";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section id="license-options" className={styles.section} aria-labelledby="license-heading">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <div>
            <h2 id="license-heading">One bot. Your choice of access.</h2>
            <p>Rent for a defined period, or enquire about buying. The same Blue Boost Expert Advisor in every rental.</p>
          </div>
          <span className={styles.currency}>Proposed rental prices · USD</span>
        </header>
        <div className={styles.offers}>
          {licensePlans.map((plan) => (
            <article key={plan.id} className={styles.offer} data-featured={plan.featured || undefined}>
              <div className={styles.offerType}><Icon name="clock" /><span>Rental license</span></div>
              <h3>{plan.days}<span> days</span></h3>
              <p className={styles.description}>{plan.description}</p>
              <p className={styles.price}><strong>${plan.price}</strong><span>USD / {plan.days} days</span></p>
              <Link className={plan.featured ? "button button-primary" : "button button-secondary"}
                to={"/contact?mode=rental&plan=" + plan.id}>
                Request {plan.days} days <Icon name="arrow-up-right" />
              </Link>
              <p className={styles.offerNote}>Access for the agreed rental period.</p>
            </article>
          ))}
          <article className={styles.purchase}>
            <div className={styles.offerType}><Icon name="file" /><span>Purchase license</span></div>
            <h3>Buy the bot.</h3>
            <p className={styles.description}>Prefer to purchase? Get the terms for your trading setup.</p>
            <p className={styles.purchasePrice}><strong>Let’s talk.</strong><span>Price and duration on request</span></p>
            <Link className="button button-secondary" to="/contact?mode=purchase">
              Ask about buying <Icon name="arrow-up-right" />
            </Link>
            <p className={styles.offerNote}>Review the conditions before you pay.</p>
          </article>
        </div>
        <div className={styles.inclusions}>
          <span>Included with your license</span>
          <ul>{licenseIncludes.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul>
        </div>
        <div className={styles.footnote}>
          <p>Final price, access terms, payment and activation are confirmed by email. This site prepares enquiries, not payments. Trading capital, broker fees and VPS costs are separate.</p>
          <Link to="/documentation/assistance-and-policies/terms-and-conditions">
            License details <Icon name="arrow-up-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
