# Catalogue build contract

Owner: catalog builder only. ProductGrid.tsx, ProductCard.tsx, WhySection.tsx, FAQ.tsx and unused local modules if needed. No global CSS edits, no data edits, no pricing/hero/modal/nav edits. Source CSS will be imported by main.

Read source reference/proea/proea.html and both CSS. Use original pw-* and rbn FAQ class structure exactly, not redesigned CSS Modules. Source screenshot path reference/proea/screenshot.png.

Product sections from data/categories arrays, section id existing category.id; .pw-group.pw-wrap > .pw-group-head with .pw-h2 and .pw-q; .pw-grid[data-n=count]. Product card article.pw-cell (semantics) > ProductModalTrigger rendered as a real anchor with .pw-card[data-pw-card][data-tone], using source tones win/loss/skip/map. Its visual is .pw-stage containing ProductDemoCanvas, .pw-sim, .pw-chip[data-tone] and .pw-play. Its information is .pw-body containing .pw-top > .pw-name (h3 with suffix span) and .pw-platform, then .pw-flow, DOES/GUARDS .pw-eg with .e/.g child spans, .pw-chips and .pw-foot with price b and sample badge .in. These are the actual source class names. The full card opens the modal via ProductModalTrigger imported from ProductModal, passing href=product.href for a documentation fallback without JavaScript. Do not nest buttons, anchors or other interactive controls inside that anchor. div.pw-stage and div.pw-body permit the canvas wrapper and h3 while retaining the source hierarchy and styles.

Global classes determine geometry: grid6 gap34/20, 3 per row; 2/4cards span3; singleton spanall and >=981 horizontal1.55fr/1fr gap34. Visual16/10 normal, two cards2, singleton2. Tablet<=980 grid2 with odd last full and5/2 visual. Mobile<=620 grid1 gap30. No large white exterior box. Cardvisual owns shadow/radius16. Header17px, metadata11mono, flow13text, details14 labels10mono58pxtrack.

Main will connect IO reveal/hover behavior through CategoryNav or tiny observer boundary; keep SSR section arrays. The trigger exposes data-pw-card/data-tone; the parent observer sets data-lit/data-playing and root data-pw-live for the source hover/play selectors. Do not invent cards. Existing 8 product concepts preserved. Visible concise concept/sample-price notices; no fabricated available tool claims. Own icons should be original simple line icons, no source logo.

Why: .pw-why.pw-wrap h2 then .pw-why-grid3 gap16/mt26. White cards20radius22pad, visuals184px14radius dark, names22w800. Reuse source visual composition (file list, big period/calendar, stages), own public .ex5/manual/license files only, not private code/strategy/performance counts. Intersection .go reveal via parent observer.

FAQ: .rbn.pw-faq.pw-wrap contains section.pfaq. Its source header is .cat-section__head with .cat-section__title, .cat-section__blurb and .cat-section__count. The list is .pfaq__list, native details.pfaq__item > summary.pfaq__q with .pfaq__pm, and answer p.pfaq__a. These are the actual source names; do not create a two-column new layout. Preserve existing honest 7 questions/answers for simulated demos, actual MT5 licensing, purchase request, privacy, capital risk, support. No refund/source/lifetime claims.

Keyboard focus visible, semantic headings without invalid nested controls, modal trigger aria-haspopup and expanded handled existing export. Targeted tsc on own files after dependencies ready, return changed files/remaining integration notes.

