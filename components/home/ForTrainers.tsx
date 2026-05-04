import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Users, LayoutDashboard, FileText } from 'lucide-react';

export const ForTrainers = () => {
  return (
    <Section variant="default">
      <Container>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-mento-2xl">
          <div className="lg:w-1/2 flex flex-col space-y-mento-lg">
            <h2 className="text-h2 font-bold text-mento-text">
              Para Líderes y Capacitadores: Control total, cero fricción.
            </h2>
            <p className="text-body-lg text-mento-muted">
              Mento Academy no solo ayuda a tus colaboradores, sino que empodera a tus equipos de RRHH y Operaciones con herramientas de gestión en tiempo real.
            </p>

            <ul className="space-y-mento-md">
              <li className="flex items-start gap-mento-md">
                <div className="p-2 bg-white/5 rounded-mento-sm mt-1">
                  <LayoutDashboard size={20} className="text-mento-accent" />
                </div>
                <div>
                  <h4 className="text-body font-bold text-mento-text">Dashboard de Progreso</h4>
                  <p className="text-caption text-mento-muted">Seguimiento en tiempo real de quién aprendió qué y cuándo.</p>
                </div>
              </li>
              <li className="flex items-start gap-mento-md">
                <div className="p-2 bg-white/5 rounded-mento-sm mt-1">
                  <FileText size={20} className="text-mento-accent" />
                </div>
                <div>
                  <h4 className="text-body font-bold text-mento-text">Reportes de Cumplimiento</h4>
                  <p className="text-caption text-mento-muted">Generación automática de reportes para auditorías y certificaciones.</p>
                </div>
              </li>
              <li className="flex items-start gap-mento-md">
                <div className="p-2 bg-white/5 rounded-mento-sm mt-1">
                  <Users size={20} className="text-mento-accent" />
                </div>
                <div>
                  <h4 className="text-body font-bold text-mento-text">Gestión de Equipos</h4>
                  <p className="text-caption text-mento-muted">Segmentá por depósitos, turnos o roles específicos con facilidad.</p>
                </div>
              </li>
            </ul>

            <div className="pt-mento-lg">
              <Button variant="primary" href="/capacitadores">
                Ver herramientas para empresas
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative p-mento-md bg-mento-surface border border-white/10 rounded-mento-lg shadow-mento-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-mento-accent" />
              {/* Mock Dashboard UI */}
              <div className="flex justify-between items-center mb-mento-lg">
                <div className="h-4 w-24 bg-white/10 rounded" />
                <div className="h-6 w-6 rounded-full bg-white/10" />
              </div>
              <div className="grid grid-cols-3 gap-mento-md mb-mento-xl">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 bg-white/5 rounded-mento-md p-mento-sm flex flex-col justify-end">
                    <div className="h-2 w-full bg-white/10 rounded mb-1" />
                    <div className="h-4 w-1/2 bg-mento-accent/50 rounded" />
                  </div>
                ))}
              </div>
              <div className="space-y-mento-md">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-center gap-mento-md">
                    <div className="w-8 h-8 rounded-full bg-white/5" />
                    <div className="flex-1 h-3 bg-white/10 rounded" />
                    <div className="w-12 h-3 bg-green-500/30 rounded" />
                  </div>
                ))}
              </div>
              {/* Decorative Blur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-mento-accent/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
