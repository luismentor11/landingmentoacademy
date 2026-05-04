import React from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  variant?: 'default' | 'elevated' | 'gradient';
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  default: 'bg-mento-surface rounded-mento-lg p-mento-lg',
  elevated: 'bg-mento-elevated rounded-mento-lg p-mento-lg shadow-mento-md',
  gradient: 'bg-gradient-azul-vino rounded-mento-lg p-mento-lg',
};

export const Card = ({ variant = 'default', className, children }: CardProps) => {
  return (
    <div className={cn(variantStyles[variant], 'transition-transform duration-200 hover:-translate-y-1', className)}>
      {children}
    </div>
  );
};
