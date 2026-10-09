# Modal, sticky navigation and dock build contract

Owner: interactions builder only. ProductModal.tsx, CategoryNav.tsx, FloatingCTA.tsx, CheckoutButton.tsx if needed; can remove their old CSSModule imports but do not edit global CSS or other files.

Read source reference/proea/proea.html and both CSS. Main ports CSS exactly. Use actual pw-spot/pw-sp*/pw-jump/pw-dock names and root .pv.pw. Content remains Investors Logics/data/products.ts.

Modal: retain existing events investors:open-product detail {productId,trigger}, investors:product-dialog detail {open,productId}. Keep exported ProductModalTrigger accepting productId/className/children. Can add trigger .pw-card raw classes without own module, supports whole card. Native dialog classpw-spot widthmin1240minus24/max100dvhminus24/radius26; .pw-sp padding24/26/20 gap20. .pw-sp-main 1fr340px gap22/26 <=940onecolumn. Dialog overflowauto; no invented flex scrollArea restricting canvas.

Canvas source top toolbar title/status, 420px below; <=700300px. .pw-sp-canvas dark22 radius/shadow. Existing ProductDemoCanvas has correct enhancement API: type,status,seed,label,progress,playing,onProgress,className. Source-accurate wrapper heights and own type-aware legend. Canvas accessible static alternative. Native range visual scrubber track4px handle16; button44roundblack; replay/another sample ghost; 3 step panel + Colour key + demonstration boundary + sample ticket + two enquiry CTAs. Previous/next tool controls at end. No actual payment button or false availabilities.

Mobile<=700 sheet bottom/fill width max100dvh,22px upperradius; bottom action area fixed with two columns safe-area; bodypadding accounts measured buyheight (ResizeObserver). Escape/backdrop/close restore focus and body scroll; no onclose race regression. Aria controls/pressed/expanded and focus3px.

CategoryNav .pw-jump with .pw-jump-inner.pw-wrap, links .pw-jump-a with original line icon, label,count. Count existing data. Source outer60/inner58. Sticky initially top82px, when hero passed foldtrue topmaxbanner/safearea; set header dataset.shFold and nav dataset.fold via IO, cleanup header on unmount. Active by IO anchored sections, not filtering. Purchase final pill .pw-jump-buy/sample $99; Pause films button .pw-ghost, aria-pressed, dispatch investors:films-pause detail {paused}. Root can data-pause=paused to stop source CSS reveals.

Dock .pw-dock fixeddesktop500/right24/bottom12/pad8 8 8 18; mobileleft/right12 safearea. .pw-dock-copy/name/sub + .pw-buy button. IO show after hero leaves above, hide when pricing or final .pw-close intersects or dialog opens. aria-hidden/inert when hidden, not tabbable. Real anchor goes#pricing. No SaaS widget.

Keep no continuous scroll listeners. IntersectionObserver root margins based actual nav/viewport height; native anchors reliable. Reduced motion fallback. Main handles shared ProductDemoCanvas wrapper/engine changes, tell main necessary hooks, do not edit those files. Run focused tsc when deps ready.

