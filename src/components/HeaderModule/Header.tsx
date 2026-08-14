import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Menu from "./Menu";

const Header = () => {
  const { pathname } = useLocation();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className={styles.header}>
      <div className={styles.justify}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src="/Logos/Logo_white90.png"
              alt="Logo"
              width={250}
              height={250}
              fetchPriority="high"
            />
          </Link>
        </div>

        {/* Menú de enlaces */}
        <div className={styles.linkdiv}>
          <Link
            to="/documentation"
            className={
              isActive("/documentation")
                ? `${styles["info-link"]} ${styles["activeLink"]}`
                : styles["info-link"]
            }
          >
            Documentation
          </Link>

          <Link
            to="/products"
            className={
              isActive("/products")
                ? `${styles["info-link"]} ${styles["activeLink"]}`
                : styles["info-link"]
            }
          >
            Products
          </Link>

          <Link
            to="/contact"
            className={
              isActive("/contact")
                ? `${styles["info-link"]} ${styles["activeLink"]}`
                : styles["info-link"]
            }
          >
            Contact
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
