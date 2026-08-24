import Layout from "@/components/Layout/Layout";
import Hero from "@/components/HeroModule/Hero";
import Section_1 from "@/components/Sections/Section_1/Section_1";
import Section_2 from "@/components/Sections/Section_2/Section_2";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Section_1 />
      <Section_2 />
    </Layout>
  );
}
