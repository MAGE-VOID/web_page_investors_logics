import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

// src/app/documentation/table-of-contents/algorithmic-trading/page.tsx
export default function AlgorithmicTradingPage() {
  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* Bloque 1: Título principal */}
      <div>
        <Title>Algorithmic Trading</Title>
        <Paragraph>
          Algorithmic trading uses computer algorithms to automate trading
          decisions, enabling high-speed transaction execution based on complex
          mathematical models and market data.
        </Paragraph>
      </div>

      {/* Bloque 2: Overview */}
      <div>
        <Subtitle>Overview</Subtitle>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Speed:</strong> Executes orders faster than humanly possible.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Accuracy:</strong> Ensures trades are timed and priced optimally
            to minimize slippage.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Diverse Strategies:</strong> Supports a range of strategies like
            arbitrage and trend following without manual intervention.
          </li>
        </ul>
      </div>

      {/* Bloque 3: Advantages */}
      <div>
        <Subtitle>Advantages</Subtitle>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Consistency:</strong> Removes emotional decision-making from trading activities.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Backtesting Capability:</strong> Allows traders to test strategies
            using historical data to forecast potential returns.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>High Scalability:</strong> Manages multiple accounts or strategies
            simultaneously, maintaining consistency across operations.
          </li>
        </ul>
      </div>

      {/* Bloque 4: Considerations */}
      <div>
        <Subtitle>Considerations</Subtitle>
        <Paragraph>
          Success in algorithmic trading requires a solid understanding of trading
          fundamentals and programming skills. Risks include strategy overfitting,
          where models perform well on historical data but poorly in new markets.
        </Paragraph>
      </div>
    </ContentLayout>
  );
}
