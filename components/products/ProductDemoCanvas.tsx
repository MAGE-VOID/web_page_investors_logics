import { useEffect, useId, useRef, useState } from "react";
import type {
  DemoCanvasHandle,
  DemoCanvasOptions,
  DemoStatus,
  DemoType,
} from "./demoCanvasEngine";
import styles from "./ProductDemoCanvas.module.css";

export interface ProductDemoCanvasProps {
  type?: DemoType;
  status?: DemoStatus;
  seed?: number;
  label?: string;
  progress?: number;
  playing?: boolean;
  onProgress?: (value: number) => void;
  className?: string;
}

const posterSamples = [0.68, 0.64, 0.67, 0.58, 0.6, 0.53, 0.56, 0.49, 0.52, 0.46, 0.5, 0.43, 0.45, 0.39, 0.44, 0.36, 0.39, 0.31, 0.34, 0.27, 0.3, 0.24, 0.27, 0.2];

/** An authored first-paint visual, also retained when canvas cannot initialize. */
function DemoPoster({ type, status, gradientId, compact = false }: { type: DemoType; status: DemoStatus; gradientId: string; compact?: boolean }) {
  const color = status === "loss" ? "#f0506e" : status === "neutral" || status === "data" ? "#8cc7f2" : "#3ef0c2";
  const width = compact ? 440 : 920;
  const height = compact ? 260 : 420;
  const pad = compact ? 24 : 48;
  const top = compact ? 42 : 62;
  const plotHeight = compact ? 160 : 276;
  const values = posterSamples.map((value, index) => status === "loss" ? 0.38 + index * 0.02 + (value - 0.68) * 0.1 : status === "neutral" ? 0.54 + (value - 0.45) * 0.28 : value);
  const points = values.map((value, index) => `${pad + index / 23 * (width - pad * 2)},${top + value * plotHeight}`).join(" ");

  return (
    <svg className={[styles.poster, compact ? styles.posterCompact : styles.posterWide].join(" ")} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={color} stopOpacity=".13" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="#d6dbe6" strokeOpacity=".055" strokeWidth="1">
        {Array.from({ length: 5 }, (_, row) => <path key={row} d={`M${pad} ${top + row / 4 * plotHeight}H${width - pad}`} />)}
        {Array.from({ length: 7 }, (_, column) => <path key={column} d={`M${pad + column / 6 * (width - pad * 2)} ${top}V${top + plotHeight}`} />)}
      </g>
      {type === "chart" && (
        <>
          <path d={`M${pad} ${top + plotHeight * .25}H${width - pad}`} stroke="#3ef0c2" strokeOpacity=".35" strokeDasharray="4 6" />
          <path d={`M${pad} ${top + plotHeight * .62}H${width - pad}`} stroke="#8b97b0" strokeOpacity=".4" strokeDasharray="4 6" />
          <path d={`M${pad} ${top + plotHeight * .82}H${width - pad}`} stroke="#f0506e" strokeOpacity=".35" strokeDasharray="4 6" />
          <polygon points={`${pad},${top + plotHeight} ${points} ${width - pad},${top + plotHeight}`} fill={`url(#${gradientId})`} />
          <g strokeLinecap="round">
            {values.map((value, index) => {
              const x = pad + index / 23 * (width - pad * 2);
              const y = top + value * plotHeight;
              const previous = values[Math.max(0, index - 1)];
              const previousY = top + previous * plotHeight;
              const fill = value <= previous ? "#3ef0c2" : "#f0506e";
              return <g key={index} opacity=".62"><path d={`M${x} ${Math.min(y, previousY) - 6}V${Math.max(y, previousY) + 8}`} stroke={fill} /><rect x={x - (compact ? 2.5 : 4)} y={Math.min(y, previousY)} width={compact ? 5 : 8} height={Math.max(3, Math.abs(y - previousY))} rx="1" fill={fill} /></g>;
            })}
          </g>
          <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
          <g className={styles.posterText} fill="#8b97b0" fontSize={compact ? 13 : 11}>
            <text x={pad + 4} y={top + plotHeight * .25 - 8} fill="#3ef0c2">TARGET · EXAMPLE</text>
            <text x={pad + 4} y={top + plotHeight * .62 - 8}>ENTRY · EXAMPLE</text>
            <text x={pad + 4} y={top + plotHeight * .82 + 16} fill="#ff9fb2">STOP · EXAMPLE</text>
          </g>
        </>
      )}
      {type === "terminal" && (
        <g className={styles.posterText} fontSize={compact ? 14 : 16}>
          <text x={pad + 12} y={compact ? 78 : 96} fill="#8cc7f2">&gt; open illustrative_session</text>
          {[
            ["SOURCE", "synthetic observations"],
            ["INPUT", "example snapshot"],
            ["RULES", "private / not shown"],
            ["ORDERS", "none sent"],
            ["OUTPUT", "conceptual preview"],
          ].map(([key, value], index) => <g key={key}><text x={pad + 12} y={(compact ? 96 : 152) + index * (compact ? 31 : 40)} fill="#8b97b0">{key}</text><text x={compact ? 128 : 240} y={(compact ? 96 : 152) + index * (compact ? 31 : 40)} fill={index === 3 ? "#3ef0c2" : "#d6dbe6"}>{value}</text><path d={`M${pad + 12} ${(compact ? 106 : 166) + index * (compact ? 31 : 40)}H${width - pad}`} stroke="#d6dbe6" strokeOpacity=".065" /></g>)}
        </g>
      )}
      {type === "analysis" && (
        <g className={styles.posterText}>
          {["Sample A", "Sample B", "Sample C", "Sample D"].map((name, row) => <g key={name}><text x={pad + 4} y={(compact ? 80 : 121) + row * (compact ? 40 : 65)} fill="#8b97b0" fontSize={compact ? 14 : 13}>{compact ? name.slice(-1) : name}</text>{Array.from({ length: 5 }, (_, column) => <rect key={column} x={(compact ? 112 : 210) + column * (compact ? 60 : 129)} y={(compact ? 64 : 91) + row * (compact ? 40 : 65)} width={compact ? 50 : 109} height={compact ? 28 : 45} rx="6" fill={["#3ef0c2", "#8cc7f2", "#d3a7ff", "#ffd27e"][(row + column) % 4]} fillOpacity={0.12 + ((row * 3 + column) % 5) * 0.06} />)}</g>)}
          {!compact && <text x="212" y="374" fill="#8b97b0" fontSize="12">Synthetic samples · no market signal</text>}
        </g>
      )}
      {type === "workflow" && (
        <g className={styles.posterText}>
          <path d={compact ? "M52 88V200" : "M180 198H740"} stroke="#8b97b0" strokeOpacity=".28" strokeWidth="1.5" />
          {["Input", "Analysis", "Result"].map((name, index) => <g key={name}><circle cx={compact ? 52 : 180 + index * 280} cy={compact ? 88 + index * 56 : 198} r={compact ? 20 : 30} fill="#101a2c" stroke={index === 2 && status === "loss" ? "#f0506e" : "#3ef0c2"} strokeOpacity=".65" /><text x={compact ? 52 : 180 + index * 280} y={compact ? 93 + index * 56 : 204} fill="#d6dbe6" fontSize="15" textAnchor="middle">{String(index + 1).padStart(2, "0")}</text><text x={compact ? 96 : 180 + index * 280} y={compact ? 92 + index * 56 : 267} fill="#d6dbe6" fontSize="17" textAnchor={compact ? "start" : "middle"}>{name}</text>{!compact && <text x={180 + index * 280} y="294" fill="#8b97b0" fontSize="12" textAnchor="middle">{["Example snapshot", "Schematic criteria", "Illustrative outcome"][index]}</text>}</g>)}
        </g>
      )}
    </svg>
  );
}

