import type { ReactNode } from "react";
import Icon from "@/components/UI/Icon";
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
        <Icon name="chevron-right" className={styles.arrowIcon} />
      </summary>
      <div className={styles.contentInner}>{children}</div>
    </details>
  );
}
