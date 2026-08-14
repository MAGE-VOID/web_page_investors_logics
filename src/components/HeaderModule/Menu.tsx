import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla la visibilidad del menú
  const menuRef = useRef<HTMLDivElement>(null);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Cierra el menú si se hace clic afuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si el menú está abierto y se hace clic fuera del contenedor
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.justify} ref={menuRef}>
      {/* Ícono de hamburguesa */}
      <div
        className={`${styles.menuIcon} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        &#9776; {/* Icono de hamburguesa */}
      </div>

      {/* Menú de enlaces */}
      <div className={styles.container}>
        <div className={`${styles.menudiv} ${isOpen ? styles.show : ""}`}>
          <Link
            to="/documentation"
            className={styles["menu-link"]}
            onClick={handleLinkClick}
          >
            Documentation
          </Link>
          <Link
            to="/products"
            className={styles["menu-link"]}
            onClick={handleLinkClick}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className={styles["menu-link"]}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
