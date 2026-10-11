---
name: Manuel Gonzales Espinosa engineering portfolio
description: Route-local graphite and amber portfolio system derived from the shipped /cv implementation.
colors:
  cv-background: "#0a0a0c"
  cv-surface: "#0f0f12"
  cv-surface-2: "#141418"
  cv-border: "#1f1f25"
  cv-border-strong: "#2a2a32"
  cv-foreground: "#e8e8ea"
  cv-muted: "#8b8b94"
  cv-muted-2: "#5f5f68"
  cv-accent: "#e8b14f"
  cv-accent-soft: "#e8b14f1f"
  cv-accent-glow: "#e8b14f59"
  cv-success: "#34d399"
typography:
  display:
    fontFamily: '"CV Geist", Arial, sans-serif'
    fontSize: "clamp(2.5rem, 7vw, 6.5rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-.02em"
  headline:
    fontFamily: '"CV Geist", Arial, sans-serif'
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-.025em"
  headline-wide:
    fontFamily: '"CV Geist", Arial, sans-serif'
    fontSize: "3rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-.025em"
  body:
    fontFamily: '"CV Geist", Arial, sans-serif'
    fontSize: "16px"
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: '"CV Geist Mono", monospace'
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: ".22em"
rounded:
  tag: "6px"
  control: "8px"
  inset: "12px"
  frame: "16px"
  pill: "999px"
spacing:
  compact: "8px"
  related: "12px"
  group: "16px"
  detail: "20px"
  inset: "24px"
  card: "32px"
  wide: "40px"
  section: "7rem"
  section-wide: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.cv-accent}"
    textColor: "{colors.cv-background}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-secondary:
    textColor: "{colors.cv-foreground}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  tag:
    textColor: "{colors.cv-muted}"
    rounded: "{rounded.tag}"
    padding: "3px 9px"
  role-card:
    backgroundColor: "rgb(15 15 18 / .7)"
    textColor: "{colors.cv-foreground}"
    rounded: "{rounded.frame}"
    padding: "32px"
  technical-frame:
    backgroundColor: "{colors.cv-surface}"
    rounded: "{rounded.frame}"
    width: "100%"
  layer-node:
    backgroundColor: "{colors.cv-surface}"
    textColor: "{colors.cv-muted}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
    width: "100%"
  layer-node-active:
    backgroundColor: "{colors.cv-accent-soft}"
    textColor: "{colors.cv-foreground}"
    rounded: "{rounded.control}"
  dialog:
    backgroundColor: "{colors.cv-background}"
    textColor: "{colors.cv-foreground}"
    rounded: "{rounded.frame}"
    padding: "32px"
    width: "min(960px, calc(100% - 32px))"
---

# Design System: Manuel Gonzales Espinosa engineering portfolio

## Overview

**Creative North Star: "The Reference Engineering Portfolio"**

The user-selected archived Chaitanya Deshpande portfolio supplies the visual authority: near-black graphite, restrained amber signals, Geist lettering and technical frames. The shipped code, not the archived intent, determines the rules below. Spacious editorial sections balance dense engineering evidence.

This system applies only to `app/cv/` and `/cv`. The root design contract and `/home` remain independent. The selected visual world is preserved, while the Spanish content presents Manuel Gonzales Espinosa's supplied CV. Source-author claims and portrait have been replaced; the original portrait frame now contains an MG monogram until the user provides a photo. This document records source-level implementation evidence, not browser or screenshot validation.

**Key Characteristics:**

- Graphite tonal surfaces and hairline boundaries.
- Large sans headlines paired with compact monospaced metadata.
- Amber emphasis, diagram flow and interaction states.
- Progressive motion over ordinary visible content.
- Route-local identity, Spanish copy and facts from Manuel's supplied CV.

## Colors

Warm amber distinguishes meaningful signals from a cool, almost-black neutral field.

### Primary

- **Amber signal:** `cv-accent` marks the primary action, hero emphasis, eyebrows, active navigation, numeric evidence and diagram flow. `cv-accent-soft` supplies translucent fills; `cv-accent-glow` supplies small state glows.

### Secondary

- **Technical green:** `cv-success` is a semantic technical status, used for completed workflow nodes and conceptual state annotations, not a competing promotional accent or a claim of measured results.

### Neutral

