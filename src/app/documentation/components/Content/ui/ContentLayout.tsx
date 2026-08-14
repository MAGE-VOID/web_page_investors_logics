import React from "react";
import styles from "./ContentLayout.module.css";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return <div className={styles.container}>{children}</div>;
}
