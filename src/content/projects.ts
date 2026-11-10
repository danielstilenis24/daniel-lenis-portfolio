import { Locale, Project } from '@/types/portfolio';

/**
 * CATÁLOGO ESTRUCTURADO DE PROYECTOS — DANIEL LENIS
 * =================================================
 * Estructura desacoplada de la capa de presentación.
 * Preparada para internacionalización (es / en) y ampliación directa.
 * Nota de integridad: No se incluyen métricas inventadas, nombres de clientes confidenciales
 * ni endpoints privados. Los espacios reservados para capturas o métricas cuantitativas
 * están explícitamente identificados.
 */
export const projectsDataEs: Project[] = [
  {
    id: 'proj-01',
    slug: 'plataforma-monitoreo-industrial',
    number: '01',
    title: 'Plataforma Inteligente de Monitoreo Industrial',
    subtitle: 'Supervisión operativa en tiempo real, gestión automatizada de alertas, tickets y analítica de planta',
    description:
      'Sistema integral de supervisión de variables industriales que unifica telemetría de planta en series temporales, flujos automatizados de respuesta a incidentes, gestión de tickets operativos y visualización ejecutiva.',
    category: 'Automatización & Integración',
    technologies: ['InfluxDB', 'n8n', 'APIs REST', 'SQL', 'Power BI', 'Webhooks'],
    problem: {
      summary:
        'Los entornos industriales generan volúmenes constantes de señales y variables operativas que, cuando se gestionan de forma aislada o manual, retrasan la detección de anomalías y dificultan la trazabilidad de incidentes en planta.',
      challenges: [
        'Dispersión entre las lecturas de variables operativas de planta y los sistemas de gestión de mantenimiento o soporte.',
        'Falta de mecanismos automatizados para convertir desviaciones de umbrales técnicos en alertas accionables y tickets trazables.',
        'Necesidad de consolidar datos de series temporales junto con registros relacionales para el análisis histórico en tableros de control.',
        'Riesgo de tiempos muertos prolongados por ausencia de notificaciones oportunas a los equipos responsables.',
      ],
    },
    solution: {
      summary:
        'Se diseñó e implementó una arquitectura convergente que captura y almacena métricas industriales en InfluxDB, evalúa reglas operativas mediante flujos orquestados en n8n y sincroniza registros estructurados en SQL para alimentar analítica avanzada en Power BI.',
      approach: [
        'Almacenamiento especializado de alta frecuencia en InfluxDB para lecturas de variables y sensores industriales.',
        'Orquestación de flujos en n8n para monitoreo de condiciones críticas, disparo de alertas multicanal y creación/actualización automatizada de tickets.',
        'Integración mediante APIs REST entre la capa de monitoreo, el motor de tickets y una base de datos relacional SQL.',
        'Construcción de modelos analíticos en Power BI que correlacionan el comportamiento de las variables de planta con los tiempos de atención de incidentes.',
      ],
    },
    architecture: {
      overview:
        'Arquitectura híbrida orientada a eventos y series temporales: combina ingesta de telemetría (InfluxDB), orquestación de reglas y respuesta operativa (n8n + APIs) y persistencia relacional (SQL) para inteligencia de negocios (Power BI).',
      diagramType: 'industrial-iot',
      dataFlowSummary:
        'Variables de Planta → InfluxDB (Series Temporales) → n8n (Evaluación de Reglas & APIs) → Gestión de Tickets & Alertas + Base de Datos SQL → Dashboards en Power BI',
      steps: [
        {
          id: 'step-1',
          layer: 'Capa 01 · Ingesta & Series Temporales',
          title: 'Captura de Variables de Planta en InfluxDB',
          description:
            'Recepción y almacenamiento optimizado de lecturas continuas de operación industrial con indexación temporal.',
          tech: ['InfluxDB', 'APIs'],
          protocol: 'Time-Series Ingestion',
        },
        {
          id: 'step-2',
          layer: 'Capa 02 · Orquestación & Reglas',
          title: 'Evaluación Automatizada y Disparo de Flujos en n8n',
          description:
            'Procesamiento de eventos y umbrales operativos para activar flujos de trabajo sin intervención humana.',
          tech: ['n8n', 'Webhooks', 'APIs REST'],
          protocol: 'Event-Driven Automation',
        },
        {
          id: 'step-3',
          layer: 'Capa 03 · Gestión Operativa & Persistencia',
          title: 'Generación de Tickets, Alertas y Registro en SQL',
          description:
            'Creación automática de tickets de seguimiento, notificación a responsables y consolidación estructurada en SQL.',
          tech: ['SQL', 'APIs REST', 'n8n'],
          protocol: 'REST / Relational Sync',
        },
        {
          id: 'step-4',
          layer: 'Capa 04 · Inteligencia Operativa',
          title: 'Visualización y Analítica Industrial en Power BI',
          description:
            'Tableros de control con indicadores de estabilidad operativa, historial de alertas y desempeño en resolución de tickets.',
          tech: ['Power BI', 'SQL', 'Modelado de Datos'],
          protocol: 'Analytical Modeling',
        },
      ],
    },
    functionalities: [
      {
        title: 'Supervisión Continua de Variables Críticas',
        description:
          'Consolidación de lecturas operativas sobre base de datos de series temporales (InfluxDB) para consulta ágil y trazabilidad histórica.',
        tag: 'Telemetría & Datos',
      },
      {
        title: 'Automatización de Alertas y Gestión de Tickets',
        description:
          'Flujos en n8n que detectan condiciones fuera de rango, notifican automáticamente y registran tickets operativos con contexto técnico.',
        tag: 'Orquestación n8n',
      },
      {
        title: 'Integración Bidireccional vía APIs y SQL',
        description:
          'Sincronización de eventos de planta y estados de atención en base de datos SQL para mantener integridad referencial del proceso.',
        tag: 'Integración',
      },
      {
        title: 'Dashboards Analíticos en Power BI',
        description:
          'Visualización ejecutiva y técnica de tendencias operativas, frecuencia de incidentes y seguimiento de indicadores de planta.',
        tag: 'Business Intelligence',
      },
    ],
    results: {
      summary:
        'La solución transformó la supervisión reactiva en un flujo operativo integrado y trazable desde la señal en planta hasta el indicador gerencial.',
      confidentialityNote:
        'Por políticas de confidencialidad industrial, no se exponen nombres de plantas, endpoints internos ni cifras propietarias del cliente.',
      items: [
        {
          title: 'Unificación del Ciclo Señal → Alerta → Ticket → Analítica',
          description:
            'Eliminación de silos entre los datos de series temporales de planta y el seguimiento administrativo de incidentes.',
          type: 'verifiable-impact',
        },
        {
          title: 'Reducción de Intervención Manual en Detección de Eventos',
          description:
            'Automatización del flujo de notificación y apertura de casos operativos mediante n8n y APIs.',
          type: 'verifiable-impact',
        },
        {
          title: 'Indicador Cuantitativo de Tiempos de Respuesta (MTTR / SLA)',
          description:
            'Espacio reservado para incorporar métrica porcentual autorizada por la operación.',
          type: 'metric-placeholder',
          placeholderMetric: '[PLACEHOLDER: Ej. % de reducción en tiempo de detección / respuesta]',
        },
      ],
    },
    gallery: [
      {
        id: 'gal-ind-1',
        title: 'Blueprint Arquitectónico: Flujo InfluxDB → n8n → SQL → Power BI',
        caption:
          'Vista esquemática interactiva de la arquitectura implementada (Reemplazable por captura autorizada en src/content/projects.ts).',
        type: 'telemetry-dashboard',
        isPlaceholder: true,
        placeholderNote: 'Vista técnica generada por código. Permite adjuntar captura real en /public/projects/industrial-1.webp',
        highlights: [
          { label: 'Motor Series Temporales', value: 'InfluxDB' },
          { label: 'Orquestador de Reglas', value: 'n8n Workflows' },
          { label: 'Capa Relacional & BI', value: 'SQL + Power BI' },
        ],
      },
      {
        id: 'gal-ind-2',
        title: 'Esquema de Automatización de Tickets e Incidentes',
        caption:
          'Flujo lógico de validación de umbrales, despacho de alertas y actualización de estado de tickets mediante APIs.',
        type: 'workflow-engine',
        isPlaceholder: true,
        placeholderNote: 'Blueprint interactivo de flujo. Configurable con capturas de flujos n8n anonimizados.',
        highlights: [
          { label: 'Trigger', value: 'Evento / Umbral de Variable' },
          { label: 'Acción Primaria', value: 'Creación de Ticket & Alerta API' },
          { label: 'Persistencia', value: 'Registro de Auditoría SQL' },
        ],
      },
    ],
    links: [
      {
        label: 'Documentación de Arquitectura (Disponible en entrevista técnica)',
        url: '#contacto',
        isPlaceholder: true,
        note: 'Repositorio privado empresarial. Solicitar demostración técnica en la sección de contacto.',
      },
    ],
    status: 'Desplegado en Entorno Corporativo',
    featured: true,
  },
  {
    id: 'proj-02',
    slug: 'integracion-datos-business-intelligence',
    number: '02',
    title: 'Plataforma de Integración de Datos y Business Intelligence',
    subtitle: 'Pipelines ETL híbridos (NoSQL + SQL), modelado dimensional y dashboards ejecutivos en Power BI',
    description:
      'Arquitectura de ingeniería de datos diseñada para extraer, limpiar, transformar y unificar información empresarial proveniente de motores heterogéneos (MongoDB y PostgreSQL), consolidando modelos analíticos confiables para la toma de decisiones en Power BI.',
    category: 'Ingeniería de Datos & BI',
    technologies: ['MongoDB', 'PostgreSQL', 'Python', 'SQL', 'Power BI', 'ETL'],
    problem: {
      summary:
        'Las organizaciones que operan con múltiples motores de bases de datos (documentales NoSQL y relacionales SQL) enfrentan fragmentación de información, discrepancias en reportes y procesos manuales costosos para consolidar indicadores de gestión.',
      challenges: [
        'Coexistencia de estructuras orientadas a documentos en MongoDB con esquemas relacionales transaccionales en PostgreSQL.',
        'Necesidad de normalizar, limpiar y validar la calidad de los datos antes de exponerlos a las áreas de negocio.',
        'Consultas analíticas lentas o complejas al intentar cruzar fuentes operativas directamente sin una capa de transformación intermedia.',
        'Falta de una única fuente de verdad (Single Source of Truth) para alimentar tableros de gestión en Power BI.',
      ],
    },
    solution: {
      summary:
        'Se desarrolló un pipeline de ingeniería de datos con Python y SQL que extrae datos desde MongoDB y PostgreSQL, aplica reglas de limpieza, normalización e integración, y estructura modelos analíticos optimizados para Power BI.',
      approach: [
        'Desarrollo de scripts y procesos ETL en Python para desanidar documentos JSON/BSON de MongoDB y homologarlos con entidades relacionales.',
        'Transformación, limpieza de datos e integridad referencial apoyada en consultas avanzadas SQL y PostgreSQL.',
        'Diseño de modelos de datos orientados a analítica (esquemas dimensionales, tablas de hechos y dimensiones) listos para consumo.',
        'Construcción de dashboards interactivos e indicadores clave (KPIs) en Power BI con actualización automatizada.',
      ],
    },
    architecture: {
      overview:
        'Pipeline ETL multifuente que conecta bases de datos NoSQL (MongoDB) y relacionales (PostgreSQL) a través de una capa de procesamiento en Python y SQL, desembocando en modelos semánticos de Power BI.',
      diagramType: 'bi-lakehouse',
      dataFlowSummary:
        'MongoDB (NoSQL) + PostgreSQL (OLTP) → Python ETL (Limpieza, Normalización & Transformación) → Capa Analítica SQL → Modelo Semántico & Dashboards Power BI',
      steps: [
        {
          id: 'step-1',
          layer: 'Capa 01 · Fuentes Heterogéneas',
          title: 'Extracción desde MongoDB y PostgreSQL',
          description:
            'Conexión segura a colecciones documentales en MongoDB y tablas transaccionales en PostgreSQL.',
          tech: ['MongoDB', 'PostgreSQL'],
          protocol: 'Multi-Source Extraction',
        },
        {
          id: 'step-2',
          layer: 'Capa 02 · Procesamiento ETL en Python',
          title: 'Limpieza, Aplanado de Documentos y Transformación',
          description:
            'Normalización de estructuras semiestructuradas, tratamiento de nulos, tipado estricto y reglas de negocio en Python.',
          tech: ['Python', 'ETL'],
          protocol: 'Data Transformation Pipeline',
        },
        {
          id: 'step-3',
          layer: 'Capa 03 · Consolidación & Modelado SQL',
          title: 'Estructuración Analítica y Consultas SQL',
          description:
            'Integración de fuentes en vistas y tablas consolidadas optimizadas para consultas analíticas y agregaciones.',
          tech: ['SQL', 'PostgreSQL'],
          protocol: 'Relational Analytical Layer',
        },
        {
          id: 'step-4',
          layer: 'Capa 04 · Business Intelligence',
          title: 'Modelado Dimensional y Visualización en Power BI',
          description:
            'Diseño de medidas analíticas, relaciones y tableros ejecutivos para seguimiento de indicadores de negocio.',
          tech: ['Power BI', 'Modelado de Datos'],
          protocol: 'Executive BI Consumption',
        },
      ],
    },
    functionalities: [
      {
        title: 'Integración Híbrida NoSQL + SQL',
        description:
          'Unificación transparente de colecciones documentales de MongoDB con esquemas relacionales de PostgreSQL.',
        tag: 'Ingeniería de Datos',
      },
      {
        title: 'Pipelines ETL en Python para Calidad de Datos',
        description:
          'Procesos reproducibles de extracción, validación, limpieza, deduplicación y transformación de datos.',
        tag: 'Python ETL',
      },
      {
        title: 'Modelado de Datos Orientado a Decisiones',
        description:
          'Arquitectura de información estructurada para optimizar el rendimiento de lectura y la claridad semántica en Power BI.',
        tag: 'Modelado Analítico',
      },
      {
        title: 'Dashboards Empresariales e Indicadores de Gestión',
        description:
          'Visualizaciones interactivas en Power BI que permiten explorar métricas estratégicas y operativas con filtros dinámicos.',
        tag: 'Power BI',
      },
    ],
    results: {
      summary:
        'Se consolidó un ecosistema analítico confiable que eliminó la necesidad de cruzar reportes manualmente entre distintas bases de datos.',
      confidentialityNote:
        'Los esquemas de datos y métricas financieras/operativas pertenecen al entorno privado de la organización.',
      items: [
        {
          title: 'Centralización de Fuentes Dispersas (MongoDB + PostgreSQL)',
          description:
            'Disponibilidad de información homologada en un modelo analítico único para los tomadores de decisiones.',
          type: 'verifiable-impact',
        },
        {
          title: 'Automatización del Flujo Analítico End-to-End',
          description:
            'Sustitución de procesos manuales de preparación de datos por rutinas estructuradas en Python y SQL.',
          type: 'verifiable-impact',
        },
        {
          title: 'Volumen de Registros / Tiempo de Actualización de Reportes',
          description:
            'Espacio configurable para indicar el volumen de datos procesados o reducción en tiempos de generación de reportes.',
          type: 'metric-placeholder',
          placeholderMetric: '[PLACEHOLDER: Ej. Tiempo de consolidación reducido de horas a minutos]',
        },
      ],
    },
    gallery: [
      {
        id: 'gal-bi-1',
        title: 'Arquitectura del Pipeline ETL: MongoDB & PostgreSQL hacia Power BI',
        caption:
          'Representación técnica del flujo de extracción, transformación en Python y modelado analítico.',
        type: 'data-pipeline',
        isPlaceholder: true,
        placeholderNote: 'Esquema técnico interactivo. Reemplazable por capturas de modelos o dashboards anonimizados.',
        highlights: [
          { label: 'Fuentes de Datos', value: 'MongoDB + PostgreSQL' },
          { label: 'Motor ETL', value: 'Python + SQL' },
          { label: 'Visualización', value: 'Power BI Dashboards' },
        ],
      },
    ],
    links: [
      {
        label: 'Solicitar Demo de Arquitectura ETL & BI',
        url: '#contacto',
        isPlaceholder: true,
        note: 'Proyecto interno empresarial.',
      },
    ],
    status: 'En Producción (Arquitectura Implementada)',
    featured: true,
  },
  {
    id: 'proj-03',
    slug: 'aplicacion-evaluacion-desempeno',
    number: '03',
    title: 'Aplicación Empresarial de Evaluación de Desempeño',
    subtitle: 'Gestión integral de ciclos evaluativos, control de roles, formularios configurables y notificaciones automatizadas',
    description:
      'Sistema web empresarial diseñado para digitalizar y orquestar el proceso completo de evaluación de desempeño organizacional, integrando administración de ciclos, permisos por rol, formularios dinámicos y flujos automatizados de notificación y seguimiento.',
    category: 'Sistemas Empresariales',
    technologies: ['JavaScript', 'HTML & CSS', 'APIs REST', 'SQL', 'Automatización de Flujos', 'Docker'],
    problem: {
      summary:
        'Los procesos de evaluación de desempeño gestionados mediante hojas de cálculo o herramientas desconectadas generan cuellos de botella administrativos, errores de permisos, pérdida de trazabilidad y baja tasa de completitud en los plazos establecidos.',
      challenges: [
        'Complejidad para administrar múltiples ciclos de evaluación simultáneos o históricos con diferentes criterios y ponderaciones.',
        'Necesidad de un control de acceso estricto basado en roles (administradores, líderes, colaboradores, talento humano).',
        'Rigidez en los instrumentos de evaluación cuando no se cuenta con un motor de formularios configurables.',
        'Seguimiento manual desgastante para recordar asignaciones pendientes, vencimientos y cambios de estado.',
      ],
    },
    solution: {
      summary:
        'Se construyó una aplicación empresarial modular que centraliza la configuración de ciclos, asigna evaluaciones según jerarquía y rol, renderiza formularios configurables y automatiza todas las notificaciones de estado del ciclo.',
      approach: [
        'Módulo de administración de ciclos con control de fechas de apertura, cierre, estados de avance y reglas de negocio.',
        'Sistema de gestión de roles y permisos que garantiza privacidad y acceso exclusivo a las evaluaciones correspondientes.',
        'Motor de formularios configurables que permite adaptar competencias, preguntas, escalas de calificación y secciones.',
        'Flujos automatizados de notificación para alertar sobre inicio de ciclo, evaluaciones asignadas, recordatorios y cierres.',
      ],
    },
    architecture: {
      overview:
        'Arquitectura de aplicación web empresarial con separación clara entre interfaz de usuario, lógica de negocio basada en roles, persistencia relacional y motor de notificaciones automatizadas.',
      diagramType: 'enterprise-app',
      dataFlowSummary:
        'Configuración de Ciclo & Roles → Motor de Formularios Dinámicos → Registro & Cálculo de Evaluaciones → Flujos Automatizados de Notificación & Reportes',
      steps: [
        {
          id: 'step-1',
          layer: 'Capa 01 · Administración & Seguridad',
          title: 'Gestión de Ciclos, Usuarios y Control de Roles',
          description:
            'Definición de periodos evaluativos, relaciones evaluador-evaluado y control de acceso por perfil.',
          tech: ['Aplicaciones Web', 'Control de Roles', 'SQL'],
          protocol: 'RBAC & Cycle Governance',
        },
        {
          id: 'step-2',
          layer: 'Capa 02 · Motor Dinámico',
          title: 'Renderizado de Formularios Configurables',
          description:
            'Estructuración flexible de plantillas de evaluación, criterios, pesos y validaciones en interfaz web.',
          tech: ['JavaScript', 'HTML & CSS', 'APIs REST'],
          protocol: 'Dynamic Form Schema',
        },
        {
          id: 'step-3',
          layer: 'Capa 03 · Orquestación de Eventos',
          title: 'Flujos Automatizados de Notificación',
          description:
            'Disparo automático de avisos por asignación, recordatorios de vencimiento y confirmación de evaluaciones completadas.',
          tech: ['Automatización', 'APIs REST', 'Webhooks'],
          protocol: 'Automated Notification Pipeline',
        },
        {
          id: 'step-4',
          layer: 'Capa 04 · Consolidación & Seguimiento',
          title: 'Trazabilidad de Avance y Resultados',
          description:
            'Consulta en tiempo real del estado de completitud por área y consolidación de resultados del ciclo.',
          tech: ['SQL', 'Reportes Empresariales'],
          protocol: 'Relational Persistence & Analytics',
        },
      ],
    },
    functionalities: [
      {
        title: 'Administración Completa de Ciclos Evaluativos',
        description:
          'Creación, parametrización, activación y cierre controlado de periodos de evaluación con trazabilidad histórica.',
        tag: 'Gestión de Ciclos',
      },
      {
        title: 'Control de Acceso Basado en Roles',
        description:
          'Vistas y permisos diferenciados para administradores del sistema, evaluadores y colaboradores.',
        tag: 'Seguridad & Roles',
      },
      {
        title: 'Formularios Dinámicos y Configurables',
        description:
          'Parametrización de secciones, preguntas, escalas de valoración y comentarios sin requerir cambios en el código fuente.',
        tag: 'Arquitectura Modular',
      },
      {
        title: 'Flujos Automatizados de Notificación',
        description:
          'Envío programado y por eventos de alertas de asignación, seguimiento de pendientes y confirmación de cierre.',
        tag: 'Automatización',
      },
    ],
    results: {
      summary:
        'Digitalización integral del proceso evaluativo, reemplazando gestiones manuales por una plataforma estructurada, auditable y automatizada.',
      confidentialityNote:
        'Aplicación desarrollada para entorno corporativo. Datos de colaboradores y estructura organizacional protegidos.',
      items: [
        {
          title: 'Estandarización y Trazabilidad del Proceso de Evaluación',
          description:
            'Control centralizado del estado de cada evaluación en curso, pendiente o finalizada en tiempo real.',
          type: 'verifiable-impact',
        },
        {
          title: 'Flexibilidad Operativa mediante Formularios Configurables',
          description:
            'Capacidad de adaptar instrumentos de medición para distintos perfiles o periodos sin reprocesos técnicos.',
          type: 'verifiable-impact',
        },
        {
          title: 'Métrica de Adopción / Participación Organizacional',
          description:
            'Espacio configurable para añadir el número de usuarios evaluados o porcentaje de cumplimiento de ciclos.',
          type: 'metric-placeholder',
          placeholderMetric: '[PLACEHOLDER: Ej. N° de colaboradores / % de completitud del ciclo]',
        },
      ],
    },
    gallery: [
      {
        id: 'gal-perf-1',
        title: 'Arquitectura de Módulos: Ciclos, Roles, Formularios y Notificaciones',
        caption:
          'Esquema funcional del sistema de evaluación de desempeño y su motor de notificaciones automatizadas.',
        type: 'workflow-engine',
        isPlaceholder: true,
        placeholderNote: 'Blueprint de interfaz y flujo. Reemplazable por capturas de la aplicación en src/content/projects.ts.',
        highlights: [
          { label: 'Gobernanza', value: 'Ciclos & Roles (RBAC)' },
          { label: 'Instrumentos', value: 'Formularios Configurables' },
          { label: 'Seguimiento', value: 'Notificaciones Automatizadas' },
        ],
      },
    ],
    links: [
      {
        label: 'Consultar Detalles de Implementación',
        url: '#contacto',
        isPlaceholder: true,
        note: 'Sistema empresarial de uso interno.',
      },
    ],
    status: 'Desplegado en Entorno Corporativo',
    featured: true,
  },
  {
    id: 'proj-04',
    slug: 'agente-ia-atencion-reservas',
    number: '04',
    title: 'Agente de Inteligencia Artificial para Atención y Reservas',
    subtitle: 'Asistente conversacional conectado a fuentes de datos en tiempo real para consultas, disponibilidad y solicitudes',
    description:
      'Agente inteligente conversacional diseñado para automatizar la atención al usuario, resolver consultas frecuentes con precisión contextual, verificar disponibilidad en fuentes de información conectadas y gestionar solicitudes o reservas de principio a fin.',
    category: 'IA & Agentes',
    technologies: ['APIs de IA / LLMs', 'Agentes Inteligentes', 'n8n', 'APIs REST', 'Webhooks', 'Bases de Datos'],
    problem: {
      summary:
        'La atención manual de consultas repetitivas, validación de disponibilidad y recepción de reservas genera demoras en tiempos de respuesta, pérdida de oportunidades fuera de horario laboral y sobrecarga operativa en los equipos de servicio.',
      challenges: [
        'Los chatbots tradicionales basados únicamente en árboles rígidos fallan al interpretar lenguaje natural o solicitudes con múltiples variables.',
        'Un modelo de IA aislado (sin conexión a fuentes de datos reales) no puede validar disponibilidad efectiva ni registrar reservas de forma confiable.',
        'Necesidad de orquestar la conversación con acciones transaccionales reales (consultar agenda/cupos, validar datos y registrar la solicitud).',
        'Requerimiento de mantener respuestas consistentes, acotadas al contexto del negocio y libres de invenciones (alucinaciones).',
      ],
    },
    solution: {
      summary:
        'Se desarrolló un agente de inteligencia artificial orquestado con flujos de automatización y conectado mediante APIs a fuentes de información actualizadas, capaz de comprender la intención del usuario, consultar disponibilidad real y procesar solicitudes de reserva.',
      approach: [
        'Integración de modelos de IA mediante APIs con instrucciones de sistema estructuradas y control de contexto.',
        'Conexión del agente con fuentes de información y bases de datos para responder sobre servicios, políticas y disponibilidad en tiempo real.',
        'Orquestación de herramientas (tool calling / flujos automatizados) para ejecutar validaciones de disponibilidad y registro de reservas.',
        'Confirmación estructurada de la solicitud y escalamiento o notificación al equipo operativo cuando el caso lo requiere.',
      ],
    },
    architecture: {
      overview:
        'Arquitectura de Agente Inteligente con Orquestación de Herramientas: combina comprensión de lenguaje natural (API de IA), motor de flujos (n8n / Webhooks) y conexión en tiempo real con fuentes de datos de disponibilidad y reservas.',
      diagramType: 'conversational-ai',
      dataFlowSummary:
        'Mensaje del Usuario → Orquestador & Agente IA (Comprensión de Intención) → Consulta a Fuentes de Información / Disponibilidad → Registro de Reserva / Respuesta Contextual',
      steps: [
        {
          id: 'step-1',
          layer: 'Capa 01 · Canal Conversacional & Webhooks',
          title: 'Recepción de Mensajes y Gestión de Sesión',
          description:
            'Captura de la interacción del usuario mediante webhooks y recuperación del contexto conversacional activo.',
          tech: ['Webhooks', 'APIs REST'],
          protocol: 'Webhook Event Ingestion',
        },
        {
          id: 'step-2',
          layer: 'Capa 02 · Razonamiento & Agente de IA',
          title: 'Interpretación de Intención y Orquestación con IA',
          description:
            'Procesamiento mediante API de modelo de lenguaje para identificar si el usuario realiza una consulta, verifica disponibilidad o solicita reserva.',
          tech: ['Modelos de IA (APIs)', 'Agentes Inteligentes'],
          protocol: 'LLM Intent & Tool Routing',
        },
        {
          id: 'step-3',
          layer: 'Capa 03 · Conexión a Fuentes de Datos',
          title: 'Consulta de Información y Disponibilidad en Tiempo Real',
          description:
            'Ejecución de flujos que consultan bases de datos o sistemas conectados para validar horarios, cupos y condiciones vigentes.',
          tech: ['n8n', 'SQL / Bases de Datos', 'APIs REST'],
          protocol: 'Real-Time Data Retrieval',
        },
        {
          id: 'step-4',
          layer: 'Capa 04 · Ejecución & Confirmación',
          title: 'Procesamiento de Solicitud / Reserva y Notificación',
          description:
            'Registro estructurado de la reserva o solicitud en el sistema y envío de confirmación clara al usuario.',
          tech: ['Automatización', 'APIs REST'],
          protocol: 'Transactional Execution',
        },
      ],
    },
    functionalities: [
      {
        title: 'Comprensión Conversacional en Lenguaje Natural',
        description:
          'Interacción fluida capaz de extraer fechas, requerimientos y preferencias del usuario sin formularios rígidos.',
        tag: 'Agentes de IA',
      },
      {
        title: 'Conexión Directa con Fuentes de Información',
        description:
          'Respuestas fundamentadas en datos reales del negocio, evitando respuestas genéricas o desactualizadas.',
        tag: 'RAG / Datos Conectados',
      },
      {
        title: 'Verificación Automatizada de Disponibilidad',
        description:
          'Consulta dinámica de espacios, horarios o recursos disponibles antes de confirmar cualquier solicitud.',
        tag: 'Integración API',
      },
      {
        title: 'Gestión End-to-End de Reservas y Solicitudes',
        description:
          'Captura de datos completos, registro automático en el sistema de gestión y confirmación inmediata.',
        tag: 'Automatización Asistida por IA',
      },
    ],
    results: {
      summary:
        'Automatización inteligente del primer nivel de atención y del flujo de reservas con disponibilidad continua 24/7.',
      confidentialityNote:
        'Configuración de prompts, credenciales de API y bases de conocimiento específicas del cliente se mantienen privadas.',
      items: [
        {
          title: 'Atención Continua y Respuesta Inmediata Conectada a Datos',
          description:
            'Capacidad de atender consultas y validar disponibilidad de manera autónoma en cualquier horario.',
          type: 'verifiable-impact',
        },
        {
          title: 'Reducción de Carga Operativa en Gestión Manual de Solicitudes',
          description:
            'Las solicitudes llegan estructuradas y validadas directamente al sistema de reservas.',
          type: 'verifiable-impact',
        },
        {
          title: 'Tasa de Resolución Autónoma / Volumen de Reservas',
          description:
            'Espacio configurable para incorporar métricas de interacciones o tiempos promedio de atención.',
          type: 'metric-placeholder',
          placeholderMetric: '[PLACEHOLDER: Ej. % de consultas y reservas gestionadas automáticamente]',
        },
      ],
    },
    gallery: [
      {
        id: 'gal-ai-1',
        title: 'Arquitectura del Agente de IA: Orquestación, Fuentes de Datos y Reservas',
        caption:
          'Diagrama interactivo del ciclo de razonamiento del agente, consulta de disponibilidad y registro transaccional.',
        type: 'ai-agent-console',
        isPlaceholder: true,
        placeholderNote: 'Simulación técnica del flujo del agente. Reemplazable por capturas de conversación autorizadas.',
        highlights: [
          { label: 'Núcleo Cognitivo', value: 'Integración API de IA' },
          { label: 'Orquestación', value: 'Flujos Inteligentes & Tools' },
          { label: 'Operación', value: 'Consultas, Disponibilidad & Reservas' },
        ],
      },
    ],
    links: [
      {
        label: 'Solicitar Demostración de Agentes de IA',
        url: '#contacto',
        isPlaceholder: true,
        note: 'Demostración funcional disponible bajo solicitud.',
      },
    ],
    status: 'Solución Activa / Modular',
    featured: true,
  },
  {
    id: 'proj-05',
    slug: 'automatizacion-procesos-empresariales',
    number: '05',
    title: 'Ecosistema de Automatización de Procesos Empresariales',
    subtitle: 'Integración de sistemas corporativos, sincronización vía APIs y orquestación de flujos operativos con n8n',
    description:
      'Conjunto de soluciones de arquitectura de integración y automatización diseñadas para conectar sistemas corporativos aislados mediante n8n, APIs REST y Webhooks, eliminando tareas repetitivas y garantizando la fluidez de la información entre áreas.',
    category: 'Automatización & Integración',
    technologies: ['n8n', 'APIs REST', 'Webhooks', 'Power Automate', 'Node-RED', 'SQL', 'Docker'],
    problem: {
      summary:
        'En múltiples procesos empresariales, las aplicaciones corporativas operan como islas de información, obligando a los equipos a realizar doble digitación, transferencias manuales de archivos y validaciones repetitivas propensas a error humano.',
      challenges: [
        'Falta de interoperabilidad nativa entre plataformas corporativas, bases de datos y herramientas de comunicación interna.',
        'Procesos operativos críticos que dependen de tareas manuales recurrentes para mover o transformar datos entre sistemas.',
        'Ausencia de trazabilidad centralizada y manejo de errores cuando una integración punto a punto falla.',
        'Tiempos de ciclo elevados en aprobaciones, notificaciones operativas y actualización de registros interdepartamentales.',
      ],
    },
    solution: {
      summary:
        'Se diseñó e implementó un ecosistema de flujos automatizados basados en n8n, webhooks y APIs REST que actúa como bus de integración empresarial, sincronizando datos, ejecutando reglas de negocio y orquestando procesos de extremo a extremo.',
      approach: [
        'Diseño de flujos modulares y reutilizables en n8n activados por eventos (Webhooks) o programación temporal (Cron).',
        'Integración de sistemas corporativos mediante consumo y exposición de APIs REST con autenticación segura y transformación de payloads JSON.',
        'Implementación de manejo de errores, reintentos automáticos y alertas técnicas para garantizar alta confiabilidad operativa.',
        'Estandarización del despliegue y mantenimiento de los servicios de automatización utilizando contenedores Docker cuando la arquitectura lo requiere.',
      ],
    },
    architecture: {
      overview:
        'Arquitectura de integración basada en eventos y micro-flujos: n8n opera como orquestador central conectando aplicaciones empresariales, bases de datos y canales de notificación a través de APIs REST y Webhooks.',
      diagramType: 'n8n-orchestration',
      dataFlowSummary:
        'Sistemas Corporativos Origen (Eventos / Webhooks) → Orquestador n8n (Validación, Transformación & Reglas) → APIs REST & Bases de Datos Destino → Notificaciones & Auditoría',
      steps: [
        {
          id: 'step-1',
          layer: 'Capa 01 · Disparadores & Eventos',
          title: 'Captura de Eventos Empresariales (Webhooks & Schedulers)',
          description:
            'Detección en tiempo real de cambios de estado, nuevos registros o ejecuciones programadas en los sistemas origen.',
          tech: ['Webhooks', 'n8n', 'APIs REST'],
          protocol: 'Event / Cron Triggers',
        },
        {
          id: 'step-2',
          layer: 'Capa 02 · Transformación & Reglas',
          title: 'Enrutamiento Lógico, Validación y Mapeo de Datos',
          description:
            'Normalización de estructuras JSON, aplicación de condicionales de negocio y enriquecimiento de información.',
          tech: ['n8n', 'JavaScript'],
          protocol: 'Payload Transformation',
        },
        {
          id: 'step-3',
          layer: 'Capa 03 · Interoperabilidad',
          title: 'Sincronización con Sistemas Corporativos y Bases de Datos',
          description:
            'Actualización transaccional en plataformas destino, motores SQL y servicios externos vía APIs REST.',
          tech: ['APIs REST', 'SQL', 'Power Automate / Node-RED'],
          protocol: 'Multi-System API Sync',
        },
        {
          id: 'step-4',
          layer: 'Capa 04 · Resiliencia & Observabilidad',
          title: 'Control de Ejecuciones, Manejo de Errores y Alertas',
          description:
            'Monitoreo de ejecuciones exitosas, gestión de fallos y notificación a los equipos operativos o técnicos.',
          tech: ['n8n', 'Docker', 'Logs de Ejecución'],
          protocol: 'Reliability & Observability',
        },
      ],
    },
    functionalities: [
      {
        title: 'Orquestación Avanzada con n8n',
        description:
          'Flujos de trabajo complejos con ramificaciones condicionales, procesamiento por lotes, sub-workflows y control de errores.',
        tag: 'n8n Workflows',
      },
      {
        title: 'Integración de Sistemas vía APIs REST y Webhooks',
        description:
          'Comunicación bidireccional en tiempo real entre plataformas empresariales que originalmente no se conectaban entre sí.',
        tag: 'Interoperabilidad',
      },
      {
        title: 'Eliminación de Tareas Operativas Repetitivas',
        description:
          'Automatización de sincronización de registros, generación de documentos/reportes y notificaciones interáreas.',
        tag: 'Eficiencia Operativa',
      },
      {
        title: 'Arquitectura Escalable y Mantenible',
        description:
          'Diseño desacoplado que permite incorporar nuevos sistemas o modificar reglas de negocio sin afectar la operación existente.',
        tag: 'Arquitectura Empresarial',
      },
    ],
    results: {
      summary:
        'Transformación de tareas operativas manuales y fragmentadas en flujos digitales continuos, auditables y de rápida ejecución.',
      confidentialityNote:
        'Por seguridad corporativa no se exponen URLs de webhooks, credenciales ni topologías internas de clientes.',
      items: [
        {
          title: 'Interconexión Confiable del Ecosistema de Aplicaciones',
          description:
            'Sincronización automatizada de información entre sistemas empresariales mediante APIs y eventos.',
          type: 'verifiable-impact',
        },
        {
          title: 'Disminución de Errores por Procesamiento Manual',
          description:
            'Estandarización de reglas de negocio y validaciones automáticas en cada transferencia de datos.',
          type: 'verifiable-impact',
        },
        {
          title: 'Horas Operativas Ahorradas / Ejecuciones Mensuales',
          description:
            'Espacio reservado para incorporar volumen de ejecuciones automatizadas o ahorro de tiempo cuantificado.',
          type: 'metric-placeholder',
          placeholderMetric: '[PLACEHOLDER: Ej. N° de flujos en producción / horas operativas optimizadas]',
        },
      ],
    },
    gallery: [
      {
        id: 'gal-auto-1',
        title: 'Bus de Orquestación Empresarial con n8n, APIs y Sistemas Corporativos',
        caption:
          'Topología de integración multi-sistema con manejo de webhooks, transformación de datos y sincronización API.',
        type: 'integration-bus',
        isPlaceholder: true,
        placeholderNote: 'Esquema arquitectónico interactivo. Reemplazable por diagramas o capturas de flujos n8n.',
        highlights: [
          { label: 'Motor Central', value: 'n8n Automation Engine' },
          { label: 'Protocolos', value: 'REST APIs & Webhooks' },
          { label: 'Alcance', value: 'Sistemas Corporativos & Datos' },
        ],
      },
    ],
    links: [
      {
        label: 'Conversemos sobre Automatización en tu Empresa',
        url: '#contacto',
        isPlaceholder: false,
      },
    ],
    status: 'En Producción (Arquitectura Implementada)',
    featured: true,
  },
];

export const projectsByLocale: Record<Locale, Project[]> = {
  es: projectsDataEs,
  // Estructura preparada para futura versión en inglés sin modificar componentes visuales
  en: projectsDataEs,
};

export function getAllProjects(locale: Locale = 'es'): Project[] {
  return projectsByLocale[locale] ?? projectsDataEs;
}

export function getProjectBySlug(slug: string, locale: Locale = 'es'): Project | undefined {
  return getAllProjects(locale).find((project) => project.slug === slug);
}
