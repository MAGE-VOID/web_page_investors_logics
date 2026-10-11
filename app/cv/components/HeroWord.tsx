import { useEffect, useRef, useState } from "react";
import styles from "../cv.module.css";

const words = ["backend con IA.", "servicios AWS.", "visión con IA."];

export default function HeroWord() {
  const ref = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    let visible = false;
    const sync = () => {
      clearInterval(timer);
      if (visible && !document.hidden && !reduced.matches) timer = setInterval(() => setIndex((value) => (value + 1) % words.length), 2600);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(node);
    reduced.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => { clearInterval(timer); observer.disconnect(); reduced.removeEventListener("change", sync); document.removeEventListener("visibilitychange", sync); };
  }, []);
  return <span ref={ref} className={styles.heroWord}><span key={index} className={styles.rotatingWord} aria-hidden="true">{words[index]}</span><span className={styles.srOnly}>{words[0]}</span></span>;
}
