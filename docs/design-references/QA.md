# Revisión del frontend

Última revisión: 2026-10-02.

## Revisión actual: Vite, 2026-10-02

Se revisó la aplicación Vite real en la vista existente
`http://127.0.0.1:4000/products`, sin crear otro servidor ni otro puerto.
Se volvió a leer el HTML completo, ambos CSS y la captura suministrados.
Los estilos portados conservan exactamente las reglas de ambos CSS fuente;
las correcciones se limitaron a integración e interacciones, no a reinterpretar
su diseño. Dos subagentes revisaron por separado los motores y los controles.

### Medidas y responsive

| Viewport | Ancho del contenido / scrollWidth | H1 | Hero stage | Catálogo |
| --- | --- | --- | --- | --- |
| 1440 × 1000 | 1425px / 1425px | 79.55px | 1200 × 521.734px | 6 tracks; 3 tarjetas normales |
| 1024 × 900 | 1009px / 1009px | 60.414px | 969 × 421.297px | 6 tracks; 3 tarjetas normales |
| 768 × 900 | 753px / 753px | 48.638px | 713 × 310px | 2 columnas; última impar de ancho completo |
| 390 × 844 | 375px / 375px | 44px | 335 × 394.109px | 1 columna |

Se conservan las posiciones del stage: 331.344 / 309.422 / 367.156 / 263.938px,
respectivamente. En escritorio la columna lateral mide 400px. Las tarjetas
normales, dobles y únicas mantienen las medidas de la revisión anterior y los
valores de la fuente. No hubo desbordamiento horizontal del documento.
El nav móvil conserva su scroll horizontal intencional dentro de su propia fila.

Pricing conserva la composición 5/7: tracks de 447.703 / 626.781px a 1440 y
378.516 / 529.938px a 1024. A 768 pasa a una columna, con card de 560px centrada;
a 390, la card mide 335px. Las barras de comparación miden 12px de alto.
El número de filas, iconos y algunas alturas de texto difieren por el contenido
propio: ocho conceptos frente a once productos de la referencia.

### Interacciones comprobadas en Vite

- Menú: apertura, Escape y foco de regreso al botón Products.
- Hero: capítulos, escena final persistente y estado de pausa global.
- Categorías: saltos reales, nav plegado a y=0 una vez terminada su transición,
  categoría activa y reinicio a Discover al regresar al hero.
- Dock: visible en catálogo; oculto en pricing y durante el dialog.
- Receipt: sus enlaces abren el mismo dialog; el foco/puntero conecta cada fila
  con el segmento correspondiente, usando los estados `data-hot` de la fuente.
- Modal: apertura desde tarjeta y receipt, body bloqueado, foco inicial en cierre,
  Escape, scroll restaurado y foco de regreso al trigger. Previous/Next devuelve
  el foco al cierre y el dialog al inicio.
- Scrubber: Home, siete PageUp hasta 700/1000 y End hasta 1000/1000. A 70% el
  panel y las marcas muestran el segundo paso; a 100%, el tercero y Complete.
- Responsive del modal: dos columnas a 1440/1024, una a 768 y bottom sheet a 390;
  canvas 420px o 300px en móvil. Footer móvil fijo, 135.719px de alto, dos acciones
  y reserva de espacio para no tapar el contenido.
- FAQ: apertura/cierre de details nativo.
- Rutas: Guides y Contact cargan páginas/títulos correctos y enfocan main al
  cambiar pathname. Contacto móvil conserva 375px de contenido sin overflow.
- Consola del navegador: sin errores ni advertencias capturados en esta sesión.

### Correcciones de esta revisión

- Relojes RAF de 24/30 fps conservan el remanente; no se confunde con el tiempo
  transcurrido de reproducción. Estos son objetivos de dibujo, no FPS medidos.
- Reduced motion publica el progreso final al completar una demo ambiental,
  evitando un badge oculto después de detener RAF.
- Workflow del póster y canvas comparten el breakpoint de 620px; spans del flujo,
  paneles y hitos se sincronizan a 0/50/100%, con limpieza de clases y listeners.
- Observer sticky se recalcula también al cambiar reduced motion, sin depender
  únicamente de transitionend.
- Foco entre rutas nuevas, sin interceptar fragmentos ni Back/Forward.
- El aura del canvas sobresalía 14px del scrollport del dialog a 768px. Se contiene
  el overflow X en el borde del dialog, conservando su ancho, scroll Y, columnas,
  aura y padding. El scrollbar horizontal desaparece; el contenido normal ya cabía.

