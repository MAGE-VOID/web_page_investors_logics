import React, { useRef, useState, useLayoutEffect } from "react";
import styles from "./FAQBox.module.css";

interface FAQBoxProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function FAQBox({ title, subtitle, children }: FAQBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      // Calcula la altura real del contenedor (que incluye padding-top).
      const finalHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = finalHeight + "px";
      contentRef.current.style.opacity = "1";
    } else {
      contentRef.current.style.maxHeight = "0px";
      contentRef.current.style.opacity = "0";
    }
  }, [isOpen]);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`${styles.faqBox} ${isOpen ? styles.open : ""}`}>
      <button className={styles.header} onClick={handleToggle}>
        {/* Flecha rotatoria */}
        <span
          className={`${styles.arrowIcon} ${isOpen ? styles.iconOpen : ""}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <div className={styles.titleWrapper}>
          <strong className={styles.title}>{title}</strong>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
      </button>

      <div ref={contentRef} className={styles.content}>
        <div className={styles.contentInner}>{children}</div>
      </div>
    </div>
  );
}
