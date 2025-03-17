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

// Mock video data - replace with your real video data
const videoContent = [
  {
    id: 1,
    title: 'Araç Kaplama Uygulaması',
    description: 'BMW M3 araç kaplama sürecinden görüntüler.',
    videoId: 'your-youtube-id-1', // Replace with actual YouTube video ID
    category: 'Araç Kaplama'
  },
  {
    id: 2,
    title: 'Oto Cam Filmi Uygulaması',
    description: 'Mercedes S Serisi oto cam filmi uygulaması.',
    videoId: 'your-youtube-id-2', // Replace with actual YouTube video ID
    category: 'Oto Cam Filmi'
  },
  {
    id: 3,
    title: 'Bina Cam Filmi Uygulaması',
    description: 'Ofis binası için güneş kontrol filmi uygulaması.',
    videoId: 'your-youtube-id-3', // Replace with actual YouTube video ID
    category: 'Bina Cam Filmi'
  },
  {
    id: 4,
    title: 'PPF Koruma Filmi Uygulaması',
    description: 'Porsche 911 ön tampon Paint Protection Film (PPF) uygulaması.',
    videoId: 'your-youtube-id-4', // Replace with actual YouTube video ID
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
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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