import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MessageSquare, BarChart3, GraduationCap, Zap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const modules = [
  {
    title: 'Simulación de Roleplay',
    description: 'Entrená en escenarios reales con una IA que reacciona, rebate y se adapta a tu nivel en tiempo real. La práctica deliberada es el único camino a la maestría.',
    icon: MessageSquare,
    gradient: 'from-mento-primary/30 to-mento-accent/20',
    image: '/professional_team_action_1778946550555.png'
  },
  {
    title: 'Feedback por Competencias',
    description: 'Recibí métricas precisas sobre empatía, manejo de objeciones y persuasión después de cada sesión. Datos, no opiniones.',
    icon: BarChart3,
    gradient: 'from-mento-accent/30 to-mento-cta/20',
  },
  {
    title: 'Estrategia de Aprendizaje',
    description: 'Basado en el Ciclo de Kolb, garantizando que el conocimiento se transforme en habilidades prácticas y hábitos duraderos.',
    icon: GraduationCap,
    gradient: 'from-mento-cta/30 to-mento-primary/20',
  },
  {
    title: 'Integración Inteligente',
    description: 'Conectá Mento con tu CRM y medí cómo el entrenamiento impacta directamente en tu tasa de cierre y revenue.',
    icon: Zap,
    gradient: 'from-mento-primary/40 to-mento-primary-dark/30',
  }
];

export const ModulesSection = () => {
  return (
    <Section variant="default" className="py-mento-3xl relative overflow-hidden bg-[#0B1827]">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Glows */}
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[1000px] h-[1000px] bg-mento-primary/5 blur-[180px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.02, 0.06, 0.02],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-mento-cta/5 blur-[150px] rounded-full" 
        />
        
        {/* Subtle Moving Grid Overlay */}
        <motion.div 
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 noise opacity-[0.4]" 
        />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M80 80 L0 80 0 0' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }} 
        />
      </div>

      <Container>
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
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-mento-cta text-caption font-bold uppercase tracking-[0.2em] mb-mento-md"
          >
            Capabilities
          </motion.span>
          <h2 className="text-h2 lg:text-display font-bold text-white mb-mento-md tracking-tight leading-tight">
            Un ecosistema diseñado para el <span className="text-gradient-accent">alto desempeño.</span>
          </h2>
          <p className="text-body-lg text-mento-muted leading-relaxed max-w-2xl mx-auto">
            Combinamos ciencia del aprendizaje con inteligencia artificial multi-agente para escalar tu entrenamiento sin fricciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-mento-xl">
          {modules.map((module, index) => (
            <motion.div 
              key={module.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: index * 0.15 
              }}
              className={`group relative overflow-hidden rounded-mento-3xl border border-white/10 bg-white/[0.02] premium-blur hover:bg-white/[0.04] transition-all duration-700 premium-glow-white noise ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-2 items-stretch' : ''}`}
            >
              {/* Image section for the featured card - Cinematic treatment */}
              {index === 0 && (
                <div className="relative h-80 md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-white/10 group">
                  <motion.img 
                    src={module.image} 
                    alt={module.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-30 group-hover:opacity-50 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0B1827] via-[#0B1827]/60 to-transparent z-10" />
                  
                  {/* Floating Tech Badge - Premium Version */}
                  <div className="absolute top-10 left-10 z-20">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="px-6 py-2.5 rounded-mento-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center gap-3 shadow-2xl"
                    >
                      <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-mento-cta" />
                        <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-mento-cta animate-ping opacity-50" />
                      </div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Core Engine IA</span>
                    </motion.div>
                  </div>
                </div>
              )}

              <div className="relative z-20 flex flex-col h-full p-mento-3xl">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-mento-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-mento-2xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500`}
                >
                  <module.icon className="text-white drop-shadow-2xl" size={28} strokeWidth={1.5} />
                </motion.div>
                
                <h3 className="text-h3 font-bold text-white mb-5 tracking-tighter leading-tight group-hover:text-gradient-accent transition-all duration-500">
                  {module.title}
                </h3>
                
                <p className="text-body text-white/40 leading-relaxed mb-12 group-hover:text-white/70 transition-colors duration-500 font-light">
                  {module.description}
                </p>

                <div className="mt-auto">
                  <div className="group/btn inline-flex items-center gap-4 cursor-pointer">
                    <span className="text-body-sm font-bold text-white/50 group-hover/btn:text-white transition-all duration-500 uppercase tracking-widest">Explorar módulo</span>
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover/btn:bg-white group-hover/btn:text-mento-bg group-hover/btn:scale-110 transition-all duration-500">
                      <ChevronRight size={18} className="transition-transform group-hover/btn:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Decorative Glow */}
              <div className={`absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br ${module.gradient} blur-[120px] opacity-[0.03] group-hover:opacity-[0.12] transition-opacity duration-1000 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

