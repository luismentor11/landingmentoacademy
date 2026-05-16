import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Mentito } from '../ui/Mentito';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <Section className="relative overflow-hidden pt-mento-2xl pb-mento-4xl bg-[#0B1827] noise">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('/professional_team_action_1778946550555.png')] bg-cover bg-center opacity-[0.04] grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1827]/60 via-[#0B1827] to-[#0B1827]" />
        
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-mento-accent/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-mento-primary/10 blur-[120px] rounded-full" 
        />
        
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-mento-2xl items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-mento-lg text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex self-center lg:self-start items-center px-mento-md py-mento-xs bg-white/5 border border-white/10 rounded-mento-full backdrop-blur-md">
              <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">
                Roleplay con IA · B2B · Formación de Alto Nivel
              </span>
            </div>

            <h1 className="text-h1 lg:text-[4rem] font-black text-white leading-[0.9] tracking-tighter">
              Tu equipo sabe el qué.
              <br />
              <span className="text-gradient-accent">Mento los entrena en el cómo.</span>
            </h1>

            <p className="text-body-lg text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Plataforma de simulación con IA para equipos de ventas, atención al cliente y negociación. Practicá conversaciones difíciles antes de que cuesten dinero real.
            </p>

            <div className="pt-mento-sm flex flex-col items-center lg:items-start gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-mento-cta to-mento-accent blur-xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 rounded-full" />
                <a
                  href="/demo"
                  className="relative flex items-center justify-center gap-3 px-mento-2xl py-mento-lg bg-mento-cta text-white text-body-lg font-black rounded-mento-full transition-all active:scale-[0.98] shadow-[0_0_40px_rgba(var(--mento-cta-rgb),0.3)]"
                >
                  Solicitá una demo para tu empresa
                  <span className="text-2xl leading-none">→</span>
                </a>
              </div>

              <div className="flex items-center gap-3 text-caption text-white/40 font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Configuración en 48 hs · Soporte incluido
              </div>
            </div>

            <div className="pt-mento-xl flex flex-wrap items-center justify-center lg:justify-start gap-x-mento-xl gap-y-mento-md">
              <SocialProofItem text="Ciclo de Kolb" />
              <SocialProofItem text="IA Adaptativa" />
              <SocialProofItem text="Feedback 360°" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative order-1 lg:order-2 perspective-2000"
          >
            <div className="relative z-20">
              <DemoPlaceholder />
            </div>
            {/* Decorative background for mockup */}
            <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-transparent blur-3xl opacity-20 pointer-events-none -z-10" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

const SocialProofItem = ({ text }: { text: string }) => (
  <span className="inline-flex items-center gap-mento-sm text-caption font-black text-white/50 uppercase tracking-[0.2em]">
    <div className="w-5 h-5 rounded-full bg-mento-cta/20 flex items-center justify-center border border-mento-cta/30">
      <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="text-mento-cta">
        <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    {text}
  </span>
);

const DemoPlaceholder = () => (
  <div className="noise relative aspect-[4/3.2] w-full max-w-xl mx-auto rounded-[3rem] bg-white/[0.02] backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden group premium-blur glass-border premium-glow-white">
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03] pointer-events-none" />

    {/* Header of the mockup */}
    <div className="flex items-center justify-between px-mento-xl py-mento-lg border-b border-white/10 bg-white/[0.03]">
      <div className="flex items-center gap-mento-md">
        <div className="flex -space-x-4">
          <div className="w-10 h-10 rounded-full border-2 border-[#162539] overflow-hidden shadow-2xl relative z-20">
            <Image 
              src="/mentor_ai_avatar_1778946241135.png" 
              alt="AI Coach" 
              fill
              className="object-cover" 
            />
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-[#162539] overflow-hidden shadow-2xl relative z-10">
            <Image 
              src="/student_sales_avatar_1778946257994.png" 
              alt="Student" 
              fill
              className="object-cover" 
            />
          </div>
        </div>
        <div>
          <span className="block text-[12px] text-white font-black uppercase tracking-widest">Sesión en vivo</span>
          <span className="block text-[10px] text-white/40 font-bold uppercase tracking-widest">Manejo de Objeciones</span>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-white/10" />
        <span className="w-3 h-3 rounded-full bg-white/10" />
        <span className="w-3 h-3 rounded-full bg-mento-cta/40 animate-pulse" />
      </div>
    </div>

    {/* Chat Content */}
    <div className="relative p-mento-xl space-y-mento-xl">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="flex items-start gap-mento-lg"
      >
        <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 shadow-2xl relative">
          <Image 
            src="/mentor_ai_avatar_1778946241135.png" 
            alt="AI Coach" 
            fill
            className="object-cover" 
          />
        </div>
        <div className="max-w-[85%] px-mento-xl py-mento-lg rounded-[2rem] rounded-tl-none bg-white/[0.05] border border-white/5 text-body font-medium text-white/90 shadow-2xl backdrop-blur-md">
          &quot;Entiendo que el presupuesto sea limitado. Pero ¿qué pasaría si logramos cerrar un 15% más de estas llamadas?&quot;
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8 }}
        className="flex items-start justify-end gap-mento-lg"
      >
        <div className="max-w-[85%] px-mento-xl py-mento-lg rounded-[2rem] rounded-tr-none bg-mento-cta text-body font-black text-white shadow-[0_15px_40px_rgba(var(--mento-cta-rgb),0.4)] border border-white/10">
          &quot;Ese 15% representaría un aumento masivo en mi facturación mensual...&quot;
        </div>
        <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 shadow-2xl relative">
          <Image 
            src="/student_sales_avatar_1778946257994.png" 
            alt="Student" 
            fill
            className="object-cover" 
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="flex items-start gap-mento-lg"
      >
        <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 shadow-2xl flex items-center justify-center bg-white/5">
          <Mentito size="sm" />
        </div>
        <div className="max-w-[85%] px-mento-xl py-mento-lg rounded-[2rem] rounded-tl-none bg-white/[0.02] text-body text-white/40 italic font-medium flex items-center gap-4">
          <span>Mentito está analizando tu tono de voz...</span>
          <span className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-mento-cta animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-mento-cta animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 rounded-full bg-mento-cta animate-bounce [animation-delay:0.4s]" />
          </span>
        </div>
      </motion.div>
    </div>

    {/* Floating Feedback Card */}
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
      className="absolute bottom-6 left-6 right-6 p-mento-md rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-3xl flex items-center gap-4"
    >
      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 border border-green-500/30">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="text-[10px] font-black text-white uppercase tracking-widest">Feedback de Empatía</p>
        <p className="text-body font-bold text-white/80">Tono excelente. Seguí explorando el impacto.</p>
      </div>
    </motion.div>
  </div>
);
