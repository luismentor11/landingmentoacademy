import React from 'react';
import { Target, Timer, TrendingDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

const painPoints = [
  {
    icon: Target,
    stat: '68%',
    statLabel: 'de empleados no presta atención a videos de capacitación',
    source: '(Research.com, 2026)',
    description:
      'El formato pasivo no funciona para habilidades conversacionales. Ver cómo se hace no es lo mismo que practicarlo.',
  },
  {
    icon: Timer,
    stat: '40%',
    statLabel: 'de rotación anual en posiciones de alta demanda conversacional',
    source: null,
    description:
      'Un agente sin confianza en sus conversaciones abandona o quema oportunidades. El costo de reemplazarlo supera 6 meses de salario.',
  },
  {
    icon: TrendingDown,
    stat: '1ra semana',
    statLabel: null,
    source: null,
    description:
      'Es cuando se pierden más deals y se generan más quejas. El personal nuevo aprende en vivo con clientes reales porque no hay otra opción.',
  },
];

export const ProblemSection = () => {
  return (
    <Section variant="surface">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-mento-2xl">
          <p className="text-caption font-semibold text-mento-muted uppercase tracking-widest mb-mento-sm">
            El problema que ningún manual resuelve
          </p>
          <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
            La capacitación tradicional enseña el qué.
            <br />
            <span className="text-mento-muted font-medium">Nadie entrena el cómo.</span>
          </h2>
          <p className="text-body-lg text-mento-muted">
            Tus vendedores leyeron el manual. Asistieron al taller. Aprobaron el examen. Pero cuando llega el cliente difícil, improvisan. Porque el conocimiento teórico no es práctica real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-lg">
          {painPoints.map((point) => (
            <Card key={point.stat} variant="elevated" className="flex flex-col gap-mento-md group hover:border-mento-accent/30 transition-all">
              <point.icon className="w-6 h-6 text-mento-cta flex-shrink-0" strokeWidth={1.75} />
              <div>
                <div className="text-display font-extrabold text-mento-cta leading-none mb-mento-xs group-hover:scale-105 transition-transform origin-left">
                  {point.stat}
                </div>
                {point.statLabel && (
                  <p className="text-body font-medium text-mento-text">
                    {point.statLabel}
                    {point.source && (
                      <span className="ml-1 text-caption text-mento-muted/60">{point.source}</span>
                    )}
                  </p>
                )}
              </div>
              <p className="text-body text-mento-muted">{point.description}</p>
            </Card>
          ))}
        </div>

        <p className="mt-mento-2xl text-h4 font-medium text-center text-mento-cta">
          Mento cambia eso. Tu equipo practica antes de que el error tenga costo.
        </p>
      </Container>
    </Section>
  );
};
