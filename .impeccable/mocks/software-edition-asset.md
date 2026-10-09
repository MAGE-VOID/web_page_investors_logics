# Blue Boost Bot — software edition asset

Produced with the built-in image_gen tool. The asset-producer role ran as a delegated sub-agent; no inline-role fallback was required.

## Produce

### blue-boost-edition

- source_crop: `.impeccable/mocks/software-edition-compositions.png`, center composition **B**, upper hero software box.
- output_path: `public/images/blue-boost-edition.webp`.
- strategy: faithful clean-plate regeneration of the approved box, then one framing-only imagegen revision.
- dimensions: 1536 × 1024.
- format: WebP, quality 88, effort 5.
- bytes: 67,904.
- transparency: none; opaque ink-navy studio setting requested.
- qa_status: accepted.
- visual QA: opened the reference, generated PNG and both final WebP files. Full box is visible; navy matte finish, silver curves, left-spine perspective and studio contact shadow retained. “BLUE BOOST BOT”, “INVESTORS LOGICS”, “MetaTrader 5”, “Expert Advisor” and “.ex5” are legible. No website chrome, prices, buttons, data claims, charts or watermarks.
- deviations: box occupies approximately 64% of canvas height after the framing revision, slightly less than the approximate 70% target. Fine texture and curve spacing are regenerated, not pixel-identical to the low-resolution reference. Small footer copy intentionally follows the parent brief (“MetaTrader 5 / Expert Advisor”) rather than the mock's “Forex automation” wording. No functional UI has been reviewed.

### blue-boost-edition-640

- source_crop: final production PNG listed below.
- output_path: `public/images/blue-boost-edition-640.webp`.
- strategy: format conversion and proportional resize only, using the bundled sharp library through Node; no processes or raster retouching.
- dimensions: 640 × 427.
- format: WebP, quality 86, effort 5.
- bytes: 11,616.
- transparency: none.
- deviations: proportional scaling rounds the height to 427 pixels.
- qa_status: accepted.
- visual QA: opened final WebP; complete silhouette and main mark remain clear. The small packaging footer should not carry essential website information.

## Direct

No reference crop is shipped directly. The composition sheet is not suitable as a production-resolution image.

## Semantic

### hero-content-and-frame

- implementation: parent owns the React hero section, semantic h1, explanatory paragraph, anchor CTA, licensing links and image figure. Use a responsive img or picture with the 640w and 1536w source candidates. CSS owns layout, dimensions, responsive cropping, gaps, background transition and any clipping. The image is opaque and includes only its intrinsic studio floor and contact shadow.
- notes: preserve the rendered object’s original perspective; do not add a second CSS perspective. A portrait or square viewport can use centered object-fit cover to remove the wide horizontal margins without cutting the box. The complete object lies approximately between x=34%–65% and y=18%–82% of the original canvas. Do not imply a physical shipment: this is artwork representing downloadable .ex5 software.
- qa_status: needs_parent_review (integration belongs to parent; no TSX/CSS was changed).

## Preserved sources

Original generated PNGs remain untouched:

- Initial generation: `C:/Users/gonza/.codex/generated_images/01a0c114-7075-77a1-a973-44d5f16f70f4/exec-55b5bd30-735e-42ca-b100-67738e3fff17.png`.
- Selected final PNG: `C:/Users/gonza/.codex/generated_images/01a0c114-7075-77a1-a973-44d5f16f70f4/exec-eaecae1b-8185-40ce-a3b8-9795fe87d60a.png` (1536 × 1024, 1,805,530 bytes).

## Prompt used

### Initial production generation

```text
Use case: product-mockup.
Asset type: reusable production art for the Blue Boost Bot website, not a UI screenshot.
Input image: approved website composition sheet. The MIDDLE composition labelled B is the ONLY binding visual reference. Its matte navy software box is the edit target; other columns and all website UI are excluded.
Primary request: faithfully regenerate ONLY the software box from the upper hero of B as a clean studio product asset at 1536 x 1024, with the whole box centered and occupying about 70% of the image height. The source image is a low-resolution reference, so redraw the object sharply at production resolution rather than cropping its pixels.
Preserve the B box design: upright tall rectangular software edition box, left spine visible in a modest three-quarter view, matte ink navy #101923, finely grained surface, silver foil lettering, five or six thin smoothly ascending parallel silver curves across the lower half, precise edges. Preserve the silhouette, palette, camera angle and restrained steel-blue studio lighting. It is digital software product art, not a promise of physical delivery.
Scene/backdrop: simple seamless dark ink navy #101923 studio floor and backdrop with generous empty space, soft realistic contact shadow belonging to the box. No glow, no halo, no bright horizon, no additional props.
Text on the box only, rendered clearly and verbatim: main front title on two lines "BLUE" then "BOOST BOT"; left spine "INVESTORS LOGICS"; small front footer "MetaTrader 5" and "Expert Advisor"; bottom-right ".ex5". Keep the same restrained typographic placement as B. No other text.
Remove all UI text, navigation, buttons, prices, numbers, captions, card borders, page columns and the letters A/B/C. No charts, performance claims, watermarks, extra objects, decorative scenery, isolated light beams, gradient haze, or rounded framing. Return one polished opaque image.
```

### Framing revision

```text
Use case: precise-object-edit.
Input image: the approved Blue Boost Bot software product art.
Change only framing: make the entire unchanged box approximately 15% smaller within the same 1536 x 1024 canvas, so the box occupies 70-72% of the total image height rather than 84%. Keep it horizontally centered on the same matte dark #101923 studio background, grounded with the same kind of soft contact shadow. Add only matching empty studio background around it.
Preserve EXACTLY the box design, geometry, silhouette, perspective with left spine, typography and existing text, silver curves, navy fine grain material, color palette, steel-blue lighting, and realistic floor. Do not redraw the text, alter the logo wording, add props, UI, gradients, glows, prices or captions. Entire box visible, output is opaque.
Return only the full clean production raster.
```

## Execution order

1. Read imagegen and asset-producer instructions.
2. Inspect the approved composition sheet.
3. Generate the isolated software-edition artwork with built-in imagegen.
4. Inspect and revise framing once with built-in imagegen.
5. Convert to WebP and resize a responsive variant with bundled sharp; preserve original PNGs.
6. Visually inspect each shipped asset and record this handoff.

## Blockers

None for asset production. Website rendering and integration were not performed by this role.

## Assumptions

- Composition B is selected under the parent's delegated art direction.
- Packaging marks are intrinsic product artwork; website copy and interaction remain semantic.
- No terminal, shell, browser, server, port, build or test was used.

