import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Microscope, Brain, BookOpen, Fingerprint } from 'lucide-react';

export default function CienciaPage() {
  return (
    <main className="min-h-screen bg-mento-bg">
      <Header />
      <PageHeader 
        badge="Validación Científica"
        title="Diseñado para la mente humana."
        subtitle="Cada interacción en nuestra plataforma está fundamentada en principios de neurociencia y psicología del aprendizaje adulto (Andragogía)."
      />

      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-mento-2xl">
            <div className="space-y-mento-xl">
              <div>
                <h2 className="text-h2 font-bold text-mento-text mb-mento-md">Neurobiología del Aprendizaje</h2>
                <p className="text-body-lg text-mento-muted">
                  El cerebro operativo funciona bajo condiciones de estrés y carga física. Nuestra plataforma utiliza la **Teoría de la Carga Cognitiva** de John Sweller para presentar la información de manera que el cerebro pueda procesarla y almacenarla en la memoria de largo plazo sin saturarse.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-mento-md">
                <Card variant="elevated" className="border-l-4 border-l-mento-accent">
                  <Brain size={24} className="text-mento-accent mb-2" />
                  <h4 className="text-body font-bold text-white">Foco Atencional</h4>
                  <p className="text-caption text-mento-muted">Eliminamos distracciones visuales para concentrar la energía en el concepto clave.</p>
                </Card>
                <Card variant="elevated" className="border-l-4 border-l-mento-primary">
                  <Microscope size={24} className="text-mento-primary mb-2" />
                  <h4 className="text-body font-bold text-white">Malla Neuronal</h4>
                  <p className="text-caption text-mento-muted">Fomentamos la creación de nuevas conexiones mediante la resolución de problemas prácticos.</p>
                </Card>
              </div>
            </div>

            <div className="bg-mento-surface p-mento-xl rounded-mento-xl border border-white/5 flex flex-col justify-center">
              <div className="p-mento-lg bg-mento-bg rounded-mento-lg mb-mento-lg border border-white/5">
                <h3 className="text-h4 font-bold text-gradient mb-mento-sm">Principio de Dualidad</h3>
                <p className="text-body text-mento-muted">
                  Utilizamos canales visuales y auditivos de forma complementaria. Según el modelo de Paivio, procesar información por ambas vías simultáneamente mejora la codificación mnémica hasta en un 400%.
                </p>
              </div>
              <div className="p-mento-lg bg-mento-bg rounded-mento-lg border border-white/5">
                <h3 className="text-h4 font-bold text-gradient mb-mento-sm">Aprendizaje de Loop Cerrado</h3>
                <p className="text-body text-mento-muted">
                  Feedback instantáneo. La neurociencia demuestra que la corrección inmediata de errores previene la consolidación de patrones incorrectos en la memoria procedimental.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-mento-2xl">
            <h2 className="text-h2 font-bold text-mento-text">Andragogía: El aprendizaje en adultos</h2>
            <p className="text-body-lg text-mento-muted mt-mento-md">
              A diferencia de los niños, los adultos necesitan saber **por qué** están aprendiendo algo y cómo se aplica a su realidad inmediata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-lg">
            {[
              {
                icon: <BookOpen size={32} />,
                title: 'Experiencia Previa',
                desc: 'Nuestras lecciones conectan conceptos nuevos con el conocimiento que el trabajador ya posee de su labor diaria.'
              },
              {
                icon: <Fingerprint size={32} />,
                title: 'Autoconcepto',
                desc: 'Fomentamos la autonomía. El trabajador decide su ritmo, aumentando su sentido de responsabilidad sobre su propio desarrollo.'
              },
              {
                icon: <Microscope size={32} />,
                title: 'Orientación a la Tarea',
                desc: 'No enseñamos teoría abstracta. Enseñamos cómo operar una máquina, cómo mover un pallet, cómo salvar una vida.'
              }
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center text-center space-y-mento-md">
                <div className="w-16 h-16 rounded-full bg-mento-accent/10 flex items-center justify-center text-mento-accent">
                  {item.icon}
                </div>
                <h3 className="text-h3 font-bold text-white">{item.title}</h3>
                <p className="text-body text-mento-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
