'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass, Cpu, GitBranch, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { aboutContent } from '@/content/portfolio-data';

const principleIcons = [Compass, GitBranch, Cpu, ShieldCheck];

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="sobre-mi"
      className="relative py-24 lg:py-32 bg-obsidian-surface border-t border-slate-800/80"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          tag={aboutContent.badge}
          title={aboutContent.title}
          description={aboutContent.lead}
        />

        {/* Editorial Narrative + Engineering Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative Column */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="tech-panel rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="font-mono text-xs text-brand-cyan uppercase tracking-wider">
                  ENFOQUE DE INGENIERÍA DE SISTEMAS
                </span>
                <span className="font-mono text-xs text-slate-400">
                  NEGOCIO ↔ TECNOLOGÍA
                </span>
              </div>

              {aboutContent.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-slate-300 text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-obsidian/70 border border-slate-800">
                  <p className="font-mono text-xs text-brand-cyan">VISIÓN</p>
                  <p className="font-display text-sm font-semibold text-slate-100 mt-1">
                    Sistemas Integrados End-to-End
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-obsidian/70 border border-slate-800">
                  <p className="font-mono text-xs text-brand-blue">EJECUCIÓN</p>
                  <p className="font-display text-sm font-semibold text-slate-100 mt-1">
                    Automatización + IA + Datos
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-obsidian/70 border border-slate-800 col-span-2 sm:col-span-1">
                  <p className="font-mono text-xs text-emerald-400">PROPÓSITO</p>
                  <p className="font-display text-sm font-semibold text-slate-100 mt-1">
                    Soluciones Empresariales Reales
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Principles Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutContent.engineeringPrinciples.map((principle, idx) => {
              const Icon = principleIcons[idx % principleIcons.length];
              return (
                <motion.div
                  key={principle.code}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="tech-panel-interactive rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-brand-cyan font-semibold">
                        {principle.code}
                      </span>
                      <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/25 text-brand-cyan">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-100 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Methodology Pipeline */}
        <div className="mt-14 pt-12 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
              METODOLOGÍA DE TRANSFORMACIÓN TECNOLÓGICA
            </h3>
            <span className="font-mono text-xs text-slate-400">
              DEL PROBLEMA OPERATIVO AL SISTEMA EN PRODUCCIÓN
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {aboutContent.methodologySteps.map((item, idx) => (
              <div
                key={item.step}
                className="relative p-5 rounded-xl bg-obsidian/80 border border-slate-800/90 hover:border-brand-blue/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-brand-blue/15 text-brand-cyan border border-brand-blue/30">
                    FASE {item.step}
                  </span>
                  {idx < aboutContent.methodologySteps.length - 1 && (
                    <ArrowRight className="hidden md:block w-4 h-4 text-slate-600" />
                  )}
                </div>
                <h4 className="font-display text-base font-bold text-slate-100">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
