import {
  ConsultingService,
  ExperienceItem,
  SolutionPattern,
  SpecialtyPillar,
  TechCategory,
  TechNode,
} from '@/types/portfolio';

/**
 * DATOS ESTRUCTURADOS DEL PORTAFOLIO — DANIEL LENIS
 * =================================================
 * Archivo centralizado de contenido para las secciones:
 * - Sobre mí y Enfoque de Ingeniería
 * - 4 Pilares de Especialización
 * - Ecosistema Tecnológico Relacional
 * - Trayectoria y Evolución Profesional (con campos editables explícitos)
 * - Servicios de Consultoría
 */

export const aboutContent = {
  badge: 'PERFIL PROFESIONAL & ARQUITECTURA DE SOLUCIONES',
  title: 'Ingeniería que conecta la estrategia de negocio con sistemas inteligentes en producción.',
  lead: 'Soy Ingeniero de Sistemas especializado en transformar requerimientos operativos y analíticos complejos en arquitecturas funcionales mediante Inteligencia Artificial, Automatización de Procesos, Integración de Sistemas e Ingeniería de Datos.',
  paragraphs: [
    'En muchas organizaciones, el verdadero obstáculo no es la falta de software, sino la desconexión entre sus plataformas, sus datos y sus procesos operativos. Mi enfoque parte de comprender a fondo la lógica del negocio para diseñar soluciones donde los datos fluyen con integridad, las tareas repetitivas se orquestan automáticamente y la inteligencia artificial aporta capacidad real de decisión y atención.',
    'Combino el rigor de la ingeniería de datos (Python, SQL, motores relacionales y NoSQL, pipelines ETL y modelado en Power BI) con plataformas modernas de orquestación e integración (n8n, Power Automate, Node-RED, APIs REST y Webhooks) y el desarrollo de agentes inteligentes y aplicaciones web empresariales.',
    'Más que implementar herramientas aisladas, construyo ecosistemas tecnológicos cohesivos, mantenibles y escalables que reducen la fricción operativa y habilitan decisiones basadas en información confiable.',
  ],
  engineeringPrinciples: [
    {
      code: 'PRINCIPIO 01',
      title: 'Arquitectura Orientada al Problema',
      description:
        'Cada decisión técnica responde a un objetivo operativo o analítico concreto: eliminar cuellos de botella, asegurar la calidad del dato o acelerar tiempos de respuesta.',
    },
    {
      code: 'PRINCIPIO 02',
      title: 'Interoperabilidad y Desacoplamiento',
      description:
        'Diseño integraciones modulares mediante APIs, webhooks y flujos bien estructurados que permiten evolucionar cada componente sin comprometer la estabilidad del sistema.',
    },
    {
      code: 'PRINCIPIO 03',
      title: 'IA Práctica y Conectada a Datos',
      description:
        'Implemento modelos y agentes de IA integrados con fuentes de información reales y reglas de negocio verificables, priorizando utilidad operativa y confiabilidad.',
    },
    {
      code: 'PRINCIPIO 04',
      title: 'Calidad del Dato de Extremo a Extremo',
      description:
        'Desde la ingesta y transformación ETL hasta el modelado en Power BI, garantizo que la información sea íntegra, trazable y accionable para la dirección.',
    },
  ],
  methodologySteps: [
    {
      step: '01',
      name: 'Diagnóstico & Mapeo',
      detail: 'Análisis de procesos actuales, cuellos de botella, fuentes de datos e interfaces entre sistemas.',
    },
    {
      step: '02',
      name: 'Diseño de Arquitectura',
      detail: 'Definición de flujos de datos, contratos de API, reglas de automatización y modelo de información.',
    },
    {
      step: '03',
      name: 'Construcción & Orquestación',
      detail: 'Desarrollo de pipelines ETL, flujos en n8n/APIs, agentes de IA, aplicaciones y dashboards.',
    },
    {
      step: '04',
      name: 'Validación & Evolución',
      detail: 'Pruebas de integridad, puesta en producción, monitoreo de ejecuciones y mejora continua.',
    },
  ],
};

