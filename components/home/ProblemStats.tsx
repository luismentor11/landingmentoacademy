import React from 'react';
import { Target, Timer, TrendingDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

const painPoints = [
  {
    icon: Target,
    stat: '68%',
    statLabel: 'de empleados no presta atención a videos de capacitación',
    source: '(Research.com, 2026)',
    description:
      'El formato pasivo no funciona para habilidades conversacionales. Ver cómo se hace no es lo mismo que practicarlo.',
  },
  {
    icon: Timer,
    stat: '40%',
    statLabel: 'de rotación anual en posiciones de alta demanda conversacional',
    source: null,
    description:
      'Un agente sin confianza en sus conversaciones abandona o quema oportunidades. El costo de reemplazarlo supera 6 meses de salario.',
  },
  {
    icon: TrendingDown,
    stat: '1ra semana',
    statLabel: null,
    source: null,
    description:
      'Es cuando se pierden más deals y se generan más quejas. El personal nuevo aprende en vivo con clientes reales porque no hay otra opción.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

export const ProblemSection = () => {
  return (
    <Section className="relative overflow-hidden bg-[#0B1827] py-mento-4xl">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Pain-themed background anchor */}
        <div className="absolute inset-0 bg-[url('/professional_team_action_1778946550555.png')] bg-cover bg-center opacity-[0.04] grayscale mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1827] via-[#0B1827]/90 to-[#0B1827]" />
        
        {/* Animated Glow Orbs - "Pain" atmosphere (Subtle, Moody) */}
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.15, 1],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-white/5 blur-[180px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.02, 0.05, 0.02],
            scale: [1.1, 1, 1.1],
            y: [0, -40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-mento-primary/10 blur-[150px] rounded-full" 
        />

        {/* Cinematic Noise & Grid Overlay */}
        <div className="absolute inset-0 noise opacity-[0.3]" />
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 100 L0 100 0 0' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }} 
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
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-mento-cta text-caption font-bold uppercase tracking-[0.2em] mb-mento-md"
          >
            El problema que ningún manual resuelve
          </motion.span>
          <h2 className="text-h2 lg:text-display font-bold text-white mb-mento-md tracking-tight leading-tight">
            La capacitación tradicional enseña el qué.
            <br />
            <span className="text-white/30 font-medium">Nadie entrena el cómo.</span>
          </h2>
          <p className="text-body-lg text-mento-muted max-w-2xl mx-auto leading-relaxed">
            Tus vendedores leyeron el manual. Asistieron al taller. Pero cuando llega el cliente difícil, improvisan. Porque el conocimiento teórico no es práctica real.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-mento-xl"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={point.stat}
              variants={itemVariants}
              className="noise premium-blur glass-border premium-glow-white group relative p-mento-3xl bg-white/[0.01] rounded-mento-3xl hover:bg-white/[0.04] transition-all duration-700 overflow-hidden"
            >
              {/* Card Hover Glow (Pain Indicator) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-mento-2xl flex items-center justify-center mb-mento-xl group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                  <point.icon className="w-8 h-8 text-white/40 group-hover:text-white transition-colors duration-500" strokeWidth={1} />
                </div>
                
                <div className="mb-mento-lg">
                  <div className="text-[4.5rem] font-bold text-white/90 leading-none tracking-tighter mb-6 group-hover:text-white transition-all duration-500 group-hover:scale-[1.02] origin-left">
                    {point.stat}
                  </div>
                  {point.statLabel && (
                    <div className="relative">
                      <p className="text-h4 font-bold text-white/80 leading-tight tracking-tight group-hover:text-white transition-colors duration-500">
                        {point.statLabel}
                      </p>
                      {point.source && (
                        <span className="block mt-4 text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold font-mono group-hover:text-white/40 transition-colors">
                          {point.source}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="mt-auto">
                  <div className="h-px w-12 bg-white/10 mb-6 group-hover:w-full transition-all duration-700" />
                  <p className="text-body text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-500 font-light">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-mento-3xl flex flex-col items-center"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-mento-xl" />
          <p className="text-h3 font-medium text-center bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent max-w-2xl leading-tight">
            Mento cambia eso. Tu equipo practica antes de que el error tenga un costo real para tu empresa.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};
