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
  title: 'PPF TPU Kaplama | KAR PLUS İzmir',
  description: 'İzmir\'de profesyonel PPF TPU kaplama hizmetleri. Araçlarınız için mükemmel koruma çözümleri.',
};

export default function PPFTPUKaplamaPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<div className="h-[600px] bg-gray-200"></div>}>
        <ServicePage 
          title="PPF TPU Kaplama"
          description="KAR PLUS olarak, İzmir'de profesyonel PPF (Paint Protection Film) ve TPU kaplama hizmetleri sunuyoruz. Bu görünmez koruyucu film, aracınızın boyasını taş çizikleri, böcek lekeleri, kuş pisliği ve diğer çevresel etkenlerden korur. Kendini iyileştirme özelliğine sahip bu filmler, aracınızı yıllarca yeni gibi tutmanızı sağlar."
          features={[
            "Yüksek kaliteli PPF ve TPU malzemeler",
            "Şeffaf ve görünmez koruma",
            "Kendini iyileştirme teknolojisi",
            "UV dayanıklılık",
            "Profesyonel uygulama",
            "Tam veya kısmi kaplama seçenekleri",
          ]}
          benefits={[
            "Aracınızı çiziklerden ve taş çarpmalarından korur",
            "Boyayı kimyasal lekelerden ve asit yağmurlarından korur",
            "Aracınızın değerini korur",
            "Görünümünü bozmadan mükemmel koruma sağlar",
            "Bakımı kolaydır ve uzun ömürlüdür",
            "İstendiğinde hasarsız bir şekilde çıkarılabilir",
          ]}
          imagePath="/images/services/ppf-tpu-kaplama.jpg"
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