# Hero / film build contract

Owner: hero builder only. Files ProductHero.tsx, HeroFilm.tsx, heroFilmEngine.ts, HeroFilm.module.css if strictly needed. Do not edit global CSS, data, cards, modal, nav.

Use exact provided pw-* classes and source markup. Main ports both CSS chunks unchanged. Read reference/proea/proea.html and source CSS for all rules before coding. Reference screenshot: reference/proea/screenshot.png.

Structure section#product-hero.pw-hero.pw-wrap > .pw-h-top with eyebrow, h1.pw-h1, .pw-h-side (thesis, actions, quiet), .pw-h-film. Confirmed source classes: .pw-stage-wrap[data-tone] > .pw-aura + .pw-cine > canvas, original .pw-poster + .pw-h-cap.pw-h-cap--in. Below .pw-rail-row > .pw-rail, five .pw-seg with i > b and span > em + u, Replay; .pw-risk / .pw-risk-opts hold four example presets; .pw-quiet.pw-h-fine is the fineprint. Names follow the source, not approximate aliases.

Desktop124px top >=1024, 92px base; <=60084px. Hero grid gap18/48; >=980 columns 1fr400px. H1 clamp44,4.6vw+14,92 800/.92 -.06em; secondary300 inksoft block only>=1040. Stage aspect2.3 and26radius; <=61917/20 and20radius. Caption top14 left18, not a new metadata bar. Mobile exact order eyebrow/headline/actions/film/thesis/quiet.

Own hero copy similar length: eyebrow Built for research & MetaTrader 5; heading Explore every tool + with intent. (secondary300). Side copy Explore the context. Shape a routine. Review the decisions. Eight concepts, one collection. CTA Collection · $99 and See each tool, quiet Illustrative catalogue · not for sale · bot licensing is separate. Never use ProEA claims/brand/names.

Five original scenes: context trace, defined routine, review samples, planning workspace, final collection. This is an original synthetic illustration, not a graph reproducing strategy. Final scene matches screenshot composition: top row 8 own pastel line icons/names; middle large two-weight collection headline; muted crossed individual example total402; large $99; mint example difference303 line. No promise of availability: accessible and visible fineprint says concepts/sample pricing/not for sale. No invented metrics.

Animation: dynamic import own renderer lazily, requestAnimationFrame 24/30fps, ResizeObserver, DPR max2/1.5M-pixel backing cap, IntersectionObserver, visibility and reduced-motion cleanup. SSR poster is final composition; autoplay starts at chapter1 when visible and takes25seconds, then persists final scene without a loop. Reduced motion uses the static final scene unless a chapter is manually selected. Global event investors:films-pause detail {paused:boolean} toggles all film playback; honor dialog event investors:product-dialog detail.open pause while open. Chapter buttons aria-current/pressed and scrub progress, Replay reset. 4 preset values $50/$100/$250/$500 are labelled Example scale, not risk recommendation; adjust drawing only, no real trades.

DOM poster should be complete final scene with static canvas fallback and textual alternative, avoids layout shift. Do not overlay generic synthetic caption badge at bottom of visual: source fineprint outside film is enough. Keep fonts own arrays from data/products.ts. Run targeted tsc after integration dependencies ready, report files changed.

