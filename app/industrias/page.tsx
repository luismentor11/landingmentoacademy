import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Truck, ShoppingCart, HardHat, Soup, Factory, ShieldAlert, Thermometer, Box } from 'lucide-react';

const verticals = [
  {
    icon: <Truck size={32} />,
    title: 'Logística & Depósitos',
    tags: ['E-commerce', 'Distribución', 'Wholesale'],
    courses: [
      'Seguridad en el uso de Autoelevadores',
      'Optimización de Picking y Packing',
      'Gestión de Inventarios Críticos',
      'Ergonomía en el Movimiento de Cargas'
    ]
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'Retail & Supermercados',
    tags: ['Atención', 'Reposición', 'Cajas'],
    courses: [
      'Técnicas de Reposición Estratégica',
      'Prevención de Pérdidas y Mermas',
      'Atención al Cliente en Puntos de Venta',
      'Seguridad e Higiene en Salón'
    ]
  },
  {
    icon: <HardHat size={32} />,
    title: 'Construcción & Obras',
    tags: ['Seguridad', 'Maquinaria', 'Procesos'],
    courses: [
      'Prevención de Caídas en Altura',
      'Uso de Elementos de Protección Personal',
      'Señalética y Seguridad en Obra',
      'Gestión de Residuos de Obra'
    ]
  },
  {
    icon: <Soup size={32} />,
    title: 'Alimentos & Gastronomía',
    tags: ['Higiene', 'Servicio', 'Cocina'],
    courses: [
      'Manipulación Segura de Alimentos',
      'Gestión de Alérgenos en Cocina',
      'Estandarización de Procesos de Servicio',
      'Control de Calidad en Materia Prima'
    ]
  },
  {
    icon: <Factory size={32} />,
    title: 'Manufactura & Industria',
    tags: ['Línea', 'Calidad', 'Mantenimiento'],
    courses: [
      'Mantenimiento Autónomo (TPM)',
      'Control de Calidad en Línea de Producción',
      'Seguridad en Máquinas Rotativas',
      'Metodología 5S en Planta'
    ]
  },
  {
    icon: <ShieldAlert size={32} />,
    title: 'Seguridad Industrial',
    tags: ['Transversal', 'Normativa', 'Riesgos'],
    courses: [
      'Primeros Auxilios en Entornos Industriales',
      'Combate y Prevención de Incendios',
      'Gestión de Riesgos Ambientales',
      'Normativas ISO aplicadas'
    ]
  }
];

export default function IndustriasPage() {
  return (
    <main className="min-h-screen bg-mento-bg">
      <Header />
      <PageHeader 
        badge="Catálogo de Verticales"
        title="Capacitación específica para cada sector."
        subtitle="No creemos en las soluciones genéricas. Desarrollamos contenido curado que habla el idioma de tu industria."
      />

      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-mento-xl">
            {verticals.map((v) => (
              <Card key={v.title} variant="elevated" className="flex flex-col">
                <div className="w-16 h-16 rounded-mento-md bg-white/5 flex items-center justify-center text-mento-accent mb-mento-md">
                  {v.icon}
                </div>
                <h3 className="text-h3 font-bold text-white mb-mento-xs">{v.title}</h3>
                <div className="flex flex-wrap gap-2 mb-mento-md">
                  {v.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-mento-muted uppercase bg-white/5 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="space-y-3 flex-1 mb-mento-lg">
                  <p className="text-caption font-bold text-mento-muted uppercase tracking-widest">Cursos Destacados:</p>
                  {v.courses.map(course => (
                    <div key={course} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-mento-accent mt-1.5" />
                      <span className="text-body text-white/80">{course}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Ver detalle de la vertical
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <div className="relative p-mento-2xl bg-gradient-azul-magenta rounded-mento-xl overflow-hidden text-center flex flex-col items-center">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-h2 font-bold text-white mb-mento-md">¿No encontrás tu industria?</h2>
              <p className="text-body-lg text-white/80 mb-mento-lg">
                Nuestra arquitectura de contenido nos permite desarrollar nuevas verticales en tiempo récord. Si tenés una necesidad específica, nuestro equipo pedagógico puede crearla a medida.
              </p>
              <Button variant="primary" size="lg" href="/pedir-vertical" className="bg-white text-mento-primary hover:bg-white/90">
                Solicitar Nueva Vertical
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
