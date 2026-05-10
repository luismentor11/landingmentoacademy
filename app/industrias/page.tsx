import React from 'react';
import Link from 'next/link';
import { Home, BarChart2, MessageCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

// ─── data ────────────────────────────────────────────────────────────────────

const verticals = [
  {
    Icon: Home,
    title: 'Inmobiliarias y Agencias de Ventas',
    pain: 'Tu agente nuevo aprende a manejar objeciones en su primera operación real. Eso no es formación — es el costo de no haberlo entrenado antes.',
    solution:
      'Mento simula los clientes más difíciles del sector: el que quiere bajar el precio 20%, el que "tiene que consultarlo", el que compara con tres propiedades más y no decide. Tu equipo los practica antes de que aparezcan de verdad.',
    scenarios: [
      'Manejo de objeción de precio en tasación',
      'Seguimiento post-visita sin generar presión',
      'Cierre con comprador indeciso en contexto de alta competencia',
      'Presentación de propiedad a cliente con expectativas irreales',
      'Negociación entre comprador y vendedor con brecha de precio',
    ],
    competencias: ['Manejo de objeciones', 'Escucha activa', 'Negociación de valor', 'Cierre consultivo'],
    cta: 'Solicitar demo para inmobiliarias →',
  },
  {
    Icon: BarChart2,
    title: 'Seguros y Servicios Financieros',
    pain: 'El asesor que no cierra en la segunda llamada no cierra nunca. La diferencia entre los mejores y el promedio no es conocimiento del producto — es cómo manejan los primeros 90 segundos de resistencia.',
    solution:
      'Practicamos las objeciones más frecuentes del sector hasta que la respuesta es reflejo, no esfuerzo. El participante enfrenta al cliente escéptico, al que "ya tiene cobertura", al que pregunta por el precio antes de entender el valor.',
    scenarios: [
      'Objeción de precio en póliza de vida o salud',
      'Cliente que compara con competidor más barato',
      'Explicación de producto complejo sin perder la atención',
      'Reactivación de lead frío que dejó de responder',
      'Manejo de reclamo sin poder dar solución inmediata',
    ],
    competencias: ['Apertura de conversación', 'Gestión de objeciones', 'Comunicación de valor', 'Seguimiento sin presionar'],
    cta: 'Solicitar demo para seguros y finanzas →',
  },
  {
    Icon: MessageCircle,
    title: 'Atención al Cliente',
    pain: 'Un cliente enojado no quiere un protocolo. Quiere sentirse escuchado. Eso no está en ningún manual — y no se aprende mirando un video.',
    solution:
      'Entrenamos empatía, desescalada y resolución bajo presión con simulaciones de clientes reales: el impaciente, el agresivo, el que amenaza con irse, el que tiene razón pero está equivocado en la forma. El agente practica hasta que el protocolo desaparece y queda la habilidad.',
    scenarios: [
      'Desescalada de cliente furioso por falla del servicio',
      'Gestión de queja sin poder dar solución inmediata',
      'Retención de cliente que quiere cancelar',
      'Atención a cliente con barrera de comunicación (frustración alta)',
      'Comunicación de malas noticias sin perder la relación',
    ],
    competencias: ['Empatía activa', 'Desescalada emocional', 'Resolución de conflictos', 'Retención de clientes'],
    cta: 'Solicitar demo para atención al cliente →',
  },
];

const customIncludes = [
  'Relevamiento de escenarios críticos con tu equipo',
  'Diseño de personajes IA basados en tus clientes reales',
  'Configuración de niveles de dificultad progresiva',
  'Dashboard personalizado con las métricas que importan en tu sector',
];

// ─── page ────────────────────────────────────────────────────────────────────

export default function IndustriasPage() {
  return (
    <main className="min-h-screen bg-mento-bg">
      <Header />

      {/* ── Hero ── */}
      <Section variant="default" className="pt-mento-3xl pb-mento-xl border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex px-mento-md py-mento-xs bg-white/5 border border-white/10 rounded-full mb-mento-md">
              <span className="text-caption font-bold text-mento-accent uppercase tracking-widest">
                Verticales de entrenamiento
              </span>
            </div>
            <h1 className="text-display font-extrabold text-mento-text mb-mento-md leading-[1.05] tracking-tight">
              Cada industria tiene sus conversaciones críticas.
              <br />
              <span className="text-mento-cta">Mento entrena las que más cuestan perder.</span>
            </h1>
            <p className="text-h4 text-mento-muted leading-relaxed">
              No vendemos cursos genéricos. Simulamos los escenarios reales de tu sector: el cliente difícil, la objeción que siempre queda sin respuesta, la conversación que decide si el deal se cierra o no.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Tres verticales ── */}
      <Section variant="surface">
        <Container>
          <p className="text-body text-mento-muted mb-mento-2xl">
            Actualmente operamos en tres verticales prioritarias.{' '}
            <Link href="/demo" className="text-mento-cta hover:text-mento-text transition-colors">
              Si tu industria no está acá, escribinos
            </Link>{' '}
            — desarrollamos verticales a medida en tiempo récord.
          </p>

          <div className="flex flex-col gap-mento-2xl">
            {verticals.map(({ Icon, title, pain, solution, scenarios, competencias, cta }) => (
              <div
                key={title}
                className="bg-mento-elevated border border-white/8 rounded-mento-xl overflow-hidden hover:border-white/15 transition-colors"
              >
                {/* Card header */}
                <div className="flex items-center gap-mento-md px-mento-xl pt-mento-xl pb-mento-lg border-b border-white/5">
                  <div className="w-10 h-10 rounded-mento-md bg-mento-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-mento-cta" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <span className="inline-flex items-center px-mento-sm py-0.5 rounded-mento-full bg-mento-cta/15 border border-mento-cta/25 text-[11px] font-bold text-mento-cta uppercase tracking-wider mb-1">
                      Vertical activa
                    </span>
                    <h2 className="text-h3 font-bold text-mento-text">{title}</h2>
                  </div>
                </div>

                {/* Card body */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-mento-xl p-mento-xl">
                  {/* Left: pain + solution */}
                  <div className="flex flex-col gap-mento-lg">
                    <blockquote className="border-l-2 border-mento-cta/40 pl-mento-md">
                      <p className="text-body text-mento-muted/80 italic">{pain}</p>
                    </blockquote>
                    <p className="text-body text-mento-muted">{solution}</p>
                    <div className="flex flex-wrap gap-mento-xs">
                      {competencias.map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center px-mento-sm py-1 rounded-mento-full bg-mento-primary/15 border border-mento-primary/25 text-caption font-medium text-mento-text/70"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: scenarios + CTA */}
                  <div className="flex flex-col gap-mento-lg">
                    <div>
                      <p className="text-caption font-bold text-mento-text uppercase tracking-widest mb-mento-md">
                        Escenarios de práctica
                      </p>
                      <ul className="flex flex-col gap-mento-sm">
                        {scenarios.map((s) => (
                          <li key={s} className="flex items-start gap-mento-sm text-body text-mento-muted">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-mento-cta flex-shrink-0" aria-hidden="true" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/demo"
                      className="self-start text-body font-semibold text-mento-cta hover:text-mento-text transition-colors"
                    >
                      {cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Vertical personalizada ── */}
      <Section variant="default">
        <Container>
          <div className="p-mento-2xl bg-mento-surface border border-[#7E3A5F]/30 rounded-mento-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-mento-2xl items-start">
              <div className="flex flex-col gap-mento-lg">
                <h3 className="text-h2 font-bold text-mento-text">
                  ¿Tu industria tiene conversaciones críticas específicas?
                </h3>
                <p className="text-body-lg text-mento-muted">
                  No todas las organizaciones encajan en un catálogo. Si tu equipo enfrenta situaciones conversacionales únicas — negociaciones complejas, onboarding técnico, ventas consultivas — construimos los escenarios con vos. Usamos tu vocabulario, tus casos reales y tus métricas de éxito.
                </p>
                <div className="flex flex-col gap-mento-sm">
                  <Link href="/demo" className="self-start text-body font-semibold text-mento-cta hover:text-mento-text transition-colors">
                    Hablar sobre una vertical a medida →
                  </Link>
                  <span className="text-caption text-mento-muted/50">
                    o escribinos a{' '}
                    <a href="mailto:hola@mento.lat" className="hover:text-mento-muted transition-colors underline underline-offset-2">
                      hola@mento.lat
                    </a>
                  </span>
                </div>
              </div>

              <div>
                <p className="text-caption font-bold text-mento-text uppercase tracking-widest mb-mento-md">
                  Lo que incluye una vertical personalizada
                </p>
                <ul className="flex flex-col gap-mento-md">
                  {customIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-mento-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-mento-cta flex-shrink-0" aria-hidden="true" />
                      <span className="text-body text-mento-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA final ── */}
      <Section variant="surface" className="border-t border-white/5">
        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-mento-lg">
            <h2 className="text-h2 font-bold text-mento-text">
              ¿Cuál es la conversación que tu equipo no sabe ganar todavía?
            </h2>
            <p className="text-body-lg text-mento-muted">
              Esa es exactamente la que Mento entrena.
            </p>
            <Button variant="primary" size="lg" href="/demo" className="px-mento-2xl">
              Solicitá la demo →
            </Button>
            <p className="text-caption text-mento-muted/50">
              30 minutos. Un escenario de tu industria. Sin PowerPoint.
            </p>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
