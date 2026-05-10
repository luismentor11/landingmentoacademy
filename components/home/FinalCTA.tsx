import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Mentito } from '../ui/Mentito';

export const FinalCTA = () => {
  return (
    <Section variant="surface" className="py-mento-4xl">
      <Container>
        <div className="relative bg-gradient-deep-azul p-mento-2xl rounded-mento-xl border border-white/10 overflow-hidden text-center flex flex-col items-center">
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mento-accent/20 blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-3xl">
            <Mentito size="xl" className="mb-mento-lg drop-shadow-[0_0_20px_rgba(var(--mento-accent-rgb),0.4)]" />

            <h2 className="text-h1 font-extrabold text-white mb-mento-md">
              Tu equipo tiene una reunión difícil la semana que viene.
              <br />
              <span className="text-mento-cta">¿Están listos?</span>
            </h2>

            <p className="text-h4 text-white/70 mb-mento-2xl max-w-2xl">
              Mento los prepara antes de que pase. Una demo de 30 minutos con tu caso real es suficiente para ver si tiene sentido para tu empresa.
            </p>

            <div className="flex flex-col items-center gap-mento-md">
              <Button variant="primary" size="lg" href="/demo" className="px-mento-2xl">
                Solicitá la demo →
              </Button>
              <Link
                href="/metodo"
                className="text-body text-white/50 hover:text-white/80 transition-colors"
              >
                Preferís explorar primero → Conocé el método
              </Link>
            </div>

            <p className="mt-mento-lg text-caption text-white/40">
              Sin compromiso. Sin tarjeta. El equipo de Mento responde en menos de 24 hs.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
