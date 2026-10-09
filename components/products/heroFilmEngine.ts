export interface HeroFilmTool {
  id: string;
  name: string;
  fullName: string;
  accent: string;
  paths: readonly string[];
}

export interface HeroFilmOptions {
  tools: HeroFilmTool[];
  price: number;
  individualTotal: number;
  progress: number;
  playing: boolean;
  scale: number;
  globalPaused?: boolean;
  dialogOpen?: boolean;
  onProgress?: (value: number) => void;
}

export interface HeroFilmHandle {
  update: (next: Partial<HeroFilmOptions>) => void;
  dispose: () => void;
}

const paper = "#0b1020";
const ink = "#d6dbe6";
const muted = "#8b97b0";
const mint = "#3ef0c2";
const sans = '"Plus Jakarta Sans", system-ui, sans-serif';
const mono = '"IBM Plex Mono", monospace';
const clamp = (value: number) => Number.isFinite(value) ? Math.min(1, Math.max(0, value)) : 0;
const ease = (value: number) => 1 - Math.pow(1 - clamp(value), 3);
const graphicTrace = [.72, .69, .73, .64, .67, .58, .61, .5, .56, .44, .48, .39, .45, .33, .38, .26, .34, .29, .23, .28, .19, .24, .21, .16];

/** Five authored, synthetic scenes. No EA rules, market feed or order execution. */
export function mountHeroFilm(canvas: HTMLCanvasElement, initial: HeroFilmOptions): HeroFilmHandle {
  const context = canvas.getContext("2d", { alpha: false });
  if (!context) throw new Error("2D canvas is unavailable");
  const ctx = context;
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const background = document.createElement("canvas");
  background.width = 0;
  background.height = 0;
  const back = background.getContext("2d", { alpha: false });
  const grain = document.createElement("canvas");
  grain.width = 128;
  grain.height = 128;
  const grainContext = grain.getContext("2d");
  const priceGlow = document.createElement("canvas");
  priceGlow.width = 320;
  priceGlow.height = 200;
  const glowContext = priceGlow.getContext("2d");
  let options = { ...initial };
  let position = clamp(options.progress);
  let reduced = motion.matches;
  let compact = false;
  let visible = typeof IntersectionObserver === "undefined";
  let disposed = false;
  let width = 1200;
  let height = 1200 / 2.3;
  let raf = 0;
  let lastPaint = 0;
  let lastStep = 0;
  let lastNotification = 0;
  let lastExternal = options.progress;
  const acknowledgements: number[] = [];
  let tools = prepareTools(options.tools);

  // One deterministic, one-pixel texture tile; never regenerate noise in RAF.
  if (grainContext) {
    const pixels = grainContext.createImageData(grain.width, grain.height);
    let seed = 0x49f17a2d;
    for (let index = 0; index < pixels.data.length; index += 4) {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      const value = seed >>> 24;
      pixels.data[index] = value;
      pixels.data[index + 1] = value;
      pixels.data[index + 2] = value;
      pixels.data[index + 3] = 255;
    }
    grainContext.putImageData(pixels, 0, 0);
  }
  if (glowContext) {
    glowContext.save();
    glowContext.translate(160, 100);
    glowContext.scale(160, 100);
    const glow = glowContext.createRadialGradient(0, 0, 0, 0, 0, 1);
    glow.addColorStop(0, "rgba(142,220,192,.105)");
    glow.addColorStop(.42, "rgba(142,220,192,.038)");
    glow.addColorStop(1, "rgba(142,220,192,0)");
    glowContext.fillStyle = glow;
    glowContext.fillRect(-1, -1, 2, 2);
    glowContext.restore();
  }

  function cacheBackground() {
    if (!back) return;
    // CSS-pixel grain remains fine at every size; the cache is capped at 650k pixels.
    const resolution = Math.min(1, Math.sqrt(650_000 / (width * height)));
    const cacheWidth = Math.max(1, Math.round(width * resolution));
    const cacheHeight = Math.max(1, Math.round(height * resolution));
    if (background.width === cacheWidth && background.height === cacheHeight) return;
    background.width = cacheWidth;
    background.height = cacheHeight;
    back.fillStyle = paper;
    back.fillRect(0, 0, cacheWidth, cacheHeight);

    function haze(x: number, y: number, rx: number, ry: number, color: string, opacity: number) {
      back!.save();
      back!.translate(x * cacheWidth, y * cacheHeight);
      back!.scale(rx * cacheWidth, ry * cacheHeight);
      const wash = back!.createRadialGradient(0, 0, 0, 0, 0, 1);
      wash.addColorStop(0, `rgba(${color},${opacity})`);
      wash.addColorStop(.5, `rgba(${color},${opacity * .38})`);
      wash.addColorStop(1, `rgba(${color},0)`);
      back!.fillStyle = wash;
      back!.fillRect(-1, -1, 2, 2);
      back!.restore();
    }

    haze(.33, .45, .51, .65, "255,174,136", .045);
    haze(.70, .32, .57, .66, "140,199,242", .065);
    haze(.59, .61, .44, .60, "211,167,255", .045);
    haze(.46, .81, .47, .44, "142,220,192", .05);
    haze(.15, .14, .38, .34, "255,210,126", .025);

    const texture = grainContext && back.createPattern(grain, "repeat");
    if (texture) {
      back.save();
      back.globalCompositeOperation = "soft-light";
      back.globalAlpha = .18;
      back.fillStyle = texture;
      back.fillRect(0, 0, cacheWidth, cacheHeight);
      back.restore();
    }
  }

  function prepareTools(next: HeroFilmTool[]) {
    const css = getComputedStyle(canvas);
    return next.map(tool => {
      const variable = /^var\(([^,)]+)\)$/.exec(tool.accent);
      return {
        ...tool,
        color: variable ? css.getPropertyValue(variable[1]).trim() || mint : tool.accent,
        shapes: tool.paths.map(path => new Path2D(path)),
      };
    });
  }

  function typography(size: number, weight = 500, family = mono, tracking = 0) {
    ctx.font = `${weight} ${size}px ${family}`;
    // Native canvas letter-spacing where supported; older browsers retain clean text.
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = `${tracking}px`;
  }

  function text(value: string, x: number, y: number, size = 12, color = ink, weight = 500, family = mono, align: CanvasTextAlign = "left", maxWidth = width) {
    typography(size, weight, family);
    ctx.fillStyle = color;
    ctx.textAlign = align;
    let fitted = value;
    while (fitted.length > 1 && ctx.measureText(fitted).width > maxWidth) fitted = fitted.slice(0, -1);
    if (fitted !== value && fitted.length > 2) fitted = `${fitted.slice(0, -2)}…`;
    ctx.fillText(fitted, x, y);
  }

  function line(x1: number, y1: number, x2: number, y2: number, color = "rgba(139,151,176,.2)", thickness = 1) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function roundRect(x: number, y: number, w: number, h: number, radius: number, fill: string) {
    ctx.beginPath();
    ctx.roundRect(x, y, Math.max(0, w), Math.max(0, h), radius);
    ctx.fillStyle = fill;
    ctx.fill();
  }

  function title(first: string, second: string) {
    const x = compact ? 24 : width * .085;
    const size = compact ? 23 : Math.min(38, Math.max(27, width * .03));
    const y = compact ? 102 : height * .25;
    typography(size, 800, sans, -size * .04);
    ctx.textAlign = "left";
    ctx.fillStyle = "#f2f5fb";
    ctx.fillText(first, x, y);
    if (compact) {
      typography(size, 300, sans, -size * .04);
      ctx.fillStyle = muted;
      ctx.fillText(second, x, y + size * 1.16);
    } else {
      const nextX = x + ctx.measureText(first + " ").width;
      typography(size, 300, sans, -size * .04);
      ctx.fillStyle = muted;
      ctx.fillText(second, nextX, y);
    }
  }

  function contextScene(phase: number) {
    title("Context first.", "Then the detail.");
    const left = compact ? 24 : width * .085;
    const top = compact ? 165 : height * .36;
    const plotWidth = width - left * 2;
    const plotHeight = compact ? height - top - 53 : height * .47;
    const amplitude = .7 + clamp((options.scale - 50) / 450) * .24;
    const points = graphicTrace.map((value, index) => ({
      x: left + index / (graphicTrace.length - 1) * plotWidth,
      y: top + (.45 + (value - .45) * amplitude) * plotHeight,
    }));
    for (let row = 0; row < 4; row++) line(left, top + row / 3 * plotHeight, width - left, top + row / 3 * plotHeight, "rgba(139,151,176,.055)");
    for (let column = 0; column < 7; column++) line(left + column / 6 * plotWidth, top, left + column / 6 * plotWidth, top + plotHeight, "rgba(139,151,176,.04)");
    ctx.beginPath();
    points.forEach((point, index) => index ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y));
    ctx.strokeStyle = "rgba(140,199,242,.18)";
    ctx.lineWidth = 1;
    ctx.stroke();
    const cursor = clamp(phase) * (points.length - 1);
    const end = Math.floor(cursor);
    const next = Math.min(end + 1, points.length - 1);
    const amount = cursor - end;
    const point = { x: points[end].x + (points[next].x - points[end].x) * amount, y: points[end].y + (points[next].y - points[end].y) * amount };
    ctx.beginPath();
    points.slice(0, end + 1).forEach((item, index) => index ? ctx.lineTo(item.x, item.y) : ctx.moveTo(item.x, item.y));
    ctx.lineTo(point.x, point.y);
    ctx.strokeStyle = mint;
    ctx.lineWidth = compact ? 1.8 : 2.1;
    ctx.lineJoin = "round";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(point.x, point.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = mint;
    ctx.fill();
    text("OBSERVATION · SYNTHETIC", left, top - 13, compact ? 9 : 11, muted);
    text(`Example scale $${options.scale}`, left, height - 23, compact ? 9 : 10, muted);
  }

  function routineScene(phase: number) {
    title("A defined routine.", "A readable sequence.");
    const labels = ["Prepare", "Sequence", "Review"];
    const notes = ["Example inputs", "Public schematic", "No live orders"];
    const firstNode = Math.min(185, height * .52);
    const nodeGap = Math.max(50, (height - firstNode - 34) / 2);
    const nodes = labels.map((_, index) => ({
      x: compact ? width * .22 : width * (.22 + index * .28),
      y: compact ? firstNode + index * nodeGap : height * .57,
    }));
    line(nodes[0].x, nodes[0].y, nodes[2].x, nodes[2].y);
    const part = phase * 2;
    const current = Math.min(1, Math.floor(part));
    const fraction = part - current;
    line(nodes[0].x, nodes[0].y, nodes[current].x + (nodes[current + 1].x - nodes[current].x) * fraction, nodes[current].y + (nodes[current + 1].y - nodes[current].y) * fraction, mint, 1.4);
    const radius = (compact ? 17 : 24) + clamp(options.scale / 500) * 2;
    nodes.forEach((node, index) => {
      const completed = phase >= index / 2;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#111a2c";
      ctx.fill();
      ctx.strokeStyle = completed ? mint : "rgba(139,151,176,.35)";
      ctx.lineWidth = 1;
      ctx.stroke();
      text(String(index + 1).padStart(2, "0"), node.x, node.y + 4, compact ? 10 : 12, completed ? ink : muted, 500, mono, "center");
      text(labels[index], compact ? node.x + 36 : node.x, compact ? node.y - 3 : node.y + 59, compact ? 15 : 18, ink, 700, sans, compact ? "left" : "center");
      text(notes[index], compact ? node.x + 36 : node.x, compact ? node.y + 16 : node.y + 85, compact ? 9 : 11, muted, 500, mono, compact ? "left" : "center");
    });
  }

  function reviewScene(phase: number) {
    title("Review the samples.", "Keep the context.");
    const left = compact ? 24 : width * .12;
    const top = compact ? Math.min(169, height * .4) : height * .37;
    const tableWidth = width - left * 2;
    const rowHeight = compact ? Math.max(28, (height - top - 40) / 4) : Math.max(39, (height - top - 61) / 4);
    const labelWidth = compact ? 85 : tableWidth * .2;
    for (let row = 0; row < 4; row++) {
      const active = phase >= (row + 1) / 4;
      const y = top + row * rowHeight;
      line(left, y + rowHeight - 3, width - left, y + rowHeight - 3, "rgba(139,151,176,.11)");
      text(`Sample ${String.fromCharCode(65 + row)}`, left, y + 22, compact ? 10 : 12, active ? ink : muted);
      const contentLeft = left + labelWidth;
      const cellWidth = (tableWidth - labelWidth) / 3;
      for (let cell = 0; cell < 3; cell++) {
        const barWidth = cellWidth * (.32 + ((row + cell + Math.floor(options.scale / 50)) % 4) * .11);
        roundRect(contentLeft + cell * cellWidth + 7, y + 13, barWidth, compact ? 5 : 7, 2, active ? ["rgba(140,199,242,.6)", "rgba(211,167,255,.55)", "rgba(62,240,194,.55)"][cell] : "rgba(139,151,176,.15)");
      }
    }
    text("INVENTED OBSERVATIONS · NOT PERFORMANCE", left, height - 22, compact ? 8.5 : 10, muted, 500, mono, "left", tableWidth);
  }

  function planningScene(phase: number) {
    title("A place to plan.", "A process to review.");
    const labels = ["Collect", "Arrange", "Revisit"];
    const items = ["Research notes", "Routine outline", "Review questions"];
    const cellWidth = compact ? width - 48 : width * .23;
    const firstRow = Math.min(163, height * .37);
    const rowGap = (height - firstRow - 32) / 3;
    const cellHeight = compact ? Math.min(56, rowGap - 8) : height * .3;
    labels.forEach((label, index) => {
      const x = compact ? 24 : width * .12 + index * width * .265;
      const y = compact ? firstRow + index * rowGap : height * .43;
      const active = phase >= index / 3;
      roundRect(x, y, cellWidth, cellHeight, compact ? 9 : 12, active ? "#121d30" : "#10182a");
      text(label.toUpperCase(), x + 16, y + (compact ? 19 : 26), compact ? 9 : 10, active ? ["#ffd27e", "#a9afff", mint][index] : muted);
      text(items[index], x + 16, y + (compact ? 39 : 59), compact ? 13 : 16, ink, 600, sans, "left", cellWidth - 30);
      if (!compact) {
        line(x + 16, y + 84, x + cellWidth * .72, y + 84, "rgba(139,151,176,.23)");
        line(x + 16, y + 103, x + cellWidth * .55, y + 103, "rgba(139,151,176,.13)");
      }
    });
  }

  function collectionScene() {
    const baseWidth = compact ? 360 : 1200;
    const baseHeight = compact ? 360 / 17 * 20 : 1200 / 2.3;
    const sx = width / baseWidth;
    const sy = height / baseHeight;
    if (glowContext) {
      const glowWidth = (compact ? 276 : 360) * sx;
      ctx.drawImage(priceGlow, (width - glowWidth) / 2, (compact ? 268 : 303) * sy, glowWidth, (compact ? 164 : 196) * sy);
    }
    const columns = compact ? 4 : 8;
    const pad = (compact ? 24 : 126) * sx;
    const cell = (width - pad * 2) / columns;
    tools.forEach((tool, index) => {
      const x = pad + cell * (index % columns + .5);
      const y = (compact ? 84 + Math.floor(index / columns) * 62 : 116) * sy;
      const iconScale = Math.max(.75, sx);
      ctx.save();
      ctx.translate(x - 12 * iconScale, y - 12 * iconScale);
      ctx.scale(iconScale, iconScale);
      ctx.lineWidth = 1.6;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.strokeStyle = tool.color;
      ctx.shadowColor = tool.color;
      ctx.shadowBlur = compact ? 4 : 7;
      tool.shapes.forEach(shape => ctx.stroke(shape));
      ctx.restore();
      text(tool.name, x, y + (compact ? 27 : 36) * sy, Math.max(9, (compact ? 9.5 : 11.5) * sx), ink, 500, mono, "center", cell - 5);
    });

    const headlineSize = (compact ? 31 : 48) * sx;
    if (compact) {
      typography(headlineSize, 800, sans, -1.2 * sx);
      ctx.textAlign = "center";
      ctx.fillStyle = "#f2f5fb";
      ctx.fillText("All eight.", width / 2, 236 * sy);
      typography(30 * sx, 300, sans, -1.2 * sx);
      ctx.fillStyle = muted;
      ctx.fillText("One collection.", width / 2, 271 * sy);
    } else {
      typography(headlineSize, 800, sans, -1.8 * sx);
      const first = "All eight. ";
      const firstWidth = ctx.measureText(first).width;
      typography(headlineSize, 300, sans, -1.8 * sx);
      const second = "One collection.";
      const secondWidth = ctx.measureText(second).width;
      const x = (width - firstWidth - secondWidth) / 2;
      typography(headlineSize, 800, sans, -1.8 * sx);
      ctx.textAlign = "left";
      ctx.fillStyle = "#f2f5fb";
      ctx.fillText(first, x, 314 * sy);
      typography(headlineSize, 300, sans, -1.8 * sx);
      ctx.fillStyle = muted;
      ctx.fillText(second, x + firstWidth, 314 * sy);
    }

    const crossY = (compact ? 309 : 350) * sy;
    const crossSize = (compact ? 13 : 18) * sx;
    typography(crossSize, 500, mono);
    const cross = `$${options.individualTotal}`;
    const crossWidth = ctx.measureText(cross).width;
    ctx.textAlign = "center";
    ctx.fillStyle = muted;
    ctx.fillText(cross, width / 2, crossY);
    line(width / 2 - crossWidth / 2 - 2, crossY - crossSize * .34, width / 2 + crossWidth / 2 + 2, crossY - crossSize * .34, "rgba(240,80,110,.65)");
    typography((compact ? 76 : 104) * sx, 300, sans, (compact ? -4 : -5.5) * sx);
    ctx.textAlign = "center";
    ctx.fillStyle = "#f2f5fb";
    ctx.fillText(`$${options.price}`, width / 2, (compact ? 379 : 440) * sy);
    text(`$${options.individualTotal - options.price} example difference · sample prices`, width / 2, (compact ? 405 : 476) * sy, Math.max(9, (compact ? 10 : 13) * sx), mint, 500, mono, "center", width - 30);
  }

  function scene(chapter: number, phase: number) {
    if (chapter === 0) contextScene(phase);
    else if (chapter === 1) routineScene(phase);
    else if (chapter === 2) reviewScene(phase);
    else if (chapter === 3) planningScene(phase);
    else collectionScene();
  }

  function draw() {
    if (disposed) return;
    ctx.globalAlpha = 1;
    ctx.textAlign = "left";
    ctx.lineCap = "butt";
    ctx.shadowBlur = 0;
    if (back) ctx.drawImage(background, 0, 0, width, height);
    else { ctx.fillStyle = paper; ctx.fillRect(0, 0, width, height); }
    const chapter = Math.min(4, Math.floor(position * 5));
    const phase = position >= 1 ? 1 : position * 5 - chapter;
    const blend = chapter > 0 && phase < .12 && options.playing && !reduced && !options.globalPaused && !options.dialogOpen ? ease(phase / .12) : 1;
    if (blend < 1) {
      ctx.save();
      ctx.globalAlpha = 1 - blend;
      scene(chapter - 1, 1);
      ctx.restore();
    }
    ctx.save();
    ctx.globalAlpha = blend;
    scene(chapter, phase);
    ctx.restore();
  }

  function resize() {
    if (disposed) return;
    const box = canvas.getBoundingClientRect();
    width = Math.max(1, box.width || 1200);
    compact = window.matchMedia("(max-width: 619px)").matches;
    height = Math.max(1, box.height || width / (compact ? 17 / 20 : 2.3));
    const ratio = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(1_500_000 / (width * height)));
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    cacheBackground();
    draw();
  }

  function canPlay() {
    return !disposed && visible && !document.hidden && !reduced && options.playing && !options.globalPaused && !options.dialogOpen && position < 1;
  }

  function notify(now: number, force = false) {
    if (!options.onProgress || (!force && now - lastNotification < 100 && position < 1)) return;
    lastNotification = now;
    acknowledgements.push(position);
    if (acknowledgements.length > 8) acknowledgements.shift();
    options.onProgress(position);
  }

  function frame(now: number) {
    raf = 0;
    if (!canPlay()) return;
    const interval = width < 620 ? 1000 / 24 : 1000 / 30;
    const paintElapsed = now - lastPaint;
    if (paintElapsed >= interval) {
      position = clamp(position + Math.min(100, now - lastStep) / 25_000);
      lastStep = now;
      lastPaint = now - (paintElapsed % interval);
      draw();
      notify(now);
    }
    if (canPlay()) raf = requestAnimationFrame(frame);
  }

  function syncPlayback() {
    if (!canPlay()) {
      cancelAnimationFrame(raf);
      raf = 0;
    } else if (!raf) {
      lastStep = performance.now();
      lastPaint = lastStep;
      raf = requestAnimationFrame(frame);
    }
  }

  const visibleChanged = () => syncPlayback();
  const motionChanged = () => {
    reduced = motion.matches;
    if (reduced) {
      position = 1;
      draw();
      notify(performance.now(), true);
    }
    syncPlayback();
  };
  const intersection = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
    visible = entries.some(entry => entry.isIntersecting);
    syncPlayback();
  }, { threshold: .01 });
  intersection?.observe(canvas);
  const sizing = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(resize);
  sizing?.observe(canvas);
  if (!sizing) window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", visibleChanged);
  motion.addEventListener("change", motionChanged);
  if (document.fonts) void document.fonts.ready.then(() => { if (!disposed) draw(); });
  resize();
  syncPlayback();

  return {
    update(next) {
      if (disposed) return;
      const previous = options;
      options = { ...options, ...next };
      let redraw = previous.scale !== options.scale || previous.price !== options.price || previous.individualTotal !== options.individualTotal;
      if (previous.tools !== options.tools) {
        tools = prepareTools(options.tools);
        redraw = true;
      }
      const pausedByUser = previous.playing && !options.playing;
      if (options.progress !== lastExternal || pausedByUser) {
        const acknowledgement = options.playing && acknowledgements.some(value => Math.abs(options.progress - value) < .00001);
        if (!acknowledgement) {
          position = clamp(options.progress);
          acknowledgements.length = 0;
          redraw = true;
        }
        lastExternal = options.progress;
      }
      if (redraw) draw();
      syncPlayback();
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(raf);
      intersection?.disconnect();
      sizing?.disconnect();
      if (!sizing) window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", visibleChanged);
      motion.removeEventListener("change", motionChanged);
      canvas.width = 1;
      canvas.height = 1;
      background.width = 1;
      background.height = 1;
      grain.width = 1;
      grain.height = 1;
      priceGlow.width = 1;
      priceGlow.height = 1;
    },
  };
}
