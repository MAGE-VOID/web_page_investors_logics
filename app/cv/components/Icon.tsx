import type { CSSProperties } from "react";

type IconName = "arrow" | "github" | "layers" | "platform" | "ai" | "network" | "close" | "command" | "copy" | "sun";

export default function Icon({ name, size = 20, style }: { name: IconName; size?: number; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>
      {name === "arrow" && <><path d="M5 12h14m-5-5 5 5-5 5" /></>}
      {name === "github" && <><path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.8c0-1 .1-1.5-.5-2.2 3.4-.4 7-1.7 7-7.5a5.8 5.8 0 0 0-1.5-4A5.4 5.4 0 0 0 19.9.5S18.7.1 16 2a13.8 13.8 0 0 0-8 0C5.3.1 4.1.5 4.1.5a5.4 5.4 0 0 0-.1 4A5.8 5.8 0 0 0 2.5 8.5c0 5.8 3.6 7.1 7 7.5-.5.6-.6 1.2-.5 2.2V22" /></>}
      {name === "layers" && <><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" /></>}
      {name === "platform" && <><rect x="3" y="3" width="18" height="6" rx="2" /><rect x="3" y="15" width="18" height="6" rx="2" /><path d="M12 9v6M7 6h.01M7 18h.01m10-12h.01m0 12h.01" /></>}
      {name === "ai" && <><path d="m12 3 2.8 6.2L21 12l-6.2 2.8L12 21l-2.8-6.2L3 12l6.2-2.8L12 3ZM20 2v4m-2-2h4" /></>}
      {name === "network" && <><rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><path d="M12 8v4M5 16v-4h14v4" /></>}
      {name === "close" && <path d="m6 6 12 12M6 18 18 6" />}
      {name === "command" && <><path d="M8 8h8v8H8z" /><path d="M8 8H5.5A2.5 2.5 0 1 1 8 5.5V8Zm8 0V5.5A2.5 2.5 0 1 1 18.5 8H16Zm0 8h2.5a2.5 2.5 0 1 1-2.5 2.5V16Zm-8 0v2.5A2.5 2.5 0 1 1 5.5 16H8Z" /></>}
      {name === "copy" && <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M15 8V4H4v11h4" /></>}
      {name === "sun" && <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>}
    </svg>
  );
}
