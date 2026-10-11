/** Contenido del CV de Manuel. No publicar estrategias ni resultados privados. */
export const profile = {
  name: "Manuel Gonzales Espinosa",
  shortName: "Manuel",
  initials: "MG",
  role: "Ingeniero de software",
  location: "Lima, Perú",
  timeZone: "America/Lima",
  languages: "Español nativo · Inglés intermedio · Alemán básico",
  email: "gonzales9u@gmail.com",
  phone: "+51 924 462 840",
  github: "https://github.com/MAGE-VOID",
  githubHandle: "MAGE-VOID",
  linkedin: "https://www.linkedin.com/in/mage-void/",
  linkedinHandle: "mage-void",
  website: "https://www.investorslogics.com/cv",
  focus: "Backend · IA · AWS",
  intro: "Ingeniero de software. Diseño plataformas documentales con IA y aplicaciones de gestión; defino su arquitectura y coordino la implementación.",
  about: "Acuerdo alcance, prioridades y entregas con los responsables del negocio, y participo en el diseño y desarrollo. Mi trabajo también incluye integración, mantenimiento y soporte.",
  background: "Desde 2022 trabajo con clientes internacionales en proyectos de software y automatización. Además de los proyectos de clientes, desarrollo productos propios de simulación y conciliación de datos.",
} as const;

export const navigation = [
  { id: "cv-hero", label: "Inicio", number: "00" },
  { id: "cv-work", label: "Proyectos", number: "01" },
  { id: "cv-architecture", label: "Arquitectura", number: "02" },
  { id: "cv-experience", label: "Experiencia", number: "03" },
  { id: "cv-skills", label: "Tecnologías", number: "04" },
  { id: "cv-about", label: "Sobre mí", number: "05" },
  { id: "cv-contact", label: "Contacto", number: "06" },
] as const;

type Signal = { value: number | string; label: string; detail: string };

// Ámbitos de responsabilidad documentados; no son indicadores de rendimiento.
export const signals: Signal[] = [
  { value: "AWS", label: "Documentos y contratos", detail: "Binder · Backend con IA" },
  { value: "YOLO", label: "Detección de pantallas", detail: "Invian · Entrenamiento e inferencia" },
  { value: "TI", label: "Gestión y automatización", detail: "Geohydro · Software y soporte" },
  { value: "2022", label: "Consultoría desde", detail: "Clientes internacionales" },
  { value: "Python", label: "Procesamiento de datos", detail: "Documentos y análisis" },
  { value: "Tauri", label: "Conciliación de cuentas", detail: "Escritorio · Estado recuperable" },
];

export const archetypes = [
  { icon: "layers", title: "Backend asíncrono", description: "Separo recepción, procesamiento y entrega. Defino esquemas de datos y recuperación ante fallos o solicitudes repetidas.", proof: "Backend documental · Binder", tags: ["Python", "AWS", "Pydantic"] },
  { icon: "platform", title: "Coordinación de entregas", description: "Priorizo requerimientos con el negocio y coordino desarrollo, soporte e incidencias. Participo en la implementación.", proof: "Tecnología y sistemas · Geohydro", tags: ["Alcance", "Prioridades", "Entregas"] },
  { icon: "ai", title: "Modelos en aplicaciones", description: "Integro análisis documental, detectores visuales y agentes de investigación, con respuestas estructuradas y manejo de errores.", proof: "IA documental y visión · Binder / Invian", tags: ["OpenAI API", "RAG", "YOLO"] },
  { icon: "network", title: "Gestión e inventario", description: "Defino reglas de stock, permisos y auditoría en aplicaciones multitienda; desarrollo herramientas de pagos, cobros y presupuestos.", proof: "Gestión · Geohydro / Consultoría", tags: ["React", "PostgreSQL", "Tauri"] },
] as const;

export type ProjectKind = "hierarchy" | "migration" | "locks";
export type Project = {
  id: string;
  number: string;
  kind: ProjectKind;
  label: string;
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  caseSummary: {
    intro: string;
    decisions: { area: string; implementation: string }[];
    flow: { title: string; steps: { name: string; detail: string }[] };
    controls: { point: string; rule: string }[];
    result: string;
  };
  challenge: string;
  responsibility: string;
  approach: string[];
  workflow: { title: string; description: string }[];
  controls: { title: string; description: string }[];
  stack: { name: string; purpose: string }[];
};

