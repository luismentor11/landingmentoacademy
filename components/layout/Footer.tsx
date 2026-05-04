import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const footerLinks = [
  {
    title: 'Plataforma',
    links: [
      { name: 'Método', href: '/metodo' },
      { name: 'Industrias', href: '/industrias' },
      { name: 'Ciencia', href: '/ciencia' },
      { name: 'Capacitadores', href: '/capacitadores' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { name: 'Pedir Vertical', href: '/pedir-vertical' },
      { name: 'Soporte', href: 'mailto:hola@mento.lat' },
      { name: 'Términos', href: '/terms' },
      { name: 'Privacidad', href: '/privacy' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-mento-surface border-t border-white/5 py-mento-2xl">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-mento-xl">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col mb-mento-md">
              <span className="text-h3 font-extrabold text-mento-text leading-none">Mento</span>
              <span className="text-caption font-medium text-mento-muted uppercase tracking-widest">Academy</span>
            </Link>
            <p className="text-body text-mento-muted max-w-xs mb-mento-md">
              Capacitación de alto impacto con base científica y validación industrial.
            </p>
            <div className="text-caption text-mento-muted/50">
              © {new Date().getFullYear()} Mento Academy. Todos los derechos reservados.
            </div>
          </div>

          {/* Navigation */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-caption font-bold text-mento-text uppercase tracking-widest mb-mento-md">
                {column.title}
              </h4>
              <ul className="space-y-mento-sm">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-body text-mento-muted hover:text-mento-text transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-mento-2xl pt-mento-lg border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-mento-md">
          <p className="text-caption text-mento-muted/50">
            Enfocado en la excelencia operacional y el desarrollo de talento.
          </p>
          <div className="flex space-x-mento-md">
            <a href="https://linkedin.com/company/mento-lat" target="_blank" rel="noopener noreferrer" className="text-mento-muted hover:text-mento-accent transition-colors">
              LinkedIn
            </a>
            <a href="https://instagram.com/mento.lat" target="_blank" rel="noopener noreferrer" className="text-mento-muted hover:text-mento-accent transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
