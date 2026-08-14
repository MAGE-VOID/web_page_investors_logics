import React, { useState, useEffect } from "react";
import styles from "./Sidebar/Sidebar.module.css";
import SidebarItem from "./Sidebar/SidebarItem";

/*
 Definimos la estructura de cada ítem de menú
*/
import { menuData } from "./Sidebar/SidebarData";


export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("openMenus");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("openMenus", JSON.stringify(openMenus));
    } catch {
      // The sidebar still works when browser storage is unavailable.
    }
  }, [openMenus]);

  // 3) Función para abrir/cerrar un menú. No cierra los demás.
  function handleToggle(label: string) {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuData.map((item) => (
            <SidebarItem
              key={item.label}
              item={item}
              isOpen={!!openMenus[item.label]}
              onToggle={() => handleToggle(item.label)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
