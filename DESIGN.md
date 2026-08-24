---
name: "Investors Logics · Blue Boost Bot"
description: "A dark, engineered product launch page for evaluating time-limited Blue Boost Bot access."
source: "VoltAgent/awesome-design-md · BMW analysis, adapted for a software-only surface"
colors:
  canvas: "#0a1118"
  canvas-dark: "#071019"
  surface-1: "#121b24"
  surface-2: "#1a2631"
  ink: "#f5f7fa"
  ink-soft: "#d8e0e8"
  body: "#a5b0bb"
  muted: "#74818d"
  hairline: "#25313c"
  hairline-strong: "#3a4855"
  primary: "#1c69d4"
  primary-hover: "#4e8de5"
  primary-soft: "#132946"
  focus: "#8ab8ff"
  danger: "#dc2626"
typography:
  display:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 5.8vw, 5.8rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.7vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2.1vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.06em"
    textTransform: uppercase
rounded:
  none: "0px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "80px"
components:
  top-nav:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.ink-soft}"
    height: "64px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "14px 16px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "13px 16px"
    height: "48px"
  product-band:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "80px 0"
  fact-surface:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "24px"
  pricing-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "20px 0"
---

# Design System: Investors Logics · Blue Boost Bot

## Direction

This build uses the **BMW** entry from VoltAgent's `awesome-design-md` collection as a reference for measured premium engineering: dark navy bands, one confident blue action color, rectangular controls, strong display typography and rhythm built from contrast instead of decoration. The source is adapted for a software product, so vehicle photography and automotive marks are intentionally omitted.

The result should feel like a high-end product launch with an engineering handbook underneath it—not a SaaS dashboard and not a pricing-card wall. The offer remains honest: a compiled `.ex5` for MetaTrader 5 with time-limited access, not a promised financial result.

## Product story and organization

The homepage has four decisions only:

1. **What is it?** The hero states the file and platform beside one static fact surface.
2. **How do I evaluate it?** One review band combines the public facts and the three-step sequence.
3. **What stays in my control?** A single boundary band covers MT5, broker, capital, supervision and private strategy.
4. **Which term fits?** The access selector is the only conversion panel on the page.

Capabilities are not repeated in a separate section; facts belong beside the product and the deeper setup material belongs in documentation.

## Color rules

- **Canvas** (`canvas`) is a dark blue-black page field.
- **Canvas dark** (`canvas-dark`) owns the hero, request ticket header and footer bands.
- **Surface 1/2** group facts and selected rows. They are flat fields, not floating cards.
- **Ink** is bright white for headings; `ink-soft` and `body` carry readable copy; `muted` is metadata.
- **Engineering blue** (`primary`) marks primary actions, selected access and active wayfinding. `primary-hover` is the only hover shift.
- **Hairlines** separate rows. No gradient, glow, glass or decorative shadow is part of the system.
- **Danger** appears only for actual risk-critical errors.

## Typography

Barlow is the available stand-in for the source's display/body split. Headings are bold and calm with only slight negative tracking; body copy stays open and readable. Uppercase is reserved for compact labels and action controls, not paragraphs.

- **Display:** direct product identity, maximum 5.8rem, 1.02 line-height.
- **Headline:** route and section headings, maximum 3.5rem.
- **Title:** workflow and plan titles, bold but compact.
- **Body:** 65–75ch reading measure, 1.6 line-height.
- **Label:** small uppercase utility text; never use a decorative eyebrow above a heading.

## Layout and rhythm

The content width is capped at 90rem with a fluid gutter. Major bands use an 80px rhythm on wide screens, collapsing to 56px and then 48px. The hero is a full-width dark band. The review band is one continuous field with a fact rail and open sequence rows. The boundary band is a single explanatory split. The access selector is the only panel that asks for a decision.

Product and request routes reuse the same dark hero, flat comparison rows and rectangular blue controls. Documentation keeps a darker reading field, a precise sidebar and blue link wayfinding.

## Components

### Navigation

The header is a 64px dark band with plain links and one rectangular “Get access” action. Active links use a thin blue underline. Mobile uses a native disclosure with square geometry and the same navigation order.

### Product fact surface

The hero fact surface is a single dark bordered instrument with aligned rows for format, platform and access. It is static and text-based; no chart or product image is needed to understand the offer.

### Review band

Public facts sit above a three-step ordered list. The sequence numbers are meaningful because the visitor must make those decisions in order. No repeated icon cards or section eyebrow labels are used.

### Plans and handoff

30, 90 and 365 days are comparable rows with the 90-day option marked by a quiet blue edge. The request route shows the selected term, proposed price, email handoff and unconnected payment state. It never implies automated checkout or activation.

### Documentation

Documentation uses the same navy fields, hairlines, Barlow hierarchy and blue links. The sidebar is a stable reading index; active items use a small blue inset state.

## Interaction and accessibility

Focus rings use `focus`. Hover changes color or surface only. Disabled payment remains visibly disabled and explains why. Reduced motion removes transitions. The main content intentionally contains no product images, video or canvas.

## Do / do not

**Do:** use dark bands, one blue action color, flat rows, bold hierarchy, open spacing and a single conversion moment.

**Do not:** add performance promises, fake testimonials, live trading dashboards, charts, gradients, glow, glass, decorative eyebrows, repeated capability sections, pill-shaped CTAs or private strategy detail.
