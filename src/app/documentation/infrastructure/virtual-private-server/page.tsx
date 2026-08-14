import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

// Asegúrate de ajustar la ruta a FAQBox según tu carpeta real de componentes.
// Por ejemplo, si está en ui, la ruta puede ser algo como:
// "@/app/documentation/components/Content/ui/FAQBox"
import FAQBox from "@/app/documentation/components/Content/ui/FAQBox";

export default function VirtualPrivateServerPage() {
  // Estilo para enlaces color celeste y subrayados.
  const linkStyle = {
    color: "#00bfff",
    textDecoration: "underline",
  };

  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* Bloque 1: Título Principal */}
      <div>
        <Title>Virtual Private Server</Title>
        <Paragraph>
          Here, you will find all the necessary information on how a VPS can
          enhance your trading activities, especially when using automated
          trading systems like Expert Advisors (EAs).
        </Paragraph>
      </div>

      {/* Bloque 2: Why Use a VPS in Trading? */}
      <div>
        <Subtitle>Why Use a VPS in Trading?</Subtitle>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Consistent Connectivity
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            A VPS provides a stable and reliable internet connection for
            trading.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            Essential for maintaining 24/7 trading operations without
            interruptions due to power outages or internet issues at the local
            level.
          </li>
        </ul>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Reduced Latency
        </h3>
        <Paragraph>
          VPS servers are often located in the same data centers as trading
          servers, dramatically reducing the delay in trade execution. This is
          crucial for high-frequency trading where speed of execution is
          paramount.
        </Paragraph>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Security
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            VPS services offer enhanced security measures to protect your
            trading data.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            This includes backups and strong protection against hacking and
            malware.
          </li>
        </ul>
      </div>

      {/* Bloque 3: Choosing a VPS Provider */}
      <div>
        <Subtitle>Choosing a VPS Provider</Subtitle>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Key Considerations
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Reliability</strong>: Look for providers with an uptime
            guarantee of 99.9% or higher.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Server Locations</strong>: Choose a server that is
            geographically close to your broker’s server to minimize latency.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Support</strong>: Ensure 24/7 customer support is available
            to handle any technical issues.
          </li>
        </ul>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Recommended VPS Providers
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <a
              href="https://contabo.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Contabo
            </a>
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <a
              href="https://fxvm.net/en/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Fxvm
            </a>
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <a
              href="https://ultrafx.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              UltraFX
            </a>
          </li>
        </ul>
      </div>

      {/* Bloque 4: Setting Up a VPS for Trading */}
      <div>
        <Subtitle>Setting Up a VPS for Trading</Subtitle>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Installation
        </h3>
        <Paragraph>
          Instructions on how to set up your trading platform, such as
          Metatrader 5, on the VPS.
        </Paragraph>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Configuration
        </h3>
        <Paragraph>
          Steps to configure your trading environment, including installing EAs
          and setting up any necessary software.
        </Paragraph>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Maintenance
        </h3>
        <Paragraph>
          Regular updates and checks to ensure the VPS is running smoothly and
          securely.
        </Paragraph>
      </div>

      {/* Bloque 5: Common FAQs */}
      <div>
        <Subtitle>Common FAQs</Subtitle>

        <FAQBox title="How do I connect to my VPS?">
          <ul>
            <li style={{ marginBottom: "0.5rem" }}>
              To connect to your server you will need the username and IP address
              of your server.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Once you have the username and IP address of your server you will
              be ready to start the connection to your server. The method of
              connection varies depending on the Operating System (OS) of your
              local computer and the OS of your server.
            </li>
          </ul>
        </FAQBox>

        <FAQBox title="What should I do if my VPS goes down?">
          <ul>
            <li style={{ marginBottom: "0.5rem" }}>
              Contact your VPS provider immediately to resolve the issue.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              Have a contingency plan for trading if the VPS is unavailable for
              an extended period.
            </li>
          </ul>
        </FAQBox>

        <FAQBox title="Can I access my VPS from any location?">
          <ul>
            <li>
              Yes, a VPS can be accessed from any device with an internet
              connection, allowing you to manage your trading remotely.
            </li>
          </ul>
        </FAQBox>

        <FAQBox title="How often should I backup my VPS?">
          <ul>
            <li>
              Regular backups are recommended, ideally weekly, to protect your
              trading setups and data.
            </li>
          </ul>
        </FAQBox>
      </div>
      
      <div style={{ marginBottom: "1.5rem" }} />
      
      {/* Bloque Final: Conclusión */}
      <Paragraph>
        Utilizing a VPS can significantly improve your trading experience by
        providing stability, speed, and security. For further assistance or more
        detailed guidance, please refer to our support resources or contact our
        customer service team.
      </Paragraph>
    </ContentLayout>
  );
}
