# Fidelity ledger · Nodlow / Valery direction

Accepted concept: `.impeccable/mocks/blueboost-nodlow-valery-concept-v2.png`
Latest implementation captures: `.impeccable/screenshots/home-v2-desktop-top.png` and `.impeccable/screenshots/home-v2-mobile.png`

| Comparison point | Concept evidence | Render evidence | Result |
| --- | --- | --- | --- |
| First viewport balance | Product promise and license selector share the left column; workflow demo occupies the right. | 1440×1000 capture shows the two-column hero, visible 90-day selection, CTA, flow nodes, sample curve and state summary. | Matched after reducing hero padding, headline scale and license spacing. |
| Palette and surfaces | Charcoal workbench, graphite surfaces, cool rules, champagne action state. | Hero, proof and route surfaces use charcoal/graphite with a restrained champagne action signal. | Matched; no blue/purple or glass treatment. |
| Demo anatomy | Overview / Backtest / Live tabs; Data Source → Signal Filter → Entry / Exit → MetaTrader 5; sample curve. | Tabs update `aria-selected` and panel copy; workflow and SVG curve are code-native and labelled sample data. | Matched and interactive. |
| Commercial flow | 30 / 90 / 365 selector with 90 primary and an explicit demo/payment caveat. | Selecting 30 updates CTA to `/contact?plan=30-days` and USD 59; checkout remains clearly unconnected. | Matched and honest. |
| Information architecture | Product-led sections: proof, steps, capabilities, support, pricing and FAQ. | Product, contact and documentation routes use the same system and retain public-safe educational content. | Matched by extension; no unsupported metrics added. |
| Responsive behavior | Desktop concept preserves two-column workbench; mobile continuation should preserve action order. | 375×812 capture has no horizontal overflow; mobile menu opens with six usable links; all 17 routes load at desktop/mobile checks. | Passed. |

## Above-the-fold copy diff

The implemented hero preserves the approved concept copy: `Build confidence before you trade.`, `A compiled .ex5 Expert Advisor for MetaTrader 5.`, the four public facts, `Frontend demo — sample data only`, and `No source code included`. No returns, win rates, testimonials, track records, broker endorsements, or private strategy mechanics were added.

## Intentional deviations

- The existing Investors Logics wordmark is preserved instead of inventing a new logo asset.
- The chart is an illustrative SVG state, not a claim about live or historical performance.
- Product, contact, and documentation pages use dark graphite content fields to keep the product world coherent while sharing the same charcoal/champagne system.

## Verification method

Browser/IAB was not exposed in this session. The allowed Playwright fallback used the installed Chromium executable at 1440×1000 and 375×812, with route, overflow, console, tab-state, license-state and mobile-menu checks. `npm run typecheck`, `npm run lint`, `npm run build`, and `git diff --check` pass.
