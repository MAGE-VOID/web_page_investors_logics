import ProductHero from "@/components/products/ProductHero";
import CategoryNav from "@/components/products/CategoryNav";
import ProductGrid from "@/components/products/ProductGrid";
import WhySection from "@/components/products/WhySection";
import PricingSuite from "@/components/products/PricingSuite";
import FAQ from "@/components/products/FAQ";
import FloatingCTA from "@/components/products/FloatingCTA";
import ProductModal from "@/components/products/ProductModal";
import AboutUsPage from "@/app/documentation/about-us/page";
import "./products.css";
import "@/app/documentation/documentation.css";

export default function ProductsPage() {
  return (
    <main id="main-content" className="pw-main products-page" tabIndex={-1}>
      <ProductHero />
      <CategoryNav />
      <ProductGrid />
      <WhySection />
      <PricingSuite />
      <FAQ />
      <section id="about" className="pw-group pw-wrap doc-guide" aria-labelledby="about-heading">
        <div className="documentation-content"><AboutUsPage /></div>
      </section>
      <section className="pw-close pw-wrap" data-pw-close="" aria-labelledby="pw-close-h">
        <h2 id="pw-close-h" className="pw-h2">A clearer way to work.</h2>
        <a className="pw-buy" href="#license-options"><span>Explore Blue Boost licensing <em aria-hidden="true">→</em></span></a>
        <p className="pw-close-fine">Purchase or rental · final terms by email · no payment collected here</p>
      </section>
      <div className="pw-wrap">
        <p className="pw-honest">The eight catalogue tools are illustrative concepts, not available products. All chart and film sessions use original synthetic data; none represents live trading, a forecast or verified performance. Blue Boost Bot is a separate compiled Expert Advisor for MetaTrader 5. Trading can result in partial or total loss of capital. Automation does not remove that risk. The source code and underlying strategy remain private.</p>
      </div>
      <FloatingCTA />
      <ProductModal />
    </main>
  );
}
