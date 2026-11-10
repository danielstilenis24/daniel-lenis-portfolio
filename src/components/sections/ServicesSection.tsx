'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Workflow,
  Bot,
  Link2,
  BarChart3,
  Database,
  Code2,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { consultingServices } from '@/content/portfolio-data';

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'srv-automation': Workflow,
  'srv-ai-agents': Bot,
  'srv-integration': Link2,
  'srv-bi': BarChart3,
  'srv-data-eng': Database,
  'srv-enterprise-apps': Code2,
};

export function ServicesSection() {
  const prefersReducedMotion = useReducedMotion();

  const handleSelectServiceForContact = (serviceTitle: string) => {
    window.dispatchEvent(
      new CustomEvent('select-consulting-service', { detail: serviceTitle })
    );
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="servicios"
      className="relative py-24 lg:py-32 bg-obsidian bg-tech-grid border-t border-slate-800/80"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="06"
          tag="SOLUCIONES & SERVICIOS DE CONSULTORÍA"
          title="Arquitectura e ingeniería aplicada a los retos de tu organización."
          description="Acompaño a empresas y equipos técnicos desde el diagnóstico del proceso hasta el diseño de arquitectura y puesta en producción de soluciones de automatización, inteligencia artificial, integración y analítica de datos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultingServices.map((service, idx) => {
            const Icon = serviceIcons[service.id] ?? Workflow;

            return (
              <motion.div
                key={service.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="tech-panel-interactive rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-brand-blue/15 text-brand-cyan border border-brand-blue/30">
                      {service.code}
                    </span>
                    <div className="p-2.5 rounded-xl bg-obsidian-surface border border-slate-800 text-brand-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-50">
                      {service.title}
                    </h3>
                    <p className="font-mono text-xs text-brand-cyan mt-1">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Business Problem Solved */}
                  <div className="p-3.5 rounded-xl bg-obsidian-deep/80 border border-slate-800/90">
                    <span className="font-mono text-xs text-slate-400 block">
                      PROBLEMA QUE RESUELVE:
                    </span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {service.businessProblemSolved}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-1">
                    <span className="font-mono text-xs text-slate-400 block uppercase">
                      Alcance & Entregables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((deliv) => (
                        <li
                          key={deliv}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <Check className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Tech & Consultative CTA */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-obsidian-surface border border-slate-800 font-mono text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectServiceForContact(service.title)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-obsidian-surface hover:bg-brand-blue text-slate-200 hover:text-slate-50 border border-slate-700/80 hover:border-brand-blue font-mono text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    <span>CONSULTAR SOBRE ESTA SOLUCIÓN</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
