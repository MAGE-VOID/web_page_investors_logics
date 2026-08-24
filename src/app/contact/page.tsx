import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import styles from "./ContactPage.module.css";

const planData = {
  "30-days": { days: 30, price: 59, label: "Short evaluation" },
  "90-days": { days: 90, price: 149, label: "Most balanced" },
  "365-days": { days: 365, price: 399, label: "Longer access" },
} as const;

type PlanKey = keyof typeof planData;

export default function Contact() {
  const [searchParams] = useSearchParams();
  const requestedPlan = searchParams.get("plan");
  const planKey: PlanKey = requestedPlan && requestedPlan in planData
    ? requestedPlan as PlanKey
    : "90-days";
  const plan = planData[planKey];
  const subject = encodeURIComponent(`Blue Boost Bot · ${plan.days}-day license request`);
  const body = encodeURIComponent(
    `Hello Investors Logics,\n\nI am interested in the proposed ${plan.days}-day Blue Boost Bot license at USD ${plan.price}.\n\nPlease send the next steps.`,
  );

  return (
    <Layout>
      <article className={styles.page}>
        <header className={styles.hero}>
          <div>
            <h1>Request Blue Boost Bot access.</h1>
          </div>
          <div className={styles.heroBody}>
            <p>
              Choose a time-limited access period for the compiled .ex5. Review
              your selection, check the MT5 requirements and send the request
              when you are ready for the next step.
            </p>
            <Link to="/products#license-options" className={styles.textLink}>
              Change access period <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>

        <div className={styles.statusBar} role="status">
          <div>
            <strong>Request handoff</strong>
          </div>
          <span>Payment, .ex5 delivery and activation are not connected</span>
        </div>

        <div className={styles.checkoutGrid}>
          <section className={styles.summary} aria-labelledby="summary-heading">
            <header className={styles.summaryHeader}>
              <div>
                <h2 id="summary-heading">{plan.days}-day access</h2>
              </div>
              <span>BBB / {String(plan.days).padStart(3, "0")}</span>
            </header>

            <div className={styles.termBlock}>
              <span className={styles.termNumber}>{plan.days}</span>
              <span className={styles.termUnit}>days of access</span>
            </div>

            <dl className={styles.summaryList}>
              <div><dt>Product</dt><dd>Blue Boost Bot .ex5</dd></div>
              <div><dt>Platform</dt><dd>MetaTrader 5</dd></div>
              <div><dt>Access model</dt><dd>Time-limited use</dd></div>
              <div><dt>Source code</dt><dd>Not included</dd></div>
              <div><dt>Proposed price</dt><dd>USD {plan.price}</dd></div>
            </dl>

            <div className={styles.total} aria-label={`Proposed total USD ${plan.price}`}>
              <span>Proposed total</span>
              <strong>USD {plan.price}</strong>
            </div>

            <button className={styles.disabledPayment} type="button" disabled>
              Payment is not connected
            </button>
            <a className={styles.emailAction} href={`mailto:investorslogics@gmail.com?subject=${subject}&body=${body}`}>
              Send access request by email <span aria-hidden="true">↗</span>
            </a>
            <p className={styles.emailNote}>No card data, passwords or broker credentials are requested here.</p>
          </section>

          <section className={styles.handoff} aria-labelledby="handoff-heading">
            <h2 id="handoff-heading">Send the request.</h2>
            <p className={styles.handoffIntro}>
              Review the term, then use the email button. Payment, delivery and activation happen in a separate official step.
            </p>
            <ol className={styles.handoffList}>
              <li>
                <span className={styles.index}>01</span>
                <div>
                  <h3>Check the selected term.</h3>
                  <p>Confirm the days and proposed price.</p>
                </div>
              </li>
              <li>
                <span className={styles.index}>02</span>
                <div>
                  <h3>Send the email request.</h3>
                  <p>We will reply with the next official step.</p>
                </div>
              </li>
            </ol>

            <aside className={styles.boundaryNote}>
              <strong>Public offer, private strategy.</strong>
              <p>
                Public product information explains the runtime, workflow and risk.
                Strategy formulas, parameters and optimization material are not published.
              </p>
            </aside>
          </section>
        </div>

        <section className={styles.otherTerms} aria-labelledby="other-terms-heading">
          <div>
            <h2 id="other-terms-heading">Need a different window?</h2>
          </div>
          <div className={styles.termOptions}>
            {Object.entries(planData).map(([key, option]) => (
              <Link
                key={key}
                to={`/contact?plan=${key}`}
                className={key === planKey ? styles.currentTerm : ""}
                aria-current={key === planKey ? "page" : undefined}
              >
                <span>{option.days} days</span>
                <strong>USD {option.price}</strong>
                <small>{option.label}</small>
              </Link>
            ))}
          </div>
        </section>

      </article>
    </Layout>
  );
}
