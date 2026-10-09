import { useId, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/UI/Icon";
import { productFeatures } from "@/data/product";
import styles from "./ProductPreview.module.css";

const phaseNames = ["Analyze", "Execute", "Manage"] as const;

export default function ProductPreview() {
  const [phase, setPhase] = useState(0);
  const id = useId();
  const feature = productFeatures[phase];

  return (
    <section id="demo" className={styles.preview} aria-label="Explore Blue Boost Bot">
      <div className={styles.body}>
        <header className={styles.heading}>
          <h2>Three jobs.<span>One Expert Advisor.</span></h2>
        </header>
        <div className={styles.workflow}>
          <fieldset className={styles.phases}>
            <legend className="sr-only">Explore the public workflow</legend>
            {phaseNames.map((name, index) => (
              <label key={name}>
                <input type="radio" name={id + "-phase"} value={name}
                  checked={phase === index} onChange={() => setPhase(index)}
                  aria-controls={id + "-description"} />
                <span className={styles.phaseBody}>
                  <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
                  <span>{name}</span>
                </span>
              </label>
            ))}
          </fieldset>
          <div id={id + "-description"} className={styles.detail} aria-live="polite" aria-atomic="true">
            <div key={phase} className={styles.detailBody}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </div>
          <Link className={styles.guide} to="/documentation/introduction">
            Get to know the bot <Icon name="arrow-up-right" />
          </Link>
        </div>
      </div>
      <div className={styles.account}>
        <p><strong>Your account. Your control.</strong></p>
        <span>You choose the broker, provide the capital and monitor the platform.</span>
      </div>
    </section>
  );
}
