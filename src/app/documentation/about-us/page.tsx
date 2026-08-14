import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

export default function AboutUsPage() {
  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* BLOQUE 1: TÍTULO PRINCIPAL */}
      <div>
        <Title>About Us</Title>
        <Paragraph>
          Investors Logics, where innovation meets trading. Our mission is to
          empower traders around the world by providing cutting-edge
          technological solutions, robust educational resources, and unparalleled
          support.
        </Paragraph>
      </div>

      {/* BLOQUE 2: OUR MISSION */}
      <div>
        <Subtitle>Our Mission</Subtitle>
        <Paragraph>
          At Investors Logics, our core mission is to enhance the trading
          experience for both retail and institutional traders. We aim to bridge
          the gap between traditional trading methods and modern technology,
          making sophisticated trading accessible to everyone.
        </Paragraph>
      </div>

      {/* BLOQUE 3: WHO WE ARE */}
      <div>
        <Subtitle>Who We Are</Subtitle>
        <Paragraph>
          Investors Logics is a pioneering technology company specializing in the
          development of advanced trading software and analytical tools. Founded
          by a team of expert traders and software engineers, we harness the power
          of machine learning, artificial intelligence, and extensive market
          analysis to deliver superior trading tools.
        </Paragraph>
      </div>

      {/* BLOQUE 4: WHAT WE DO */}
      <div>
        <Subtitle>What We Do</Subtitle>

        {/* Sección: Innovative Trading Solutions */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Innovative Trading Solutions
        </h3>
        <Paragraph>
          We develop state-of-the-art trading platforms and algorithms that are
          designed to improve market analysis, decision-making, and risk
          management. Our products include:
        </Paragraph>
        <ul style={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
          <li style={{ marginBottom: "0.4rem" }}>Custom Trading Indicators</li>
          <li style={{ marginBottom: "0.4rem" }}>Expert Advisors (EAs) for MT5</li>
          <li style={{ marginBottom: "0.4rem" }}>Algorithmic Trading Systems</li>
        </ul>

        {/* Sección: Dedicated Support */}
        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Dedicated Support
        </h3>
        <Paragraph>
          Our team is committed to providing ongoing support to ensure our clients
          can trade with confidence and clarity. Whether its technical assistance
          or trading advice, were here to help every step of the way.
        </Paragraph>
      </div>

      {/* BLOQUE 5: OUR VALUES */}
      <div>
        <Subtitle>Our Values</Subtitle>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Innovation
        </h3>
        <Paragraph>
          We continuously explore new technologies and strategies to stay at the
          forefront of the trading industry.
        </Paragraph>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Integrity
        </h3>
        <Paragraph>
          Transparency and honesty are at the core of all our interactions and
          offerings.
        </Paragraph>

        <h3
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Excellence
        </h3>
        <Paragraph>
          We strive for excellence in every product we create and service we
          provide, ensuring that our clients receive the best possible trading
          experience.
        </Paragraph>
      </div>

      {/* BLOQUE 6: OUR HISTORY */}
      <div>
        <Subtitle>Our History</Subtitle>
        <Paragraph>
          Founded in 2020, Investors Logics started as a small startup with the
          vision of making sophisticated trading accessible to traders at all
          levels.
        </Paragraph>
      </div>

      {/* BLOQUE 7: MEET OUR TEAM */}
      <div>
        <Subtitle>Meet Our Team</Subtitle>
        <Paragraph>
          Our team is composed of industry veterans, financial analysts, and
          skilled developers who share a passion for trading and technology. Each
          member brings unique expertise, ensuring that Investors Logics remains
          at the cutting edge of the financial technology sector.
        </Paragraph>
      </div>

      {/* BLOQUE 8: JOIN US */}
      <div>
        <Subtitle>Join Us</Subtitle>
        <Paragraph>
          Whether youre a seasoned trader looking to optimize your strategies or
          a newcomer eager to learn, Investors Logics has something to offer.
          Explore our platforms, join our community, and start your journey to
          becoming a more knowledgeable and successful trader.
        </Paragraph>
      </div>

      {/* BLOQUE 9: CIERRE */}
      <Paragraph>
        Thank you for choosing Investors Logics as your trusted trading partner.
        For further information about our company or services, please dont
        hesitate to contact us.
      </Paragraph>
    </ContentLayout>
  );
}
