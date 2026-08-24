# Fidelity ledger · Nodlow / Valery direction · v3

Accepted concept: `.impeccable/mocks/blueboost-nodlow-valery-concept-v3.png`  
Latest implementation captures: `.impeccable/home-v3-desktop.png`, `.impeccable/home-v3-mobile.png`, `.impeccable/products-v3-desktop.png`, `.impeccable/contact-v3-desktop.png`, `.impeccable/docs-v3-desktop.png`

| Comparison point | Intended direction | Render evidence | Result |
| --- | --- | --- | --- |
| First viewport | Direct product promise beside a visible evaluation workbench. | The desktop home places the product statement on the left and the dark workspace on the right, with tabs, sample curve, workflow and boundary note in the first view. | Matched |
| Demo anatomy | A visual builder/backtest-like surface with explicit sample state and no implied live connection. | `Overview`, `Test environment` and `License` tabs update an accessible panel; the chart is labelled illustrative and the chrome states frontend demo/sample data only. | Matched |
| Product-led structure | Explain the artifact, environment, support path and access terms before asking for a request. | Home flows through public evidence, product scope, environment guidance, documentation, then time-limited terms; `/products` and `/contact` preserve the same order. | Matched |
| Commercial honesty | Keep the request path clear while payment, delivery and activation are not wired. | The UI uses `View access terms` → `Request access` → email handoff, with disabled payment and pending delivery/activation states. | Matched |
| Premium dark palette | Graphite/charcoal field, warm ivory type, one champagne action signal, structural rules, no decorative glow. | Home, product, contact and docs captures use the same token system with restrained corners and flat surfaces. | Matched |
| Public/private boundary | Make the public product legible without revealing strategy mechanics or inventing proof. | Scope notes explicitly exclude formulas, parameters, source and optimization material; chart and copy carry sample/illustrative labels. | Matched |
| Responsive continuation | Preserve decision order on narrow screens and avoid horizontal scroll. | 375px capture keeps identity, CTA and demo in sequence; Playwright reports no overflow at mobile and all tested routes. | Passed |

## Intentional deviations

- The existing Investors Logics wordmark remains in the header; no new brand asset was invented.
- The reference workbench uses a code-native SVG sample curve and generic workflow labels rather than live broker data or performance claims.
- ValeryTrading-style product, infrastructure and support sections are adapted as information architecture only; no third-party testimonials, metrics or endorsements were copied or invented.
- The public offer remains a frontend proposal: payment provider, delivery and activation are visibly pending.

## Verification method

Browser/IAB was not exposed in this session. The allowed Playwright fallback used the installed Chromium executable at 1440×1000 and 375×812. It checked 17 routes, one `h1` per route, body content, horizontal overflow, console errors, demo tab switching, evidence anchor visibility, plan query propagation, mobile menu visibility and one active documentation link. `npm run typecheck`, `npm run lint`, `npm run build`, and `git diff --check` pass.
