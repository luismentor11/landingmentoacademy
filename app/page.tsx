import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ProblemStats } from '@/components/home/ProblemStats';
import { Method } from '@/components/home/Method';
import { Industries } from '@/components/home/Industries';
import { ScienceTeaser } from '@/components/home/ScienceTeaser';
import { ForTrainers } from '@/components/home/ForTrainers';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-mento-bg">
      <Header />
      <Hero />
      <ProblemStats />
      <Method />
      <Industries />
      <ScienceTeaser />
      <ForTrainers />
      <FinalCTA />
      <Footer />
    </main>
  );
}
