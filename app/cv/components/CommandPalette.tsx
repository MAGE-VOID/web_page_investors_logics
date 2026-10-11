import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "../data/profile";
import Dialog from "./Dialog";
import Icon from "./Icon";
import styles from "../cv.module.css";

type Command = { label: string; detail: string; href: string; external?: boolean };
const commands: Command[] = [
  ...navigation.map((item) => ({ label: item.label, detail: `Ir a la sección ${item.label.toLowerCase()}`, href: `#${item.id}` })),
  { label: "GitHub", detail: profile.githubHandle, href: profile.github, external: true },
  { label: "LinkedIn", detail: profile.name, href: profile.linkedin, external: true },
  { label: "Correo", detail: profile.email, href: `mailto:${profile.email}` },
];

const normalize = (value: string) => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export default function CommandPalette({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const list = useRef<HTMLDivElement>(null);
  const matches = commands.filter((item) => normalize(`${item.label} ${item.detail}`).includes(normalize(query)));
  const index = Math.min(selected, Math.max(matches.length - 1, 0));

  useEffect(() => { list.current?.querySelector<HTMLElement>(`[data-command-index="${index}"]`)?.scrollIntoView({ block: "nearest" }); }, [index]);

  const activate = (command: Command) => {
    onClose();
    if (command.href.startsWith("#")) {
      const target = document.getElementById(command.href.slice(1));
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() => {
        target?.scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "start" });
        if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
      });
    } else if (command.external) {
      window.open(command.href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = command.href;
    }
  };

  return (
    <Dialog onClose={onClose} labelId="cv-command-title" compact>
      <h2 id="cv-command-title" className={styles.srOnly}>Navegar por el CV</h2>
      <div className={styles.commandInputRow}>
        <Icon name="command" size={20} />
        <input className={styles.commandInput} autoFocus type="search" placeholder="¿Qué sección quieres ver?" value={query} onChange={(event) => { setQuery(event.target.value); setSelected(0); }} role="combobox" aria-label="Buscar secciones o contacto" aria-autocomplete="list" aria-expanded="true" aria-controls="cv-command-results" aria-activedescendant={matches.length ? `cv-command-${index}` : undefined} onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setSelected(matches.length ? (index + (event.key === "ArrowDown" ? 1 : -1) + matches.length) % matches.length : 0);
          }
          if (event.key === "Enter" && matches[index]) { event.preventDefault(); activate(matches[index]); }
        }} />
      </div>
      <div ref={list} id="cv-command-results" className={styles.commandResults} role="listbox" aria-label="Secciones y enlaces de contacto">
        {matches.map((item, itemIndex) => <div key={item.href} role="option" id={`cv-command-${itemIndex}`} aria-selected={index === itemIndex} data-command-index={itemIndex} className={styles.commandOption} onPointerMove={() => setSelected(itemIndex)}>
          <button type="button" tabIndex={-1} onClick={() => activate(item)}><span>{item.label}<small>{item.detail}</small></span><span aria-hidden="true">↵</span></button>
        </div>)}
        {!matches.length && <p className={styles.emptySearch} role="status">No hay coincidencias. Prueba con «proyectos» o «correo».</p>}
      </div>
      <div className={styles.commandHelp}><span><kbd>↑</kbd><kbd>↓</kbd> navegar</span><span><kbd>↵</kbd> seleccionar</span><span><kbd>esc</kbd> cerrar</span></div>
    </Dialog>
  );
}
