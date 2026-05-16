import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'cta';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-azul-magenta text-white shadow-mento-md hover:shadow-mento-glow rounded-mento-full',
  secondary: 'bg-mento-surface text-mento-text hover:bg-mento-elevated rounded-mento-full',
  ghost: 'bg-transparent text-mento-text hover:bg-white/5 rounded-mento-full',
  outline: 'bg-transparent border border-white/20 text-mento-text hover:border-mento-cta rounded-mento-full',
  cta: 'bg-mento-cta text-white shadow-[0_15px_30px_rgba(var(--mento-cta-rgb),0.3)] hover:bg-mento-cta-hover rounded-mento-full',
};


const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-mento-md py-mento-xs text-body',
  md: 'px-mento-lg py-mento-sm text-body',
  lg: 'px-mento-xl py-mento-md text-body-lg',
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) => {
  const classes = cn(
    'inline-flex items-center justify-center transition-all duration-200 font-medium active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
