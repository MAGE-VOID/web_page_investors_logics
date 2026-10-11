import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => { document.title = "404 — Página no encontrada"; }, []);

  return (
    <main lang="es" style={{ minHeight: "100dvh", display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
      <h1 style={{ margin: 0, fontFamily: "system-ui, sans-serif", fontSize: 18, fontWeight: 400, lineHeight: 1.5, letterSpacing: "normal" }}>404 — Página no encontrada</h1>
    </main>
  );
}
