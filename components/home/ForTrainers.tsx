import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BarChart2, FileText, Users, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

const features = [
  {
    Icon: BarChart2,
    title: 'Dashboard de desempeño por competencias',
    description:
      'No ves quién completó un módulo. Ves quién demostró la competencia y quién necesita más práctica. La diferencia importa.',
  },
  {
    Icon: FileText,
    title: 'Reportes listos para presentar',
    description:
      'Exportá el progreso de tu equipo en formato listo para una reunión de directorio o una auditoría de RRHH. Sin trabajo manual.',
  },
  {
    Icon: Users,
    title: 'Gestión por equipos, roles y niveles',
    description:
      'Asignás escenarios por nivel de experiencia, área o cargo. El nuevo ingreso no hace el mismo ejercicio que el senior.',
  },
];

export const ForLeadersSection = () => {
  return (
    <Section className="bg-[#0B1827] relative overflow-hidden py-mento-4xl noise">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-mento-primary/5 blur-[180px] rounded-full" />
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-mento-cta/5 blur-[160px] rounded-full" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-mento-3xl">

          {/* ── Copy column ── */}
          <div className="lg:w-1/2 flex flex-col gap-mento-xl">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-mento-cta uppercase tracking-[0.3em] mb-4">
                Leadership Engine
              </div>
              <h2 className="text-h2 lg:text-h1 font-bold text-white mb-mento-md leading-[1.1] tracking-tighter">
                Administrá el talento.
                <br />
                <span className="text-white/30 font-medium">La IA escala el impacto.</span>
              </h2>
              <p className="text-body-lg text-white/50 font-light leading-relaxed">
                Mento no es una plataforma de videos. Es un sistema autónomo que entrena, evalúa y reporta 24/7. Mientras vos dormís, tu equipo está cerrando sus brechas de desempeño.
              </p>
            </motion.div>

            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col gap-mento-sm"
            >
              {features.map(({ Icon, title, description }, index) => (
                <li key={title} className="group flex items-start gap-mento-md p-mento-md rounded-mento-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-300">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-mento-lg mt-1 flex-shrink-0 group-hover:border-mento-cta/40 group-hover:bg-mento-cta/10 group-hover:scale-110 transition-all duration-500">
                    <Icon size={22} className="text-mento-cta" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-body font-bold text-white mb-1 group-hover:text-mento-cta transition-colors">{title}</h4>
                    <p className="text-caption text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">{description}</p>
                  </div>
                </li>
              ))}
            </motion.ul>

            {/* ROI card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative p-mento-lg bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 premium-blur rounded-mento-2xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                <CheckCircle2 size={120} className="text-white" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-mento-accent animate-pulse" />
                  <span className="text-[10px] font-bold text-mento-accent uppercase tracking-widest">Análisis de ROI</span>
                </div>
                <h4 className="text-body font-bold text-white mb-mento-xs">
                  ¿Cuánto cuesta un deal perdido por falta de práctica?
                </h4>
                <p className="text-caption text-white/40 leading-relaxed font-light">
                  Un vendedor que improvisa en una reunión crítica no solo pierde un cliente; daña tu marca. Mento garantiza que cada interacción sea de nivel senior antes de que el vendedor hable con el prospecto.
                </p>
              </div>
            </motion.div>

            <Link
              href="/capacitadores"
              className="group inline-flex items-center gap-2 text-body font-medium text-white/30 hover:text-white transition-all self-start mt-2"
            >
              Explorar el panel administrativo
              <span className="text-mento-cta group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>

          {/* ── Mock dashboard ── */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: 15, x: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
              className="relative p-1 bg-gradient-to-tr from-white/10 via-white/5 to-white/10 rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden group"
            >
              <div className="relative bg-[#0D1B2D] rounded-[2.3rem] overflow-hidden">
                {/* Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] z-50 opacity-[0.03]" />
                
                {/* Dashboard Header */}
                <div className="px-mento-lg py-mento-md border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mento-cta to-mento-accent p-[1px]">
                      <div className="w-full h-full rounded-xl bg-[#0D1B2D] flex items-center justify-center">
                        <div className="w-4 h-4 rounded-sm bg-white/20 animate-pulse" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2.5 w-32 bg-white/20 rounded-full" />
                      <div className="h-1.5 w-20 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-mento-md bg-white/5 border border-white/10 flex items-center justify-center">
                      <div className="w-3 h-0.5 bg-white/20 rounded-full" />
                    </div>
                    <div className="w-8 h-8 rounded-mento-md bg-white/5 border border-white/10 flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-white/10 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-mento-lg">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-mento-md mb-mento-xl">
                    {[
                      { label: 'Competencia', val: '84%', color: 'text-mento-cta', trend: '+5.2%' },
                      { label: 'Simulaciones', val: '1.2k', color: 'text-white/40', trend: '+124' },
                      { label: 'Mejora Avg', val: '+22%', color: 'text-mento-accent', trend: 'Global' }
                    ].map((st) => (
                      <div key={st.label} className="p-mento-md bg-white/[0.03] border border-white/5 rounded-mento-xl hover:bg-white/[0.05] transition-colors group/stat">
                        <div className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-2">{st.label}</div>
                        <div className={`text-2xl font-black ${st.color} mb-1 tracking-tight`}>
                          {st.val}
                        </div>
                        <div className="text-[8px] text-white/20 font-bold">{st.trend}</div>
                      </div>
                    ))}
                  </div>

                  {/* Activity List */}
                  <div className="space-y-mento-md mb-mento-xl">
                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-4">Actividad en Vivo</div>
                    {[85, 45, 95, 30].map((w, i) => (
                      <div key={i} className="flex items-center gap-mento-md group/item">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex-shrink-0 relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${w}%` }}
                              transition={{ duration: 1.5, delay: 0.2 + (i * 0.1) }}
                              className="h-full bg-gradient-to-r from-mento-cta/40 to-mento-cta rounded-full" 
                            />
                          </div>
                          <div className="h-1 w-24 bg-white/5 rounded-full" />
                        </div>
                        <div className="h-6 w-14 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
                           <div className="w-6 h-1 bg-white/20 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Image Integration */}
                  <div className="relative h-44 rounded-mento-2xl overflow-hidden border border-white/10 group/img">
                    <Image 
                      src="/professional_team_action_1778946550555.png" 
                      alt="Team monitoring" 
                      fill
                      className="object-cover opacity-30 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2D] via-transparent to-transparent z-10" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-20">
                      <div>
                        <div className="text-[10px] font-black text-white uppercase tracking-widest mb-1">Inteligencia de Equipo</div>
                        <div className="text-[9px] text-white/30">Análisis predictivo de brechas comerciales</div>
                      </div>
                      <div className="p-2 bg-mento-cta/20 backdrop-blur-md rounded-lg border border-mento-cta/30">
                        <BarChart2 size={12} className="text-mento-cta" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glass Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.03] pointer-events-none" />
              </div>

              {/* External Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 p-5 bg-[#0B1827]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl hidden md:block max-w-[200px] noise"
              >
                <div className="absolute top-0 right-0 p-2">
                  <div className="w-2 h-2 rounded-full bg-mento-cta animate-ping" />
                </div>
                <div className="text-[9px] font-black text-mento-cta mb-2 uppercase tracking-[0.2em]">Live Insights</div>
                <div className="text-caption text-white font-medium leading-tight">3 agentes necesitan refuerzo en &quot;Manejo de Objeciones&quot;</div>
                <div className="mt-3 pt-3 border-t border-white/5">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-white/10 border border-[#0B1827]" />
                      ))}
                   </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
