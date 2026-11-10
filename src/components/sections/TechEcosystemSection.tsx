'use client';

import React, { useState } from 'react';
import {
  Network,
  Sparkles,
  ArrowRight,
  Link2,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  techCategories,
  techNodes,
  solutionPatterns,
} from '@/content/portfolio-data';
import { TechNode } from '@/types/portfolio';
import { cn } from '@/lib/utils';

export function TechEcosystemSection() {
  const [selectedPatternId, setSelectedPatternId] = useState<string>('pattern-all');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('n8n');

  const activePattern =
    solutionPatterns.find((p) => p.id === selectedPatternId) ?? solutionPatterns[0];

  const selectedNode: TechNode =
    techNodes.find((n) => n.id === selectedNodeId) ?? techNodes[0];

  const connectedNodeIds = new Set(selectedNode.connectedTo);

  const handleSelectPattern = (patternId: string) => {
    setSelectedPatternId(patternId);
    const pat = solutionPatterns.find((p) => p.id === patternId);
    if (pat && pat.flowSequence.length > 0) {
      setSelectedNodeId(pat.flowSequence[0]);
    }
  };

  return (
    <section
      id="ecosistema"
      className="relative py-24 lg:py-32 bg-obsidian bg-tech-grid border-t border-slate-800/80"
      aria-labelledby="ecosystem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          tag="ECOSISTEMA TECNOLÓGICO & ARQUITECTURA RELACIONAL"
          title="Cómo combino tecnologías para construir sistemas completos."
          description="Más que herramientas aisladas, diseño flujos donde modelos de IA, motores de automatización, bases de datos y tableros analíticos operan de forma conectada. Selecciona un patrón de solución o cualquier nodo tecnológico para explorar sus sinergias."
        />

        {/* Interactive Solution Pattern Presets */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-cyan">
              1. EXPLORAR PATRONES DE ARQUITECTURA COMBINADA:
            </span>
            <span className="font-mono text-xs text-slate-400 hidden sm:inline">
              CLICK PARA ILUMINAR EL FLUJO DE INTEGRACIÓN
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {solutionPatterns.map((pattern) => {
              const isSelected = pattern.id === selectedPatternId;
              return (
                <button
                  key={pattern.id}
                  type="button"
                  onClick={() => handleSelectPattern(pattern.id)}
                  className={cn(
                    'text-left p-4 rounded-xl border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan flex flex-col justify-between',
                    isSelected
                      ? 'bg-brand-blue/20 border-brand-cyan shadow-glow-cyan'
                      : 'bg-obsidian-surface/90 border-slate-800 hover:border-slate-600'
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-xs text-brand-cyan font-semibold">
                        ARQUITECTURA
                      </span>
                      <Network
                        className={cn(
                          'w-4 h-4',
                          isSelected ? 'text-brand-cyan' : 'text-slate-600'
                        )}
                      />
                    </div>
                    <h3 className="font-display text-sm font-bold text-slate-100">
                      {pattern.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-2">
                      {pattern.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pattern Sequence Pipeline */}
          <div className="p-4 rounded-xl bg-obsidian-surface/95 border border-slate-800 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-brand-cyan font-semibold mr-2">
              FLUJO DEL PATRÓN ACTIVO:
            </span>
            {activePattern.flowSequence.map((nodeId, idx) => {
              const node = techNodes.find((n) => n.id === nodeId);
              if (!node) return null;
              const isFocused = node.id === selectedNodeId;
              return (
                <React.Fragment key={node.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedNodeId(node.id)}
                    className={cn(
                      'px-3 py-1 rounded-md font-mono text-xs transition-all border',
                      isFocused
                        ? 'bg-brand-cyan text-obsidian font-bold border-brand-cyan'
                        : 'bg-obsidian-card text-slate-200 border-slate-700 hover:border-brand-cyan'
                    )}
                  >
                    {node.name}
                  </button>
                  {idx < activePattern.flowSequence.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Main Relational Ecosystem Grid + Live Synergy Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 8 Cols: Layered Architecture Nodes */}
          <div className="lg:col-span-8 space-y-5">
            {techCategories.map((category) => {
              const nodesInCategory = techNodes.filter(
                (n) => n.category === category.id
              );

              return (
                <div
                  key={category.id}
                  className="tech-panel rounded-2xl p-5 sm:p-6 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: category.accentColor }}
                      />
                      <h3 className="font-display text-base sm:text-lg font-bold text-slate-100">
                        {category.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-slate-400">
                      {category.code}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    {nodesInCategory.map((node) => {
                      const isSelected = node.id === selectedNodeId;
                      const isDirectlyConnected = connectedNodeIds.has(node.id);
                      const isInActivePattern =
                        activePattern.activeNodes.includes(node.id);

                      return (
                        <button
                          key={node.id}
                          type="button"
                          onClick={() => setSelectedNodeId(node.id)}
                          className={cn(
                            'text-left p-3.5 rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan relative',
                            isSelected
                              ? 'bg-brand-blue/25 border-brand-cyan shadow-glow-cyan scale-[1.01]'
                              : isDirectlyConnected
                              ? 'bg-obsidian-elevated/90 border-brand-blue/60'
                              : isInActivePattern
                              ? 'bg-obsidian-surface/90 border-slate-700/90 hover:border-slate-500'
                              : 'bg-obsidian-deep/60 border-slate-800/60 opacity-50 hover:opacity-90'
                          )}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-display text-sm font-bold text-slate-100">
                              {node.name}
                            </span>
                            {isSelected ? (
                              <span className="px-1.5 py-0.5 rounded bg-brand-cyan text-obsidian font-mono text-xs font-bold">
                                ACTIVO
                              </span>
                            ) : isDirectlyConnected ? (
                              <span className="inline-flex items-center gap-1 font-mono text-xs text-brand-cyan">
                                <Link2 className="w-3 h-3" />
                                Conectado
                              </span>
                            ) : null}
                          </div>

                          <p className="font-mono text-xs text-slate-400 line-clamp-1">
                            {node.role}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 4 Cols: Sticky Node Relationship & Architecture Inspector */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div
              className="tech-panel rounded-2xl p-6 space-y-6 border-brand-cyan/40 shadow-panel"
              aria-live="polite"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-cyan" />
                  <span className="font-mono text-xs font-semibold text-brand-cyan uppercase">
                    INSPECTOR DE SINERGIAS
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-400">
                  NODO SELECCIONADO
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-slate-50">
                  {selectedNode.name}
                </h3>
                <p className="font-mono text-xs text-brand-cyan mt-1">
                  {selectedNode.role}
                </p>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              {/* Connected Technologies */}
              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-300 block">
                  SE INTEGRA DIRECTAMENTE CON ({selectedNode.connectedTo.length}):
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.connectedTo.map((connId) => {
                    const target = techNodes.find((n) => n.id === connId);
                    if (!target) return null;
                    return (
                      <button
                        key={connId}
                        type="button"
                        onClick={() => setSelectedNodeId(target.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-obsidian-surface hover:bg-brand-blue/20 border border-slate-700 hover:border-brand-cyan font-mono text-xs text-slate-200 transition-colors"
                      >
                        <Link2 className="w-3 h-3 text-brand-cyan" />
                        <span>{target.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Practical Use Cases */}
              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-300 block">
                  APLICACIÓN EN MIS SOLUCIONES:
                </span>
                <ul className="space-y-2">
                  {selectedNode.useCases.map((uc) => (
                    <li
                      key={uc}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-blue/10 border border-brand-blue/25 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
                <p className="font-mono text-xs text-slate-300">
                  Haz clic en cualquier nodo conectado para recorrer la cadena tecnológica completa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
