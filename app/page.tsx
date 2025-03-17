import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ContentSection from './components/ContentSection';
import ClientOnly from './components/ClientOnly';

// Import client components with dynamic import for better hydration
const Header = dynamic(() => import('./components/Header'), { ssr: true });
const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: true });
const Footer = dynamic(() => import('./components/Footer'), { ssr: true });
// Import BackToTop component
const BackToTop = dynamic(() => import('./components/BackToTop'));
const WhatsAppButton = dynamic(() => import('./components/WhatsAppButton'));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<div className="h-[500px] bg-gradient-to-r from-blue-900 to-black"></div>}>
        <HeroSection />
      </Suspense>
      
      <ContentSection />
      
      <Suspense fallback={<div className="h-[400px] bg-[#14182f]"></div>}>
        <Footer />
      </Suspense>
      
      <ClientOnly>
        <BackToTop />
        <WhatsAppButton />
      </ClientOnly>
    </main>
  );
}
