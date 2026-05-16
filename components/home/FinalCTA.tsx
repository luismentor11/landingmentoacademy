import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Mentito } from '../ui/Mentito';
import { motion } from 'framer-motion';

export const FinalCTA = () => {
  return (
    <Section className="bg-[#0B1827] py-mento-4xl relative overflow-hidden noise">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-mento-cta/10 blur-[180px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-mento-accent/10 blur-[200px] rounded-full" 
        />
      </div>
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
          className="relative group min-h-[600px] rounded-[3rem] border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center p-mento-2xl premium-blur noise"
        >
          {/* Light-Refraction Border Effect */}
          <div className="absolute inset-0 rounded-[3rem] p-[1px] bg-gradient-to-br from-white/20 via-transparent to-white/5 pointer-events-none" />
          <div className="absolute inset-[1px] rounded-[3rem] p-[1px] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

          {/* Cinematic Background Image with Multi-layered Overlays */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/industry_support_science_abstract_1778947314002.png" 
              alt="Background" 
              fill
              className="object-cover opacity-20 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[4000ms]"
            />
            <div className="absolute inset-0 bg-[#0B1827]/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1827] via-transparent to-[#0B1827]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1827] via-transparent to-[#0B1827]" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-4xl">
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 8, -8, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="mb-mento-xl relative"
            >
              {/* Glow behind Mentito */}
              <div className="absolute inset-0 bg-mento-cta/40 blur-[40px] rounded-full scale-150 animate-pulse" />
              <Mentito size="xl" className="relative z-10 drop-shadow-[0_0_50px_rgba(var(--mento-cta-rgb),0.8)] scale-150" />
            </motion.div>

            <h2 className="text-h1 lg:text-display font-black text-white mb-mento-md leading-[1] tracking-tighter">
              Tu equipo tiene una reunión <span className="text-gradient-cta">difícil</span>.
              <br />
              <span className="text-white/40 font-medium">¿Están realmente listos?</span>
            </h2>

            <p className="text-h4 lg:text-xl text-white/50 mb-mento-2xl max-w-2xl font-light leading-relaxed">
              No dejes el cierre más importante del trimestre al azar. Mento entrena a tus vendedores en escenarios reales antes de que el cliente diga &quot;hola&quot;.
            </p>

            <div className="flex flex-col items-center gap-mento-xl">
              <div className="relative group/btn">
                {/* Advanced Button Glow */}
                <div className="absolute -inset-4 bg-mento-cta/20 blur-[30px] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                <div className="absolute -inset-1 bg-gradient-to-r from-mento-cta to-[#D96B8E] blur opacity-40 group-hover/btn:opacity-100 transition duration-1000 group-hover/btn:duration-200 rounded-full" />
                
                <Button 
                  variant="cta" 
                  size="lg" 
                  href="/demo" 
                  className="relative px-16 py-8 text-xl font-bold bg-mento-cta hover:bg-mento-cta-hover border-none shadow-[0_20px_50px_-10px_rgba(var(--mento-cta-rgb),0.5)] rounded-full overflow-hidden"
                >
                  {/* Glass highlight on button */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  Solicitá tu Demo →
                </Button>
              </div>
              
              <Link
                href="/metodo"
                className="group flex flex-col items-center gap-2"
              >
                <span className="text-body font-medium text-white/30 group-hover:text-white/60 transition-colors">
                  ¿Querés entender la ciencia detrás?
                </span>
                <span className="text-mento-cta font-bold tracking-widest text-[11px] uppercase border-b border-mento-cta/0 group-hover:border-mento-cta/100 transition-all">
                  Explorar el Método Mento
                </span>
              </Link>
            </div>

            <div className="mt-mento-2xl flex items-center gap-mento-xl">
              {[
                "Sin costos ocultos",
                "Integración en 24h",
                "Soporte Premium"
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-mento-cta" />
                   <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
