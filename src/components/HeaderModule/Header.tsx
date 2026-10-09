import { Link, NavLink } from "react-router-dom";
import Icon from "@/components/UI/Icon";
import CommandPalette from "./CommandPalette";
import Menu from "./Menu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <div className={styles.bar}>
        <Link to="/" className={styles.brand} aria-label="Investors Logics home">
          <img src="/Logos/Logo_white90.png" alt="Investors Logics" width={162} height={48} />
        </Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          <NavLink to="/" end>Overview</NavLink>
          <NavLink to="/products">The bot & licenses</NavLink>
          <NavLink to="/documentation">Guides</NavLink>
          <Link to="/documentation/contact">Support</Link>
        </nav>
        <div className={styles.actions}>
          <CommandPalette />
          <Link className={styles.licenseAction} to="/products#license-options">
            View licenses <Icon name="arrow-up-right" />
          </Link>
          <Menu />
        </div>
      </div>
    </header>
  );
}
