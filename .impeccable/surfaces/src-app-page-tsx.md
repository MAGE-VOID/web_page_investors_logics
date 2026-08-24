---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/components/HeaderModule/Header.tsx","src/app/products/page.tsx","src/app/contact/page.tsx"]
---

# Home surface

## Scope and mode

- Primary target: `src/app/page.tsx` and the shared commercial shell.
- Mode: Persuade.
- Audience: self-directed retail investors who already understand basic Forex and MetaTrader 5.
- Job: evaluate and choose time-limited access to the compiled Blue Boost Bot `.ex5`.
- Primary action: configure a license term.
- Proof available: public product category, platform, deterministic automation, multi-instrument capability, testing/observability at a public level, and explicit risk boundaries.
- Constraints: frontend only; payment and activation cannot be represented as connected; no performance claims or private strategy details.

## Chosen direction

The interface behaves like a simple product preview before a software-access request. The visitor moves through Product preview / Test setup / Access terms, then sees the same decision sequence repeated as Inspect → Prepare → Request. No image visualization is used for this iteration; the preview is code-native and the commercial handoff remains honest.

## Implementation inventory

| Ingredient | Medium | Commitment |
| --- | --- | --- |
| Compact global navigation | Semantic React/HTML + CSS | Wordmark left, Features / Pricing / Documentation / Support center, Get access action right |
| Product identity block | Semantic HTML | Broad Barlow product statement, short factual description, no eyebrow copy |
| Product preview states | React state + CSS | Product preview / Test setup / Access terms update one accessible panel |
| 30/90/365 access terms | Accessible radio group + CSS | Selection updates term, price and request link |
| License order docket | Semantic HTML + CSS | Price, term, scope, honest frontend-only status, primary action |
| Boundary copy | Semantic HTML + CSS | Public product scope and private strategy exclusions are explicit |
| Product requirement band | Definition list / compact columns | MT5, `.ex5`, Forex automation, evaluation-first guidance |
| Plans section | Accessible buttons and comparison rows | Three clear plans; 90-day plan is the default, not a badge wall |
| Documentation index | Semantic links | Dense, practical wayfinding using the same line system |
| Motion | CSS + React state | Short color/state transitions for the preview and plan selection, disabled under reduced motion |
| Existing wordmark | `public/Logos/Logo_white90.png` or current verified logo asset | Keep Investors Logics recognizable; no generated replacement |

## Unresolved decisions

- Payment provider, checkout URL, technical license binding, delivery, refunds, renewal, taxes, and supported countries are not implemented.
- Commercial prices are a frontend proposal: USD 59 / 149 / 399 for 30 / 90 / 365 days.
