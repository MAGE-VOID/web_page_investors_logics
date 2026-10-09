---
name: "Investors Logics · Source-faithful catalogue"
reference: "reference/proea/proea.html"
styles:
  - "reference/proea/0kwvdd8-c_-gp.css"
  - "reference/proea/3-rmiw8lhbb33.css"
screenshot: "reference/proea/screenshot.png"
implementation: "Vite / React / React Router / TypeScript"
colors:
  paper: "#fafaf8"
  ink: "#16150f"
  ink-2: "#5f5d56"
  ink-3: "#716e65"
  ink-soft: "#8a877e"
  line: "#e7e5e0"
  stage: "#0b1020"
  stage-ink: "#d6dbe6"
  stage-muted: "#8b97b0"
  mint: "#3ef0c2"
  gain: "#07805f"
  loss: "#f0506e"
typography:
  catalogue: "Plus Jakarta Sans"
  data: "IBM Plex Mono"
  header: "Inter"
  faq: "Inter Tight"
container:
  catalogue: "min(1240px, 100%), with 20px inline padding"
  pricing: "min(1200px, 100%), with 20px inline padding"
---

# Investors Logics: implementation contract

This is a reproduction of the supplied visual system, not a new design direction.
The reference HTML, both CSS files and the supplied screenshot are the source of
truth. Keep their geometry, cascade, typography, shapes and responsive rules.
Only identity, copy, product information, destinations and original demo drawings
are substituted. Do not reuse competitor branding, product names, commercial
claims or proprietary illustrations.

## Source and cascade

- `styles/proea-base.css` retains the supplied `.pv-*` rules.
- `styles/proea-products.css` retains the supplied `.pw-*` rules.
- `styles/reference-header.css` reproduces the header's observed computed styles.
- `app/globals.css` imports these in the reference order after `tokens.css`.
- `app/products/products.css` contains only integration adjustments: canvas
  positioning, modal canvas heights, horizontal aura clipping at the dialog
  boundary, accessible focus and enquiry anchors.
- `HeroFilm.module.css` and `ProductDemoCanvas.module.css` support the original
  canvas/poster implementations, not a replacement catalogue layout.

The original styles are deliberately explicit. Do not translate them into
approximate utility presets or change their measures through a generic UI kit.
The archived HTML is research input only. Its scripts are not executed or served.

Where the earlier written specification differs from the supplied cascade, the
cascade wins. For example, pricing uses the 1200px `.pv-wrap` rather than the
1240px `.pw-wrap`; its effective top padding is 120px, and its large price uses
the source sans-serif face. Preserve these differences.

The document uses `scrollbar-gutter: stable`, as observed in the reference. This
also preserves its viewport-unit typography calculations. Do not add a second
global anchor offset: catalogue sections already have the source 58px scroll
margin.

## Identity and public content

The header/footer use an original candlestick mark derived from Investors
Logics' identity, plus its own wordmark. Navigation links lead to real local
routes. Guides and Contact replace the reference's blog/auth actions.

`data/products.ts` owns eight temporary concepts in Discover, Automate, Analyze
and Build. Group counts are derived from that data: 3 / 1 / 2 / 2. Their prices,
collection comparison and sessions are explicitly illustrative and not for sale.
Do not imply that they are eight released products or a real discounted bundle.

Blue Boost Bot is separate compiled MT5 software. Rental proposals and purchase
enquiries are shown separately. The site does not process payment, issue a
license, collect trading capital or promise returns. Keep the strategy, source,
private parameters and any non-public performance evidence out of the frontend.

## Geometry

### Header

A fixed light bar, width `min(1080px, calc(100% - 28px))`, at 14px from the top.
It uses the observed 17px corners, 10px/12px/10px/18px padding, small Inter links,
blue-tinted Products control, orange Guides action and outlined Contact action.

The centre navigation disappears at 860px. Wordmark/Products text disappear at
520px, retaining meaningful accessible names. Products opens a small dark menu
with real links, outside-click dismissal, Escape and focus return.

### Hero

Desktop top padding is 124px and bottom padding 20px. The title grid is a fluid
left track and a 400px right track with 18px / 48px gaps. The full-width film sits
below them; this is not a 50/50 hero.

The H1 uses `clamp(44px, 4.6vw + 14px, 92px)`, weight 800, line-height .92 and
tracking -.06em. Its continuation is weight 300, warm grey and tracking -.05em;
at 1040px and above it becomes a block. The side copy is 17px / 1.45, with 16px
gaps and 6px bottom padding.

The stage is dark navy, 26px corners and aspect 2.3. At 619px and below its aspect
is 17/20, with 20px corners. Mobile top padding is 84px and the source order is:
eyebrow, headline, buttons, film, description, quiet note.

Use the source aura, stage shadow, chapter rail, Replay/Play/Pause control,
four-option native radio selector and external fine print. The film contains
five original synthetic chapters and finishes on a persistent collection scene.

### Sticky navigation and catalogue

The category bar is 60px tall (58px internal row), initially sticky below the
header at 82px. Once the hero passes, the header folds and the bar sticks at zero
or the safe-area/banner inset. IntersectionObserver drives this state.

