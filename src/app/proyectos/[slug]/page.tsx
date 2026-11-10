import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  ShieldAlert,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { getAllProjects, getProjectBySlug } from '@/content/projects';
import {
  ProjectBlueprintVisualizer,
  BlueprintGalleryCard,
} from '@/components/sections/ProjectBlueprintVisualizer';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const projects = getAllProjects('es');
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug, 'es');
  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: `${project.title} — Caso de Estudio & Arquitectura`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Daniel Lenis`,
      description: project.description,
      type: 'article',
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const allProjects = getAllProjects('es');
  const projectIndex = allProjects.findIndex((p) => p.slug === params.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = allProjects[projectIndex];
  const prevProject =
    projectIndex > 0
      ? allProjects[projectIndex - 1]
      : allProjects[allProjects.length - 1];
  const nextProject =
    projectIndex < allProjects.length - 1
      ? allProjects[projectIndex + 1]
      : allProjects[0];

  return (
    <article className="min-h-screen pt-28 pb-24 bg-obsidian bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-card hover:bg-obsidian-elevated border border-slate-800 hover:border-brand-cyan/40 font-mono text-xs text-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-brand-cyan" />
            <span>VOLVER AL CATÁLOGO DE PROYECTOS</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span>CASO DE ESTUDIO</span>
            <span>{'//'}</span>
            <span className="text-brand-cyan font-semibold">
              PROYECTO {project.number}
            </span>
          </div>
        </div>

        {/* Hero Header of Project */}
        <header className="tech-panel rounded-2xl p-6 sm:p-10 lg:p-12 space-y-6 shadow-panel">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="px-3.5 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 font-mono text-xs text-brand-cyan font-semibold">
              {project.category}
            </span>

            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {project.status}
            </span>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 leading-tight">
              {project.title}
            </h1>
            <p className="font-mono text-sm sm:text-base text-brand-cyan">
              {project.subtitle}
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
              {project.description}
            </p>
          </div>

          {/* Stack Badges */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-slate-400 mr-2">
              TECNOLOGÍAS INTEGRADAS:
            </span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-obsidian-deep border border-slate-700/80 font-mono text-xs text-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Section 1: Problem vs Solution */}
        <section
          aria-label="Problema y solución implementada"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Problema */}
          <div className="tech-panel rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
                01 // PROBLEMA QUE RESUELVE
              </span>
              <span className="font-mono text-xs text-slate-400">
                DIAGNÓSTICO
              </span>
            </div>

            <p className="text-slate-200 text-base leading-relaxed font-medium">
              {project.problem.summary}
            </p>

            <div className="space-y-2.5 pt-2">
              <h2 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                DESAFÍOS IDENTIFICADOS:
              </h2>
              <ul className="space-y-2.5">
                {project.problem.challenges.map((ch) => (
                  <li
                    key={ch}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solución */}
          <div className="tech-panel rounded-2xl p-6 sm:p-8 space-y-5 border-brand-cyan/35">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-mono text-xs uppercase tracking-wider text-brand-cyan font-semibold">
                02 // SOLUCIÓN IMPLEMENTADA
              </span>
              <span className="font-mono text-xs text-slate-400">
                INGENIERÍA & EJECUCIÓN
              </span>
            </div>

            <p className="text-slate-200 text-base leading-relaxed font-medium">
              {project.solution.summary}
            </p>

            <div className="space-y-2.5 pt-2">
              <h2 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                PILARES DE LA IMPLEMENTACIÓN:
              </h2>
              <ul className="space-y-2.5">
                {project.solution.approach.map((ap) => (
                  <li
                    key={ap}
                    className="flex items-start gap-2.5 text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{ap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Architecture & Workflow Diagram */}
        <section
          aria-label="Arquitectura y flujo de trabajo"
          className="tech-panel rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
            <div>
              <span className="font-mono text-xs text-brand-cyan font-semibold">
                03 // ARQUITECTURA DEL SISTEMA & FLUJO DE TRABAJO
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-50 mt-1">
                Topología de Integración y Capas de Procesamiento
              </h2>
            </div>
            <span className="font-mono text-xs px-3 py-1 rounded bg-obsidian-deep border border-slate-800 text-slate-300">
              Interactúa con cada capa para ver detalles
            </span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.architecture.overview}
          </p>

          <ProjectBlueprintVisualizer project={project} />
        </section>

        {/* Section 3: Main Functionalities & Verifiable Results */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 tech-panel rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="pb-3 border-b border-slate-800">
              <span className="font-mono text-xs text-brand-cyan font-semibold">
                04 // FUNCIONALIDADES PRINCIPALES
              </span>
              <h2 className="font-display text-xl font-bold text-slate-50 mt-1">
                Capacidades Técnicas del Sistema
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.functionalities.map((fn) => (
                <div
                  key={fn.title}
                  className="p-5 rounded-xl bg-obsidian-deep/90 border border-slate-800 space-y-2"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded bg-brand-blue/15 border border-brand-blue/30 font-mono text-xs text-brand-cyan">
                    {fn.tag}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-100">
                    {fn.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {fn.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 tech-panel rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="pb-3 border-b border-slate-800">
              <span className="font-mono text-xs text-brand-cyan font-semibold">
                05 // RESULTADOS E IMPACTO
              </span>
              <h2 className="font-display text-xl font-bold text-slate-50 mt-1">
                Valor Entregado a la Operación
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {project.results.summary}
            </p>

            <div className="space-y-3">
              {project.results.items.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-obsidian-deep/90 border border-slate-800 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
                    <h3 className="font-display text-sm font-bold text-slate-100">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                  {item.placeholderMetric && (
                    <p className="mt-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-amber-300">
                      {item.placeholderMetric}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-obsidian-deep border border-slate-800 flex items-start gap-2.5 text-xs text-slate-400 font-mono">
              <ShieldAlert className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
              <span>{project.results.confidentialityNote}</span>
            </div>
          </div>
        </section>

        {/* Section 4: Visual Gallery / Architectural Blueprints */}
        <section aria-label="Galería visual y blueprints" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs text-brand-cyan font-semibold">
                06 // GALERÍA VISUAL & ESQUEMAS TÉCNICOS
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-50 mt-1">
                Vistas de Arquitectura y Espacios para Capturas Autorizadas
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {project.gallery.map((item) => (
              <BlueprintGalleryCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* CTA Banner to Discuss Similar Architecture */}
        <section className="tech-panel rounded-2xl p-6 sm:p-8 border-brand-blue/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-cyan">
              <Terminal className="w-4 h-4" />
              <span>¿BUSCAS IMPLEMENTAR UNA SOLUCIÓN SIMILAR?</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-50">
              Conversemos sobre cómo adaptar esta arquitectura a tu proceso.
            </h2>
          </div>

          <Link
            href="/#contacto"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blueGlow text-slate-50 text-sm font-medium shadow-glow-blue transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>Solicitar Consultoría / Demo</span>
          </Link>
        </section>

        {/* Project-to-Project Navigation */}
        <nav
          aria-label="Navegación entre proyectos"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800"
        >
          <Link
            href={`/proyectos/${prevProject.slug}`}
            className="tech-panel-interactive rounded-xl p-5 flex items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <ArrowLeft className="w-5 h-5 text-brand-cyan group-hover:-translate-x-1 transition-transform shrink-0" />
              <div className="min-w-0">
                <span className="font-mono text-xs text-slate-400 block">
                  PROYECTO ANTERIOR ({prevProject.number})
                </span>
                <span className="font-display text-sm sm:text-base font-bold text-slate-100 truncate block">
                  {prevProject.title}
                </span>
              </div>
            </div>
          </Link>

          <Link
            href={`/proyectos/${nextProject.slug}`}
            className="tech-panel-interactive rounded-xl p-5 flex items-center justify-between gap-4 text-right group"
          >
            <div className="min-w-0 flex-1">
              <span className="font-mono text-xs text-slate-400 block">
                SIGUIENTE PROYECTO ({nextProject.number})
              </span>
              <span className="font-display text-sm sm:text-base font-bold text-slate-100 truncate block">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-brand-cyan group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </nav>
      </div>
    </article>
  );
}
