import React from 'react';
import Link from 'next/link';
import { Brain, RefreshCw, Zap, BookOpen, Fingerprint, Target } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

// ─── data ────────────────────────────────────────────────────────────────────

const neuroPrinciples = [
  {
    Icon: Brain,
    title: 'La simulación activa las mismas redes que la situación real',
    text: 'Cuando una persona participa activamente en una simulación de roleplay, activa redes neuronales similares a las que se activarían en la conversación real. Esto permite la creación de huellas de memoria profundas y duraderas — el mismo tipo de memoria que construye un músico cuando practica, o un atleta cuando entrena.',
    citation: 'Mariani, L. (2020). The Neurosciences Underlying the Models of Digital Role Play. SkillGym.',
  },
  {
    Icon: RefreshCw,
    title: 'El cerebro olvida el 70% en 24 hs si no practica',
    text: 'La curva del olvido de Ebbinghaus (1885) demuestra que sin repetición activa, el conocimiento se pierde rápidamente. Los formatos de video pasivo tienen tasas de retención de 15-24% a los 7 días. El roleplay activo, al forzar la recuperación y aplicación del conocimiento en el momento de la simulación, revierte ese deterioro.',
    stat: '68% de los empleados admite no prestar atención a los videos de capacitación.',
    statCitation: 'Research.com (2026). 28 Video Training Statistics.',
    citation: null,
  },
  {
    Icon: Zap,
    title: 'La corrección en el momento previene el error como hábito',
    text: 'La neurociencia demuestra que la corrección inmediata de errores previene su consolidación en la memoria procedimental. Cuando un participante recibe feedback 48 hs después de cometer un error conversacional, el patrón incorrecto ya comenzó a fijarse. Mento corrige en tiempo real, antes de que el error se vuelva hábito.',
    citation: null,
  },
];

const kolbStages = [
  {
    number: '01',
    stage: 'Experiencia Concreta',
    what: '¿Qué pasó en la conversación?',
    inMento: 'La sesión de roleplay activo con IA',
  },
  {
    number: '02',
    stage: 'Observación Reflexiva',
    what: '¿Qué funcionó? ¿Qué falló?',
    inMento: 'El debriefing post-simulación',
  },
  {
    number: '03',
    stage: 'Conceptualización Abstracta',
    what: '¿Por qué funcionó o falló?',
    inMento: 'El feedback por competencias del Agente de Evaluación',
  },
  {
    number: '04',
    stage: 'Experimentación Activa',
    what: 'Aplicar lo aprendido con mayor dificultad.',
    inMento: 'El próximo escenario con nivel de complejidad elevado',
  },
];

const andragogyPrinciples = [
  {
    Icon: Target,
    title: 'Los adultos aprenden para resolver problemas reales, no para acumular teoría',
    text: 'Un vendedor no necesita saber la teoría detrás de la negociación — necesita saber qué decir cuando el cliente dice "es muy caro". Mento no enseña conceptos abstractos. Entrena respuestas específicas a situaciones específicas.',
  },
  {
    Icon: BookOpen,
    title: 'El conocimiento nuevo se ancla en lo que el participante ya sabe hacer',
    text: 'Los escenarios de Mento están diseñados a partir de situaciones que el participante ya reconoce: clientes reales, objeciones frecuentes, contextos conocidos. Eso reduce la resistencia al aprendizaje y acelera la transferencia al trabajo real.',
  },
  {
    Icon: Fingerprint,
    title: 'El participante elige el ritmo. El sistema mide la competencia.',
    text: 'A diferencia de la capacitación presencial donde todos avanzan juntos, Mento permite que cada persona practique hasta demostrar la competencia — no hasta completar el módulo. Eso respeta la autonomía del adulto y entrega a la organización una métrica real: ¿está listo o no está listo?',
  },
];

const trendRows = [
  {
    trend: 'Sistemas Multiagente (Gartner 2026)',
    requirement: 'Coordinación de IA para tareas complejas',
    mento: 'Arquitectura modular: Orquestador + Generador de Personajes + Agente de Evaluación',
  },
  {
    trend: 'Simulación Inmersiva',
    requirement: 'Práctica real sin riesgo',
    mento: 'Hiper-Realismo Adaptativo mediante roleplay dinámico',
  },
  {
    trend: 'Analítica en Tiempo Real',
    requirement: 'Feedback inmediato para acelerar el aprendizaje',
    mento: 'Agente de Evaluación que mide competencias durante la sesión',
  },
  {
    trend: 'IA-Native Learning',
    requirement: 'Integración nativa de IA en el flujo de trabajo',
    mento: 'Formato diseñado desde cero para aprovechar capacidades de LLMs',
  },
];

