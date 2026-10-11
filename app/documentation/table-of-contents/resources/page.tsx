
export default function ResourcesPage() {
  return (
    <>
      {/* Migas de pan / Breadcrumb */}

      {/* Bloque 1: Título principal */}
      <div>
        <h2 id="resources-heading" className="doc-guide-title">Platform and support resources</h2>
        <p>
          Use official platform documentation for MetaTrader&nbsp;5 behaviour and
          the Investors Logics help center for public product questions. Treat
          instructions received through unverified channels with caution.
        </p>
      </div>

      {/* Bloque 2: Detailed Documentation Links */}
      <div>
        <h3>Detailed Documentation Links</h3>

        {/* Sección: General Platform Use */}
        <h4
        >
          General Platform Use
        </h4>
        <ul>
          <li>
            <strong>User Interface Overview:</strong> Learn to customize
            Metatrader 5’s interface to fit your trading needs.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/startworking/interface"
              target="_blank"
              rel="noopener noreferrer"
            >
              User Interface
            </a>
          </li>
          <li>
            <strong>Opening an Account:</strong> Guide on setting up your
            trading account.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/startworking/acc_open"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open an Account
            </a>
          </li>
          <li>
            <strong>Connecting to an Account:</strong> Steps to connect and
            authenticate your account.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/startworking/authorization"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect to an Account
            </a>
          </li>
        </ul>

        {/* Sección: Trading Operations */}
        <h4
        >
          Trading Operations
        </h4>
        <ul>
          <li>
            <strong>Placing Orders:</strong> How to execute different order
            types in Metatrader 5.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/trading/performing_deals"
              target="_blank"
              rel="noopener noreferrer"
            >
              Executing Trades
            </a>
          </li>
          <li>
            <strong>Market Analysis Tools:</strong> Utilize Metatrader 5’s tools
            for effective market analysis.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/trading"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trading Operations
            </a>
          </li>
        </ul>

        {/* Sección: Algorithmic Trading */}
        <h4
        >
          Algorithmic Trading
        </h4>
        <ul>
          <li>
            <strong>Using Expert Advisors:</strong> Create, test, and deploy
            Expert Advisors.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/algotrading/trade_robots_indicators"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expert Advisors and Custom Indicators
            </a>
          </li>
        </ul>

        {/* Sección: Additional Resources */}
        <h4
        >
          Additional Resources
        </h4>
        <ul>
          <li>
            <strong>Troubleshooting and FAQs:</strong> Solutions to common
            platform issues.{" "}
            <a
              href="/home/contact#help"
            >
              Investors Logics FAQs
            </a>
          </li>
          <li>
            <strong>Community and Forums:</strong> Join discussions and find
            advice.{" "}
            <a
              href="https://www.mql5.com/en/forum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forums
            </a>
          </li>
        </ul>
      </div>

      {/* Bloque 3: Using These Resources */}
      <div>
        <h3>Using These Resources</h3>
        <ol>
          <li>
            <strong>Identify Your Needs</strong> – Pinpoint specific information
            related to your trading challenges or goals.
          </li>
          <li>
            <strong>Explore Sections</strong> – Directly access the links for
            detailed guides and instructions.
          </li>
          <li>
            <strong>Apply Your Knowledge</strong> – Implement these concepts in
            your Metatrader 5 trading activities.
          </li>
        </ol>
        <p>
          If an external guide conflicts with approved product instructions,
          pause and confirm through the Investors Logics support route.
        </p>
        <p>
          External resources explain the platform; they do not reveal or replace
          Blue Boost Bot’s private strategy and configuration guidance.
        </p>
      </div>
    </>
  );
}
