import { Link } from "react-router-dom";
import { licenseIncludes, productFeatures } from "@/data/product";

export default function IntroductionPage() {
  return (
    <>
      <h1>Meet Blue Boost Bot</h1>
      <p className="doc-lede">
        Blue Boost Bot is a Forex trading robot for MetaTrader 5. Also called
        an Expert Advisor or EA, it uses programmed rules to analyze the
        market, place trades and manage positions in your own broker account.
      </p>

      <h2>What does the bot do?</h2>
      <ul>
        {productFeatures.map((feature) => (
          <li key={feature.title}><strong>{feature.title}.</strong> {feature.text}</li>
        ))}
      </ul>
      <p>
        The bot can work across compatible Forex instruments. Your broker,
        account conditions and available instruments must be checked before use.
        Automation does not remove the need to monitor your account.
      </p>

      <h2>What is included?</h2>
      <ul>
        {licenseIncludes.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <p>
        The proposed rentals offer 30, 90 or 365 days with the same Expert
        Advisor. You can also ask about purchasing the bot; purchase pricing,
        access duration and conditions need confirmation. The software is
        supplied as a compiled <code>.ex5</code> file, not source code or
        ownership of the strategy. This is not a signal subscription or an
        account management service.
      </p>

      <h2>What do I need?</h2>
      <p>
        A compatible MetaTrader 5 installation, a supported broker account and
        a computer or VPS that can stay running and connected. You control the
        account, platform and monitoring. Start with a demo account to become
        familiar with the setup.
      </p>
      <p>
        <Link to="/documentation/table-of-contents/getting-started">Read the setup guide</Link>
        {" "}for the next steps, or{" "}
        <Link to="/documentation/contact">ask us about compatibility</Link>
        {" "}before requesting a license.
      </p>

      <h2>Purchase or rental?</h2>
      <p>
        <Link to="/products#license-options">Compare the proposed rental periods</Link>
        {" "}or <Link to="/contact?mode=purchase">ask about purchase terms</Link>.
        Both paths prepare an email request. Confirm the final price, access
        terms, payment, delivery and activation details before paying.
        This website does not collect payments.
      </p>

      <h2>Understand the risk</h2>
      <p>
        Blue Boost Bot is trading software, not a promise of income. Forex
        trading can result in a partial or total loss of capital. A demo account
        can help you understand operation, but demo and historical results do
        not guarantee future performance.
      </p>
    </>
  );
}
