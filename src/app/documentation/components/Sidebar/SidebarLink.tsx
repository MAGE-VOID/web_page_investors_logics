import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./SidebarItem.module.css";

interface SidebarLinkProps {
  href: string;
  label: string;
}

export default function SidebarLink({ href, label }: SidebarLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={`${styles.directLink} ${isActive ? styles.active : ""}`}
    >
      {label}
    </Link>
  );
}
