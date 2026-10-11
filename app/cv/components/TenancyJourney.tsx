import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { architectureSteps } from "../data/profile";
import Icon from "./Icon";
import styles from "../cv.module.css";

type Step = (typeof architectureSteps)[number];

const phases = [...new Set(architectureSteps.map(step => step.phase))];
const count = architectureSteps.length;
const formatStep = (index: number) => String(index + 1).padStart(2, "0");

function StepContract({ step }: { step: Step }) {
  return (
    <div className={styles.flowContract}>
      <dl><dt>Entrada</dt><dd>{step.input}</dd></dl>
      <Icon name="arrow" size={18} />
      <dl><dt>Salida</dt><dd>{step.output}</dd></dl>
    </div>
  );
}

function StepCode({ code }: { code: string }) {
  return (
    <div className={styles.layerCode}>
      <div className={styles.flowCodeHeader}>
        <span className={styles.codeLabel}>Pseudocódigo</span>
        <span className={styles.codeVerified}>Ejemplo conceptual</span>
      </div>
      <div className={styles.flowCodeLine}>
        <span aria-hidden="true">01</span>
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );
}

export default function TenancyJourney() {
  const id = `cv-flow-${useId().replace(/[^a-zA-Z0-9_-]/g, "_")}`;
  const ref = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLDivElement>(null);
  const pane = useRef<HTMLDivElement>(null);
  const diagram = useRef<HTMLDivElement>(null);
  const jumpToStep = useRef<((step: number) => boolean) | null>(null);
  const viewAnchor = useRef<number | null>(null);
  const pinAnchor = useRef<{ top: number; step: number } | null>(null);
  const [active, setActive] = useState(0);
  const [manual, setManual] = useState<number | null>(null);
  const [fullView, setFullView] = useState(false);
  const [pinned, setPinned] = useState(true);
  const [announcement, setAnnouncement] = useState("");
  const index = manual ?? active;
  const layer = architectureSteps[index];
  const detailId = `${id}-detail`;
  const allStepsId = `${id}-all`;

  const selectStep = (next: number, moveFocus = false) => {
    const selected = Math.max(0, Math.min(count - 1, next));
    setActive(selected);
    // In scroll mode, selection moves the real scroll position as well as the UI.
    // Manual exploration remains available when the panel cannot be pinned.
    setManual(jumpToStep.current?.(selected) ? null : selected);
    setAnnouncement(`Paso ${selected + 1} de ${count}: ${architectureSteps[selected].name}.`);
    if (moveFocus) ref.current?.querySelector<HTMLButtonElement>(`[data-flow-step="${selected}"]`)?.focus({ preventScroll: true });
  };

  const navigateStep = (event: KeyboardEvent<HTMLButtonElement>, itemIndex: number) => {
    let next: number;
    switch (event.key) {
      case "ArrowUp": next = itemIndex - 1; break;
      case "ArrowDown": next = itemIndex + 1; break;
      case "Home": next = 0; break;
      case "End": next = count - 1; break;
      default: return;
    }
    event.preventDefault();
    selectStep(next, true);
  };

  useLayoutEffect(() => {
    const previousTop = viewAnchor.current;
    const previousPin = pinAnchor.current;
    const intro = heading.current;
    viewAnchor.current = null;
    pinAnchor.current = null;
    if (previousTop !== null && intro) {
      const difference = intro.getBoundingClientRect().top - previousTop;
      if (Math.abs(difference) > 1) window.scrollBy({ top: difference, behavior: "instant" });
    } else if (previousPin && pane.current) {
      if (pinned && jumpToStep.current?.(previousPin.step)) return;
      const difference = pane.current.getBoundingClientRect().top - previousPin.top;
      if (Math.abs(difference) > 1) window.scrollBy({ top: difference, behavior: "instant" });
    }
  }, [fullView, pinned]);

  useEffect(() => {
    const region = ref.current;
    const intro = heading.current;
    const sticky = pane.current;
    const content = diagram.current;
    if (!region || !intro || !sticky || !content) return;
    const desktop = window.matchMedia("(min-width: 1024px) and (min-height: 701px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const print = window.matchMedia("print");
    let frame = 0;
    let layoutFrame = 0;
    let visible = false;
    let eligible = false;
    let inset = 64;
    let listening = false;
    let disposed = false;
    const bounds = () => {
      // Read the natural heading position, not the moving sticky element's top.
      // Live bounds also follow layout changes above this section and font loading.
      const start = intro.getBoundingClientRect().bottom + window.scrollY - inset;
      const end = region.getBoundingClientRect().bottom + window.scrollY - sticky.offsetHeight - inset;
      return { start, distance: Math.max(1, end - start) };
    };
    const update = () => {
      frame = 0;
      if (!listening || region.dataset.flowPinned === "false") return;
      const { start, distance } = bounds();
      const progress = Math.max(0, Math.min(1, (window.scrollY - start) / distance));
      setActive(Math.min(count - 1, Math.floor(progress * count)));
      setManual(null);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const sync = () => {
      const enabled = visible && eligible && desktop.matches && !reduced.matches && !print.matches && !document.hidden && !fullView;
      if (enabled && !listening) {
        window.addEventListener("scroll", scroll, { passive: true });
        listening = true;
        scroll();
      }
      if (!enabled && listening) {
        window.removeEventListener("scroll", scroll);
        listening = false;
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };
    const measure = () => {
      layoutFrame = 0;
      const interactive = desktop.matches && !reduced.matches && !print.matches && !fullView;
      const style = window.getComputedStyle(sticky);
      inset = Number.parseFloat(style.top) || 64;
      const padding = Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom);
      // Measure the content, not the min-height of the sticky viewport. When it
      // cannot fit, keep native page scrolling and the existing step controls.
      const fits = !interactive || content.offsetHeight + padding + inset <= window.innerHeight + 1;
      eligible = interactive && fits;
      if (interactive && fits !== (region.dataset.flowPinned !== "false")) {
        const rect = sticky.getBoundingClientRect();
        if (rect.bottom > inset && rect.top < window.innerHeight) {
          const selected = content.querySelector<HTMLButtonElement>("[data-flow-step][aria-pressed='true']");
          pinAnchor.current = { top: rect.top, step: Number(selected?.dataset.flowStep ?? 0) };
        }
      }
      setPinned(fits);
      sync();
      if (listening) scroll();
    };
    const resize = () => { if (!layoutFrame) layoutFrame = requestAnimationFrame(measure); };
    const preferencesChanged = () => { sync(); resize(); };
    const visibilityChanged = () => { sync(); if (!document.hidden) resize(); };
    const jump = (selected: number) => {
      if (!eligible || region.dataset.flowPinned === "false" || !desktop.matches || reduced.matches || print.matches || document.hidden || fullView) return false;
      const { start, distance } = bounds();
      // Aim inside the requested step's band, not on a rounding-sensitive boundary.
      const progress = selected === 0 ? 0 : (selected + .5) / count;
      window.scrollTo({ top: start + distance * progress, behavior: "instant" });
      scroll();
      return true;
    };
    jumpToStep.current = jump;
    const observer = "IntersectionObserver" in window ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      region.dataset.flowVisible = String(visible);
      sync();
    }) : null;
    if (observer) observer.observe(region);
    else { visible = true; region.dataset.flowVisible = "true"; sync(); }
    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(resize) : null;
    resizeObserver?.observe(region);
    resizeObserver?.observe(intro);
    resizeObserver?.observe(content);
    desktop.addEventListener("change", preferencesChanged);
    reduced.addEventListener("change", preferencesChanged);
    print.addEventListener("change", preferencesChanged);
    document.addEventListener("visibilitychange", visibilityChanged);
    window.addEventListener("resize", resize, { passive: true });
    resize();
    document.fonts?.ready.then(() => { if (!disposed) resize(); });
    return () => {
      disposed = true;
      if (jumpToStep.current === jump) jumpToStep.current = null;
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", resize);
      desktop.removeEventListener("change", preferencesChanged);
      reduced.removeEventListener("change", preferencesChanged);
      print.removeEventListener("change", preferencesChanged);
      document.removeEventListener("visibilitychange", visibilityChanged);
      observer?.disconnect();
      resizeObserver?.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(layoutFrame);
    };
  }, [fullView]);

  return (
    <div ref={ref} className={styles.tenancyJourney} data-flow-mode={fullView ? "all" : "scroll"} data-flow-pinned={pinned} data-flow-visible="false">
      <div ref={heading} className={styles.tenancyHeading}>
        <div className={styles.container}>
          <header className={styles.sectionHeading} data-reveal>
            <span className={styles.eyebrow}>02 / Arquitectura</span>
            <h2>Procesamiento<br /><span>documental.</span></h2>
            <p>Decisiones del backend de Binder: acceso, trabajo asíncrono, análisis con IA y recuperación. Es un esquema conceptual; los registros acompañan todo el proceso.</p>
          </header>
          <div className={styles.flowViewSwitch}>
            <button type="button" aria-expanded={fullView} aria-controls={allStepsId} onClick={() => {
              viewAnchor.current = heading.current?.getBoundingClientRect().top ?? null;
              setFullView(!fullView);
              setAnnouncement(fullView ? "Recorrido interactivo disponible." : "Vista completa: las ocho etapas están visibles.");
            }}>{fullView ? "Volver al recorrido" : "Ver todas las etapas"}<Icon name="layers" size={16} /></button>
            <span>Selecciona una etapa o sigue el desplazamiento.</span>
          </div>
        </div>
      </div>
      <div ref={pane} className={styles.tenancySticky}>
        <div className={styles.container}>
          <div ref={diagram} className={styles.tenancyDesktop}>
            <div className={styles.layerDiagram}>
              <div className={styles.layerDiagramHeader}><Icon name="layers" size={18} /><span>Flujo documental</span><span className={styles.layerCount}>{String(count).padStart(2, "0")} etapas</span></div>
              <div className={styles.flowPhases} role="group" aria-label="Fases del flujo documental">
                {phases.map(phase => <button key={phase} type="button" aria-pressed={layer.phase === phase}
                  aria-controls={detailId} onClick={() => selectStep(architectureSteps.findIndex(step => step.phase === phase))}>{phase}</button>)}
              </div>
              <ol className={styles.layerNodes} aria-label="Etapas del recorrido">
                {architectureSteps.map((item, itemIndex) => <li key={item.name} data-active={index === itemIndex} data-complete={index > itemIndex}>
                  <button type="button" data-flow-step={itemIndex} onClick={() => selectStep(itemIndex)}
                    onKeyDown={event => navigateStep(event, itemIndex)} aria-pressed={index === itemIndex} aria-controls={detailId}>
                    <span className={styles.layerNumber}>{formatStep(itemIndex)}</span>
                    <span className={styles.layerNodeText}><strong>{item.name}</strong><small>{item.kind}</small></span>
                    <span className={styles.layerNodeDot} aria-hidden="true">{index > itemIndex ? "✓" : ""}</span>
                  </button>
                  {itemIndex < count - 1 && <span className={styles.layerConnector} aria-hidden="true"><span /></span>}
                </li>)}
              </ol>
              <div className={styles.layerDiagramFooter}><span>Esquema conceptual</span><span aria-hidden="true">↑ ↓ para explorar</span></div>
            </div>
            <article id={detailId} className={styles.layerDetail} aria-labelledby={`${id}-step-title-${index}`}
              style={{ "--cv-journey-step": (index + 1) / count } as CSSProperties}>
              <div className={styles.layerDetailStack}>
                {architectureSteps.map((item, itemIndex) => (
                  <div key={item.name} className={styles.layerDetailInner} data-active={index === itemIndex}
                    aria-hidden={index !== itemIndex} inert={index !== itemIndex}>
                    <div className={styles.layerDetailMeta}><span>{item.phase} · {item.kind}</span><span>{formatStep(itemIndex)} / {String(count).padStart(2, "0")}</span></div>
                    <h3 id={`${id}-step-title-${itemIndex}`}>{item.name}</h3>
                    <p>{item.description}</p>
                    <StepContract step={item} />
                    <StepCode code={item.code} />
                    <blockquote>{item.note}</blockquote>
                  </div>
                ))}
              </div>
              <div className={styles.layerProgress} role="progressbar" aria-label="Etapa del recorrido"
                aria-valuemin={1} aria-valuemax={count} aria-valuenow={index + 1} aria-valuetext={`Paso ${index + 1} de ${count}: ${layer.name}`}><span /></div>
              <div className={styles.layerControls}>
                <div className={styles.flowStepControls}>
                  <button type="button" disabled={index === 0} onClick={() => selectStep(index - 1)}><span className={styles.flowBackArrow}><Icon name="arrow" size={16} /></span>Anterior</button>
                  <button type="button" disabled={index === count - 1} onClick={() => selectStep(index + 1)}>Siguiente<Icon name="arrow" size={16} /></button>
                </div>
                <button className={styles.flowResume} type="button" disabled={!pinned || manual === null} onClick={() => {
                  setManual(null);
                  jumpToStep.current?.(index);
                  setAnnouncement("Recorrido vinculado al desplazamiento.");
                }}>{!pinned ? "Exploración manual" : manual === null ? "Recorrido automático" : "Reanudar recorrido"}<span aria-hidden="true">↓</span></button>
              </div>
            </article>
          </div>
          <ol id={allStepsId} className={styles.tenancyMobile} aria-label="Flujo documental completo">
            {architectureSteps.map((item, itemIndex) => <li key={item.name} data-reveal>
              <article aria-labelledby={`${id}-all-title-${itemIndex}`}>
                <header className={styles.flowMobileHeader}><span>{formatStep(itemIndex)} / {String(count).padStart(2, "0")}</span><span>{item.phase} · {item.kind}</span></header>
                <h3 id={`${id}-all-title-${itemIndex}`}>{item.name}</h3>
                <p>{item.description}</p>
                <StepContract step={item} />
                <StepCode code={item.code} />
                <details className={styles.flowDecision}><summary>Decisión de diseño</summary><p>{item.note}</p></details>
              </article>
            </li>)}
          </ol>
        </div>
      </div>
      <span className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">{announcement}</span>
    </div>
  );
}
