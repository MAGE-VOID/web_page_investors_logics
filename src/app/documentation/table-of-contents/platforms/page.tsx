import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

export default function TradingPlatformsPage() {
  return (
    <ContentLayout>
      {/* Migas de Pan / Breadcrumb */}
      <PageBreadcrumb />

      {/* Bloque 1: Introducción */}
      <div>
        <Title>Trading Platforms</Title>
        <Paragraph>
          At Investors Logics, we understand the importance of a reliable and
          efficient trading platform. Thats why we offer our clients access to
          Metatrader 5 (MT5), one of the most advanced trading platforms on the
          market. Here’s how you can make the most out of MT5 and enhance your
          trading experience.
        </Paragraph>
      </div>

      {/* Bloque 2: Overview de Metatrader 5 */}
      <div>
        <Subtitle>Metatrader 5 Overview</Subtitle>
        <Paragraph>
          Metatrader 5 is a multi-asset platform that allows trading Forex,
          stocks, and futures. It provides superior tools for comprehensive
          price analysis, algorithmic trading applications (trading robots,
          Expert Advisors), and copy trading.
        </Paragraph>

        <h3
          style={{
            fontSize: "1.2rem",
            marginTop: "1.5rem",
            marginBottom: "0.75rem",
            fontWeight: "bold",
          }}
        >
          Key Features of Metatrader 5
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Comprehensive Trading System:</strong> MT5 features two
            position accounting systems (netting and hedging), market depth, and
            various trading operations.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Advanced Technical Analysis:</strong> Over 80 built-in
            technical indicators and analytical tools, plus unlimited charts and
            21 timeframes.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Algorithmic Trading:</strong> Powerful algorithmic trading
            through the built-in MQL5 development environment, supporting
            trading robots and copy trading signals.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Market Access:</strong> Direct access to financial markets
            via the web platform, desktop, and mobile applications.
          </li>
        </ul>
      </div>

      {/* Bloque 3: Getting Started with Metatrader 5 */}
      <div>
        <h3
          style={{
            fontSize: "1.2rem",
            marginTop: "1.5rem",
            marginBottom: "0.75rem",
            fontWeight: "bold",
          }}
        >
          Getting Started with Metatrader 5
        </h3>

        <ol style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Download and Installation</strong>:
            <ul style={{ marginLeft: "1.5rem", listStyleType: "disc" }}>
              <li>
                Download MT5 from the official Metatrader website or via a
                broker that supports MT5.
              </li>
              <li>Install the platform on your PC, smartphone, or tablet.</li>
            </ul>
          </li>

          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Set Up Your Trading Account</strong>:
            <ul style={{ marginLeft: "1.5rem", listStyleType: "disc" }}>
              <li>
                Connect MT5 to your brokers server using the login credentials
                provided by your broker.
              </li>
              <li>
                Configure your trading environment according to your preferences
                and style.
              </li>
            </ul>
          </li>

          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Explore the Platform</strong>:
            <ul style={{ marginLeft: "1.5rem", listStyleType: "disc" }}>
              <li>
                Familiarize yourself with the user interface and customize the
                layout to suit your trading needs.
              </li>
              <li>
                Explore different order types, charts, indicators, and
                analytical objects to enhance your trading decisions.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      {/* Bloque 4: Trading con Metatrader 5 */}
      <div>
        <Subtitle>Trading with Metatrader 5</Subtitle>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Execute Trades:</strong> Use one-click trading, market
            depth, and multiple order types for fast and precise execution.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Analyze Markets:</strong> Apply technical and fundamental
            analysis to forecast market movements and make informed decisions.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Automate Trading:</strong> Develop, test, and apply Expert
            Advisors (EAs) to automate your strategies.
          </li>
        </ul>
      </div>

      {/* Bloque 5: Soporte y Recursos */}
      <div>
        <Subtitle>Support and Resources</Subtitle>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Comprehensive Help:</strong> Access detailed articles and
            tutorials from within the MT5 platform to navigate advanced features.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Community Support:</strong> Engage with the MQL5 community
            to exchange ideas, strategies, and get answers to your questions.
          </li>
        </ul>
      </div>

      {/* Bloque 6: Why Choose MT5 */}
      <div>
        <Subtitle>Why Choose MT5 for Investors Logics?</Subtitle>
        <Paragraph>
          Metatrader 5’s robust and flexible platform aligns perfectly with the
          sophisticated strategies provided by Investors Logics, enabling both
          new and experienced traders to maximize their trading potential.
          Whether manual or automated, MT5 offers the essential tools for
          market analysis and execution.
        </Paragraph>
        <Paragraph>
          Embrace the advanced capabilities of Metatrader 5 with Investors
          Logics and elevate your trading to new heights.
        </Paragraph>
      </div>
    </ContentLayout>
  );
}
