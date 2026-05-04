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
  metadataBase: new URL('https://landingmentoacademy.vercel.app'),
  openGraph: {
    title: 'Mento Academy — Capacitación Industrial de Alto Impacto',
    description: 'La primera plataforma de capacitación para industrias basada en ciencia cognitiva. Microlearning, video-first y gamificación para personal operativo.',
    url: 'https://landingmentoacademy.vercel.app',
    siteName: 'Mento Academy',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mento Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mento Academy',
    description: 'Capacitación industrial basada en ciencia cognitiva.',
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
