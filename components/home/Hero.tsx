import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Mentito } from '../ui/Mentito';

export const Hero = () => {
  return (
    <Section variant="default" className="relative overflow-hidden pt-mento-2xl pb-mento-4xl">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-mento-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-mento-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-mento-2xl items-center">
          <div className="flex flex-col space-y-mento-lg text-center lg:text-left">
            <div className="inline-flex self-center lg:self-start px-mento-md py-mento-xs bg-white/5 border border-white/10 rounded-full">
              <span className="text-caption font-bold text-mento-accent uppercase tracking-widest">
                Nueva era en capacitación
              </span>
            </div>
            
            <h1 className="text-h1 font-extrabold text-mento-text leading-tight">
              Transformá el <span className="text-gradient">talento operativo</span> en ventaja competitiva.
            </h1>
            
            <p className="text-h4 text-mento-muted max-w-xl mx-auto lg:mx-0">
              La primera plataforma de entrenamiento para industrias basada en ciencia cognitiva y validada por expertos del sector.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-mento-md pt-mento-md">
              <Button variant="primary" size="lg" href="https://app.mento.lat/signup" className="w-full sm:w-auto">
                Empezar ahora — Gratis
              </Button>
              <Button variant="outline" size="lg" href="/metodo" className="w-full sm:w-auto">
                Conocer el método
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-mento-lg pt-mento-lg text-caption text-mento-muted/60">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-mento-bg bg-mento-surface flex items-center justify-center font-bold text-[10px]">
                    U{i}
                  </div>
                ))}
              </div>
              <span>+5,000 profesionales ya se capacitan</span>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            {/* Glow effect behind Mentito */}
            <div className="absolute inset-0 bg-mento-accent/20 blur-[80px] rounded-full transform scale-75 animate-pulse" />
            <Mentito size="4xl" className="relative z-10 drop-shadow-[0_0_30px_rgba(var(--mento-accent-rgb),0.3)]" />
            
            {/* Floating stats or labels */}
            <div className="absolute top-1/4 -right-4 md:right-0 p-mento-md bg-mento-surface/80 backdrop-blur-md border border-white/10 rounded-mento-md shadow-mento-lg animate-float-slow">
              <div className="text-h4 font-bold text-mento-text">98%</div>
              <div className="text-caption text-mento-muted">Retención de conocimiento</div>
            </div>
            
            <div className="absolute bottom-1/4 -left-4 md:left-0 p-mento-md bg-mento-surface/80 backdrop-blur-md border border-white/10 rounded-mento-md shadow-mento-lg animate-float">
              <div className="text-h4 font-bold text-mento-text">4x</div>
              <div className="text-caption text-mento-muted">Más rápido que métodos tradicionales</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