Capturas actuales: `vite-{1440,1024,768,390}-top.jpg`,
`vite-{1440,1024,768,390}-pricing.jpg`,
`vite-{1440,1024,768,390}-modal.jpg`,
`vite-{1024,768,390}-catalog.jpg`, `vite-1440-comparison.jpg` y `vite-1440-why.jpg`.
Las capturas del modal incluyen estados de reproducción y exploración manual.

`npm run typecheck`, `npm run lint` y `npm run build` finalizaron con código 0.
Se mantuvo el servidor del usuario en 4000 y se restableció el viewport temporal.
No se enviaron correos, formularios, pagos ni órdenes. El catálogo sigue siendo
ilustrativo; venta/alquiler de Blue Boost se mantiene como consulta separada.
Reduced motion, visibilidad, DPR y cleanup se revisaron en código, no cambiando
preferencias del sistema. No se afirma igualdad píxel a píxel entre textos/dibujos
distintos, auditoría WCAG ni mediciones de FPS, Lighthouse o CLS.

## Migración a Vite, 2026-10-01

Por indicación del usuario se volvió a Vite 8.2.1, con React y React Router.
Se conservaron el diseño, los tokens, las fuentes, los CSS de referencia y los
motores de canvas. Se adaptaron el montaje, los enlaces internos, las rutas,
los títulos y los parámetros de contacto. Next.js ya no es una dependencia,
y sus archivos de configuración y tipos generados fueron retirados.

`npm run typecheck`, `npm run lint` y `npm run build` finalizaron con código 0.
Vite genera `dist/`; contacto, documentación y motores de canvas tienen chunks
separados. Las rutas son una SPA y el hosting debe tener fallback a `index.html`.
No se inició un nuevo servidor ni se repitió una revisión visual en navegador
para esta migración. Se detuvo únicamente la vista previa Next.js creada por
el agente en el puerto 4001; no se detuvo el servidor previo del usuario.

La instalación todavía reporta un aviso alto en `brace-expansion`, transitivo
de las herramientas de desarrollo. No se aplicó un `audit fix` ajeno al cambio
de stack. Este aviso no se presenta como una vulnerabilidad del bundle público.

## Revisión visual anterior (antes de volver a Vite)

La evidencia siguiente corresponde a Next.js 16.3.8 en Chromium de escritorio,
con vista local `http://127.0.0.1:4001/products`. No debe interpretarse como una
nueva comprobación visual de la aplicación Vite.

## Fuente y alcance

Se inspeccionaron el HTML, ambos CSS y la captura suministrados por el usuario.
Los estilos `.pw-*` y `.pv-*` se portaron conservando sus valores y su cascada.
La cabecera y el footer se contrastaron también mediante lectura del DOM y de
sus estilos calculados en la referencia.

Se reemplazaron identidad, textos, nombres, número de conceptos, precios,
destinos y dibujos. No se copiaron assets comerciales ni se ejecutaron los
scripts del HTML archivado.

Esto no es una afirmación de igualdad píxel a píxel entre contenidos distintos.
La comparación priorizó medidas comunes, proporciones, fuentes, jerarquía,
espaciado, estilos de controles y responsive. Las sesiones del canvas son
deliberadamente originales.

## Medidas verificadas

La barra vertical del navegador reserva 15px; el ancho útil del documento es
inferior al viewport. Se reprodujo el `scrollbar-gutter: stable` de la fuente.

| Viewport | Ancho útil / scrollWidth | H1 | Visual del hero | Y del visual | Cuadrícula |
| --- | --- | --- | --- | --- | --- |
| 1440 × 1000 | 1425 / 1425 | 79.55px · 146.344px alto | 1200 × 521.734 | 331.344 | 6 tracks, 3 tarjetas normales |
| 1024 × 900 | 1009 / 1009 | 60.414px · 111.125px alto | 969 × 421.297 | 309.422 | 6 tracks |
| 768 × 900 | 753 / 753 | 48.638px · 44.734px alto | 713 × 310 | 367.156 | 2 columnas |
| 390 × 844 | 375 / 375 | 44px · 80.938px alto | 335 × 394.109 | 263.938 | 1 columna |

Las medidas del H1, la columna lateral y el visual coinciden con la fuente
en los viewports comunes. A 1440px la cabecera mide 1080 × 60.922px, x=172.5,
y=14. La columna lateral mide 400px. El hero completo mide 1019.219px.
A 1024px el hero mide 896.859px; a 768px, 863.438px.