const references = [
  'Mariani, L. (2020). The Neurosciences Underlying the Models of Digital Role Play. SkillGym.',
  'Kolb, D. A. (1984). Experiential Learning: Experience as the Source of Learning and Development. Prentice Hall.',
  'isEazy (2026). Aprendizaje Experiencial: Guía completa para 2026.',
  'Gartner (2025). Top Strategic Technology Trends for 2026.',
  'Easygenerator (2026). Best AI roleplay tools for corporate training in 2026.',
  'Research.com (2026). 28 Video Training Statistics: 2026 Data, Trends & Predictions.',
  'Knowles, M. (1980). The Modern Practice of Adult Education: Andragogy versus Pedagogy.',
  'Ergashev, S. (2025). The Role of Artificial Intelligence in Digital Education Platforms. O\'ZBEKISTONDA FANLARARO TADQIQOTLAR.',
  'Jenova.ai (n.d.). Role-Playing con IA para la Educación.',
];

// ─── page ────────────────────────────────────────────────────────────────────

export default function CienciaPage() {
  return (
    <main className="min-h-screen bg-mento-bg">
      <Header />

      {/* ── Hero ── */}
      <Section variant="default" className="pt-mento-3xl pb-mento-xl border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex px-mento-md py-mento-xs bg-white/5 border border-white/10 rounded-full mb-mento-md">
              <span className="text-caption font-bold text-mento-accent uppercase tracking-widest">
                Validación Científica
              </span>
            </div>
            <h1 className="text-display font-extrabold text-mento-text mb-mento-md leading-[1.05] tracking-tight">
              No es intuición.
              <br />
              <span className="text-mento-cta">Es ciencia del aprendizaje aplicada.</span>
            </h1>
            <p className="text-h4 text-mento-muted leading-relaxed">
              El roleplay con IA no es un formato nuevo por moda. Es la implementación más directa de lo que la neurociencia cognitiva y la pedagogía llevan décadas demostrando sobre cómo los adultos desarrollan habilidades complejas.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Sección 1: Neurociencia ── */}
      <Section variant="surface">
        <Container>
          <div className="max-w-3xl mb-mento-2xl">
            <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
              Neurobiología del aprendizaje conversacional
            </h2>
            <p className="text-body-lg text-mento-muted">
              Las habilidades conversacionales — ventas, negociación, empatía bajo presión — no son conocimiento declarativo (saber que algo existe). Son conocimiento procedimental (saber hacerlo automáticamente). Y el conocimiento procedimental solo se construye con práctica real, no con exposición pasiva.
            </p>
          </div>

          <div className="flex flex-col gap-mento-lg">
            {neuroPrinciples.map(({ Icon, title, text, stat, statCitation, citation }) => (
              <div
                key={title}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-mento-xl p-mento-xl bg-mento-elevated border border-white/8 rounded-mento-lg"
              >
                <div className="flex flex-col gap-mento-md">
                  <div className="w-10 h-10 rounded-mento-md bg-mento-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-mento-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-h4 font-bold text-mento-text">{title}</h3>
                </div>
                <div className="flex flex-col gap-mento-md">
                  <p className="text-body text-mento-muted">{text}</p>
                  {stat && (
                    <div className="p-mento-md bg-mento-surface border border-mento-cta/20 rounded-mento-lg">
                      <p className="text-body font-semibold text-mento-text mb-1">{stat}</p>
                      <p className="text-[11px] text-mento-muted/50 italic">{statCitation}</p>
                    </div>
                  )}
                  {citation && (
                    <p className="text-[11px] text-mento-muted/50 italic border-t border-white/5 pt-mento-sm">
                      {citation}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Sección 2: Ciclo de Kolb ── */}
      <Section variant="default">
        <Container>
          <div className="max-w-3xl mb-mento-2xl">
            <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
              La arquitectura pedagógica: el Ciclo de Aprendizaje Experiencial
            </h2>
            <p className="text-body-lg text-mento-muted">
              El formato de Mento no fue diseñado arbitrariamente. Sigue las cuatro etapas del modelo de David Kolb (1984), el marco de referencia más influyente en pedagogía corporativa moderna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-mento-md mb-mento-xl">
            {kolbStages.map(({ number, stage, what, inMento }) => (
              <div
                key={number}
                className="flex flex-col gap-mento-md p-mento-lg bg-mento-surface border border-white/8 rounded-mento-lg hover:border-white/15 transition-colors"
              >
                <span className="text-[3rem] font-extrabold leading-none text-white/8 select-none">
                  {number}
                </span>
                <div>
                  <p className="text-caption font-bold text-mento-cta uppercase tracking-wide mb-mento-xs">
                    {stage}
                  </p>
                  <p className="text-body text-mento-muted mb-mento-sm italic">{what}</p>
                  <p className="text-caption font-medium text-mento-text border-t border-white/5 pt-mento-sm">
                    → {inMento}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-mento-muted/50 italic">
            Kolb, D. A. (1984). Experiential Learning: Experience as the Source of Learning and Development. Prentice Hall. Adaptación metodológica: isEazy (2026).
          </p>
        </Container>
      </Section>

      {/* ── Sección 3: Andragogía ── */}
      <Section variant="surface">
        <Container>
          <div className="max-w-3xl mb-mento-2xl">
            <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
              Andragogía: cómo aprenden los adultos en entornos profesionales
            </h2>
            <p className="text-body-lg text-mento-muted">
              Los adultos en entornos de trabajo tienen necesidades de aprendizaje radicalmente distintas a las de un estudiante. Malcolm Knowles (1980) sistematizó los principios de la Andragogía — y el formato de Mento está diseñado en función de ellos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-lg">
            {andragogyPrinciples.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="flex flex-col gap-mento-md p-mento-xl bg-mento-elevated border border-white/8 rounded-mento-lg hover:border-white/15 transition-colors"
              >
                <div className="w-10 h-10 rounded-mento-md bg-mento-primary/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-mento-cta" strokeWidth={1.75} />
                </div>
                <h3 className="text-h4 font-bold text-mento-text">{title}</h3>
                <p className="text-body text-mento-muted">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Sección 4: Tendencias globales ── */}
      <Section variant="default">
        <Container>
          <div className="max-w-3xl mb-mento-2xl">
            <h2 className="text-h2 font-bold text-mento-text mb-mento-md">
              Mento en el contexto del mercado global 2025-2026
            </h2>
            <p className="text-body-lg text-mento-muted">
              El formato de Mento no es una apuesta a ciegas. Se alinea con las tendencias estratégicas que están redefiniendo la capacitación corporativa a nivel global.
            </p>
          </div>

          {/* Tabla de alineación */}
          <div className="overflow-x-auto mb-mento-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-mento-md pr-mento-lg text-caption font-bold text-mento-muted uppercase tracking-widest">Tendencia</th>
                  <th className="py-mento-md pr-mento-lg text-caption font-bold text-mento-muted uppercase tracking-widest">Requerimiento del mercado</th>
                  <th className="py-mento-md text-caption font-bold text-mento-muted uppercase tracking-widest">Respuesta de Mento</th>
                </tr>
              </thead>
              <tbody>
                {trendRows.map(({ trend, requirement, mento }, i) => (
                  <tr key={trend} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                    <td className="py-mento-md pr-mento-lg text-body font-semibold text-mento-text align-top">{trend}</td>
                    <td className="py-mento-md pr-mento-lg text-body text-mento-muted align-top">{requirement}</td>
                    <td className="py-mento-md text-body text-mento-muted align-top">{mento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-mento-xs mb-mento-lg">
            <p className="text-[11px] text-mento-muted/50 italic">Gartner (2025). Top Strategic Technology Trends for 2026.</p>
            <p className="text-[11px] text-mento-muted/50 italic">Easygenerator (2026). Best AI roleplay tools for corporate training.</p>
          </div>

          {/* Stat destacado */}
          <div className="p-mento-xl bg-mento-surface border border-mento-cta/20 rounded-mento-lg max-w-2xl">
            <p className="text-h4 font-semibold text-mento-text mb-mento-sm">
              &quot;Para 2026, el mercado de herramientas de roleplay con IA se consolidó como el método preferido para el desarrollo de soft skills en organizaciones.&quot;
            </p>
            <p className="text-[11px] text-mento-muted/50 italic">
              Easygenerator (2026). Best AI roleplay tools for corporate training.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Referencias ── */}
      <Section variant="surface" className="border-t border-white/5">
        <Container>
          <details className="group">
            <summary className="flex items-center gap-mento-sm cursor-pointer list-none text-caption font-bold text-mento-muted uppercase tracking-widest mb-mento-md select-none">
              <span className="transition-transform duration-200 group-open:rotate-90">›</span>
              Referencias bibliográficas
            </summary>
            <ol className="flex flex-col gap-mento-sm mt-mento-md pl-mento-md border-l border-white/8">
              {references.map((ref, i) => (
                <li key={i} className="text-[11px] text-mento-muted/60">
                  <span className="font-bold text-mento-muted/40 mr-2">[{i + 1}]</span>
                  {ref}
                </li>
              ))}
            </ol>
          </details>
        </Container>
      </Section>

      {/* ── CTA final ── */}
      <Section variant="default" className="border-t border-white/5">
        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-mento-lg">
            <h2 className="text-h2 font-bold text-mento-text">
              La ciencia respalda el método.
            </h2>
            <p className="text-body-lg text-mento-muted">
              Una demo de 30 minutos te muestra si funciona para tu equipo.
            </p>
            <Button variant="primary" size="lg" href="/demo" className="px-mento-2xl">
              Solicitá la demo →
            </Button>
            <Link href="/metodo" className="text-body text-mento-muted hover:text-mento-text transition-colors">
              Leer sobre el método completo →
            </Link>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
