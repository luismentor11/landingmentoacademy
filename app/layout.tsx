import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Mento Academy — Capacitación Industrial de Alto Impacto',
    template: '%s | Mento Academy',
  },
  description: 'La primera plataforma de capacitación para industrias basada en ciencia cognitiva y validada por expertos. Microlearning, video-first y gamificación para personal operativo.',
  metadataBase: new URL('https://mento.lat'),
  openGraph: {
    title: 'Mento Academy — Aprender haciendo, no mirando',
    description: 'Capacitación con IA que sí entrena. Roleplay por voz, evaluación inmediata, sin manuales.',
    url: 'https://mento.lat',
    siteName: 'Mento Academy',
    locale: 'es_AR',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mento Academy',
    description: 'Aprender haciendo, no mirando.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-mento-bg text-mento-text antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
