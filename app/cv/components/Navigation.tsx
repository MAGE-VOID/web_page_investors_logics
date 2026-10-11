import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "../data/profile";
import Icon from "./Icon";
import styles from "../cv.module.css";

export default function Navigation({ onCommand }: { onCommand: () => void }) {
  const [active, setActive] = useState<string>("cv-hero");
  const [expanded, setExpanded] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries.find((item) => item.isIntersecting);
      if (entry) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!expanded) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpanded(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [expanded]);

  return (
    <>
      <a className={styles.skipLink} href="#cv-main">Saltar al contenido</a>
      <header className={styles.navigation}>
        <div className={`${styles.container} ${styles.navInner}`}>
          <a className={styles.wordmark} href="#cv-hero" aria-label={`${profile.name} — inicio`} onClick={() => setExpanded(false)}>
            <span className={styles.logoMark}>{profile.initials.toLowerCase()}<span>.</span></span>
            <span className={styles.wordmarkName}>{profile.shortName.toLowerCase()}<span> / cv</span></span>
          </a>
          <nav className={styles.desktopNav} aria-label="Navegación principal">
            {navigation.filter(({ id }) => ["cv-work", "cv-experience", "cv-about", "cv-contact"].includes(id)).map((item) => (
              <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>{item.label}</a>
            ))}
          </nav>
          <div className={styles.navActions}>
            <button className={styles.commandTrigger} type="button" onClick={onCommand} aria-label="Abrir búsqueda de secciones, Control o Comando K">
              <Icon name="command" size={14} /><kbd>K</kbd>
            </button>
            <a className={styles.navContact} href={`mailto:${profile.email}`}>Hablemos <span aria-hidden="true">↗</span></a>
            <button ref={menuButton} type="button" className={styles.menuButton} aria-label={expanded ? "Cerrar navegación" : "Abrir navegación"} aria-expanded={expanded} aria-controls="cv-mobile-navigation" onClick={() => setExpanded(!expanded)}>
              <span /><span />
            </button>
          </div>
        </div>
        <nav id="cv-mobile-navigation" className={styles.mobileNav} aria-label="Navegación móvil" hidden={!expanded}>
          {navigation.slice(1).map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={() => setExpanded(false)}><span>{item.number}</span>{item.label}<span aria-hidden="true">↗</span></a>)}
        </nav>
      </header>
      <nav className={styles.sectionRail} aria-label="Secciones del CV">
        {navigation.map((item) => <a key={item.id} href={`#${item.id}`} aria-label={item.label} aria-current={active === item.id ? "location" : undefined}><span className={styles.railLabel}>{item.label}</span><span className={styles.railDot} /></a>)}
      </nav>
    </>
  );
}
