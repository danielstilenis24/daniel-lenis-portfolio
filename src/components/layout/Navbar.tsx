'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal, ArrowUpRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Inicio', href: '/#inicio', id: 'inicio' },
  { label: 'Sobre mí', href: '/#sobre-mi', id: 'sobre-mi' },
  { label: 'Especialidades', href: '/#especialidades', id: 'especialidades' },
  { label: 'Proyectos', href: '/#proyectos', id: 'proyectos' },
  { label: 'Ecosistema', href: '/#ecosistema', id: 'ecosistema' },
  { label: 'Experiencia', href: '/#experiencia', id: 'experiencia' },
  { label: 'Consultoría', href: '/#servicios', id: 'servicios' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;

    const sectionIds = [...navItems.map((i) => i.id), 'contacto'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-25% 0px -60% 0px', threshold: 0.05 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-obsidian/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-panel'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg p-1"
          aria-label="Daniel Lenis — Ir al inicio"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-obsidian-card border border-slate-700/80 group-hover:border-brand-cyan/60 transition-colors">
            <Terminal className="w-5 h-5 text-brand-cyan" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan" />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-tight text-slate-50 group-hover:text-brand-cyan transition-colors">
              DANIEL LENIS
            </span>
            <span className="font-mono text-xs text-slate-400 tracking-wider">
              AI · AUTOMATION · DATA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegación principal"
          className="hidden xl:flex items-center gap-1 rounded-full bg-obsidian-surface/90 border border-slate-800/90 px-2 py-1.5 backdrop-blur-md"
        >
          {navItems.map((item) => {
            const isActive =
              pathname === '/'
                ? activeSection === item.id
                : item.id === 'proyectos' && pathname.startsWith('/proyectos');

            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan',
                  isActive
                    ? 'text-slate-50 bg-brand-blue/20 border border-brand-blue/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 border border-transparent'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Status */}
        <div className="hidden md:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-300">
              DISPONIBLE
            </span>
          </div>

          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue hover:bg-brand-blueGlow text-slate-50 text-sm font-medium transition-all shadow-glow-blue hover:shadow-glow-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <span>Contactar</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="xl:hidden inline-flex items-center justify-center p-2.5 rounded-lg bg-obsidian-card border border-slate-800 text-slate-200 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="xl:hidden bg-obsidian-surface/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3"
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-2">
            <div className="flex items-center justify-between px-3 py-2 mb-2 rounded-lg bg-obsidian-card border border-slate-800">
              <span className="font-mono text-xs text-slate-400">ESTADO DEL SISTEMA</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                DISPONIBLE PARA PROYECTOS
              </span>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors',
                  activeSection === item.id
                    ? 'bg-brand-blue/15 text-brand-cyan border border-brand-blue/30'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-slate-50'
                )}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-slate-500">#{item.id}</span>
              </Link>
            ))}

            <Link
              href="/#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-brand-blue text-slate-50 font-medium text-center shadow-glow-blue"
            >
              <span>Iniciar Conversación Técnica</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
