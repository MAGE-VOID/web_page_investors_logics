import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.topline}>
          <Link to="/" className={styles.brand} aria-label="Investors Logics — Blue Boost Bot home">
            <img className={styles.logoImage} src="/Logos/Logo_white90.png" alt="Investors Logics" width={196} height={58} />
            <span className={styles.divider} aria-hidden="true" />
            <span>BLUE BOOST BOT</span>
          </Link>
          <div className={styles.toplineMeta}>
            <p>Compiled Expert Advisor access for MetaTrader 5.</p>
            <Link className={styles.toplineAction} to="/products#license-options">
              Get access <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.summary}>
            <p className={styles.label}>The product</p>
            <h2>Evaluate the setup. Then decide.</h2>
            <p>
              Time-limited access to the Blue Boost Bot .ex5 file for a controlled
              MetaTrader 5 evaluation, with public guidance around the handoff. Source code and private strategy details stay private.
            </p>
          </div>

          <nav className={styles.column} aria-label="Product links">
            <p className={styles.label}>Explore</p>
            <Link to="/#how-it-works">How it works <span aria-hidden="true">→</span></Link>
            <Link to="/products#license-options">Pricing <span aria-hidden="true">→</span></Link>
            <Link to="/documentation">Documentation <span aria-hidden="true">→</span></Link>
          </nav>

          <nav className={styles.column} aria-label="Support links">
            <p className={styles.label}>Support</p>
            <Link to="/documentation/table-of-contents/getting-started">Getting started <span aria-hidden="true">→</span></Link>
            <Link to="/documentation/assistance-and-policies/help-center">Help center <span aria-hidden="true">→</span></Link>
            <Link to="/contact">Contact <span aria-hidden="true">→</span></Link>
          </nav>

          <div className={styles.notice}>
            <p className={styles.label}>Risk notice</p>
            <p>
              Forex and leveraged trading can result in partial or total capital loss.
              Automation does not remove market, broker, execution or technology risk.
            </p>
            <Link to="/documentation/assistance-and-policies/terms-and-conditions">
              Read the public terms <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.bottomline}>
          <span>© {year} Investors Logics</span>
          <span>Public preview · Payment and activation not connected</span>
          <span>Public product boundary · Private strategy excluded</span>
        </div>
      </div>
    </footer>
  );
}
