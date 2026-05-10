'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

type Fields = {
  nombre: string;
  email: string;
  empresa: string;
  industria: string;
  cantidad: string;
  desafio: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  nombre: '',
  email: '',
  empresa: '',
  industria: '',
  cantidad: '',
  desafio: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INDUSTRIAS = [
  'Inmobiliaria',
  'Seguros y Finanzas',
  'Atención al Cliente',
  'Recursos Humanos',
  'Otra',
];

const CANTIDADES = ['1-10', '10-50', '50-200', '+200'];

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.nombre.trim()) e.nombre = 'Campo requerido';
  if (!f.email.trim()) e.email = 'Campo requerido';
  else if (!EMAIL_RE.test(f.email)) e.email = 'Email inválido';
  if (!f.empresa.trim()) e.empresa = 'Campo requerido';
  if (!f.industria) e.industria = 'Seleccioná una opción';
  if (!f.cantidad) e.cantidad = 'Seleccioná una opción';
  return e;
}

const inputBase =
  'w-full px-4 py-3 rounded-lg bg-mento-surface border border-white/10 text-mento-text placeholder:text-mento-muted/50 focus:outline-none focus:border-mento-cta/60 transition-colors text-body';

const labelBase = 'block text-caption font-semibold text-mento-muted uppercase tracking-wide mb-1.5';

export default function DemoPage() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async () => {
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      setSubmitted(true);
    } catch {
      setErrors({ email: 'Hubo un error. Escribinos a hola@mento.lat' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-mento-bg flex flex-col">
      <Header />

      <main className="flex-1 py-mento-4xl">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-mento-2xl items-start">

            {/* ── Left column ── */}
            <div className="flex flex-col gap-mento-xl lg:sticky lg:top-28">
              <div>
                <p className="text-caption font-semibold text-mento-muted uppercase tracking-widest mb-mento-sm">
                  Demo institucional
                </p>
                <h1 className="text-h1 font-extrabold text-mento-text leading-tight mb-mento-md">
                  Demo institucional de 30 minutos
                </h1>
                <p className="text-body-lg text-mento-muted">
                  Te mostramos Mento con un escenario de tu industria. Sin PowerPoint. Sin pitch genérico.
                </p>
              </div>

              <div className="flex flex-col gap-mento-md">
                <p className="text-caption font-bold text-mento-text uppercase tracking-widest">
                  Lo que pasa en la demo
                </p>
                {[
                  'Ves el roleplay funcionando en tiempo real',
                  'Te mostramos el panel de gestión para tu equipo',
                  'Definimos si hay fit y cuál sería el alcance del piloto',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-mento-sm">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-mento-cta/20 border border-mento-cta/40 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-mento-cta" />
                    </span>
                    <p className="text-body text-mento-muted">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-mento-sm p-mento-lg bg-mento-surface border border-white/8 rounded-mento-lg">
                {[
                  'Respuesta en menos de 24 hs hábiles',
                  'Sin compromiso de compra',
                  'El equipo de Mento lo conduce, no un bot',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-mento-sm">
                    <CheckCircle2 size={16} className="text-mento-cta flex-shrink-0" strokeWidth={2} />
                    <p className="text-body text-mento-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right column ── */}
            <div className="bg-mento-surface border border-white/8 rounded-mento-xl p-mento-2xl">
              {submitted ? (
                <SuccessState />
              ) : (
                <div className="flex flex-col gap-mento-lg">
                  <h2 className="text-h3 font-bold text-mento-text">Completá tus datos</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-mento-md">
                    <Field label="Nombre completo" error={errors.nombre}>
                      <input
                        type="text"
                        placeholder="Juan García"
                        className={inputBase}
                        value={fields.nombre}
                        onChange={set('nombre')}
                      />
                    </Field>

                    <Field label="Email corporativo" error={errors.email}>
                      <input
                        type="email"
                        placeholder="juan@empresa.com"
                        className={inputBase}
                        value={fields.email}
                        onChange={set('email')}
                      />
                    </Field>
                  </div>

                  <Field label="Empresa" error={errors.empresa}>
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className={inputBase}
                      value={fields.empresa}
                      onChange={set('empresa')}
                    />
                  </Field>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-mento-md">
                    <Field label="Industria" error={errors.industria}>
                      <select className={inputBase} value={fields.industria} onChange={set('industria')}>
                        <option value="">Seleccioná</option>
                        {INDUSTRIAS.map((i) => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Personas a capacitar" error={errors.cantidad}>
                      <select className={inputBase} value={fields.cantidad} onChange={set('cantidad')}>
                        <option value="">Seleccioná</option>
                        {CANTIDADES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Principal desafío de tu equipo" hint="Opcional">
                    <textarea
                      rows={3}
                      placeholder="Ej: los vendedores nuevos tardan 3 meses en rendir al nivel del equipo"
                      className={`${inputBase} resize-none`}
                      value={fields.desafio}
                      onChange={set('desafio')}
                    />
                  </Field>

                  <div className="flex flex-col items-stretch gap-mento-sm pt-mento-sm">
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full px-mento-xl py-mento-md bg-mento-cta hover:bg-mento-cta-hover disabled:opacity-60 text-white text-body-lg font-semibold rounded-mento-full transition-all duration-200 hover:shadow-[0_16px_40px_rgba(197,87,122,0.4)] active:scale-[0.98]"
                    >
                      {loading ? 'Enviando...' : 'Quiero la demo →'}
                    </button>
                    <p className="text-center text-caption text-mento-muted/50">
                      Tu información es confidencial. No compartimos datos con terceros.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-baseline mb-1.5">
        <label className={labelBase}>{label}</label>
        {hint && <span className="text-[10px] text-mento-muted/50">{hint}</span>}
      </div>
      {children}
      {error && <p className="mt-1 text-[11px] text-mento-cta">{error}</p>}
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-center text-center gap-mento-lg py-mento-xl">
      <div className="w-16 h-16 rounded-full bg-mento-cta/15 border border-mento-cta/30 flex items-center justify-center">
        <CheckCircle2 size={32} className="text-mento-cta" strokeWidth={1.75} />
      </div>

      <div>
        <h2 className="text-h2 font-extrabold text-mento-text mb-mento-md">
          Listo. Te contactamos en menos de 24 hs.
        </h2>
        <p className="text-body text-mento-muted">
          Mientras tanto, si querés entender el método en profundidad:
        </p>
      </div>

      <div className="flex flex-col gap-mento-sm w-full max-w-sm">
        <Link
          href="/metodo"
          className="flex items-center justify-between px-mento-lg py-mento-md bg-mento-elevated border border-white/8 rounded-mento-lg text-body font-medium text-mento-text hover:border-white/20 transition-colors"
        >
          <span>/metodo</span>
          <span className="text-mento-muted text-caption">Leer sobre el Ciclo de Kolb aplicado →</span>
        </Link>
        <Link
          href="/ciencia"
          className="flex items-center justify-between px-mento-lg py-mento-md bg-mento-elevated border border-white/8 rounded-mento-lg text-body font-medium text-mento-text hover:border-white/20 transition-colors"
        >
          <span>/ciencia</span>
          <span className="text-mento-muted text-caption">Ver el análisis de tendencias 2025-2026 →</span>
        </Link>
      </div>
    </div>
  );
}