- **Graphite ground:** `cv-background` is the page, code and inset ground; `cv-surface` and `cv-surface-2` build progressively raised tonal regions and nodes.
- **Hairline and strong boundary:** `cv-border` divides ordinary content; `cv-border-strong` strengthens frames and selected surfaces.
- **Light foreground:** `cv-foreground` carries headings and primary reading. `cv-muted` carries prose and secondary links. `cv-muted-2` is subordinate technical annotation, not the default for explanatory copy or provenance.

**The Signal Rule.** Amber identifies emphasis, actions and system state; graphite remains the default field.

## Typography

**Display and body:** locally bundled variable CV Geist with Arial/sans fallback. **Metadata and code:** CV Geist Mono with monospace fallback. The page enables `ss01` and `cv11` font features. Default headings use medium weight, tight tracking and balanced wrapping.

- **Display:** frontmatter `display`; three clipped hero lines, muted supporting line and italic amber rotating phrase. At widths up to (479px), the size is fixed at (2.5rem).
- **Headline:** frontmatter `headline`, changing to `headline-wide` from (640px). Section descriptions grow from (16px) to (18px).
- **Titles:** role cards use (22px); project titles (28px), then (32px) from (640px); timeline roles (25px). These contextual sizes are not one universal title token.
- **Body:** frontmatter `body`; cards and evidence use smaller (14–15px) text with comfortable leading. Hero/contact introductions are (18px); common prose measures are (34–38rem).
- **Label:** frontmatter `label`, uppercase; smaller technical labels and tags use (8–11px) with context-specific tracking. Metrics use mono and tabular numbers.

**The Two Voices Rule.** Sans explains the person and decisions; mono carries evidence, code, indices and metadata.

## Layout

The full-width centered container is capped at (72rem), with lateral padding (1.5rem), increasing to (2.5rem) from (640px). Standard sections use frontmatter `section`/`section-wide` padding. Heading blocks cap at (48rem) and usually leave (4rem) below them. The fixed navigation is (64px); anchor offsets use (84px).

The hero uses a (100svh) minimum, a (4rem) navigation allowance, clipped title lines and a radial-masked (64px) grid. Its identity is visible independently of reveal animation. Actions stack initially and become a row from (640px).

- **Up to 479px:** smaller hero/support text, (24px) role/source padding, (80px) project gaps and tighter dialog margins; minor diagram status annotations are hidden, not required content.
- **From 640px:** larger section type/padding, three signal columns, two credential columns, three profile-detail columns, command trigger and contact navigation action.
- **From 768px:** desktop navigation replaces the mobile menu; role cards become two columns; timeline and skills acquire metadata columns. Popup content pairs the diagram and technical decisions in a (1.1fr/1fr) grid, with a four-stage flow and a matching controls/stack grid inside one scrolling overlay.
- **From 1024px:** six signal columns, section rail, alternating project rows using (1.15fr/1fr) columns and a (56px) gap, paired source panel and a (5fr/7fr) portrait/profile composition.
- **Document workflow only:** scroll-linked desktop mode requires width at least (1024px) and height at least (701px). Its region is (660vh), with the narrative heading outside the sticky pane; the pane sticks below navigation at (64px). A “Ver todas las etapas” toggle switches to the complete connected reading view, removes the long fixed region and unpins the pane. Heights (701–1000px) use compact diagram/detail spacing with controls at least (44px) high. Pinning additionally requires the complete interactive panel to fit below the navigation: otherwise the panel follows ordinary page flow with manual step controls and the complete-reading option. At heights up to (700px), smaller widths, reduced motion or print, all eight steps are ordinary document-flow blocks. The existing tenancy-named CSS classes remain internal implementation names.

## Elevation & Depth

Depth is primarily tonal: hairline borders, dark nested surfaces, a low-opacity grid and amber atmospheric halos. Role cards and the portrait may tilt only for fine hover-capable pointers. The primary action and active dots have bounded amber glows; broad panels do not receive generic drop shadows.

The mobile menu alone uses a structural shadow (`0 24px 48px #0005`); dialogs use a stronger modal shadow (`0 32px 100px #0009`) and a dark backdrop with (8px) blur. Navigation transparency, border and blur progressively resolve over the first (80px) of scrolling, ending at (.72) background opacity and (12px) blur.

