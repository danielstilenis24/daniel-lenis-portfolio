export type Locale = 'es' | 'en';

export type ProjectCategory =
  | 'IA & Agentes'
  | 'Automatización & Integración'
  | 'Ingeniería de Datos & BI'
  | 'Sistemas Empresariales';

export type ProjectStatus =
  | 'En Producción (Arquitectura Implementada)'
  | 'Desplegado en Entorno Corporativo'
  | 'Solución Activa / Modular'
  | 'En Evolución Continua';

export interface ArchitectureStep {
  id: string;
  layer: string;
  title: string;
  description: string;
  tech: string[];
  protocol?: string;
}

export interface ProjectVisualBlueprint {
  id: string;
  title: string;
  caption: string;
  type: 'telemetry-dashboard' | 'data-pipeline' | 'workflow-engine' | 'ai-agent-console' | 'integration-bus';
  isPlaceholder: boolean;
  placeholderNote: string;
  highlights: { label: string; value: string }[];
}

export interface ProjectResultItem {
  title: string;
  description: string;
  type: 'verifiable-impact' | 'metric-placeholder';
  placeholderMetric?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  isPlaceholder: boolean;
  note?: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  problem: {
    summary: string;
    challenges: string[];
  };
  solution: {
    summary: string;
    approach: string[];
  };
  architecture: {
    overview: string;
    diagramType: 'industrial-iot' | 'bi-lakehouse' | 'enterprise-app' | 'conversational-ai' | 'n8n-orchestration';
    steps: ArchitectureStep[];
    dataFlowSummary: string;
  };
  functionalities: {
    title: string;
    description: string;
    tag: string;
  }[];
  results: {
    summary: string;
    items: ProjectResultItem[];
    confidentialityNote: string;
  };
  gallery: ProjectVisualBlueprint[];
  links: ProjectLink[];
  status: ProjectStatus;
  featured: boolean;
}

export interface SpecialtyPillar {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  coreTech: string[];
  visualMode: 'ai-neural' | 'automation-flow' | 'data-pipeline' | 'enterprise-core';
  architectureOutcome: string;
}

export type TechCategoryId =
  | 'ai'
  | 'automation'
  | 'data'
  | 'bi'
  | 'software';

export interface TechCategory {
  id: TechCategoryId;
  name: string;
  code: string;
  description: string;
  accentColor: string;
}

export interface TechNode {
  id: string;
  name: string;
  category: TechCategoryId;
  role: string;
  description: string;
  connectedTo: string[];
  useCases: string[];
}

export interface SolutionPattern {
  id: string;
  name: string;
  description: string;
  activeNodes: string[];
  flowSequence: string[];
}

export interface ExperienceItem {
  id: string;
  stageCode: string;
  roleTitle: string;
  organizationPlaceholder: string;
  periodPlaceholder: string;
  isEditablePlaceholder: boolean;
  focusArea: string;
  summary: string;
  responsibilities: string[];
  competencies: string[];
  architecturalContributions: string[];
}

export interface ConsultingService {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  businessProblemSolved: string;
  deliverables: string[];
  technologies: string[];
  idealFor: string;
}

export interface SiteConfig {
  locale: Locale;
  supportedLocales: Locale[];
  author: {
    name: string;
    role: string;
    headline: string;
    subheadline: string;
    location: string;
    availabilityStatus: string;
  };
  contact: {
    email: {
      value: string;
      isPlaceholder: boolean;
      configNote: string;
    };
    linkedin: {
      url: string;
      handle: string;
      isPlaceholder: boolean;
      configNote: string;
    };
    github: {
      url: string;
      handle: string;
      isPlaceholder: boolean;
      configNote: string;
    };
    commercialInquiries: {
      label: string;
      channelNote: string;
    };
  };
  seo: {
    siteUrl: string;
    title: string;
    description: string;
    keywords: string[];
  };
}
