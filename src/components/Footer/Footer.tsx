import { Link } from "react-router-dom";
import { contactEmail } from "@/data/product";
import Icon from "@/components/UI/Icon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.close}>
          <div>
            <h2>Questions? We’re here.</h2>
            <p>Ask about Blue Boost, broker compatibility or finding the right license.</p>
          </div>
          <Link className="button button-secondary" to="/documentation/contact">
            Talk to the team <Icon name="arrow-up-right" />
          </Link>
        </div>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" aria-label="Investors Logics home">
              <img src="/Logos/Logo_white90.png" alt="Investors Logics" width={162} height={48} loading="lazy" />
            </Link>
            <p>Trading software.<br />Built by Investors Logics.</p>
            <a href={"mailto:" + contactEmail}>{contactEmail}<Icon name="arrow-up-right" /></a>
          </div>
          <nav className={styles.column} aria-label="Product links">
            <h2>Blue Boost Bot</h2>
            <Link to="/#demo">Explore the bot</Link>
            <Link to="/products#license-options">Buy or rent</Link>
            <Link to="/documentation/table-of-contents/getting-started">Getting started</Link>
            <Link to="/documentation/assistance-and-policies/terms-and-conditions">License information</Link>
          </nav>
          <nav className={styles.column} aria-label="Guides and company">
            <h2>Investors Logics</h2>
            <Link to="/documentation">Product guides</Link>
            <Link to="/documentation/about-us">About us</Link>
            <Link to="/documentation/contact">Contact support</Link>
            <a href="#main-content">Back to top <Icon name="arrow-up-right" /></a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.risk}>Forex and leveraged trading involve risk, including loss of capital. Blue Boost Bot is software, not investment advice. Automation does not guarantee results.</p>
          <span>© {new Date().getFullYear()} Investors Logics</span>
        </div>
      </div>
    </footer>
  );
}
