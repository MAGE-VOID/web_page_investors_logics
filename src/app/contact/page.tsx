import { useId, useState } from "react";
import type { FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import { contactEmail, licensePlans } from "@/data/product";
import LicenseSelector from "@/components/Product/LicenseSelector";
import Icon from "@/components/UI/Icon";
import styles from "./ContactPage.module.css";

type AccessMode = "purchase" | "rental";

export default function Contact() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode: AccessMode = searchParams.get("mode") === "purchase" ? "purchase" : "rental";
  const plan = licensePlans.find((item) => item.id === searchParams.get("plan")) ?? licensePlans[1];
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const modeGroup = useId();

  function selectMode(value: AccessMode) {
    const next = new URLSearchParams(searchParams);
    next.set("mode", value);
    setSearchParams(next, { replace: true });
  }

  function requestLicense(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(mode === "purchase"
      ? "Blue Boost Bot · purchase enquiry"
      : `Blue Boost Bot · ${plan.days}-day rental enquiry`);
    const enquiry = mode === "purchase"
      ? [
          "I am interested in purchasing Blue Boost Bot.",
          "Please share the purchase price, license duration and conditions, payment method, delivery process and activation details.",
        ]
      : [
          `I am interested in renting Blue Boost Bot for ${plan.days} days at the proposed price of USD ${plan.price}.`,
          "Please confirm the final price, payment method, delivery process, activation date and rental expiry conditions.",
        ];
    const body = encodeURIComponent([
      "Hello Investors Logics,",
      "",
      ...enquiry,
      ...(name.trim() ? ["", `Name: ${name.trim()}`] : []),
      ...(message.trim() ? ["", message.trim()] : []),
    ].join("\n"));
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <Layout>
      <article className={styles.page}>
        <Link className={styles.backLink} to="/products#license-options">
          <span className={styles.backArrow}><Icon name="arrow-right" /></span> Explore your options
        </Link>
        <header className={styles.heading}>
          <h1>Your Blue Boost enquiry.</h1>
          <p>Choose your access, ask about your setup and prepare an email request. Review the terms with us before you pay.</p>
        </header>
        <div className={styles.grid}>
          <form className={styles.form} onSubmit={requestLicense}>
            <fieldset className={styles.modeSelector}>
              <legend>What are you interested in?</legend>
              <div className={styles.modeOptions}>
                <label>
                  <input type="radio" name={modeGroup} value="purchase" checked={mode === "purchase"} onChange={() => selectMode("purchase")} />
                  <span><strong>Purchase</strong><small>Explore buying the bot</small></span>
                </label>
                <label>
                  <input type="radio" name={modeGroup} value="rental" checked={mode === "rental"} onChange={() => selectMode("rental")} />
                  <span><strong>Rental</strong><small>Choose a period of access</small></span>
                </label>
              </div>
            </fieldset>
            <div className={styles.modeDetails}>
              {mode === "rental" ? (
                <LicenseSelector
                  value={plan.id}
                  legend="Your rental period"
                  onChange={(value) => {
                    const next = new URLSearchParams(searchParams);
                    next.set("mode", "rental");
                    next.set("plan", value);
                    setSearchParams(next, { replace: true });
                  }}
                />
              ) : (
                <p>We’ll share the purchase price, license duration and conditions with you. You can review everything before making a decision.</p>
              )}
            </div>
            <div className={styles.messageSection}>
              <h2>Tell us about your setup.</h2>
              <p>Ask about your broker, the bot or getting started. Both fields are optional.</p>
              <div className={styles.field}>
                <label htmlFor="request-name">Your name <span>Optional</span></label>
                <input id="request-name" name="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="How should we address you?" maxLength={100} />
              </div>
              <div className={styles.field}>
                <label htmlFor="request-message">Your question <span>Optional</span></label>
                <textarea id="request-message" name="message" rows={4} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="What would you like to know?" maxLength={1500} aria-describedby="request-privacy-note" />
                <p className={styles.fieldNote} id="request-privacy-note">Please don’t include passwords or account credentials.</p>
              </div>
            </div>
            <div className={styles.submitArea}>
              <button className="button button-primary" type="submit">
                Prepare my enquiry <Icon name="arrow-up-right" />
              </button>
              <p>Opens a draft in your email app for you to review and send. There’s no payment or automatic activation on this page.</p>
            </div>
            <p className={styles.directContact}>
              Prefer to write directly? <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </form>
          <aside className={styles.summary} aria-labelledby="summary-heading">
            <div className={styles.summaryContent}>
              <h2 id="summary-heading">Blue Boost Bot</h2>
              <p className={styles.summaryIntro}>Expert Advisor for MetaTrader 5</p>
              <div className={styles.selectedTerm} aria-live="polite" aria-atomic="true">
                {mode === "rental" ? (
                  <>
                    <span>{plan.days}-day rental<small>Proposed price</small></span>
                    <strong>${plan.price}<small>USD</small></strong>
                  </>
                ) : (
                  <span>Purchase enquiry<small>Price, duration and conditions on request</small></span>
                )}
              </div>
              <ul>
                <li><Icon name="check" />Compiled .ex5 software</li>
                <li><Icon name="check" />Your own MetaTrader 5 environment</li>
                <li><Icon name="check" />Installation documentation</li>
              </ul>
              <p className={styles.purchaseNote}>We’ll confirm the final price, payment, delivery and activation details with you before any purchase or rental.</p>
              <Link className={styles.terms} to="/documentation/assistance-and-policies/terms-and-conditions">
                Read the license information <Icon name="arrow-up-right" />
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  );
}
