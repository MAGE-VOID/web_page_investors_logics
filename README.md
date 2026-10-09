# Investors Logics

Frontend de catálogo construido con Vite, React, React Router, TypeScript y CSS
explícito. Reproduce el sistema visual de los HTML/CSS de referencia aportados
por el usuario, con la identidad, los textos y los dibujos de Investors Logics.

## Iniciar el proyecto

Node.js 22.12 o superior y npm, según la [guía de Vite](https://vite.dev/guide/).
El lockfile está actualizado para la aplicación Vite.

```powershell
cd "F:\Desktop\Jobs\ToT\INVESTORS LOGICS\web_page_investors_logics"
npm ci
npm run dev
```

Puerto configurado: [http://127.0.0.1:4000](http://127.0.0.1:4000).
Si está ocupado por la antigua página, detén ese servidor desde su propia
terminal o inicia una vista independiente:

```powershell
cd "F:\Desktop\Jobs\ToT\INVESTORS LOGICS\web_page_investors_logics"
npm run dev -- --port 4001
```

Producción: `npm run build` genera `dist/`. Para revisar esa compilación
localmente, usa `npm run preview` o `npm run start`. El puerto sigue siendo 4000.
Si ya tienes un servidor abierto, reinícialo para cargar la configuración actual.

Para publicar, sirve `dist/` y configura el hosting para devolver `index.html`
en `/documentation`, `/contact` y `/legal`, conservando la URL solicitada.
Es una reescritura interna del hosting, no una redirección. Permite abrir y
recargar las páginas directamente. Las URLs que no corresponden a una ruta
registrada muestran la página 404 de la aplicación.

## Rutas públicas

Solo hay cuatro rutas directas, sin alias ni redirecciones:

| Ruta | Contenido |
| --- | --- |
| `/` | Catálogo, precios, preguntas frecuentes e información de Investors Logics. |
| `/documentation` | Todas las guías públicas en una página, con índice y anclas. |
| `/contact` | Consultas de compra/alquiler, centro de ayuda e información de soporte. |
| `/legal` | Términos, condiciones y advertencias de riesgo existentes. |

Las guías se enlazan con `/documentation#introduction`, `#installation`, `#mt5`,
`#broker`, `#forex`, `#automation`, `#vps`, `#security` y `#resources`.
`/#about`, `/contact#help` y `/contact#support` apuntan a secciones de esas mismas
páginas; no son rutas adicionales. Los parámetros de consulta de contacto
(`mode`, `plan`, `product`) siguen preseleccionando la consulta.

`/products` y las antiguas subrutas de documentación ya no están registradas.
Muestran 404 sin cambiar la URL. Sus archivos de contenido se reutilizan como
componentes de las páginas agrupadas, no como rutas independientes.

## Qué está activo

`/` muestra el catálogo. Incluye cabecera y menú, hero con
película original de cinco capítulos, navegación sticky, ocho conceptos desde
datos, tarjetas responsive, Why, precios, FAQ, dock y un diálogo funcional con
play/replay, slider y sesiones alternativas.

La documentación pública y las consultas de venta/alquiler están en
`/documentation` y `/contact`; los términos se encuentran en `/legal`.
La aplicación es una SPA de React, sin servidor
Next.js ni React Server Components. Contacto, documentación y legal se cargan por ruta;
los motores del canvas conservan su carga diferida cerca del viewport.

- `index.html` y `src/main.tsx`: entrada de Vite y montaje de React.
- `src/router.tsx`: rutas, carga diferida y títulos de página.
- `app/`: páginas y layouts de React; no usa convenciones automáticas de Next.js.
- `components/` y `data/`: componentes activos y contenido público.

- `tokens.css`: variables y compatibilidad con las páginas públicas.
- `styles/proea-base.css` y `styles/proea-products.css`: reglas visuales de las fuentes.
- `styles/reference-header.css`: medidas observadas de la cabecera.
- `app/products/products.css`: adaptaciones mínimas de integración.
- `DESIGN.md`: contrato visual y comportamiento de la implementación.
- `data/products.ts`: conceptos, categorías, demos y propuestas de licencia.
- `data/blueBoost.ts` y `PRODUCT.md`: información pública del producto real.

`reference/proea/` conserva las fuentes como material de investigación; no se
publican ni se ejecutan sus scripts. No se usan nombres de producto, textos,
logotipos o imágenes comerciales de la referencia.

Los árboles antiguos `src/app/`, `src/components/`, `src/data/` y `src/styles/`
están preservados pero no se importan ni se compilan. El diseño activo sigue en
`app/`, `components/` y `styles/`; volver a Vite no restaura la página anterior.
El alias `@/` apunta a la raíz del proyecto. El lockfile histórico de Vite
permanece en `legacy/package-lock.vite.json` como referencia.

## Contenido temporal y privacidad

Los ocho conceptos, sus precios y la colección de USD 99 son ejemplos editables,
no productos disponibles ni una oferta real. Las sesiones usan datos sintéticos.

Blue Boost Bot se presenta por separado: alquileres propuestos de USD 59 / 30
días, USD 149 / 90 días y USD 399 / 365 días. Compra y duración por consulta.
La interfaz prepara consultas por correo; no cobra, activa licencias ni opera
cuentas. Nunca publica estrategia, código fuente, parámetros privados o
resultados no públicos.

## Verificación

```powershell
npm run typecheck
npm run lint
npm run build
```

La simplificación de rutas del 2026-10-09 pasó TypeScript, ESLint y compilación
de producción. La comprobación de código confirmó cuatro rutas públicas,
14 URLs retiradas resueltas por el handler 404, 21 destinos internos con sus
anclas y un único H1 por página. No se añadieron redirecciones. Esta revisión
de organización no inició servidores ni hizo una nueva revisión visual.

La revisión del 2026-10-02 verificó TypeScript, ESLint, compilación de producción
y la aplicación Vite en 1440×1000, 1024×900, 768×900 y 390×844. Se completaron
los estados de animación, flujo/scrubber, receipt interactivo y foco entre rutas,
y se corrigió el halo que producía un scrollbar horizontal en el dialog de tablet.
Se utilizó el servidor existente en 4000, sin abrir otro puerto. La evidencia
anterior a la migración se conserva por separado y está identificada como histórica.
Las medidas, capturas y límites están en [QA](docs/design-references/QA.md).
No se afirma una auditoría WCAG, rendimiento certificado ni integración de pagos.
