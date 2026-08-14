import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

// Importamos nuestro FAQBox
import FAQBox from "@/app/documentation/components/Content/ui/FAQBox";

export default function HelpCenterPage() {
  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* Bloque 1: Título principal */}
      <div>
        <Title>Help Center</Title>
        <Paragraph>
          The Investors Logics FAQ is a collection of useful questions and
          answers about the project. If you have a question that isnt answered
          here, please contact us.
        </Paragraph>
      </div>

      {/* Bloque 2: Frequently Asked Questions */}
      <div>
        <Subtitle>Frequently Asked Questions</Subtitle>

        <FAQBox title="Does Investors Logics offer customized trading solutions?">
          Yes, our platform is built to accommodate customizations. We
          understand that each traders needs are unique, and our technology is
          designed to adapt to individual preferences and market conditions. For
          specific inquiries, please contact our support.
        </FAQBox>

        <FAQBox title="What type of account should I use?">
          1. Low spread (RAW, ECN) You can choose any broker you trust. The less
          the spread, the better.
          <br />
          2. Hedging account.
          <br />
          3. It has at least 1:100 leverage.
        </FAQBox>

        <FAQBox title="How to start the Expert Advisor?">
          Run the Expert Advisor only on a chart of your choice and only on the
          M5 time frame. Settings that affect automated trading are available in
          the Expert Advisors tab of the platforms options. And make sure the{" "}
          <strong>&quot;AutoTrading&quot;</strong> button is enabled.
        </FAQBox>

        <FAQBox title="Can I run alongside other experts?">
          Yes, but make sure all your Expert Advisors have different magic
          numbers.
        </FAQBox>

        <FAQBox title="Which VPS provider do you recommend?">
          You can use the VPS you like best, but the less latency it has, the
          better. I recommend latencies less than 200ms.
        </FAQBox>

        <FAQBox title="Are there limitations to using the expert?">
          1. Expert Advisors will not work on accounts with overnight position
          transfers (closing and reopening by the broker). ALL SWAP ACCOUNTS ARE
          FINE.
          <br />
          2. Expert Advisor must run on a VPS or Local Server continuously.
        </FAQBox>

        <FAQBox title="Why do I get different results in the backtest?">
          1. The quality of market data provided by your broker (varies from
          broker to broker).
          <br />
          2. Each brokers swaps and spreads can have an impact on the results
          of the backtest.
        </FAQBox>

        <FAQBox title="Is backtesting the same as live trading?">
          1. If you have high-quality data provided by the broker, yes, it is
          exactly the same as actual trading.
          <br />
          2. Please make sure you have all the bars and ticks in the selected
          time, you can download them in &quot;Symbols&quot; (<em>Ctrl + U</em>
          ).
        </FAQBox>

        <FAQBox title="How do I do a backtesting test?">
          1. If you want to learn more about how to use backtesting, you can use
          the Metatrader 5 information{" "}
          <a
            href="https://youtu.be/ouEh29q3QJ4?si=aZs-SlEwfOZyHhOm"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00bfff", textDecoration: "underline" }}
          >
            Here
          </a>{" "}
          or{" "}
          <a
            href="https://www.metatrader5.com/en/automated-trading/strategy-tester"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00bfff", textDecoration: "underline" }}
          >
            Here
          </a>
          .
          <br />
          2. Select a delay according to the type of stress you want to apply to
          the bot and the appropriate leverage for your broker.
        </FAQBox>

        <FAQBox title="What if my account is in a currency other than USD?">
          No matter what currency your account is in, The Expert Advisor handles
          it automatically.
        </FAQBox>

        <FAQBox title="How much do you earn per month?">
          The monthly profit will always depend on the risk that the trader
          wants to use.
        </FAQBox>

        <FAQBox title="Do I need to stop EA's during major news events?">
          No, there is no need to stop Expert Advisors in these situations, a
          good expert advisor handles these scenarios internally.
        </FAQBox>

        <FAQBox title="I use the EA for the first time and I don't know what to do. Can you guide me?">
          Of course! You can either take a look at detailed step-by-step text
          guides on this website or simply write to me and ask for help.
        </FAQBox>

        <FAQBox title="Is it necessary to use a VPS?">
          It is not necessary to use a VPS, you can run the EA on your home PC.
          However, most people wont be comfortable running the PC 24/7, which
          is why most EA buyers use a VPS service to do that.
        </FAQBox>

        <FAQBox title="Why should i let a robot trade for me?">
          Robots allow the automation of analytical and trading processes. They
          can open and close trades based on certain criteria or calculations
          that it has been programmed to do. They are capable of opening and
          closing orders much faster and much more efficiently than a human
          ever possibly could, and they can do this 24 hours a day. Robots never
          sleep, never get tired and dont have human emotions, which makes for
          an ideal trading tool. A human will simply NEVER trade better than a
          robot.
        </FAQBox>

        <FAQBox title="Is it necessary to use a VPS?">
          It is not necessary to use a VPS, you can run the EA on your home PC.
          However, most people wont be comfortable running the PC 24/7, which
          is why most EA buyers use a VPS service to do that.
        </FAQBox>

        <FAQBox title="What Timeframe should I use?">
          It does not matter the Timeframe in which you put the expert advisor,
          but we recommend M5.
        </FAQBox>

        <FAQBox title="Drawdown in the backtest is low, so can I use a higher risk?">
          It is up to you but I dont recommend more than 2%.
        </FAQBox>

        <FAQBox title="How often do you plan updates?">
          1. The Expert Advisors or indicators that are launched are complete
          products. However, we constantly monitor the market, as well as your
          comments, looking for improvements or any specific bugs and, if
          necessary, we update them.
        </FAQBox>
      </div>

      {/* Bloque 3: Questions about the Forex market */}
      <div>
        <Subtitle>Questions about the Forex market</Subtitle>

        <FAQBox title="When does the Forex market open and close?">
          The Forex market is a 24-hour market. Forex trading commences in
          Wellington, New Zealand and moves around the globe as business days
          begin in each financial centre. The major global financial centres
          where most Forex trading takes place are Tokyo, London and New York.
          The Forex market opens on Sunday at 10:00pm (GMT) and closes on Friday
          at 10:00pm (GMT).
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

        <FAQBox title="Is trading the Forex market expensive?">
          No, trading Forex has never been cheaper or more accessible. Traders
          can now trade on institutional grade pricing with leverage of up to
          2000:1. It is, however, important to remember that although trading on
          leverage can maximise profits, it can also amplify losses.
        </FAQBox>
      </div>

      {/* Bloque 4: Questions about Trading Forex CFDs Online */}
      <div>
        <Subtitle>Questions about Trading Forex CFDs Online</Subtitle>

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
    </ContentLayout>
  );
}
