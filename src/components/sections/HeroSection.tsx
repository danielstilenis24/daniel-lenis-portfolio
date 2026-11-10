'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Workflow,
  Database,
  Server,
  Sparkles,
  CheckCircle2,
  Activity,
  Layers,
  Terminal,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface HeroNode {
  id: string;
  code: string;
  title: string;
  shortLabel: string;
  role: string;
  protocols: string[];
  flowDescription: string;
  x: number;
  y: number;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
}

const architectureNodes: HeroNode[] = [
  {
    id: 'ai',
    code: 'NODE_01 // AI',
    title: 'Inteligencia Artificial',
    shortLabel: 'IA & Agentes',
    role: 'Modelos vía API, Agentes Inteligentes & Asistentes Conversacionales',
    protocols: ['APIs de IA', 'Agentes', 'Tool Calling', 'Asistentes'],
    flowDescription:
      'Interpreta lenguaje natural, consulta disponibilidad en fuentes reales y activa decisiones dentro del flujo operativo.',
    x: 20,
    y: 22,
    accent: '#22D3EE',
    icon: Bot,
  },
  {
    id: 'automation',
    code: 'NODE_02 // AUTO',
    title: 'Automatización & Integración',
    shortLabel: 'Automatización',
    role: 'Orquestación en n8n, Power Automate, Node-RED, APIs REST & Webhooks',
    protocols: ['n8n', 'Power Automate', 'Node-RED', 'APIs REST', 'Webhooks'],
    flowDescription:
      'Sincroniza aplicaciones corporativas, dispara alertas operativas, crea tickets y elimina tareas manuales repetitivas.',
    x: 80,
    y: 22,
    accent: '#3B82F6',
    icon: Workflow,
  },
  {
    id: 'data',
    code: 'NODE_03 // DATA',
    title: 'Ingeniería de Datos & BI',
    shortLabel: 'Datos & BI',
    role: 'Pipelines ETL en Python, SQL, PostgreSQL, MongoDB, InfluxDB & Power BI',
    protocols: ['Python ETL', 'SQL', 'PostgreSQL', 'MongoDB', 'InfluxDB', 'Power BI'],
    flowDescription:
      'Extrae, limpia y modela información multifuente para alimentar dashboards ejecutivos e indicadores de gestión.',
    x: 20,
    y: 78,
    accent: '#10B981',
    icon: Database,
  },
  {
    id: 'enterprise',
    code: 'NODE_04 // SYS',
    title: 'Sistemas Empresariales',
    shortLabel: 'Sistemas',
    role: 'Aplicaciones Web, Integraciones Backend, Control de Roles & Docker',
    protocols: ['JavaScript', 'HTML/CSS', 'APIs Backend', 'Docker', 'RBAC'],
    flowDescription:
      'Materializa la operación en aplicaciones empresariales modulares, seguras y desplegables en contenedores.',
    x: 80,
    y: 78,
    accent: '#A855F7',
    icon: Server,
  },
];

