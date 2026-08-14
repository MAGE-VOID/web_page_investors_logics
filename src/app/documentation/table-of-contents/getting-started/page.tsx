import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

export default function GettingStartedPage() {
  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* Bloque 1: Introducción */}
      <div>
        <Title>Getting Started with Investors Logics</Title>
        <Paragraph>
          Welcome to Investors Logics! We specialize in providing advanced
          algorithmic trading strategies via MetaTrader 5 (MT5), ensuring that
          our clients can leverage cutting-edge technology to enhance their
          trading effectiveness. Whether you&apos;re new to trading or seeking
          to refine your strategies, our tools are designed to meet a wide array
          of trading needs.
        </Paragraph>
      </div>

      {/* Bloque 2: Quick Start Guide */}
      <div>
        <Subtitle>Quick Start Guide</Subtitle>
        
        <ol style={{ marginBottom: "1.5rem", paddingInlineStart: "0.5rem" }}>
          <li style={{ marginBottom: "1rem" }}>
            <strong>1. Set Up Your Broker Account</strong>
            <ul style={{ margin: "0.5rem 0 0 1.5rem", listStyleType: "disc" }}>
              <li>
                Choose a broker that meets your trading needs and offers
                MetaTrader&nbsp;5 compatibility.
              </li>
              <li>
                Register and verify your account according to the broker’s
                guidelines to ensure secure and compliant trading.
              </li>
            </ul>
          </li>
          
          <li style={{ marginBottom: "1rem" }}>
            <strong>2. Learn to Use MetaTrader 5</strong>
            <ul style={{ margin: "0.5rem 0 0 1.5rem", listStyleType: "disc" }}>
              <li>
                Familiarize yourself with the MT5 platform to effectively manage
                and execute trades.
              </li>
              <li>
                Explore MetaTrader&nbsp;5 tutorials and resources to fully
                understand its features and capabilities.
              </li>
            </ul>
          </li>

          <li style={{ marginBottom: "1rem" }}>
            <strong>3. Deploy a VPS or Local Server</strong>
            <ul style={{ margin: "0.5rem 0 0 1.5rem", listStyleType: "disc" }}>
              <li>
                Set up a Virtual Private Server (VPS) or a local server to run
                your trading applications with stability and reduced latency.
              </li>
            </ul>
          </li>

          <li style={{ marginBottom: "1rem" }}>
            <strong>4. Select Your Trading Product</strong>
            <ul style={{ margin: "0.5rem 0 0 1.5rem", listStyleType: "disc" }}>
              <li>
                Choose the trading product that best fits your trading style and
                requirements.
              </li>
            </ul>
          </li>

          <li style={{ marginBottom: "1rem" }}>
            <strong>5. Configure Your Trading Environment</strong>
            <ul style={{ margin: "0.5rem 0 0 1.5rem", listStyleType: "disc" }}>
              <li>
                Install and configure your chosen trading indicators or expert
                advisors on MT5.
              </li>
              <li>
                Customize settings to tailor your tools to your specific trading
                strategy.
              </li>
            </ul>
          </li>

          <li style={{ marginBottom: "1rem" }}>
            <strong>6. Practice and Test</strong>
            <ul style={{ margin: "0.5rem 0 0 1.5rem", listStyleType: "disc" }}>
              <li>
                Utilize demo accounts provided by your broker on MT5 to practice
                trading without financial risk.
              </li>
              <li>
                Test your strategies in a controlled environment to understand
                potential performance under various market conditions.
              </li>
            </ul>
          </li>

          <li style={{ marginBottom: "1rem" }}>
            <strong>7. Start Trading</strong>
            <ul style={{ margin: "0.5rem 0 0 1.5rem", listStyleType: "disc" }}>
              <li>
                Begin trading with real funds once you are confident in your
                understanding of the tools.
              </li>
              <li>
                Continuously monitor and adjust your setups as you gain more
                insight and data from active trading.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </ContentLayout>
  );
}
