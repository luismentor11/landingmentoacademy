import React from 'react';
import { cn } from '@/lib/cn';

interface SectionProps {
  variant?: 'default' | 'surface' | 'elevated' | 'gradient-deep' | 'gradient-azul-magenta';
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const variantStyles = {
  default: 'bg-mento-bg',
  surface: 'bg-mento-surface',
  elevated: 'bg-mento-elevated',
  'gradient-deep': 'bg-gradient-deep-azul',
  'gradient-azul-magenta': 'bg-gradient-azul-magenta',
};

export const Section = ({ variant = 'default', className, children, id }: SectionProps) => {
  return (
    <section id={id} className={cn('py-mento-2xl md:py-mento-3xl lg:py-mento-4xl overflow-hidden', variantStyles[variant], className)}>
      {children}
    </section>
  );
};
