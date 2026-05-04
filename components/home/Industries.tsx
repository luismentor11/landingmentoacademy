import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Truck, ShoppingCart, HardHat, Soup } from 'lucide-react';

const industries = [
  {
    icon: <Truck size={32} />,
    title: 'Logística & Depósitos',
    courses: '12 cursos',
    description: 'Gestión de stock, seguridad en autoelevadores y picking eficiente.',
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'Retail & Consumo',
    courses: '8 cursos',
    description: 'Atención al cliente, reposición y control de mermas.',
  },
  {
    icon: <HardHat size={32} />,
    title: 'Construcción',
    courses: '15 cursos',
    description: 'Normativas de seguridad, uso de herramientas y prevención de riesgos.',
  },
  {
    icon: <Soup size={32} />,
    title: 'Gastronomía',
    courses: '10 cursos',
    description: 'Bromatología, servicio de salón y eficiencia en cocina.',
  },
];

export const Industries = () => {
  return (
    <Section variant="surface">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-mento-lg mb-mento-2xl">
          <div className="max-w-2xl">
            <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
              Especialización por Industria
            </h2>
            <p className="text-body-lg text-mento-muted">
              Contamos con contenido curado por expertos para cada vertical de negocio. Si no encontrás la tuya, la creamos a medida.
            </p>
          </div>
          <Button variant="outline" href="/industrias">
            Ver catálogo completo
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-mento-lg">
          {industries.map((industry) => (
            <Card key={industry.title} variant="elevated" className="group cursor-pointer hover:bg-mento-bg transition-colors">
              <div className="w-14 h-14 rounded-mento-md bg-white/5 flex items-center justify-center text-mento-accent mb-mento-md group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <div className="flex justify-between items-start mb-mento-xs">
                <h3 className="text-h4 font-bold text-mento-text">{industry.title}</h3>
                <span className="text-[10px] font-bold text-mento-muted uppercase tracking-widest bg-white/5 px-2 py-1 rounded-full">
                  {industry.courses}
                </span>
              </div>
              <p className="text-body text-mento-muted">
                {industry.description}
              </p>
              <div className="mt-mento-md flex items-center gap-2 text-caption font-bold text-mento-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Ver contenido <span>→</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-mento-2xl flex flex-col items-center p-mento-xl bg-gradient-azul-vino rounded-mento-lg text-center">
          <h3 className="text-h3 font-bold text-white mb-mento-md">
            ¿Tu industria requiere capacitación específica?
          </h3>
          <p className="text-body text-white/80 max-w-xl mb-mento-lg">
            Desarrollamos verticales personalizadas para empresas con procesos únicos. Validamos el contenido con tus propios expertos.
          </p>
          <Button variant="primary" href="/pedir-vertical" className="bg-white text-mento-accent hover:bg-white/90">
            Solicitar vertical personalizada
          </Button>
        </div>
      </Container>
    </Section>
  );
};
