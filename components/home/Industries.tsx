import React from 'react';
import Link from 'next/link';
import { Home, BarChart2, MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const industries = [
  {
    Icon: Home,
    title: 'Inmobiliarias y Ventas',
    pain: 'Tu agente nuevo aprende a manejar objeciones en su primera operación real. Eso tiene un costo.',
    solution:
      'Simulamos al cliente que quiere bajar el precio, al que "tiene que consultarlo con la familia" y al que compara con 3 propiedades más. Antes de que llegue de verdad.',
    scenarios: [
      'Manejo de objeción de precio',
      'Seguimiento post-visita sin presionar',
      'Cierre en contexto de alta competencia',
    ],
  },
  {
    Icon: BarChart2,
    title: 'Seguros y Servicios Financieros',
    pain: 'El asesor que no cierra en la segunda llamada, no cierra nunca. La diferencia está en cómo maneja los primeros 90 segundos de resistencia.',
    solution:
      'Practicamos las 8 objeciones más frecuentes en productos de seguros y finanzas hasta que la respuesta es reflejo, no esfuerzo.',
    scenarios: [
      'Objeción de precio en pólizas',
      'Explicación de producto complejo sin perder al cliente',
      'Reactivación de leads fríos',
    ],
  },
  {
    Icon: MessageCircle,
    title: 'Atención al Cliente',
    pain: 'Un cliente enojado no quiere un protocolo. Quiere sentirse escuchado. Eso no se aprende leyendo un manual.',
    solution:
      'Entrenamos empatía, desescalada y resolución bajo presión con simulaciones de clientes reales: el impaciente, el agresivo, el que amenaza con irse.',
    scenarios: [
      'Desescalada de cliente furioso',
      'Gestión de queja sin poder dar solución inmediata',
      'Retención de cliente que quiere cancelar',
    ],
  },
];

export const IndustriesSection = () => {
  return (
    <Section variant="surface">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-mento-2xl">
          <p className="text-caption font-semibold text-mento-muted uppercase tracking-widest mb-mento-sm">
            Industrias
          </p>
          <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
            Conversaciones que se ganan o se pierden.
            <br />
            <span className="text-mento-muted font-medium">Mento entrena las que más importan.</span>
          </h2>
          <p className="text-body-lg text-mento-muted">
            Cada industria tiene sus conversaciones críticas. Mento las identifica, las simula y mide si tu equipo está listo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-lg">
          {industries.map(({ Icon, title, pain, solution, scenarios }) => (
            <div
              key={title}
              className="flex flex-col gap-mento-md p-mento-xl bg-mento-elevated border border-white/8 rounded-mento-lg hover:border-white/15 transition-colors"
            >
              <div className="w-10 h-10 rounded-mento-md bg-mento-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-mento-cta" strokeWidth={1.75} />
              </div>

              <h3 className="text-h4 font-bold text-mento-text">{title}</h3>

              <p className="text-body text-mento-muted/80 italic border-l-2 border-mento-cta/30 pl-mento-md">
                {pain}
              </p>

              <p className="text-body text-mento-muted">{solution}</p>

              <ul className="flex flex-col gap-mento-xs mt-auto">
                {scenarios.map((s) => (
                  <li key={s} className="flex items-start gap-mento-xs text-caption text-mento-muted/70">
                    <span className="mt-0.5 w-1 h-1 rounded-full bg-mento-cta flex-shrink-0" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>

              <Link
                href="/industrias"
                className="mt-mento-sm text-caption font-bold text-mento-cta hover:text-mento-text transition-colors"
              >
                Ver escenarios →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-mento-2xl p-mento-xl bg-mento-surface border border-white/8 rounded-mento-lg flex flex-col md:flex-row items-center justify-between gap-mento-lg">
          <div>
            <h3 className="text-h4 font-bold text-mento-text mb-mento-xs">
              ¿Tu industria tiene conversaciones críticas específicas?
            </h3>
            <p className="text-body text-mento-muted max-w-xl">
              Desarrollamos verticales personalizadas con tus propios escenarios, tu vocabulario y los casos reales de tu equipo.
            </p>
          </div>
          <Button variant="outline" href="/demo" className="flex-shrink-0">
            Hablar con el equipo →
          </Button>
        </div>
      </Container>
    </Section>
  );
};
