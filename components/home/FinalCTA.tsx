import React from 'react';
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
              ¿Listo para subir el nivel de tu equipo?
            </h2>
            
            <p className="text-h4 text-white/70 mb-mento-2xl">
              Unite a las empresas que ya están transformando su cultura operativa con Mento Academy. Empezá hoy mismo de forma gratuita.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-mento-md">
              <Button variant="primary" size="lg" href="https://app.mento.lat/signup" className="px-mento-2xl">
                Probar gratis ahora
              </Button>
              <Button variant="outline" size="lg" href="mailto:hola@mento.lat" className="px-mento-2xl border-white text-white hover:bg-white/10">
                Contactar ventas
              </Button>
            </div>
            
            <p className="mt-mento-lg text-caption text-white/40">
              Sin tarjeta de crédito. Configuración en 5 minutos.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
