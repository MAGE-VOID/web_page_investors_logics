import FAQBox from "@/app/documentation/components/Content/ui/FAQBox";

export default function IntroductionPage() {
  return (
    <>
      <h1>Introduction to Blue Boost Bot</h1>
      <p className="doc-lede">
        Blue Boost Bot is a compiled Expert Advisor for MetaTrader&nbsp;5. It is
        offered as time-limited access to an <code>.ex5</code> file for users who
        want to evaluate an automated Forex workflow in their own environment.
      </p>

      <h2>What you are getting</h2>
      <p>
        The product runs inside MetaTrader 5 and uses the platform’s market data,
        account connection and Expert Advisor controls. Your broker, account,
        symbols, costs and platform state all affect the environment.
      </p>

      <h2>What this guide covers</h2>
      <p>
        These pages explain the product scope, MT5 requirements, broker checks,
        infrastructure, security, testing principles and risk. They are here to
        help you decide whether the setup fits before requesting access.
      </p>

      <h2>What remains private</h2>
      <p>
        Public documentation does not publish formulas, parameters, execution
        rules, optimization material or private results. Do not infer settings
        from a public page or an unverified message.
      </p>

      <h2>What automation does not change</h2>
      <p>
        Automation can make a defined process more repeatable. It cannot
        guarantee execution, profitability or protection from changing market
        conditions. You remain responsible for broker selection, account setup,
        monitoring and risk decisions.
      </p>

      <h2>Common questions</h2>
      <FAQBox title="Which platform does Blue Boost Bot use?">
        Blue Boost Bot runs as an Expert Advisor inside MetaTrader&nbsp;5. Review
        the platform page before preparing an evaluation environment.
      </FAQBox>
      <FAQBox title="Does the product use artificial intelligence?">
        The inspected product is based on programmed, deterministic MQL5 logic.
        It should not be described as AI or machine learning without a separate,
        verifiable component.
      </FAQBox>
      <FAQBox title="Does automation remove trading risk?">
        No. Forex trading can produce partial or total loss. Broker conditions,
        connectivity, configuration and market behaviour can all affect results.
      </FAQBox>
    </>
  );
}