export const specialtyPillars: SpecialtyPillar[] = [
  {
    id: 'pillar-ai',
    index: '01',
    title: 'Inteligencia Artificial y Agentes',
    shortTitle: 'IA & Agentes',
    subtitle: 'Sistemas conversacionales y razonamiento conectado a procesos reales',
    description:
      'Diseño e integración de capacidades de inteligencia artificial dentro de flujos empresariales, conectando modelos de lenguaje mediante APIs con bases de datos, reglas operativas y herramientas de ejecución.',
    capabilities: [
      'Integración de modelos de IA mediante APIs en aplicaciones y flujos corporativos.',
      'Desarrollo de agentes inteligentes con acceso a herramientas y consulta de datos en tiempo real.',
      'Asistentes conversacionales para atención, consulta de disponibilidad y gestión de solicitudes.',
      'Automatización asistida por IA para clasificación, extracción estructurada y enrutamiento.',
      'Orquestación de flujos de trabajo inteligentes multi-etapa.',
    ],
    coreTech: ['APIs de IA / LLMs', 'Agentes Inteligentes', 'Asistentes Conversacionales', 'n8n AI Workflows', 'APIs REST'],
    visualMode: 'ai-neural',
    architectureOutcome: 'De interacciones manuales a agentes autónomos conectados con la operación.',
  },
  {
    id: 'pillar-automation',
    index: '02',
    title: 'Automatización e Integración',
    shortTitle: 'Automatización & APIs',
    subtitle: 'Orquestación de procesos e interoperabilidad entre sistemas empresariales',
    description:
      'Construcción de arquitecturas orientadas a eventos que conectan aplicaciones aisladas, sincronizan información crítica y automatizan flujos operativos complejos sin intervención manual.',
    capabilities: [
      'Orquestación avanzada de flujos de trabajo con n8n, Power Automate y Node-RED.',
      'Diseño, consumo e integración de APIs REST y arquitecturas basadas en Webhooks.',
      'Integración de sistemas empresariales (ERP, CRM, motores de tickets, bases de datos y mensajería).',
      'Automatización de procesos operativos, notificaciones, alertas y sincronización de registros.',
      'Manejo de errores, trazabilidad de ejecuciones y resiliencia en integraciones críticas.',
    ],
    coreTech: ['n8n', 'Power Automate', 'Node-RED', 'APIs REST', 'Webhooks', 'InfluxDB'],
    visualMode: 'automation-flow',
    architectureOutcome: 'Ecosistemas conectados donde la información fluye sin fricción ni doble digitación.',
  },
  {
    id: 'pillar-data',
    index: '03',
    title: 'Ingeniería y Analítica de Datos',
    shortTitle: 'Datos & BI',
    subtitle: 'Pipelines ETL, arquitecturas de información y Business Intelligence',
    description:
      'Transformación de datos crudos y dispersos en activos analíticos confiables mediante procesos ETL en Python y SQL, integración de bases de datos relacionales/NoSQL y visualización ejecutiva en Power BI.',
    capabilities: [
      'Desarrollo de procesos ETL de limpieza, transformación, normalización e integración con Python y SQL.',
      'Gestión e integración de bases de datos relacionales (PostgreSQL, MySQL, SQL Server) y NoSQL (MongoDB).',
      'Diseño de arquitecturas de información y modelado dimensional orientado a analítica.',
      'Construcción de dashboards empresariales e indicadores de gestión (KPIs) en Power BI.',
      'Automatización de procesos analíticos y actualización continua de reportes.',
    ],
    coreTech: ['Python', 'SQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Power BI', 'ETL'],
    visualMode: 'data-pipeline',
    architectureOutcome: 'Una única fuente de verdad lista para respaldar decisiones estratégicas y operativas.',
  },
  {
    id: 'pillar-software',
    index: '04',
    title: 'Desarrollo de Soluciones Empresariales',
    shortTitle: 'Software & Sistemas',
    subtitle: 'Aplicaciones web a medida, integraciones backend y despliegue contenedorizado',
    description:
      'Desarrollo de aplicaciones web funcionales y sistemas internos que digitalizan procesos de negocio, incorporando control de roles, formularios dinámicos, lógica backend e infraestructura con Docker.',
    capabilities: [
      'Desarrollo de aplicaciones web empresariales con JavaScript, HTML y CSS moderno.',
      'Implementación de integraciones backend, consumo/exposición de APIs y persistencia en bases de datos.',
      'Sistemas con administración de ciclos, control de acceso por roles y formularios configurables.',
      'Contenedorización y estandarización de entornos de despliegue mediante Docker.',
      'Diseño de soluciones modulares alineadas con las necesidades operativas de cada organización.',
    ],
    coreTech: ['JavaScript', 'HTML & CSS', 'APIs Backend', 'Docker', 'SQL', 'Sistemas Empresariales'],
    visualMode: 'enterprise-core',
    architectureOutcome: 'Aplicaciones corporativas robustas y adaptadas exactamente al flujo del negocio.',
  },
];

