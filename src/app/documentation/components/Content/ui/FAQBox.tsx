import type { ReactNode } from "react";
import styles from "./FAQBox.module.css";

interface FAQBoxProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function FAQBox({ title, subtitle, children }: FAQBoxProps) {
  return (
    <details className={styles.faqBox}>
      <summary className={styles.header}>
        <div className={styles.titleWrapper}>
          <strong className={styles.title}>{title}</strong>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
        <span className={styles.arrowIcon} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </summary>
      <div className={styles.contentInner}>{children}</div>
    </details>
  );
}
