import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

export default function CybersecurityAndScamsPage() {
  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* BLOQUE 1: TÍTULO PRINCIPAL */}
      <div>
        <Title>Cybersecurity and Scams</Title>
        <Paragraph>
          Welcome to the Cybersecurity and Scams section of Investors Logics. In
          this guide, we will walk you through common cybersecurity threats and
          trading scams you may encounter, and provide practical steps to
          protect yourself and your investments.
        </Paragraph>
      </div>

      {/* BLOQUE 2: UNDERSTANDING CYBERSECURITY THREATS */}
      <div>
        <Subtitle>Understanding Cybersecurity Threats</Subtitle>
        <Paragraph>
          Cybersecurity threats can compromise your trading activities and
          personal data. Awareness is the first step in protection.
        </Paragraph>

        {/* Phishing Emails */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Phishing Emails
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Description:</strong> Fraudulent emails that mimic legitimate
            institutions to steal sensitive information.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Prevention:</strong> Verify email origins and avoid clicking
            on unsolicited links.
          </li>
        </ul>

        {/* Fake Websites */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Fake Websites
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Description:</strong> Imitations of reputable trading
            platforms designed to capture login credentials or personal data.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Prevention:</strong> Always check the URL to ensure it
            matches the legitimate website exactly.
          </li>
        </ul>

        {/* Software Security */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Software Security
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Description:</strong> Using outdated software can leave you
            vulnerable to security breaches.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Prevention:</strong> Regularly update your trading platforms
            and computers operating system.
          </li>
        </ul>
      </div>

      {/* BLOQUE 3: IDENTIFYING TRADING SCAMS */}
      <div>
        <Subtitle>Identifying Trading Scams</Subtitle>
        <Paragraph>
          Scams in trading are diverse and can be sophisticated, targeting both
          novice and experienced traders.
        </Paragraph>

        {/* False Promises */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          False Promises
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Description:</strong> Promises of guaranteed returns or
            low-risk investments in trading.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Prevention:</strong> Be skeptical of any investment that
            sounds too good to be true.
          </li>
        </ul>

        {/* Impersonation */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Impersonation
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Description:</strong> Scammers posing as legitimate brokers
            or financial advisors.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Prevention:</strong> Confirm all communications through
            official channels.
          </li>
        </ul>

        {/* Unregistered Brokers */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Unregistered Brokers
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Description:</strong> Firms operating without proper
            licensing or regulatory oversight.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Prevention:</strong> Check the regulatory bodys website to
            confirm the brokers registration.
          </li>
        </ul>

        {/* High-Pressure Sales Tactics */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          High-Pressure Sales Tactics
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Description:</strong> Urging quick decisions to avoid
            missing out on an investment.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Prevention:</strong> Take your time to research and make
            informed decisions.
          </li>
        </ul>
      </div>

      {/* BLOQUE 4: PROTECTING YOURSELF */}
      <div>
        <Subtitle>Protecting Yourself</Subtitle>
        <Paragraph>
          Enhance your trading security with these best practices:
        </Paragraph>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Secure Your Accounts
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            Use strong, unique passwords for different sites.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            Enable two-factor authentication (2FA) to add an extra layer of
            security.
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
          Verify Website Authenticity
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            Before entering any personal information, verify that the website is
            secure and authentic.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            Look for <code>https://</code> in the URL and a padlock symbol in the
            address bar.
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
          Educate Yourself
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            Stay informed about the latest trading scams and cybersecurity
            threats.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            Participate in security awareness trainings if available.
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
          Use Trusted Networks
        </h3>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            Avoid trading on public or unsecured Wi-Fi networks.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            Consider using a VPN for an added layer of security when trading.
          </li>
        </ul>
      </div>

      {/* BLOQUE 5: REPORTING AND ASSISTANCE */}
      <div>
        <Subtitle>Reporting and Assistance</Subtitle>
        <Paragraph>
          If you suspect you have encountered a scam or a breach in your trading
          account:
        </Paragraph>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Contact:</strong> Reach out to our support team immediately
            at <code>investorslogics@gmail.com</code>.
          </li>
          <li style={{ marginBottom: "0.4rem" }}>
            <strong>Report:</strong> Inform the appropriate regulatory body if
            you encounter or suspect a scam.
          </li>
        </ul>
        <Paragraph>
          We are committed to ensuring your trading experience is secure and
          successful. For more detailed guidance or support, please refer to our
          comprehensive help resources or contact our customer support team
          directly.
        </Paragraph>
      </div>
    </ContentLayout>
  );
}
