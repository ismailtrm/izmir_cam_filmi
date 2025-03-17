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
  title: 'Boya Koruma Filmi | KAR PLUS İzmir',
  description: 'İzmir\'de profesyonel boya koruma filmi uygulamaları. Aracınızın boyasını uzun yıllar koruyun.',
};

export default function BoyaKorumaFilmiPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<div className="h-[600px] bg-gray-200"></div>}>
        <ServicePage 
          title="Boya Koruma Filmi"
          description="KAR PLUS olarak, İzmir'de araçlarınızın boyasını korumak için özel geliştirilmiş boya koruma filmi uygulamaları sunuyoruz. Bu görünmez koruma kalkanı, aracınızın boyasını taş çizikleri, böcek lekeleri, kuş pisliği ve diğer çevresel etkenlerden korur. Kendini iyileştirme özelliğine sahip filmlerimiz, aracınızın boyasını yıllarca yeni gibi tutar."
          features={[
            "Yüksek kaliteli TPU film malzemeleri",
            "Şeffaf ve görünmez koruma",
            "Kendini iyileştirme teknolojisi",
            "UV dayanıklılık",
            "Profesyonel uygulama",
            "Tam veya kısmi kaplama seçenekleri",
          ]}
          benefits={[
            "Aracınızın boyasını çiziklerden korur",
            "Boyayı kimyasal lekelerden ve asit yağmurlarından korur",
            "Aracın orijinal değerini korur",
            "Görünümünü bozmadan mükemmel koruma sağlar",
            "Yeni araçlar için uzun süreli koruma",
            "İstendiğinde hasarsız bir şekilde çıkarılabilir",
          ]}
          imagePath="/images/services/boya-koruma-filmi.jpg"
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