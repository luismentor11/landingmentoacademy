import React from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn('max-w-7xl mx-auto px-mento-md md:px-mento-lg lg:px-mento-xl', className)}>
      {children}
    </div>
  );
};
