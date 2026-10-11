# /cv — Portfolio de Manuel Gonzales Espinosa

An independent frontend within the existing Vite / React / TypeScript project.
Its only route is `/cv`; section navigation uses local anchors, not extra URLs.
Neither the `/home` UI nor its design contract belongs to this surface.

El usuario eligió el diseño archivado de https://chaitanyadeshpande.com/ y
después pidió sustituir su contenido por su propio CV, en español. La autoridad
visual no cambia; la identidad y los hechos profesionales ahora son de Manuel
Gonzales Espinosa. La audiencia evalúa arquitectura backend, integración de IA,
plataformas AWS, dirección técnica y experiencia de desarrollo.

Los datos viven en `data/profile.ts` y proceden del CV y las descripciones
profesionales del chat «CV» que el usuario indicó como fuente. Incluyen Binder,
Geohydro, Invian, consultoría independiente desde 2022, formación en UTP y cuatro
especializaciones. No se inventan métricas de rendimiento, notas académicas,
fechas de titulación ni disponibilidad laboral. Los diagramas y el pseudocódigo
son explicativos, no código de clientes ni infraestructura en vivo.

El contenido presenta sistemas, responsabilidades y decisiones concretas, sin
autocalificaciones como «senior» o «Python avanzado». El hero explica el desarrollo
de backend con IA, servicios AWS y visión, junto con la integración de sistemas.
Los proyectos nombran su función: análisis de contratos, detección de incidencias
en pantallas y conciliación de movimientos. Los casos muestran la responsabilidad
personal y tres aportes breves dentro del mismo popup; las tecnologías se agrupan
por ámbito de uso, sin notas de nivel ni etiquetas de «ecosistema» o «plataforma
principal». Los cargos y las certificaciones documentados se conservan. La
formación universitaria no atribuye un grado, fecha de egreso ni estado académico
no suministrados. El diseño, los gráficos y las interacciones no cambian con esta
revisión editorial.

La terminología distingue autenticación de autorización y validación estructural
de exactitud factual o jurídica. La trazabilidad se presenta como un control de
todo el flujo, aunque su explicación ocupe el último bloque del recorrido. Las
notas de arquitectura explican las decisiones del flujo en lugar de definir
conceptos básicos; el pseudocódigo y la condición de esquema conceptual permanecen.

La sección de experiencia separa contexto, cargo y aportes por responsabilidad
técnica: arquitectura, confiabilidad, integración y operación, según cada puesto.
Conserva las fechas y explicita las colaboraciones en paralelo; no atribuye
resultados medidos ni convierte la línea de lectura en un progreso de carrera.
Su entrada coordinada traza una conexión, reconoce el marcador y presenta los
aportes una sola vez. Fechas, empresas y cargos permanecen estables. El movimiento
se pausa fuera de vista o con la pestaña oculta, y se omite en movimiento reducido
e impresión; el contenido es visible antes de inicializar la animación.

Sin una fotografía personal suministrada, el marco original muestra un monograma
MG. El retrato y los logros del autor de la referencia no se importan al frontend.
Las estrategias, parámetros y resultados privados del bot no forman parte del CV.

The reference's dark graphite / amber palette, Geist typography, generous
spacing, technical visuals and understated motion are the selected visual
authority. Implementation uses native CSS, Web Animations, IntersectionObserver
and bounded RAF updates; it does not execute downloaded production scripts,
copy the reference's tracking, or depend on a new animation framework.

Required behavior: responsive sections, real contact links, local project
dialogs, keyboard command search, scroll-linked document workflow, reduced-motion
support and cleanup when leaving `/cv`. No backend, form submission, additional
route, external write or bot-private information is part of this surface.

El recorrido de arquitectura mantiene sincronizada la selección de etapas con la
posición real del scroll. Calcula el tramo desde el final del encabezado hasta la
salida real del panel sticky, y reserva la altura de la etapa más larga para evitar
saltos al cambiar de contenido. Si el panel no cabe bajo la navegación, pasa a
exploración manual sin fijación ni recortes. El cambio de vista o de fijación
conserva el contexto visible; las ocho etapas siguen disponibles. El desplazamiento
de página es nativo: no se bloquean la rueda, los gestos táctiles ni las teclas fuera
de los controles de etapas.

This implementation was checked from code and production compilation only.
No server, browser, port or screenshot-based visual comparison was used.
