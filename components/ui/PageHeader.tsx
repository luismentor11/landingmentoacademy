import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export const PageHeader = ({ title, subtitle, badge }: PageHeaderProps) => {
  return (
    <Section variant="default" className="pt-mento-3xl pb-mento-xl border-b border-white/5">
      <Container>
        <div className="max-w-4xl">
          {badge && (
            <div className="inline-flex px-mento-md py-mento-xs bg-white/5 border border-white/10 rounded-full mb-mento-md">
              <span className="text-label font-bold text-mento-accent uppercase tracking-widest">
                {badge}
              </span>
            </div>
          )}
          <h1 className="text-display font-extrabold text-mento-text mb-mento-md">
            {title}
          </h1>
          {subtitle && (
            <p className="text-h4 text-mento-muted leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
};