// Casos basados en el CV y su documentación. Sin topologías privadas ni métricas no verificadas.
export const projects: Project[] = [
  {
    id: "inteligencia-documental", number: "01", kind: "hierarchy", label: "Binder · Backend e IA",
    title: "Análisis de contratos con IA.",
    description: "Backend en AWS para analizar contratos y consultar documentación jurídica, conectado a plataformas externas.",
    outcome: "Backend modular con salidas estructuradas, acceso controlado y registros de ejecución.",
    tags: ["Python", "AWS Lambda", "Pydantic", "OpenAI API"],
    caseSummary: {
      intro: "Análisis de contratos y consulta jurídica sobre un backend asíncrono en AWS.",
      decisions: [
        { area: "Módulos", implementation: "Separé extracción, análisis y entrega mediante contratos de datos." },
        { area: "Esquemas", implementation: "Validé entradas y respuestas de IA con Pydantic." },
        { area: "Fallos", implementation: "Definí el tratamiento de concurrencia, duplicados y reintentos por operación." },
      ],
      flow: {
        title: "Flujo documental",
        steps: [
          { name: "Recepción", detail: "Solicitud autenticada" },
          { name: "Extracción", detail: "Contenido estructurado" },
          { name: "Análisis", detail: "Salida conforme al esquema" },
          { name: "Entrega", detail: "Acceso y trazabilidad" },
        ],
      },
      controls: [
        { point: "Acceso", rule: "Autenticación de solicitudes y control de permisos documentales." },
        { point: "Respuesta de IA", rule: "Validación de estructura y tipos; no certifica la exactitud jurídica." },
        { point: "Fallo o repetición", rule: "Tratamiento de duplicados, reintentos y recuperación por operación." },
      ],
      result: "Análisis de contratos y consulta jurídica conectados al backend y a sus integraciones externas.",
    },
    challenge: "Convertir documentos no estructurados en información utilizable, coordinando análisis, permisos y entrega ante fallos o solicitudes repetidas.",
    responsibility: "Dirigí el desarrollo del backend documental y definí su arquitectura. Coordiné las integraciones, el acceso y la recuperación ante fallos.",
    approach: [
      "Diseñé una arquitectura modular para procesamiento documental, extracción estructurada y consulta jurídica, manteniendo responsabilidades claras entre las operaciones.",
      "Utilicé esquemas Pydantic para validar los datos y las respuestas estructuradas de los modelos antes de utilizarlos en el flujo de aplicación.",
      "Coordiné el trabajo asíncrono con controles de concurrencia, reintentos y recuperación, adaptando el tratamiento de duplicados y errores a cada operación.",
    ],
    workflow: [
      { title: "Recepción y acceso", description: "Autenticación de la solicitud y validación de la información recibida desde las integraciones externas." },
      { title: "Preparación documental", description: "Procesamiento del contenido mediante OCR, extracción estructurada y recuperación de información para el análisis o la consulta." },
      { title: "Análisis y validación", description: "Integración de modelos de lenguaje y comprobación de la respuesta frente a los contratos de datos del backend." },
      { title: "Entrega y seguimiento", description: "Intercambio de resultados y entrega controlada de documentos, con registros de ejecución para investigar fallos y recuperar tareas." },
    ],
    controls: [
      { title: "Concurrencia y duplicados", description: "Tratamiento de concurrencia, duplicados y reintentos según las condiciones de recuperación de cada operación." },
      { title: "Acceso y contratos", description: "Autenticación, validación de información y entrega documental controlada en los límites entre sistemas." },
      { title: "Diagnóstico y mantenimiento", description: "Registros de ejecución, componentes compartidos y documentación de APIs para seguir el procesamiento y facilitar su evolución." },
    ],
    stack: [
      { name: "Python", purpose: "Procesamiento documental y coordinación entre operaciones." },
      { name: "AWS Lambda", purpose: "Ejecución de funciones del backend documental." },
      { name: "Pydantic", purpose: "Validación estructural de entradas y salidas del modelo." },
      { name: "OpenAI API", purpose: "Modelos de lenguaje para análisis de contratos y consulta jurídica." },
    ],
  },
  {
    id: "vision-computacional", number: "02", kind: "migration", label: "Invian · Visión computacional",
    title: "Detección de incidencias en pantallas.",
    description: "Detectores YOLO integrados con la consulta de incidencias y la visualización de paneles y estados.",
    outcome: "Detector conectado a consulta de incidencias y visualización, con evaluación offline del modelo.",
    tags: ["Python", "YOLO", "Visión computacional", "Evaluación de modelos"],
    caseSummary: {
      intro: "Detección de incidencias visuales en paneles de pantalla mediante YOLO.",
      decisions: [
        { area: "Imágenes", implementation: "Coordiné preparación y etiquetado del conjunto de datos." },
        { area: "Evaluación", implementation: "Implementé entrenamiento y validación offline, separados de la inferencia." },
        { area: "Aplicación", implementation: "Conecté consulta de incidencias, procesamiento de imágenes y visualización de detecciones." },
      ],
      flow: {
        title: "Desarrollo del modelo e integración",
        steps: [
          { name: "Datos", detail: "Imágenes anotadas" },
          { name: "Entrenamiento", detail: "Detectores YOLO" },
          { name: "Evaluación", detail: "Validación offline" },
          { name: "Integración", detail: "Inferencia y visualización" },
        ],
      },
      controls: [
        { point: "Datos", rule: "Preparación y anotación del conjunto de imágenes." },
        { point: "Modelo", rule: "Evaluación offline separada de la ejecución del detector." },
        { point: "Integración", rule: "Controles de ejecución y registros para investigar fallos de procesamiento." },
      ],
      result: "Consulta de incidencias con detecciones de paneles y estados visibles en la aplicación.",
    },
    challenge: "Integrar un detector de problemas visuales en una aplicación, conectando preparación de imágenes, evaluación del modelo y consulta de incidencias.",
    responsibility: "Lideré el alcance técnico y la integración de YOLO; coordiné datos e implementé entrenamiento, evaluación y visualización.",
    approach: [
      "Organicé el trabajo en preparación de datos, entrenamiento y validación offline, diferenciándolo de la ejecución del detector dentro de la aplicación.",
      "Integré la consulta de incidencias, el procesamiento de imágenes y la inferencia para presentar detecciones y estados en una interfaz de monitorización.",
      "Incorporé controles de ejecución y registros de diagnóstico para investigar fallos a lo largo del procesamiento, no únicamente en la salida del modelo.",
    ],
    workflow: [
      { title: "Preparación del conjunto de datos", description: "Herramientas de preparación, etiquetado y aumento de imágenes para desarrollar los detectores de paneles y estados." },
      { title: "Entrenamiento", description: "Flujos de entrenamiento de modelos YOLO sobre las imágenes preparadas y sus anotaciones." },
      { title: "Validación offline", description: "Evaluación de los detectores fuera del flujo de consulta de incidencias, como parte del desarrollo del modelo." },
      { title: "Inferencia y visualización", description: "Consulta de incidencias, procesamiento de sus imágenes y presentación de las detecciones y estados en la aplicación." },
    ],
    controls: [
      { title: "Preparación de datos", description: "Preparación, etiquetado y aumento de imágenes para desarrollar los detectores de paneles y estados." },
      { title: "Evaluación del modelo", description: "Evaluación offline durante el desarrollo, separada de la inferencia en la aplicación." },
      { title: "Diagnóstico de ejecución", description: "Controles y registros para investigar incidencias del procesamiento y de la integración de resultados." },
    ],
    stack: [
      { name: "Python", purpose: "Preparación de datos, entrenamiento e integración de imágenes." },
      { name: "YOLO", purpose: "Detección de paneles de pantalla y clasificación de estados." },
    ],
  },
  {
    id: "conciliacion-de-datos", number: "03", kind: "locks", label: "Producto propio · Aplicación de escritorio",
    title: "Conciliación de movimientos.",
    description: "Aplicación de escritorio para conciliar cuentas y distribuir resultados, con instantáneas consultables ante fallos de conexión.",
    outcome: "Estado persistente y recuperable, con consulta de instantáneas e identificación de datos desactualizados.",
    tags: ["Tauri", "Rust", "Python", "MetaTrader 5"],
    caseSummary: {
      intro: "Aplicación de escritorio para conciliar movimientos y mantener el estado consultable.",
      decisions: [
        { area: "Movimientos", implementation: "Definí conciliación y distribución con verificaciones de consistencia monetaria." },
        { area: "Persistencia", implementation: "Conservé instantáneas recuperables para consultar el estado ante desconexiones." },
        { area: "Vigencia", implementation: "Distinguí los datos actuales de las instantáneas anteriores en la interfaz." },
      ],
      flow: {
        title: "Flujo de estado",
        steps: [
          { name: "Integración", detail: "Movimientos y cuentas" },
          { name: "Conciliación", detail: "Reglas y distribuciones" },
          { name: "Persistencia", detail: "Instantáneas recuperables" },
          { name: "Consulta", detail: "Datos vigentes o anteriores" },
        ],
      },
      controls: [
        { point: "Distribución", rule: "Consistencia monetaria según reglas de negocio." },
        { point: "Desconexión", rule: "Consulta de instantáneas recuperables." },
        { point: "Consulta", rule: "Identificación visible de información desactualizada." },
      ],
      result: "Instantáneas consultables con indicación de vigencia ante fallos de conexión.",
    },
    challenge: "Conciliar movimientos y cuentas sin confundir una actualización vigente con información anterior cuando falla la conexión.",
    responsibility: "Definí las reglas de conciliación y distribución. Implementé verificaciones monetarias, persistencia recuperable e identificación de datos desactualizados.",
    approach: [
      "Definí reglas de negocio para conciliar movimientos y cuentas y calcular distribuciones entre participantes, incorporando controles de consistencia monetaria.",
      "Incorporé persistencia recuperable para mantener un estado consultable y acceder a instantáneas anteriores cuando falla la conexión.",
      "Distinguí datos vigentes e instantáneas anteriores en la interfaz, para hacer explícita la vigencia de la información conservada.",
    ],
    workflow: [
      { title: "Integración de movimientos y cuentas", description: "Obtención de la información utilizada por la aplicación mediante su integración con MetaTrader 5." },
      { title: "Conciliación y distribución", description: "Aplicación de las reglas de negocio entre participantes y de los controles de consistencia monetaria." },
      { title: "Conservación del estado", description: "Persistencia recuperable de la información para disponer de instantáneas consultables." },
      { title: "Consulta ante una desconexión", description: "Acceso a instantáneas anteriores con una indicación visible de que los datos están desactualizados." },
    ],
    controls: [
      { title: "Consistencia monetaria", description: "Verificaciones incorporadas a la conciliación y al cálculo de distribuciones según las reglas de negocio." },
      { title: "Recuperación de información", description: "Persistencia recuperable y consulta del estado anterior ante fallos de conexión." },
      { title: "Vigencia de los datos", description: "Identificación de información desactualizada en la interfaz para distinguirla de una actualización vigente." },
    ],
    stack: [
      { name: "Tauri · Rust", purpose: "Aplicación de escritorio e integración de datos." },
      { name: "Python", purpose: "Procesamiento de movimientos y cuentas." },
      { name: "MetaTrader 5", purpose: "Integración con movimientos y cuentas." },
    ],
  },
];

