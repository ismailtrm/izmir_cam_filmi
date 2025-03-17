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
  title: 'Tekne Kaplama | KAR PLUS İzmir',
  description: 'İzmir\'de profesyonel tekne kaplama hizmetleri. Deniz araçlarınız için özel koruma ve görünüm çözümleri.',
};

export default function TekneKaplamaPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<div className="h-[600px] bg-gray-200"></div>}>
        <ServicePage 
          title="Tekne Kaplama"
          description="KAR PLUS olarak, İzmir'de deniz tutkunları için özel tekne kaplama hizmetleri sunuyoruz. Teknenizin estetik görünümünü iyileştirirken, zorlu deniz koşullarına karşı da koruma sağlıyoruz. Deniz tuzu, güneş ışınları ve diğer çevresel faktörlere dayanıklı özel kaplamalarımızla teknenizin ömrünü uzatıyoruz."
          features={[
            "Deniz koşullarına dayanıklı özel kaplamalar",
            "UV korumalı malzemeler",
            "Tuzlu suya dayanıklı kaplamalar",
            "Çizilmeye karşı dirençli yüzey",
            "Çeşitli renk ve doku seçenekleri",
            "Profesyonel uygulama",
          ]}
          benefits={[
            "Teknenizi deniz koşullarından korur",
            "Bakım maliyetlerini düşürür",
            "Estetik görünüm sağlar",
            "Teknenizin değerini korur",
            "Temizliği kolaylaştırır",
            "Uzun ömürlü performans sağlar",
          ]}
          imagePath="/images/services/tekne-kaplama.jpg"
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