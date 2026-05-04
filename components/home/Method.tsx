import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, PlayCircle, Trophy, Zap } from 'lucide-react';

const pillars = [
  {
    icon: <Zap className="text-mento-accent" size={32} />,
    title: 'Microlearning',
    description: 'Lecciones de 3 a 5 minutos diseñadas para la atención del personal operativo.',
  },
  {
    icon: <PlayCircle className="text-mento-accent" size={32} />,
    title: 'Video-First',
    description: 'Contenido visual de alta calidad que elimina las barreras de la lectoescritura.',
  },
  {
    icon: <Trophy className="text-mento-accent" size={32} />,
    title: 'Gamificación',
    description: 'Sistemas de recompensas y rankings que fomentan la competencia sana.',
  },
  {
    icon: <CheckCircle2 className="text-mento-accent" size={32} />,
    title: 'Validación Real',
    description: 'Evaluaciones prácticas que aseguran la aplicación real del conocimiento.',
  },
];

export const Method = () => {
  return (
    <Section variant="default">
      <Container>
        <div className="flex flex-col lg:flex-row gap-mento-2xl items-center">
          <div className="lg:w-1/2 flex flex-col space-y-mento-lg">
            <h2 className="text-h2 font-bold text-gradient">
              El Método Mento: Diseñado para aprender haciendo.
            </h2>
            <p className="text-body-lg text-mento-muted">
              No somos solo una plataforma de videos. Somos un ecosistema de aprendizaje optimizado para entornos industriales donde el tiempo es oro y la precisión es vital.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-mento-md pt-mento-md">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex flex-col space-y-mento-xs p-mento-md bg-white/5 border border-white/5 rounded-mento-md hover:bg-white/10 transition-colors">
                  {pillar.icon}
                  <h3 className="text-h4 font-bold text-mento-text">{pillar.title}</h3>
                  <p className="text-caption text-mento-muted">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-mento-lg">
              <Button variant="primary" href="/metodo">
                Explorar el método completo
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-video bg-mento-surface rounded-mento-lg border border-white/10 shadow-mento-lg overflow-hidden flex items-center justify-center group cursor-pointer">
              {/* Placeholder for methodology video or interactive graphic */}
              <div className="absolute inset-0 bg-gradient-to-t from-mento-bg/80 to-transparent z-10" />
              <div className="relative z-20 flex flex-col items-center gap-mento-md group-hover:scale-110 transition-transform">
                <div className="w-20 h-20 rounded-full bg-mento-accent flex items-center justify-center shadow-mento-glow">
                  <PlayCircle size={40} className="text-white fill-white" />
                </div>
                <span className="text-h4 font-bold text-white uppercase tracking-widest">Ver demo</span>
              </div>
              {/* Mock interface elements */}
              <div className="absolute top-mento-md left-mento-md z-20 flex gap-mento-xs">
                <div className="h-2 w-12 bg-mento-accent rounded-full" />
                <div className="h-2 w-12 bg-white/20 rounded-full" />
                <div className="h-2 w-12 bg-white/20 rounded-full" />
              </div>
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute -bottom-6 -right-6 p-mento-md bg-mento-elevated border border-white/10 rounded-mento-md shadow-mento-lg hidden md:block">
              <div className="flex items-center gap-mento-sm">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-green-500" />
                </div>
                <div>
                  <div className="text-caption font-bold text-white">Certificación</div>
                  <div className="text-[10px] text-mento-muted">Seguridad Industrial Nivel 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
