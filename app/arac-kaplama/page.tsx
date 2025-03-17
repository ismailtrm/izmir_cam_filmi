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
  title: 'Araç Kaplama | KAR PLUS İzmir',
  description: 'İzmir\'de profesyonel araç kaplama hizmetleri. Araçlarınız için renk değişimi ve koruma çözümleri.',
};

export default function AracKaplamaPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<div className="h-[600px] bg-gray-200"></div>}>
        <ServicePage 
          title="Araç Kaplama"
          description="KAR PLUS olarak, İzmir'de profesyonel araç kaplama hizmetleri sunuyoruz. Araçlarınızı koruyun ve görünümünü tamamen değiştirin. Premium malzemeler ve uzman işçiliğimizle aracınıza yeni bir görünüm kazandırıyoruz."
          features={[
            "Tam veya kısmi araç kaplamaları",
            "Çizilmeye dayanıklı yüksek kaliteli malzemeler",
            "Geniş renk ve doku seçenekleri",
            "Profesyonel uygulama",
            "Uzun ömürlü sonuçlar",
          ]}
          benefits={[
            "Aracınızın orijinal boyasını korur",
            "Yeni bir görünüm kazandırır",
            "Satış değerini korur",
            "UV ışınlarından ve çevresel etkenlerden korur",
            "İstendiğinde hasarsız bir şekilde çıkarılabilir",
          ]}
          imagePath="/images/services/arac-kaplama.jpg"
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