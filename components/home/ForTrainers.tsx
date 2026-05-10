import React from 'react';
import Link from 'next/link';
import { BarChart2, FileText, Users } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const features = [
  {
    Icon: BarChart2,
    title: 'Dashboard de desempeño por competencias',
    description:
      'No ves quién completó un módulo. Ves quién demostró la competencia y quién necesita más práctica. La diferencia importa.',
  },
  {
    Icon: FileText,
    title: 'Reportes listos para presentar',
    description:
      'Exportá el progreso de tu equipo en formato listo para una reunión de directorio o una auditoría de RRHH. Sin trabajo manual.',
  },
  {
    Icon: Users,
    title: 'Gestión por equipos, roles y niveles',
    description:
      'Asignás escenarios por nivel de experiencia, área o cargo. El nuevo ingreso no hace el mismo ejercicio que el senior.',
  },
];

export const ForLeadersSection = () => {
  return (
    <Section variant="default">
      <Container>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-mento-2xl">

          {/* ── Copy column ── */}
          <div className="lg:w-1/2 flex flex-col gap-mento-lg">
            <div>
              <p className="text-caption font-semibold text-mento-muted uppercase tracking-widest mb-mento-sm">
                Para quienes deciden
              </p>
              <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
                Vos administrás el entrenamiento.
                <br />
                <span className="text-mento-muted font-medium">La IA hace el trabajo.</span>
              </h2>
              <p className="text-body-lg text-mento-muted">
                Mento no requiere que tengas un capacitador disponible 24/7. El sistema entrena, evalúa y reporta. Vos ves los resultados.
              </p>
            </div>

            <ul className="flex flex-col gap-mento-md">
              {features.map(({ Icon, title, description }) => (
                <li key={title} className="flex items-start gap-mento-md">
                  <div className="p-2 bg-mento-primary/15 rounded-mento-sm mt-1 flex-shrink-0">
                    <Icon size={20} className="text-mento-cta" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="text-body font-bold text-mento-text mb-0.5">{title}</h4>
                    <p className="text-caption text-mento-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* ROI card */}
            <div className="p-mento-lg bg-mento-surface border border-[#7E3A5F]/40 rounded-mento-lg">
              <h4 className="text-body font-bold text-mento-text mb-mento-xs">
                ¿Cuánto cuesta un deal perdido por falta de práctica?
              </h4>
              <p className="text-caption text-mento-muted">
                Un vendedor nuevo que improvisa en sus primeras 10 conversaciones no es solo un problema de performance. Es costo directo. Mento es el entrenador que está disponible antes de cada reunión real.
              </p>
            </div>

            <Link
              href="/capacitadores"
              className="text-body font-medium text-mento-muted hover:text-mento-text transition-colors self-start"
            >
              Ver herramientas para empresas →
            </Link>
          </div>

          {/* ── Mock dashboard ── */}
          <div className="lg:w-1/2">
            <div className="relative p-mento-md bg-mento-surface border border-white/10 rounded-mento-lg shadow-mento-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-mento-cta" />
              <div className="flex justify-between items-center mb-mento-lg">
                <div className="h-4 w-32 bg-white/10 rounded" />
                <div className="h-6 w-6 rounded-full bg-white/10" />
              </div>
              <div className="grid grid-cols-3 gap-mento-md mb-mento-xl">
                {[75, 52, 88].map((pct) => (
                  <div key={pct} className="h-16 bg-white/5 rounded-mento-md p-mento-sm flex flex-col justify-end gap-1">
                    <div className="h-1.5 w-full bg-white/8 rounded" />
                    <div className="h-3 rounded" style={{ width: `${pct}%`, background: 'rgba(197,87,122,0.45)' }} />
                  </div>
                ))}
              </div>
              <div className="space-y-mento-md">
                {['Demostró competencia', 'En progreso', 'Necesita práctica', 'Sin iniciar'].map((label, i) => (
                  <div key={label} className="flex items-center gap-mento-md">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex-shrink-0" />
                    <div className="flex-1 h-2.5 bg-white/8 rounded" />
                    <span className="text-[10px] text-mento-muted/60 w-24 text-right">{label}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-mento-cta/5 pointer-events-none" />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
