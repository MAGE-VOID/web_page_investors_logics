# Investors Logics frontend

This project uses Vite, React and TypeScript. Do not migrate it to Next.js unless
the user explicitly requests that change again.

- Entry point: `index.html` → `src/main.tsx` → `src/router.tsx`.
- Active pages, components and data live in `app/`, `components/` and `data/`.
- The `@/` alias resolves to the project root, not `src/`.
- Keep the visual contract in `DESIGN.md`, `tokens.css` and `styles/` unchanged
  when working only on tooling or routing.
- The older `src/app`, `src/components`, `src/data` and `src/styles` trees are
  preserved history, not the active frontend. Do not restore their old design.
- Use `npm run typecheck`, `npm run lint` and `npm run build` for verification.
- Keep the bot's source, strategy, private parameters and non-public results
  out of public pages and client bundles.
