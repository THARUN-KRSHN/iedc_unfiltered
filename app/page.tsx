
import Hero from '@/components/Hero';
import Instructions from '@/components/Instructions';
import Stats from '@/components/Stats';
import ExcomGrid from '@/components/ExcomGrid';
import Memories from '@/components/Memories';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Instructions />
      <Stats />
      <ExcomGrid />
      <Memories />
      <Footer />
    </div>
  );
}
