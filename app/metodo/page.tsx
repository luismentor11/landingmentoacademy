import React from 'react';
import Link from 'next/link';
import { Brain, RefreshCw, Zap, TrendingUp } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

// ─── data ────────────────────────────────────────────────────────────────────

const phases = [
  {
    number: '01',
    title: 'Inmersión y Contextualización',
    description:
      'Antes de simular, el participante recibe el escenario: quién es el interlocutor, cuál es el contexto, cuáles son los objetivos de la conversación. La IA configura la dificultad según el nivel del equipo. No es teoría. Es el briefing antes de entrar a la reunión.',
    tags: ['2-3 minutos', 'Configurable por rol'],
  },
  {
    number: '02',
    title: 'Simulación Activa con IA',
    description:
      'El participante conduce la conversación en tiempo real. La IA responde como un cliente, un colega o un interlocutor real, adaptando sus reacciones a cada decisión tomada. Sin guión rígido. Sin respuestas predeterminadas. El sistema es impredecible porque la realidad también lo es.',
    tags: ['Hiper-Realismo Adaptativo', 'IA multiagente', 'Sin límite de intentos'],
  },
  {
    number: '03',
    title: 'Debriefing y Feedback por Competencias',
    description:
      'Al terminar la simulación, el sistema analiza la conversación completa y entrega feedback específico: qué funcionó, qué falló, por qué, y cómo mejorar en el próximo intento. No mide si el módulo fue completado. Mide si la competencia fue demostrada.',
    tags: ['Feedback 360°', 'Métricas por competencia', 'Plan de mejora individual'],
  },
];

const principles = [
  {
    Icon: Brain,
    title: 'Activación de redes neuronales reales',
    text: 'Cuando una persona participa en una simulación, activa las mismas redes neuronales que activaría en la situación real. Eso crea memoria procedimental, no solo declarativa.',
    citation: 'Mariani, L. (2020). The Neurosciences Underlying the Models of Digital Role Play. SkillGym.',
  },
  {
    Icon: RefreshCw,
    title: 'El Ciclo de Kolb como arquitectura',
    text: 'El formato de Mento sigue las cuatro etapas del aprendizaje experiencial: experiencia concreta → observación reflexiva → conceptualización → experimentación activa. Cada sesión completa el ciclo.',
    citation: 'Adaptado de Kolb, D. A. (1984). Experiential Learning.',
  },
  {
    Icon: Zap,
    title: 'Feedback inmediato como corrector de patrones',
    text: 'La neurociencia demuestra que la corrección inmediata de errores previene la consolidación de patrones incorrectos en la memoria procedimental. Mento corrige en el momento, no 48 hs después.',
    citation: null,
  },
  {
    Icon: TrendingUp,
    title: 'Dificultad progresiva y adaptativa',
    text: 'El sistema calibra la complejidad según el desempeño real del participante. No hay dos sesiones iguales. La IA aumenta la presión cuando detecta que el participante está listo para el siguiente nivel.',
    citation: null,
  },
];

const comparisons = [
  {
    label: 'Mento Academy — Roleplay activo con IA',
    value: 'Hasta 90%',
    pct: 90,
    highlight: true,
    citation: '(Mariani / SkillGym, 2020)',
  },
  {
    label: 'E-learning tradicional (video pasivo)',
    value: '~24%',
    pct: 24,
    highlight: false,
    citation: '(Research.com, 2026 — 28 Video Training Statistics)',
  },
  {
    label: 'Capacitación presencial sin práctica posterior',
    value: '~15%',
    pct: 15,
    highlight: false,
    citation: '(curva del olvido de Ebbinghaus, 1885)',
  },
];

const differentiators = [
  {
    title: 'Hiper-Realismo Adaptativo',
    text: 'Los escenarios no son estáticos. La IA responde en tiempo real a cada decisión del participante, generando imprevisibilidad controlada. El entrenamiento refleja la realidad porque la simula, no la describe.',
    citation: null,
  },
  {
    title: 'Evaluación por competencia demostrada',
    text: 'El éxito no se mide por completar un módulo ni aprobar un examen teórico. Se mide por la capacidad demostrada de resolver la situación en el entorno simulado. Las organizaciones obtienen métricas reales sobre la preparación real de sus equipos.',
    citation: null,
  },
  {
    title: 'IA Multiagente Coordinada',
    text: 'La arquitectura usa tres agentes en sincronía: un Orquestador de Escenarios, un Generador de Personajes y un Agente de Evaluación. Eso permite profundidad narrativa y precisión evaluativa que los sistemas monolíticos no pueden alcanzar.',
    citation:
      'Alineado con Gartner Top Strategic Technology Trends 2026 — Sistemas Multiagente como tendencia estratégica prioritaria.',
  },
];

// ─── page ────────────────────────────────────────────────────────────────────