export const techCategories: TechCategory[] = [
  {
    id: 'ai',
    name: 'Inteligencia Artificial & Agentes',
    code: 'LAYER_01 // AI_COGNITIVE',
    description: 'Modelos conectados mediante APIs, agentes conversacionales y razonamiento aplicado a flujos de trabajo.',
    accentColor: '#22D3EE',
  },
  {
    id: 'automation',
    name: 'Automatización & Orquestación',
    code: 'LAYER_02 // ORCHESTRATION_BUS',
    description: 'Motores de flujo, webhooks e interoperabilidad para conectar plataformas y ejecutar reglas operativas.',
    accentColor: '#3B82F6',
  },
  {
    id: 'data',
    name: 'Ingeniería de Datos & Bases de Datos',
    code: 'LAYER_03 // DATA_ARCHITECTURE',
    description: 'Procesamiento ETL en Python, consultas SQL avanzadas y motores relacionales, documentales y temporales.',
    accentColor: '#10B981',
  },
  {
    id: 'bi',
    name: 'Business Intelligence & Analítica',
    code: 'LAYER_04 // DECISION_INTELLIGENCE',
    description: 'Modelado semántico, visualización ejecutiva, KPIs y automatización analítica.',
    accentColor: '#F59E0B',
  },
  {
    id: 'software',
    name: 'Desarrollo Web, Backend & Infraestructura',
    code: 'LAYER_05 // ENTERPRISE_SYSTEMS',
    description: 'Construcción de aplicaciones web, servicios backend, APIs y contenedores con Docker.',
    accentColor: '#A855F7',
  },
];

