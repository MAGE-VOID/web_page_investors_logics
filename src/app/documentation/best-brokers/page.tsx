import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

export default function BrokersPage() {
  // Estilo para los enlaces (color celeste y subrayado).
  const linkStyle = {
    color: "#00bfff",
    textDecoration: "underline",
  };

  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* BLOQUE 1: Título Principal */}
      <div>
        <Title>Brokers</Title>
        <Paragraph>
          Choosing the right broker is crucial for successful trading. This
          guide helps you understand key factors to consider when selecting a
          broker that aligns with your trading strategy and goals.
        </Paragraph>
      </div>

      {/* BLOQUE 2: Key Criteria for Choosing a Broker */}
      <div>
        <Subtitle>Key Criteria for Choosing a Broker</Subtitle>
        <Paragraph>
          When selecting a broker, consider these essential aspects to ensure
          they meet your investment needs and standards.
        </Paragraph>

        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Recommendation:</strong> Look for brokers that offer a
            platform with Metatrader 5, which are known for stability and
            comprehensive tools.
          </li>
        </ul>

        {/* Regulation and Reliability */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Regulation and Reliability
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Importance:</strong> Ensures the broker is compliant with
            financial laws and regulations, providing a layer of security.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Check:</strong> Verify the brokers registration with
            regulatory bodies like the FCA, CySEC, or ASIC.
          </li>
        </ul>

        {/* Account Types */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Account Types
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Importance:</strong> Different account types offer varying
            spreads, leverage, and commission structures to suit different
            trading styles.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Tip:</strong> Compare account features such as minimum
            deposits, spread types (fixed vs. variable), and leverage options.
          </li>
        </ul>

        {/* Fees and Commissions */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Fees and Commissions
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Importance:</strong> Understanding the cost structure is
            crucial as fees can impact your profitability.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Advice:</strong> Evaluate the brokers fee transparency,
            looking for any hidden charges in spreads, commissions, or overnight
            financing.
          </li>
        </ul>

        {/* Customer Support */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Customer Support
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Importance:</strong> Robust support is essential, especially
            for new traders who might encounter issues or have questions.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Expectation:</strong> Ensure the broker offers 24/7 customer
            support via multiple channels such as live chat, email, and phone.
          </li>
        </ul>

        {/* Execution Speed and Reliability */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Execution Speed and Reliability
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Importance:</strong> Fast and reliable trade execution can
            significantly impact the effectiveness of your trading strategy.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Suggestion:</strong> Test the brokers execution speeds and
            look for any reviews about slippage or requotes.
          </li>
        </ul>

        {/* Educational and Analytical Resources */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Educational and Analytical Resources
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Importance:</strong> Resources like tutorials, webinars, and
            analytical tools can enhance your trading skills.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Benefit:</strong> Choose brokers that provide comprehensive
            educational content and advanced analytical tools.
          </li>
        </ul>
      </div>

      {/* BLOQUE 3: RECOMMENDED BROKERS */}
      <div>
        <Subtitle>Recommended Brokers</Subtitle>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <a
              href="https://www.icmarkets.com/global/en/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              IC Markets
            </a>
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <a
              href="https://fbs.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              FBS
            </a>
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <a
              href="https://fxview.com/global"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              FXView
            </a>
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <a
              href="https://www.fxpro.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              FXPro
            </a>
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <a
              href="https://pepperstone.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Pepperstone
            </a>
          </li>
        </ul>
      </div>

      {/* BLOQUE 4: EVALUATING YOUR NEEDS */}
      <div>
        <Paragraph>
          For more detailed information on each recommended broker or to explore
          additional options suited to your trading requirements, please contact
          their support team for personalized advice.
        </Paragraph>
        <Paragraph>
          We are here to help you make informed decisions that maximize your
          trading potential.
        </Paragraph>
      </div>
    </ContentLayout>
  );
}
