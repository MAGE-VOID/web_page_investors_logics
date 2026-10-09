import { useSearchParams } from "react-router-dom";
import ContactForm from "@/components/contact/ContactForm";
import HelpCenterPage from "@/app/documentation/assistance-and-policies/help-center/page";
import DocumentationContactPage from "@/app/documentation/contact/page";
import "@/app/documentation/documentation.css";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") ?? undefined;
  const plan = searchParams.get("plan") ?? undefined;
  const product = searchParams.get("product") ?? undefined;
  return (
    <main id="main-content" tabIndex={-1}>
      <ContactForm key={JSON.stringify([mode, plan, product])} initialMode={mode} initialPlan={plan} productId={product} />
      <div className="page-container contact-guides">
        <div className="documentation-content">
          <section id="help" className="doc-guide" aria-labelledby="help-heading"><HelpCenterPage /></section>
          <section id="support" className="doc-guide" aria-labelledby="support-heading"><DocumentationContactPage /></section>
        </div>
      </div>
    </main>
  );
}
