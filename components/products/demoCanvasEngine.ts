export type DemoType = "chart" | "terminal" | "analysis" | "workflow";
export type DemoStatus = "success" | "loss" | "neutral" | "data";

export interface DemoCanvasOptions {
  type: DemoType;
  status: DemoStatus;
  seed: number;
  progress?: number;
  playing?: boolean;
  onProgress?: (value: number) => void;
}

export interface DemoCanvasHandle {
  update: (options: Partial<DemoCanvasOptions>) => void;
  dispose: () => void;
}

interface Candle {
  open: number;
  close: number;
  high: number;
  low: number;
}

const palette = {
  stage: "#0b1020",
  raised: "#10192b",
  ink: "#d6dbe6",
  muted: "#8b97b0",
  mint: "#3ef0c2",
  loss: "#f0506e",
  blue: "#8cc7f2",
  violet: "#d3a7ff",
  sand: "#ffd27e",
};
const mono = '"IBM Plex Mono", monospace';
const clamp = (value: number, low = 0, high = 1) => Math.min(high, Math.max(low, Number.isFinite(value) ? value : low));

// Graphic coordinates only: no market feed, EA configuration or private strategy.
function createSamples(seed: number, status: DemoStatus): Candle[] {
  const graphicSeed = Number.isFinite(seed) ? Math.trunc(seed) : 1;
  let state = (graphicSeed >>> 0) || 1;
  const random = () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
  const end = status === "loss" ? .86 : status === "neutral" || status === "data" ? .51 : .2;
  let previous = .62;
  return Array.from({ length: 46 }, (_, index) => {
    const phase = index / 45;
    const close = clamp(.62 + (end - .62) * phase + Math.sin(index * .8 + graphicSeed) * .04 + (random() - .5) * .045, .11, .9);
    const open = previous;
    previous = close;
    return {
      open,
      close,
      high: clamp(Math.min(open, close) - .014 - random() * .025, .06, .94),
      low: clamp(Math.max(open, close) + .014 + random() * .025, .06, .94),
    };
  });
}

