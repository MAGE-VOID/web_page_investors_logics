import styles from "./Section_1.module.css";

const proofItems = [
  {
    title: ".ex5",
    detail: "Compiled Expert Advisor",
  },
  {
    title: "MT5",
    detail: "Desktop platform",
  },
  {
    title: "30 · 90 · 365",
    detail: "Time-limited access",
  },
  {
    title: "Self-directed",
    detail: "Your environment",
  },
] as const;

const steps = [
  {
    number: "01",
    title: "Understand the bot",
    body: "Compiled .ex5 file for MetaTrader 5. Source code stays private.",
    detail: "Product",
  },
  {
    number: "02",
    title: "Check your setup",
    body: "Confirm your desktop MT5, broker connection and the conditions you can supervise.",
    detail: "Your environment",
  },
  {
    number: "03",
    title: "Choose a term",
    body: "Select 30, 90 or 365 days, then send the request. Payment and activation follow separately.",
    detail: "Access",
  },
] as const;

export default function Section_1() {
  return (
    <section id="how-it-works" className={styles.reviewSection} aria-labelledby="workflow-title">
      <div className={styles.proofStrip} aria-label="Public product facts">
        {proofItems.map((item) => (
          <div className={styles.proofItem} key={item.title}>
            <strong>{item.title}</strong>
            <span className={styles.proofDetail}>{item.detail}</span>
          </div>
        ))}
      </div>

      <div className={styles.workflowSection}>
        <div className={styles.sectionIntro}>
          <h2 id="workflow-title">Three things to decide.</h2>
          <p>
            Keep the first decision simple: the file, your MT5 setup, then the access window.
          </p>
        </div>

        <ol className={styles.workflowList}>
          {steps.map((step) => (
            <li key={step.number}>
              <div className={styles.stepTopline}>
                <span>{step.number}</span>
                <span>{step.detail}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
