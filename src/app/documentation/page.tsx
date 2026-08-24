import { Link } from "react-router-dom";

const entries = [
  ["What is Blue Boost Bot?", "The product, the compiled .ex5 format, the MT5 runtime and the public boundary.", "/documentation/introduction"],
  ["How to get started", "A short sequence for checking suitability, preparing MT5 and evaluating the setup.", "/documentation/table-of-contents/getting-started"],
  ["MetaTrader 5 basics", "The platform, permissions, logs and responsibilities around an Expert Advisor.", "/documentation/table-of-contents/platforms"],
  ["What automation does", "What programmed rules can make repeatable—and what they cannot guarantee.", "/documentation/table-of-contents/algorithmic-trading"],
  ["Forex and leverage", "A plain-language look at currency markets, broker conditions and exposure risk.", "/documentation/table-of-contents/what-is-forex"],
  ["Keep MT5 running", "VPS continuity, monitoring, recovery and the limits of hosted infrastructure.", "/documentation/infrastructure/virtual-private-server"],
  ["Stay secure", "Protect accounts, verify communications and recognise common scams.", "/documentation/infrastructure/cybersecurity-and-scams"],
  ["Useful resources", "Official MetaTrader 5 references and public support routes.", "/documentation/table-of-contents/resources"],
  ["Questions and support", "Answers to product, setup, evaluation and risk questions.", "/documentation/assistance-and-policies/help-center"],
] as const;

const quickStarts = [
  ["01", "I want to understand the bot", "Start with the product introduction and the public scope.", "/documentation/introduction"],
  ["02", "I am preparing MT5", "Review the platform, broker connection, permissions and runtime basics.", "/documentation/table-of-contents/platforms"],
  ["03", "I am ready to evaluate", "Follow the setup sequence, then review support and risk before requesting access.", "/documentation/table-of-contents/getting-started"],
] as const;

export default function DocumentationMainPage() {
  return (
    <>
      <h1>Everything you need to evaluate the bot.</h1>
      <p className="doc-lede">
        Start with the product, then move through setup, platform and support.
        This public guide explains how the compiled Expert Advisor fits inside
        MetaTrader 5. Private logic, parameters and internal results remain out.
      </p>

      <section className="doc-quick-start" aria-labelledby="quick-start-heading">
        <div className="doc-quick-start__heading">
          <p className="doc-section-label">Choose a route</p>
          <h2 id="quick-start-heading">Start with what you need to know.</h2>
        </div>
        <nav className="doc-quick-start__list" aria-label="Suggested documentation routes">
          {quickStarts.map(([number, title, detail, to]) => (
            <Link key={to} to={to}>
              <span className="doc-quick-start__number">{number}</span>
              <span className="doc-quick-start__copy">
                <strong>{title}</strong>
                <span>{detail}</span>
              </span>
              <span className="doc-quick-start__arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
      </section>

      <h2 className="doc-index-heading">Full public reference</h2>
      <nav className="doc-index" aria-label="Documentation index">
        {entries.map(([title, detail, to], index) => (
          <Link key={to} to={to}>
            <span className="doc-index-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="doc-index-copy">
              <strong>{title}</strong>
              <span>{detail}</span>
            </span>
            <span className="doc-index-arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