export const techNodes: TechNode[] = [
  // IA
  {
    id: 'ai-apis',
    name: 'APIs de Modelos de IA',
    category: 'ai',
    role: 'Motor Cognitivo & Procesamiento de Lenguaje',
    description:
      'Integración de modelos de lenguaje e inteligencia artificial vía API para comprensión de intención, extracción de entidades y generación controlada.',
    connectedTo: ['ai-agents', 'n8n', 'rest-apis', 'python'],
    useCases: ['Interpretación de lenguaje natural', 'Clasificación inteligente de solicitudes', 'Extracción de datos estructurados'],
  },
  {
    id: 'ai-agents',
    name: 'Agentes Inteligentes & Asistentes',
    category: 'ai',
    role: 'Atención Autónoma & Ejecución con Herramientas',
    description:
      'Diseño de asistentes conversacionales y agentes capaces de consultar fuentes de datos reales, verificar disponibilidad y ejecutar acciones operativas.',
    connectedTo: ['ai-apis', 'n8n', 'webhooks', 'postgresql', 'rest-apis'],
    useCases: ['Agente de atención y reservas', 'Consulta en tiempo real a bases de datos', 'Orquestación de flujos asistidos por IA'],
  },
  // Automatización
  {
    id: 'n8n',
    name: 'n8n',
    category: 'automation',
    role: 'Orquestador Central de Flujos e Integraciones',
    description:
      'Plataforma clave para diseñar flujos de trabajo automatizados, orquestar agentes de IA, procesar webhooks e interconectar sistemas corporativos y bases de datos.',
    connectedTo: ['webhooks', 'rest-apis', 'ai-agents', 'ai-apis', 'postgresql', 'influxdb', 'powerbi', 'docker'],
    useCases: ['Automatización de procesos empresariales', 'Alertas y gestión de tickets industriales', 'Orquestación de agentes de IA'],
  },
  {
    id: 'power-automate',
    name: 'Power Automate',
    category: 'automation',
    role: 'Automatización de Procesos Corporativos',
    description:
      'Automatización de flujos empresariales, aprobaciones, notificaciones e integración con ecosistemas corporativos y analíticos.',
    connectedTo: ['rest-apis', 'powerbi', 'sql-server', 'webhooks'],
    useCases: ['Flujos de aprobación y notificación', 'Actualización automatizada de datasets en Power BI', 'Integración de procesos administrativos'],
  },
  {
    id: 'node-red',
    name: 'Node-RED',
    category: 'automation',
    role: 'Programación Visual Orientada a Eventos & Telemetría',
    description:
      'Orquestación ligera basada en flujos para integración de eventos, señales operativas, protocolos industriales y servicios web.',
    connectedTo: ['influxdb', 'rest-apis', 'webhooks', 'javascript'],
    useCases: ['Enrutamiento de telemetría y eventos', 'Integración de señales operativas', 'Prototipado ágil de flujos IoT/API'],
  },
  {
    id: 'rest-apis',
    name: 'APIs REST & Webhooks',
    category: 'automation',
    role: 'Columna Vertebral de Interoperabilidad',
    description:
      'Comunicación bidireccional en tiempo real entre aplicaciones web, motores de automatización, bases de datos y servicios de terceros.',
    connectedTo: ['n8n', 'ai-agents', 'javascript', 'python', 'postgresql', 'mongodb'],
    useCases: ['Sincronización entre sistemas corporativos', 'Disparo de eventos en tiempo real', 'Integraciones backend desacopladas'],
  },
  {
    id: 'webhooks',
    name: 'Webhooks & Event Triggers',
    category: 'automation',
    role: 'Disparadores Reactivos en Tiempo Real',
    description:
      'Captura instantánea de eventos generados por usuarios, sensores o aplicaciones para iniciar flujos automatizados sin latencia.',
    connectedTo: ['n8n', 'rest-apis', 'ai-agents', 'node-red'],
    useCases: ['Recepción de mensajes conversacionales', 'Disparo de alertas operativas', 'Notificaciones automáticas de ciclo'],
  },
  // Ingeniería de Datos
  {
    id: 'python',
    name: 'Python (ETL & Data Engineering)',
    category: 'data',
    role: 'Procesamiento, Limpieza y Transformación de Datos',
    description:
      'Desarrollo de pipelines ETL, normalización de estructuras JSON/NoSQL, automatización de scripts analíticos e integración multifuente.',
    connectedTo: ['postgresql', 'mongodb', 'sql', 'powerbi', 'rest-apis', 'ai-apis'],
    useCases: ['Pipelines ETL MongoDB + PostgreSQL', 'Limpieza y homologación de datos', 'Automatización de procesos analíticos'],
  },
  {
    id: 'sql',
    name: 'SQL Avanzado',
    category: 'data',
    role: 'Consulta, Modelado y Transformación Relacional',
    description:
      'Diseño de esquemas relacionales, vistas analíticas, procedimientos, optimización de consultas e integridad de datos.',
    connectedTo: ['postgresql', 'mysql', 'sql-server', 'python', 'powerbi', 'n8n'],
    useCases: ['Modelado dimensional para BI', 'Cruces y agregaciones complejas', 'Persistencia transaccional de sistemas'],
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'data',
    role: 'Motor Relacional Empresarial & Analítico',
    description:
      'Base de datos relacional robusta utilizada para consolidación de datos, almacenamiento transaccional y capa analítica para BI.',
    connectedTo: ['python', 'sql', 'powerbi', 'n8n', 'mongodb'],
    useCases: ['Data warehouse / capa analítica', 'Consolidación ETL con Python', 'Persistencia para agentes y aplicaciones'],
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'data',
    role: 'Base de Datos Documental NoSQL',
    description:
      'Gestión e integración de datos semiestructurados basados en documentos, conectada mediante pipelines ETL en Python hacia modelos analíticos.',
    connectedTo: ['python', 'postgresql', 'rest-apis', 'powerbi'],
    useCases: ['Extracción de colecciones documentales', 'Desanidado y transformación hacia SQL', 'Integración de fuentes híbridas'],
  },
  {
    id: 'sql-server',
    name: 'SQL Server & MySQL',
    category: 'data',
    role: 'Motores Relacionales Corporativos',
    description:
      'Integración, extracción y administración de información en motores relacionales ampliamente utilizados en entornos empresariales.',
    connectedTo: ['sql', 'powerbi', 'python', 'power-automate'],
    useCases: ['Integración con bases de datos corporativas', 'Alimentación de modelos en Power BI', 'Consultas y procesos ETL'],
  },
  {
    id: 'influxdb',
    name: 'InfluxDB',
    category: 'data',
    role: 'Base de Datos de Series Temporales',
    description:
      'Almacenamiento de alta eficiencia para variables industriales, telemetría y métricas continuas indexadas por tiempo.',
    connectedTo: ['n8n', 'node-red', 'sql', 'powerbi'],
    useCases: ['Monitoreo de variables industriales en planta', 'Detección de umbrales por tiempo', 'Histórico de telemetría operativa'],
  },
  // Business Intelligence
  {
    id: 'powerbi',
    name: 'Power BI & Modelado Analítico',
    category: 'bi',
    role: 'Visualización Ejecutiva, Dashboards & KPIs',
    description:
      'Diseño de modelos de datos, relaciones, indicadores de gestión y tableros interactivos que transforman datos complejos en decisiones claras.',
    connectedTo: ['sql', 'postgresql', 'python', 'mongodb', 'influxdb', 'sql-server'],
    useCases: ['Dashboards ejecutivos y operativos', 'Monitoreo industrial y seguimiento de tickets', 'Automatización de reportes gerenciales'],
  },
  // Software & Infraestructura
  {
    id: 'javascript',
    name: 'JavaScript, HTML & CSS',
    category: 'software',
    role: 'Desarrollo de Aplicaciones Web & Lógica en Flujos',
    description:
      'Construcción de interfaces web interactivas, formularios dinámicos configurables y scripts de transformación en motores de automatización.',
    connectedTo: ['rest-apis', 'n8n', 'docker', 'sql'],
    useCases: ['Aplicación de evaluación de desempeño', 'Formularios dinámicos y gestión por roles', 'Transformación de payloads en n8n'],
  },
  {
    id: 'docker',
    name: 'Docker & Contenedores',
    category: 'software',
    role: 'Empaquetado, Portabilidad y Despliegue de Servicios',
    description:
      'Estandarización de entornos para desplegar motores de automatización, bases de datos y aplicaciones web con reproducibilidad garantizada.',
    connectedTo: ['n8n', 'postgresql', 'javascript', 'python'],
    useCases: ['Despliegue de arquitecturas autogestionadas', 'Aislamiento de servicios empresariales', 'Portabilidad entre desarrollo y producción'],
  },
];

