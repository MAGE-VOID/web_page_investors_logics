import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import "./documentation.css";

const guides = [
  ["Introduction", "/documentation#introduction"],
  ["Getting started", "/documentation#installation"],
  ["MetaTrader 5", "/documentation#mt5"],
  ["Broker compatibility", "/documentation#broker"],
  ["Forex & leverage", "/documentation#forex"],
  ["What automation does", "/documentation#automation"],
  ["Computer & VPS", "/documentation#vps"],
  ["Security & scams", "/documentation#security"],
  ["Platform resources", "/documentation#resources"],
  ["Help center", "/contact#help"],
  ["Terms & risk", "/legal"],
  ["About Investors Logics", "/#about"],
  ["Contact", "/contact"],
] as const;

function GuideLinks() {
  return <nav aria-label="Product guides">{guides.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}</nav>;
}

export default function DocumentationLayout({ children }: { children: ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} className="documentation-page">
      <div className="page-container documentation-grid">
        <aside className="documentation-sidebar"><Link className="documentation-index" to="/documentation">Product guides <span aria-hidden="true">↗</span></Link><GuideLinks /></aside>
        <details className="documentation-directory"><summary>Browse the guides <span aria-hidden="true">＋</span></summary><GuideLinks /></details>
        <div className="documentation-content">{children}</div>
      </div>
    </main>
  );
}
