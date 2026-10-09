import { Link } from "react-router-dom";

export default function AboutUsPage() {
  return (
    <>
      <h2 id="about-heading" className="doc-guide-title">About Investors Logics</h2>
      <p className="doc-lede">
        We develop trading software for MetaTrader 5. Our product,
        Blue Boost Bot, automates a rules-based Forex trading process
        in the trader’s own account.
      </p>

      <h3>Built for automated Forex trading</h3>
      <p>
        Blue Boost Bot brings market analysis, order execution and position
        management into one Expert Advisor. It can work across compatible
        Forex instruments using predefined rules.
      </p>
      <p>
        Our focus is the software. You choose your broker, keep control of
        your account and remain responsible for monitoring and trading decisions.
      </p>

      <h3>Purchase and rental options</h3>
      <p>
        The proposed rentals offer 30, 90 or 365 days of access to the same
        compiled Expert Advisor. You can also enquire about purchasing
        Blue Boost Bot; purchase pricing, access duration and conditions
        need confirmation. Source code and ownership of the strategy are
        not included. We do not offer signals or account management
        through this website.
      </p>
      <p>
        <Link to="/#license-options">Explore Blue Boost Bot options</Link>
      </p>

      <h3>Help before you choose</h3>
      <p>
        Explore the{" "}
        <Link to="/documentation#introduction">product guide</Link> and{" "}
        <Link to="/documentation#installation">setup steps</Link>,
        or <Link to="/contact">contact Investors Logics</Link>
        {" "}with questions about the bot, compatibility or licensing.
      </p>

      <h3>Software, not guaranteed returns</h3>
      <p>
        Automation applies programmed rules; it does not eliminate trading
        risk. Blue Boost Bot is not investment advice, and trading can result
        in a partial or total loss of capital.
      </p>
    </>
  );
}
