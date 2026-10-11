import { useRef, useState, useEffect } from "react";
import { profile } from "../data/profile";
import Icon from "./Icon";
import styles from "../cv.module.css";

export default function Contact() {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = async () => {
    clearTimeout(timer.current);
    try { await navigator.clipboard.writeText(profile.email); setStatus("Correo copiado al portapapeles."); }
    catch { setStatus(`No se pudo copiar. Puedes usar este correo: ${profile.email}`); }
    timer.current = setTimeout(() => setStatus(""), 6000);
  };
  const contacts = [
    { label: "Correo", value: profile.email, href: `mailto:${profile.email}` },
    { label: "GitHub", value: `github.com/${profile.githubHandle}`, href: profile.github },
    { label: "LinkedIn", value: `linkedin.com/in/${profile.linkedinHandle}`, href: profile.linkedin },
  ];
  return <section id="cv-contact" className={`${styles.section} ${styles.contact}`} aria-labelledby="cv-contact-title" data-halo-region>
    <div className={styles.halo} aria-hidden="true" />
    <div className={styles.container}>
      <span className={styles.eyebrow} data-reveal>06 / Contacto</span>
      <h2 id="cv-contact-title" className={styles.contactTitle} data-reveal>¿Un proyecto de <span>backend o IA</span>?<br />Hablemos.</h2>
      <p className={styles.contactIntro} data-reveal>Cuéntame el contexto de tu proyecto y qué necesitas resolver: backend, integración de IA o aplicaciones de gestión.</p>
      <div className={styles.contactLinks}>{contacts.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} data-reveal><span className={styles.contactLabel}>{item.label}</span><span className={styles.contactValue}>{item.value}</span><Icon name="arrow" size={20} /></a>)}</div>
      <div className={styles.contactTools}><button className={styles.textButton} type="button" onClick={copy}><Icon name="copy" size={15} />Copiar correo</button><p role="status" className={styles.copyStatus}>{status}</p></div>
    </div>
  </section>;
}
