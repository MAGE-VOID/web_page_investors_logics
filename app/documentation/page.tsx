import TopicDirectory from "@/components/documentation/TopicDirectory";
import DocumentationLayout from "./layout";
import IntroductionPage from "./introduction/page";
import GettingStartedPage from "./table-of-contents/getting-started/page";
import TradingPlatformsPage from "./table-of-contents/platforms/page";
import BrokersPage from "./best-brokers/page";
import WhatIsForexPage from "./table-of-contents/what-is-forex/page";
import AlgorithmicTradingPage from "./table-of-contents/algorithmic-trading/page";
import VirtualPrivateServerPage from "./infrastructure/virtual-private-server/page";
import CybersecurityAndScamsPage from "./infrastructure/cybersecurity-and-scams/page";
import ResourcesPage from "./table-of-contents/resources/page";

export default function GuidesPage() {
  return (
    <DocumentationLayout>
      <TopicDirectory />
      <section id="introduction" className="doc-guide" aria-labelledby="introduction-heading"><IntroductionPage /></section>
      <section id="installation" className="doc-guide" aria-labelledby="installation-heading"><GettingStartedPage /></section>
      <section id="mt5" className="doc-guide" aria-labelledby="mt5-heading"><TradingPlatformsPage /></section>
      <section id="broker" className="doc-guide" aria-labelledby="broker-heading"><BrokersPage /></section>
      <section id="forex" className="doc-guide" aria-labelledby="forex-heading"><WhatIsForexPage /></section>
      <section id="automation" className="doc-guide" aria-labelledby="automation-heading"><AlgorithmicTradingPage /></section>
      <section id="vps" className="doc-guide" aria-labelledby="vps-heading"><VirtualPrivateServerPage /></section>
      <section id="security" className="doc-guide" aria-labelledby="security-heading"><CybersecurityAndScamsPage /></section>
      <section id="resources" className="doc-guide" aria-labelledby="resources-heading"><ResourcesPage /></section>
    </DocumentationLayout>
  );
}
