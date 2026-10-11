import { useEffect, useId, useRef, type CSSProperties } from "react";
import type { ProjectKind } from "../data/profile";
import styles from "../cv.module.css";

type GraphicProps = { markerId: string };
type Port = "top" | "right" | "bottom" | "left";
type NodeProps = {
  x: number;
  y: number;
  width: number;
  label: string;
  compactLabel?: string;
  detail: string;
  kind?: "input" | "module" | "external" | "state" | "output";
  focal?: boolean;
  ports?: Port[];
  arrivals?: Partial<Record<Port, number>>;
};

const labels = {
  hierarchy: {
    file: "documental / arquitectura lógica",
    heading: "Backend documental: procesamiento y contratos",
    description: "Arquitectura lógica de un backend Python en AWS Lambda con extracción OCR, análisis mediante OpenAI API, validación estructural con Pydantic y entrega controlada; no representa infraestructura ni documentos privados.",
    status: "PYTHON / LAMBDA / CONTRATOS",
  },
  migration: {
    file: "visión / desarrollo e inferencia",
    heading: "YOLO: desarrollo offline e inferencia",
    description: "La preparación de imágenes, el entrenamiento y la validación offline desarrollan el modelo YOLO que se integra en la consulta de incidencias, la inferencia y la visualización de paneles y estados.",
    status: "DATASET / MODELO / INFERENCIA",
  },
  locks: {
    file: "escritorio / componentes",
    heading: "Conciliación: dominio y estado recuperable",
    description: "Una integración con MetaTrader 5 alimenta la conciliación y distribución de la aplicación Tauri, Rust y Python; la consulta distingue los datos actuales de las instantáneas anteriores disponibles ante una desconexión.",
    status: "DOMINIO / PERSISTENCIA / CONSULTA",
  },
};

function Connection({ d, markerId, step, secondary = false }: {
  d: string;
  markerId: string;
  step: number;
  secondary?: boolean;
}) {
  return <g style={{ "--trace-delay": `${step * 1600}ms` } as CSSProperties}>
    <path className={secondary ? styles.diagramConnectionSecondary : styles.diagramConnection} d={d} markerEnd={`url(#${markerId})`} />
    {/* Only the decorative packet moves; the complete, labelled flow stays visible. */}
    <path className={styles.diagramSignalTrail} d={d} pathLength="1" aria-hidden="true" />
    <path className={styles.diagramSignal} d={d} pathLength="1" aria-hidden="true" />
  </g>;
}

function SchematicNode({ x, y, width, label, compactLabel, detail, kind = "module", focal = false, ports = [], arrivals = {} }: NodeProps) {
  const positions: Record<Port, [number, number]> = {
    top: [width / 2, 0],
    right: [width, 32],
    bottom: [width / 2, 64],
    left: [0, 32],
  };
  return <g transform={`translate(${x} ${y})`} className={styles.diagramNode} data-node-kind={kind} data-node-focal={focal || undefined}>
    {kind === "state" && <rect x="4" y="4" width={width - 4} height="64" rx="4" className={styles.diagramStateLayer} />}
    <rect width={width} height="64" rx="4" className={styles.diagramNodeSurface} />
    {/* Native text layout preserves the inset and can wrap, unlike SVG <text>. */}
    <foreignObject x="12" y="8" width={width - 24} height="48">
      <div className={styles.diagramNodeContent}>
        <div className={styles.diagramTitle}>
          {compactLabel ? <><span className={styles.diagramWide}>{label}</span><span className={styles.diagramCompact}>{compactLabel}</span></> : label}
        </div>
        <div className={styles.diagramNodeMeta}>{detail}</div>
      </div>
    </foreignObject>
    {ports.map(port => {
      const arrival = arrivals[port];
      return <g key={port}>
        <circle cx={positions[port][0]} cy={positions[port][1]} r="2" className={styles.diagramPort} />
        {arrival !== undefined && <circle cx={positions[port][0]} cy={positions[port][1]} r="4"
          className={styles.diagramPortPulse} aria-hidden="true"
          style={{ "--trace-delay": `${arrival * 1600}ms` } as CSSProperties} />}
      </g>;
    })}
  </g>;
}

