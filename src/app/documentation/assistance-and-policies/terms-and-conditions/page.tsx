import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

export default function TermsAndConditionsPage() {
  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* Bloque 1: Título principal */}
      <div>
        <Title>Terms and Conditions</Title>
        <Paragraph>
          These terms and conditions outline the rules and regulations for the
          use of Investors Logics&apos;s Website and Services. By accessing this
          website or by using any of our products or services, we assume you
          accept these terms and conditions in full. Do not continue to use
          Investors Logics&apos;s website or services if you do not accept all
          of the terms and conditions stated on this page.
        </Paragraph>
      </div>

      {/* Bloque 2: Services Offered */}
      <div>
        <Subtitle>Services Offered</Subtitle>
        <Paragraph>
          Investors Logics provides advanced trading tools, educational
          resources, and support to enhance your trading experience. Access to
          certain services may require registration and subsequent access via
          login credentials, which must not be shared with third parties.
        </Paragraph>
      </div>

      {/* Bloque 3: Use of Services */}
      <div>
        <Subtitle>Use of Services</Subtitle>
        <Paragraph>
          <strong>Eligibility:</strong> You represent and warrant that you are
          at least 18 years old and have the legal capacity to enter into this
          agreement.
        </Paragraph>
        <Paragraph>
          <strong>License to Use:</strong> Subject to your compliance with these
          terms, Investors Logics grants you a limited, non-exclusive,
          non-transferable license to access and use the services for your
          personal and non-commercial use.
        </Paragraph>
        <Paragraph>
          <strong>Prohibited Uses:</strong> You may not use our services for any
          unlawful or unauthorized purpose. Nor may you, in the use of the
          Service, violate any laws including but not limited to copyright laws.
        </Paragraph>
      </div>

      {/* Bloque 4: Risk Disclosure */}
      <div>
        <Subtitle>Risk Disclosure</Subtitle>
        <Paragraph>
          <strong>High Risk Investment:</strong> Trading has large potential
          rewards, but also large potential risks. You must be aware of the
          risks and be willing to accept them to invest in the markets.
        </Paragraph>
        <Paragraph>
          <strong>No Guarantee:</strong> There is no guarantee that you will
          earn any money using the techniques and ideas provided with this
          website. Examples in these materials are not to be interpreted as a
          promise or guarantee of earnings.
        </Paragraph>
      </div>

      {/* Bloque 5: Intellectual Property */}
      <div>
        <Subtitle>Intellectual Property</Subtitle>
        <Paragraph>
          All content included on the site, such as text, graphics, logos,
          images, and software used on the site, is the property of Investors
          Logics or its suppliers and protected by copyright and other laws that
          protect intellectual property and proprietary rights.
        </Paragraph>
      </div>

      {/* Bloque 6: User Comments, Feedback, and Other Submissions */}
      <div>
        <Subtitle>User Comments, Feedback, and Other Submissions</Subtitle>
        <Paragraph>
          If you send certain specific submissions at our request or without our
          request you send creative ideas, suggestions, proposals, plans, or
          other materials, whether online, by email, postal mail, or otherwise,
          you agree that we may, at any time, without restriction, edit, copy,
          publish, distribute, translate and otherwise use in any medium any
          comments that you forward to us.
        </Paragraph>
      </div>

      {/* Bloque 7: Changes to Terms */}
      <div>
        <Subtitle>Changes to Terms</Subtitle>
        <Paragraph>
          Investors Logics reserves the right, in its sole discretion, to change
          the Terms under which the website and services are offered. The most
          current version of the Terms will supersede all previous versions.
        </Paragraph>
      </div>

      {/* Bloque 8: Risk Warning */}
      <div>
        <Subtitle>Risk Warning</Subtitle>
        <Paragraph>
          Trading foreign exchange (Forex) on margin involves high risk and is
          not suitable for all investors. The high degree of leverage can work
          both for and against you. Before deciding to invest in Forex, you
          should carefully consider your investment objectives, level of
          experience, and risk appetite. There is a possibility that you could
          sustain a loss of some or all of your initial investment and therefore
          you should not invest money that you cannot afford to lose.
        </Paragraph>
      </div>

      {/* Bloque 9: Compliance Notice */}
      <div>
        <Subtitle>Compliance Notice</Subtitle>
        <Paragraph>
          Investors Logics does not direct its website and services to any
          individual in any country where such use would be contrary to local
          law or regulation. It is the user&apos;s responsibility to ensure that
          their use of Investors Logics&apos;s website and services complies
          with local laws and regulations. Investors Logics does not guarantee
          that the information on its website is appropriate for use in all
          locations.
        </Paragraph>
      </div>

      {/* Bloque 10: Contact Us */}
      <div>
        <Subtitle>Contact Us</Subtitle>
        <Paragraph>
          Investors Logics welcomes your questions or comments regarding the
          Terms:
        </Paragraph>
        <Paragraph>
          <strong>Email Address:</strong>{" "}
          <a
            href="mailto:investorslogics@gmail.com"
            style={{ color: "#00bfff", textDecoration: "underline" }}
          >
            investorslogics@gmail.com
          </a>
        </Paragraph>
      </div>
    </ContentLayout>
  );
}