/** Mount once; seeks and prop updates do not recreate observers or the RAF loop. */
export function mountDemoCanvas(canvas: HTMLCanvasElement, initial: DemoCanvasOptions): DemoCanvasHandle {
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) throw new Error("2D canvas is unavailable");
  const ctx = context;
  const host = canvas.parentElement ?? canvas;
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let options = { ...initial };
  let samples = createSamples(options.seed, options.status);
  let reduced = preference.matches;
  let position = clamp(options.progress ?? (reduced ? 1 : .16));
  let lastExternalProgress = options.progress;
  const emittedProgress: number[] = [];
  let disposed = false;
  let visible = typeof IntersectionObserver === "undefined";
  let width = 960;
  let height = 420;
  let raf = 0;
  let lastStep = 0;
  let lastPaint = 0;
  let lastNotification = 0;
  let hold = 0;

  function roundRect(x: number, y: number, w: number, h: number, radius: number, fill: string) {
    ctx.beginPath();
    ctx.roundRect(x, y, Math.max(0, w), Math.max(0, h), radius);
    ctx.fillStyle = fill;
    ctx.fill();
  }

  function text(value: string, x: number, y: number, color = palette.muted, size = 11, maxWidth = width) {
    ctx.font = `400 ${size}px ${mono}`;
    ctx.fillStyle = color;
    let fitted = value;
    while (fitted.length > 1 && ctx.measureText(fitted).width > maxWidth) fitted = fitted.slice(0, -1);
    if (fitted !== value && fitted.length > 2) fitted = `${fitted.slice(0, -2)}…`;
    ctx.fillText(fitted, x, y);
  }

  function rule(x1: number, y1: number, x2: number, y2: number, color: string, dashed = false) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.setLineDash(dashed ? [4, 6] : []);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  function drawChart() {
    const pad = width > 760 ? 44 : 20;
    const top = height > 320 ? 62 : 45;
    const bottom = height > 320 ? 60 : 43;
    const plotWidth = width - pad * 2;
    const plotHeight = Math.max(62, height - top - bottom);
    const y = (value: number) => top + value * plotHeight;
    const x = (index: number) => pad + index / (samples.length - 1) * plotWidth;
    const main = options.status === "loss" ? palette.loss : options.status === "success" ? palette.mint : palette.blue;

    for (let column = 0; column <= 6; column++) rule(pad + column / 6 * plotWidth, top, pad + column / 6 * plotWidth, top + plotHeight, "rgba(214,219,230,.045)");
    for (let row = 0; row <= 4; row++) rule(pad, top + row / 4 * plotHeight, width - pad, top + row / 4 * plotHeight, "rgba(214,219,230,.045)");
    rule(pad, y(.25), width - pad, y(.25), "rgba(62,240,194,.32)", true);
    rule(pad, y(.62), width - pad, y(.62), "rgba(139,151,176,.28)", true);
    rule(pad, y(.82), width - pad, y(.82), "rgba(240,80,110,.3)", true);
    const labelSize = width < 460 ? 9 : 10;
    text("TARGET · EXAMPLE", pad, y(.25) - 8, palette.mint, labelSize);
    text("ENTRY · EXAMPLE", pad, y(.62) - 8, palette.muted, labelSize);
    text("STOP · EXAMPLE", pad, y(.82) + 14, "#ff9fb2", labelSize);

    // The faint full trace makes a seek to zero meaningful rather than an empty box.
    ctx.beginPath();
    samples.forEach((sample, index) => index ? ctx.lineTo(x(index), y(sample.close)) : ctx.moveTo(x(index), y(sample.close)));
    ctx.strokeStyle = "rgba(139,151,176,.14)";
    ctx.lineWidth = 1;
    ctx.stroke();

    const cursor = position * (samples.length - 1);
    const count = Math.floor(cursor);
    const candleWidth = Math.max(2, Math.min(9, plotWidth / samples.length * .43));
    for (let index = 0; index <= count; index++) {
      const sample = samples[index];
      const color = sample.close <= sample.open ? palette.mint : palette.loss;
      ctx.globalAlpha = .5;
      rule(x(index), y(sample.high), x(index), y(sample.low), color);
      roundRect(x(index) - candleWidth / 2, y(Math.min(sample.open, sample.close)), candleWidth, Math.max(2, Math.abs(sample.open - sample.close) * plotHeight), 1, color);
    }
    ctx.globalAlpha = 1;
    const next = Math.min(count + 1, samples.length - 1);
    const blend = cursor - count;
    const cursorX = x(count) + (x(next) - x(count)) * blend;
    const cursorY = y(samples[count].close + (samples[next].close - samples[count].close) * blend);
    const wash = ctx.createLinearGradient(0, top, 0, top + plotHeight);
    wash.addColorStop(0, options.status === "loss" ? "rgba(240,80,110,.13)" : "rgba(62,240,194,.1)");
    wash.addColorStop(1, "rgba(11,16,32,0)");
    ctx.beginPath();
    ctx.moveTo(pad, top + plotHeight);
    samples.slice(0, count + 1).forEach((sample, index) => ctx.lineTo(x(index), y(sample.close)));
    ctx.lineTo(cursorX, cursorY);
    ctx.lineTo(cursorX, top + plotHeight);
    ctx.closePath();
    ctx.fillStyle = wash;
    ctx.fill();
    ctx.beginPath();
    samples.slice(0, count + 1).forEach((sample, index) => index ? ctx.lineTo(x(index), y(sample.close)) : ctx.moveTo(x(index), y(sample.close)));
    ctx.lineTo(cursorX, cursorY);
    ctx.strokeStyle = main;
    ctx.lineWidth = width > 760 ? 2.2 : 1.7;
    ctx.lineJoin = "round";
    ctx.stroke();
    rule(cursorX, top, cursorX, top + plotHeight, "rgba(214,219,230,.1)");
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, 3, 0, Math.PI * 2);
    ctx.fillStyle = main;
    ctx.fill();
    if (height > 320) {
      text("SCHEMATIC TIMELINE", pad, top + plotHeight + 30, palette.muted, 10);
      const progressText = `${Math.round(position * 100).toString().padStart(2, "0")}% REVEALED`;
      text(progressText, Math.max(pad, width - pad - 96), top + plotHeight + 30, palette.muted, 10);
    }
  }

  function drawTerminal() {
    const pad = width > 760 ? 48 : 22;
    const top = height > 320 ? 74 : 62;
    const fontSize = width < 400 ? 10 : width > 760 ? 14 : 12;
    const availableHeight = Math.max(90, height - top - 52);
    const rowHeight = Math.min(44, availableHeight / 6);
    const rows = [
      ["SOURCE", "synthetic observations"],
      ["INPUT", "example snapshot"],
      ["RULES", "private / not shown"],
      ["ORDERS", "none sent"],
      ["OUTPUT", "conceptual preview"],
    ];
    text("> open illustrative_session", pad, top, palette.blue, fontSize, width - pad * 2);
    const valueX = pad + (width < 440 ? 70 : 122);
    rows.forEach(([key, value], index) => {
      const revealed = position * 6 >= index + 1;
      const rowY = top + rowHeight * (index + 1);
      ctx.globalAlpha = revealed ? 1 : .26;
      text(key, pad, rowY, palette.muted, fontSize - 1);
      text(value, valueX, rowY, index === 3 ? palette.mint : palette.ink, fontSize, width - valueX - pad);
      rule(pad, rowY + rowHeight * .35, width - pad, rowY + rowHeight * .35, "rgba(214,219,230,.055)");
    });
    ctx.globalAlpha = 1;
    if (width > 760) {
      roundRect(width - 164, top - 16, 113, 28, 14, palette.raised);
      text("NOT CONNECTED", width - 153, top + 2, palette.mint, 9);
    }
  }

  function drawAnalysis() {
    const pad = width > 760 ? 48 : 20;
    const top = height > 320 ? 78 : 50;
    const left = pad + (width < 460 ? 50 : 94);
    const plotWidth = Math.max(100, width - left - pad);
    const rowHeight = Math.min(64, Math.max(24, (height - top - 52) / 4));
    const columns = 5;
    const gap = width < 460 ? 5 : 12;
    const cellWidth = (plotWidth - gap * (columns - 1)) / columns;
    const colors = [palette.mint, palette.blue, palette.violet, palette.sand];
    for (let row = 0; row < 4; row++) {
      text(width < 460 ? String.fromCharCode(65 + row) : `Sample ${String.fromCharCode(65 + row)}`, pad, top + row * rowHeight + rowHeight * .5, palette.muted, width < 460 ? 10 : 12);
      for (let column = 0; column < columns; column++) {
        const phase = (row * columns + column + 1) / 20;
        const graphicSeed = Number.isFinite(options.seed) ? Math.abs(Math.trunc(options.seed)) : 1;
        const intensity = .16 + ((row * 7 + column * 3 + graphicSeed) % 7) / 20;
        ctx.globalAlpha = position >= phase ? intensity : .075;
        roundRect(left + column * (cellWidth + gap), top + row * rowHeight, cellWidth, Math.max(16, rowHeight - gap), 5, colors[(column + row) % colors.length]);
        ctx.globalAlpha = position >= phase ? .68 : .17;
        if (cellWidth > 48 && rowHeight > 35) text("EXAMPLE", left + column * (cellWidth + gap) + 8, top + row * rowHeight + (rowHeight - gap) / 2 + 4, palette.ink, 8, cellWidth - 12);
      }
    }
    ctx.globalAlpha = 1;
    if (height > 320) text("SYNTHETIC SAMPLES · NO MARKET SIGNAL", left, top + rowHeight * 4 + 23, palette.muted, 10, plotWidth);
  }

  function drawWorkflow() {
    const narrow = width <= 620;
    const pad = width > 760 ? 48 : 22;
    const top = height > 320 ? 90 : 51;
    const available = Math.max(76, height - top - 44);
    const radius = narrow ? 14 : 25;
    const labels = ["Input", "Analysis", "Result"];
    const notes = ["Example snapshot", "Schematic criteria", "Illustrative outcome"];
    const nodes = labels.map((_, index) => ({
      x: narrow ? pad + radius : pad + (width - pad * 2) * (index + .5) / 3,
      y: narrow ? top + (available - radius * 2) * index / 2 + radius : top + available * .38,
    }));
    rule(nodes[0].x, nodes[0].y, nodes[2].x, nodes[2].y, "rgba(139,151,176,.25)");
    const trace = position * 2;
    const current = Math.min(1, Math.floor(trace));
    const blend = trace - current;
    const endX = nodes[current].x + (nodes[current + 1].x - nodes[current].x) * blend;
    const endY = nodes[current].y + (nodes[current + 1].y - nodes[current].y) * blend;
    rule(nodes[0].x, nodes[0].y, endX, endY, "rgba(62,240,194,.8)");
    nodes.forEach((node, index) => {
      const active = position >= index / 2;
      const color = index === 2 && options.status === "loss" ? palette.loss : palette.mint;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = palette.raised;
      ctx.fill();
      ctx.strokeStyle = active ? color : "rgba(139,151,176,.35)";
      ctx.stroke();
      ctx.textAlign = "center";
      text(String(index + 1).padStart(2, "0"), node.x, node.y + 4, active ? palette.ink : palette.muted, narrow ? 10 : 13);
      if (narrow) {
        ctx.textAlign = "left";
        text(labels[index], node.x + radius + 18, node.y - (available > 145 ? 3 : -4), palette.ink, 12);
        if (available > 145) text(notes[index], node.x + radius + 18, node.y + 15, palette.muted, 10, width - node.x - radius - 35);
      } else {
        text(labels[index], node.x, node.y + radius + 30, palette.ink, width > 760 ? 16 : 13);
        if (available > 170) text(notes[index], node.x, node.y + radius + 54, palette.muted, 10);
        ctx.textAlign = "left";
      }
    });
    ctx.textAlign = "left";
  }

  function draw() {
    if (disposed) return;
    ctx.globalAlpha = 1;
    ctx.textAlign = "left";
    ctx.fillStyle = palette.stage;
    ctx.fillRect(0, 0, width, height);
    if (options.type === "terminal") drawTerminal();
    else if (options.type === "analysis") drawAnalysis();
    else if (options.type === "workflow") drawWorkflow();
    else drawChart();
  }

  function resize() {
    if (disposed) return;
    const rect = host.getBoundingClientRect();
    width = Math.max(1, rect.width || 960);
    height = Math.max(1, rect.height || 420);
    // Retina aware, with a bounded backing buffer for large or high-DPR stages.
    const ratio = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(1_500_000 / (width * height)));
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw();
  }

  function shouldAnimate() {
    return !disposed && visible && !document.hidden && !reduced && options.playing !== false && (options.progress === undefined || position < 1);
  }

  function notify(now: number) {
    if (!options.onProgress || (now - lastNotification < 120 && position < 1)) return;
    lastNotification = now;
    emittedProgress.push(position);
    if (emittedProgress.length > 8) emittedProgress.shift();
    options.onProgress(position);
  }

  function frame(now: number) {
    raf = 0;
    if (!shouldAnimate()) return;
    const interval = width < 500 ? 1000 / 24 : 1000 / 30;
    const paintElapsed = now - lastPaint;
    if (paintElapsed >= interval) {
      const elapsed = Math.min(100, now - lastStep);
      lastStep = now;
      lastPaint = now - (paintElapsed % interval);
      if (position >= 1 && options.progress === undefined) {
        hold += elapsed;
        if (hold > 1800) {
          position = 0;
          hold = 0;
        }
      } else {
        position = clamp(position + elapsed / 18_000);
        hold = 0;
      }
      draw();
      notify(now);
    }
    if (shouldAnimate()) raf = window.requestAnimationFrame(frame);
  }

  function syncPlayback() {
    if (!shouldAnimate()) {
      window.cancelAnimationFrame(raf);
      raf = 0;
    } else if (!raf) {
      lastStep = performance.now();
      lastPaint = lastStep;
      raf = window.requestAnimationFrame(frame);
    }
  }

  const intersection = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
    visible = entries.some(entry => entry.isIntersecting);
    syncPlayback();
  }, { threshold: .01 });
  intersection?.observe(host);
  const resizing = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(resize);
  resizing?.observe(host);
  if (!resizing) window.addEventListener("resize", resize, { passive: true });
  const visibilityChanged = () => syncPlayback();
  const preferenceChanged = () => {
    reduced = preference.matches;
    if (reduced && options.progress === undefined) position = 1;
    draw();
    if (reduced && options.progress === undefined) notify(performance.now());
    syncPlayback();
  };
  document.addEventListener("visibilitychange", visibilityChanged);
  preference.addEventListener("change", preferenceChanged);
  void document.fonts.ready.then(() => { if (!disposed) draw(); });
  resize();
  notify(performance.now());
  syncPlayback();

  return {
    update(next) {
      if (disposed) return;
      const oldSeed = options.seed;
      const oldStatus = options.status;
      const oldType = options.type;
      const wasPlaying = options.playing !== false;
      options = { ...options, ...next };
      let needsRedraw = oldSeed !== options.seed || oldStatus !== options.status || oldType !== options.type;
      if (oldSeed !== options.seed || oldStatus !== options.status) samples = createSamples(options.seed, options.status);
      const requestedProgress = options.progress;
      if (requestedProgress !== undefined && (requestedProgress !== lastExternalProgress || (wasPlaying && options.playing === false))) {
        // Echoes of onProgress acknowledge playback; they are not a new seek.
        const acknowledgement = options.playing !== false && emittedProgress.some(value => Math.abs(requestedProgress - value) < .00001);
        if (!acknowledgement) {
          position = clamp(requestedProgress);
          hold = 0;
          emittedProgress.length = 0;
          needsRedraw = true;
        }
        lastExternalProgress = requestedProgress;
      } else if (requestedProgress === undefined) {
        lastExternalProgress = undefined;
        if (reduced && position !== 1) {
          position = 1;
          needsRedraw = true;
        }
      }
      if (needsRedraw) {
        draw();
        if (reduced && options.progress === undefined) notify(performance.now());
      }
      syncPlayback();
    },
    dispose() {
      disposed = true;
      window.cancelAnimationFrame(raf);
      intersection?.disconnect();
      resizing?.disconnect();
      if (!resizing) window.removeEventListener("resize", resize);
      preference.removeEventListener("change", preferenceChanged);
      document.removeEventListener("visibilitychange", visibilityChanged);
      canvas.width = 1;
      canvas.height = 1;
    },
  };
}
