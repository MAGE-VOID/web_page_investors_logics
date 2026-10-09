import { Link } from "react-router-dom";
import { contactEmail } from "@/data/products";
import styles from "./ProductFooter.module.css";

const productLinks = [
  ["All products", "/"],
  ["Blue Boost Bot", "/documentation#introduction"],
  ["Pricing & licensing", "/#pricing"],
  ["Product questions", "/#questions"],
];
const guideLinks = [
  ["Getting started", "/documentation#installation"],
  ["Platforms & setup", "/documentation#mt5"],
  ["Help centre", "/contact#help"],
  ["Contact", "/contact"],
];

export default function ProductFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brandColumn}>
          <Link to="/" className={styles.brand}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M7 5v15M17 1v22" /><rect x="4" y="9" width="6" height="7" rx="1" /><rect x="14" y="4" width="6" height="15" rx="1" fill="currentColor" /></svg>
            Investors Logics <span>TRADING SOFTWARE</span>
          </Link>
          <p>Compiled trading software for MetaTrader 5, with purchase and time-limited rental options. Public documentation. Private strategy.</p>
          <p className={styles.risk}>Trading involves a risk of capital loss. The catalogue concepts and their synthetic sessions are not live products, forecasts or performance evidence.</p>
        </div>
        <nav aria-label="Footer products"><h2>Product</h2><ul>{productLinks.map(([label, href]) => <li key={href}><Link to={href}>{label}</Link></li>)}</ul></nav>
        <nav aria-label="Footer guides"><h2>Guides &amp; support</h2><ul>{guideLinks.map(([label, href]) => <li key={href}><Link to={href}>{label}</Link></li>)}<li><a href={"mailto:" + contactEmail}>Email Investors Logics</a></li></ul></nav>
        <nav aria-label="Footer policies"><h2>Before you start</h2><ul><li><Link to="/legal">Terms &amp; conditions</Link></li><li><Link to="/documentation#forex">Capital &amp; risk</Link></li><li><Link to="/#about">About Investors Logics</Link></li><li><Link to="/contact?mode=purchase">Licensing enquiries</Link></li></ul></nav>
      </div>
      <div className={styles.bottom}><span>© {new Date().getFullYear()} Investors Logics</span><span>Software access is separate from trading capital.</span></div>
    </footer>
  );
}