/** Canvas is progressive enhancement, never the only representation of the demo. */
export default function ProductDemoCanvas({
  type = "chart",
  status = "success",
  seed = 1,
  label = "An original synthetic research visualization. No live market data, real orders or trading results are represented.",
  progress,
  playing,
  onProgress,
  className,
}: ProductDemoCanvasProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<DemoCanvasHandle | null>(null);
  const callbackRef = useRef(onProgress);
  const cardRef = useRef<HTMLElement | null>(null);
  const workflowStepsRef = useRef<HTMLElement[]>([]);
  const workflowPhaseRef = useRef(-1);
  const [ambientPaused, setAmbientPaused] = useState(false);
  const effectivePlaying = playing === undefined ? !ambientPaused : playing;
  const optionsRef = useRef<DemoCanvasOptions>({ type, status, seed, progress, playing });
  const [ready, setReady] = useState(false);
  const id = useId();
  const descriptionId = `${id}-description`;
  const gradientId = `${id.replace(/:/g, "")}-wash`;
  const depiction = type === "chart"
    ? status === "loss" ? "The red price illustration depicts a simulated stop condition."
      : status === "success" ? "The mint price illustration depicts a simulated target condition."
        : "The price trace is a synthetic reference pattern."
    : type === "analysis" ? "Pastel cells represent synthetic samples; their colors do not indicate returns or market signals."
      : type === "terminal" ? "A terminal-style example log shows sample inputs and outputs. No orders are sent."
        : "Connected nodes represent illustrative process stages, not trading results.";

  useEffect(() => {
    callbackRef.current = onProgress;
    optionsRef.current = { type, status, seed, progress, playing: effectivePlaying, onProgress: value => {
      if (cardRef.current) {
        if (value < 1) cardRef.current.dataset.playing = "true";
        else delete cardRef.current.dataset.playing;
        const steps = workflowStepsRef.current;
        const phase = Math.min(steps.length - 1, Math.floor(Math.min(1, Math.max(0, value)) * (steps.length - 1)));
        if (phase !== workflowPhaseRef.current) {
          workflowPhaseRef.current = phase;
          steps.forEach((step, index) => {
            step.classList.toggle("on", index <= phase);
            step.classList.toggle("now", index === phase);
          });
        }
      }
      callbackRef.current?.(value);
    } };
    engineRef.current?.update(optionsRef.current);
  }, [type, status, seed, progress, effectivePlaying, onProgress]);

  useEffect(() => {
    const card = hostRef.current?.closest<HTMLElement>(".pw-card") ?? null;
    cardRef.current = card;
    workflowStepsRef.current = card ? Array.from(card.querySelectorAll<HTMLElement>(".pw-flow > span")) : [];
    workflowPhaseRef.current = -1;
    let globalPaused = document.getElementById("pw-root")?.dataset.pause === "true";
    let modalOpen = Boolean(document.querySelector("dialog[open]"));
    const sync = () => setAmbientPaused(globalPaused || modalOpen);
    const pause = (event: Event) => { globalPaused = Boolean((event as CustomEvent<{ paused: boolean }>).detail?.paused); sync(); };
    const dialog = (event: Event) => { modalOpen = Boolean((event as CustomEvent<{ open: boolean }>).detail?.open); sync(); };
    const light = () => { if (card) card.dataset.lit = "true"; };
    const dim = () => { if (card && !card.matches(":hover, :focus-within")) delete card.dataset.lit; };
    sync();
    window.addEventListener("investors:films-pause", pause);
    window.addEventListener("investors:product-dialog", dialog);
    card?.addEventListener("pointerenter", light);
    card?.addEventListener("pointerleave", dim);
    card?.addEventListener("focusin", light);
    card?.addEventListener("focusout", dim);
    return () => {
      window.removeEventListener("investors:films-pause", pause);
      window.removeEventListener("investors:product-dialog", dialog);
      card?.removeEventListener("pointerenter", light);
      card?.removeEventListener("pointerleave", dim);
      card?.removeEventListener("focusin", light);
      card?.removeEventListener("focusout", dim);
      if (card) { delete card.dataset.lit; delete card.dataset.playing; }
      workflowStepsRef.current.forEach(step => step.classList.remove("on", "now"));
      workflowStepsRef.current = [];
      workflowPhaseRef.current = -1;
      cardRef.current = null;
    };
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    let cancelled = false;
    let loading = false;
    let mounted: DemoCanvasHandle | null = null;

    async function loadEngine() {
      if (loading || cancelled) return;
      loading = true;
      try {
        const { mountDemoCanvas } = await import("./demoCanvasEngine");
        if (cancelled) return;
        mounted = mountDemoCanvas(canvas!, optionsRef.current);
        if (cancelled) {
          mounted.dispose();
          return;
        }
        engineRef.current = mounted;
        setReady(true);
      } catch {
        // A complete SVG poster remains when the module or 2D context is unavailable.
        if (!cancelled) setReady(false);
      }
    }

    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer?.disconnect();
        void loadEngine();
      }
    }, { rootMargin: "180px" });
    if (observer) observer.observe(host);
    else void loadEngine();

    return () => {
      cancelled = true;
      observer?.disconnect();
      mounted?.dispose();
      if (engineRef.current === mounted) engineRef.current = null;
    };
  }, []);

  return (
    <div ref={hostRef} className={[styles.demo, className].filter(Boolean).join(" ")} data-ready={ready || undefined} data-demo-type={type} role="img" aria-labelledby={descriptionId}>
      <span id={descriptionId} className={styles.srOnly}>{label} {depiction} This is not performance evidence or a trading recommendation.</span>
      <DemoPoster type={type} status={status} gradientId={gradientId} />
      <DemoPoster type={type} status={status} gradientId={`${gradientId}-compact`} compact />
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
    </div>
  );
}