Its pills are real anchors, not filtering tabs. The row scrolls horizontally on
small screens, with the final sample-price link kept at the right. Global Pause
films controls the ambient hero and card engines; it does not disable manual
modal playback.

Groups use 64px / 6px block padding, an 8px heading gap and 22px below the header.
H2 is `clamp(28px, 1.5vw + 20px, 40px)`, weight 800, line-height 1.02, tracking
-.045em.

The desktop grid has six tracks and 34px / 20px gaps. Normal cards span two,
pairs span three, and a singleton spans all six. A desktop singleton splits
1.55fr / 1fr with a 34px gap. At 980px the grid becomes two columns; odd last cards
use the source full-width treatment. At 620px it becomes one column, gap 30px.

Product text is outside the visual, not inside a white bordered box. The dark
visual uses 16px corners and aspect 16/10; paired/singleton visual proportions
follow the source rules. Overlays are a 9.5px mono label, small status pill and
white 30px Watch pill. The source data-lit hover/focus treatment lifts the visual
4px over 500ms. Names are 17px, metadata 11px mono, flow 13px with arrows,
Does/Guards copy 14px / 1.4, and sample price 16px mono.

### Why, pricing, FAQ and footer

Why uses 96px / 10px outer padding, a three-column 16px-gap grid, 20px white cards,
22px padding, 184px dark visuals and 22px / 1.1 heavy headings. At 900px it becomes
one column. Original public software/licensing illustrations replace the
competitor's product evidence.

Pricing retains the source 5fr / 7fr stage, 32–88px gap and single-column layout
at 1000px. The white pricing card has 28px corners, 26–40px padding, 22px gaps,
a masked 1px conic pastel border and blurred aura. Price is
`clamp(104px, 11vw, 150px)`, weight 300, line-height 1, tracking -.065em.
Currency is much smaller. The eight-item receipt remains on the right; comparison
bars remain below the full stage, with the source 150px / 1fr / 96px grid and
12px bars. Separate licensing alternatives use the source unboxed alternate rows.
Receipt rows are real links into the shared dialog. Pointer and keyboard focus
connect each row to its comparison segment through the source `data-hot` states;
their link wrapper inherits the exact row grid rather than introducing new spacing.

FAQ uses the supplied `.rbn` / `.pfaq__*` rules and native details/summary,
with the source light rules and plus indicator. The footer preserves the
observed wide four-track composition, switching to two tracks and then one.

### Modal and dock

One native dialog serves all cards. Its width is
`min(1240px, calc(100% - 24px))`, max height `100dvh - 24px`, with 26px corners.
The inner padding is 24px / 26px / 20px and the main grid is 1fr / 340px, gap
22px / 26px. It stacks at 940px. Canvas height is 420px, or 300px on small screens.

At 700px the dialog becomes a full-width bottom sheet with 22px top corners,
a fixed two-action enquiry footer and safe-area padding. Its measured footer
height reserves space in the scrolling content.

The source scrubber uses a 44px play control, 4px track and 16px handle. A native
range input supplies click, drag and keyboard seeking. Escape/backdrop/close
restore focus and body scroll. Replay, another synthetic sample and previous/next
product controls are functional. Email actions remain enquiries, not checkout.
Workflow steps and scrubber milestones use the same 0/50/100% thresholds.
Changing product returns focus to the close control at the top. In the tablet
layout, the decorative aura is clipped at the dialog's horizontal boundary so
it cannot create an X scrollbar; normal content and Y scrolling are unchanged.

The dock is 500px wide, right 24px / bottom 12px on desktop, with the original
translucency, blur, pill shape and 350ms transition. It is hidden before the hero
passes, at pricing/the closing section, and while the dialog is open; hidden
controls are inert and excluded from keyboard navigation.

## Motion, accessibility and delivery

Preserve the source restrained easing and reduced-motion CSS. Engines are original
2D drawing code, dynamically imported near the viewport. ResizeObserver handles
size and bounded DPR; IntersectionObserver and document visibility pause RAF.
Texture and glow are cached, not regenerated per frame. Complete static posters
and text alternatives remain available without the engines.
Drawing throttles retain the fractional RAF remainder, separately from elapsed
playback time. Workflow posters/canvases share the 620px container breakpoint;
ambient progress drives the source flow states, with cleanup on unmount.

The application runs as a Vite-built React SPA. Explicit React Router routes
reuse the same pages, shell, typography and visual CSS; changing the build tool
must not restore the inactive design in the older src tree. Contact and guides
are route-split, and canvas engines remain viewport-loaded. There is no Next.js
runtime, server rendering or server/client component boundary.

Use semantic landmarks,
real anchors/buttons, native dialog/details/radio/range, descriptive alternatives,
aria-current/expanded/pressed and visible 3px focus. Do not claim formal WCAG or
measured performance certification from these safeguards alone.

Verification and screenshot evidence are recorded in
`docs/design-references/QA.md`. On 2026-10-02 the Vite application was visually
checked at 1440×1000, 1024×900, 768×900 and 390×844 using the existing server;
TypeScript, ESLint and a production build were also checked. Historical evidence
from before the Vite migration is retained and clearly labelled.
