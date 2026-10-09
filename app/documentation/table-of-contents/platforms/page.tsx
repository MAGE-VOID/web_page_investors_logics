
export default function TradingPlatformsPage() {
  return (
    <>
      {/* Migas de Pan / Breadcrumb */}

      {/* Bloque 1: Introducción */}
      <div>
        <h2 id="mt5-heading" className="doc-guide-title">MetaTrader 5</h2>
        <p>
          Blue Boost Bot runs inside MetaTrader&nbsp;5 (MT5). MT5 is the
          environment that connects to your broker, displays market data and
          hosts the compiled Expert Advisor.
        </p>
      </div>

      {/* Bloque 2: Overview de Metatrader 5 */}
      <div>
        <h3>What MT5 is responsible for</h3>
        <p>
          MetaTrader&nbsp;5 provides charts, account connectivity, order
          management, logs and support for applications written in MQL5. The
          Expert Advisor depends on that environment being configured and connected.
        </p>

        <h4
        >
          Areas to understand
        </h4>
        <ul>
          <li>
          <strong>Account connection:</strong> MT5 uses broker-issued credentials
            and connects to the broker’s server.
          </li>
          <li>
          <strong>Automated trading controls:</strong> Platform permissions
            determine whether Expert Advisors can operate.
          </li>
          <li>
          <strong>Logs and status:</strong> Journal and Expert logs help you
            identify permission, connection and runtime problems.
          </li>
          <li>
          <strong>Strategy Tester:</strong> MT5 provides a controlled environment
            for historical testing. A test is not a promise of live results.
          </li>
        </ul>
      </div>

      {/* Bloque 3: Getting Started with Metatrader 5 */}
      <div>
        <h4
        >
          Preparing MetaTrader&nbsp;5
        </h4>

        <ol>
          <li>
          <strong>Install MT5</strong>:
            <ul>
              <li>
                Download MT5 from the official MetaTrader website or through a
                broker that supports MT5.
              </li>
              <li>Use the desktop environment required for Expert Advisor operation.</li>
            </ul>
          </li>

          <li>
          <strong>Connect your account</strong>:
            <ul>
              <li>
                Connect MT5 to your broker’s server using the credentials
                provided by your broker.
              </li>
              <li>
                Confirm the account, connection and symbol list before adding software.
              </li>
            </ul>
          </li>

          <li>
          <strong>Learn the basics</strong>:
            <ul>
              <li>
                Learn the Navigator, Market Watch, Toolbox, logs and automated
                trading permissions.
              </li>
              <li>
                Test basic platform operation before evaluating the Expert Advisor.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Bloque 4: Trading con Metatrader 5 */}
      <div>
        <h3>Your responsibilities</h3>
        <ul>
          <li>
            <strong>Monitor connectivity:</strong> A running interface does not
            guarantee that the account or broker server is connected.
          </li>
          <li>
            <strong>Review logs:</strong> Read platform messages when expected
            behaviour does not occur; do not change settings blindly.
          </li>
          <li>
            <strong>Protect access:</strong> Do not share account credentials,
            unrestricted remote access or private product files.
          </li>
        </ul>
      </div>

      {/* Bloque 5: Soporte y Recursos */}
      <div>
        <h3>Useful references</h3>
        <ul>
          <li>
            <strong>Official MT5 help:</strong> Use MetaTrader’s own articles and
            tutorials to learn platform features.
          </li>
          <li>
            <strong>Product support:</strong> Use the Investors Logics support
            route for questions about the public product scope.
          </li>
        </ul>
      </div>

      {/* Bloque 6: Why Choose MT5 */}
      <div>
        <h3>Why MT5 matters</h3>
        <p>
          MT5 is not a decorative integration; it is the product’s operating
          environment. Platform version, broker connection, permissions and
          runtime continuity all influence whether the Expert Advisor can work as intended.
        </p>
        <p>
          Always follow approved installation instructions and verify the
          environment in a controlled account before considering live use.
        </p>
      </div>
    </>
  );
}
