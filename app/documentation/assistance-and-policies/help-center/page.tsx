import { Link } from "react-router-dom";
import FAQBox from "@/components/documentation/FAQBox";
import { productQuestions } from "@/data/blueBoost";

export default function HelpCenterPage() {
  return (
    <>
      <h2 id="help-heading" className="doc-guide-title">Blue Boost Bot help center</h2>
      <p className="doc-lede">
        Answers about purchase and rental, preparing MetaTrader 5 and running
        your Forex trading robot.
      </p>

      <h3>Product and license questions</h3>
      {productQuestions.map((item) => (
        <FAQBox key={item.question} title={item.question}>
          {item.answer}
        </FAQBox>
      ))}

      <h3>Setup and support</h3>
      <FAQBox title="Where do I start with installation?">
        Follow the{" "}
        <Link to="/home/documentation#installation">setup guide</Link>
        {" "}to prepare MT5 and your broker account. Once you receive the bot,
        follow the installation and activation instructions supplied with
        your license. Begin on demo before considering live trading.
      </FAQBox>
      <FAQBox title="What should I do if the bot is not running?">
        Check that MetaTrader 5 is open and connected to the intended account,
        and review its Expert Advisor permissions and visible error messages.
        If you need help,{" "}
        <Link to="/home/contact">contact us</Link> with your MT5 version
        and the error text. Never send passwords or full account credentials.
      </FAQBox>
      <FAQBox title="Can I run it alongside another trading robot?">
        Confirm compatibility before combining Expert Advisors in the same
        account. They can affect the same positions, account balance and
        available margin. Tell us about your setup without sharing credentials.
      </FAQBox>

      <div className="doc-help">
        <p>Still have a question?</p>
        <Link to="/home/contact">Contact Investors Logics <span aria-hidden="true">→</span></Link>
      </div>
    </>
  );
}
