'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { Mentito } from '@/components/ui/Mentito';

const navLinks = [
  { name: 'Método', href: '/metodo' },
  { name: 'Industrias', href: '/industrias' },
  { name: 'Ciencia', href: '/ciencia' },
  { name: 'Capacitadores', href: '/capacitadores' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-mento-bg/80 backdrop-blur-md border-b border-white/5">
      <Container>
        <div className="flex items-center justify-between h-mento-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-mento-sm">
            <Mentito size="sm" className="w-8 h-10" />
            <div className="flex flex-col">
              <span className="text-h3 font-extrabold text-mento-text leading-none">Mento</span>
              <span className="text-caption font-medium text-mento-muted uppercase tracking-widest">Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-mento-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-body font-medium text-mento-muted hover:text-mento-text transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-mento-md">
            <Button variant="ghost" size="sm" href="https://app.mento.lat/login">
              Ingresar
            </Button>
            <Button variant="primary" size="sm" href="https://app.mento.lat/signup">
              Probar gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-mento-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed inset-0 top-mento-2xl z-40 bg-mento-bg md:hidden transition-transform duration-300 ease-in-out transform',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <Container className="py-mento-xl space-y-mento-xl">
          <nav className="flex flex-col space-y-mento-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-h3 font-bold text-mento-text"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col space-y-mento-md pt-mento-md border-t border-white/5">
            <Button variant="outline" size="lg" href="https://app.mento.lat/login" className="w-full">
              Ingresar
            </Button>
            <Button variant="primary" size="lg" href="https://app.mento.lat/signup" className="w-full">
              Probar gratis
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
};