export const solutionPatterns: SolutionPattern[] = [
  {
    id: 'pattern-all',
    name: 'Ecosistema Completo Integrado',
    description: 'Vista global de todas las tecnologías y sus conexiones dentro de mi arquitectura de trabajo.',
    activeNodes: techNodes.map((n) => n.id),
    flowSequence: ['ai-apis', 'ai-agents', 'n8n', 'rest-apis', 'python', 'postgresql', 'powerbi'],
  },
  {
    id: 'pattern-ai-agent',
    name: 'Arquitectura de Agentes de IA & Automatización',
    description:
      'Cómo combino Webhooks, n8n, APIs de Modelos de IA y Bases de Datos para construir asistentes que consultan disponibilidad y ejecutan reservas reales.',
    activeNodes: ['webhooks', 'n8n', 'ai-apis', 'ai-agents', 'rest-apis', 'postgresql', 'docker'],
    flowSequence: ['webhooks', 'n8n', 'ai-apis', 'ai-agents', 'postgresql', 'rest-apis'],
  },
  {
    id: 'pattern-data-bi',
    name: 'Pipeline de Ingeniería de Datos & BI (NoSQL + SQL)',
    description:
      'Cómo integro fuentes heterogéneas (MongoDB, PostgreSQL, SQL Server) mediante procesos ETL en Python y SQL para construir modelos en Power BI.',
    activeNodes: ['mongodb', 'postgresql', 'sql-server', 'python', 'sql', 'powerbi'],
    flowSequence: ['mongodb', 'postgresql', 'python', 'sql', 'powerbi'],
  },
  {
    id: 'pattern-industrial',
    name: 'Monitoreo Industrial & Orquestación Operativa',
    description:
      'Cómo conecto series temporales en InfluxDB con flujos en n8n, APIs REST, persistencia SQL y tableros analíticos en Power BI.',
    activeNodes: ['influxdb', 'node-red', 'n8n', 'rest-apis', 'sql', 'powerbi'],
    flowSequence: ['influxdb', 'n8n', 'rest-apis', 'sql', 'powerbi'],
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: 'exp-01',
    stageCode: 'ETAPA ACTUAL // ARQUITECTURA IA, AUTOMATIZACIÓN & DATOS',
    roleTitle: 'AI Automation & Data Engineer — Soluciones Empresariales',
    organizationPlaceholder: '[EDITABLE EN src/content/portfolio-data.ts: Organización / Práctica Profesional]',
    periodPlaceholder: '[EDITABLE: Periodo Actual]',
    isEditablePlaceholder: true,
    focusArea: 'Inteligencia Artificial Aplicada, Orquestación de Procesos e Ingeniería de Datos',
    summary:
      'Liderazgo técnico en el diseño, desarrollo e integración de soluciones empresariales que convergen agentes de inteligencia artificial, automatización de flujos de trabajo (n8n / APIs) y arquitecturas analíticas de datos.',
    responsibilities: [
      'Diseño e implementación de agentes conversacionales e integraciones con modelos de IA mediante APIs conectados a fuentes de datos en tiempo real.',
      'Orquestación de procesos empresariales e industriales mediante n8n, Webhooks y APIs REST para automatizar alertas, tickets y sincronización entre sistemas.',
      'Construcción de pipelines ETL con Python y SQL integrando bases de datos NoSQL (MongoDB), relacionales (PostgreSQL, SQL Server, MySQL) y series temporales (InfluxDB).',
      'Desarrollo de modelos de datos y dashboards ejecutivos en Power BI para monitoreo operativo y toma de decisiones gerenciales.',
    ],
    competencies: ['Agentes de IA', 'n8n', 'Python ETL', 'SQL', 'Power BI', 'InfluxDB', 'APIs REST', 'Docker'],
    architecturalContributions: [
      'Implementación de plataforma inteligente de monitoreo industrial integrando InfluxDB, n8n, SQL y Power BI.',
      'Despliegue de agente de IA para atención automatizada, consulta de disponibilidad y gestión de reservas.',
      'Unificación de fuentes MongoDB y PostgreSQL en modelos analíticos corporativos.',
    ],
  },
  {
    id: 'exp-02',
    stageCode: 'EVOLUCIÓN // INGENIERÍA DE DATOS, BI & INTEGRACIÓN DE SISTEMAS',
    roleTitle: 'Ingeniero de Datos, Business Intelligence & Automatización',
    organizationPlaceholder: '[EDITABLE EN src/content/portfolio-data.ts: Empresa / Entorno Corporativo]',
    periodPlaceholder: '[EDITABLE: Periodo]',
    isEditablePlaceholder: true,
    focusArea: 'Procesos ETL, Arquitecturas de Información, Power BI y Automatización Operativa',
    summary:
      'Desarrollo de arquitecturas de información, integración de bases de datos heterogéneas y automatización de reportes y flujos de trabajo para optimizar la visibilidad y eficiencia operativa.',
    responsibilities: [
      'Extracción, limpieza, transformación e integración de datos (ETL) utilizando Python y consultas avanzadas en SQL.',
      'Modelado dimensional, creación de indicadores de gestión (KPIs) y automatización de procesos analíticos en Power BI.',
      'Automatización de flujos operativos e integración de aplicaciones mediante Power Automate, Node-RED, n8n y APIs.',
      'Aseguramiento de la calidad, consistencia y disponibilidad de la información para equipos directivos y operativos.',
    ],
    competencies: ['Python', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Power BI', 'Power Automate', 'Node-RED'],
    architecturalContributions: [
      'Estandarización de modelos de datos para reportes gerenciales y operativos.',
      'Reducción del procesamiento manual mediante rutinas automatizadas de transformación y carga.',
    ],
  },
  {
    id: 'exp-03',
    stageCode: 'FUNDAMENTOS // INGENIERÍA DE SISTEMAS & DESARROLLO EMPRESARIAL',
    roleTitle: 'Ingeniero de Sistemas & Desarrollador de Soluciones Web / Backend',
    organizationPlaceholder: '[EDITABLE EN src/content/portfolio-data.ts: Institución / Empresa]',
    periodPlaceholder: '[EDITABLE: Periodo]',
    isEditablePlaceholder: true,
    focusArea: 'Desarrollo de Aplicaciones Empresariales, Bases de Datos e Integraciones Backend',
    summary:
      'Construcción de aplicaciones web corporativas, diseño de bases de datos relacionales, lógica de negocio por roles y digitalización de procesos internos.',
    responsibilities: [
      'Desarrollo de aplicaciones web empresariales utilizando JavaScript, HTML, CSS e integraciones backend vía APIs.',
      'Diseño de sistemas con administración de ciclos, control de permisos basados en roles y formularios dinámicos configurables.',
      'Implementación de flujos automatizados de notificación y persistencia en bases de datos SQL.',
      'Contenedorización de servicios y preparación de entornos reproducibles con Docker.',
    ],
    competencies: ['Ingeniería de Sistemas', 'JavaScript', 'HTML & CSS', 'SQL', 'APIs', 'Docker', 'Arquitectura de Software'],
    architecturalContributions: [
      'Desarrollo de aplicación empresarial de evaluación de desempeño con formularios configurables y notificaciones automatizadas.',
      'Consolidación de bases sólidas en arquitectura de sistemas, bases de datos y resolución estructurada de problemas.',
    ],
  },
];

export const consultingServices: ConsultingService[] = [
  {
    id: 'srv-automation',
    code: 'SRV-01',
    title: 'Automatización de Procesos Empresariales',
    tagline: 'Eliminación de tareas manuales repetitivas mediante flujos orquestados y confiables.',
    description:
      'Diseño e implementación de flujos de trabajo automatizados que ejecutan reglas de negocio, sincronizan información entre áreas, gestionan alertas/tickets y operan 24/7 con trazabilidad completa.',
    businessProblemSolved:
      'Procesos lentos dependientes de intervención humana, reprocesos operativos y demoras en notificaciones o seguimiento.',
    deliverables: [
      'Diagnóstico y mapa técnico de procesos automatizables.',
      'Flujos en producción sobre n8n, Power Automate o Node-RED.',
      'Manejo de errores, logs de auditoría y alertas operativas.',
      'Documentación de arquitectura y transferencia de control.',
    ],
    technologies: ['n8n', 'Power Automate', 'Node-RED', 'Webhooks', 'APIs REST', 'Docker'],
    idealFor: 'Empresas que buscan escalar su operación sin incrementar la carga administrativa manual.',
  },
  {
    id: 'srv-ai-agents',
    code: 'SRV-02',
    title: 'Desarrollo de Agentes de IA & Asistentes Inteligentes',
    tagline: 'Agentes conversacionales y operativos conectados a tus datos y sistemas reales.',
    description:
      'Construcción de agentes de inteligencia artificial que no solo conversan, sino que consultan bases de datos en tiempo real, verifican disponibilidad, clasifican información y ejecutan acciones en tus sistemas.',
    businessProblemSolved:
      'Cuellos de botella en atención al cliente, consultas repetitivas, gestión manual de reservas/solicitudes y subutilización de IA.',
    deliverables: [
      'Agente de IA integrado vía API con instrucciones y contexto de negocio.',
      'Conexión segura a fuentes de información, agendas o bases de datos.',
      'Flujos de acción (reservas, registro de solicitudes, escalamiento).',
      'Controles de validación para respuestas precisas y alineadas al negocio.',
    ],
    technologies: ['APIs de IA / LLMs', 'Agentes Inteligentes', 'n8n', 'APIs REST', 'SQL / NoSQL'],
    idealFor: 'Organizaciones que desean automatizar atención, reservas o procesos internos con IA conectada a su operación.',
  },
  {
    id: 'srv-integration',
    code: 'SRV-03',
    title: 'Integración de Aplicaciones y Sistemas',
    tagline: 'Interoperabilidad fluida entre plataformas corporativas, bases de datos y servicios cloud.',
    description:
      'Desarrollo de arquitecturas de integración mediante APIs REST, webhooks y buses de orquestación para que tu ERP, CRM, bases de datos, sistemas de tickets y herramientas internas funcionen como un solo ecosistema.',
    businessProblemSolved:
      'Silos de información, doble digitación entre sistemas desconectados e inconsistencia de datos entre departamentos.',
    deliverables: [
      'Arquitectura de integración y contratos de datos (JSON / REST).',
      'Conectores y middlewares de sincronización bidireccional.',
      'Mecanismos de seguridad, autenticación y reintentos automáticos.',
      'Pruebas de extremo a extremo en entorno productivo.',
    ],
    technologies: ['APIs REST', 'Webhooks', 'n8n', 'Python', 'JavaScript', 'SQL'],
    idealFor: 'Equipos con múltiples plataformas de software que necesitan comunicarse en tiempo real.',
  },
  {
    id: 'srv-bi',
    code: 'SRV-04',
    title: 'Dashboards e Inteligencia de Negocios (BI)',
    tagline: 'Visualización ejecutiva e indicadores de gestión para decisiones basadas en datos.',
    description:
      'Diseño de modelos de datos analíticos y tableros interactivos en Power BI que transforman datos operativos, comerciales o industriales en indicadores claros, accionables y actualizados automáticamente.',
    businessProblemSolved:
      'Reportes manuales tardíos en hojas de cálculo, falta de visibilidad gerencial en tiempo real y métricas inconsistentes.',
    deliverables: [
      'Modelo de datos optimizado (relaciones, jerarquías y medidas analíticas).',
      'Dashboards interactivos en Power BI adaptados por nivel directivo u operativo.',
      'Definición y estandarización de indicadores clave de gestión (KPIs).',
      'Configuración de actualización automatizada de datos.',
    ],
    technologies: ['Power BI', 'Modelado de Datos', 'SQL', 'Python', 'Automatización Analítica'],
    idealFor: 'Directivos, gerencias operativas y líderes de área que requieren visibilidad confiable de su negocio.',
  },
  {
    id: 'srv-data-eng',
    code: 'SRV-05',
    title: 'Ingeniería e Integración de Datos (ETL)',
    tagline: 'Pipelines robustos para extraer, limpiar, transformar y consolidar tus fuentes de datos.',
    description:
      'Construcción de procesos ETL en Python y SQL capaces de unificar datos desde motores relacionales (PostgreSQL, MySQL, SQL Server), documentales (MongoDB), series temporales (InfluxDB) y APIs externas.',
    businessProblemSolved:
      'Datos dispersos en múltiples motores, baja calidad o duplicidad de registros y lentitud en consultas analíticas.',
    deliverables: [
      'Pipelines ETL automatizados en Python y SQL.',
      'Reglas de limpieza, validación, normalización y calidad de datos.',
      'Consolidación en repositorio analítico relacional (PostgreSQL / SQL).',
      'Arquitectura de información preparada para BI e Inteligencia Artificial.',
    ],
    technologies: ['Python', 'SQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'InfluxDB'],
    idealFor: 'Empresas con datos fragmentados en distintas bases de datos que buscan construir una base analítica sólida.',
  },
  {
    id: 'srv-enterprise-apps',
    code: 'SRV-06',
    title: 'Desarrollo de Aplicaciones Empresariales',
    tagline: 'Sistemas web a medida para digitalizar procesos internos críticos.',
    description:
      'Diseño y desarrollo de aplicaciones web empresariales con gestión de usuarios y roles, formularios configurables, lógica de negocio personalizada, notificaciones automatizadas y despliegue con Docker.',
    businessProblemSolved:
      'Procesos internos complejos (como evaluaciones, seguimiento o gestión operativa) que no encajan en software genérico.',
    deliverables: [
      'Aplicación web responsive y moderna adaptada al flujo del cliente.',
      'Control de acceso por roles, ciclos y parametrización dinámica.',
      'Integración con bases de datos SQL, APIs y notificaciones automáticas.',
      'Empaquetado en Docker y documentación técnica de despliegue.',
    ],
    technologies: ['JavaScript', 'HTML & CSS', 'APIs Backend', 'SQL', 'Docker', 'Automatización'],
    idealFor: 'Organizaciones que necesitan digitalizar y controlar procesos internos propios con total flexibilidad.',
  },
];
