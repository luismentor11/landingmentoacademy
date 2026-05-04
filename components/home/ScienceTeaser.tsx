import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Brain, Microscope, BarChart3 } from 'lucide-react';

export const ScienceTeaser = () => {
  return (
    <Section variant="default" className="border-y border-white/5">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-mento-2xl">
          <div className="lg:w-1/3 grid grid-cols-1 gap-mento-lg">
            <div className="flex items-start gap-mento-md">
              <div className="p-mento-sm bg-white/5 rounded-mento-md">
                <Brain size={24} className="text-mento-accent" />
              </div>
              <div>
                <h4 className="text-body font-bold text-mento-text">Neurociencia Aplicada</h4>
                <p className="text-caption text-mento-muted">Optimizamos la carga cognitiva para maximizar la retención.</p>
              </div>
            </div>
            <div className="flex items-start gap-mento-md">
              <div className="p-mento-sm bg-white/5 rounded-mento-md">
                <Microscope size={24} className="text-mento-accent" />
              </div>
              <div>
                <h4 className="text-body font-bold text-mento-text">Pedagogía Moderna</h4>
                <p className="text-caption text-mento-muted">Metodologías activas diseñadas para el adulto trabajador.</p>
              </div>
            </div>
            <div className="flex items-start gap-mento-md">
              <div className="p-mento-sm bg-white/5 rounded-mento-md">
                <BarChart3 size={24} className="text-mento-accent" />
              </div>
              <div>
                <h4 className="text-body font-bold text-mento-text">Data & Análisis</h4>
                <p className="text-caption text-mento-muted">Medimos el progreso real con métricas de desempeño industrial.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-mento-surface/50 border border-white/5 p-mento-xl rounded-mento-lg relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-mento-accent/5 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
              <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
                El respaldo científico detrás de cada lección.
              </h2>
              <p className="text-body-lg text-mento-muted mb-mento-xl">
                No dejamos el aprendizaje al azar. Cada video, cada evaluación y cada interacción en Mento está diseñada siguiendo principios probados de psicología cognitiva para asegurar que el conocimiento se convierta en hábito.
              </p>
              <Button variant="ghost" href="/ciencia">
                Descubrir nuestra metodología científica →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
