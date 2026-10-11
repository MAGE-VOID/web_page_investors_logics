import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import "./documentation.css";

const guides = [
  ["Introduction", "/home/documentation#introduction"],
  ["Getting started", "/home/documentation#installation"],
  ["MetaTrader 5", "/home/documentation#mt5"],
  ["Broker compatibility", "/home/documentation#broker"],
  ["Forex & leverage", "/home/documentation#forex"],
  ["What automation does", "/home/documentation#automation"],
  ["Computer & VPS", "/home/documentation#vps"],
  ["Security & scams", "/home/documentation#security"],
  ["Platform resources", "/home/documentation#resources"],
  ["Help center", "/home/contact#help"],
  ["Terms & risk", "/home/legal"],
  ["About Investors Logics", "/home#about"],
  ["Contact", "/home/contact"],
] as const;

function GuideLinks() {
  return <nav aria-label="Product guides">{guides.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}</nav>;
}

export default function DocumentationLayout({ children }: { children: ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} className="documentation-page">
      <div className="page-container documentation-grid">
        <aside className="documentation-sidebar"><Link className="documentation-index" to="/home/documentation">Product guides <span aria-hidden="true">↗</span></Link><GuideLinks /></aside>
        <details className="documentation-directory"><summary>Browse the guides <span aria-hidden="true">＋</span></summary><GuideLinks /></details>
        <div className="documentation-content">{children}</div>
      </div>
    </main>
  );
}
