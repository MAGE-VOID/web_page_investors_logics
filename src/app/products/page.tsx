import { Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import styles from "./ProductPage.module.css";

const plans = [
  {
    key: "30-days",
    days: "30",
    price: "USD 59",
    label: "Short evaluation",
    description: "Install the file and check your MT5 setup.",
    featured: false,
  },
  {
    key: "90-days",
    days: "90",
    price: "USD 149",
    label: "Most balanced",
    description: "More time to evaluate the setup in your process.",
    featured: true,
  },
  {
    key: "365-days",
    days: "365",
    price: "USD 399",
    label: "Longer access",
    description: "Ongoing access for an established MT5 setup.",
    featured: false,
  },
] as const;

const requirements = [
  ["Platform", "MT5 desktop", "Use a compatible MetaTrader 5 installation."],
  ["Broker", "Your connection", "Check account, symbols, costs and permissions."],
  ["Runtime", "Monitored setup", "Keep the computer or VPS supervised."],
  ["Questions", "Public support", "Use the guide or contact route."],
] as const;

export default function Products() {
  return (
    <Layout>
      <article className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1>Blue Boost Bot for MetaTrader 5.</h1>
            <p className={styles.lede}>
              A compiled Expert Advisor for MetaTrader 5. Choose a time-limited term, check your setup and request access.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryAction} href="#license-options">
                Choose access <span aria-hidden="true">↓</span>
              </a>
              <Link className={styles.secondaryAction} to="/documentation">
                See how it works <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <aside className={styles.heroPanel} aria-label="Public product facts">
            <div className={styles.panelTopline}>
              <span>Product at a glance</span>
              <span>BBB / MT5</span>
            </div>
            <div className={styles.productMark} aria-hidden="true">
              <span>.EX5</span>
              <span>MT5</span>
            </div>
            <dl className={styles.factList}>
              <div><dt>Format</dt><dd>Compiled Expert Advisor</dd></div>
              <div><dt>Platform</dt><dd>MetaTrader 5</dd></div>
              <div><dt>Access</dt><dd>Time-limited license</dd></div>
            </dl>
          </aside>
        </header>

        <section id="license-options" className={styles.licenseSection} aria-labelledby="license-heading">
          <div className={styles.sectionHeading}>
            <h2 id="license-heading">Choose your access period.</h2>
            <p>
              Proposed prices for the compiled .ex5. Payment, delivery and activation are handled separately.
            </p>
          </div>

          <div className={styles.planGrid}>
            {plans.map((plan) => (
              <article key={plan.key} className={`${styles.plan} ${plan.featured ? styles.featuredPlan : ""}`}>
                <div className={styles.planTopline}>
                  <span>{plan.label}</span>
                  {plan.featured && <strong>Recommended</strong>}
                </div>
                <div className={styles.planTerm}>
                  <span className={styles.planDays}>{plan.days}</span>
                  <span className={styles.planUnit}>days</span>
                </div>
                <p>{plan.description}</p>
                <div className={styles.planBottomline}>
                  <strong>{plan.price}</strong>
                  <Link to={`/contact?plan=${plan.key}`}>
                    Request access <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.requirementsSection} aria-labelledby="requirements-heading">
          <div className={styles.sectionHeading}>
            <h2 id="requirements-heading">Before you request.</h2>
            <p>
              Confirm the platform, account and continuity conditions you can supervise.
            </p>
          </div>
          <dl className={styles.requirementsGrid}>
            {requirements.map(([label, value, description]) => (
              <div key={label} className={styles.requirement}>
                <dt>{label}</dt>
                <dd>
                  <strong>{value}</strong>
                  <span>{description}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.boundarySection} aria-labelledby="boundary-heading">
          <div className={styles.boundaryColumn}>
            <h2 id="boundary-heading">What you receive.</h2>
            <ul>
              <li>Compiled Blue Boost Bot .ex5 file</li>
              <li>Use inside compatible MetaTrader 5</li>
              <li>Selected access term</li>
              <li>Public setup guide</li>
            </ul>
          </div>
          <div className={styles.boundaryColumnMuted}>
            <h2>What stays out of the offer.</h2>
            <ul>
              <li>Source code or editable project files</li>
              <li>Private strategy formulas or optimization data</li>
              <li>Guaranteed returns or account management</li>
            </ul>
          </div>
        </section>

        <aside className={styles.riskNote}>
          <div>
            <h2>Test the setup, not a promise.</h2>
          </div>
          <div>
            <p>
              Forex and leveraged trading can result in loss. Read the guide and decide independently whether the product fits your process.
            </p>
            <Link to="/documentation/table-of-contents/getting-started">
              Read the evaluation guide <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </aside>
      </article>
    </Layout>
  );
}
