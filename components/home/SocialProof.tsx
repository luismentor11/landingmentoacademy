import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const credentials = [
  'Metodología basada en el Ciclo de Kolb — el estándar académico del aprendizaje experiencial en entornos corporativos',
  'Arquitectura de IA multiagente alineada con las tendencias estratégicas Gartner 2026 para sistemas de capacitación',
  'Escenarios validados con equipos comerciales reales en Mendoza, Argentina',
];

export const SocialProofSection = () => {
  return (
    <Section variant="surface">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-mento-2xl">
          <p className="text-caption font-semibold text-mento-muted uppercase tracking-widest mb-mento-sm">
            Tracción
          </p>
          <h2 className="text-h2 font-bold text-mento-text">
            Primeros equipos. Resultados reales.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-mento-xl items-start">

          {/* ── Left: early access card ── */}
          <div className="flex flex-col gap-mento-lg p-mento-xl bg-mento-elevated border border-mento-primary/25 rounded-mento-xl">
            <div className="inline-flex self-start items-center px-mento-md py-mento-xs bg-mento-primary/20 border border-mento-primary/30 rounded-mento-full">
              <span className="text-caption font-semibold text-mento-text">Acceso anticipado</span>
            </div>

            <p className="text-h4 font-medium text-mento-text leading-snug">
              "Estamos en etapa de acceso anticipado. Los primeros 10 clientes institucionales reciben onboarding personalizado, escenarios a medida y precio fundador."
            </p>

            <p className="text-caption text-mento-muted/70">
              Cuando haya testimonios públicos disponibles, esta sección se actualiza. La transparencia también es parte del método.
            </p>

            <Link
              href="/demo"
              className="self-start text-body font-semibold text-mento-cta hover:text-mento-text transition-colors"
            >
              Quiero ser cliente fundador →
            </Link>
          </div>

          {/* ── Right: methodological credentials ── */}
          <div className="flex flex-col gap-mento-md">
            <p className="text-caption font-bold text-mento-text uppercase tracking-widest mb-mento-xs">
              Por qué confiar en la metodología
            </p>
            {credentials.map((text) => (
              <div key={text} className="flex items-start gap-mento-md p-mento-md bg-mento-surface border border-white/8 rounded-mento-lg">
                <CheckCircle2
                  size={18}
                  className="text-mento-cta flex-shrink-0 mt-0.5"
                  strokeWidth={2}
                />
                <p className="text-body text-mento-muted">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
};
