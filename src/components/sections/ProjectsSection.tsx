'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  Layers,
  ShieldAlert,
  Sparkles,
  FileCode2,
  ChevronRight,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getAllProjects } from '@/content/projects';
import { ProjectCategory } from '@/types/portfolio';
import { ProjectBlueprintVisualizer } from './ProjectBlueprintVisualizer';
import { cn } from '@/lib/utils';

const categories: ('Todos' | ProjectCategory)[] = [
  'Todos',
  'IA & Agentes',
  'Automatización & Integración',
  'Ingeniería de Datos & BI',
  'Sistemas Empresariales',
];

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const allProjects = getAllProjects('es');
  const [selectedCategory, setSelectedCategory] = useState<'Todos' | ProjectCategory>('Todos');
  const [expandedProjectId, setExpandedProjectId] = useState<string>(allProjects[0]?.id ?? 'proj-01');

  const filteredProjects =
    selectedCategory === 'Todos'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="proyectos"
      className="relative py-24 lg:py-32 bg-obsidian-surface border-t border-slate-800/80"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03"
          tag="CASOS DE ESTUDIO & ARQUITECTURAS REALES"
          title="Proyectos destacados de automatización, inteligencia artificial y datos."
          description="Cada solución responde a un desafío empresarial concreto mediante arquitecturas integradas. Explora el problema, la solución, el flujo técnico y las páginas de detalle de cada proyecto."
        />

        {/* Category Filter Bar */}
        <div
          className="flex flex-wrap items-center gap-2 mb-10"
          role="tablist"
          aria-label="Filtrar proyectos por especialidad"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-full font-mono text-xs transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan',
                  isSelected
                    ? 'bg-brand-blue text-slate-50 border-brand-blue shadow-glow-blue font-semibold'
                    : 'bg-obsidian-card text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProjectId === project.id;

              return (
                <motion.article
                  key={project.id}
                  layout={!prefersReducedMotion}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className={cn(
                    'tech-panel rounded-2xl overflow-hidden transition-all',
                    isExpanded ? 'border-brand-cyan/45 shadow-panel' : 'hover:border-slate-700'
                  )}
                >
                  {/* Card Main Header & Overview */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-brand-blue/20 text-brand-cyan border border-brand-blue/40">
                          PROYECTO {project.number}
                        </span>
                        <span className="font-mono text-xs px-3 py-1 rounded-full bg-obsidian-surface border border-slate-700/80 text-slate-300">
                          {project.category}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {project.status}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      <div className="lg:col-span-8 space-y-3">
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-50">
                          <Link
                            href={`/proyectos/${project.slug}`}
                            className="hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:underline"
                          >
                            {project.title}
                          </Link>
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-brand-cyan">
                          {project.subtitle}
                        </p>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Right Actions */}
                      <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-end gap-3">
                        <Link
                          href={`/proyectos/${project.slug}`}
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-blue hover:bg-brand-blueGlow text-slate-50 text-sm font-medium transition-all shadow-glow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                        >
                          <span>Ver Ficha Técnica Completa</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            setExpandedProjectId(isExpanded ? '' : project.id)
                          }
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-obsidian-surface hover:bg-obsidian-elevated text-slate-300 border border-slate-700/80 font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                          aria-expanded={isExpanded}
                        >
                          <Layers className="w-3.5 h-3.5 text-brand-cyan" />
                          <span>
                            {isExpanded
                              ? 'Contraer Vista de Arquitectura'
                              : 'Desplegar Arquitectura & Flujo'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Technologies Row */}
                    <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-slate-400 mr-1">
                          STACK:
                        </span>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-obsidian-deep border border-slate-800 font-mono text-xs text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <span className="font-mono text-xs text-slate-400">
                        {project.architecture.dataFlowSummary}
                      </span>
                    </div>

                    {/* Expandable Deep Technical Spec */}
                    {isExpanded && (
                      <div className="mt-8 pt-8 border-t border-slate-800 space-y-8">
                        {/* Problem vs Solution Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* Problema */}
                          <div className="p-5 sm:p-6 rounded-xl bg-obsidian-deep/80 border border-slate-800/90 space-y-3">
                            <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
                              {'// PROBLEMA QUE RESUELVE'}
                            </span>
                            <p className="text-sm text-slate-200 leading-relaxed font-medium">
                              {project.problem.summary}
                            </p>
                            <ul className="space-y-2 pt-2">
                              {project.problem.challenges.map((ch) => (
                                <li
                                  key={ch}
                                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-400"
                                >
                                  <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                  <span>{ch}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Solución */}
                          <div className="p-5 sm:p-6 rounded-xl bg-obsidian-deep/80 border border-slate-800/90 space-y-3">
                            <span className="font-mono text-xs uppercase tracking-wider text-brand-cyan font-semibold">
                              {'// SOLUCIÓN IMPLEMENTADA'}
                            </span>
                            <p className="text-sm text-slate-200 leading-relaxed font-medium">
                              {project.solution.summary}
                            </p>
                            <ul className="space-y-2 pt-2">
                              {project.solution.approach.map((ap) => (
                                <li
                                  key={ap}
                                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                                  <span>{ap}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Interactive Architecture Flow */}
                        <ProjectBlueprintVisualizer project={project} />

                        {/* Main Functionalities + Verifiable Results */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                          <div className="lg:col-span-7 space-y-3">
                            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300">
                              FUNCIONALIDADES PRINCIPALES
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {project.functionalities.map((fn) => (
                                <div
                                  key={fn.title}
                                  className="p-4 rounded-xl bg-obsidian-surface border border-slate-800"
                                >
                                  <span className="font-mono text-xs text-brand-cyan">
                                    {fn.tag}
                                  </span>
                                  <p className="font-display text-sm font-bold text-slate-100 mt-1">
                                    {fn.title}
                                  </p>
                                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                    {fn.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="lg:col-span-5 space-y-3">
                            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300">
                              RESULTADOS E IMPACTO OPERATIVO
                            </h4>
                            <div className="p-4 rounded-xl bg-obsidian-surface border border-slate-800 space-y-3">
                              {project.results.items.map((res) => (
                                <div
                                  key={res.title}
                                  className="pb-3 last:pb-0 border-b last:border-b-0 border-slate-800/80"
                                >
                                  <div className="flex items-center gap-2">
                                    <Sparkles className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                                    <p className="font-display text-xs sm:text-sm font-semibold text-slate-100">
                                      {res.title}
                                    </p>
                                  </div>
                                  <p className="text-xs text-slate-400 mt-1">
                                    {res.description}
                                  </p>
                                  {res.placeholderMetric && (
                                    <p className="mt-1.5 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-amber-300">
                                      {res.placeholderMetric}
                                    </p>
                                  )}
                                </div>
                              ))}

                              <div className="pt-2 flex items-start gap-2 text-xs text-slate-400 font-mono">
                                <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                <span>{project.results.confidentialityNote}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Link to Full Dedicated Page */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/30">
                          <div className="flex items-center gap-3">
                            <FileCode2 className="w-5 h-5 text-brand-cyan shrink-0" />
                            <span className="text-sm text-slate-200">
                              Explora la galería de blueprints arquitectónicos y especificaciones completas en la página dedicada del proyecto.
                            </span>
                          </div>
                          <Link
                            href={`/proyectos/${project.slug}`}
                            className="shrink-0 inline-flex items-center gap-2 font-mono text-xs font-semibold text-brand-cyan hover:underline"
                          >
                            <span>ABRIR CASO DE ESTUDIO</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
