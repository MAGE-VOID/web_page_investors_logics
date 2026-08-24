import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function closeMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

const Menu = () => {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        menuRef.current?.removeAttribute("open");
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        menuRef.current?.removeAttribute("open");
        menuRef.current?.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <details
      ref={menuRef}
      className={styles.menu}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary
        className={styles.menuIcon}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
      >
        <span aria-hidden="true" className={styles.menuGlyph} />
      </summary>
      <nav className={styles.menuLinks} aria-label="Mobile navigation">
        <Link to="/" className={styles.menuLink} onClick={closeMenu}>
          Overview
        </Link>
        <Link to="/#product-scope" className={styles.menuLink} onClick={closeMenu}>
          Features
        </Link>
        <Link to="/products#license-options" className={styles.menuLink} onClick={closeMenu}>
          Pricing
        </Link>
        <Link to="/documentation" className={styles.menuLink} onClick={closeMenu}>
          Documentation
        </Link>
        <Link to="/contact" className={styles.menuLink} onClick={closeMenu}>
          Support
        </Link>
        <Link to="/documentation/assistance-and-policies/help-center" className={styles.menuLink} onClick={closeMenu}>
          Help center
        </Link>
        <Link to="/products#license-options" className={styles.menuAction} onClick={closeMenu}>
          Get access <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </details>
  );
};

export default Menu;
