'use client';

import React, { useState } from 'react';
import {
  Activity,
  Database,
  Workflow,
  Bot,
  Server,
  Layers,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { Project, ProjectVisualBlueprint } from '@/types/portfolio';
import { cn } from '@/lib/utils';

export function ProjectBlueprintVisualizer({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const steps = project.architecture.steps;
  const activeStep = steps[activeStepIndex] ?? steps[0];

  return (
    <div className="rounded-xl bg-obsidian-deep/95 border border-slate-800/90 p-4 sm:p-5 space-y-4">
      {/* Top Blueprint Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-brand-cyan" />
          <span className="font-mono text-xs font-semibold text-slate-200 uppercase">
            DIAGRAMA DE FLUJO & ARQUITECTURA ({steps.length} CAPAS)
          </span>
        </div>
        <span className="font-mono text-xs text-brand-cyan">
          {project.architecture.diagramType.toUpperCase()}
        </span>
      </div>

      {/* Interactive Layer Flow Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {steps.map((step, idx) => {
          const isSelected = idx === activeStepIndex;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStepIndex(idx)}
              className={cn(
                'text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan',
                isSelected
                  ? 'bg-brand-blue/15 border-brand-cyan shadow-glow-cyan'
                  : 'bg-obsidian-surface/90 border-slate-800 hover:border-slate-600'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="font-mono text-xs font-bold text-brand-cyan">
                    0{idx + 1}
                  </span>
                  {step.protocol && (
                    <span className="font-mono text-xs text-slate-400 truncate max-w-[130px]">
                      {step.protocol}
                    </span>
                  )}
                </div>
                <p className="font-display text-sm font-semibold text-slate-100 line-clamp-2">
                  {step.title}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1">
                {step.tech.map((t) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded bg-obsidian-card font-mono text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Layer Detail Box */}
      {!compact && activeStep && (
        <div className="p-4 rounded-xl bg-obsidian-surface border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs text-brand-cyan">
              {activeStep.layer}
            </span>
            <h4 className="font-display text-base font-bold text-slate-100">
              {activeStep.title}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeStep.description}
            </p>
          </div>
          <div className="shrink-0 flex flex-wrap gap-1.5">
            {activeStep.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-brand-blue/15 border border-brand-blue/30 font-mono text-xs text-brand-cyan"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function BlueprintGalleryCard({ item }: { item: ProjectVisualBlueprint }) {
  const Icon =
    item.type === 'telemetry-dashboard'
      ? Activity
      : item.type === 'data-pipeline'
      ? Database
      : item.type === 'ai-agent-console'
      ? Bot
      : item.type === 'integration-bus'
      ? Server
      : Workflow;

  return (
    <div className="tech-panel rounded-2xl p-6 space-y-5 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-brand-cyan">
            <Icon className="w-4 h-4" />
            VISTA TÉCNICA // {item.type.toUpperCase()}
          </span>
          {item.isPlaceholder && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-amber-300">
              <ImageIcon className="w-3 h-3" />
              Blueprint / Captura Reemplazable
            </span>
          )}
        </div>

        {/* Simulated High-Tech System Screen */}
        <div className="rounded-xl bg-obsidian-deep border border-slate-800 p-5 bg-tech-grid space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
            </div>
            <span className="font-mono text-xs text-slate-400">
              SYS.BLUEPRINT.SCHEMATIC
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {item.highlights.map((hl) => (
              <div
                key={hl.label}
                className="p-3 rounded-lg bg-obsidian-surface/95 border border-slate-800"
              >
                <p className="font-mono text-xs text-slate-400">{hl.label}</p>
                <p className="font-display text-sm font-bold text-brand-cyan mt-1">
                  {hl.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-bold text-slate-100">
            {item.title}
          </h4>
          <p className="text-sm text-slate-400 mt-1 leading-relaxed">
            {item.caption}
          </p>
        </div>
      </div>

      {item.isPlaceholder && (
        <div className="p-3 rounded-lg bg-obsidian/90 border border-slate-800/90 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
          <p className="font-mono text-xs text-slate-400">
            {item.placeholderNote}
          </p>
        </div>
      )}
    </div>
  );
}
