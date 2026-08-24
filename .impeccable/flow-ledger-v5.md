# Flow ledger · product-sheet refinement · v5

This pass keeps the dark graphite and champagne system but removes the visual habits that made the first version feel like a generic premium dashboard. No image visualization or product media was added.

| Decision | Refinement | Implemented result |
| --- | --- | --- |
| First read | Lead with the actual product, not a slogan. | Home H1 now states the compiled Expert Advisor and MetaTrader 5 directly. |
| Hierarchy | Remove decorative kickers and oversized metadata. | Home, product, contact and not-found routes open with their real heading; supporting copy follows. |
| Offer flow | Make access comparison readable before the request. | Product plans are open comparison rows, not three tall marketing cards. |
| Proof | Keep only facts a visitor can verify. | `.ex5`, MT5, time-limited terms and self-directed use appear as a restrained fact rail. |
| Interaction | Keep one useful preview interaction. | Product / Setup / Access tabs update the same panel and retain accessible tab semantics. |
| Disclosure | Avoid prototype language in the public copy. | “Request handoff” and “Public preview” explain unconnected payment, delivery and activation without exposing implementation details. |
| Privacy | Keep strategy mechanics out of the offer. | Public copy names the confidentiality boundary without formulas, parameters or optimization material. |
| Responsive | Preserve the decision sequence on small screens. | DOM QA passes at 1440px and 375px with no horizontal overflow and a keyboard-closable mobile menu. |

## Intentional deviation

The user explicitly requested no image visualization, so the product preview remains semantic HTML/CSS rather than screenshots, charts or generated imagery. The existing Investors Logics logo remains in the shared shell.

## Verification

`npm run typecheck`, `npm run lint`, `npm run build`, `git diff --check` and DOM-only Playwright checks pass across 17 routes. The Impeccable detector was run once after the edits; it reported advisory type-ramp drift only, with no blocking antipatterns.
