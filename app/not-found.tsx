import { Link } from "react-router-dom";

export default function NotFound() {
  return <main id="main-content" tabIndex={-1} className="page-container" style={{ paddingBlock: "100px 140px" }}><p className="mono" style={{ color: "var(--ink-3)", marginBottom: 20 }}>404 / PAGE NOT FOUND</p><h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1, letterSpacing: "-.045em" }}>A different direction.</h1><p style={{ color: "var(--ink-2)", marginBlock: "24px 32px" }}>This page isn’t here. Explore the tools or find a guide instead.</p><Link className="primary-button" to="/">Explore products <span aria-hidden="true">↗</span></Link></main>;
}
