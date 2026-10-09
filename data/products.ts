export type CategoryId = "discover" | "automate" | "analyze" | "build";

export type Product = {
  id: string;
  category: CategoryId;
  name: string;
  suffix?: string;
  platform: string;
  headline: string;
  flow: string[];
  doesLabel?: string;
  does: string;
  guards: string;
  price: number;
  chips: string[];
  demoLabel: string;
  demoResult: string;
  tone: "success" | "loss" | "neutral" | "data";
  href: string;
  accent: string;
  demoType: "chart" | "terminal" | "analysis" | "workflow";
};

export const categories: {
  id: CategoryId;
  label: string;
  title: string;
  question: string;
}[] = [
  {
    id: "discover",
    label: "Discover",
    title: "Start with context.",
    question: "What deserves a closer look?",
  },
  {
    id: "automate",
    label: "Automate",
    title: "Give repetition a system.",
    question: "What could a defined routine do for you?",
  },
  {
    id: "analyze",
    label: "Analyze",
    title: "See the decisions clearly.",
    question: "What can a session tell you?",
  },
  {
    id: "build",
    label: "Build",
    title: "Make a process your own.",
    question: "How would you structure the next step?",
  },
];

/**
 * Temporary catalogue concepts, not a list of available products or bot features.
 * Names, capabilities, prices and visual sessions are illustrative design content.
 * Blue Boost Bot and its proposed licensing offers are described separately below.
 */
export const products: Product[] = [
  {
    id: "context-lens",
    category: "discover",
    name: "Context",
    suffix: "Lens",
    platform: "Research concept · Forex",
    headline: "A wider view before a closer look.",
    flow: ["Observe", "Compare", "Review"],
    does: "Imagines a compact view of instrument context, without calling a trade.",
    guards: "The displayed market is synthetic. No forecast or recommendation.",
    price: 39,
    chips: ["Concept", "Context"],
    demoLabel: "CONCEPT · CONTEXT LENS",
    demoResult: "Context ready · simulated",
    tone: "data",
    href: "/documentation#introduction",
    accent: "var(--accent-1)",
    demoType: "chart",
  },
  {
    id: "session-atlas",
    category: "discover",
    name: "Session",
    suffix: "Atlas",
    platform: "Research concept · Sessions",
    headline: "Different sessions. One readable map.",
    flow: ["Session", "Activity", "Context"],
    does: "Explores how a session overview could organize market activity.",
    guards: "Illustrative activity only; no real-time feed or execution signal.",
    price: 49,
    chips: ["Concept", "Sessions"],
    demoLabel: "CONCEPT · SESSION ATLAS",
    demoResult: "Session mapped · simulated",
    tone: "neutral",
    href: "/documentation#introduction",
    accent: "var(--accent-2)",
    demoType: "analysis",
  },
  {
    id: "market-notebook",
    category: "discover",
    name: "Market",
    suffix: "Notebook",
    platform: "Research concept · Journal",
    headline: "Keep the observation, not the noise.",
    flow: ["Notice", "Record", "Revisit"],
    does: "Illustrates a simple place to organize observations for later review.",
    guards: "Sample notes are not trading advice or evidence of performance.",
    price: 29,
    chips: ["Concept", "Notes"],
    demoLabel: "CONCEPT · MARKET NOTEBOOK",
    demoResult: "Note recorded · simulated",
    tone: "data",
    href: "/documentation#introduction",
    accent: "var(--accent-3)",
    demoType: "terminal",
  },
  {
    id: "execution-draft",
    category: "automate",
    name: "Execution",
    suffix: "Draft",
    platform: "Automation concept · MT5",
    headline: "From a defined routine to a repeatable sequence.",
    flow: ["Prepare", "Sequence", "Review"],
    does: "Presents a conceptual automation sequence using an invented session.",
    guards: "No live orders. This is not Blue Boost Bot or its private strategy.",
    price: 79,
    chips: ["Concept", "Automation"],
    demoLabel: "CONCEPT · EXECUTION DRAFT",
    demoResult: "Sequence complete · simulated",
    tone: "success",
    href: "/documentation#introduction",
    accent: "var(--accent-4)",
    demoType: "workflow",
  },
  {
    id: "trade-trace",
    category: "analyze",
    name: "Trade",
    suffix: "Trace",
    platform: "Review concept · Journal",
    headline: "Follow a session without losing the thread.",
    flow: ["Timeline", "Decisions", "Review"],
    does: "Explores a readable timeline for reviewing an example trading session.",
    guards: "The sequence is authored for this demo, not a customer account.",
    price: 59,
    chips: ["Concept", "Timeline"],
    demoLabel: "CONCEPT · TRADE TRACE",
    demoResult: "Trace assembled · simulated",
    tone: "data",
    href: "/documentation#introduction",
    accent: "var(--accent-5)",
    demoType: "chart",
  },
  {
    id: "risk-sketch",
    category: "analyze",
    name: "Risk",
    suffix: "Sketch",
    platform: "Review concept · Scenarios",
    headline: "Make the downside part of the picture.",
    flow: ["Scenario", "Exposure", "Review"],
    does: "Visualizes an invented adverse scenario as a design exploration.",
    guards: "A risk illustration is not protection against loss or a suitability check.",
    price: 49,
    chips: ["Concept", "Scenarios"],
    demoLabel: "CONCEPT · RISK SKETCH",
    demoResult: "Adverse case · simulated",
    tone: "loss",
    href: "/documentation#introduction",
    accent: "var(--accent-8)",
    demoType: "analysis",
  },
  {
    id: "routine-canvas",
    category: "build",
    name: "Routine",
    suffix: "Canvas",
    platform: "Planning concept · Workflow",
    headline: "A clear place for the next step.",
    flow: ["Outline", "Arrange", "Review"],
    does: "Imagines a visual way to structure a personal research routine.",
    guards: "No strategy builder, parameter access or source code is promised.",
    price: 39,
    chips: ["Concept", "Planning"],
    demoLabel: "CONCEPT · ROUTINE CANVAS",
    demoResult: "Routine arranged · simulated",
    tone: "neutral",
    href: "/documentation#introduction",
    accent: "var(--accent-6)",
    demoType: "workflow",
  },
  {
    id: "research-kit",
    category: "build",
    name: "Research",
    suffix: "Kit",
    platform: "Planning concept · Workspace",
    headline: "Bring the research into one view.",
    flow: ["Collect", "Organize", "Review"],
    does: "Brings the catalogue's example observations into a fictional workspace.",
    guards: "No backtest, private data or verified result is included in this demo.",
    price: 59,
    chips: ["Concept", "Workspace"],
    demoLabel: "CONCEPT · RESEARCH KIT",
    demoResult: "Workspace ready · simulated",
    tone: "success",
    href: "/documentation#introduction",
    accent: "var(--accent-7)",
    demoType: "terminal",
  },
];

/** A noncommercial sample used only to demonstrate the pricing composition. */
export const demoBundle = {
  price: 99,
  name: "Research collection",
};

export const licensePlans = [
  { id: "30-days", name: "Start", days: 30, price: 59 },
  { id: "90-days", name: "Continue", days: 90, price: 149 },
  { id: "365-days", name: "Commit", days: 365, price: 399 },
] as const;

export const contactEmail = "investorslogics@gmail.com";
