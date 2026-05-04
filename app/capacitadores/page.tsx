import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { LayoutDashboard, Users, FileText, Settings, ShieldCheck, Zap } from 'lucide-react';

export default function CapacitadoresPage() {
  return (
    <main className="min-h-screen bg-mento-bg">
      <Header />
      <PageHeader 
        badge="Para Empresas"
        title="Herramientas para los que lideran el talento."
        subtitle="Mento Academy es el aliado estratégico de los departamentos de RRHH, Seguridad e Higiene y Operaciones."
      />

      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-mento-2xl items-center mb-mento-3xl">
            <div>
              <h2 className="text-h2 font-bold text-mento-text mb-mento-md">Gestión Centralizada</h2>
              <p className="text-body-lg text-mento-muted mb-mento-lg">
                Olvidate de las planillas de cálculo y el seguimiento manual. Nuestra consola de administración te permite gestionar miles de colaboradores con la misma facilidad que a un equipo pequeño.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-mento-md">
                <div className="flex items-start gap-mento-sm">
                  <div className="p-2 bg-white/5 rounded-mento-sm text-mento-accent"><LayoutDashboard size={20} /></div>
                  <div>
                    <h4 className="text-body font-bold text-white">Dashboard Real-time</h4>
                    <p className="text-caption text-mento-muted">Métricas de avance y aprobación al instante.</p>
                  </div>
                </div>
                <div className="flex items-start gap-mento-sm">
                  <div className="p-2 bg-white/5 rounded-mento-sm text-mento-accent"><Users size={20} /></div>
                  <div>
                    <h4 className="text-body font-bold text-white">Grupos Dinámicos</h4>
                    <p className="text-caption text-mento-muted">Asigná cursos por turnos, sedes o roles.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-mento-surface p-mento-md rounded-mento-xl border border-white/10 shadow-mento-lg">
              <div className="aspect-video bg-mento-bg rounded-mento-lg overflow-hidden border border-white/5 flex flex-col">
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-4 w-32 bg-white/10 rounded" />
                    <div className="h-4 w-16 bg-mento-accent/20 rounded" />
                  </div>
                  <div className="space-y-3">
                    {[75, 45, 90, 60].map((w, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded bg-white/5" />
                        <div className="flex-1 h-2 bg-white/5 rounded">
                          <div className={`h-full bg-mento-accent/60 rounded`} style={{ width: `${w}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-lg">
            {[
              {
                icon: <FileText size={24} />,
                title: 'Reportes Automatizados',
                desc: 'Generá archivos listos para auditorías de calidad o seguridad e higiene con un solo clic.'
              },
              {
                icon: <ShieldCheck size={24} />,
                title: 'Validación de Identidad',
                desc: 'Aseguramos que el colaborador capacitado sea quien dice ser mediante validaciones integradas.'
              },
              {
                icon: <Zap size={24} />,
                title: 'Integración vía API',
                desc: 'Conectá Mento con tu sistema de nómina o ERP para automatizar altas y bajas de personal.'
              }
            ].map(item => (
              <Card key={item.title} variant="elevated">
                <div className="text-mento-accent mb-mento-sm">{item.icon}</div>
                <h3 className="text-h4 font-bold text-white mb-2">{item.title}</h3>
                <p className="text-caption text-mento-muted leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container>
          <div className="bg-mento-bg p-mento-2xl rounded-mento-xl border border-white/5 flex flex-col md:flex-row items-center gap-mento-xl">
            <div className="flex-1">
              <h2 className="text-h3 font-bold text-white mb-mento-sm">¿Tenés una empresa con más de 100 colaboradores?</h2>
              <p className="text-body text-mento-muted mb-mento-md">Solicitá una demo personalizada y descubrí cómo podemos optimizar tus procesos de capacitación y onboarding.</p>
            </div>
            <Button variant="primary" size="lg" href="mailto:ventas@mento.lat">
              Agendar Demo Corporativa
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
