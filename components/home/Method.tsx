import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const steps = [
  {
    number: '01',
    title: 'Inmersión y Contextualización',
    description:
      'Antes de simular, el participante comprende el escenario: el cliente, el contexto, los objetivos de la conversación. La IA presenta el caso con el nivel de dificultad configurado para ese equipo.',
    tags: ['Duración: 2-3 min'],
  },
  {
    number: '02',
    title: 'Simulación Activa con IA',
    description:
      'El participante conduce la conversación. La IA responde como un cliente o interlocutor real, adaptando sus reacciones en tiempo real según las decisiones tomadas. Sin guión rígido. Sin respuestas predecibles.',
    tags: ['Hiper-Realismo Adaptativo', 'IA multiagente'],
  },
  {
    number: '03',
    title: 'Debriefing y Feedback por Competencias',
    description:
      'Al terminar la simulación, el sistema analiza el desempeño y entrega feedback específico: qué funcionó, qué falló y por qué. No mide si terminó el módulo. Mide si demostró la competencia.',
    tags: ['Feedback 360°', 'Métricas reales'],
  },
];

export const HowItWorksSection = () => {
  return (
    <Section variant="default">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-mento-2xl">
          <p className="text-caption font-semibold text-mento-muted uppercase tracking-widest mb-mento-sm">
            El método
          </p>
          <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
            Tres fases. Una sola consecuencia: equipos que saben actuar.
          </h2>
          <p className="text-caption text-mento-muted/70">
            Basado en el Ciclo de Aprendizaje Experiencial de David Kolb (1984) e implementado con IA generativa adaptativa.{' '}
            <Link href="/ciencia" className="underline underline-offset-2 hover:text-mento-text transition-colors">
              Ver la ciencia detrás
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-lg relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-white/10" aria-hidden="true" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-mento-md p-mento-xl bg-mento-surface border border-white/8 rounded-mento-lg hover:border-white/15 transition-colors">
              <span className="text-[4rem] font-extrabold leading-none text-white/8 select-none">
                {step.number}
              </span>
              <div>
                <h3 className="text-h4 font-bold text-mento-text mb-mento-sm">
                  {step.title}
                </h3>
                <p className="text-body text-mento-muted">
                  {step.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-mento-xs mt-auto pt-mento-sm">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-mento-sm py-1 rounded-mento-full bg-mento-primary/20 border border-mento-primary/30 text-caption font-medium text-mento-text/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-mento-2xl text-center">
          <Link
            href="/metodo"
            className="text-body font-medium text-mento-muted hover:text-mento-text transition-colors"
          >
            Ver metodología completa →
          </Link>
        </div>
      </Container>
    </Section>
  );
};
