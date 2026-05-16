import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, PlayCircle, BarChart } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Inmersión y Contextualización',
    description:
      'Antes de simular, el participante comprende el escenario: el cliente, el contexto, los objetivos de la conversación. La IA presenta el caso con el nivel de dificultad configurado para ese equipo.',
    tags: ['Duración: 2-3 min'],
  },
  {
    number: '02',
    title: 'Simulación Activa con IA',
    description:
      'El participante conduce la conversación. La IA responde como un cliente o interlocutor real, adaptando sus reacciones en tiempo real según las decisiones tomadas. Sin guión rígido. Sin respuestas predecibles.',
    tags: ['Hiper-Realismo Adaptativo', 'IA multiagente'],
  },
  {
    number: '03',
    title: 'Debriefing y Feedback por Competencias',
    description:
      'Al terminar la simulación, el sistema analiza el desempeño y entrega feedback específico: qué funcionó, qué falló y por qué. No mide si terminó el módulo. Mide si demostró la competencia.',
    tags: ['Feedback 360°', 'Métricas reales'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

export const HowItWorksSection = () => {
  return (
    <Section className="bg-[#0B1827] relative overflow-hidden py-mento-4xl">
      {/* Cinematic Background Visuals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layered Action Anchor */}
        <div className="absolute inset-0 bg-[url('/professional_team_action_1778946550555.png')] bg-cover bg-center opacity-[0.03] grayscale mix-blend-overlay" />
        
        {/* Dynamic Glow Orbs */}
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.2, 1],
            x: [0, -50, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-mento-cta/10 blur-[180px] -translate-y-1/2 rounded-full" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.02, 0.06, 0.02],
            scale: [1.2, 1, 1.2],
            x: [0, 50, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-mento-primary/10 blur-[150px] rounded-full" 
        />

        {/* Noise & Grid Layer */}
        <div className="absolute inset-0 noise opacity-[0.3]" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M80 80 L0 80 0 0' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }} 
        />
      </div>

      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-mento-3xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-mento-cta text-caption font-bold uppercase tracking-[0.2em] mb-mento-sm"
          >
            Nuestra Metodología
          </motion.span>
          <h2 className="text-h2 lg:text-display font-bold text-white mb-mento-md tracking-tight leading-tight">
            Tres fases. Una sola consecuencia: <span className="text-gradient-accent">maestría.</span>
          </h2>
          <p className="text-body-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Basado en el Ciclo de Aprendizaje Experiencial de David Kolb e implementado con IA generativa adaptativa.
            <Link href="/ciencia" className="ml-2 text-mento-cta hover:text-white transition-colors border-b border-mento-cta/30">
              Ver la ciencia detrás →
            </Link>
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-mento-xl relative"
        >
          {/* Connector line desktop with dynamic flow effect */}
          <div className="hidden md:block absolute top-40 left-[10%] right-[10%] h-px bg-white/5 overflow-hidden" aria-hidden="true">
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-mento-cta/40 to-transparent" 
            />
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={step.number} 
              variants={cardVariants}
              className="group relative flex flex-col gap-mento-lg p-mento-3xl bg-white/[0.01] premium-blur glass-border rounded-[2rem] hover:bg-white/[0.03] transition-all duration-700 noise premium-glow-white overflow-hidden"
            >
              {/* Step Number Background - Ultra Stylized */}
              <div className="absolute -top-8 -right-8 text-[12rem] font-black leading-none text-white/[0.01] select-none group-hover:text-white/[0.03] transition-all duration-1000 font-mono tracking-tighter">
                {step.number}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-mento-2xl">
                   <div className="w-16 h-16 rounded-mento-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-h3 font-bold group-hover:bg-mento-cta group-hover:border-mento-cta group-hover:text-mento-bg group-hover:scale-110 transition-all duration-500 shadow-2xl">
                    {index + 1}
                   </div>
                   
                   {/* IA Interaction Indicator */}
                   <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 opacity-40 group-hover:opacity-100 group-hover:bg-mento-cta/10 group-hover:border-mento-cta/20 transition-all duration-500">
                      <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full border-2 border-[#0B1827] overflow-hidden shadow-lg relative">
                          <Image 
                            src="/mentor_ai_avatar_1778946241135.png" 
                            alt="IA" 
                            fill
                            className="object-cover" 
                          />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-[#0B1827] overflow-hidden shadow-lg relative">
                          <Image 
                            src="/student_sales_avatar_1778946257994.png" 
                            alt="User" 
                            fill
                            className="object-cover" 
                          />
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest group-hover:text-mento-cta">Simulación</span>
                   </div>
                </div>

                
                <h3 className="text-h3 font-bold text-white mb-4 group-hover:text-gradient-accent transition-all duration-500 tracking-tighter leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-body text-white/40 leading-relaxed mb-mento-xl min-h-[120px] group-hover:text-white/70 transition-colors font-light">
                  {step.description}
                </p>

                <div className="mt-auto pt-mento-xl border-t border-white/5 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] uppercase tracking-[0.2em] font-bold text-white/20 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/5 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Advanced Decorative Glow */}
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-mento-cta/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-mento-3xl text-center"
        >
          <Link
            href="/metodo"
            className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-mento-full bg-white/5 border border-white/10 text-white text-body font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl"
          >
            <span>Explorar metodología completa</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
};
