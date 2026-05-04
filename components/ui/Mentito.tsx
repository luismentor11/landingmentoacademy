'use client';

import Image from 'next/image';
import { cn } from '@/lib/cn';

type MentitoSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

interface MentitoProps {
  size?: MentitoSize;
  className?: string;
  priority?: boolean;
}

const sizeMap: Record<MentitoSize, { width: number; height: number; className: string }> = {
  sm: { width: 80, height: 96, className: 'w-20 h-24' },
  md: { width: 160, height: 192, className: 'w-40 h-48' },
  lg: { width: 240, height: 288, className: 'w-60 h-72' },
  xl: { width: 320, height: 384, className: 'w-80 h-96' },
  '2xl': { width: 400, height: 480, className: 'w-[400px] h-auto' },
  '3xl': { width: 480, height: 576, className: 'w-[480px] h-auto' },
  '4xl': { width: 560, height: 672, className: 'w-[560px] h-auto' },
};

export function Mentito({ size = 'md', className, priority = false }: MentitoProps) {
  const dims = sizeMap[size];
  return (
    <div
      className={cn(dims.className, className)}
      style={{ filter: 'hue-rotate(300deg)' }}
    >
      <Image
        src="/mentito-base.png"
        alt="Mentito, coach de Mento Academy"
        width={dims.width}
        height={dims.height}
        priority={priority}
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
