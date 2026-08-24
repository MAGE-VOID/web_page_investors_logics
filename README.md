# Investors Logics

Single-page React application built with Vite, TypeScript, React Router, and CSS Modules.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Development

```powershell
cd "F:\Desktop\Jobs\ToT\INVESTORS LOGICS\web_page_investors_logics"
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Checks and production build

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

The production preview also uses [http://localhost:4173](http://localhost:4173).

## Deployment

The build output is written to `dist/`. Because the app uses browser-based routing, configure the hosting provider to rewrite unknown paths to `index.html` so direct visits to documentation URLs keep working.