function Region({ x, y, width, height, label }: { x: number; y: number; width: number; height: number; label: string }) {
  return <g>
    <rect x={x} y={y} width={width} height={height} rx="8" className={styles.diagramRegion} />
    <foreignObject x={x + 16} y={y + 8} width={width - 32} height="24">
      <div className={styles.diagramRegionLabel}>{label}</div>
    </foreignObject>
  </g>;
}

function EdgeLabel({ x, y, width, label }: { x: number; y: number; width: number; label: string }) {
  return <g>
    <rect x={x} y={y} width={width} height="24" rx="2" className={styles.diagramLabelMask} />
    <foreignObject x={x + 4} y={y + 4} width={width - 8} height="16">
      <div className={styles.diagramEdgeLabel}>{label}</div>
    </foreignObject>
  </g>;
}

function GraphicHeading({ title, stack }: { title: string; stack: string }) {
  return <g>
    <text x="44" y="32" className={styles.diagramHeading}>{title}</text>
    <text x="516" y="32" textAnchor="end" className={styles.diagramMeta}>{stack}</text>
  </g>;
}

function GraphicCaption({ children, divider = true }: { children: string; divider?: boolean }) {
  return <g>
    {divider && <path className={styles.diagramRule} d="M44 312H516" />}
    <text x="44" y="336" className={styles.diagramCaption}>{children}</text>
  </g>;
}

function DocumentGraphic({ markerId }: GraphicProps) {
  return <>
    <GraphicHeading title="Procesamiento documental" stack="Python / Lambda" />
    <Region x={164} y={76} width={208} height={224} label="BACKEND ASÍNCRONO" />
    <Connection d="M156 156H188" markerId={markerId} step={0} />
    <Connection d="M348 156H404" markerId={markerId} step={1} />
    <Connection d="M460 188V196Q460 204 452 204H276Q268 204 268 212V224" markerId={markerId} step={2} secondary />
    <Connection d="M348 256H404" markerId={markerId} step={3} />
    <SchematicNode x={44} y={124} width={112} label="Documentos" compactLabel="Archivo" detail="entrada" kind="input" ports={["right"]} />
    <SchematicNode x={188} y={124} width={160} label="Extracción" detail="OCR" ports={["left", "right"]} arrivals={{ left: 0 }} />
    <SchematicNode x={404} y={124} width={112} label="Análisis IA" detail="OpenAI API" kind="external" ports={["left", "bottom"]} arrivals={{ left: 1 }} />
    <SchematicNode x={188} y={224} width={160} label="Validación" detail="Pydantic" focal ports={["top", "right"]} arrivals={{ top: 2 }} />
    <SchematicNode x={404} y={224} width={112} label="Entrega" detail="controlada" kind="output" ports={["left"]} arrivals={{ left: 3 }} />
    <GraphicCaption>Acceso · Reintentos por operación · Trazabilidad</GraphicCaption>
  </>;
}

function VisionGraphic({ markerId }: GraphicProps) {
  return <>
    <GraphicHeading title="Visión computacional" stack="Python / YOLO" />
    <Region x={44} y={60} width={472} height={116} label="DESARROLLO OFFLINE" />
    <Region x={44} y={204} width={472} height={116} label="EJECUCIÓN EN LA APLICACIÓN" />
    <Connection d="M172 132H212" markerId={markerId} step={0} />
    <Connection d="M348 132H388" markerId={markerId} step={1} />
    <Connection d="M444 164V200Q444 208 436 208H288Q280 208 280 216V244" markerId={markerId} step={2} secondary />
    <Connection d="M172 276H212" markerId={markerId} step={3} />
    <Connection d="M348 276H388" markerId={markerId} step={4} />
    <EdgeLabel x={312} y={176} width={64} label="MODELO" />
    <SchematicNode x={60} y={100} width={112} label="Dataset" detail="etiquetado" kind="input" ports={["right"]} />
    <SchematicNode x={212} y={100} width={136} label="Entrenamiento" compactLabel="Entrenar" detail="YOLO" ports={["left", "right"]} arrivals={{ left: 0 }} />
    <SchematicNode x={388} y={100} width={112} label="Validación" detail="offline" ports={["left", "bottom"]} arrivals={{ left: 1 }} />
    <SchematicNode x={60} y={244} width={112} label="Consulta" detail="incidencias" kind="input" ports={["right"]} />
    <SchematicNode x={212} y={244} width={136} label="Inferencia" detail="YOLO" focal ports={["left", "top", "right"]} arrivals={{ top: 2, left: 3 }} />
    <SchematicNode x={388} y={244} width={112} label="Detección" detail="panel/estado" kind="output" ports={["left"]} arrivals={{ left: 4 }} />
    <GraphicCaption divider={false}>Aumento de imágenes · Evaluación · Visualización</GraphicCaption>
  </>;
}