// Decisiones del CV con pseudocódigo conceptual, no implementaciones de clientes.
// La trazabilidad es transversal: su posición final organiza la lectura, no la ejecución.
export const architectureSteps = [
  { name: "Recepción", kind: "Entrada documental", phase: "Acceso", input: "Solicitud + documento", output: "Entrada validada", code: "documento = validar_entrada(solicitud)", description: "Definí validaciones de solicitud y documento antes de coordinar el procesamiento.", note: "El contrato de entrada delimita qué recibe cada operación y concentra la validación en ese límite." },
  { name: "Autorización", kind: "Acceso documental", phase: "Acceso", input: "Usuario + documento", output: "Operación autorizada", code: "autorizar(usuario, documento)", description: "Integré autenticación entre plataformas y permisos para operaciones y documentos.", note: "El flujo distingue la identidad del solicitante del permiso para operar sobre el documento." },
  { name: "Orquestación", kind: "Procesos asíncronos", phase: "Procesamiento", input: "Operación + contexto", output: "Tarea coordinada", code: "tarea = coordinar(proceso, contexto)", description: "Separé la recepción del trabajo asíncrono y definí controles de concurrencia, duplicados y recuperación por operación.", note: "El reintento depende de las condiciones de cada operación y del contexto de la tarea; no se aplica de forma indiscriminada." },
  { name: "Extracción", kind: "Preparación documental", phase: "Procesamiento", input: "Documento", output: "Contenido preparado", code: "contenido = extraer(documento)", description: "Organicé extracción y preparación del contenido para análisis de contratos y consulta jurídica.", note: "La preparación documental y el análisis tienen responsabilidades separadas dentro del backend." },
  { name: "Análisis con IA", kind: "Integración de modelos", phase: "Procesamiento", input: "Contenido preparado", output: "Respuesta del modelo", code: "respuesta = analizar(contenido)", description: "Integré modelos de lenguaje con manejo de errores y límites de ejecución.", note: "La respuesta externa pasa por validación de datos; no se trata como una conclusión jurídica verificada." },
  { name: "Validación", kind: "Esquemas de datos", phase: "Procesamiento", input: "Respuesta del modelo", output: "Respuesta estructurada", code: "resultado = Esquema.model_validate(respuesta)", description: "Comprobé tipos, campos y estructura con esquemas Pydantic antes de utilizar las respuestas de IA.", note: "Validar el esquema no certifica la exactitud factual ni jurídica del contenido." },
  { name: "Entrega", kind: "Integraciones externas", phase: "Salida", input: "Resultado + destino", output: "Entrega autorizada", code: "entregar(resultado, destino_autorizado)", description: "Coordiné el intercambio de resultados y la entrega documental a destinos autorizados.", note: "La salida de cada integración queda delimitada por su contrato y los permisos del destinatario." },
  { name: "Trazabilidad", kind: "Control transversal", phase: "Salida", input: "Tarea + estado", output: "Registro de ejecución", code: "registrar(tarea, estado, contexto)", description: "Estandaricé registros de tareas y documentación para diagnosticar fallos y mantener la recuperación.", note: "Los registros acompañan recepción, procesamiento y entrega. Esta etapa aparece al final solo para organizar la lectura." },
];

