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
    default: 'Mento Academy — Formato Innovador de Capacitación',
    template: '%s | Mento Academy',
  },
  description: 'Aprendizaje experiencial y simulación inmersiva para trascender la teoría y anclar el conocimiento en la práctica real. Metodología activa donde el participante es el protagonista.',
  metadataBase: new URL('https://www.mento.lat'),
  openGraph: {
    title: 'Mento Academy — Formato Innovador de Capacitación',
    description: 'Capacitación fundamentada en aprendizaje experiencial y simulación inmersiva (role-play) para anclar el conocimiento en la práctica real. Una metodología activa y transformadora.',
    url: 'https://www.mento.lat',
    siteName: 'Mento Academy',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/mentito.png',
        width: 1024,
        height: 1024,
        alt: 'Mentito - Mento Academy',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Mento Academy',
    description: 'Capacitación innovadora basada en aprendizaje experiencial.',
    images: ['/mentito.png'],
  },
  icons: {
    icon: '/favicon.png',
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
