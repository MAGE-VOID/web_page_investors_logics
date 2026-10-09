import { useEffect, useRef } from "react";
import { Outlet, ScrollRestoration, useLocation, useMatches, useNavigationType } from "react-router-dom";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/inter-tight/latin-400.css";
import "@fontsource/inter-tight/latin-500.css";
import "@fontsource/inter-tight/latin-600.css";
import "@fontsource/inter-tight/latin-700.css";
import "@fontsource/plus-jakarta-sans/latin-300.css";
import "@fontsource/plus-jakarta-sans/latin-400.css";
import "@fontsource/plus-jakarta-sans/latin-500.css";
import "@fontsource/plus-jakarta-sans/latin-600.css";
import "@fontsource/plus-jakarta-sans/latin-700.css";
import "@fontsource/plus-jakarta-sans/latin-800.css";
import "@fontsource/ibm-plex-mono/latin-300.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-600.css";
import ProductHeader from "@/components/products/ProductHeader";
import ProductFooter from "@/components/products/ProductFooter";
import "./globals.css";

export default function RootLayout() {
  const matches = useMatches();
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const previousPath = useRef(pathname);
  const title = matches.reduce((current, match) => {
    const handle = match.handle as { title?: string } | undefined;
    return handle?.title ?? current;
  }, "Investors Logics — Trading tools, with intent");

  useEffect(() => { document.title = title; }, [title]);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    // New pages receive keyboard focus; anchor jumps and history keep native behavior.
    if (navigationType !== "POP" && !hash) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
  }, [pathname, hash, navigationType]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div id="pw-root" className="pv pw">
        <ProductHeader />
        <Outlet />
        <ProductFooter />
      </div>
      <ScrollRestoration />
    </>
  );
}