**The Tonal Frame Rule.** Ordinary panels separate through surface tone and hairlines; strong shadows identify overlays, not every card.

## Shapes

Frames, portrait and dialogs use the frontmatter `frame` radius. Nested code panels use `inset`; controls and command options use `control`; mono tags use `tag`. Hero actions and availability badges use `pill`. Technical nodes remain restrained rounded rectangles linked by fine paths; status points remain circles. Amber left rules mark proof and quoted engineering notes.

## Components

### Actions and tags

Primary actions are amber pills with dark medium-weight text; secondary actions match their height and padding but use a hairline border. Hover adds a soft primary glow or amber secondary border/text; arrow glyphs shift subtly. Text actions remain text, usually with a (44px) minimum height. Tags are compact mono bordered labels, not fabricated filter controls.

### Cards and technical frames

Role cards use translucent graphite, a hairline frame and a small amber icon inset. Pointer-local glow and tilt are enhancement only. Diagram/code/portrait frames share technical toolbars, neutral window dots and restrained annotation; authored diagrams are explanatory visuals, not proof of live infrastructure.

### Featured project graphics

Each project uses a logical architecture schematic inside the original technical frame and (560 × 350) viewBox. The user rejected the large artifact illustrations and requested more technical, professional schematics with slightly smaller internal content. No document mockups, synthetic screenshots or oversized state panels remain. The documentary diagram shows input, OCR extraction, an external OpenAI API analysis, Pydantic validation and controlled delivery, grouped around the asynchronous backend. The vision diagram separates offline dataset preparation, training and validation from application inference, with an explicit model handoff after validation. The desktop diagram groups reconciliation and persisted state, with current-data and disconnected recovery paths leading to the same consultation view. These are logical responsibility maps, not deployments or exact client implementation topologies.

The diagrams map Diagram Design's paper, ink, muted, rule and accent roles to this surface's existing graphite, foreground, muted, border and amber tokens. Impeccable's refinement remains scoped to these visuals. Human-readable node labels use (12px) medium/bold Geist Sans; library names, phase labels and compact relationship annotations use (12px) Geist Mono. Nodes are (64px) high with (4px) radii, distinct input/external/state/output treatments and small logical interface anchors. Ingress modules are at least (112px) wide. Native HTML inside SVG foreignObject provides a bounded text area, (12px) lateral inset, explicit leading, (4px) title/metadata gap and normal text wrapping instead of unbounded SVG text. The toolbar filename and footer also wrap rather than overflowing or being ellipsized. The overall content still starts at (44px). One focal module per diagram receives a restrained amber outline; there are no dotted backgrounds, glows, fake values or decorative document bars. Solid paths convey the main flow; dashed paths identify a response, model handoff or recovery path. Off-axis routes use rounded right-angle elbows. Relationship labels sit (8px) above their connector and clear every node. Node ports, group boundaries and routes follow the increased text inset height; labels never mask a node.

At frame widths of (440px) or less, a named CSS container query selects shorter ingress and training labels where needed and (16px) node names with (20px) leading. Technical metadata stays (12px) with (16px) leading. A redundant internal heading disappears while the stack remains visible. The schematic retains one stable SVG composition and the complete set of logical modules; there are no duplicated responsive graphs, runtime text measurement or resize listeners. This also covers narrow visual columns inside desktop case dialogs. One accessible title and description with instance-specific IDs explains the complete figure. No real document content, detections, confidence values, financial amounts, private APIs or storage protocols are invented.

At the user's request, decorative amber packets traverse every main and secondary connection rather than only one path. Five (1.6s) slots share an (8s) CSS loop, following the authored flow order; only one packet per figure moves at a time. Each packet has a faint, longer trailing stroke, aligned with its leading edge. A small ring at its destination port expands from (4px) to at most (8px) radius and fades as the packet arrives; arrival rings share the same phase and clock rather than running independent ambient loops. Four-connection figures keep the last packet slot quiet. Impeccable's motion refinement emphasizes transfer and receipt without moving nodes, text or connector geometry. Motion conveys direction, not live processing or changing results, and every static connector remains visible. The loops pause outside the viewport and when the document is hidden; reduced-motion and print modes omit packets, trails and arrival rings entirely. No animated semantic states, glow, particles, additional dependency or JS motion scheduler is needed. The shared graphics also appear in the case-study popup; its content, shell and layout are unchanged.

