import React from 'react';
import Link from 'next/link';
import { Brain, RefreshCw, TrendingUp, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

const pillars = [
  {
    Icon: Brain,
    title: 'El cerebro aprende haciendo, no mirando',
    body: 'Cuando una persona participa en una simulación, activa las mismas redes neuronales que activaría en la situación real. Esto genera "huellas de memoria" más profundas y duraderas.',
    citation:
      'Mariani, L. (2020). The Neurosciences Underlying the Models of Digital Role Play.',
  },
  {
    Icon: RefreshCw,
    title: 'El Ciclo de Kolb como arquitectura',
    body: 'Mento sigue las cuatro etapas del Aprendizaje Experiencial: experiencia concreta, observación reflexiva, conceptualización abstracta y experimentación activa.',
    citation: 'Kolb, D. A. (1984). Experiential Learning. Adaptado para Mento (2026).',
  },
  {
    Icon: TrendingUp,
    title: 'El mercado migra al roleplay con IA',
    body: 'Las empresas abandonan los videos estáticos —donde el 68% de los empleados admite no prestar atención— en favor de simulaciones interactivas de alto impacto.',
    citation:
      'Easygenerator (2026) / Research.com (2026). 28 Video Training Statistics.',
  },
];

export const ScienceSection = () => {
  return (
    <Section variant="default" className="relative overflow-hidden py-mento-3xl border-y border-white/5 bg-[#0B1827]">
      {/* Premium Background Visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('/professional_team_action_1778946550555.png')] bg-cover bg-center opacity-[0.04] grayscale scale-110 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1827] via-[#0B1827]/90 to-[#0B1827]" />
        
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.12, 0.05],
            x: [0, 60, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-mento-accent/20 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.08, 0.03],
            x: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-mento-primary/20 blur-[130px] rounded-full" 
        />
        
        {/* Cinematic Texture */}
        <div className="absolute inset-0 noise opacity-[0.4]" />
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 L40 40 L40 0' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }} 
        />
      </div>

      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-mento-3xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-mento-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-mento-md"
          >
            The Science of Practice
          </motion.span>
          <h2 className="text-h2 lg:text-display font-bold text-white mb-mento-md tracking-tighter leading-tight">
            No es intuición. Es ciencia <br />del aprendizaje <span className="text-gradient-accent">aplicada.</span>
          </h2>
          <p className="text-body-lg text-white/40 leading-relaxed max-w-2xl mx-auto font-light">
            Mento es la materialización de lo que la neurociencia demuestra: el cerebro adulto integra habilidades críticas a través de la simulación de alto impacto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-xl">
          {pillars.map(({ Icon, title, body, citation }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative flex flex-col gap-mento-lg p-mento-2xl bg-white/[0.01] premium-blur glass-border rounded-mento-3xl hover:bg-white/[0.04] transition-all duration-700 premium-glow-white noise"
            >
              <div className="w-16 h-16 rounded-mento-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-110 group-hover:bg-mento-accent/20 group-hover:border-mento-accent/40 transition-all duration-500 shadow-2xl">
                <Icon size={28} className="text-white group-hover:text-mento-accent transition-colors duration-500" strokeWidth={1.5} />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-h4 font-bold text-white leading-tight tracking-tight pr-4 group-hover:text-gradient-accent transition-all duration-500">
                  {title}
                </h3>
                
                <p className="text-body-sm text-white/40 leading-relaxed group-hover:text-white/70 transition-all duration-500">
                  {body}
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] leading-relaxed">
                  <span className="text-mento-accent/40 font-bold tracking-widest">REFERENCIA CIENTÍFICA:</span> <br />
                  {citation}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-1.5 h-10 bg-gradient-to-b from-mento-accent to-transparent rounded-full shadow-[0_0_15px_rgba(var(--mento-accent-rgb),0.5)]" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-mento-3xl text-center"
        >
          <Link
            href="/ciencia"
            className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full bg-white text-mento-bg text-body font-bold hover:scale-105 transition-all duration-500 shadow-2xl shadow-white/10"
          >
            <span className="relative z-10">Explorar White Paper</span>
            <ChevronRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-mento-muted/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          
          <p className="mt-10 text-[10px] text-white/10 font-mono uppercase tracking-[0.5em]">
            Mentora Academy © 2026 / Science & Tech Dept.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

