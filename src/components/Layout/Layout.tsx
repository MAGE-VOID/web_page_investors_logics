import type { ReactNode } from "react";
import Header from "@/components/HeaderModule/Header";
import Footer from "@/components/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site-layout">
      <Header />
      <main id="main-content" className="site-content" tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  );
}
