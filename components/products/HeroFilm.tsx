import { memo, useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { HeroFilmHandle, HeroFilmOptions, HeroFilmTool } from "./heroFilmEngine";
import styles from "./HeroFilm.module.css";

interface HeroFilmProps {
  tools: HeroFilmTool[];
  price: number;
  individualTotal: number;
}

const chapters = [
  { label: "Find the context", caption: "A synthetic trace brings the context into view." },
  { label: "Define the routine", caption: "A defined sequence, illustrated without live orders." },
  { label: "Review the samples", caption: "Invented samples, organized for a closer review." },
  { label: "Plan the next step", caption: "A workspace for arranging a research routine." },
  { label: "All eight. Together", caption: "All eight, together: $99 example collection. Not for sale." },
] as const;
const scales = [50, 100, 250, 500] as const;

const CollectionPoster = memo(function CollectionPoster({ tools, price, individualTotal }: HeroFilmProps) {
  const difference = individualTotal - price;

  function artwork(compact: boolean) {
    const width = compact ? 360 : 1200;
    const height = compact ? 360 / 17 * 20 : 1200 / 2.3;
    const columns = compact ? 4 : 8;
    const pad = compact ? 24 : 126;
    const cell = (width - pad * 2) / columns;
    const posterId = compact ? "hero-poster-mobile" : "hero-poster-wide";
    const washes = [
      { x: .33, y: .45, rx: .51, ry: .65, color: "#ffae88", opacity: .045 },
      { x: .70, y: .32, rx: .57, ry: .66, color: "#8cc7f2", opacity: .065 },
      { x: .59, y: .61, rx: .44, ry: .60, color: "#d3a7ff", opacity: .045 },
      { x: .46, y: .81, rx: .47, ry: .44, color: "#8edcc0", opacity: .05 },
      { x: .15, y: .14, rx: .38, ry: .34, color: "#ffd27e", opacity: .025 },
    ];

    return (
      <svg className={`${styles.posterArt} ${compact ? styles.compact : styles.wide}`} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" focusable="false">
        <defs>
          {washes.map((wash, index) => (
            <radialGradient key={index} id={`${posterId}-wash-${index}`}>
              <stop stopColor={wash.color} stopOpacity={wash.opacity} />
              <stop offset=".5" stopColor={wash.color} stopOpacity={wash.opacity * .38} />
              <stop offset="1" stopColor={wash.color} stopOpacity="0" />
            </radialGradient>
          ))}
          <radialGradient id={`${posterId}-price-glow`}>
            <stop stopColor="#8edcc0" stopOpacity=".105" />
            <stop offset=".42" stopColor="#8edcc0" stopOpacity=".038" />
            <stop offset="1" stopColor="#8edcc0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width={width} height={height} fill="#0b1020" />
        {washes.map((wash, index) => <ellipse key={index} cx={width * wash.x} cy={height * wash.y} rx={width * wash.rx} ry={height * wash.ry} fill={`url(#${posterId}-wash-${index})`} />)}
        <ellipse cx={width / 2} cy={compact ? 350 : 401} rx={compact ? 138 : 180} ry={compact ? 82 : 98} fill={`url(#${posterId}-price-glow)`} />
        <g fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {tools.map((tool, index) => {
            const x = pad + cell * (index % columns + .5);
            const y = compact ? 84 + Math.floor(index / columns) * 62 : 116;
            return (
              <g key={tool.id}>
                <g transform={`translate(${x - 12} ${y - 12})`} stroke={tool.accent}>{tool.paths.map((path, pathIndex) => <path d={path} key={pathIndex} />)}</g>
                <text x={x} y={y + (compact ? 27 : 36)} fill="#d6dbe6" stroke="none" fontFamily="var(--pw-mono)" fontSize={compact ? 9.5 : 11.5} fontWeight="500" textAnchor="middle">{tool.name}</text>
              </g>
            );
          })}
        </g>
        <g fontFamily="var(--pw-sans)" textAnchor="middle" fill="#f2f5fb">
          {compact ? (
            <>
              <text x={width / 2} y="236" fontSize="31" fontWeight="800" letterSpacing="-1.2">All eight.</text>
              <text x={width / 2} y="271" fill="#8b97b0" fontSize="30" fontWeight="300" letterSpacing="-1.2">One collection.</text>
            </>
          ) : (
            <text x={width / 2} y="314" fontSize="48" letterSpacing="-1.8"><tspan fontWeight="800">All eight. </tspan><tspan fontWeight="300" fill="#8b97b0">One collection.</tspan></text>
          )}
          <text x={width / 2} y={compact ? 379 : 440} fontWeight="300" fontSize={compact ? 76 : 104} letterSpacing={compact ? "-4" : "-5.5"}>${price}</text>
        </g>
        <g fontFamily="var(--pw-mono)" textAnchor="middle" fontWeight="500">
          <text x={width / 2} y={compact ? 309 : 350} fill="#8b97b0" fontSize={compact ? 13 : 18} textDecoration="line-through">${individualTotal}</text>
          <text x={width / 2} y={compact ? 405 : 476} fill="#3ef0c2" fontSize={compact ? 10 : 13}>${difference} example difference · sample prices</text>
        </g>
      </svg>
    );
  }

  return <div className={`pw-poster ${styles.poster}`} aria-hidden="true">{artwork(false)}{artwork(true)}</div>;
});

export default function HeroFilm({ tools, price, individualTotal }: HeroFilmProps) {
  const filmRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scaleRef = useRef<HTMLSpanElement>(null);
  const engineRef = useRef<HeroFilmHandle | null>(null);
  const interactedRef = useRef(false);
  const pausesRef = useRef({ globalPaused: false, dialogOpen: false });
  const [progress, setProgress] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [scale, setScale] = useState<number>(100);
  const [live, setLive] = useState(false);
  const [reduced, setReduced] = useState(false);
  const optionsRef = useRef<HeroFilmOptions>({ tools, price, individualTotal, progress, playing, scale });
  const chapter = Math.min(4, Math.floor(progress * 5));
  const caption = chapter === 4 ? `All eight, together: $${price} example collection. Not for sale.` : chapters[chapter].caption;

  useEffect(() => {
    optionsRef.current = {
      tools, price, individualTotal, progress, playing, scale,
      ...pausesRef.current,
      onProgress: value => {
        setProgress(value);
        if (value >= 1) setPlaying(false);
      },
    };
    engineRef.current?.update(optionsRef.current);
  }, [tools, price, individualTotal, progress, playing, scale]);

  useEffect(() => {
    const film = filmRef.current;
    const canvas = canvasRef.current;
    const root = film?.closest<HTMLElement>("[data-pw-hero-root]");
    if (!film || !canvas || !root) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cancelled = false;
    let loading = false;
    let mounted: HeroFilmHandle | null = null;

    const updateMotion = () => {
      setReduced(motion.matches);
      if (motion.matches) {
        setProgress(1);
        setPlaying(false);
      }
    };
    const pauseFilms = (event: Event) => {
      pausesRef.current.globalPaused = Boolean((event as CustomEvent<{ paused: boolean }>).detail?.paused);
      mounted?.update(pausesRef.current);
    };
    const pauseDialog = (event: Event) => {
      pausesRef.current.dialogOpen = Boolean((event as CustomEvent<{ open: boolean }>).detail?.open);
      mounted?.update(pausesRef.current);
    };
    updateMotion();
    motion.addEventListener("change", updateMotion);
    window.addEventListener("investors:films-pause", pauseFilms);
    window.addEventListener("investors:product-dialog", pauseDialog);

    async function loadFilm() {
      if (loading || cancelled) return;
      loading = true;
      try {
        const { mountHeroFilm } = await import("./heroFilmEngine");
        if (cancelled) return;
        const autoplay = !motion.matches && !interactedRef.current;
        const next = {
          ...optionsRef.current,
          ...pausesRef.current,
          progress: autoplay ? 0 : optionsRef.current.progress,
          playing: autoplay ? true : optionsRef.current.playing,
        };
        mounted = mountHeroFilm(canvas!, next);
        if (cancelled) { mounted.dispose(); return; }
        engineRef.current = mounted;
        root!.dataset.pwHeroLive = "";
        if (autoplay) { setProgress(0); setPlaying(true); }
        setLive(true);
      } catch {
        // The complete final composition stays visible if the engine cannot load.
        if (!cancelled) setLive(false);
      }
    }

    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        observer?.disconnect();
        void loadFilm();
      }
    }, { rootMargin: "160px" });
    if (observer) observer.observe(film);
    else void loadFilm();

    return () => {
      cancelled = true;
      observer?.disconnect();
      motion.removeEventListener("change", updateMotion);
      window.removeEventListener("investors:films-pause", pauseFilms);
      window.removeEventListener("investors:product-dialog", pauseDialog);
      mounted?.dispose();
      if (engineRef.current === mounted) engineRef.current = null;
      delete root.dataset.pwHeroLive;
    };
  }, []);

  function seekChapter(index: number) {
    interactedRef.current = true;
    setProgress(index === 4 ? 1 : index / 5);
    setPlaying(!reduced && index < 4);
  }

  function moveScale(event: KeyboardEvent<HTMLSpanElement>) {
    const index = scales.findIndex(value => value === scale);
    let next: number | undefined;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % scales.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + scales.length) % scales.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = scales.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setScale(scales[next]);
    scaleRef.current?.querySelectorAll<HTMLButtonElement>("button")[next]?.focus();
  }

  return (
    <div ref={filmRef} className="pw-h-film">
      <div className="pw-stage-wrap" data-pw-hwrap="" data-tone={chapter === 4 ? "suite" : chapter === 2 ? "loss" : "win"}>
        <div className="pw-aura" aria-hidden="true" />
        <div className="pw-cine">
          <canvas ref={canvasRef} width="1200" height="522" data-pw-hero="" role="img" aria-label={`An original five-chapter film: synthetic context, defined routine, invented samples, planning workspace and all eight research concepts. The $${price} collection, $${individualTotal} individual total and $${individualTotal - price} difference are sample prices, not an available offer or verified result.`}>Synthetic illustrations and sample pricing only. No live orders or private trading rules.</canvas>
          <CollectionPoster tools={tools} price={price} individualTotal={individualTotal} />
          <p className="pw-h-cap pw-h-cap--in in" data-pw-cap="" aria-live="polite" aria-atomic="true"><span className="n">{chapter + 1}</span><span className="t" key={chapter}>{caption}</span></p>
        </div>
      </div>
      <div className="pw-rail-row">
        <div className="pw-rail" data-pw-rail="" role="group" aria-label="Film chapters">
          {chapters.map((item, index) => (
            <button key={item.label} type="button" className="pw-seg" aria-label={`${index + 1}. ${item.label}`} aria-current={chapter === index ? "true" : undefined} aria-pressed={chapter === index} onClick={() => seekChapter(index)}>
              <i aria-hidden="true"><b style={{ transform: `scaleX(${Math.min(1, Math.max(0, progress * 5 - index))})` }} /></i>
              <span><em>{String(index + 1).padStart(2, "0")}</em> <u>{item.label}</u></span>
            </button>
          ))}
        </div>
        <button type="button" className="pw-ghost" data-pw-replay="" hidden={progress < 1} onClick={() => { interactedRef.current = true; setProgress(0); setPlaying(!reduced); }}>Replay <span aria-hidden="true">↺</span></button>
        <button type="button" className="pw-ghost" data-pw-pause="" aria-pressed={!playing} hidden={!live || progress >= 1} disabled={reduced} onClick={() => { interactedRef.current = true; setPlaying(value => !value); }}>{playing ? "Pause" : "Play"}</button>
      </div>
      <div className="pw-risk" role="radiogroup" aria-label="Example drawing scale, not a risk recommendation" data-pw-risk="hero">
        <span className="pw-risk-l" aria-hidden="true">Example scale</span>
        <span ref={scaleRef} className="pw-risk-opts" onKeyDown={moveScale}>{scales.map(value => <button key={value} type="button" role="radio" aria-checked={scale === value} tabIndex={scale === value ? 0 : -1} data-v={value} onClick={() => setScale(value)}>${value}</button>)}</span>
      </div>
      <p className="pw-quiet pw-h-fine">The eight tools and prices in this film are illustrative concepts, not available products. All sessions are synthetic; no private rules, live orders or promised returns.</p>
    </div>
  );
}
