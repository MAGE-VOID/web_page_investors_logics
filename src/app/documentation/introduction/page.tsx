import React from "react";
import PageBreadcrumb from "@/app/documentation/components/Content/PageBreadcrumb";
import ContentLayout from "@/app/documentation/components/Content/ui/ContentLayout";
import Title from "@/app/documentation/components/Content/ui/Title";
import Subtitle from "@/app/documentation/components/Content/ui/Subtitle";
import Paragraph from "@/app/documentation/components/Content/ui/Paragraph";

// Importamos FAQItem
import FAQBox from "@/app/documentation/components/Content/ui/FAQBox";

export default function IntroductionPage() {
  return (
    <ContentLayout>
      <PageBreadcrumb />

      {/* Bloque 1 */}
      <div>
        <Title>Introduction</Title>
        <Paragraph>
          Investors Logics is dedicated to empowering traders with advanced
          algorithmic trading strategies and cutting-edge technologies. We
          combine industry knowledge with innovative practices to deliver
          high-performance trading solutions to both retail and institutional
          clients.
        </Paragraph>
        <Paragraph>
          Led by a specialist in algorithmic trading, our team applies extensive
          programming and financial modeling skills to develop and implement
          effective trading systems that bridge the gap between theory and
          market reality.
        </Paragraph>
      </div>

      {/* Bloque 2 */}
      <div>
        <Subtitle>Our Commitment</Subtitle>
        <Paragraph>
          We are committed to continuous improvement and innovation. Our
          strategies are designed to adapt to evolving markets, ensuring
          sustainable and robust performance for our clients.
        </Paragraph>
      </div>

      {/* Bloque 3 */}
      <div>
        <Subtitle>Explore</Subtitle>
        <Paragraph>
          This documentation provides a comprehensive guide to our trading
          systems and their capabilities. Whether you are starting out or
          looking to enhance your trading strategies, you will find valuable
          information and insights here.
        </Paragraph>
      </div>

      {/* Bloque 4 */}
      <div>
        <Subtitle>General Questions</Subtitle>
        <Paragraph>
          If you have more questions, you can consult the FAQ.
        </Paragraph>
      </div>

      {/* Bloque 5: Preguntas expandibles */}
      <div>
        <FAQBox title="What platforms does Investors Logics use?">
          Investors Logics utilizes a variety of platforms including MT5, ONNX,
          Python, OpenAI, TensorFlow, and PyTorch. This allows us to provide
          tailored trading strategies and technologies that meet specific client
          needs.
        </FAQBox>

        <FAQBox title="How can I start trading with Investors Logics?">
          Begin by exploring our Documentation section. Here, you will find all
          necessary information on setting up your trading systems and
          understanding the algorithms we use. For specific inquiries, please
          contact our support.
        </FAQBox>

        <FAQBox title="Does Investors Logics offer customized trading solutions?">
          Yes, our platform is built to accommodate customizations. We
          understand that each trader needs are unique, and our technology is
          designed to adapt to individual preferences and market conditions.
        </FAQBox>
      </div>
    </ContentLayout>
  );
}