function StateGraphic({ markerId }: GraphicProps) {
  return <>
    <GraphicHeading title="Conciliación y recuperación" stack="Tauri / Rust / Python" />
    <Region x={172} y={84} width={200} height={224} label="DOMINIO / ESTADO" />
    <Connection d="M156 164H196" markerId={markerId} step={0} />
    <Connection d="M348 164H412" markerId={markerId} step={1} />
    <Connection d="M272 196V232" markerId={markerId} step={2} />
    <Connection d="M348 264H456Q464 264 464 256V196" markerId={markerId} step={3} secondary />
    <EdgeLabel x={352} y={132} width={56} label="ACTUAL" />
    <EdgeLabel x={352} y={232} width={104} label="SIN CONEXIÓN" />
    <SchematicNode x={44} y={132} width={112} label="Integración" compactLabel="Datos" detail="MT5" kind="input" ports={["right"]} />
    <SchematicNode x={196} y={132} width={152} label="Conciliación" detail="distribución" focal ports={["left", "right", "bottom"]} arrivals={{ left: 0 }} />
    <SchematicNode x={196} y={232} width={152} label="Instantánea" detail="estado anterior" kind="state" ports={["top", "right"]} arrivals={{ top: 2 }} />
    <SchematicNode x={412} y={132} width={104} label="Consulta" detail="vigencia" kind="output" ports={["left", "bottom"]} arrivals={{ left: 1, bottom: 3 }} />
    <GraphicCaption>Consistencia monetaria · Vigencia explícita de datos</GraphicCaption>
  </>;
}

const graphics = { hierarchy: DocumentGraphic, migration: VisionGraphic, locks: StateGraphic };

export default function ArchitectureDiagram({ kind }: { kind: ProjectKind }) {
  const id = `cv-figure-${useId().replace(/[^a-zA-Z0-9_-]/g, "_")}`;
  const markerId = `${id}-arrow`;
  const frame = useRef<HTMLDivElement>(null);
  const label = labels[kind];
  const Graphic = graphics[kind];

  useEffect(() => {
    const element = frame.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) { element.dataset.visualActive = "true"; return; }
    const observer = new IntersectionObserver(([entry]) => { element.dataset.visualActive = String(entry.isIntersecting); }, { threshold: .1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frame} className={styles.diagramFrame} data-visual-animate data-visual-active="false" data-motion-mode="loop">
      <div className={styles.diagramToolbar}>
        <span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span>
        <span className={styles.diagramFilename}>{label.file}</span>
        <span className={styles.diagramToolbarStatus}><i aria-hidden="true" />VISTA CONCEPTUAL</span>
      </div>
      <svg className={styles.diagramSvg} viewBox="0 0 560 350" role="img" aria-labelledby={`${id}-title ${id}-description`}>
        <title id={`${id}-title`}>{label.heading}</title>
        <desc id={`${id}-description`}>{label.description}</desc>
        <defs>
          <marker id={markerId} viewBox="0 0 8 8" refX="8" refY="4" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
            <path className={styles.diagramArrow} d="M1 1L7 4L1 7" />
          </marker>
        </defs>
        <g aria-hidden="true"><Graphic markerId={markerId} /></g>
      </svg>
      <div className={styles.diagramFooter}><span><i aria-hidden="true" /><span>{label.status}</span></span><span>esquema conceptual</span></div>
    </div>
  );
}
