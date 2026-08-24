import type { MouseEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Sidebar/Sidebar.module.css";
import { menuData } from "./Sidebar/SidebarData";

interface SidebarMenuProps {
  mobile?: boolean;
}

function closeMobileIndex(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest(`.${styles.mobileIndex}`)?.removeAttribute("open");
}

function SidebarMenu({ mobile = false }: SidebarMenuProps) {
  const { pathname } = useLocation();

  return (
    <ul className={styles.menu}>
      {menuData.map((item) => {
        if (item.isTitle) {
          return <li key={item.label} className={styles.title}>{item.label}</li>;
        }

        if (item.href) {
          return (
            <li key={item.label}>
              <NavLink
                to={item.href}
                end={item.href === "/documentation"}
                onClick={mobile ? closeMobileIndex : undefined}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
              >
                {item.label}
              </NavLink>
            </li>
          );
        }

        const containsCurrentPage = item.subItems?.some((subItem) => subItem.href === pathname);

        return (
          <li key={item.label}>
            <details className={styles.submenu} open={containsCurrentPage || undefined}>
              <summary>
                <span>{item.label}</span>
                <svg className={styles.arrow} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </summary>
              <div className={styles.submenuLinks}>
                {item.subItems?.map((subItem) => (
                  <NavLink
                    key={subItem.href}
                    to={subItem.href}
                    onClick={mobile ? closeMobileIndex : undefined}
                    className={({ isActive }) => `${styles.subLink} ${isActive ? styles.active : ""}`}
                  >
                    {subItem.label}
                  </NavLink>
                ))}
              </div>
            </details>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <details className={styles.mobileIndex}>
        <summary>
          <span>Browse the reference</span>
          <span aria-hidden="true">+</span>
        </summary>
        <nav aria-label="Documentation navigation">
          <SidebarMenu mobile />
        </nav>
      </details>

      <nav className={styles.desktopIndex} aria-label="Documentation navigation">
        <p className={styles.navHeading}>Reference index</p>
        <p className={styles.edition}>Public edition · Product strategy excluded</p>
        <SidebarMenu />
        <div className={styles.sidebarFooter}>
          <p>Need help with the public setup?</p>
          <Link to="/documentation/contact">Contact support <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </aside>
  );
}
