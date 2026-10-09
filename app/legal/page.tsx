import TermsAndConditionsPage from "@/app/documentation/assistance-and-policies/terms-and-conditions/page";
import "@/app/documentation/documentation.css";

export default function LegalPage() {
  return (
    <main id="main-content" tabIndex={-1} className="documentation-page">
      <div className="page-container">
        <article className="documentation-content"><TermsAndConditionsPage /></article>
      </div>
    </main>
  );
}
