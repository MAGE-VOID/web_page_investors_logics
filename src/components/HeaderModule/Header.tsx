import { Link, NavLink } from "react-router-dom";
import type { NavLinkRenderProps } from "react-router-dom";
import CommandPalette from "./CommandPalette";
import styles from "./Header.module.css";
import Menu from "./Menu";

const linkClass = ({ isActive }: NavLinkRenderProps) =>
  `${styles.navLink} ${isActive ? styles.activeLink : ""}`;

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <div className={styles.bar}>
        <Link to="/" className={styles.brand} aria-label="Investors Logics — Blue Boost Bot home">
          <img className={styles.logoImage} src="/Logos/Logo_white90.png" alt="Investors Logics" width={196} height={58} fetchPriority="high" />
          <span className={styles.brandDivider} aria-hidden="true" />
          <span className={styles.productName}>BLUE BOOST BOT</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          <NavLink end to="/#how-it-works" className={linkClass}>
            How it works
          </NavLink>
          <NavLink to="/products#license-options" className={linkClass}>
            Pricing
          </NavLink>
          <NavLink to="/documentation" className={linkClass}>
            Documentation
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Support
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <CommandPalette />
          <Link className={styles.licenseAction} to="/products#license-options">
            Get access <span aria-hidden="true">→</span>
          </Link>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
