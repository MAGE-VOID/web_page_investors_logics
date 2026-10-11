import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navigation from "./components/Navigation";
import HeroWord from "./components/HeroWord";
import Icon from "./components/Icon";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import TenancyJourney from "./components/TenancyJourney";
import Experience from "./components/Experience";
import CommandPalette from "./components/CommandPalette";
import ProjectDialog from "./components/ProjectDialog";
import Contact from "./components/Contact";
import useCVMotion from "./hooks/useCVMotion";
import { archetypes, independentProject, profile, projects, signals, skills, type Project } from "./data/profile";
import fontLicense from "./assets/fonts/OFL.txt?url";
import styles from "./cv.module.css";

const direction = `THESIS: Manuel's documented engineering work through concrete systems, implementation decisions and concise case studies, without self-rated proficiency labels.
OWN-WORLD: Graphite, amber, local Geist faces, hairlines and the established 72rem composition; /home remains independent.
STORY: Meet the engineer, explore the original alternating project previews and open a case to understand the contribution and result; then explore architecture, experience and contact.
FIRST VIEWPORT: Preserve the full-height three-line hero, typography and animation; its copy names backend development, AWS services, vision and system integration. Projects keep their original diagrams, alternating rows and spacing.
FORM: Refine copy throughout /cv without changing its visual system. Cases show personal responsibility, three concrete contributions, an outcome and optional technical controls. Distinguish authorization, structural validation and cross-cutting tracing. No gallery selector, chapters or nested scrolling panes.
FINISH: Code-only source review and compilation, without browser or server. Preserve facts, keyboard navigation, focus restoration and reduced motion. Never expose private strategies, source or results.`;

function SectionHeader({ label, title, description }: { label: string; title: string; description: string }) {
  return <header className={styles.sectionHeading} data-reveal><span className={styles.eyebrow}>{label}</span><h2>{title}</h2><p>{description}</p></header>;
}

