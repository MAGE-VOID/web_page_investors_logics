import {
  ACESFilmicToneMapping,
  CanvasTexture,
  Color,
  DirectionalLight,
  ExtrudeGeometry,
  Group,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Path,
  PerspectiveCamera,
  PlaneGeometry,
  PMREMGenerator,
  Scene,
  Shape,
  SphereGeometry,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import type { BufferGeometry, Material, Texture } from "three";

/**
 * Kinetic emblem: open machined arcs frame the original two-candle mark.
 * A blue carriage follows the inner rail; the mark stays forward and readable.
 * Lazy-loaded, with no remote assets, bloom, shadow maps or postprocessing.
 * Its basename must stay distinct from BrandScene.tsx on Windows.
 */
export function mountBrandScene(host: HTMLElement, onReady: (ready: boolean) => void) {
  const compact = window.matchMedia("(max-width: 46rem)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");
  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: !compact.matches,
    powerPreference: "low-power",
    stencil: false,
    depth: true,
  });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.setClearColor(0x000000, 0);

  const geometries = new Set<BufferGeometry>();
  const materials = new Set<Material>();
  const textures = new Set<Texture>();
  const scene = new Scene();
  const camera = new PerspectiveCamera(34, 1, 0.1, 30);
  camera.position.set(0, 0.12, 9.3);
  camera.lookAt(0, 0, 0);
  let environmentTarget: ReturnType<PMREMGenerator["fromScene"]> | undefined;

  try {
    const pmrem = new PMREMGenerator(renderer);
    const environment = new RoomEnvironment();
    try {
      environmentTarget = pmrem.fromScene(environment, 0.04);
      scene.environment = environmentTarget.texture;
      scene.environmentIntensity = 0.9;
    } finally {
      environment.dispose();
      pmrem.dispose();
    }
  } catch {
    // Directional lighting also supports clients without the environment target.
  }

  const key = new DirectionalLight(0xf0f6fc, 3.6);
  key.position.set(-3.8, 5, 6);
  const rim = new DirectionalLight(0x4493f8, 2.8);
  rim.position.set(4, 1, -2);
  const fill = new DirectionalLight(0xc9d1d9, 1.4);
  fill.position.set(3, -2, 5);
  scene.add(key, rim, fill, new HemisphereLight(0xc9d1d9, 0x151b23, 1.2));

  const steel = new MeshStandardMaterial({
    color: new Color("#94a6bd"), metalness: 0.85, roughness: 0.3,
  });
  const graphite = new MeshStandardMaterial({
    color: new Color("#35445a"), metalness: 0.7, roughness: 0.36,
  });
  const silver = new MeshStandardMaterial({
    color: new Color("#e4eaf4"), metalness: 0.85, roughness: 0.24,
  });
  const blue = new MeshStandardMaterial({
    color: new Color("#4493f8"), emissive: new Color("#1f6feb"),
    emissiveIntensity: 0.32, metalness: 0.45, roughness: 0.26,
  });
  materials.add(steel);
  materials.add(graphite);
  materials.add(blue);
  materials.add(silver);

  function roundedPath(path: Shape | Path, width: number, height: number, radius: number) {
    const x = -width / 2;
    const y = -height / 2;
    path.moveTo(x + radius, y);
    path.lineTo(x + width - radius, y);
    path.quadraticCurveTo(x + width, y, x + width, y + radius);
    path.lineTo(x + width, y + height - radius);
    path.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    path.lineTo(x + radius, y + height);
    path.quadraticCurveTo(x, y + height, x, y + height - radius);
    path.lineTo(x, y + radius);
    path.quadraticCurveTo(x, y, x + radius, y);
    path.closePath();
  }

  function extrude(width: number, height: number, radius: number, depth: number, wall?: number) {
    const shape = new Shape();
    roundedPath(shape, width, height, radius);
    if (wall) {
      const hole = new Path();
      roundedPath(hole, width - wall * 2, height - wall * 2, Math.max(0.02, radius - wall));
      shape.holes.push(hole);
    }
    const geometry = new ExtrudeGeometry(shape, {
      depth, steps: 1, curveSegments: compact.matches ? 8 : 12,
      bevelEnabled: true, bevelSegments: 3, bevelSize: 0.035, bevelThickness: 0.035,
    });
    geometry.translate(0, 0, -depth / 2);
    geometries.add(geometry);
    return geometry;
  }

  function arcGeometry(radius: number, width: number, start: number, sweep: number, depth: number) {
    const shape = new Shape();
    shape.absarc(0, 0, radius + width / 2, start, start + sweep, false);
    shape.absarc(0, 0, radius - width / 2, start + sweep, start, true);
    shape.closePath();
    const bevel = Math.min(width * 0.2, 0.026);
    const geometry = new ExtrudeGeometry(shape, {
      depth, steps: 1, curveSegments: compact.matches ? 24 : 40,
      bevelEnabled: true, bevelSegments: 2, bevelSize: bevel, bevelThickness: bevel,
    });
    geometry.translate(0, 0, -depth / 2);
    geometries.add(geometry);
    return geometry;
  }

  const sculpture = new Group();
  const armature = new Group();
  const outerGeometry = arcGeometry(2.11, 0.16, -0.35, 2.62, 0.14);
  const upperArc = new Mesh(outerGeometry, steel);
  upperArc.position.z = 0.12;
  const lowerArc = new Mesh(outerGeometry, graphite);
  lowerArc.rotation.z = Math.PI;
  lowerArc.position.set(0.08, -0.03, -0.18);
  const guide = new Mesh(arcGeometry(1.86, 0.026, 0.1, 5.85, 0.035), graphite);
  guide.position.z = 0.045;
  armature.add(upperArc, lowerArc, guide);

  // This moving accent is brand artwork, not a chart or a trading-data signal.
  const carriage = new Group();
  const accent = new Mesh(arcGeometry(1.86, 0.055, 0, 0.42, 0.05), blue);
  const pointGeometry = new SphereGeometry(0.058, compact.matches ? 10 : 16, 8);
  geometries.add(pointGeometry);
  const point = new Mesh(pointGeometry, blue);
  point.position.set(Math.cos(0.42) * 1.86, Math.sin(0.42) * 1.86, 0.03);
  carriage.add(accent, point);
  carriage.position.z = 0.13;
  carriage.rotation.z = 0.18;
  armature.add(carriage);
  armature.position.set(-0.08, 0.04, -0.18);
  armature.rotation.set(0.3, 0.34, -0.24);
  sculpture.add(armature);

  // Original logo proportions: matching body widths, one outlined and one solid.
  const emblem = new Group();
  const shortBody = new Mesh(extrude(0.51, 0.75, 0.04, 0.19, 0.11), silver);
  shortBody.position.x = -0.31;
  const tallBody = new Mesh(extrude(0.51, 2.04, 0.04, 0.19), silver);
  tallBody.position.x = 0.32;
  const wickGeometry = extrude(0.12, 0.22, 0.015, 0.16);
  for (const [x, height] of [[-0.31, 0.75], [0.32, 2.04]]) {
    for (const direction of [-1, 1]) {
      const wick = new Mesh(wickGeometry, silver);
      wick.position.set(x, direction * (height / 2 + 0.1), 0);
      emblem.add(wick);
    }
  }
  emblem.add(shortBody, tallBody);
  emblem.scale.setScalar(1.3);
  emblem.position.set(0, 0.07, 0.5);
  emblem.rotation.set(0.02, -0.12, -0.025);
  sculpture.add(emblem);
  sculpture.position.y = 0.08;
  scene.add(sculpture);

  // A single tiny procedural contact shadow; no shadow maps or postprocessing.
  const shadowCanvas = document.createElement("canvas");
  shadowCanvas.width = 64;
  shadowCanvas.height = 64;
  const context = shadowCanvas.getContext("2d");
  if (context) {
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(0,0,0,0.65)");
    gradient.addColorStop(0.4, "rgba(0,0,0,0.24)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    const texture = new CanvasTexture(shadowCanvas);
    textures.add(texture);
    const geometry = new PlaneGeometry(5.4, 2.1);
    const material = new MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
    geometries.add(geometry);
    materials.add(material);
    const shadow = new Mesh(geometry, material);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(0.15, -2.2, -0.1);
    scene.add(shadow);
  }

  host.appendChild(renderer.domElement);
  let disposed = false;
  let contextAvailable = true;
  let failed = false;
  let visible = false;
  let frameId = 0;
  let previousFrame = 0;
  let animationTime = 0;
  let pointerX = 0;
  let pointerY = 0;
  let reportedReady = false;

  function stop() {
    cancelAnimationFrame(frameId);
    frameId = 0;
    previousFrame = 0;
  }

  function paint() {
    if (disposed || !contextAvailable || failed) return;
    try {
      renderer.render(scene, camera);
      if (!reportedReady) {
        reportedReady = true;
        onReady(true);
      }
    } catch {
      failed = true;
      reportedReady = false;
      stop();
      onReady(false);
    }
  }

  function resize() {
    if (disposed) return;
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (!width || !height) return;
    // Bound the actual drawing buffer, including very large and high-DPI screens.
    const ratio = Math.min(window.devicePixelRatio || 1, compact.matches ? 1.15 : 1.5,
      Math.sqrt(1_400_000 / (width * height)));
    renderer.setSize(Math.floor(width * ratio), Math.floor(height * ratio), false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (visible && !document.hidden) paint();
  }

  function animate(now: number) {
    frameId = 0;
    if (!visible || document.hidden || reduced.matches || failed || !contextAvailable || disposed) return;
    const frameInterval = 1000 / (compact.matches ? 24 : 30);
    if (!previousFrame || now - previousFrame >= frameInterval) {
      const delta = previousFrame ? Math.min((now - previousFrame) / 1000, 0.1) : 0;
      previousFrame = now;
      animationTime += delta;
      const phase = animationTime * (Math.PI * 2 / 16);
      const damping = 1 - Math.exp(-delta * 4);
      sculpture.rotation.y += (pointerX * 0.12 + Math.sin(phase) * 0.045 - sculpture.rotation.y) * damping;
      sculpture.rotation.x += (-pointerY * 0.06 - sculpture.rotation.x) * damping;
      sculpture.position.y = 0.08 + Math.sin(phase) * 0.055;
      armature.rotation.y = 0.34 + Math.sin(phase) * 0.07;
      armature.rotation.z = -0.24 + Math.sin(phase) * 0.09;
      // Cosine keeps the carriage inside the open rail and reverses without a jump.
      carriage.rotation.z = 0.18 + (1 - Math.cos(phase)) * 0.5 * 5.3;
      key.position.x = -3.8 + Math.sin(phase) * 1.1;
      paint();
    }
    if (!failed) frameId = requestAnimationFrame(animate);
  }

  function sync() {
    stop();
    if (!visible || document.hidden || disposed || !contextAvailable || failed) return;
    if (reduced.matches) {
      sculpture.rotation.set(0, 0, 0);
      sculpture.position.y = 0.08;
      armature.rotation.set(0.3, 0.34, -0.24);
      carriage.rotation.z = 0.18;
      key.position.x = -3.8;
      paint();
    } else {
      frameId = requestAnimationFrame(animate);
    }
  }

  function movePointer(event: PointerEvent) {
    if (!finePointer.matches || reduced.matches) return;
    const bounds = host.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    pointerX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    pointerY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
  }
  function resetPointer() { pointerX = 0; pointerY = 0; }
  function loseContext(event: Event) {
    event.preventDefault();
    contextAvailable = false;
    reportedReady = false;
    stop();
    onReady(false);
  }
  function restoreContext() {
    contextAvailable = true;
    failed = false;
    resize();
    sync();
  }

  const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(
    ([entry]) => {
      visible = entry?.isIntersecting ?? false;
      if (visible) resize();
      sync();
    },
    { threshold: 0.05 },
  );
  const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(resize);
  observer?.observe(host);
  resizeObserver?.observe(host);
  if (!observer) visible = true;
  if (!resizeObserver) window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", sync);
  reduced.addEventListener("change", sync);
  compact.addEventListener("change", resize);
  host.addEventListener("pointermove", movePointer, { passive: true });
  host.addEventListener("pointerleave", resetPointer);
  renderer.domElement.addEventListener("webglcontextlost", loseContext);
  renderer.domElement.addEventListener("webglcontextrestored", restoreContext);
  resize();
  sync();

  return () => {
    disposed = true;
    stop();
    observer?.disconnect();
    resizeObserver?.disconnect();
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", sync);
    reduced.removeEventListener("change", sync);
    compact.removeEventListener("change", resize);
    host.removeEventListener("pointermove", movePointer);
    host.removeEventListener("pointerleave", resetPointer);
    renderer.domElement.removeEventListener("webglcontextlost", loseContext);
    renderer.domElement.removeEventListener("webglcontextrestored", restoreContext);
    scene.environment = null;
    environmentTarget?.dispose();
    textures.forEach((texture) => texture.dispose());
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => material.dispose());
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
    scene.clear();
  };
}
