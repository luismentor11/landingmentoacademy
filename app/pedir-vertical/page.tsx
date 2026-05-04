'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/ui/PageHeader';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const formSchema = z.object({
  name: z.string().min(2, 'El nombre es muy corto'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'Nombre de empresa requerido'),
  industry: z.string().min(2, 'Especificar la industria es importante'),
  description: z.string().min(10, 'Por favor, contanos un poco más sobre la necesidad'),
});

type FormData = z.infer<typeof formSchema>;

export default function PedirVerticalPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // In a real app, this would send to an API
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('¡Gracias! Tu solicitud ha sido enviada. Nos pondremos en contacto pronto.');
    reset();
  };

  return (
    <main className="min-h-screen bg-mento-bg">
      <Header />
      <PageHeader 
        badge="Co-Creación"
        title="Tu industria, tu contenido."
        subtitle="¿Necesitás capacitación específica que no encontrás en nuestro catálogo? Contanos sobre tu vertical y la desarrollamos juntos."
      />

      <Section variant="default">
        <Container>
          <div className="flex flex-col lg:flex-row gap-mento-2xl">
            <div className="lg:w-1/2 space-y-mento-lg">
              <h2 className="text-h2 font-bold text-mento-text">El proceso de creación</h2>
              <p className="text-body-lg text-mento-muted">
                Nuestro equipo de expertos pedagógicos y productores audiovisuales trabajan de la mano con tus especialistas para asegurar la precisión técnica y la efectividad del aprendizaje.
              </p>
              
              <div className="space-y-mento-md">
                {[
                  { step: '01', title: 'Relevamiento', desc: 'Identificamos las tareas críticas y los puntos de dolor operativos.' },
                  { step: '02', title: 'Guionado', desc: 'Nuestros pedagogos traducen tus procesos a guiones de microlearning.' },
                  { step: '03', title: 'Producción', desc: 'Grabamos y editamos contenido visual de alta calidad en entornos reales.' },
                  { step: '04', title: 'Despliegue', desc: 'Lanzamos la vertical en la plataforma para todos tus colaboradores.' }
                ].map(item => (
                  <div key={item.step} className="flex gap-mento-md">
                    <span className="text-h3 font-black text-mento-accent/30">{item.step}</span>
                    <div>
                      <h4 className="text-body font-bold text-white">{item.title}</h4>
                      <p className="text-caption text-mento-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <Card variant="elevated" className="p-mento-xl border-white/10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-mento-md">
                  <div>
                    <label className="block text-caption font-bold text-mento-muted uppercase mb-2">Nombre Completo</label>
                    <input 
                      {...register('name')}
                      className="w-full bg-mento-bg border border-white/10 rounded-mento-sm px-4 py-3 text-white focus:outline-none focus:border-mento-accent transition-colors"
                      placeholder="Ej: Juan Pérez"
                    />
                    {errors.name && <p className="text-red-400 text-caption mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-caption font-bold text-mento-muted uppercase mb-2">Email Corporativo</label>
                    <input 
                      {...register('email')}
                      className="w-full bg-mento-bg border border-white/10 rounded-mento-sm px-4 py-3 text-white focus:outline-none focus:border-mento-accent transition-colors"
                      placeholder="juan@empresa.com"
                    />
                    {errors.email && <p className="text-red-400 text-caption mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-mento-md">
                    <div>
                      <label className="block text-caption font-bold text-mento-muted uppercase mb-2">Empresa</label>
                      <input 
                        {...register('company')}
                        className="w-full bg-mento-bg border border-white/10 rounded-mento-sm px-4 py-3 text-white focus:outline-none focus:border-mento-accent transition-colors"
                        placeholder="Mento S.A."
                      />
                      {errors.company && <p className="text-red-400 text-caption mt-1">{errors.company.message}</p>}
                    </div>
                    <div>
                      <label className="block text-caption font-bold text-mento-muted uppercase mb-2">Industria</label>
                      <input 
                        {...register('industry')}
                        className="w-full bg-mento-bg border border-white/10 rounded-mento-sm px-4 py-3 text-white focus:outline-none focus:border-mento-accent transition-colors"
                        placeholder="Ej: Minería"
                      />
                      {errors.industry && <p className="text-red-400 text-caption mt-1">{errors.industry.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-caption font-bold text-mento-muted uppercase mb-2">Descripción de la necesidad</label>
                    <textarea 
                      {...register('description')}
                      rows={4}
                      className="w-full bg-mento-bg border border-white/10 rounded-mento-sm px-4 py-3 text-white focus:outline-none focus:border-mento-accent transition-colors resize-none"
                      placeholder="Contanos brevemente qué tipo de capacitación estás buscando..."
                    />
                    {errors.description && <p className="text-red-400 text-caption mt-1">{errors.description.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
