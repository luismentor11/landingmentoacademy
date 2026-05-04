import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Zap, PlayCircle, Trophy, BarChart3, Smartphone, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Zap size={32} />,
    title: 'Microlearning',
    description: 'Fraccionamos el conocimiento en piezas pequeñas y digeribles. Lecciones de 3-5 minutos que se adaptan a la jornada laboral operativa.',
  },
  {
    icon: <PlayCircle size={32} />,
    title: 'Narrativa Visual',
    description: 'Eliminamos la fricción de la lectura pesada. Todo nuestro contenido es video-first, grabado en entornos reales de trabajo.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile First',
    description: 'Capacitación donde esté el trabajador. Nuestra app está optimizada para dispositivos móviles de gama media y baja.',
  },
  {
    icon: <Trophy size={32} />,
    title: 'Gamificación Relevante',
    description: 'No son solo puntos. Es un sistema de reconocimiento que valida la maestría en tareas específicas y fomenta el orgullo profesional.',
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Métricas de Impacto',
    description: 'Medimos más que la finalización. Analizamos la retención y la capacidad de resolución de problemas en el puesto de trabajo.',
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'Certificación Industrial',
    description: 'Validación de competencias que tiene peso real en la industria y en el legajo del colaborador.',
  },
];

export default function MetodoPage() {
  return (
    <main className="min-h-screen bg-mento-bg">
      <Header />
      <PageHeader 
        badge="Nuestra Metodología"
        title="Aprendizaje de alto impacto para la línea de fuego."
        subtitle="Combinamos ciencia cognitiva con tecnología móvil para crear la experiencia de capacitación más efectiva del mercado industrial."
      />

      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-mento-lg">
            {steps.map((step) => (
              <Card key={step.title} variant="elevated" className="h-full">
                <div className="text-mento-accent mb-mento-md">
                  {step.icon}
                </div>
                <h3 className="text-h3 font-bold text-mento-text mb-mento-sm">
                  {step.title}
                </h3>
                <p className="text-body text-mento-muted">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <div className="flex flex-col lg:flex-row gap-mento-2xl items-center">
            <div className="lg:w-1/2">
              <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
                ¿Por qué funciona?
              </h2>
              <p className="text-body-lg text-mento-muted mb-mento-lg">
                La capacitación tradicional falla en la industria porque no considera el entorno: ruido, falta de tiempo, fatiga física y diversidad en los niveles de educación formal.
              </p>
              <div className="space-y-mento-md">
                {[
                  'Ataca la curva del olvido con repetición espaciada.',
                  'Reduce la carga cognitiva con diseño minimalista.',
                  'Aumenta el compromiso mediante el aprendizaje social.',
                  'Alinea los objetivos de la empresa con los del trabajador.'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-mento-sm">
                    <CheckCircle className="text-mento-accent" size={20} />
                    <span className="text-body text-mento-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 bg-mento-bg p-mento-xl rounded-mento-xl border border-white/5">
              <div className="text-caption font-bold text-mento-muted uppercase tracking-widest mb-mento-lg text-center">Efectividad Comparada</div>
              <div className="space-y-mento-xl">
                <div>
                  <div className="flex justify-between text-caption text-white mb-2">
                    <span>Mento Academy</span>
                    <span>92% Retención</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-vino-magenta shadow-mento-glow" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-caption text-mento-muted mb-2">
                    <span>E-learning Tradicional</span>
                    <span>24% Retención</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[24%] bg-white/20" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-caption text-mento-muted mb-2">
                    <span>Capacitación Presencial</span>
                    <span>15% Retención</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
