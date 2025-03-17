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
  title: 'Hakkımızda | KAR PLUS İzmir',
  description: 'KAR PLUS İzmir olarak cam filmi ve araç kaplama konusunda uzman ekibimizle hizmetinizdeyiz. Firmamız hakkında bilgi edinin.',
};

export default function HakkimizdaPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Görsel yükleniyor...</p>
              </div>
              <Image
                src="/images/about/storefront.jpg"
                alt="KAR PLUS İşyeri"
                fill
                style={{ objectFit: 'cover' }}
                className="brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">KAR PLUS Hakkında</h1>
                  <p className="text-xl max-w-2xl drop-shadow-md">
                    İzmir'de Profesyonel Cam Filmi ve Araç Kaplama Hizmetleri
                  </p>
                </div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="p-8">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Biz Kimiz?</h2>
                <p className="text-gray-600 mb-4">
                  KAR PLUS olarak, İzmir'de 2010 yılından bu yana araç kaplama, cam filmi ve yüzey koruma konularında profesyonel hizmet veriyoruz. 
                  Müşteri memnuniyetini ön planda tutarak, en kaliteli malzemelerle en iyi hizmeti sunmayı amaçlıyoruz.
                </p>
                <p className="text-gray-600">
                  Deneyimli ekibimiz ve teknolojik altyapımızla, otomobil sahiplerinin, iş yerlerinin ve konutların ihtiyaçlarına özel çözümler üretiyoruz. 
                  Sektördeki gelişmeleri yakından takip ederek, en güncel ürün ve teknikleri müşterilerimize sunuyoruz.
                </p>
              </div>
              
              <div className="md:flex md:space-x-8 mb-12">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Misyonumuz</h2>
                  <p className="text-gray-600">
                    Müşterilerimize en yüksek kalitede hizmet sunarak araçlarını ve mekanlarını korumak, estetik görünüm katmak ve konfor sağlamaktır. 
                    Her uygulamada mükemmelliği hedefleyerek müşteri memnuniyetini en üst seviyede tutmak için çalışıyoruz.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Vizyonumuz</h2>
                  <p className="text-gray-600">
                    İzmir ve çevresinde araç kaplama, cam filmi ve yüzey koruma alanlarında akla gelen ilk marka olmak ve bu alandaki liderliğimizi sürdürmektir. 
                    Kalite, güven ve müşteri memnuniyeti üzerine kurulu bir hizmet anlayışıyla sektörde öncü olmayı hedefliyoruz.
                  </p>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Neden Biz?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="mb-3 text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Kaliteli Malzemeler</h3>
                    <p className="text-gray-600">
                      Sektörün en kaliteli ve garantili malzemelerini kullanıyoruz. Dayanıklılık ve uzun ömür için en iyi markaları tercih ediyoruz.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="mb-3 text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Uzman Ekip</h3>
                    <p className="text-gray-600">
                      Deneyimli ve profesyonel uzman kadromuzla hatasız uygulama garantisi sunuyoruz. Ekibimiz sürekli olarak eğitim alarak güncel kalıyor.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="mb-3 text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Hızlı Hizmet</h3>
                    <p className="text-gray-600">
                      Zamanında ve hızlı hizmet anlayışımızla müşterilerimizin zamanını değerli kılıyoruz. Randevu sistemiyle beklemesiz hizmet sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">İletişime Geçin</h2>
                <p className="text-gray-600 text-center mb-6">
                  Daha fazla bilgi almak veya randevu oluşturmak için bizimle hemen iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/iletisim"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center"
                  >
                    BİZE ULAŞIN
                  </a>
                  <a
                    href="tel:05458207084"
                    className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 text-center"
                  >
                    HEMEN ARAYIN: 0545 820 70 84
                  </a>
                </div>
              </div>
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