export const experience = [
  { role: "Ingeniero backend e IA — AWS", company: "Binder", date: "Jul 2025 — Actualidad", location: "Arquitectura y desarrollo documental", current: true,
    summary: "Análisis de contratos y consulta jurídica sobre un backend documental en AWS.",
    contributions: [
      { label: "Diseño modular", detail: "Definí la arquitectura y dirigí el desarrollo de los flujos de análisis y consulta documental." },
      { label: "Concurrencia y fallos", detail: "Diseñé procesamiento asíncrono y tratamiento de duplicados y recuperación según cada operación." },
      { label: "Acceso documental", detail: "Coordiné plataformas externas con autenticación, validación de información y entrega controlada de documentos." },
      { label: "Diagnóstico", detail: "Estandaricé componentes compartidos, documentación de APIs y registros para investigar fallos y mantener el backend." },
    ],
    tags: ["Python", "AWS", "IA documental", "Arquitectura backend"] },
  { role: "Responsable de Tecnología y Sistemas", company: "Geohydro Consultoría e Ingeniería", date: "Mar 2025 — Actualidad", location: "Gestión, documentos y TI", current: true,
    summary: "Herramientas de seguimiento de proyectos, gestión contable y procesamiento de PDF.",
    contributions: [
      { label: "Proyectos", detail: "Prioricé requerimientos y dirigí el desarrollo de herramientas para seguir proyectos, responsables, avances y entregas." },
      { label: "Pagos y cobros", detail: "Diseñé la aplicación de pagos, cobros y presupuestos con validación, auditoría y reportes financieros." },
      { label: "Procesamiento PDF", detail: "Dirigí la preparación y el foliado de PDF, las firmas gráficas y el procesamiento en segundo plano." },
      { label: "Soporte y operación", detail: "Coordiné desarrollo, soporte, configuración, respaldos e incidencias con los responsables del negocio." },
    ],
    tags: ["Gestión de proyectos", "Aplicaciones de negocio", "Automatización", "TI"] },
  { role: "Ingeniero de software de IA", company: "Invian", date: "Mar 2025 — Nov 2025", location: "Contrato / proyecto en paralelo", current: false,
    summary: "Detección de incidencias de pantallas e investigación empresarial con agentes de IA.",
    contributions: [
      { label: "Detección", detail: "Definí el alcance técnico e integré YOLO para detectar incidencias de pantallas." },
      { label: "Entrenamiento", detail: "Coordiné preparación y etiquetado de imágenes; implementé entrenamiento y validación offline de detectores." },
      { label: "Aplicación", detail: "Conecté consulta de incidencias, procesamiento de imágenes y visualización, con registros para investigar fallos." },
      { label: "Investigación", detail: "Diseñé agentes en paralelo con respuestas estructuradas, referencias de fuentes y manejo de errores y tiempos de espera." },
    ],
    tags: ["Python", "YOLO", "Visión computacional", "Agentes de IA"] },
  { role: "Consultor de Software y Automatización Cloud", company: "Consultoría independiente", date: "Ene 2022 — Actualidad", location: "Clientes internacionales · Proyectos remotos", current: true,
    summary: "Aplicaciones de inventario, audio y firma documental; herramientas de diagnóstico en AWS.",
    contributions: [
      { label: "Inventario", detail: "Lideré una plataforma multitienda con reglas de stock, permisos, auditoría y consistencia de datos." },
      { label: "Audio e IA", detail: "Diseñé transcripción con modelos locales y APIs de IA, preparación de audio, segmentación y manejo de fallos." },
      { label: "Firma documental", detail: "Dirigí un portal de firma integrado con un proveedor externo: autenticación, transferencia y recuperación de documentos." },
      { label: "Operación cloud", detail: "Construí un monitor de logs de AWS Lambda con filtros y consulta periódica para investigar incidencias." },
    ],
    tags: ["Inventario", "WhisperX", "Flask", "AWS CloudWatch"] },
];

