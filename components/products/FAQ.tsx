import { contactEmail } from "@/data/products";

const questions = [
  {
    question: "Are the eight catalogue concepts available to buy?",
    answer: "No. They are fictional product concepts created for this frontend. Their sessions and prices are illustrative. Blue Boost Bot is the actual Expert Advisor presented in the licensing section.",
  },
  {
    question: "What is Blue Boost Bot?",
    answer: "A compiled .ex5 Forex Expert Advisor for MetaTrader 5, developed by Investors Logics. It automates a programmed trading workflow within your own account. It does not guarantee returns.",
  },
  {
    question: "What rental periods are proposed?",
    answer: "30 days at USD 59, 90 days at USD 149, or 365 days at USD 399. These are proposed rental offers. The final price, license conditions and activation details must be confirmed before payment.",
  },
  {
    question: "Can I purchase the bot instead of renting it?",
    answer: "Yes, you can request purchase conditions. The purchase price and access duration are not yet published. Do not assume lifetime access, automatic renewal or ownership of the strategy.",
  },
  {
    question: "Will I receive the source code or private strategy?",
    answer: "No. Licensing covers access to the compiled Expert Advisor under the agreed terms. Source code, strategy formulas, parameters and private optimization material are not part of the public offer.",
  },
  {
    question: "Can I pay or activate a license on this website?",
    answer: "Not yet. This frontend prepares an email enquiry. It does not process payments, confirm orders or activate licenses. Payment, delivery and activation must be arranged after the terms are confirmed.",
  },
  {
    question: "What should I check before using live capital?",
    answer: "Review MetaTrader 5 and broker compatibility, the installation guidance and the license terms. Evaluate in a demo environment first. You are responsible for your account and capital; Forex trading can result in losses.",
  },
];

export default function FAQ() {
  return (
    <div className="rbn pw-faq pw-wrap">
      <section className="pfaq" id="questions" aria-labelledby="faq-title" data-reveal>
        <div className="cat-section__head">
          <div>
            <h2 className="cat-section__title" id="faq-title">Clarity before the next step.</h2>
            <p className="cat-section__blurb">Straight answers. Still need help? <a href={"mailto:" + contactEmail}>Ask Investors Logics.</a></p>
          </div>
          <span className="cat-section__count">{questions.length} QUESTIONS</span>
        </div>
        <div className="pfaq__list">
          {questions.map(({ question, answer }) => (
            <details className="pfaq__item" key={question}>
              <summary className="pfaq__q">{question}<span className="pfaq__pm" aria-hidden="true">+</span></summary>
              <p className="pfaq__a">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
