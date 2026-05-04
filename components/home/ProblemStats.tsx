import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

const stats = [
  {
    value: '70%',
    label: 'del personal operativo',
    description: 'no recibe capacitación estructurada en su primer año.',
    color: 'accent',
  },
  {
    value: '40%',
    label: 'de rotación anual',
    description: 'promedio en posiciones de alta demanda técnica.',
    color: 'primary',
  },
  {
    value: '22%',
    label: 'pérdida de eficiencia',
    description: 'por falta de estandarización en procesos críticos.',
    color: 'cta',
  },
];

export const ProblemStats = () => {
  return (
    <Section variant="surface">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-mento-2xl">
          <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
            El costo invisible de la falta de capacitación
          </h2>
          <p className="text-body-lg text-mento-muted">
            Las industrias enfrentan desafíos críticos que impactan directamente en su rentabilidad y seguridad. Mento Academy ataca la raíz del problema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-lg">
          {stats.map((stat) => (
            <Card key={stat.label} variant="elevated" className="text-center group hover:border-mento-accent/30 transition-all">
              <div className={`text-display font-extrabold text-mento-${stat.color} mb-mento-xs group-hover:scale-110 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-h4 font-bold text-mento-text mb-mento-xs">
                {stat.label}
              </div>
              <p className="text-body text-mento-muted">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-mento-2xl p-mento-xl bg-mento-bg/50 border border-white/5 rounded-mento-lg text-center">
          <p className="text-h3 font-medium text-mento-text italic">
            "La brecha de habilidades operativas es el principal obstáculo para la industria 4.0 en Latinoamérica."
          </p>
        </div>
      </Container>
    </Section>
  );
};
