import type { Project } from "../data/profile";
import ArchitectureDiagram from "./ArchitectureDiagram";
import Dialog from "./Dialog";
import Icon from "./Icon";
import styles from "../cv.module.css";

export default function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <Dialog labelId="cv-project-title" onClose={onClose}>
      <header className={styles.projectDialogHeader}>
        <span className={styles.eyebrow}>{project.label}</span>
        <h2 id="cv-project-title">{project.title}</h2>
        <p>{project.responsibility}</p>
        <ul className={styles.tags} aria-label="Tecnologías del proyecto">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </header>

      <div className={styles.projectCaseOverview}>
        <div className={styles.projectDialogVisual}><ArchitectureDiagram kind={project.kind} /></div>
        <section aria-labelledby="cv-case-contribution">
          <h3 id="cv-case-contribution">Mi contribución</h3>
          <dl className={styles.projectCaseDecisions}>
            {project.caseSummary.decisions.map((decision) => <div key={decision.area}><dt>{decision.area}</dt><dd>{decision.implementation}</dd></div>)}
          </dl>
          <p className={styles.projectCaseResult}><strong>Resultado</strong><span>{project.caseSummary.result}</span></p>
        </section>
      </div>

      <section className={styles.projectCaseFlow} aria-labelledby="cv-case-flow-title">
        <h3 id="cv-case-flow-title">{project.caseSummary.flow.title}</h3>
        <ol role="list">
          {project.caseSummary.flow.steps.map((step, index) => <li key={step.name}>
            <span className={styles.projectCaseStep} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h4>{step.name}</h4>
            <p>{step.detail}</p>
          </li>)}
        </ol>
      </section>

      <details className={styles.projectDisclosure}>
        <summary>Ver tecnologías y controles</summary>
        <div className={styles.projectCaseDetails}>
          <table className={styles.projectCaseControls}>
            <caption>Controles</caption>
            <thead><tr><th scope="col">Punto</th><th scope="col">Tratamiento</th></tr></thead>
            <tbody>{project.caseSummary.controls.map((control) => <tr key={control.point}><th scope="row">{control.point}</th><td>{control.rule}</td></tr>)}</tbody>
          </table>
          <section aria-labelledby="cv-case-stack">
            <h3 id="cv-case-stack">Tecnología y función</h3>
            <dl className={styles.projectCaseStack}>{project.stack.map((item) => <div key={item.name}><dt>{item.name}</dt><dd>{item.purpose}</dd></div>)}</dl>
          </section>
        </div>
      </details>

      <footer className={styles.projectCaseFooter}>
        <span>Vista conceptual · Sin código ni datos privados.</span>
        <button type="button" onClick={onClose}>Volver a proyectos <Icon name="arrow" size={17} /></button>
      </footer>
    </Dialog>
  );
}
