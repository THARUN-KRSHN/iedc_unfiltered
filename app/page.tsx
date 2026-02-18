
import Hero from '@/components/Hero';
import Instructions from '@/components/Instructions';
import ExcomGrid from '@/components/ExcomGrid';
import Memories from '@/components/Memories';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Instructions />
      <ExcomGrid />
      <Memories />
      <Footer />
    </div>
  );
}
