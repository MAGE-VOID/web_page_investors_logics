# Flow ledger · Nodlow / Valery direction · v4

This iteration intentionally uses no image visualization, generated artwork or raster product media. The implementation is code-native and evaluated through DOM, accessibility and interaction checks.

| Decision | Intended direction | Implemented result |
| --- | --- | --- |
| First question | Explain the bot before asking for payment or access. | Home opens with a compiled `.ex5` / MetaTrader 5 statement, plain limits and two actions: included scope or access terms. |
| Demo surface | Give the visitor a small, understandable product preview. | `Product preview`, `Test setup` and `Access terms` are real tabs backed by React state and accessible tab semantics. |
| Visitor path | Keep the request sequence short and legible. | `See the product → Check your MT5 → Request access` appears in the home and product route. |
| Offer | Use a simple Expert Advisor sales structure without unsupported proof. | Product route explains `.ex5`, MT5, requirements and boundaries, then presents 30 / 90 / 365 days. |
| Handoff | Never imply that an unconnected checkout is live. | Contact route carries the selected query plan, shows pending payment/delivery/activation and offers a direct email handoff. |
| Content architecture | Borrow Nodlow's demo-first clarity and ValeryTrading's product/support/documentation grouping. | Home, Product, Documentation and Support are primary navigation; documentation starts with product, setup, platform and safety. |
| Privacy | Keep implementation mechanics private. | No formulas, parameters, optimization material, source code or internal results are published in the new copy. |
| Responsive behavior | Preserve decision order without visual media dependencies. | DOM QA passes at 1440px and 375px with no horizontal overflow; mobile menu opens and closes with keyboard support. |

## Intentional deviations

- No charts, screenshots, generated images or visual media were added because the user explicitly requested a text/UI-led frontend.
- References supplied claims and information architecture only; no third-party testimonials, metrics, track records or performance promises were copied.
- Existing Investors Logics logo asset remains in the shared shell.

## Verification

`npm run typecheck`, `npm run lint`, `npm run build` and `git diff --check` pass. Playwright Chromium was used as a DOM-only fallback because Browser/IAB was not available; 17 routes were checked for one `h1`, content, overflow and console errors, plus tab switching, access-plan propagation, mobile menu state and visible documentation navigation.
