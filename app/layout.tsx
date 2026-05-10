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
    default: 'Mento Academy — Roleplay con IA para equipos de ventas y atención al cliente',
    template: '%s | Mento Academy',
  },
  description: 'Plataforma de simulación con IA para entrenar habilidades conversacionales. Ventas, negociación y atención al cliente. Prueba institucional disponible.',
  metadataBase: new URL('https://www.mento.lat'),
  openGraph: {
    title: 'Mento Academy — Entrenamiento con IA para equipos B2B',
    description: 'Tu equipo practica conversaciones difíciles con IA antes de que cuesten dinero real. Demo institucional en 30 minutos.',
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
    title: 'Mento Academy — Roleplay con IA para equipos',
    description: 'Simulaciones adaptativas para equipos de ventas, atención al cliente y negociación. B2B. Argentina.',
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
