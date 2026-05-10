import React from 'react';
import Link from 'next/link';
import { Brain, RefreshCw, TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const pillars = [
  {
    Icon: Brain,
    title: 'El cerebro aprende haciendo, no mirando',
    body: 'Cuando una persona participa en una simulación, activa las mismas redes neuronales que activaría en la situación real. Esto genera "huellas de memoria" más profundas y duraderas que las producidas por la exposición pasiva a contenido.',
    citation:
      'Mariani, L. (2020). The Neurosciences Underlying the Models of Digital Role Play. SkillGym.',
  },
  {
    Icon: RefreshCw,
    title: 'El Ciclo de Kolb como arquitectura del método',
    body: 'El formato de Mento sigue las cuatro etapas del Aprendizaje Experiencial: experiencia concreta (la simulación), observación reflexiva (el debriefing), conceptualización abstracta (el feedback por competencias) y experimentación activa (el próximo escenario con mayor dificultad).',
    citation: 'Kolb, D. A. (1984). Experiential Learning. Adaptado por isEazy (2026).',
  },
  {
    Icon: TrendingUp,
    title: 'El mercado B2B está migrando al roleplay con IA',
    body: 'Para 2026, el roleplay impulsado por IA se consolidó como el método preferido para el desarrollo de soft skills en organizaciones. Las empresas abandonan los videos estáticos —donde el 68% de los empleados admite no prestar atención— en favor de simulaciones interactivas.',
    citation:
      'Easygenerator (2026). Best AI roleplay tools for corporate training. / Research.com (2026). 28 Video Training Statistics.',
  },
];

export const ScienceSection = () => {
  return (
    <Section variant="default" className="border-y border-white/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-mento-2xl">
          <p className="text-caption font-semibold text-mento-muted uppercase tracking-widest mb-mento-sm">
            Por qué funciona
          </p>
          <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
            No es intuición. Es ciencia del aprendizaje aplicada.
          </h2>
          <p className="text-body-lg text-mento-muted">
            El roleplay con IA no es un formato nuevo por moda. Es la aplicación más directa de lo que la neurociencia cognitiva lleva décadas demostrando sobre cómo los adultos aprenden habilidades complejas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-lg">
          {pillars.map(({ Icon, title, body, citation }) => (
            <div
              key={title}
              className="flex flex-col gap-mento-md p-mento-xl bg-mento-surface/50 border border-white/8 rounded-mento-lg hover:border-white/15 transition-colors"
            >
              <div className="w-10 h-10 rounded-mento-md bg-mento-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon size={20} className="text-mento-accent" strokeWidth={1.75} />
              </div>
              <h3 className="text-h4 font-bold text-mento-text">{title}</h3>
              <p className="text-body text-mento-muted flex-1">{body}</p>
              <p className="text-[11px] text-mento-muted/50 italic border-t border-white/5 pt-mento-sm">
                {citation}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-mento-2xl text-center">
          <Link
            href="/ciencia"
            className="text-body font-medium text-mento-muted hover:text-mento-text transition-colors"
          >
            Leer el análisis completo de tendencias →
          </Link>
        </div>
      </Container>
    </Section>
  );
};
