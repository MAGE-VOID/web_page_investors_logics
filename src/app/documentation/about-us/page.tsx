import { Link } from "react-router-dom";

export default function AboutUsPage() {
  return (
    <>
      <h1>About Investors Logics</h1>
      <p className="doc-lede">
        We develop trading software for MetaTrader 5. Our product,
        Blue Boost Bot, automates a rules-based Forex trading process
        in the trader’s own account.
      </p>

      <h2>Built for automated Forex trading</h2>
      <p>
        Blue Boost Bot brings market analysis, order execution and position
        management into one Expert Advisor. It can work across compatible
        Forex instruments using predefined rules.
      </p>
      <p>
        Our focus is the software. You choose your broker, keep control of
        your account and remain responsible for monitoring and trading decisions.
      </p>

      <h2>Purchase and rental options</h2>
      <p>
        The proposed rentals offer 30, 90 or 365 days of access to the same
        compiled Expert Advisor. You can also enquire about purchasing
        Blue Boost Bot; purchase pricing, access duration and conditions
        need confirmation. Source code and ownership of the strategy are
        not included. We do not offer signals or account management
        through this website.
      </p>
      <p>
        <Link to="/products#license-options">Explore Blue Boost Bot options</Link>
      </p>

      <h2>Help before you choose</h2>
      <p>
        Explore the{" "}
        <Link to="/documentation/introduction">product guide</Link> and{" "}
        <Link to="/documentation/table-of-contents/getting-started">setup steps</Link>,
        or <Link to="/documentation/contact">contact Investors Logics</Link>
        {" "}with questions about the bot, compatibility or licensing.
      </p>

      <h2>Software, not guaranteed returns</h2>
      <p>
        Automation applies programmed rules; it does not eliminate trading
        risk. Blue Boost Bot is not investment advice, and trading can result
        in a partial or total loss of capital.
      </p>
    </>
  );
}
