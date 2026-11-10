'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Bot,
  Workflow,
  Database,
  Code2,
  Check,
  Sparkles,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { specialtyPillars } from '@/content/portfolio-data';
import { SpecialtyPillar } from '@/types/portfolio';
import { cn } from '@/lib/utils';

function PillarVisual({ mode, isActive }: { mode: SpecialtyPillar['visualMode']; isActive: boolean }) {
  if (mode === 'ai-neural') {
    return (
      <div className="relative h-28 w-full rounded-xl bg-obsidian-deep/90 border border-slate-800/90 p-3.5 flex items-center justify-between overflow-hidden">
        <div className="flex flex-col gap-1 z-10">
          <span className="font-mono text-xs text-brand-cyan">INPUT // PROMPT & CONTEXT</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="px-2 py-1 rounded bg-brand-cyan/15 border border-brand-cyan/40 font-mono text-xs text-slate-100">
              API Modelo IA
            </span>
            <span className="text-brand-cyan font-mono text-xs">→</span>
            <span className="px-2 py-1 rounded bg-brand-blue/15 border border-brand-blue/40 font-mono text-xs text-slate-100">
              Agente + Tools
            </span>
            <span className="text-brand-cyan font-mono text-xs">→</span>
            <span className="px-2 py-1 rounded bg-emerald-500/15 border border-emerald-500/40 font-mono text-xs text-emerald-300">
              Acción / Datos
            </span>
          </div>
        </div>
        <Bot className={cn('w-10 h-10 shrink-0 transition-transform duration-300', isActive ? 'text-brand-cyan scale-110' : 'text-slate-600')} />
      </div>
    );
  }

  if (mode === 'automation-flow') {
    return (
      <div className="relative h-28 w-full rounded-xl bg-obsidian-deep/90 border border-slate-800/90 p-3.5 flex items-center justify-between overflow-hidden">
        <div className="flex flex-col gap-1 z-10">
          <span className="font-mono text-xs text-brand-blue">EVENT BUS // n8n · POWER AUTOMATE · NODE-RED</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-slate-200">
              Webhook
            </span>
            <span className="text-brand-blue font-mono text-xs">⚡</span>
            <span className="px-2 py-1 rounded bg-brand-blue/20 border border-brand-blue/50 font-mono text-xs text-brand-cyan">
              Orquestador n8n
            </span>
            <span className="text-brand-blue font-mono text-xs">⇄</span>
            <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-slate-200">
              REST APIs
            </span>
          </div>
        </div>
        <Workflow className={cn('w-10 h-10 shrink-0 transition-transform duration-300', isActive ? 'text-brand-blue scale-110' : 'text-slate-600')} />
      </div>
    );
  }

  if (mode === 'data-pipeline') {
    return (
      <div className="relative h-28 w-full rounded-xl bg-obsidian-deep/90 border border-slate-800/90 p-3.5 flex items-center justify-between overflow-hidden">
        <div className="flex flex-col gap-1 z-10">
          <span className="font-mono text-xs text-emerald-400">DATA PIPELINE // ETL & ANALYTICS</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-slate-200">
              SQL / NoSQL
            </span>
            <span className="text-emerald-400 font-mono text-xs">→</span>
            <span className="px-2 py-1 rounded bg-emerald-500/15 border border-emerald-500/40 font-mono text-xs text-emerald-300">
              Python ETL
            </span>
            <span className="text-emerald-400 font-mono text-xs">→</span>
            <span className="px-2 py-1 rounded bg-amber-500/15 border border-amber-500/40 font-mono text-xs text-amber-300">
              Power BI
            </span>
          </div>
        </div>
        <Database className={cn('w-10 h-10 shrink-0 transition-transform duration-300', isActive ? 'text-emerald-400 scale-110' : 'text-slate-600')} />
      </div>
    );
  }

  return (
    <div className="relative h-28 w-full rounded-xl bg-obsidian-deep/90 border border-slate-800/90 p-3.5 flex items-center justify-between overflow-hidden">
      <div className="flex flex-col gap-1 z-10">
        <span className="font-mono text-xs text-purple-400">ENTERPRISE CORE // WEB · APIs · DOCKER</span>
        <div className="flex items-center gap-2 mt-1">
          <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-slate-200">
            Web App & Roles
          </span>
          <span className="text-purple-400 font-mono text-xs">↔</span>
          <span className="px-2 py-1 rounded bg-purple-500/15 border border-purple-500/40 font-mono text-xs text-purple-300">
            Backend API
          </span>
          <span className="text-purple-400 font-mono text-xs">→</span>
          <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700 font-mono text-xs text-slate-200">
            Docker
          </span>
        </div>
      </div>
      <Code2 className={cn('w-10 h-10 shrink-0 transition-transform duration-300', isActive ? 'text-purple-400 scale-110' : 'text-slate-600')} />
    </div>
  );
}

export function SpecialtiesSection() {
  const prefersReducedMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>('pillar-ai');

  return (
    <section
      id="especialidades"
      className="relative py-24 lg:py-32 bg-obsidian bg-tech-grid border-t border-slate-800/80"
      aria-labelledby="specialties-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="02"
          tag="ÁREAS DE ESPECIALIZACIÓN"
          title="Cuatro pilares tecnológicos que convergen en soluciones completas."
          description="Desde la captura y modelado del dato hasta la automatización de procesos y el despliegue de agentes inteligentes o aplicaciones empresariales."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {specialtyPillars.map((pillar, index) => {
            const isActive = hoveredId === pillar.id;

            return (
              <motion.article
                key={pillar.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredId(pillar.id)}
                onFocus={() => setHoveredId(pillar.id)}
                className={cn(
                  'tech-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all',
                  isActive && 'border-brand-cyan/45'
                )}
              >
                <div className="space-y-5">
                  {/* Top Pillar Index & Badge */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-brand-blue/15 text-brand-cyan border border-brand-blue/30">
                      PILAR {pillar.index} {'//'} {pillar.shortTitle.toUpperCase()}
                    </span>
                    <Sparkles
                      className={cn(
                        'w-4 h-4 transition-colors',
                        isActive ? 'text-brand-cyan' : 'text-slate-600'
                      )}
                    />
                  </div>

                  {/* Interactive Schematic Header */}
                  <PillarVisual mode={pillar.visualMode} isActive={isActive} />

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-50">
                      {pillar.title}
                    </h3>
                    <p className="font-mono text-xs text-brand-cyan mt-1">
                      {pillar.subtitle}
                    </p>
                    <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <ul className="space-y-2.5 pt-2">
                    {pillar.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tech Tags & Outcome */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.coreTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-obsidian-surface border border-slate-700/80 font-mono text-xs text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="font-mono text-xs text-slate-400">
                    <strong className="text-brand-cyan">IMPACTO:</strong>{' '}
                    {pillar.architectureOutcome}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
