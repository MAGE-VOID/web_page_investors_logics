import Layout from "@/components/Layout/Layout";
import Hero from "@/components/HeroModule/Hero";
import ProductNavigation from "@/components/Product/ProductNavigation";
import Pricing from "@/components/Product/Pricing";
import ProductFAQ from "@/components/Product/ProductFAQ";
import Section_1 from "@/components/Sections/Section_1/Section_1";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProductNavigation />
      <Pricing />
      <Section_1 />
      <ProductFAQ />
    </Layout>
  );
}