### Navigation and overlays

The fixed navigation uses muted links turning amber on hover/current state. Mobile links are full rows with section indices. The desktop rail exposes labels on hover and keyboard focus. Native dialogs support Escape/backdrop closing, body scroll locking and restoration of focus to the trigger. The command palette uses a transparent search field, tonal selected results, arrow-key selection and Enter activation; command shortcuts are Ctrl/⌘+K and, outside editable fields, `/` or `?`.

Projects retain their original alternating visual/text rows. Each project shows its conceptual diagram, title, brief purpose, compact technology tags and a case-study action. Rows use a (112px) gap, changing to (80px) below (479px); below (1024px), visual and information stack. There is no gallery selector, automatic carousel or chapter navigation.

The user clarified that the original portfolio design was preferred and that the request concerned the popup's content. Case dialogs therefore use the original (960px) maximum width, (16px) radius, backdrop and responsive padding, with one ordinary scrolling area. The existing conceptual diagram is capped at (480px); desktop pairs it with three concise technical contributions in a label/implementation definition list and one technical outcome. The header shows personal responsibility and technology tags. A connected four-stage ordered flow explains the project without paragraph-length step descriptions. It uses two columns on small screens and four from (768px); step numbers indicate processing order, not measured performance. The YOLO case explicitly describes the model's development and integration lifecycle rather than implying that training runs during every inference request.

A single native details element labelled “Ver tecnologías y controles” exposes a semantic point/treatment table and technology/function list. Expanded content is compact as well: no repeated architecture essays or workflow paragraphs. Longer supporting descriptions remain in the source data, while the popup uses a dedicated concise projection and the existing responsibility field. Every statement summarizes the supplied CV; no metrics, private implementation topology or new claims are introduced. The independent analysis panel and its native capabilities disclosure preserve their composition.

The current editorial refinement applies across /cv without changing CSS, layout, typography, motion or route boundaries. The three-line hero describes development of backend with AI, AWS services and vision, alongside system integration; it does not self-rate seniority. Six signals summarize documented work areas instead of counting employers and certifications. Project titles name contract analysis, screen-incident detection and movement reconciliation. Contributions use concise first-person statements and domain-specific labels. Technologies are grouped by use without proficiency adjectives or an ambiguous ecosystem hierarchy; the supplied technology set is preserved. Architecture notes explain implementation decisions rather than basic definitions. Documented job titles, employers, dates and credential names remain unchanged. University education is described without an unsupported completion status or degree claim. Authentication, authorization and structural validation use distinct terms; schema compliance is not presented as factual or legal accuracy.

### Experience and motion

The experience section keeps its original bare timeline, (25px) role titles, amber employer names and (64px) separation between jobs. Metadata stays in a (220px) column from (768px), with (40px) between columns. Dates, job titles, companies, credentials and overlapping collaborations preserve the supplied CV facts. Each job now has one context sentence and four concise first-person contributions, labelled by its actual technical responsibilities rather than generic achievement claims. Contributions use (14px) body copy and (13px) medium labels, with fine separators; labels sit above their explanation on mobile and in a (136px) column with (16px) gap from (768px). Both columns wrap. No new cards, carousel, proficiency score or concealed role details are introduced.

Impeccable's scoped motion refinement uses one entry sequence per role: its decorative (1px) rail traces downward over (900ms), a (21px) marker ring expands once and fades over (760ms), and its context/contributions settle by (8px) over (520ms), staggered by (50ms). Dates, employer names and role titles do not move, and no role is hidden before initialization. The rail guides reading only; it is not a career-completion indicator and the ring does not communicate live employment status. Native Web Animations and one local IntersectionObserver pause in-flight motion offscreen or when the document is hidden. Reduced motion and print cancel the sequence immediately; cleanup removes observers/listeners and cancels animations on unmount. Print suppresses both decorative rail overlays. The other CV animations and /home are unchanged.

### Document workflow and motion

The documentary workflow preserves eight stages, its pseudocode examples and interaction model. Impeccable's copy refinement explains documented contributions and technical criteria without changing the visual world: choose a phase, select a step, read its input/output contract, then its code and rationale. The phases are Acceso (reception and authorization), Procesamiento (orchestration through structural validation) and Salida (delivery and tracing). Tracing is explicitly cross-cutting; its final reading position does not imply that logging starts after delivery. Input/output labels summarize the existing public example, not real client schemas, protocols or deployments.

