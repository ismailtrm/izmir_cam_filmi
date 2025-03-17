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
  title: 'Güvenlik Filmi | KAR PLUS İzmir',
  description: 'İzmir\'de profesyonel güvenlik filmi uygulamaları. Ev ve iş yerleriniz için ekstra koruma sağlayın.',
};

export default function GuvenlikFilmiPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<div className="h-[600px] bg-gray-200"></div>}>
        <ServicePage 
          title="Güvenlik Filmi"
          description="KAR PLUS olarak, İzmir'de ev ve iş yerleriniz için özel güvenlik filmi çözümleri sunuyoruz. Güvenlik filmlerimiz, standart camları güçlendirerek kaza, hırsızlık veya doğal afet durumlarında ekstra koruma sağlar. Şeffaf yapısıyla görüntüyü etkilemeden camlarınızı daha dayanıklı hale getiriyoruz."
          features={[
            "Farklı kalınlıklarda güvenlik filmleri (4 mil, 8 mil, 12 mil)",
            "Şeffaf ve renksiz seçenekler",
            "Renkli ve reflektif güvenlik filmleri",
            "Patlamaya dayanıklı filmler",
            "Deprem güvenlik filmleri",
            "Profesyonel uygulama",
          ]}
          benefits={[
            "Kırılma durumunda cam parçalarını bir arada tutar",
            "Hırsızlığa karşı caydırıcılık sağlar",
            "Doğal afetlerde yaralanma riskini azaltır",
            "UV ışınlarını filtreleyerek eşyaları korur",
            "Gizlilik ve güvenliği artırır",
            "Sigorta maliyetlerini düşürebilir",
          ]}
          imagePath="/images/services/guvenlik-filmi.jpg"
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