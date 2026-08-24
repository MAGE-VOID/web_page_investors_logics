import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const productFacts = [
  ["Format", ".ex5 compiled file"],
  ["Platform", "MetaTrader 5"],
  ["Access", "30 / 90 / 365 days"],
] as const;

export default function Hero() {
  return (
    <section id="demo" className={styles.hero} aria-labelledby="product-title">
      <div className={styles.heroGrid}>
        <div className={styles.heroIntro}>
          <h1 id="product-title">Blue Boost Bot for MetaTrader 5.</h1>
          <p className={styles.lede}>
            A compiled <code>.ex5</code> with time-limited access. Check your MT5 setup, choose a term and request the next step.
          </p>

          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="#license-options">
              Choose access <span aria-hidden="true">↓</span>
            </a>
            <Link className={styles.secondaryAction} to="/documentation/table-of-contents/getting-started">
              Read the setup guide <span aria-hidden="true">→</span>
            </Link>
          </div>

          <p className={styles.heroNote}>No performance promise. No source code sale. No live account connected.</p>

          <dl className={styles.heroMeta} aria-label="Product summary">
            <div>
              <dt>Format</dt>
              <dd>Compiled .ex5</dd>
            </div>
            <div>
              <dt>Runs on</dt>
              <dd>MetaTrader 5</dd>
            </div>
            <div>
              <dt>Access</dt>
              <dd>Time-limited</dd>
            </div>
          </dl>
        </div>

        <aside className={styles.preview} aria-label="Blue Boost Bot product facts">
          <div className={styles.previewTopline}>
            <div>
              <strong>Blue Boost Bot</strong>
              <span>Public product facts</span>
            </div>
            <span className={styles.previewStatus}>.EX5 / MT5</span>
          </div>

          <div className={styles.previewPanel}>
            <div className={styles.previewHeading}>
              <h2>Everything you need to choose.</h2>
              <p>One file, one platform and one access term. The strategy remains private.</p>
            </div>

            <dl className={styles.previewRows}>
              {productFacts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className={styles.previewFooter}>
              <strong>Request access only when the fit is clear.</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
