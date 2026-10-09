import { Link } from "react-router-dom";
import FAQBox from "@/app/documentation/components/Content/ui/FAQBox";
import { productQuestions } from "@/data/product";

export default function HelpCenterPage() {
  return (
    <>
      <h1>Blue Boost Bot help center</h1>
      <p className="doc-lede">
        Answers about purchase and rental, preparing MetaTrader 5 and running
        your Forex trading robot.
      </p>

      <h2>Product and license questions</h2>
      {productQuestions.map((item) => (
        <FAQBox key={item.question} title={item.question}>
          {item.answer}
        </FAQBox>
      ))}

      <h2>Setup and support</h2>
      <FAQBox title="Where do I start with installation?">
        Follow the{" "}
        <Link to="/documentation/table-of-contents/getting-started">setup guide</Link>
        {" "}to prepare MT5 and your broker account. Once you receive the bot,
        follow the installation and activation instructions supplied with
        your license. Begin on demo before considering live trading.
      </FAQBox>
      <FAQBox title="What should I do if the bot is not running?">
        Check that MetaTrader 5 is open and connected to the intended account,
        and review its Expert Advisor permissions and visible error messages.
        If you need help,{" "}
        <Link to="/documentation/contact">contact us</Link> with your MT5 version
        and the error text. Never send passwords or full account credentials.
      </FAQBox>
      <FAQBox title="Can I run it alongside another trading robot?">
        Confirm compatibility before combining Expert Advisors in the same
        account. They can affect the same positions, account balance and
        available margin. Tell us about your setup without sharing credentials.
      </FAQBox>

      <div className="doc-help">
        <p>Still have a question?</p>
        <Link to="/documentation/contact">Contact Investors Logics <span aria-hidden="true">→</span></Link>
      </div>
    </>
  );
}
