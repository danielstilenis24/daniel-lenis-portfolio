'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Briefcase,
  CheckCircle2,
  Cpu,
  Edit3,
  Layers,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { experienceTimeline } from '@/content/portfolio-data';

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experiencia"
      className="relative py-24 lg:py-32 bg-obsidian-surface border-t border-slate-800/80"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          tag="TRAYECTORIA & EVOLUCIÓN TÉCNICA"
          title="Experiencia enfocada en resolver problemas reales mediante arquitectura y código."
          description="Evolución profesional centrada en responsabilidades técnicas, competencias de ingeniería, diseño de arquitecturas e implementación de soluciones para entornos empresariales."
        />

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          {experienceTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Node Marker */}
              <div
                className="absolute -left-[25px] sm:-left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-obsidian border-2 border-brand-cyan shadow-glow-cyan"
                aria-hidden="true"
              />

              <div className="tech-panel rounded-2xl p-6 sm:p-8 space-y-6">
                {/* Top Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                  <div>
                    <span className="font-mono text-xs text-brand-cyan font-semibold">
                      {item.stageCode}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-slate-50 mt-1">
                      {item.roleTitle}
                    </h3>
                    <p className="font-mono text-xs text-slate-300 mt-1">
                      Especialidad: {item.focusArea}
                    </p>
                  </div>

                  {/* Editable Metadata Badges (Honest & Transparent per Prompt Rules) */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-deep border border-slate-700/80 font-mono text-xs text-slate-300">
                      <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
                      {item.organizationPlaceholder}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-amber-300">
                      <Edit3 className="w-3.5 h-3.5" />
                      {item.periodPlaceholder}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-base leading-relaxed">
                  {item.summary}
                </p>

                {/* Responsibilities & Architectural Contributions */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7 space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-brand-cyan" />
                      RESPONSABILIDADES Y EJECUCIÓN TÉCNICA
                    </h4>
                    <ul className="space-y-2.5">
                      {item.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-2.5 text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5 space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-brand-blue" />
                      APORTES Y SOLUCIONES ENTREGADAS
                    </h4>
                    <div className="p-4 rounded-xl bg-obsidian-deep/80 border border-slate-800 space-y-2.5">
                      {item.architecturalContributions.map((contrib) => (
                        <p
                          key={contrib}
                          className="text-xs sm:text-sm text-slate-300 pb-2.5 last:pb-0 border-b last:border-b-0 border-slate-800/80"
                        >
                          • {contrib}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Competencies Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-slate-400 mr-1">
                    COMPETENCIAS CLAVE:
                  </span>
                  {item.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="px-2.5 py-1 rounded-md bg-obsidian-card border border-slate-700/80 font-mono text-xs text-slate-200"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
