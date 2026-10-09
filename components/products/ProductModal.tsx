import { useCallback, useEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { categories, contactEmail, products, type Product } from "@/data/products";
import ProductDemoCanvas from "./ProductDemoCanvas";

const OPEN_EVENT = "investors:open-product";
const DIALOG_EVENT = "investors:product-dialog";
const DIALOG_ID = "pw-spot";

const demoKeys = {
  chart: [
    ["reference", "Reference / entry"],
    ["target", "Illustrative target"],
    ["stop", "Illustrative stop"],
  ],
  terminal: [
    ["data", "Example prompt"],
    ["reference", "Field labels"],
    ["values", "Sample values"],
    ["target", "No orders sent"],
  ],
  analysis: [
    ["target", "Mint sample cells"],
    ["data", "Blue sample cells"],
    ["lilac", "Lilac sample cells"],
    ["sand", "Sand sample cells"],
  ],
  workflow: [
    ["reference", "Process connection"],
    ["target", "Revealed stages"],
    ["stop", "Illustrative warning state"],
  ],
} as const;

const keyColors = {
  reference: "#8b97b0",
  target: "#3ef0c2",
  stop: "#f0506e",
  data: "#8cc7f2",
  values: "#d6dbe6",
  lilac: "#d3a7ff",
  sand: "#ffd27e",
} as const;

const stepDescriptions = [
  "An authored example, not a live market input.",
  "An illustrative process; private trading rules are not shown.",
  "A fictional output, not verified trading performance.",
];

interface OpenProductDetails {
  productId: string;
  trigger?: HTMLElement;
}

interface DialogDetails {
  open: boolean;
  productId?: string;
}

interface ProductModalTriggerProps {
  productId: string;
  className?: string;
  children: ReactNode;
  href?: string;
}

function sourceTone(tone: Product["tone"]) {
  return tone === "success" ? "win" : tone === "loss" ? "loss" : tone === "data" ? "map" : "skip";
}

/** Links retain a useful documentation destination without JavaScript. */
export function ProductModalTrigger({ productId, className, children, href }: ProductModalTriggerProps) {
  const [expanded, setExpanded] = useState(false);
  const item = products.find((product) => product.id === productId);

  useEffect(() => {
    const handleDialog = (event: Event) => {
      const detail = (event as CustomEvent<DialogDetails>).detail;
      setExpanded(Boolean(detail?.open && detail.productId === productId));
    };
    window.addEventListener(DIALOG_EVENT, handleDialog);
    return () => window.removeEventListener(DIALOG_EVENT, handleDialog);
  }, [productId]);

  const openProduct = (trigger: HTMLElement) => {
    window.dispatchEvent(new CustomEvent<OpenProductDetails>(OPEN_EVENT, {
      detail: { productId, trigger },
    }));
  };

  const attributes = {
    className,
    "aria-haspopup": "dialog" as const,
    "aria-controls": DIALOG_ID,
    "aria-expanded": expanded,
    "data-pw-card": href ? productId : undefined,
    "data-tone": item ? sourceTone(item.tone) : undefined,
  };

  if (href) {
    return (
      <a
        {...attributes}
        href={href}
        onClick={(event) => {
          if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          openProduct(event.currentTarget);
        }}
      >
        {children}
      </a>
    );
  }

  return <button {...attributes} type="button" onClick={(event) => openProduct(event.currentTarget)}>{children}</button>;
}

/** One native-dialog host serves the server-rendered catalogue. */
export default function ProductModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const buyRowRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const savedOverflow = useRef<string | null>(null);
  const opened = useRef(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [sessionKey, setSessionKey] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [seed, setSeed] = useState(4);
  const [alternate, setAlternate] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrubFocused, setScrubFocused] = useState(false);

  const restoreBody = useCallback(() => {
    if (savedOverflow.current === null) return;
    document.body.style.overflow = savedOverflow.current;
    savedOverflow.current = null;
  }, []);

  const finishClosing = useCallback(() => {
    // Ignore a queued close notification from a session that has already reopened.
    if (dialogRef.current?.open) return;
    setPlaying(false);
    setProduct(null);
    setScrubFocused(false);
    restoreBody();
    if (dialogRef.current) delete dialogRef.current.dataset.productDialogOpen;
    if (opened.current) {
      opened.current = false;
      window.dispatchEvent(new CustomEvent<DialogDetails>(DIALOG_EVENT, { detail: { open: false } }));
    }
    const target = previousFocus.current;
    previousFocus.current = null;
    if (target?.isConnected) target.focus({ preventScroll: true });
  }, [restoreBody]);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
    finishClosing();
  }, [finishClosing]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      setReducedMotion(media.matches);
      if (media.matches) setPlaying(false);
    };
    updateMotion();
    media.addEventListener("change", updateMotion);

    const handleOpen = (event: Event) => {
      const detail = (event as CustomEvent<OpenProductDetails>).detail;
      const nextProduct = products.find((item) => item.id === detail?.productId);
      if (!nextProduct) return;
      if (!opened.current) {
        previousFocus.current = detail.trigger instanceof HTMLElement
          ? detail.trigger
          : document.activeElement instanceof HTMLElement ? document.activeElement : null;
      }
      setProduct(nextProduct);
      setSessionKey((value) => value + 1);
      setSeed(4);
      setAlternate(false);
      setProgress(0);
      setPlaying(!media.matches);
    };
    window.addEventListener(OPEN_EVENT, handleOpen);
    const dialog = dialogRef.current;

    return () => {
      window.removeEventListener(OPEN_EVENT, handleOpen);
      media.removeEventListener("change", updateMotion);
      if (dialog?.open) dialog.close();
      restoreBody();
      if (opened.current) {
        opened.current = false;
        window.dispatchEvent(new CustomEvent<DialogDetails>(DIALOG_EVENT, { detail: { open: false } }));
      }
      if (previousFocus.current?.isConnected) previousFocus.current.focus({ preventScroll: true });
      previousFocus.current = null;
    };
  }, [restoreBody]);

  useEffect(() => {
    if (!product || !dialogRef.current) return;
    const dialog = dialogRef.current;
    if (!dialog.open) {
      savedOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      try {
        dialog.showModal();
      } catch {
        restoreBody();
        window.location.assign(product.href);
        return;
      }
      opened.current = true;
      dialog.dataset.productDialogOpen = "true";
    } else {
      dialog.scrollTo({ top: 0, behavior: "instant" });
    }
    closeRef.current?.focus({ preventScroll: true });
    window.dispatchEvent(new CustomEvent<DialogDetails>(DIALOG_EVENT, {
      detail: { open: true, productId: product.id },
    }));
  }, [product, sessionKey, restoreBody]);

  useEffect(() => {
    const dialog = dialogRef.current;
    const buyRow = buyRowRef.current;
    if (!product || !dialog || !buyRow) return;

    const priorHeight = dialog.style.getPropertyValue("--pw-buy-h");
    const measure = () => dialog.style.setProperty("--pw-buy-h", Math.ceil(buyRow.getBoundingClientRect().height) + "px");
    measure();
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);
    observer?.observe(buyRow);
    window.addEventListener("resize", measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
      if (priorHeight) dialog.style.setProperty("--pw-buy-h", priorHeight);
      else dialog.style.removeProperty("--pw-buy-h");
    };
  }, [product]);

  const handleProgress = useCallback((value: number) => {
    const next = Math.min(1, Math.max(0, value));
    setProgress(next);
    if (next >= 1) setPlaying(false);
  }, []);

  const selectProduct = (nextProduct: Product) => {
    setProduct(nextProduct);
    setSessionKey((value) => value + 1);
    setSeed(4);
    setAlternate(false);
    setProgress(0);
    setPlaying(!reducedMotion);
  };

  const handleBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      closeDialog();
    }
  };

  const status = product ? alternate ? product.tone === "loss" ? "neutral" : "loss" : product.tone : "neutral";
  const name = product ? [product.name, product.suffix].filter(Boolean).join(" ") : "";
  const category = categories.find((item) => item.id === product?.category);
  const colourKeys = demoKeys[product?.demoType ?? "chart"];
  const productIndex = products.findIndex((item) => item.id === product?.id);
  const stepThresholds = product ? product.flow.map((_, index) => index / Math.max(1, product.flow.length - 1)) : [];
  const phase = stepThresholds.reduce((current, threshold, index) => progress >= threshold ? index : current, 0);
  const position = Math.round(progress * 100);
  const enquiry = "mailto:" + contactEmail + "?subject=" + encodeURIComponent("Concept enquiry — " + name)
    + "&body=" + encodeURIComponent("I would like to ask about " + name + ". I understand this is an illustrative research concept, not an available product or a payment.");

  return (
    <dialog
      id={DIALOG_ID}
      ref={dialogRef}
      className="pw-spot"
      data-pw-spot=""
      data-film={product?.demoType === "chart" ? "chart" : "app"}
      aria-labelledby="pw-sp-name"
      aria-describedby="pw-sp-line"
      onClose={finishClosing}
      onCancel={(event) => { event.preventDefault(); closeDialog(); }}
      onClick={handleBackdrop}
    >
      {product && (
        <div className="pw-sp">
          <header className="pw-sp-head">
            <div>
              <span className="pw-label" id="pw-sp-group">{category?.label} · research concept</span>
              <h2 className="pw-sp-name" id="pw-sp-name">{product.name}{" "}<span>{product.suffix}</span></h2>
              <p className="pw-sp-line" id="pw-sp-line">{product.headline}</p>
            </div>
            <button ref={closeRef} type="button" className="pw-x" id="pw-sp-close" onClick={closeDialog} aria-label="Close product demonstration">×</button>
          </header>

          <div className="pw-sp-main">
            <div className="pw-sp-left">
              <div className="pw-stage-wrap" id="pw-sp-wrap" data-tone={sourceTone(status)}>
                <div className="pw-aura" aria-hidden="true" />
                <div className="pw-bigstage">
                  <div className="pw-st-head">
                    <div className="pw-st-label">
                      <b id="pw-sp-stname">{name}</b>
                      <span id="pw-sp-sim">SYNTHETIC SESSION · NO LIVE ORDERS</span>
                    </div>
                    <div className="pw-meter" aria-hidden="true">
                      <span className={"pw-odo word" + (progress >= 1 ? status === "loss" ? " neg" : status === "success" ? " pos" : "" : "")} id="pw-sp-odo">
                        {progress >= 1 ? "Complete" : playing ? "Exploring" : "Paused"}
                      </span>
                      <span className="pw-odo-sub" id="pw-sp-sub">{position}% revealed</span>
                    </div>
                  </div>
                  <div className="pw-sp-canvas">
                    <ProductDemoCanvas
                      type={product.demoType}
                      status={status}
                      seed={seed}
                      label={name + " — fictional research demonstration"}
                      progress={progress}
                      playing={playing}
                      onProgress={handleProgress}
                    />
                  </div>
                </div>
              </div>

              <div className="pw-scrub-row">
                <button
                  className="pw-round"
                  id="pw-sp-play"
                  type="button"
                  aria-label={playing ? "Pause synthetic session" : "Play synthetic session"}
                  aria-pressed={playing}
                  disabled={reducedMotion}
                  title={reducedMotion ? "Reduced motion is enabled. Explore manually with the slider." : undefined}
                  onClick={() => {
                    if (progress >= 1) setProgress(0);
                    setPlaying((value) => !value);
                  }}
                >
                  <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                    {playing ? <path d="M5 4h3v12H5V4Zm7 0h3v12h-3V4Z" /> : <path d="m6 3 11 7-11 7V3Z" />}
                  </svg>
                </button>
                <label
                  className="pw-scrub"
                  id="pw-sp-scrub"
                  style={{ outline: scrubFocused ? "3px solid var(--pw-ink)" : undefined, outlineOffset: "3px" }}
                >
                  <span className="pw-sr">Synthetic session progress</span>
                  <span className="pw-scrub-track" aria-hidden="true"><span className="pw-scrub-fill" id="pw-sp-fill" style={{ width: position + "%", display: "block" }} /></span>
                  <span id="pw-sp-marks" aria-hidden="true">
                    {product.flow.map((step, index) => {
                      const at = stepThresholds[index];
                      return <span key={step} className={"pw-scrub-mark" + (progress >= at ? " on" : "")} style={{ left: at * 100 + "%" }} data-tone={index === product.flow.length - 1 ? sourceTone(status) : undefined}>{index + 1}</span>;
                    })}
                  </span>
                  <span className="pw-scrub-head" id="pw-sp-head" style={{ left: position + "%" }} aria-hidden="true" />
                  <input
                    className="pw-scrub-input"
                    type="range"
                    min="0"
                    max="1000"
                    step="1"
                    value={Math.round(progress * 1000)}
                    aria-valuetext={position + " percent of the fictional session"}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", margin: 0, opacity: 0, cursor: "pointer" }}
                    onFocus={() => setScrubFocused(true)}
                    onBlur={() => setScrubFocused(false)}
                    onChange={(event) => {
                      setPlaying(false);
                      setProgress(event.currentTarget.valueAsNumber / 1000);
                    }}
                  />
                </label>
              </div>

              <p className="pw-wrong" id="pw-sp-wrong">
                {reducedMotion ? "Reduced motion: use the slider to explore each frame."
                  : alternate ? "An alternative fictional sample. No real market event or outcome is represented."
                    : product.demoResult + ". An authored session, not evidence of performance."}
              </p>
              <div className="pw-sp-ctrl">
                <button className="pw-ghost" type="button" id="pw-sp-replay" onClick={() => { setProgress(0); setPlaying(!reducedMotion); }}>Replay <span aria-hidden="true">↺</span></button>
                <button className="pw-ghost" type="button" id="pw-sp-another" onClick={() => {
                  setSeed((value) => value + 1);
                  setAlternate((value) => !value);
                  setProgress(0);
                  setPlaying(!reducedMotion);
                }}>Another sample <span aria-hidden="true">→</span></button>
              </div>
            </div>

            <aside className="pw-sp-side" aria-label="About this conceptual session">
              <ol className="pw-steps3" id="pw-sp-steps">
                {product.flow.map((step, index) => (
                  <li key={step} className={(index <= phase ? "on" : "") + (index === phase ? " now" : "")}>
                    <span className="pw-n" aria-hidden="true">{index + 1}</span>
                    <div><b>{step}</b><p>{stepDescriptions[index] ?? "An illustrative research step."}</p></div>
                  </li>
                ))}
              </ol>
              <section className="pw-panel" aria-labelledby="pw-sp-key-title">
                <h3 className="pw-label" id="pw-sp-key-title" style={{ margin: 0 }}>Colour key</h3>
                <ul className="pw-keylist" id="pw-sp-key">
                  {colourKeys.map(([key, label]) => <li key={key}><i style={{ "--sw": keyColors[key] } as CSSProperties} aria-hidden="true" />{label}</li>)}
                </ul>
              </section>
              <section className="pw-panel" aria-labelledby="pw-sp-boundary-title">
                <h3 className="pw-label" id="pw-sp-boundary-title" style={{ margin: 0 }}>Demonstration boundary</h3>
                <p className="pw-wait">{product.guards}</p>
              </section>
              <section className="pw-panel pw-ticket" aria-labelledby="pw-sp-ticket-h">
                <h3 className="pw-label" id="pw-sp-ticket-h" style={{ margin: 0 }}>Sample ticket</h3>
                <div id="pw-sp-ticket">
                  <dl>
                    <dt>Session</dt><dd>S-{seed.toString().padStart(4, "0")}</dd>
                    <dt>Mode</dt><dd>Simulation only</dd>
                    <dt>Live orders</dt><dd>None sent</dd>
                    <dt>Result</dt><dd>Not verified</dd>
                  </dl>
                </div>
              </section>
              <div className="pw-sp-buy">
                <div ref={buyRowRef} className="pw-buyrow">
                  <p className="pw-buyrow-need">This concept is not for sale.</p>
                  <div className="pw-buyrow-acts">
                    <a className="pw-buy" href={enquiry} onClick={closeDialog}><span>Ask about this concept</span><span aria-hidden="true">↗</span></a>
                    <a className="pw-ghost pw-ghost--buy" href="#license-options" onClick={closeDialog}>Blue Boost licenses <span aria-hidden="true">→</span></a>
                  </div>
                  <p className="pw-buyrow-fine">Enquiry only. Blue Boost Bot licensing is separate.</p>
                  <a className="pw-more pw-buyrow-more" href={product.href} onClick={closeDialog}>Read the introduction <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </aside>
          </div>

          <p className="pw-sr" id="pw-sp-status" role="status">{name} fictional demonstration. {alternate ? "Alternative sample." : ""}</p>
          <ul className="pw-chips-sp" id="pw-sp-chips">{product.chips.map((chip) => <li key={chip}>{chip}</li>)}</ul>
          <p className="pw-fine" id="pw-sp-fine">Original synthetic visuals. No live market data, orders, forecasts or verified returns. These research concepts are temporary design content, not available products.</p>
          <nav className="pw-sp-nav" aria-label="Other concept tools">
            <button type="button" id="pw-sp-prev" onClick={() => selectProduct(products[(productIndex + products.length - 1) % products.length])}><span aria-hidden="true">←</span> Previous</button>
            <span id="pw-sp-pos">{productIndex + 1} / {products.length}</span>
            <button type="button" id="pw-sp-next" onClick={() => selectProduct(products[(productIndex + 1) % products.length])}>Next <span aria-hidden="true">→</span></button>
          </nav>
        </div>
      )}
    </dialog>
  );
}