El hero móvil de Investors Logics mide 1039.453px frente a 1019.313px en la
fuente: su aviso propio ocupa una línea adicional. No se modificaron márgenes,
fuente o alturas del visual para ocultar esa diferencia de contenido.

Visuales del catálogo:

- 1440px: normal 386.656 × 241.656; único 708.734 × 354.359;
  pareja 590 × 295.
- 1024px: normal 309.656 × 193.531; único 568.328 × 284.156;
  pareja 474.5 × 237.25.
- 768px: normal 346.5 × 216.563; última tarjeta impar/única 713 × 285.188.
- 390px: normal 335 × 209.375.

El pricing conserva la composición 5/7 y el ancho interno de 1160px en
escritorio; a 768px su card se centra a 560px y mide 529.063px de alto, con una
columna. En móvil mide 335px de ancho. El número de filas y algunas alturas de
texto difieren porque hay ocho conceptos y no once productos de la referencia.

No se detectó overflow horizontal del documento ni de los contenedores
principales en los cuatro tamaños. El scroll horizontal del nav móvil es
intencional y está contenido en su propia fila. Contacto y documentación
también dieron 375 / 375px en móvil, sin solapamiento con la cabecera.

## Interacciones ejercitadas

- Menú de productos: apertura, Escape y retorno al trigger.
- Película: selección de capítulos, Replay, Play/Pause y escala con flechas.
- Pausa global: estado del control y suspensión ambiental; el modal conserva
  su reproducción independiente.
- Navegación por categoría: salto con 58px de margen, plegado del header y nav
  a y=0 después del hero. Observer de categoría y dock.
- Producto: apertura del dialog, bloqueo de body, foco en cierre, otra sesión,
  anterior/siguiente, Escape, retorno a la tarjeta y aria-expanded restaurado.
- Slider: End a 1000, click a 500, Home a 0 y drag móvil a 892; pausa y texto
  accesible sincronizados con el progreso.
- Modal móvil: 375 × 844px, una columna, canvas de 300px; footer fijo de
  135.719px y dos acciones de 169.5px, con espacio reservado.
- Modal de escritorio: 1240 × 976px, main de 807px / 340px y canvas de 420px.
- FAQ: abrir/cerrar un disclosure nativo.
- Consulta: cambio a 365 días / USD 399 y cambio a compra, ocultando las
  duraciones de alquiler. Navegación a documentación pública.

No se enviaron correos, formularios, pagos ni órdenes. Las comprobaciones del
contacto se limitaron a estado local y lectura de la página.

## Correcciones hechas durante la revisión

- Gutter estable para igualar la tipografía dependiente del viewport.
- Eliminación del offset global de anchors duplicado.
- Corrección de la especificidad que dejaba el poster sobre el film activo.
- Descripción lateral de longitud comparable y badge de pricing más corto.
- Text-decoration de los controles convertidos de botones a enlaces reales.
- Offset de la cabecera fija en contacto/documentación.
- Nombre completo de los conceptos en las consultas.
- Recalcular la banda del observer al finalizar el plegado del nav.
- Haze/grano/glow originales cacheados para acercar el acabado del stage.

## Comprobaciones y límites

TypeScript, ESLint y build de producción finalizaron con exit code 0.
Se generaron 19 rutas; `/` y `/products` sirven el catálogo. La auditoría de
dependencias de producción reportó cero vulnerabilidades en esta revisión;
no se afirma que las dependencias de desarrollo estén libres de avisos.

Reduced motion, visibilidad, DPR acotado y cleanup de observers/RAF se revisaron
en código. No se emuló una preferencia del sistema ni se midió FPS, Lighthouse,
CLS o conformidad WCAG. Tampoco se verificó en vivo cada destino externo de la
documentación.

Las capturas de viewport se guardan como `implementation-*-top.jpg`. Las
capturas completas pueden mostrar un fotograma de transición o una animación
offscreen aún no activada; se revisaron también las secciones al entrar en
pantalla. Las capturas nativas iniciales que no reflejaban el viewport emulado
se sustituyeron por capturas del documento con la geometría solicitada.

El servidor del puerto 4000, ya existente, no fue detenido. La revisión usa
4001 de forma independiente. Los cambios anteriores del worktree y el frontend
Vite inactivo están preservados.

