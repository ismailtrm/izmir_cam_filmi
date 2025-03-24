import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// Import client components with dynamic import for better hydration
const Header = dynamic(() => import('../components/Header'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: true });
const BackToTop = dynamic(() => import('../components/BackToTop'));
const WhatsAppButton = dynamic(() => import('../components/WhatsAppButton'));
const ClientOnly = dynamic(() => import('../components/ClientOnly'));

export const metadata: Metadata = {
  title: 'Videolar | KAR PLUS İzmir',
  description: 'İzmir\'de KAR PLUS tarafından yapılan cam filmi ve araç kaplama çalışmalarının video galerisi.',
};

// Video data
const videoContent = [
  {
    id: 1,
    title: 'PPF Koruma Filmi Uygulaması - Ön Tampon',
    description: 'Lüks araç ön tampon PPF (Paint Protection Film) uygulaması.',
    videoSrc: '/videos/ppf-kaplama1.mp4',
    posterSrc: '/images/video-thumbnails/ppf-kaplama1.png',
    category: 'PPF TPU Kaplama'
  },
  {
    id: 2,
    title: 'PPF Koruma Filmi Uygulaması - Kaput',
    description: 'Spor araç kaput koruma filmi uygulaması detayları.',
    videoSrc: '/videos/ppf-kaplama2.mp4',
    posterSrc: '/images/video-thumbnails/ppf-kaplama2.png',
    category: 'PPF TPU Kaplama'
  },
  {
    id: 3,
    title: 'PPF Koruma Filmi Uygulaması - Tam Araç',
    description: 'Lüks araç için tam gövde PPF koruma uygulaması.',
    videoSrc: '/videos/ppf-kaplama3.mp4',
    posterSrc: '/images/video-thumbnails/ppf-kaplama3.png',
    category: 'PPF TPU Kaplama'
  }
];

export default function VideolarPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Video Galeri
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoContent.map((video) => (
              <div 
                key={video.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl"
              >
                <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster={video.posterSrc} 
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                  </video>
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-2">
                    {video.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-8">
              Daha fazla video içeriğimiz için YouTube kanalımızı ziyaret edebilir veya detaylı bilgi için bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                YOUTUBE KANALIMIZ
              </a>
              <a
                href="/iletisim"
                className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                BİZE ULAŞIN
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