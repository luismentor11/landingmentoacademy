import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, TrendingUp, Users, Clock, Globe, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

export const SocialProofSection = () => {
  return (
    <Section className="relative overflow-hidden bg-[#0B1827] pt-mento-4xl pb-mento-4xl">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Glows */}
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-mento-primary/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mento-accent/5 blur-[120px] rounded-full" 
        />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-mento-3xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-mento-cta text-caption font-bold uppercase tracking-[0.2em] mb-mento-md">
            Tracción y Metodología
          </span>
          <h2 className="text-h2 lg:text-display font-bold text-white tracking-tight mb-mento-md leading-tight">
            Primeros equipos. <br />Resultados <span className="text-mento-cta">exponenciales.</span>
          </h2>
          <p className="text-body-lg text-mento-muted leading-relaxed max-w-2xl mx-auto">
            Mento no es solo software; es un sistema validado que transforma la curva de aprendizaje de tu organización con la potencia de la IA generativa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-mento-2xl items-stretch">
          {/* ── Left: Early Access Founder Card ── */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-mento-xl p-mento-2xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-mento-3xl relative overflow-hidden group shadow-2xl noise premium-blur glass-border premium-glow-white"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-mento-cta/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="flex flex-col gap-mento-lg relative z-10 h-full">
              <div className="inline-flex self-start items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-mento-cta animate-pulse shadow-[0_0_10px_rgba(var(--mento-cta-rgb),0.5)]" />
                <span className="text-caption font-bold text-white/80 uppercase tracking-widest">Acceso Anticipado</span>
              </div>

              <h3 className="text-h3 font-bold text-white leading-tight mt-mento-sm">
                Sumate como <span className="text-mento-cta">Cliente Fundador</span>
              </h3>
              
              <p className="text-body-lg text-mento-muted leading-relaxed italic border-l-2 border-mento-cta/30 pl-mento-md py-mento-xs">
                &quot;Estamos seleccionando a los primeros 10 partners institucionales para co-diseñar el futuro del entrenamiento con IA. Onboarding artesanal y precio preferencial de por vida.&quot;
              </p>

              <div className="flex items-center gap-4 py-mento-lg border-y border-white/5 mt-auto">
                <div className="w-14 h-14 rounded-full border-2 border-mento-cta/30 overflow-hidden shadow-2xl relative">
                  <Image 
                    src="/student_sales_avatar_1778946257994.png" 
                    alt="Founder" 
                    fill
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mento-bg/40 to-transparent z-10" />
                </div>

                <div>
                  <p className="text-body font-bold text-white">Programa de Partners 2026</p>
                  <p className="text-caption text-mento-cta font-extrabold uppercase tracking-tighter">Solo 4 cupos disponibles este trimestre</p>
                </div>
              </div>

              <Link
                href="/demo"
                className="group/link flex items-center justify-between p-mento-md rounded-mento-2xl bg-white/5 border border-white/10 hover:border-mento-cta/50 hover:bg-white/[0.08] transition-all"
              >
                <span className="text-body font-bold text-white group-hover/link:text-mento-cta transition-colors">Solicitar mi lugar en la cohorte</span>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover/link:bg-mento-cta group-hover/link:border-mento-cta transition-all text-white">
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* ── Right: Impact Comparison ── */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-mento-lg"
          >
            <div className="flex items-center gap-3 mb-mento-sm px-mento-md">
              <TrendingUp className="text-mento-cta" size={20} />
              <h3 className="text-caption font-bold text-white/50 uppercase tracking-[0.2em]">
                Impacto Proyectado: IA vs Tradicional
              </h3>
            </div>
            
            <div className="space-y-mento-md">
              <ImpactCard 
                label="Tiempo de Rampa (Onboarding)" 
                traditional="4-6 meses" 
                mento="6-8 semanas" 
                improvement="-65%" 
                Icon={Clock}
                delay={0.1}
              />
              <ImpactCard 
                label="Costo por Sesión de Roleplay" 
                traditional="USD 150+" 
                mento="USD <1" 
                improvement="-99%" 
                Icon={Users}
                delay={0.2}
              />
              <ImpactCard 
                label="Capacidad de Escalamiento" 
                traditional="Limitada a Trainers" 
                mento="Infinita y 24/7" 
                improvement="∞" 
                Icon={Globe}
                delay={0.3}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

const ImpactCard = ({ label, traditional, mento, improvement, Icon, delay }: { 
  label: string, 
  traditional: string, 
  mento: string, 
  improvement: string,
  Icon: any,
  delay: number
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="p-mento-xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-mento-3xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 group noise premium-blur glass-border premium-glow-white overflow-hidden relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-mento-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    
    <div className="relative z-10">
      <div className="flex items-center justify-between gap-4 mb-mento-lg">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-mento-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-mento-cta/10 group-hover:border-mento-cta/30 transition-all duration-500">
            <Icon size={24} className="text-white/60 group-hover:text-mento-cta transition-colors" />
          </div>
          <p className="text-h4 font-bold text-white tracking-tight">{label}</p>
        </div>
        <div className="px-4 py-1.5 rounded-full bg-mento-cta/20 border border-mento-cta/30 text-mento-cta text-caption font-black shadow-[0_0_20px_rgba(var(--mento-cta-rgb),0.2)]">
          {improvement}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-mento-md rounded-mento-2xl bg-black/40 border border-white/5">
          <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-2">Tradicional</p>
          <p className="text-body font-bold text-white/60">{traditional}</p>
        </div>
        <div className="p-mento-md rounded-mento-2xl bg-mento-cta/10 border border-mento-cta/20 shadow-[inset_0_0_20px_rgba(var(--mento-cta-rgb),0.05)]">
          <p className="text-[10px] text-mento-cta/70 uppercase font-black tracking-widest mb-2">Con Mento</p>
          <p className="text-body-lg font-black text-white">{mento}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