const specialtyBadges = [
  { label: 'Inteligencia Artificial & Agentes', tech: 'APIs · LLMs · Flujos IA' },
  { label: 'Automatización e Integración', tech: 'n8n · Power Automate · Node-RED · APIs' },
  { label: 'Ingeniería de Datos & ETL', tech: 'Python · SQL · PostgreSQL · MongoDB' },
  { label: 'Business Intelligence & Software', tech: 'Power BI · JS · Docker' },
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedNodeId, setSelectedNodeId] = useState<string>('ai');
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;
    const interval = setInterval(() => {
      setSelectedNodeId((prev) => {
        const currentIndex = architectureNodes.findIndex((n) => n.id === prev);
        const nextIndex = (currentIndex + 1) % architectureNodes.length;
        return architectureNodes[nextIndex].id;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion, isPaused]);

  const activeNode =
    architectureNodes.find((n) => n.id === selectedNodeId) ?? architectureNodes[0];

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 flex items-center overflow-hidden bg-obsidian bg-tech-grid"
      aria-label="Presentación principal de Daniel Lenis"
    >
      {/* Ambient Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 bg-radial-spotlight"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[36rem] h-[36rem] rounded-full bg-brand-blue/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 w-[28rem] h-[28rem] rounded-full bg-brand-cyan/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Identity & Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top Telemetry / Role Badge */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-obsidian-card/90 border border-slate-700/80 shadow-sm"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-brand-cyan">
                <Sparkles className="w-3.5 h-3.5" />
                {siteConfig.author.role.toUpperCase()}
              </span>
              <span className="h-3.5 w-[1px] bg-slate-700" aria-hidden="true" />
              <span className="font-mono text-xs text-slate-300">
                INGENIERO DE SISTEMAS
              </span>
            </motion.div>

            {/* Name & Value Proposition Headline */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm uppercase tracking-[0.2em] text-slate-400">
                  PORTAFOLIO DE ARQUITECTURA & SOLUCIONES //
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-slate-50 leading-[1.06]">
                <span className="block text-slate-100">{siteConfig.author.name}</span>
                <span className="mt-2 block bg-gradient-to-r from-brand-cyan via-brand-blue to-slate-100 bg-clip-text text-transparent">
                  Transformo procesos complejos en soluciones inteligentes.
                </span>
              </h1>
            </motion.div>

            {/* Professional Description */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Ingeniero de Sistemas especializado en el desarrollo de soluciones
              empresariales mediante{' '}
              <strong className="text-slate-100 font-medium">
                inteligencia artificial
              </strong>
              ,{' '}
              <strong className="text-slate-100 font-medium">
                automatización de procesos
              </strong>
              ,{' '}
              <strong className="text-slate-100 font-medium">
                integración de sistemas
              </strong>{' '}
              e{' '}
              <strong className="text-slate-100 font-medium">
                ingeniería de datos
              </strong>
              . Combino tecnologías de datos, orquestación y desarrollo de
              aplicaciones para convertir necesidades de negocio en arquitecturas
              tecnológicas funcionales.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              <Link
                href="#proyectos"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blueGlow text-slate-50 font-medium text-base shadow-glow-blue hover:shadow-glow-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <span>Explorar Proyectos Reales</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-obsidian-card hover:bg-obsidian-elevated text-slate-100 border border-slate-700/80 hover:border-brand-cyan/50 font-medium text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <Terminal className="w-4 h-4 text-brand-cyan" />
                <span>Contactar / Consultoría</span>
              </Link>
            </motion.div>

            {/* Visual Indicator of Specialties */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="pt-4 border-t border-slate-800/90"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  PILARES DE ESPECIALIZACIÓN TÉCNICA
                </span>
                <span className="font-mono text-xs text-brand-cyan">
                  4 DOMINIOS CONVERGENTES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specialtyBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-obsidian-surface/90 border border-slate-800/90 hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-slate-200">
                        {badge.label}
                      </p>
                      <p className="font-mono text-xs text-slate-400 mt-0.5">
                        {badge.tech}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Technological Architecture Node Graph */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="tech-panel rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-panel">
              {/* Top Blueprint Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-cyan" />
                  <span className="font-mono text-xs font-semibold tracking-wider text-slate-200 uppercase">
                    ARQUITECTURA DE INTEGRACIÓN EN VIVO
                  </span>
                </div>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand-blue/15 text-brand-cyan border border-brand-blue/30">
                  INTERACTIVO
                </span>
              </div>

              {/* Abstract Interactive Node Canvas */}
              <div
                className="relative w-full aspect-[4/3] rounded-xl bg-obsidian-deep/90 border border-slate-800/90 p-4 overflow-hidden bg-tech-dots"
                role="region"
                aria-label="Diagrama interactivo de arquitectura tecnológica que conecta Inteligencia Artificial, Automatización, Datos y Sistemas Empresariales"
              >
                {/* SVG Connections & Animated Data Packets */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="lineGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="lineGradMuted" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#334155" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#1E293B" stopOpacity="0.45" />
                    </linearGradient>
                  </defs>

                  {/* Outer Perimeter Ring */}
                  <line x1="20" y1="22" x2="80" y2="22" stroke="url(#lineGradMuted)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <line x1="80" y1="22" x2="80" y2="78" stroke="url(#lineGradMuted)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <line x1="80" y1="78" x2="20" y2="78" stroke="url(#lineGradMuted)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                  <line x1="20" y1="78" x2="20" y2="22" stroke="url(#lineGradMuted)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />

                  {/* Connections from Center Hub (50,50) to each Node */}
                  {architectureNodes.map((node) => {
                    const isSelected = node.id === selectedNodeId;
                    return (
                      <g key={`conn-${node.id}`}>
                        <line
                          x1="50"
                          y1="50"
                          x2={node.x}
                          y2={node.y}
                          stroke={isSelected ? 'url(#lineGradActive)' : 'url(#lineGradMuted)'}
                          strokeWidth={isSelected ? '0.9' : '0.45'}
                        />
                        {!prefersReducedMotion && isSelected && (
                          <circle r="1.3" fill="#22D3EE">
                            <animateMotion
                              dur="2.2s"
                              repeatCount="indefinite"
                              path={`M 50 50 L ${node.x} ${node.y} L 50 50`}
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Central Orchestration Core */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-obsidian-card/95 border-2 border-brand-cyan/60 shadow-glow-cyan text-center p-2"
                >
                  <Layers className="w-5 h-5 text-brand-cyan mb-1" />
                  <span className="font-mono text-xs font-bold text-slate-100 leading-tight">
                    CORE HUB
                  </span>
                  <span className="font-mono text-xs text-brand-cyan leading-tight">
                    API · FLUJO · DATO
                  </span>
                </div>

                {/* 4 Interactive Corner Domain Nodes */}
                {architectureNodes.map((node) => {
                  const Icon = node.icon;
                  const isSelected = node.id === selectedNodeId;
                  const posClasses =
                    node.id === 'ai'
                      ? 'top-3 left-3'
                      : node.id === 'automation'
                      ? 'top-3 right-3'
                      : node.id === 'data'
                      ? 'bottom-3 left-3'
                      : 'bottom-3 right-3';

                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => {
                        setSelectedNodeId(node.id);
                        setIsPaused(true);
                      }}
                      className={cn(
                        'absolute z-20 flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan max-w-[44%]',
                        posClasses,
                        isSelected
                          ? 'bg-obsidian-elevated border-brand-cyan shadow-glow-cyan scale-[1.03]'
                          : 'bg-obsidian-card/90 border-slate-700/80 hover:border-slate-500 opacity-85 hover:opacity-100'
                      )}
                      aria-pressed={isSelected}
                      aria-label={`Inspeccionar nodo de arquitectura: ${node.title}`}
                    >
                      <div
                        className={cn(
                          'p-2 rounded-lg shrink-0',
                          isSelected
                            ? 'bg-brand-cyan/20 text-brand-cyan'
                            : 'bg-slate-800 text-slate-300'
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-xs text-brand-cyan truncate">
                          {node.id.toUpperCase()}
                        </p>
                        <p className="font-display text-xs sm:text-sm font-semibold text-slate-100 truncate">
                          {node.shortLabel}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Node Selector Tabs for Quick Inspection */}
              <div className="grid grid-cols-4 gap-1.5 mt-4" role="tablist" aria-label="Capas de arquitectura">
                {architectureNodes.map((node) => {
                  const isSelected = node.id === selectedNodeId;
                  return (
                    <button
                      key={`tab-${node.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => {
                        setSelectedNodeId(node.id);
                        setIsPaused(true);
                      }}
                      className={cn(
                        'py-1.5 px-2 rounded-lg font-mono text-xs transition-all truncate border',
                        isSelected
                          ? 'bg-brand-blue/20 text-brand-cyan border-brand-blue/50 font-semibold'
                          : 'bg-obsidian-surface text-slate-400 border-slate-800 hover:text-slate-200'
                      )}
                    >
                      {node.shortLabel}
                    </button>
                  );
                })}
              </div>

              {/* Live Telemetry Inspector Details */}
              <div
                className="mt-4 p-4 rounded-xl bg-obsidian-surface/95 border border-slate-800/90 space-y-3"
                aria-live="polite"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-brand-cyan font-semibold">
                    {activeNode.code}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    CAPA ACTIVA
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-base font-bold text-slate-100">
                    {activeNode.title}
                  </h2>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {activeNode.flowDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeNode.protocols.map((proto) => (
                    <span
                      key={proto}
                      className="px-2 py-0.5 rounded bg-obsidian-card border border-slate-700/80 font-mono text-xs text-slate-200"
                    >
                      {proto}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
