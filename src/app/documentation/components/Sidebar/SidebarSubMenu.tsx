import React, { useState, useRef, useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./SidebarItem.module.css";
import { SidebarItemProps } from "./SidebarItem";

interface SidebarSubMenuProps {
  label: string;
  subItems: SidebarItemProps[];
  isOpen: boolean;       // Estado controlado desde el padre
  onToggle: () => void;  // Función del padre para togglear
}

export default function SidebarSubMenu({
  label,
  subItems,
  isOpen,
  onToggle,
}: SidebarSubMenuProps) {
  const { pathname } = useLocation();
  const subMenuRef = useRef<HTMLDivElement>(null);

  // Solo para evitar animación en el primer render
  const [hasInteracted, setHasInteracted] = useState(false);

  // Control de la altura para la animación
  useLayoutEffect(() => {
    if (subMenuRef.current) {
      subMenuRef.current.style.height = isOpen
        ? `${subMenuRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  function handleHeaderClick() {
    onToggle(); 
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  }

  const arrowClass = isOpen ? styles.iconOpen : "";

  return (
    <>
      {/* Cabecera con flecha */}
      <div className={styles.collapseHeader} onClick={handleHeaderClick}>
        <span>{label}</span>
        <svg
          className={`${styles.arrowIcon} ${arrowClass}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Contenedor del submenú con animación de altura */}
      <div
        className={styles.subMenuContainer}
        ref={subMenuRef}
        style={{
          overflow: "hidden",
          transition: hasInteracted ? "height 0.3s ease-in-out" : "none",
        }}
      >
        {subItems.map((sub, idx) => {
          const isSubActive = pathname === (sub.href || "#");
          return (
            <Link
              key={idx}
              to={sub.href || "#"}
              className={`${styles.subMenuLink} ${
                isSubActive ? styles.active : ""
              }`}
            >
              {sub.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
