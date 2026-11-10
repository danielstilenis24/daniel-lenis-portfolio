'use client';

import React, { useState, useEffect } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Briefcase,
  Send,
  AlertCircle,
  CheckCircle2,
  Settings,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { consultingServices } from '@/content/portfolio-data';
import { cn } from '@/lib/utils';

type FormStatus = 'idle' | 'submitting' | 'success' | 'config_pending' | 'error';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [inquiryType, setInquiryType] = useState('Consultoría / Proyecto Comercial');
  const [serviceInterest, setServiceInterest] = useState(
    consultingServices[0]?.title ?? 'Automatización de Procesos Empresariales'
  );
  const [message, setMessage] = useState('');
  const [websiteHp, setWebsiteHp] = useState(''); // Honeypot
  const [formLoadedAt, setFormLoadedAt] = useState<number>(Date.now());

  const [status, setStatus] = useState<FormStatus>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [missingConfigList, setMissingConfigList] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setFormLoadedAt(Date.now());

    const handleServiceSelected = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail) {
        setInquiryType('Consultoría / Proyecto Comercial');
        setServiceInterest(customEvent.detail);
      }
    };

    window.addEventListener('select-consulting-service', handleServiceSelected);
    return () => {
      window.removeEventListener('select-consulting-service', handleServiceSelected);
    };
  }, []);

  const validateClient = () => {
    const errors: Record<string, string> = {};
    if (name.trim().length < 2) {
      errors.name = 'Ingresa tu nombre completo (mínimo 2 caracteres).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Ingresa un correo electrónico válido.';
    }
    if (message.trim().length < 20) {
      errors.message =
        'Por favor detalla tu consulta o requerimiento con al menos 20 caracteres.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerMessage('');
    setMissingConfigList([]);

    if (!validateClient()) {
      setStatus('error');
      setServerMessage('Por favor corrige los campos señalados antes de enviar.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          organization,
          inquiryType,
          serviceInterest,
          message,
          website_hp: websiteHp,
          formLoadedAt,
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus('success');
        setServerMessage(data.message);
        setName('');
        setEmail('');
        setOrganization('');
        setMessage('');
        setFieldErrors({});
        return;
      }

      if (response.status === 503 && data.code === 'INTEGRATION_NOT_CONFIGURED') {
        setStatus('config_pending');
        setServerMessage(data.message);
        setMissingConfigList(data.missingConfig ?? []);
        return;
      }

      if (data.fieldErrors) {
        setFieldErrors(data.fieldErrors);
      }
      setStatus('error');
      setServerMessage(
        data.message || 'No fue posible procesar el envío en este momento.'
      );
    } catch {
      setStatus('error');
      setServerMessage(
        'Error de red al conectar con el servidor de validación.'
      );
    }
  };

  const mailtoHref = `mailto:${siteConfig.contact.email.value}?subject=${encodeURIComponent(
    `[${inquiryType}] Contacto desde Portafolio — ${name || 'Visitante'}`
  )}&body=${encodeURIComponent(
    `Nombre: ${name}\nCorreo: ${email}\nOrganización: ${organization}\nInterés: ${serviceInterest}\n\nMensaje:\n${message}`
  )}`;

  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-32 bg-obsidian-surface border-t border-slate-800/80"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="07"
          tag="CONTACTO DIRECTO & CONSULTORÍA"
          title="Conversemos sobre tu próximo proyecto, integración o posición estratégica."
          description="Disponible para oportunidades laborales nacionales e internacionales, así como proyectos de consultoría en automatización de procesos, agentes de IA, integración de sistemas e ingeniería de datos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 5 Columns: Professional Channels & Commercial Option */}
          <div className="lg:col-span-5 space-y-5">
            {/* Commercial / Executive Channel Card */}
            <div className="tech-panel rounded-2xl p-6 space-y-4 border-brand-blue/35">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-brand-cyan">
                  <Briefcase className="w-4 h-4" />
                  OPCIÓN DE CONTACTO COMERCIAL & RECLUTAMIENTO
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-50">
                {siteConfig.contact.commercialInquiries.label}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {siteConfig.contact.commercialInquiries.channelNote}
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setInquiryType('Consultoría / Proyecto Comercial')}
                  className={cn(
                    'p-3 rounded-xl border text-left font-mono text-xs transition-all',
                    inquiryType === 'Consultoría / Proyecto Comercial'
                      ? 'bg-brand-blue/20 border-brand-cyan text-slate-100 font-semibold'
                      : 'bg-obsidian/80 border-slate-800 text-slate-400 hover:text-slate-200'
                  )}
                >
                  • Contratar Consultoría / Solución
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('Oportunidad Laboral / Reclutamiento')}
                  className={cn(
                    'p-3 rounded-xl border text-left font-mono text-xs transition-all',
                    inquiryType === 'Oportunidad Laboral / Reclutamiento'
                      ? 'bg-brand-blue/20 border-brand-cyan text-slate-100 font-semibold'
                      : 'bg-obsidian/80 border-slate-800 text-slate-400 hover:text-slate-200'
                  )}
                >
                  • Oportunidad Laboral / Rol Tech
                </button>
              </div>
            </div>

            {/* Direct Channels (LinkedIn, GitHub, Email) with Explicit Placeholder Transparency */}
            <div className="tech-panel rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
                  CANALES PROFESIONALES DIRECTOS
                </span>
                <span className="font-mono text-xs text-amber-300">
                  CONFIGURABLES EN site.ts
                </span>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-obsidian/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-brand-cyan">
                    <Mail className="w-4 h-4" />
                    CORREO PROFESIONAL
                  </span>
                  {siteConfig.contact.email.isPlaceholder && (
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-amber-300">
                      Placeholder Explícito
                    </span>
                  )}
                </div>
                <p className="font-display text-base font-bold text-slate-100">
                  {siteConfig.contact.email.value}
                </p>
                <p className="font-mono text-xs text-slate-400">
                  {siteConfig.contact.email.configNote}
                </p>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-xl bg-obsidian/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-brand-cyan">
                    <Linkedin className="w-4 h-4" />
                    LINKEDIN PROFESIONAL
                  </span>
                  {siteConfig.contact.linkedin.isPlaceholder && (
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-amber-300">
                      Placeholder Explícito
                    </span>
                  )}
                </div>
                <p className="font-display text-sm font-bold text-slate-100">
                  {siteConfig.contact.linkedin.handle}
                </p>
                <p className="font-mono text-xs text-slate-400">
                  {siteConfig.contact.linkedin.configNote}
                </p>
              </div>

              {/* GitHub */}
              <div className="p-4 rounded-xl bg-obsidian/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-brand-cyan">
                    <Github className="w-4 h-4" />
                    GITHUB & REPOSITORIOS
                  </span>
                  {siteConfig.contact.github.isPlaceholder && (
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 font-mono text-xs text-amber-300">
                      Placeholder Explícito
                    </span>
                  )}
                </div>
                <p className="font-display text-sm font-bold text-slate-100">
                  {siteConfig.contact.github.handle}
                </p>
                <p className="font-mono text-xs text-slate-400">
                  {siteConfig.contact.github.configNote}
                </p>
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Validated Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="tech-panel rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-panel"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-50">
                    Formulario de Contacto Técnico y Comercial
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Validación en cliente y servidor con protección anti-spam e integración lista para Webhook (n8n) o API de correo.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  ANTI-SPAM ACTIVO
                </span>
              </div>

              {/* Honeypot invisible field for bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website_hp">No completar este campo</label>
                <input
                  id="website_hp"
                  name="website_hp"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={websiteHp}
                  onChange={(e) => setWebsiteHp(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Nombre Completo <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (fieldErrors.name) {
                        setFieldErrors((prev) => ({ ...prev, name: '' }));
                      }
                    }}
                    placeholder="Ej. Ana Martínez"
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? 'error-name' : undefined}
                    className={cn(
                      'w-full px-4 py-3 rounded-xl bg-obsidian-deep border text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all',
                      fieldErrors.name ? 'border-rose-500' : 'border-slate-800'
                    )}
                  />
                  {fieldErrors.name && (
                    <p id="error-name" className="mt-1.5 text-xs text-rose-400 font-mono">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Correo Electrónico <span className="text-brand-cyan">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (fieldErrors.email) {
                        setFieldErrors((prev) => ({ ...prev, email: '' }));
                      }
                    }}
                    placeholder="nombre@empresa.com"
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? 'error-email' : undefined}
                    className={cn(
                      'w-full px-4 py-3 rounded-xl bg-obsidian-deep border text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all',
                      fieldErrors.email ? 'border-rose-500' : 'border-slate-800'
                    )}
                  />
                  {fieldErrors.email && (
                    <p id="error-email" className="mt-1.5 text-xs text-rose-400 font-mono">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Organization */}
                <div>
                  <label
                    htmlFor="contact-org"
                    className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Empresa / Organización (Opcional)
                  </label>
                  <input
                    id="contact-org"
                    name="organization"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Nombre de tu organización"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-deep border border-slate-800 text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="contact-type"
                    className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Tipo de Contacto <span className="text-brand-cyan">*</span>
                  </label>
                  <select
                    id="contact-type"
                    name="inquiryType"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-deep border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                  >
                    <option value="Consultoría / Proyecto Comercial">
                      Consultoría / Proyecto Comercial
                    </option>
                    <option value="Oportunidad Laboral / Reclutamiento">
                      Oportunidad Laboral / Reclutamiento
                    </option>
                    <option value="Arquitectura de IA, Datos o Automatización">
                      Arquitectura de IA, Datos o Automatización
                    </option>
                    <option value="Consulta General">Consulta General</option>
                  </select>
                </div>
              </div>

              {/* Service Selector */}
              <div>
                <label
                  htmlFor="contact-service"
                  className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                >
                  Especialidad o Servicio Principal de Interés
                </label>
                <select
                  id="contact-service"
                  name="serviceInterest"
                  value={serviceInterest}
                  onChange={(e) => setServiceInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-deep border border-slate-800 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
                >
                  {consultingServices.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="Rol Completo: AI Automation & Data Engineer">
                    Rol Completo: AI Automation & Data Engineer
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                >
                  Descripción del Proyecto, Proceso o Propuesta{' '}
                  <span className="text-brand-cyan">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (fieldErrors.message) {
                      setFieldErrors((prev) => ({ ...prev, message: '' }));
                    }
                  }}
                  placeholder="Cuéntame sobre el proceso que deseas automatizar, la integración o modelo de datos que necesitas, o los detalles de la posición..."
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? 'error-message' : undefined}
                  className={cn(
                    'w-full px-4 py-3 rounded-xl bg-obsidian-deep border text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all',
                    fieldErrors.message ? 'border-rose-500' : 'border-slate-800'
                  )}
                />
                {fieldErrors.message && (
                  <p id="error-message" className="mt-1.5 text-xs text-rose-400 font-mono">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {/* Status Feedback Banner */}
              {status === 'success' && (
                <div
                  role="status"
                  className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-bold">Mensaje despachado correctamente</p>
                    <p className="text-xs text-emerald-300/90 mt-1">{serverMessage}</p>
                  </div>
                </div>
              )}

              {status === 'config_pending' && (
                <div
                  role="alert"
                  className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-200 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-display text-sm font-bold text-amber-300">
                        Validación Exitosa · Integración de Despacho Pendiente de Configurar
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {serverMessage}
                      </p>
                    </div>
                  </div>

                  {missingConfigList.length > 0 && (
                    <ul className="pl-8 space-y-1 font-mono text-xs text-amber-300/90 list-disc">
                      {missingConfigList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  <div className="pt-2 pl-8">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 font-mono text-xs text-amber-200 transition-colors"
                    >
                      <span>Abrir cliente de correo con este mensaje pre-cargado</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {status === 'error' && serverMessage && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-200 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-bold">Revisión requerida</p>
                    <p className="text-xs text-rose-300 mt-0.5">{serverMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="font-mono text-xs text-slate-400">
                  * No se simulan envíos falsos. Conectado a `/api/contact`.
                </p>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blueGlow disabled:opacity-60 text-slate-50 font-medium text-sm shadow-glow-blue transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === 'submitting'
                      ? 'Validando y Procesando...'
                      : 'Enviar Mensaje'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
