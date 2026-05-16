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
  description: 'Entrená a tu equipo con simulaciones de IA realistas. Especialistas en ventas B2B, negociación y atención al cliente. Practicá conversaciones difíciles en 48hs.',
  keywords: ['IA para ventas', 'entrenamiento comercial', 'roleplay IA', 'capacitación B2B', 'atención al cliente IA', 'Mento Academy', 'habilidades conversacionales'],
  metadataBase: new URL('https://www.mento.lat'),
  openGraph: {
    title: 'Mento Academy — El estándar en entrenamiento con IA para equipos B2B',
    description: 'Tu equipo practica conversaciones difíciles con IA antes de que cuesten dinero real. Simulaciones adaptativas de alto nivel.',
    url: 'https://www.mento.lat',
    siteName: 'Mento Academy',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mento Academy — Entrenamiento con IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mento Academy — Roleplay con IA para equipos',
    description: 'Simulaciones adaptativas para equipos de ventas, atención al cliente y negociación.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
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
