import React from 'react';
import Link from 'next/link';
import { Terminal, ArrowUpRight, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { getAllProjects } from '@/content/projects';

export function Footer() {
  const projects = getAllProjects('es');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-obsidian-deep border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-obsidian-card border border-slate-700">
                <Terminal className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <p className="font-display font-bold text-lg text-slate-50">
                  {siteConfig.author.name}
                </p>
                <p className="font-mono text-xs text-brand-cyan">
                  {siteConfig.author.role}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              “{siteConfig.author.headline}” — Desarrollo de soluciones empresariales
              mediante Inteligencia Artificial, Automatización de Procesos, Integración
              de Sistemas e Ingeniería de Datos.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-obsidian-card border border-slate-800 font-mono text-xs text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
                IA & Agentes
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-obsidian-card border border-slate-800 font-mono text-xs text-slate-300">
                <Layers className="w-3.5 h-3.5 text-brand-blue" />
                n8n & APIs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-obsidian-card border border-slate-800 font-mono text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Python · SQL · Power BI
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-300">
              Arquitectura del Sitio
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#sobre-mi" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Sobre mí & Enfoque
                </Link>
              </li>
              <li>
                <Link href="/#especialidades" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Áreas de Especialización
                </Link>
              </li>
              <li>
                <Link href="/#proyectos" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Proyectos Destacados
                </Link>
              </li>
              <li>
                <Link href="/#ecosistema" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Ecosistema Tecnológico
                </Link>
              </li>
              <li>
                <Link href="/#experiencia" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Trayectoria Profesional
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Servicios de Consultoría
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-slate-400 hover:text-brand-cyan transition-colors">
                  Contacto Directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Project Links */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-300">
              Casos de Estudio & Arquitecturas
            </h3>
            <ul className="space-y-2.5 text-sm">
              {projects.map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-100 transition-colors"
                  >
                    <span className="font-mono text-xs text-brand-cyan/80">
                      {project.number}.
                    </span>
                    <span className="line-clamp-1 group-hover:underline">
                      {project.title}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-brand-cyan transition-opacity shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {currentYear} {siteConfig.author.name}. Diseñado y desarrollado con arquitectura modular Next.js & TypeScript.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <span className="h-2 w-2 rounded-full bg-brand-cyan" />
              SYS.STATUS: ONLINE
            </span>
            <span>LOCALE: ES (I18N READY)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
