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
  title: 'Galeri | KAR PLUS İzmir',
  description: 'İzmir\'de KAR PLUS tarafından yapılan cam filmi ve araç kaplama çalışmalarımızı inceleyin.',
};

// Mock gallery images - replace with your real image data
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/1.jpg',
    alt: 'Araç Kaplama Çalışması',
    category: 'Araç Kaplama'
  },
  {
    id: 2,
    src: '/images/gallery/2.jpg',
    alt: 'Oto Cam Filmi Uygulaması',
    category: 'Oto Cam Filmi'
  },
  {
    id: 3,
    src: '/images/gallery/3.jpg',
    alt: 'Bina Cam Filmi Uygulaması',
    category: 'Bina Cam Filmi'
  },
  {
    id: 4,
    src: '/images/gallery/4.jpg',
    alt: 'PPF Uygulama',
    category: 'PPF TPU Kaplama'
  },
  {
    id: 5,
    src: '/images/gallery/5.jpg',
    alt: 'Tekne Kaplama',
    category: 'Tekne Kaplama'
  },
  {
    id: 6,
    src: '/images/gallery/6.jpg',
    alt: 'Güvenlik Filmi Uygulaması',
    category: 'Güvenlik Filmi'
  },
];

export default function GaleriPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
            KAR PLUS Çalışmalarımız
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-64 w-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <p className="text-gray-500">Görsel yükleniyor...</p>
                  </div>
                  <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {image.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-8">
              Daha fazla çalışmamızı görmek ve detaylı bilgi almak için bizimle iletişime geçin.
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              BİZE ULAŞIN
            </a>
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