import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

// Ruta: src/app/documentation/table-of-contents/what-is-forex/page.tsx
export default function WhatIsForexPage() {
  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* Bloque 1: Título principal */}
      <div>
        <Title>What is Forex?</Title>
        <Paragraph>
          Forex, or foreign exchange, is the global financial market where currencies are
          traded. It is the largest financial market in the world, open 24 hours a day, five
          weekdays, providing ample opportunities for traders.
        </Paragraph>
      </div>

      {/* Bloque 2: Key Points */}
      <div>
        <Subtitle>Key Points</Subtitle>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Global Reach:</strong> Forex is a critical market for international trade and
            investment, connecting major and emerging markets.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>High Liquidity:</strong> The forex markets daily volume exceeds $6 trillion,
            ensuring high liquidity. This means traders can quickly buy and sell currencies
            without large price fluctuations.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>No Central Location:</strong> Forex is an electronic network of banks,
            institutions, and individual traders, not restricted to a physical trading location.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Diverse Participants:</strong> The market includes a wide range of
            participants, from central banks and financial institutions to private traders and
            small businesses, each using forex for various purposes like hedging, speculating,
            or converting currencies.
          </li>
        </ul>
      </div>

      {/* Bloque 3: Benefits of Trading Forex */}
      <div>
        <Subtitle>Benefits of Trading Forex</Subtitle>
        <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Accessibility:</strong> Minimal capital is required to start, making forex
            accessible to a broad audience.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Leverage:</strong> Traders can control large positions with relatively small
            amounts of capital, potentially increasing returns on investment.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Market Opportunities:</strong> Forex offers continuous opportunities due to
            its market size and volatility, ideal for both long and short trading strategies.
          </li>
        </ul>
      </div>

      {/* Bloque 4: Considerations */}
      <div>
        <Subtitle>Considerations</Subtitle>
        <Paragraph>
          Forex trading carries risks, necessitating a good grasp of market fundamentals and
          effective risk management strategies. Its advisable to start with a demo account to
          practice trading without financial risk.
        </Paragraph>
      </div>
    </ContentLayout>
  );
}
