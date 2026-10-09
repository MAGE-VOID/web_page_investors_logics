import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CommandPalette.module.css";

const destinations = [
  { label: "Blue Boost Bot", detail: "Explore our Forex trading robot for MetaTrader 5", to: "/#demo" },
  { label: "Buying and renting", detail: "Explore purchase enquiries and proposed rental periods", to: "/products#license-options" },
  { label: "Help and guides", detail: "Find installation and product guidance", to: "/documentation" },
  { label: "Product guide", detail: "See what the bot does and what your license includes", to: "/documentation/introduction" },
  { label: "Algorithmic Trading", detail: "Review the principles and limits", to: "/documentation/table-of-contents/algorithmic-trading" },
  { label: "Getting Started", detail: "Set up the bot and start on demo", to: "/documentation/table-of-contents/getting-started" },
  { label: "Trading Platform", detail: "Understand the role of MetaTrader 5", to: "/documentation/table-of-contents/platforms" },
  { label: "Resources", detail: "Browse support resources", to: "/documentation/table-of-contents/resources" },
  { label: "VPS Operations", detail: "Review continuity and maintenance", to: "/documentation/infrastructure/virtual-private-server" },
  { label: "Cybersecurity", detail: "Protect accounts and recognise scams", to: "/documentation/infrastructure/cybersecurity-and-scams" },
  { label: "Choosing a Broker", detail: "Use the compatibility checklist", to: "/documentation/best-brokers" },
  { label: "Help Center", detail: "Answers about licenses, brokers and setup", to: "/documentation/assistance-and-policies/help-center" },
  { label: "Contact support", detail: "Get help from Investors Logics", to: "/documentation/contact" },
];

export default function CommandPalette() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return destinations;
    return destinations.filter((item) =>
      `${item.label} ${item.detail}`.toLocaleLowerCase().includes(normalized),
    );
  }, [query]);

  function openPalette() {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }

  function closePalette() {
    dialogRef.current?.close();
  }

  function selectDestination(index: number) {
    const destination = results[index];
    if (!destination) return;
    closePalette();
    navigate(destination.to);
  }

  useEffect(() => {
    function openFromKeyboard(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
        event.preventDefault();
        openPalette();
      }
    }

    document.addEventListener("keydown", openFromKeyboard);
    return () => document.removeEventListener("keydown", openFromKeyboard);
  }, []);

  return (
    <>
      <button
        className={styles.trigger}
        type="button"
        onClick={openPalette}
        aria-label="Search guides and products"
        aria-haspopup="dialog"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
        <span className={styles.triggerText}>Search</span>
        <kbd className={styles.shortcut}>⌘K</kbd>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Search guides and products"
        onClose={() => {
          setQuery("");
          setActiveIndex(0);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePalette();
        }}
      >
        <div className={styles.panel}>
          <div className={styles.searchRow}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
            <label className={styles.visuallyHidden} htmlFor="command-search">Search pages</label>
            <input
              id="command-search"
              ref={inputRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setActiveIndex((index) => Math.max(0, Math.min(index + 1, results.length - 1)));
                }
                if (event.key === "ArrowUp") {
                  event.preventDefault();
                  setActiveIndex((index) => Math.max(index - 1, 0));
                }
                if (event.key === "Enter") {
                  event.preventDefault();
                  selectDestination(activeIndex);
                }
              }}
              placeholder="Search the bot, pricing or guides…"
              autoComplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-controls="command-results"
              aria-expanded="true"
              aria-activedescendant={results[activeIndex] ? `command-${activeIndex}` : undefined}
            />
            <button className={styles.close} type="button" onClick={closePalette} aria-label="Close search">Esc</button>
          </div>

          <div id="command-results" className={styles.results} role="listbox" aria-label="Matching pages">
            {results.length ? (
              results.map((item, index) => (
                <button
                  id={`command-${index}`}
                  key={item.to}
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  className={`${styles.result} ${index === activeIndex ? styles.activeResult : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => selectDestination(index)}
                >
                  <span>{item.label}</span>
                  <span className={styles.resultDetail}>{item.detail}</span>
                </button>
              ))
            ) : (
              <p className={styles.empty}>No matching pages. Try “license”, “MT5” or “broker”.</p>
            )}
          </div>

          <div className={styles.hints} aria-hidden="true">
            <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Open</span>
            <span><kbd>Esc</kbd> Close</span>
          </div>
        </div>
      </dialog>
    </>
  );
}