export const education = [
  { institution: "Universidad Tecnológica del Perú · UTP", degree: "Formación en Ingeniería de Software" },
];

export const certifications = [
  { institution: "IBM", title: "IBM RAG and Agentic AI", date: "Enero 2026" },
  { institution: "Duke University", title: "MLOps | Machine Learning Operations", date: "Enero 2026" },
  { institution: "University of Alberta", title: "Software Design and Architecture", date: "Abril 2025" },
  { institution: "DeepLearning.AI", title: "Deep Learning Specialization", date: "Diciembre 2024" },
];

export const skills = [
  { name: "Diseño y operación", items: ["Arquitectura modular", "Contratos de datos", "Integración de sistemas", "Infraestructura como código", "Alcance y prioridades", "Coordinación de entregas", "Pruebas automatizadas", "Observabilidad", "Consistencia de datos", "Gestión de incidencias"] },
  { name: "Backend y APIs", items: ["Python", "Pydantic", "FastAPI", "Flask", "APIs REST", "Autenticación", "Procesos asíncronos", "Concurrencia", "Idempotencia", "Reintentos"] },
  { name: "AWS", items: ["Lambda", "API Gateway", "S3", "SQS", "SNS", "Textract", "DynamoDB", "Cognito", "CloudWatch", "CloudFront", "AWS SAM"] },
  { name: "Web y escritorio", items: ["React", "TypeScript", "Tauri", "Rust", "Vite", "Next.js"] },
  { name: "Modelos e integración de IA", items: ["OpenAI API", "RAG", "YOLO", "PyTorch", "TensorFlow / Keras", "Scikit-learn", "LangChain", "WhisperX", "Kubeflow"] },
  { name: "Datos y persistencia", items: ["SQL", "PostgreSQL", "SQLite", "Qdrant", "Redis", "Prisma"] },
  { name: "Simulación y análisis", items: ["Numba", "Pandas", "NumPy", "Statsmodels", "Plotly", "Matplotlib"] },
  { name: "Otros lenguajes", items: ["JavaScript", "Go", "C++", "Java", "MQL5"] },
  { name: "Herramientas de desarrollo", items: ["Docker", "Git", "Jupyter", "FFmpeg", "BeautifulSoup", "Requests"] },
];

export const independentProject = {
  name: "Motor de backtesting",
  description: "Diseñé simulación multisímbolo y evaluación paralela con controles de tiempo y memoria, separando datos, ejecución y análisis.",
  capabilities: [
    "Separación de datos, simulación y análisis, con costes y reglas de riesgo explícitos.",
    "Evaluación de experimentos en paralelo, con controles de tiempo y memoria.",
    "Comparación con drawdown, Sharpe/Sortino y VaR histórico en paneles interactivos.",
  ],
  tags: ["Python", "Numba", "Pandas", "Plotly"],
};
