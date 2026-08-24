
// Ruta: src/app/documentation/table-of-contents/what-is-forex/page.tsx
export default function WhatIsForexPage() {
  return (
    <>

      {/* Bloque 1: Título principal */}
      <div>
        <h1>Forex and leverage</h1>
        <p>
          Forex, or foreign exchange, is the market where one currency is
          exchanged for another. Prices are quoted in pairs and change as market
          conditions change.
        </p>
      </div>

      {/* Bloque 2: Key Points */}
      <div>
        <h2>What matters for an evaluation</h2>
        <ul>
          <li>
            <strong>Many participants:</strong> Banks, businesses, institutions
            and individuals all contribute to currency-market activity.
          </li>
          <li>
            <strong>Changing liquidity:</strong> Conditions differ by currency
            pair, session, news event and broker. Execution can deteriorate.
          </li>
          <li>
            <strong>No single exchange:</strong> Forex trading takes place through
            an electronic network rather than one central exchange.
          </li>
          <li>
            <strong>Broker-dependent access:</strong> Your broker’s pricing,
            margin rules and execution conditions affect the experience.
          </li>
        </ul>
      </div>

      {/* Bloque 3: Benefits of Trading Forex */}
      <div>
        <h2>What leverage changes</h2>
        <ul>
          <li>
            <strong>Capital exposure:</strong> Margin can create exposure larger
            than the cash committed to a position.
          </li>
          <li>
            <strong>Amplified outcomes:</strong> Leverage magnifies losses as well
            as gains and can change account equity quickly.
          </li>
          <li>
            <strong>Operational responsibility:</strong> Automation does not
            remove margin calls, slippage, gaps or technology failures.
          </li>
        </ul>
      </div>

      {/* Bloque 4: Considerations */}
      <div>
        <h2>Keep the boundary clear</h2>
        <p>
          Learn the platform and broker rules before considering live trading.
          A demo or controlled test environment can help with software and
          workflow familiarisation, but it cannot reproduce every live condition.
        </p>
      </div>
    </>
  );
}