The original technical frame contains phase shortcuts and a vertical connected list. Each button pairs its human-readable name with compact responsibility metadata; wrapping and min-width constraints replace unbounded text. Amber marks the selected step. Earlier steps use a small green check to indicate position in the conceptual reading sequence, not a successful live execution. One small signal traverses the connector after the selected step; it pauses offscreen and under the shared hidden-document motion state, and is omitted under reduced motion or print.

The detail column uses compact phase/step metadata, a prominent title, a concise explanation, an input → output definition pair, a numbered pseudocode line and a technical criterion. All long code and contract values wrap. The previous/next buttons have real disabled endpoint states; phase and step buttons control the same article. ArrowUp/ArrowDown/Home/End move between step buttons without a page jump. Explicit selections and view changes receive a polite announcement; automatic scrolling does not repeatedly announce steps. “Reanudar recorrido” restores automatic tracking after manual exploration.

Progress represents the selected stage, scales by transform and exposes accessible progressbar semantics. Impeccable's interaction-hardening pass aligns explicit selections with the corresponding band in the real scroll range; continuing native scrolling therefore never remains locked behind a separate manual index. Step navigation aims inside a band rather than at a rounding-sensitive boundary, using an instant position change within the already pinned surface and the existing discreet detail transition. Manual-only exploration remains available when the whole panel cannot fit below the navigation, without clipping or nested scrolling.

Scroll tracking starts when the pane reaches the navigation, not while the introductory heading is visible. Its live bounds use the heading's natural bottom and the sticky pane's actual height, rather than a cached absolute offset or assumed viewport-height panel. This follows changes above the section as well as font loading. All eight desktop detail bodies share one CSS grid area, reserving the height of the longest stage so selection does not change the scroll denominator; only the active body is visible, accessible and interactive. Resize observers cover the heading, region and complete panel. Switching between full and interactive views preserves the heading's viewport anchor, and pin/unpin transitions preserve the visible panel and selected stage. Offscreen, hidden-document, full-reading, reduced-motion and print states detach scroll tracking. Observers/listeners/RAF clean up on unmount, and deferred font callbacks ignore disposed effects.

The full view and responsive fallback present all eight stages in one connected reading column, with readable body type, the same contract/code helpers and native “Decisión de diseño” disclosures for supporting notes. They do not use a carousel, another route or nested scrolling. Manual and complete views reuse the same public data; the other featured diagrams and popup retain their geometry, while /home is unchanged.

All content is visible without animation initialization. Reveal motion is once-per-entry (800ms), with hero lines (900ms), using `cubic-bezier(.16, 1, .3, 1)`. CSS state transitions are generally (200–400ms); detail/dialog entries are (450ms)/(350ms). Ambient hero and diagram loops pause offscreen; document-hidden motion pauses, and observers, animations, frames and listeners clean up on unmount. Reduced motion disables animations/transitions and pointer transforms and exposes all tenancy layers in flow. Print uses light paper/dark text and omits navigation, atmospheric layers and overlay controls.

**The Visible First Rule.** Motion enhances readable content; it never supplies the only path to essential information.

Keyboard focus is a (3px) amber outline with (5px) offset; command search uses (4px) offset. Keep focus visible rather than relying on hover or color alone.

## Do's and Don'ts

### Do:

- Do keep this system scoped to `/cv` and preserve the independent `/home` contract.
- Do preserve the selected visual system while keeping Manuel's identity and CV facts separate from the visual reference.
- Do pair sans explanations with mono metadata and use amber for meaningful signal.
- Do retain ordinary visible content, keyboard focus and all eight document-workflow steps in fallback modes.
- Do pause ambient loops offscreen and clean up route-local effects on unmount.

### Don't:

- Don't reintroduce the reference author's identity, portrait, career, metrics or availability into Manuel's CV.
- Don't use the dim annotation color as the default for explanatory copy or provenance.
- Don't require sticky scroll, hover or animation to read essential information.
- Don't introduce archived-only tokens, production runtime scripts or private bot information into this surface.
- Don't claim browser fidelity or visual validation from source inspection alone.
