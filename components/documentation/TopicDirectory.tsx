import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/UI/Icon";

const topics = [
  ["Understand the Expert Advisor", "What Blue Boost Bot does, what is included and what you need.", "/home/documentation#introduction", "The product"],
  ["Prepare MetaTrader 5", "Account connection, permissions and the MT5 environment.", "/home/documentation#mt5", "Your setup"],
  ["Check broker compatibility", "The account and instrument checks to make before buying.", "/home/documentation#broker", "Your setup"],
  ["Keep the platform running", "A computer or VPS, a connection and ongoing monitoring.", "/home/documentation#vps", "Everyday use"],
  ["Understand your license", "Access periods, activation questions and running costs.", "/home/contact#help", "Licensing"],
  ["Talk to Investors Logics", "Ask about the software, compatibility or installation.", "/home/contact", "Support"],
] as const;

export default function DocumentationMainPage() {
  const [query, setQuery] = useState("");
  const visibleTopics = topics.filter(([title, description, , category]) =>
    `${title} ${description} ${category}`.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <>
      <h1>Blue Boost product guides.</h1>
      <p className="doc-lede">Get to know the bot, prepare your trading environment and find practical answers in one place.</p>
      <section className="doc-start" aria-labelledby="start-heading">
        <div>
          <h2 id="start-heading">New to Blue Boost Bot?</h2>
          <p>Begin with the setup guide, from checking compatibility to your first demo environment.</p>
        </div>
        <Link to="/home/documentation#installation">Read the setup guide <Icon name="arrow-right" /></Link>
      </section>
      <div className="doc-filter">
        <label htmlFor="help-topic-filter">Find a guide</label>
        <input id="help-topic-filter" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search topics: MT5, broker, license…" autoComplete="off" aria-controls="help-topics" aria-describedby="help-filter-hint" />
        <span id="help-filter-hint">Filter the topics below, or browse every guide in the menu.</span>
      </div>
      <nav id="help-topics" className="doc-topics" aria-label="Help topics">
        {visibleTopics.map(([title, description, to, category]) => (
          <Link key={to} to={to}>
            <span className="doc-topic-copy"><strong>{title}</strong><span>{description}</span></span>
            <span className="doc-topic-meta">{category}<Icon name="arrow-up-right" /></span>
          </Link>
        ))}
      </nav>
      <p className="sr-only" role="status">{visibleTopics.length} help topics found.</p>
      {visibleTopics.length === 0 && (
        <div className="doc-empty">
          <p>No topics match “{query}”. Try MT5, broker or license.</p>
          <button type="button" onClick={() => setQuery("")}>Show all topics</button>
        </div>
      )}
      <div className="doc-help">
        <p>Looking for a license?</p>
        <Link to="/home#license-options">Compare periods and pricing <Icon name="arrow-right" /></Link>
      </div>
    </>
  );
}