export default function CVPage() {
  const root = useRef<HTMLDivElement>(null);
  const [commandOpen, setCommandOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  useCVMotion(root);
  useLayoutEffect(() => {
    const html = document.documentElement;
    const oldAttribute = html.getAttribute("data-cv-page");
    const oldLanguage = html.getAttribute("lang");
    const oldTitle = document.title;
    const comment = document.createComment(direction);
    html.setAttribute("data-cv-page", "");
    html.setAttribute("lang", "es");
    document.title = `${profile.name} — Arquitectura backend, IA y AWS`;
    root.current?.prepend(comment);
    return () => {
      comment.remove();
      if (oldAttribute === null) html.removeAttribute("data-cv-page");
      else html.setAttribute("data-cv-page", oldAttribute);
      if (oldLanguage === null) html.removeAttribute("lang");
      else html.setAttribute("lang", oldLanguage);
      document.title = oldTitle;
    };
  }, []);
  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      const input = event.target instanceof Element && !!event.target.closest("input, textarea, select, [contenteditable='true']");
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (!project) setCommandOpen((value) => !value);
      } else if (!input && !event.metaKey && !event.ctrlKey && !event.altKey && (event.key === "/" || event.key === "?")) {
        if (!project) { event.preventDefault(); setCommandOpen(true); }
      }
    };
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, [project]);

  return (
    <div ref={root} className={styles.page} lang="es">
      <Navigation onCommand={() => setCommandOpen(true)} />
      <main id="cv-main" tabIndex={-1}>
        <header id="cv-hero" className={styles.hero} data-halo-region>
          <div className={styles.heroGrid} aria-hidden="true" /><div className={styles.halo} aria-hidden="true" />
          <div className={`${styles.container} ${styles.heroInner}`}>
            <span className={styles.heroReference}>{profile.name} · {profile.location}</span>
            <div className={styles.availability} data-hero-reveal data-delay="0"><span className={styles.statusDot} />{profile.focus}</div>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroLine}><span data-hero-reveal="line" data-delay="50">Desarrollo</span></span>
              <span className={styles.heroLine}><span data-hero-reveal="line" data-delay="150"><HeroWord /></span></span>
              <span className={styles.heroLine}><span className={styles.heroMuted} data-hero-reveal="line" data-delay="250">Integro sistemas.</span></span>
            </h1>
            <p className={styles.heroIntro} data-hero-reveal data-delay="550">Soy <span>{profile.shortName}</span>. {profile.intro}</p>
            <div className={styles.heroActions} data-hero-reveal data-delay="700">
              <a className={styles.primaryButton} href="#cv-work" data-magnet>Ver proyectos <Icon name="arrow" size={17} /></a>
              <a className={styles.secondaryButton} href="#cv-contact">Contactar</a>
              <a className={styles.githubLink} href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={17} />{profile.githubHandle}</a>
            </div>
            <div className={styles.scrollHint} aria-hidden="true"><span>Explorar</span><i /></div>
            <button className={styles.heroShortcut} type="button" onClick={() => setCommandOpen(true)}><span>Pulsa</span><kbd>⌘</kbd><kbd>K</kbd><span>para navegar</span></button>
          </div>
        </header>
        <section className={styles.signalBar} aria-label="Resumen de trayectoria y especialidades">
          <ul className={`${styles.container} ${styles.signalGrid}`}>
            {signals.map((signal) => {
              const value = typeof signal.value === "number" ? signal.value.toLocaleString("es-PE") : signal.value;
              return <li key={signal.label}><strong><span className={styles.srOnly}>{value}</span><span aria-hidden="true" data-count={typeof signal.value === "number" ? signal.value : undefined}>{value}</span></strong><span className={styles.signalLabel}>{signal.label}</span><span className={styles.signalDetail}>{signal.detail}</span></li>;
            })}
          </ul>
        </section>
        <section className={styles.section} aria-labelledby="cv-fit-title">
          <div className={styles.container}>
            <header className={styles.sectionHeading} data-reveal><span className={styles.eyebrow}>Áreas de trabajo</span><h2 id="cv-fit-title">Backend y<br /><span>aplicaciones de gestión.</span></h2><p>Responsabilidades de diseño, implementación y coordinación en proyectos de clientes y productos propios.</p></header>
            <div className={styles.archetypeGrid}>
              {archetypes.map((item, index) => <article key={item.title} className={styles.archetype} data-tilt="6">
                <div className={styles.cardGlow} aria-hidden="true" /><div data-reveal data-delay={index % 2 * 80}><div className={styles.archetypeTop}><span className={styles.archetypeIcon}><Icon name={item.icon} size={25} /></span><span className={styles.cardIndex}>0{index + 1}</span></div><h3>{item.title}</h3><p>{item.description}</p><span className={styles.proof}>{item.proof}</span><ul className={styles.tags}>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
              </article>)}
            </div>
          </div>
        </section>
        <section id="cv-work" className={`${styles.section} ${styles.workSection}`} aria-labelledby="cv-work-title">
          <div className={styles.container}>
            <header className={styles.sectionHeading} data-reveal><span className={styles.eyebrow}>01 / Proyectos destacados</span><h2 id="cv-work-title">Documentos, visión y cuentas.</h2><p>Análisis de contratos, detección de incidencias y conciliación de movimientos. Cada caso detalla mi contribución.</p></header>
            <div className={styles.projectList}>
              {projects.map((item) => <article key={item.id} className={styles.project}>
                <div className={styles.projectVisual} data-reveal><ArchitectureDiagram kind={item.kind} /></div>
                <div className={styles.projectInfo} data-reveal>
                  <span className={styles.eyebrow}>{item.number} / {item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul className={styles.tags}>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <button type="button" className={styles.projectLink} aria-haspopup="dialog" aria-label={`Ver caso técnico: ${item.title}`} onClick={() => setProject(item)}>Ver caso técnico <Icon name="arrow" size={18} /></button>
                </div>
              </article>)}
            </div>
          </div>
        </section>
        <section className={styles.section} aria-labelledby="cv-source-title">
          <div className={styles.container}>
            <SectionHeader label="Desarrollo independiente" title="Simulación multisímbolo." description="Un motor propio con costes, reglas de riesgo y comparación de experimentos." />
            <article className={styles.openSource} data-reveal>
              <div className={styles.openSourceInfo}>
                <span className={styles.eyebrow}>Producto propio</span>
                <h3 id="cv-source-title"><Icon name="platform" size={28} />{independentProject.name}</h3>
                <p>{independentProject.description}</p>
                <ul className={styles.tags}>{independentProject.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <details className={styles.projectDisclosure}>
                  <summary>Ver simulación y métricas</summary>
                  <ul className={styles.analysisCapabilities}>{independentProject.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
                </details>
                <a className={styles.projectLink} href={profile.github} target="_blank" rel="noopener noreferrer">Ver mi perfil de GitHub <Icon name="arrow" size={18} /></a>
              </div>
              <div className={styles.sourceCode}><div className={styles.codeToolbar}><span className={styles.windowDots}><i /><i /><i /></span><span>analisis.py</span><span>PY</span></div><pre aria-label="Pseudocódigo ilustrativo del flujo de análisis, sin estrategias ni datos privados"><code><span className={styles.codeComment}># Esquema ilustrativo del análisis</span>{"\n"}{"datos = preparar_historico()\n"}{"motor = MotorSimulacion(datos)\n\n"}<span className={styles.codeComment}># Separar simulación y resultados</span>{"\n"}{"informe = analizar_resultados(motor)\n"}{"exportar_informe(informe)\n"}<span className={styles.codeComment}># Sin parámetros ni resultados privados</span></code></pre><div className={styles.codeOutput}><span className={styles.statusDot} />Simulación / análisis<span>Pseudocódigo</span></div></div>
            </article>
          </div>
        </section>
        <section id="cv-architecture" className={styles.architectureSection} aria-label="Recorrido conceptual de arquitectura documental"><TenancyJourney /></section>
        <Experience />
        <section id="cv-skills" className={`${styles.section} ${styles.skillsSection}`} aria-labelledby="cv-skills-title">
          <div className={styles.container}>
            <header className={styles.sectionHeading} data-reveal><span className={styles.eyebrow}>04 / Tecnologías</span><h2 id="cv-skills-title">Lenguajes y herramientas.</h2><p>Python y AWS para el backend; modelos de IA, aplicaciones web y de escritorio, y herramientas de análisis.</p></header>
            <div className={styles.skillGroups}>{skills.map((group, index) => <div key={group.name} className={styles.skillGroup} data-reveal><span className={styles.skillNumber}>0{index + 1}</span><h3>{group.name}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
          </div>
        </section>
        <section id="cv-about" className={styles.section} aria-labelledby="cv-about-title">
          <div className={styles.container}>
            <header className={styles.sectionHeading} data-reveal><span className={styles.eyebrow}>05 / Sobre mí</span><h2 id="cv-about-title">Clientes y equipos.</h2><p>Desarrollo y coordinación de proyectos desde Lima.</p></header>
            <div className={styles.aboutGrid}>
              <figure className={styles.portraitFrame} data-tilt="5"><div className={styles.portraitToolbar}><span className={styles.windowDots}><i /><i /><i /></span><span>perfil / manuel</span><span className={styles.statusDot} /></div><div className={styles.portrait}><div className={styles.portraitPlaceholder} role="img" aria-label={`Monograma de ${profile.name}`}><span aria-hidden="true">{profile.initials}</span><small>{profile.focus}</small></div><div className={styles.portraitTint} aria-hidden="true" /></div><figcaption><span>{profile.name}</span><span>Lima · Perú</span></figcaption></figure>
              <div className={styles.aboutContent} data-reveal><p className={styles.aboutLead}>{profile.about}</p><p>{profile.background}</p><dl className={styles.profileDetails}><div><dt>Ubicación</dt><dd>{profile.location}</dd></div><div><dt>Zona horaria</dt><dd>Lima · UTC−5</dd></div><div><dt>Idiomas</dt><dd>{profile.languages}</dd></div><div><dt>Perfil</dt><dd className={styles.accent}>{profile.role}</dd></div><div><dt>Áreas</dt><dd>Backend · IA · AWS</dd></div><div><dt>Teléfono</dt><dd><a href="tel:+51924462840">{profile.phone}</a></dd></div></dl><aside className={styles.referenceNote}><span className={styles.eyebrow}>Integración y mantenimiento</span><p>Documento las APIs y estandarizo componentes compartidos. Los registros de ejecución permiten investigar incidencias y mantener el sistema.</p><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">Ver LinkedIn ↗</a></aside></div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className={styles.footer}><div className={`${styles.container} ${styles.footerInner}`}><span className={styles.footerName}>{profile.initials.toLowerCase()}<span>.</span> <span>{profile.name}</span></span><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={fontLicense} download="Geist-OFL.txt">Licencia tipográfica</a><a href="#cv-hero">Volver arriba ↑</a></div></footer>
      {commandOpen && <CommandPalette onClose={() => setCommandOpen(false)} />}
      {project && <ProjectDialog project={project} onClose={() => setProject(null)} />}
    </div>
  );
}
