
// src/app/documentation/table-of-contents/algorithmic-trading/page.tsx
export default function AlgorithmicTradingPage() {
  return (
    <>

      {/* Bloque 1: Título principal */}
      <div>
        <h2 id="automation-heading" className="doc-guide-title">What automation does</h2>
        <p>
          Algorithmic trading uses programmed instructions to evaluate market
          information and manage actions in a platform. The useful question is
          not whether software is automatic, but what the environment can support.
        </p>
      </div>

      {/* Bloque 2: Overview */}
      <div>
        <h3>What a bot can provide</h3>
        <ul>
          <li>
            <strong>Consistency:</strong> A configured process can be applied
            without a discretionary change at every step.
          </li>
          <li>
            <strong>Availability:</strong> A maintained environment can continue
            evaluating conditions while MT5 is running.
          </li>
          <li>
            <strong>Traceability:</strong> Logs and testing tools can support a
            structured review of what happened in the platform.
          </li>
        </ul>
      </div>

      {/* Bloque 3: Advantages */}
      <div>
        <h3>What a bot cannot provide</h3>
        <ul>
          <li>
            <strong>Guaranteed execution:</strong> Broker conditions, liquidity,
            connectivity and platform state still affect orders.
          </li>
          <li>
            <strong>Guaranteed performance:</strong> Historical tests describe a
            past data set and configuration; they do not forecast returns.
          </li>
          <li>
            <strong>Automatic suitability:</strong> Software cannot decide whether
            leveraged trading fits your situation or tolerance for loss.
          </li>
        </ul>
      </div>

      {/* Bloque 4: Considerations */}
      <div>
        <h3>Before you evaluate</h3>
        <p>
          Operation still requires platform knowledge, controlled configuration,
          monitoring and an outage plan. Testing should account for data quality,
          costs and the gap between simulated and live conditions.
        </p>
      </div>
    </>
  );
}
