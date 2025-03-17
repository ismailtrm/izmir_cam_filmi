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
  title: 'Oto Cam Filmi | KAR PLUS İzmir',
  description: 'İzmir\'de profesyonel oto cam filmi uygulamaları. Güneş ışınlarından korunun, konfor ve gizlilik sağlayın.',
};

export default function OtoCamFilmiPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<div className="h-[600px] bg-gray-200"></div>}>
        <ServicePage 
          title="Oto Cam Filmi"
          description="KAR PLUS olarak, İzmir'de araçlarınızın camları için yüksek kaliteli cam filmi uygulamaları sunuyoruz. Oto cam filmlerimiz sadece görsel bir dokunuş değil, aynı zamanda araç içi konforu artıran, güneş ışınlarını filtreleyen ve gizlilik sağlayan fonksiyonel bir çözümdür. Farklı tonlarda ve özelliklerde cam filmi seçeneklerimiz ile araç camlarınızı yükseltiyoruz."
          features={[
            "UV ışınlarını %99'a kadar filtreleme",
            "Farklı kararma tonları (light, medium, dark)",
            "Isı yalıtımı sağlama",
            "Çizilmeye dayanıklı yüzey",
            "Premium marka cam filmleri",
            "Profesyonel uygulama",
          ]}
          benefits={[
            "Güneş ışınlarından korunma",
            "Araç içi sıcaklığı düşürür",
            "Yakıt tasarrufu sağlar",
            "Özel hayatınızı korur",
            "Kaza anında cam kırılmalarını azaltır",
            "İç mekan döşemelerinizi solmaktan korur",
          ]}
          imagePath="/images/services/oto-cam-filmi.jpg"
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