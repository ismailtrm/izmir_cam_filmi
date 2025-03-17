import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import Image from 'next/image';

// Import client components with dynamic import for better hydration
const Header = dynamic(() => import('../components/Header'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: true });
const BackToTop = dynamic(() => import('../components/BackToTop'));
const WhatsAppButton = dynamic(() => import('../components/WhatsAppButton'));
const ClientOnly = dynamic(() => import('../components/ClientOnly'));

export const metadata: Metadata = {
  title: 'Özel Tasarımlar | KAR PLUS İzmir',
  description: 'İzmir\'de özel tasarım araç kaplama ve cam filmi uygulamaları. Kişiye özel tasarım ve uygulamalar.',
};

// Mock design projects - replace with your real projects
const designProjects = [
  {
    id: 1,
    title: 'Spor Araç Kaplama Tasarımı',
    description: 'Yarış temalı özel tasarım araç kaplaması. Müşterinin talepleri doğrultusunda tasarlanan ve uygulanan spor araç tasarımı.',
    imagePath: '/images/designs/design1.jpg',
    features: [
      'Tamamen özel tasarım',
      'Yarış konsepti',
      'Yüksek kaliteli baskı',
      'UV dayanıklı malzeme'
    ]
  },
  {
    id: 2,
    title: 'Kurumsal Filo Araç Giydirme',
    description: 'Kurumsal kimliğe uygun filo araçları için özel tasarlanmış kaplama çözümleri. Logo, renk ve kurumsal kimlik unsurları araç tasarımına entegre edilmiştir.',
    imagePath: '/images/designs/design2.jpg',
    features: [
      'Kurumsal kimlik uyumlu',
      'Logo ve marka renkleri',
      'Dayanıklı dış mekan baskı',
      'Kolay tanınabilirlik'
    ]
  },
  {
    id: 3,
    title: 'Lüks Araç Özel Kaplama',
    description: 'Premium araçlar için özel tasarlanmış lüks görünüm sağlayan kaplama uygulamaları. Mat ve parlak kaplamaların kombinasyonu ile elde edilen benzersiz görünüm.',
    imagePath: '/images/designs/design3.jpg',
    features: [
      'Lüks görünüm',
      'Mat ve parlak kombinasyonu',
      'Özel detaylar',
      'Premium malzemeler'
    ]
  },
  {
    id: 4,
    title: 'Ticari Araç Reklam Giydirmesi',
    description: 'İşletmeler için ticari araçların reklam amaçlı giydirilmesi. Mobil reklam imkanı sunan, görsel etki yaratan araç kaplamaları.',
    imagePath: '/images/designs/design4.jpg',
    features: [
      'İletişim bilgileri',
      'Logo ve ürün görselleri',
      'Dikkat çekici tasarım',
      'Yüksek görünürlük'
    ]
  }
];

export default function OzelTasarimlarPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Özel Tasarım Çözümlerimiz
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              KAR PLUS olarak kişiye ve kuruma özel tasarım kaplama ve cam filmi çözümleri sunuyoruz. 
              Hayalinizdeki tasarımı gerçeğe dönüştürmek için profesyonel ekibimizle yanınızdayız.
            </p>
          </div>
          
          <div className="space-y-12">
            {designProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden ${index % 2 === 0 ? 'md:flex' : 'md:flex md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <p className="text-gray-500">Görsel yükleniyor...</p>
                  </div>
                  <Image 
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Özellikler:</h3>
                  <ul className="list-disc pl-5 text-gray-600 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-red-600 text-white rounded-lg p-8 mt-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Size Özel Tasarım İçin</h2>
              <p className="mb-8 max-w-3xl mx-auto">
                Kendi özel tasarımınızı hayata geçirmek için bizimle iletişime geçin. 
                Profesyonel tasarım ekibimiz fikirlerinizi gerçeğe dönüştürmek için yanınızda.
              </p>
              <a 
                href="/iletisim" 
                className="inline-block bg-white text-red-600 font-semibold py-3 px-8 rounded-lg transition duration-300 hover:bg-gray-100"
              >
                ÜCRETSİZ FİYAT TEKLİFİ ALIN
              </a>
            </div>
          </div>
        </div>
      </div>
      
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