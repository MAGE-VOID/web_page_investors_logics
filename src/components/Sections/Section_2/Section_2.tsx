import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Section_2.module.css";

const plans = [
  { days: 30, price: 59, label: "Short evaluation", featured: false },
  { days: 90, price: 149, label: "Most balanced", featured: true },
  { days: 365, price: 399, label: "Longer access", featured: false },
] as const;

export default function Section_2() {
  const [selectedDays, setSelectedDays] = useState<number>(90);
  const selectedPlan = plans.find((plan) => plan.days === selectedDays) ?? plans[1];

  return (
    <>
      <section id="product-scope" className={styles.boundarySection} aria-labelledby="boundary-title">
        <div>
          <h2 id="boundary-title">Know what you are choosing.</h2>
        </div>
        <div className={styles.boundaryCopy}>
          <p>
            You receive a compiled .ex5 for MetaTrader 5 and a time-limited access term. Your broker, capital, supervision and risk remain yours to assess. Strategy logic stays private.
          </p>
          <div className={styles.boundaryLinks}>
            <Link to="/documentation/table-of-contents/getting-started">Read the setup guide <span aria-hidden="true">→</span></Link>
            <Link to="/documentation/assistance-and-policies/help-center">Questions? Open support <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section id="license-options" className={styles.conversionBand} aria-labelledby="conversion-title">
        <div className={styles.conversionIntro}>
          <h2 id="conversion-title">Choose the access window.</h2>
          <p>
            Choose 30, 90 or 365 days. This preview does not process payment or activate a license yet.
          </p>
        </div>

        <div className={styles.licensePicker}>
          <fieldset>
            <legend>Time-limited access</legend>
            <div className={styles.planChoices}>
              {plans.map((plan) => (
                <label key={plan.days} className={selectedPlan.days === plan.days ? styles.planSelected : undefined}>
                  <input
                    type="radio"
                    name="home-license"
                    value={plan.days}
                    checked={selectedPlan.days === plan.days}
                    onChange={() => setSelectedDays(plan.days)}
                  />
                  <span className={styles.planCopy}>
                    <strong>{plan.days} days</strong>
                    <small>USD {plan.price}</small>
                  </span>
                  <span className={styles.planLabel}>{plan.featured ? "Recommended" : plan.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <Link className={styles.primaryAction} to={`/contact?plan=${selectedPlan.days}-days`}>
            Request {selectedPlan.days}-day access <span aria-hidden="true">→</span>
          </Link>
          <p className={styles.licenseNote}>Request handoff · payment and activation are not connected.</p>
        </div>
      </section>
    </>
  );
}
