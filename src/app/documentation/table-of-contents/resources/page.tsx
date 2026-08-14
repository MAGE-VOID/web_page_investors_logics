import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

export default function ResourcesPage() {
  // Estilo en línea para enlaces: color celeste (#00bfff) y subrayado
  const linkStyle = {
    color: "#00bfff",
    textDecoration: "underline",
  };

  return (
    <ContentLayout>
      {/* Migas de pan / Breadcrumb */}
      <PageBreadcrumb />

      {/* Bloque 1: Título principal */}
      <div>
        <Title>Support Resources at Investors Logics</Title>
        <Paragraph>
          Welcome to the Support Resources page. Below, you`&apos;`ll find direct links
          to Metatrader 5 documentation, helping you navigate and utilize the
          trading platform effectively for all your trading needs.
        </Paragraph>
      </div>

      {/* Bloque 2: Detailed Documentation Links */}
      <div>
        <Subtitle>Detailed Documentation Links</Subtitle>

        {/* Sección: General Platform Use */}
        <h3
          style={{
            fontSize: "1.2rem",
            marginTop: "1.5rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          General Platform Use
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>User Interface Overview:</strong> Learn to customize
            Metatrader 5’s interface to fit your trading needs.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/startworking/interface"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              User Interface
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Opening an Account:</strong> Guide on setting up your
            trading account.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/startworking/acc_open"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Open an Account
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Connecting to an Account:</strong> Steps to connect and
            authenticate your account.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/startworking/authorization"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Connect to an Account
            </a>
          </li>
        </ul>

        {/* Sección: Trading Operations */}
        <h3
          style={{
            fontSize: "1.2rem",
            marginTop: "1.5rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Trading Operations
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Placing Orders:</strong> How to execute different order
            types in Metatrader 5.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/trading/performing_deals"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Executing Trades
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Market Analysis Tools:</strong> Utilize Metatrader 5’s tools
            for effective market analysis.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/trading"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Trading Operations
            </a>
          </li>
        </ul>

        {/* Sección: Algorithmic Trading */}
        <h3
          style={{
            fontSize: "1.2rem",
            marginTop: "1.5rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Algorithmic Trading
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Using Expert Advisors:</strong> Create, test, and deploy
            Expert Advisors.{" "}
            <a
              href="https://www.metatrader5.com/en/terminal/help/algotrading/trade_robots_indicators"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Expert Advisors and Custom Indicators
            </a>
          </li>
        </ul>

        {/* Sección: Additional Resources */}
        <h3
          style={{
            fontSize: "1.2rem",
            marginTop: "1.5rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Additional Resources
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Troubleshooting and FAQs:</strong> Solutions to common
            platform issues.{" "}
            <a
              href="/documentation/assistance-and-policies/help-center"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Investors Logics FAQs
            </a>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Community and Forums:</strong> Join discussions and find
            advice.{" "}
            <a
              href="https://www.mql5.com/en/forum"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Forums
            </a>
          </li>
        </ul>
      </div>

      {/* Bloque 3: Using These Resources */}
      <div>
        <Subtitle>Using These Resources</Subtitle>
        <ol style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Identify Your Needs</strong> – Pinpoint specific information
            related to your trading challenges or goals.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Explore Sections</strong> – Directly access the links for
            detailed guides and instructions.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Apply Your Knowledge</strong> – Implement these concepts in
            your Metatrader 5 trading activities.
          </li>
        </ol>
        <Paragraph>
          For additional support or inquiries, do not hesitate to contact our
          support team.
        </Paragraph>
        <Paragraph>
          Thank you for choosing Investors Logics as your trading partner.
        </Paragraph>
      </div>
    </ContentLayout>
  );
}
