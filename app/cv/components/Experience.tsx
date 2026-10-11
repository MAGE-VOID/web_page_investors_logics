import { useEffect, useRef } from "react";
import { certifications, education, experience } from "../data/profile";
import styles from "../cv.module.css";

export default function Experience() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = section.current;
    if (!root || !("IntersectionObserver" in window) || !("animate" in HTMLElement.prototype)) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const print = window.matchMedia("print");
    const entered = new Set<HTMLElement>();
    const visible = new Set<HTMLElement>();
    const running = new Map<HTMLElement, Set<Animation>>();

    // Focal: trace → marker → contributions, once per role (under one second).
    // Dates and employer remain stable; the trace guides reading, not career progress.
    const enter = (item: HTMLElement) => {
      entered.add(item);
      if (reduced.matches || print.matches) return;
      const group = new Set<Animation>();
      running.set(item, group);
      const play = (target: HTMLElement | null, frames: Keyframe[], duration: number, delay = 0) => {
        if (!target) return;
        const animation = target.animate(frames, { duration, delay, easing: "cubic-bezier(.16, 1, .3, 1)", fill: "backwards" });
        group.add(animation);
        animation.onfinish = () => {
          group.delete(animation);
          animation.cancel();
          if (!group.size) running.delete(item);
        };
      };
      play(item.querySelector("[data-experience-trace]"), [
        { transform: "scaleY(0)" }, { transform: "scaleY(1)" },
      ], 900);
      play(item.querySelector("[data-experience-marker]"), [
        { transform: "scale(.75)", opacity: .6 },
        { transform: "scale(1.6)", opacity: 0 },
      ], 760, 80);
      item.querySelectorAll<HTMLElement>("[data-experience-part]").forEach((part, index) => {
        play(part, [
          { transform: "translateY(8px)", opacity: .45 },
          { transform: "translateY(0)", opacity: 1 },
        ], 520, 140 + index * 50);
      });
    };
    const sync = () => {
      running.forEach((group, item) => {
        group.forEach((animation) => {
          if (reduced.matches || print.matches) animation.cancel();
          else if (document.hidden || !visible.has(item)) animation.pause();
          else if (animation.playState === "paused") animation.play();
        });
      });
      if (reduced.matches || print.matches) running.clear();
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const item = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          visible.add(item);
          if (!entered.has(item)) enter(item);
        } else visible.delete(item);
      });
      sync();
    }, { threshold: .12, rootMargin: "0px 0px -60px 0px" });
    root.querySelectorAll("[data-experience-item]").forEach((item) => observer.observe(item));
    reduced.addEventListener("change", sync);
    print.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      reduced.removeEventListener("change", sync);
      print.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      running.forEach((group) => group.forEach((animation) => animation.cancel()));
    };
  }, []);

  return (
    <section ref={section} id="cv-experience" className={styles.section} aria-labelledby="cv-experience-title">
      <div className={styles.container}>
        <header className={styles.sectionHeading} data-reveal>
          <span className={styles.eyebrow}>03 / Experiencia</span>
          <h2 id="cv-experience-title">Plataformas y software empresarial.</h2>
          <p>Responsabilidades en Binder, Geohydro, Invian y consultoría independiente, con colaboraciones en paralelo.</p>
        </header>
        <div className={styles.timeline}>
          {experience.map((item, index) => (
            <article key={item.company} className={styles.timelineItem} aria-labelledby={`cv-role-${index}`} data-experience-item>
              <span className={styles.timelineTrace} data-experience-trace aria-hidden="true" />
              <span className={styles.timelineMarker} data-experience-marker aria-hidden="true" />
              <div className={styles.timelineMeta}>
                <span className={styles.timelineDot} data-current={item.current} aria-hidden="true" />
                <span>{item.date}</span>
                <small>{item.location}</small>
              </div>
              <div className={styles.timelineContent}>
                <h3 id={`cv-role-${index}`}>{item.role}</h3>
                <span className={styles.company}>{item.company}</span>
                <p data-experience-part>{item.summary}</p>
                <ul className={styles.experienceBullets} aria-label={`Contribuciones en ${item.company}`}>
                  {item.contributions.map((contribution) => (
                    <li key={contribution.label} data-experience-part>
                      <strong>{contribution.label}</strong>
                      <span>{contribution.detail}</span>
                    </li>
                  ))}
                </ul>
                <ul className={styles.tags} aria-label={`Áreas y tecnologías en ${item.company}`}>
                  {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.credentials}>
          <div data-reveal>
            <h3 className={styles.credentialsTitle}>Formación universitaria</h3>
            {education.map((item) => <article key={item.institution} className={styles.credential}><h4>{item.degree}</h4><p>{item.institution}</p></article>)}
          </div>
          <div data-reveal>
            <h3 className={styles.credentialsTitle}>Certificaciones</h3>
            {certifications.map((item) => <article key={item.title} className={styles.credential}><span className={styles.eyebrow}>{item.date} · {item.institution}</span><h4>{item.title}</h4></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}
