import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// Import client components with dynamic import for better hydration
const Header = dynamic(() => import('../components/Header'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: true });
const ServicePage = dynamic(() => import('../components/ServicePage'), { ssr: true });
const BackToTop = dynamic(() => import('../components/BackToTop'));
const WhatsAppButton = dynamic(() => import('../components/WhatsAppButton'));
const ClientOnly = dynamic(() => import('../components/ClientOnly'));

export const metadata: Metadata = {
  title: 'Bina Cam Filmi | KAR PLUS İzmir',
  description: 'İzmir\'de konut ve işyerleri için profesyonel bina cam filmi uygulamaları. Enerji tasarrufu ve konfor sağlayın.',
};

export default function BinaCamFilmiPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<div className="h-[600px] bg-gray-200"></div>}>
        <ServicePage 
          title="Bina Cam Filmi"
          description="KAR PLUS olarak, İzmir'de ev, ofis ve ticari binalarınız için profesyonel cam filmi çözümleri sunuyoruz. Bina cam filmlerimiz, güneş ışınlarını kontrol ederken, enerji verimliliği sağlar, gizlilik sunar ve cam güvenliğini artırır. Modern binaların vazgeçilmez bir parçası olan cam filmlerimiz ile yaşam ve çalışma alanlarınızın konforunu artırıyoruz."
          features={[
            "Isı yalıtım filmleri",
            "Gizlilik sağlayan reflektif filmler",
            "Güvenlik ve emniyet filmleri",
            "UV korumalı filmler",
            "Dekoratif ve desenli filmler",
            "Profesyonel uygulama",
          ]}
          benefits={[
            "Enerji tasarrufu sağlar",
            "Güneş ışınlarını filtreleyerek mobilyaları korur",
            "Gizlilik ve güvenlik sağlar",
            "Cam kırılmaları durumunda yaralanma riskini azaltır",
            "İç mekan konforunu artırır",
            "Dış görünümü iyileştirir",
          ]}
          imagePath="/images/services/bina-cam-filmi.jpg"
        />
      </Suspense>
      
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