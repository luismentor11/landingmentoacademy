import React from 'react';
import Link from 'next/link';
import { Home, BarChart2, MessageCircle, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const industries = [
  {
    Icon: Home,
    title: 'Inmobiliarias y Ventas',
    image: '/industry_real_estate.png',
    pain: 'Tu agente nuevo aprende a manejar objeciones en su primera operación real. Eso tiene un costo.',
    solution:
      'Simulamos al cliente que quiere bajar el precio, al que "tiene que consultarlo con la familia" y al que compara con 3 propiedades más.',
    scenarios: [
      'Manejo de objeción de precio',
      'Seguimiento post-visita sin presionar',
      'Cierre en contexto de alta competencia',
    ],
  },
  {
    Icon: BarChart2,
    title: 'Seguros y Finanzas',
    image: '/industry_finance.png',
    pain: 'El asesor que no cierra en la segunda llamada, no cierra nunca. La diferencia está en los primeros 90 segundos.',
    solution:
      'Practicamos las 8 objeciones más frecuentes en productos de seguros y finanzas hasta que la respuesta es reflejo, no esfuerzo.',
    scenarios: [
      'Objeción de precio en pólizas',
      'Explicación de producto complejo',
      'Reactivación de leads fríos',
    ],
  },
  {
    Icon: MessageCircle,
    title: 'Atención al Cliente',
    image: '/industry_support_science.png',
    pain: 'Un cliente enojado no quiere un protocolo. Quiere sentirse escuchado. Eso no se aprende leyendo un manual.',
    solution:
      'Entrenamos empatía, desescalada y resolución bajo presión con simulaciones de clientes reales e impacientes.',
    scenarios: [
      'Desescalada de cliente furioso',
      'Gestión de queja compleja',
      'Retención de cliente que quiere cancelar',
    ],
  },
];

export const IndustriesSection = () => {
  return (
    <Section variant="surface" className="relative overflow-hidden pt-mento-3xl bg-[#0B1827]">
      {/* Cinematic Background Visuals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Human-centric background anchor */}
        <div className="absolute inset-0 bg-[url('/professional_team_action_1778946550555.png')] bg-cover bg-center opacity-[0.03] grayscale mix-blend-overlay" />
        
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, 100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-mento-cta/20 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
            x: [0, -80, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-mento-primary/20 blur-[130px] translate-y-1/2 -translate-x-1/2 rounded-full" 
        />
        
        {/* Cinematic Noise & Grid */}
        <div className="absolute inset-0 noise opacity-[0.4]" />
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
            className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-mento-cta text-[10px] font-bold uppercase tracking-[0.4em] mb-mento-md"
          >
            Verticales de Entrenamiento
          </motion.span>
          <h2 className="text-h2 lg:text-display font-bold text-white mb-mento-md tracking-tighter leading-tight">
            Conversaciones que <span className="text-gradient-accent">ganan</span> negocios.
          </h2>
          <p className="text-body-lg text-white/50 leading-relaxed max-w-2xl mx-auto font-light">
            Cada industria tiene sus conversaciones críticas. Mento las identifica, las simula y mide si tu equipo está realmente listo para el éxito comercial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-mento-xl">
          {industries.map(({ Icon, title, image, pain, solution, scenarios }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col h-full bg-white/[0.02] premium-blur glass-border rounded-mento-3xl hover:bg-white/[0.04] transition-all duration-700 overflow-hidden premium-glow-white noise"
            >
              {/* Card Header Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[#0B1827]/60 z-10 group-hover:bg-[#0B1827]/20 transition-colors duration-1000" />
                <motion.img 
                  src={image} 
                  alt={title} 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1827] via-transparent to-transparent z-20" />
                
                <div className="absolute bottom-6 left-8 right-8 z-30 flex flex-col gap-2">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="w-12 h-12 rounded-mento-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2 group-hover:bg-mento-cta/20 group-hover:border-mento-cta/40 group-hover:scale-110 transition-all duration-500 shadow-2xl"
                  >
                    <Icon size={22} className="text-white group-hover:text-mento-cta transition-colors duration-500" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-h3 font-bold text-white tracking-tighter leading-tight group-hover:text-gradient-accent transition-all duration-500">{title}</h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 pt-4 flex flex-col flex-grow relative z-30">
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-mento-cta font-bold text-3xl leading-none opacity-40">“</span>
                    <p className="text-body font-medium text-white/90 leading-relaxed italic pr-4">
                      {pain}
                    </p>
                  </div>
                </div>

                <p className="text-body-sm text-white/40 mb-8 leading-relaxed border-l border-white/10 pl-6 group-hover:text-white/60 transition-colors">
                  {solution}
                </p>

                <div className="mt-auto space-y-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Protocolos de Simulación</p>
                    <ul className="flex flex-col gap-3">
                      {scenarios.map((s, i) => (
                        <motion.li 
                          key={s} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          className="flex items-center gap-3 text-body-sm text-white/50 group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-mento-cta/30 group-hover/item:bg-mento-cta group-hover/item:scale-150 group-hover/item:shadow-[0_0_8px_rgba(var(--mento-cta-rgb),0.6)] transition-all duration-500" />
                          <span className="group-hover/item:text-white transition-colors duration-300">{s}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/industrias"
                    className="group/link flex items-center justify-between py-5 border-t border-white/5 hover:border-white/10 transition-all"
                  >
                    <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest group-hover/link:text-white transition-colors">Ver casos de éxito</span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-mento-bg group-hover/link:scale-110 transition-all duration-500">
                      <ArrowRight size={16} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Advanced Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-mento-cta/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Custom Industry CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-mento-3xl p-mento-2xl bg-white/[0.02] premium-blur glass-border rounded-[2.5rem] flex flex-col lg:flex-row items-center justify-between gap-mento-xl relative overflow-hidden group noise"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mento-cta/5 blur-[130px] -translate-y-1/2 translate-x-1/2 group-hover:bg-mento-cta/15 transition-all duration-1000" />
          
          <div className="relative z-10 text-center lg:text-left max-w-2xl">
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-mento-muted uppercase tracking-[0.3em] mb-4">Personalización Total</div>
            <h3 className="text-h2 font-bold text-white mb-4 tracking-tighter leading-tight">
              ¿Tu industria requiere algo <span className="text-gradient-accent">único?</span>
            </h3>
            <p className="text-body-lg text-white/40 leading-relaxed font-light">
              Desarrollamos verticales personalizadas con tus propios escenarios, vocabulario técnico y los casos reales que definen tu operación diaria.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-mento-md w-full sm:w-auto">
            <Button variant="cta" href="/demo" className="rounded-full px-12 py-7 h-auto shadow-2xl shadow-mento-cta/20 text-body font-bold group-hover:scale-105 transition-transform duration-500">
              Diseñar mi Academia
            </Button>
            <Button variant="outline" href="/contacto" className="rounded-full px-12 py-7 h-auto border-white/10 hover:bg-white/5 text-body font-bold text-white group-hover:border-white/20 transition-all duration-500">
              Consultoría Técnica
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

