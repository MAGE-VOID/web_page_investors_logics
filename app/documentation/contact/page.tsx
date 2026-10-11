import { Link } from "react-router-dom";
import Icon from "@/components/UI/Icon";
import { contactEmail } from "@/data/blueBoost";

export default function DocumentationContactPage() {
  return (
    <>
      <h2 id="support-heading" className="doc-guide-title">Ask us about Blue Boost Bot</h2>
      <p className="doc-lede">
        Have a question about the trading robot, your broker or a license?
        Email Investors Logics with what you would like to know.
      </p>
      <a className="doc-contact" href={`mailto:${contactEmail}`}>
        <span><strong>Email Investors Logics</strong><span>{contactEmail}</span></span>
        <Icon name="arrow-up-right" />
      </a>

      <h3>Before purchasing</h3>
      <p>
        Share your broker name, account type and whether you plan to use
        a computer or VPS. We can discuss your compatibility question and
        the payment, delivery and activation details you need to confirm.
      </p>
      <p>
        Want to rent the bot?{" "}
        <Link to="/home#license-options">Compare the proposed rental periods</Link>.
        {" "}Prefer to buy? <Link to="/home/contact?mode=purchase">Ask about purchase terms</Link>;
        pricing and access duration need confirmation.
      </p>

      <h3>For setup questions</h3>
      <ul>
        <li>Your MetaTrader 5 version.</li>
        <li>The step you are trying to complete.</li>
        <li>What happened and any visible, non-sensitive error text.</li>
      </ul>

      <h3>Keep your account details private</h3>
      <p>
        Do not send passwords, API keys, payment-card data, full account
        credentials or remote-access details. They are not needed to
        answer a product question.
      </p>
    </>
  );
}
