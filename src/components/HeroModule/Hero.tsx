import { Link } from "react-router-dom";
import Icon from "@/components/UI/Icon";
import BrandScene from "./BrandScene";
import styles from "./Hero.module.css";

interface HeroProps {
  staticPreview?: boolean;
}

export default function Hero({ staticPreview = false }: HeroProps) {
  return (
    <section id="bot-overview" className={styles.hero} aria-labelledby="product-title">
      <div className={styles.inner}>
        <div className={styles.introduction}>
          <header className={styles.copy}>
            <h1 id="product-title" className={styles.title}>
              <span>Blue Boost</span>{" "}
              <span className={styles.titleEnd}>Bot<span className={styles.period}>.</span></span>
            </h1>
            <p className={styles.statement}>Your workflow, automated.</p>
            <p className={styles.description}>
              A Forex Expert Advisor for MetaTrader 5. Programmed analysis,
              execution and position management — in your own trading account.
            </p>
            <div className={styles.actions}>
              <Link className={"button button-primary " + styles.primary} to="/products#license-options">
                View licenses <Icon name="arrow-up-right" />
              </Link>
              <Link className={styles.secondary} to="/documentation/introduction">
                Explore the bot <Icon name="arrow-up-right" />
              </Link>
            </div>
            <p className={styles.terms}>
              Proposed rentals from <strong>$59 USD.</strong>{" "}
              <span>Purchase terms on request.</span>
            </p>
          </header>
          <div className={styles.artwork}>
            <BrandScene staticOnly={staticPreview} />
          </div>
        </div>
      </div>
    </section>
  );
}
