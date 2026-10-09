import type { ReactNode } from "react";
import styles from "./CheckoutButton.module.css";

interface CheckoutButtonProps {
  href?: string;
  children?: ReactNode;
  className?: string;
}

/** An enquiry link, not a payment processor or a license activation flow. */
export default function CheckoutButton({ href = "/contact", children = "Ask about a license", className }: CheckoutButtonProps) {
  return (
    <a className={["primary-button", styles.button, className].filter(Boolean).join(" ")} href={href}>
      {children}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M6 18 18 6M6 6h12v12" />
      </svg>
    </a>
  );
}
