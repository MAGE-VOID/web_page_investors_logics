import { Link } from "react-router-dom";

export default function GettingStartedPage() {
  return (
    <>
      <h2 id="installation-heading" className="doc-guide-title">Get started with Blue Boost Bot</h2>
      <p className="doc-lede">
        Prepare your MetaTrader 5 setup, choose a license and get familiar
        with the bot on a demo account.
      </p>

      <h3>1. Check your platform and broker</h3>
      <p>
        You need a compatible MetaTrader 5 installation and broker account.
        Confirm that your broker’s account conditions and available Forex
        instruments are supported before purchasing.
      </p>
      <p>
        See the <Link to="/documentation#mt5">MT5 guide</Link>
        {" "}and <Link to="/documentation#broker">broker checklist</Link>.
        If you are unsure about compatibility,{" "}
        <Link to="/contact">ask us about your setup</Link>.
      </p>

      <h3>2. Request your license</h3>
      <p>
        Choose a proposed rental period on the{" "}
        <Link to="/#license-options">license page</Link> or{" "}
        <Link to="/contact?mode=purchase">enquire about purchasing</Link>,
        then prepare an email request. Purchase pricing and access duration
        need confirmation. Confirm the final price, access terms, payment
        method, delivery and activation details before paying.
        No payment is collected on this website.
      </p>

      <h3>3. Install the Expert Advisor</h3>
      <p>
        Once you receive your Blue Boost Bot <code>.ex5</code> file, follow
        the installation and activation instructions supplied with it.
        Use only files received through an official Investors Logics channel,
        and contact us if any step is unclear.
      </p>
      <p>
        Choose where MetaTrader 5 will run: a compatible computer or a VPS.
        The platform must stay running and connected for the bot to operate.
        The <Link to="/documentation#vps">VPS guide</Link>
        {" "}explains that option.
      </p>

      <h3>4. Start on demo and monitor operation</h3>
      <p>
        Confirm the account connection, Expert Advisor permissions and
        platform messages in a demo environment. Become familiar with
        the software before making any decision involving live funds.
        Keep monitoring the platform and account while the bot is running.
      </p>
      <p>
        Demo trading is a way to learn how the setup behaves, not proof
        of future returns. Automated Forex trading still carries the risk
        of losing capital.
      </p>

      <div className="doc-help">
        <p>Need help with a step?</p>
        <Link to="/contact">Ask a setup question <span aria-hidden="true">→</span></Link>
      </div>
    </>
  );
}
