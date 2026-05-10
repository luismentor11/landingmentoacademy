import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Mentito } from '../ui/Mentito';

export const Hero = () => {
  return (
    <Section variant="default" className="relative overflow-hidden pt-mento-2xl pb-mento-4xl">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-mento-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-mento-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-mento-2xl items-center animate-in">
          <div className="flex flex-col space-y-mento-lg text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex self-center lg:self-start items-center px-mento-md py-mento-xs bg-mento-primary border border-white/15 rounded-mento-full">
              <span className="text-caption font-medium text-white">
                Roleplay con IA · Habilidades conversacionales · B2B
              </span>
            </div>

            <h1 className="text-h1 lg:text-display font-extrabold text-mento-text leading-[1.05] tracking-tight">
              Tu equipo sabe el qué.
              <br />
              <span className="text-mento-cta">Mento los entrena en el cómo.</span>
            </h1>

            <p className="text-body-lg text-mento-muted max-w-xl mx-auto lg:mx-0">
              Plataforma de simulación con IA para equipos de ventas, atención al cliente y negociación. Practicá conversaciones difíciles antes de que cuesten dinero real.
            </p>

            <div className="pt-mento-sm flex flex-col items-center lg:items-start">
              <a
                href="/demo"
                className="group inline-flex items-center justify-center gap-mento-xs px-mento-xl py-mento-md bg-mento-cta text-white text-body-lg font-semibold rounded-mento-full transition-all duration-200 hover:bg-mento-cta-hover hover:shadow-[0_16px_40px_rgba(197,87,122,0.4)] active:scale-[0.98]"
              >
                Solicitá una demo para tu empresa
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>

              <p className="mt-mento-md text-caption text-mento-muted opacity-70">
                Sin tarjeta de crédito. Configuración en 48 hs. Soporte incluido.
              </p>
            </div>

            <div className="pt-mento-md flex flex-wrap items-center justify-center lg:justify-start gap-x-mento-md gap-y-mento-xs text-caption text-mento-muted">
              <SocialProofItem text="Basado en el Ciclo de Kolb" />
              <span className="hidden sm:inline-block w-px h-3 bg-white/15" aria-hidden="true" />
              <SocialProofItem text="IA adaptativa en tiempo real" />
              <span className="hidden sm:inline-block w-px h-3 bg-white/15" aria-hidden="true" />
              <SocialProofItem text="Feedback por competencias demostradas" />
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <DemoPlaceholder />
          </div>
        </div>
      </Container>
    </Section>
  );
};

const SocialProofItem = ({ text }: { text: string }) => (
  <span className="inline-flex items-center gap-mento-xs">
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="text-mento-cta flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d="M11.667 3.5L5.25 9.917 2.333 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {text}
  </span>
);

const DemoPlaceholder = () => (
  <div className="relative aspect-[4/3] w-full max-w-xl mx-auto rounded-mento-lg bg-mento-surface border border-white/10 shadow-mento-lg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-mento-primary/30 via-transparent to-mento-accent/20 pointer-events-none" />

    <div className="flex items-center gap-mento-xs px-mento-md py-mento-sm border-b border-white/5">
      <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
      <span className="ml-mento-sm text-[11px] text-mento-muted/70 font-mono">
        roleplay · cliente difícil
      </span>
    </div>

    <div className="relative p-mento-md space-y-mento-sm">
      <div className="flex justify-start">
        <div className="max-w-[78%] px-mento-md py-mento-xs rounded-mento-md rounded-tl-sm bg-mento-elevated text-body text-mento-text/90">
          No estoy seguro de que esto valga lo que me piden.
        </div>
      </div>

      <div className="flex justify-end">
        <div className="max-w-[78%] px-mento-md py-mento-xs rounded-mento-md rounded-tr-sm bg-mento-primary text-body text-white">
          Entiendo. ¿Qué necesitarías ver para sentir que sí lo vale?
        </div>
      </div>

      <div className="flex justify-start">
        <div className="max-w-[78%] px-mento-md py-mento-xs rounded-mento-md rounded-tl-sm bg-mento-elevated/70 text-body text-mento-text/60">
          <span className="inline-flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-mento-muted/60 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-mento-muted/60 animate-pulse [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-mento-muted/60 animate-pulse [animation-delay:300ms]" />
          </span>
        </div>
      </div>

      <div className="absolute left-mento-md right-mento-md bottom-mento-md px-mento-md py-mento-xs rounded-mento-full bg-mento-bg/80 backdrop-blur-sm border border-white/5 text-caption text-mento-muted/70">
        Aquí va demo del producto — video 30s autoplay muted loop
      </div>
    </div>

    <div className="absolute -bottom-2 -right-2 pointer-events-none">
      <Mentito size="sm" />
    </div>
  </div>
);
