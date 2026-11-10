import React from 'react';
import Link from 'next/link';
import { Terminal, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-obsidian bg-tech-grid">
      <div className="tech-panel rounded-2xl p-8 sm:p-12 max-w-lg w-full text-center space-y-6 shadow-panel">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/15 border border-brand-blue/30 text-brand-cyan mx-auto">
          <Terminal className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <p className="font-mono text-xs text-brand-cyan tracking-widest uppercase">
            ERROR 404 // RUTA NO ENCONTRADA
          </p>
          <h1 className="font-display text-3xl font-bold text-slate-50">
            El nodo solicitado no existe en esta arquitectura
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Verifica la dirección URL o regresa al catálogo principal del portafolio de Daniel Lenis.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blueGlow text-slate-50 text-sm font-medium shadow-glow-blue transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </Link>
      </div>
    </div>
  );
}
