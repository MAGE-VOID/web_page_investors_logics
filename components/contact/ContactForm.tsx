import { Link } from "react-router-dom";
import { useId, useState } from "react";
import type { FormEvent } from "react";
import { contactEmail, licensePlans, products } from "@/data/products";
import styles from "./ContactForm.module.css";

export default function ContactForm({ initialMode, initialPlan, productId }: { initialMode?: string; initialPlan?: string; productId?: string }) {
  const [mode, setMode] = useState(initialMode === "purchase" ? "purchase" : "rental");
  const [planId, setPlanId] = useState(licensePlans.find((plan) => plan.id === initialPlan)?.id ?? licensePlans[1].id);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const group = useId();
  const selected = licensePlans.find((plan) => plan.id === planId) ?? licensePlans[1];
  const concept = products.find((product) => product.id === productId);
  const conceptName = concept ? [concept.name, concept.suffix].filter(Boolean).join(" ") : "";

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = concept ? `${conceptName} — concept enquiry` : mode === "purchase" ? "Blue Boost Bot — purchase enquiry" : `Blue Boost Bot — ${selected.days}-day rental enquiry`;
    const request = concept
      ? [`I have a question about the ${conceptName} illustrative concept.`, "I understand that it is not currently offered for sale and that the displayed price is a placeholder."]
      : mode === "purchase"
        ? ["I am interested in purchasing Blue Boost Bot.", "Please confirm the purchase price, access duration, license conditions, payment, delivery and activation details."]
        : [`I am interested in the ${selected.days}-day rental at the proposed price of USD ${selected.price}.`, "Please confirm the final price, activation date, expiry, license conditions, payment and delivery details."];
    const body = ["Hello Investors Logics,", "", ...request, ...(name.trim() ? ["", `Name: ${name.trim()}`] : []), ...(message.trim() ? ["", message.trim()] : [])].join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className={"page-container " + styles.page}>
      <Link to="/home#license-options" className={styles.back}><span aria-hidden="true">←</span> Back to the collection</Link>
      <header className={styles.heading}><p className="mono">INVESTORS LOGICS / ENQUIRIES</p><h1>A conversation.<br /><span>Before you commit.</span></h1><p>{concept ? `Ask about ${conceptName}, an illustrative concept. No purchase or payment is available for this preview.` : "Choose your access, ask about your setup and review the terms with us before making a payment."}</p></header>
      <div className={styles.grid}>
        <form className={styles.form} onSubmit={prepareEnquiry}>
          {!concept && <>
            <fieldset className={styles.fieldset}><legend>How would you like to access Blue Boost Bot?</legend><div className={styles.modeGrid}>{(["rental", "purchase"] as const).map((option) => <label key={option} className={styles.choice}><input type="radio" name={group + "-mode"} value={option} checked={mode === option} onChange={() => setMode(option)} /><span><strong>{option === "rental" ? "Rent the bot" : "Purchase enquiry"}</strong><small>{option === "rental" ? "Choose a period of access" : "Discuss price and duration"}</small></span></label>)}</div></fieldset>
            {mode === "rental" ? <fieldset className={styles.fieldset}><legend>Your rental period</legend><div className={styles.plans}>{licensePlans.map((plan) => <label key={plan.id} className={styles.choice}><input type="radio" name={group + "-period"} checked={planId === plan.id} onChange={() => setPlanId(plan.id)} /><span><strong>{plan.days} days</strong><small>${plan.price} USD · proposed</small></span></label>)}</div></fieldset> : <p className={styles.notice}>Purchase price, access duration and license conditions need confirmation. Do not assume lifetime access or source-code ownership.</p>}
          </>}
          <div className={styles.message}><h2>Tell us what you need.</h2><p>These fields are optional. Don’t share passwords, payment-card details or account credentials.</p><label htmlFor={group + "-name"}>Your name <span>Optional</span></label><input id={group + "-name"} autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="How should we address you?" maxLength={100} /><label htmlFor={group + "-question"}>Your question <span>Optional</span></label><textarea id={group + "-question"} rows={5} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="What would you like to know?" maxLength={1500} aria-describedby={group + "-privacy"} /><p id={group + "-privacy"} className={styles.fieldNote}>Public compatibility and licensing questions only. Keep your account access private.</p></div>
          <button type="submit" className="primary-button">Prepare email enquiry <span aria-hidden="true">↗</span></button>
          <p className={styles.submitNote}>Opens a draft in your email app for you to review and send. This website does not collect payments or issue licenses.</p><a className={styles.directEmail} href={"mailto:" + contactEmail}>{contactEmail}</a>
        </form>
        <aside className={styles.summary} aria-labelledby={group + "-summary"}>
          <p className={styles.summaryLabel}>{concept ? "CONCEPT PREVIEW" : "YOUR SOFTWARE ENQUIRY"}</p><h2 id={group + "-summary"}>{concept ? conceptName : "Blue Boost Bot"}</h2><p>{concept ? "Illustrative product. Not offered for sale." : "Expert Advisor for MetaTrader 5"}</p>
          <div className={styles.selected} aria-live="polite" aria-atomic="true">{concept ? <strong>Ask about the concept</strong> : mode === "rental" ? <><span>{selected.days}-day rental<small>Proposed price · USD</small></span><strong>${selected.price}</strong></> : <span>Purchase terms<small>Price and access duration on request</small></span>}</div>
          {!concept && <ul><li>Compiled .ex5 software</li><li>Your own MT5 environment</li><li>Installation documentation</li></ul>}
          <p className={styles.boundary}>{concept ? "The concept name, sample price and demo are temporary design content. There is no commercial bundle or checkout attached to them." : "The license covers software, not trading capital. Source code and ownership of the strategy are not included. Final conditions are confirmed by email."}</p><Link to="/home/legal">License information <span aria-hidden="true">↗</span></Link>
        </aside>
      </div>
    </div>
  );
}
