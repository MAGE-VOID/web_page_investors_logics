import { Link } from "react-router-dom";
import Icon from "@/components/UI/Icon";
import styles from "./Section_1.module.css";

const steps = [
  { title: "Check your environment", text: "You need MetaTrader 5, a compatible broker account and a connected computer or VPS.", link: "/documentation/best-brokers", action: "Check compatibility" },
  { title: "Arrange your access", text: "Confirm the terms, receive the compiled bot and follow the installation guide.", link: "/documentation/table-of-contents/getting-started", action: "Read the setup guide" },
  { title: "Start on a demo account", text: "Get familiar with the workflow before considering live capital. Keep the platform running and monitored.", link: "/documentation/infrastructure/virtual-private-server", action: "Prepare your platform" },
] as const;

export default function Section_1() {
  return (
    <section id="how-it-works" className={styles.section} aria-labelledby="workflow-title">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <h2 id="workflow-title">A clear way to get started.</h2>
          <p>A compatible environment matters as much as the software.</p>
        </header>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <Link to={step.link}>{step.action}<Icon name="arrow-up-right" /></Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
