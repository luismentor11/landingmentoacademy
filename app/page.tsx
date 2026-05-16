import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ProblemSection } from '@/components/home/ProblemStats';
import { HowItWorksSection } from '@/components/home/Method';
import { IndustriesSection } from '@/components/home/Industries';
import { SocialProofSection } from '@/components/home/SocialProof';
import { ScienceSection } from '@/components/home/ScienceTeaser';
import { ForLeadersSection } from '@/components/home/ForTrainers';
import { ModulesSection } from '@/components/home/Modules';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-mento-bg">
      <Header />
      <Hero />
      <ModulesSection />
      <ProblemSection />
      <HowItWorksSection />
      <IndustriesSection />
      <SocialProofSection />
      <ScienceSection />
      <ForLeadersSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
