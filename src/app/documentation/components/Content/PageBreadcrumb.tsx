import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./PageBreadcrumb.module.css";

export default function PageBreadcrumb() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  // Removemos "documentation" si existe al inicio
  if (segments[0] === "documentation") {
    segments.shift();
  }

  function transformSlugToTitle(slug: string) {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const breadcrumbParts = segments.map(transformSlugToTitle);

  return (
    <div className={styles.breadcrumb}>
      <span className={styles.prefix}>Documentation</span>
      {breadcrumbParts.map((part, index) => (
        <React.Fragment key={index}>
          {/* Aquí usamos '›' en lugar de '>' */}
          <span className={styles.separator}>›</span> 
          <span className={styles.current}>{part}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
