import { SiteConfig } from '@/types/portfolio';

/**
 * CONFIGURACIÓN CENTRALIZADA DEL PORTAFOLIO — DANIEL LENIS
 * =========================================================
 * Todos los enlaces externos, correos de contacto, perfiles profesionales
 * y metadatos están centralizados en este archivo para facilitar su actualización
 * sin necesidad de modificar componentes visuales.
 */
export const siteConfig: SiteConfig = {
  locale: 'es',
  supportedLocales: ['es', 'en'],
  author: {
    name: 'Daniel Lenis',
    role: 'AI Automation & Data Engineer',
    headline: 'Transformo procesos complejos en soluciones inteligentes.',
    subheadline:
      'Ingeniero de Sistemas especializado en el desarrollo de soluciones empresariales mediante inteligencia artificial, automatización de procesos, integración de sistemas e ingeniería de datos.',
    location: 'Colombia · Alcance Global / Remoto',
    availabilityStatus: 'Disponible para Proyectos, Consultoría y Roles Senior / Arquitecto',
  },
  contact: {
    email: {
      value: 'contacto@daniellenis.dev', // [PLACEHOLDER CONFIGURABLE] Reemplazar por correo real o definir NEXT_PUBLIC_CONTACT_EMAIL
      isPlaceholder: true,
      configNote:
        'Placeholder centralizado en src/config/site.ts (contact.email.value) o mediante variable de entorno NEXT_PUBLIC_CONTACT_EMAIL.',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/daniel-lenis-placeholder', // [PLACEHOLDER CONFIGURABLE]
      handle: '/in/daniel-lenis [Configurar URL en site.ts]',
      isPlaceholder: true,
      configNote:
        'Actualizar con el enlace oficial de LinkedIn en src/config/site.ts (contact.linkedin.url).',
    },
    github: {
      url: 'https://github.com/danielstilenis24',
      handle: '@danielstilenis24',
      isPlaceholder: false,
      configNote:
        'Perfil oficial de GitHub configurado en src/config/site.ts (contact.github.url).',
    },
    commercialInquiries: {
      label: 'Consultoría en IA, Automatización, Integración & Datos',
      channelNote:
        'Canal directo para evaluación de arquitectura, diagnóstico de procesos operativos y propuestas técnicas a medida.',
    },
  },
  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://intelicore.online',
    title: 'Daniel Lenis | AI Automation & Data Engineer — Portafolio Profesional',
    description:
      'Ingeniero de Sistemas especializado en Inteligencia Artificial, Automatización de Procesos (n8n, Power Automate, APIs), Ingeniería de Datos (Python, SQL, ETL) y Business Intelligence (Power BI).',
    keywords: [
      'Daniel Lenis',
      'AI Automation Engineer',
      'Data Engineer',
      'Ingeniero de Sistemas',
      'Automatización de Procesos',
      'Agentes de Inteligencia Artificial',
      'n8n',
      'Power Automate',
      'Node-RED',
      'Python',
      'SQL',
      'Power BI',
      'Integración de Sistemas',
      'Business Intelligence',
      'ETL',
    ],
  },
};
