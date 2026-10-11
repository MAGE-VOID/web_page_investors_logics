# Espacio independiente /cv

`page.tsx` es la entrada del portfolio de Manuel Gonzales Espinosa en español.

Guarda en esta carpeta los componentes, datos, estilos y recursos de esta sección.
Crea subcarpetas cuando las necesites; los recursos locales pueden importarse
desde los componentes para que Vite los incluya en la compilación.

La ruta está registrada directamente en `src/router.tsx`, fuera de `/home` y de
su layout. No muestra la cabecera, el menú ni el pie de Investors Logics, ni añade
enlaces al catálogo. El título identifica a Manuel y su enfoque en backend, IA y AWS.

`cv.module.css` contiene los estilos locales y los tokens extraídos. La página
activa temporalmente `data-cv-page` en el documento para el fondo y el scroll,
y restaura el estado al salir de `/cv`. Los estilos globales de `/home`,
`tokens.css`, el `DESIGN.md` principal y la configuración de Vite no cambian.

## Contenido e interacciones

- `data/profile.ts`: identidad, contacto, proyectos, trayectoria, experiencia, formación y habilidades.
- `components/`: navegación, diagramas SVG, recorrido por capas y diálogos.
- `hooks/useCVMotion.ts`: entradas, contadores, tilt, magnetismo y halo del hero.
- `assets/`: las dos fuentes Geist locales; no hay peticiones a fuentes externas.

El contenido procede del CV y de las descripciones profesionales del chat «CV»
indicado por el usuario. Se conservaron el diseño, los estilos y las animaciones;
se sustituyeron identidad, enlaces, proyectos, experiencia, formación y etiquetas.
El resumen muestra hechos del CV, no estadísticas de la persona de referencia.
Los títulos oficiales de cursos y los nombres de tecnologías conservan su nombre.

No se proporcionó una foto personal: el mismo marco muestra las iniciales MG.
El antiguo retrato permanece como recurso local no importado y no se publica.
Para añadir una foto real, guarda el archivo en `assets/` y sustituye el monograma
de `page.tsx`, conservando el contenedor `portrait` y su relación 3:4.

`Ctrl/Cmd + K`, `/` o `?` abren la búsqueda; flechas y Enter permiten navegar.
Los casos se abren en `<dialog>`: Escape cierra, el foco vuelve al botón y el
scroll del documento se bloquea mientras están abiertos. Los enlaces externos
y de correo apuntan a Manuel; no hay formularios de contacto simulados.
La búsqueda admite consultas con y sin tildes. La página establece temporalmente
el idioma español en el documento y restaura el idioma anterior al salir.

Las animaciones decorativas se pausan fuera de la vista o al ocultar la pestaña.
`prefers-reduced-motion` elimina efectos no esenciales y sustituye el recorrido
sticky de escritorio por los ocho pasos documentales completos. Móvil y ventanas de poca
altura también usan ese recorrido lineal. El contenido no depende de un reveal
para ser visible.

La implementación pasa `npm run typecheck`, `npm run lint` y `npm run build`.
No se inició un servidor, no se abrieron puertos y no se hizo QA visual en navegador.

En Vite, crear archivos aquí no crea nuevas URLs automáticamente. Solo `/cv`
está registrada; las futuras subrutas requieren añadirlas al router.
`/` y las rutas inexistentes conservan el 404 simple, sin redirecciones.

## Referencias de diseño

La extracción local de la web de referencia, bajo `reference/`, fue eliminada
completamente por petición del usuario, sin crear respaldo. El frontend conserva
su diseño y funciona con sus componentes, estilos y recursos locales; no depende
del archivo de investigación eliminado.
Las fuentes locales se conservan; el retrato de la referencia no se importa.
Geist se distribuye con la licencia SIL OFL en `assets/fonts/OFL.txt`.
