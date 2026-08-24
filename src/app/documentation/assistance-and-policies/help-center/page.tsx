
import FAQBox from "@/app/documentation/components/Content/ui/FAQBox";

export default function HelpCenterPage() {
  return (
    <>

      {/* Bloque 1: Título principal */}
      <div>
        <h1>Help center</h1>
        <p>
          These answers cover product scope, platform operation and safety at a
          public level. Approved installation details and private settings are
          provided only through authorised product channels.
        </p>
      </div>

      {/* Bloque 2: Frequently Asked Questions */}
      <div>
        <h2>Frequently Asked Questions</h2>

        <FAQBox title="What is Blue Boost Bot?">
          Blue Boost Bot is a rules-based Expert Advisor for MetaTrader&nbsp;5.
          It automates a defined Forex trading process and supports internal
          testing and operational review.
        </FAQBox>

        <FAQBox title="Does Blue Boost Bot guarantee returns?">
          No. Automation does not remove market risk, broker dependency,
          slippage, outages or configuration risk. Past tests and results do not
          guarantee future performance.
        </FAQBox>

        <FAQBox title="Which account or settings should I use?">
          Use the approved instructions supplied with the product. Public pages
          do not publish account parameters, timeframes, instruments, risk
          values or strategy settings.
        </FAQBox>

        <FAQBox title="Can it run with other Expert Advisors?">
          Multiple automated systems can interact through the same account and
          platform. Confirm compatibility through approved support before
          combining them; do not infer internal identifiers or settings.
        </FAQBox>

        <FAQBox title="Is a VPS required?">
          A VPS is one way to keep MetaTrader&nbsp;5 running independently of a
          home computer. Whether it is appropriate depends on continuity,
          security, broker connectivity and your ability to maintain it.
        </FAQBox>

        <FAQBox title="Why can behaviour differ between environments?">
          Broker data, spreads, commissions, swaps, symbol naming, latency,
          execution and platform configuration can differ. Record the full test
          environment before comparing outcomes.
        </FAQBox>

        <FAQBox title="Why do I get different results in the backtest?">
          1. The quality of market data provided by your broker (varies from
          broker to broker).
          <br />
          2. Each brokers swaps and spreads can have an impact on the results
          of the backtest.
        </FAQBox>

        <FAQBox title="Is backtesting the same as live trading?">
          No. A backtest is a simulation built from historical data and a chosen
          configuration. Live operation adds changing liquidity, latency,
          slippage, outages and other conditions a test may not reproduce.
        </FAQBox>

        <FAQBox title="How do I do a backtesting test?">
          1. If you want to learn more about how to use backtesting, you can use
          the Metatrader 5 information{" "}
          <a
            href="https://youtu.be/ouEh29q3QJ4?si=aZs-SlEwfOZyHhOm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>{" "}
          or{" "}
          <a
            href="https://www.metatrader5.com/en/automated-trading/strategy-tester"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>
          .
          <br />
          Follow the official MetaTrader&nbsp;5 Strategy Tester documentation and
          approved product guidance. Do not treat one test as a performance forecast.
        </FAQBox>

        <FAQBox title="Is every broker and account compatible?">
          Compatibility is not universal. Confirm MetaTrader&nbsp;5 support,
          account conditions, instrument availability and broker-specific symbol
          naming before evaluation.
        </FAQBox>

        <FAQBox title="What monthly return should I expect?">
          No monthly return can be promised. Results depend on market and broker
          conditions, configuration, costs and risk; loss is possible.
        </FAQBox>

        <FAQBox title="Should I change operation around news events?">
          Use only approved product instructions. Public documentation does not
          disclose the strategy’s event handling or recommend operational changes.
        </FAQBox>

        <FAQBox title="Where should a first-time user begin?">
          Read the introduction, MetaTrader&nbsp;5 page, evaluation guide and
          risk warning. Contact support if the approved instructions are unclear.
        </FAQBox>

        <FAQBox title="Why use automation at all?">
          Automation can apply a defined process consistently and create a more
          reviewable operating record. It is a tool—not evidence that a system
          will outperform a person or avoid loss.
        </FAQBox>

        <FAQBox title="How are product updates communicated?">
          Confirm updates through an official Investors Logics channel. Do not
          install files sent by unverified people or links.
        </FAQBox>
      </div>

      {/* Bloque 3: Questions about the Forex market */}
      <div>
        <h2>Questions about the Forex market</h2>

        <FAQBox title="When does the Forex market open and close?">
          Retail Forex availability generally follows the global business week,
          but exact trading hours, holidays and symbol sessions depend on the broker.
        </FAQBox>

        <FAQBox title="What makes exchange rates move?">
          A variety of fundamental and technical aspects can cause an exchange
          rate to move. The most notable influences include interest rates,
          inflation and political stability. Sometimes, governments will buy or
          sell a currency in an effort to influence its value with a view to
          having a broader effect on the country economy. This is known as
          &quot;central bank intervention&quot; and can have a significant
          impact on the value of a currency. Given the size and diversity of
          participants, no one single factor can influence the Forex market for
          any significant length of time.
        </FAQBox>

        <FAQBox title="What costs can affect Forex trading?">
          Spreads, commissions, swaps, currency conversion, data quality and
          slippage can affect outcomes. Review the broker’s current schedule and
          account terms directly.
        </FAQBox>
      </div>

      {/* Bloque 4: Questions about Trading Forex CFDs Online */}
      <div>
        <h2>Questions about Trading Forex CFDs Online</h2>

        <FAQBox title="What does 'spread' mean?">
          In Forex, &apos;spread&apos; is the difference between the bid and the
          ask price.
        </FAQBox>

        <FAQBox title="What happens if I have no free margin left in my account?">
          If you have no free margin, your positions will be stopped out. Under
          certain circumstances, your account balance can also become negative
          should the losses on the positions stopped out exceed your account
          balance.
        </FAQBox>

        <FAQBox title="Can I log in to my account simultaneously on separate computers">
          Yes, it is possible to log in to your account with the same username
          and password at the same time on different computers.
        </FAQBox>
      </div>
    </>
  );
}