export default function MetodoPage() {
  return (
    <main className="min-h-screen bg-mento-bg">
      <Header />

      {/* ── Hero ── */}
      <Section variant="default" className="pt-mento-3xl pb-mento-xl border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex px-mento-md py-mento-xs bg-white/5 border border-white/10 rounded-full mb-mento-md">
              <span className="text-caption font-bold text-mento-accent uppercase tracking-widest">
                Nuestra Metodología
              </span>
            </div>
            <h1 className="text-display font-extrabold text-mento-text mb-mento-md leading-[1.05] tracking-tight">
              No alcanza con saber el qué.
              <br />
              <span className="text-mento-cta">El entrenamiento real es practicar el cómo.</span>
            </h1>
            <p className="text-h4 text-mento-muted leading-relaxed mb-mento-lg">
              Mento combina ciencia cognitiva con IA adaptativa para que tu equipo practique conversaciones difíciles antes de que sucedan en la realidad.
            </p>
            <Link href="/demo" className="text-body font-medium text-mento-cta hover:text-mento-text transition-colors">
              Ver la demo del producto →
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── Sección 1: Las tres fases ── */}
      <Section variant="surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-mento-2xl">
            <p className="text-caption font-semibold text-mento-muted uppercase tracking-widest mb-mento-sm">
              Cómo funciona
            </p>
            <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
              Tres fases. Un solo resultado: equipos que actúan bien bajo presión.
            </h2>
            <p className="text-caption text-mento-muted/70">
              Basado en el Ciclo de Aprendizaje Experiencial de David Kolb (1984), implementado con IA generativa multiagente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-lg">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="flex flex-col gap-mento-md p-mento-xl bg-mento-elevated border border-white/8 rounded-mento-lg hover:border-white/15 transition-colors"
              >
                <span className="text-[4rem] font-extrabold leading-none text-white/8 select-none">
                  {phase.number}
                </span>
                <div>
                  <h3 className="text-h4 font-bold text-mento-text mb-mento-sm">{phase.title}</h3>
                  <p className="text-body text-mento-muted">{phase.description}</p>
                </div>
                <div className="flex flex-wrap gap-mento-xs mt-auto pt-mento-sm">
                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-mento-sm py-1 rounded-mento-full bg-mento-primary/20 border border-mento-primary/30 text-caption font-medium text-mento-text/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Sección 2: Por qué funciona ── */}
      <Section variant="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-mento-2xl">
            <p className="text-caption font-semibold text-mento-muted uppercase tracking-widest mb-mento-sm">
              La lógica detrás del método
            </p>
            <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
              El cerebro aprende haciendo. No mirando.
            </h2>
            <p className="text-body-lg text-mento-muted">
              La neurociencia cognitiva lleva décadas demostrando lo mismo: la exposición pasiva a contenido genera retención mínima. La práctica activa en contextos realistas genera huellas de memoria profundas y transferibles al trabajo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-mento-lg">
            {principles.map(({ Icon, title, text, citation }) => (
              <div
                key={title}
                className="flex flex-col gap-mento-md p-mento-xl bg-mento-surface border border-white/8 rounded-mento-lg hover:border-white/15 transition-colors"
              >
                <div className="w-10 h-10 rounded-mento-md bg-mento-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-mento-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-h4 font-bold text-mento-text">{title}</h3>
                <p className="text-body text-mento-muted flex-1">{text}</p>
                {citation && (
                  <p className="text-[11px] text-mento-muted/50 italic border-t border-white/5 pt-mento-sm">
                    {citation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Sección 3: Comparativa ── */}
      <Section variant="surface">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-h3 font-bold text-mento-text mb-mento-xs">Efectividad comparada</h3>
            <p className="text-caption text-mento-muted/70 mb-mento-2xl">
              Retención de conocimiento a los 7 días
            </p>

            <div className="space-y-mento-xl">
              {comparisons.map(({ label, value, pct, highlight, citation }) => (
                <div key={label}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className={`text-body font-medium ${highlight ? 'text-mento-text' : 'text-mento-muted'}`}>
                      {label}
                    </span>
                    <span className={`text-body font-bold ${highlight ? 'text-mento-cta' : 'text-mento-muted'}`}>
                      {value}
                    </span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${pct}%`,
                        background: highlight ? 'var(--mento-cta)' : 'rgba(255,255,255,0.15)',
                      }}
                    />
                  </div>
                  <p className="text-[11px] text-mento-muted/50 italic">{citation}</p>
                </div>
              ))}
            </div>

            <p className="mt-mento-xl text-caption text-mento-muted/50 border-t border-white/5 pt-mento-md">
              Los valores de Mento Academy son proyectados en base a la metodología de roleplay activo. Resultados exactos varían según industria y equipo.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Sección 4: Diferenciadores ── */}
      <Section variant="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-mento-2xl">
            <h2 className="text-h2 font-bold text-mento-text">
              Lo que hace único al formato Mento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-lg">
            {differentiators.map(({ title, text, citation }) => (
              <div
                key={title}
                className="flex flex-col gap-mento-md p-mento-xl bg-mento-surface border border-white/8 rounded-mento-lg hover:border-white/15 transition-colors"
              >
                <h3 className="text-h4 font-bold text-mento-text">{title}</h3>
                <p className="text-body text-mento-muted flex-1">{text}</p>
                {citation && (
                  <p className="text-[11px] text-mento-muted/50 italic border-t border-white/5 pt-mento-sm">
                    {citation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA final ── */}
      <Section variant="surface" className="border-t border-white/5">
        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-mento-lg">
            <h2 className="text-h2 font-bold text-mento-text">
              ¿Querés ver el método en acción?
            </h2>
            <p className="text-body-lg text-mento-muted">
              Una demo de 30 minutos con un escenario de tu industria es más convincente que cualquier documento.
            </p>
            <Button variant="primary" size="lg" href="/demo" className="px-mento-2xl">
              Solicitá la demo →
            </Button>
            <Link href="/ciencia" className="text-body text-mento-muted hover:text-mento-text transition-colors">
              Leer el respaldo científico →
            </Link>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
