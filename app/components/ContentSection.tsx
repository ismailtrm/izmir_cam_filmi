'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaStar, FaQuoteLeft, FaShieldAlt, FaCar, FaBuilding, FaPaintBrush } from 'react-icons/fa';

export default function ContentSection() {
  const [activeTab, setActiveTab] = useState(0);
  
  const testimonials = [
    {
      name: "Ahmet Y.",
      text: "Aracıma uygulanan cam filmi hem kaliteli hem de uygun fiyatlıydı. KAR PLUS'ın profesyonel ekibine teşekkür ederim.",
      rating: 5
    },
    {
      name: "Sevgi K.",
      text: "Ofisimizin camlarına uygulanan filmi sayesinde hem yaz aylarında sıcaktan korunuyoruz hem de enerji tasarrufu sağlıyoruz.",
      rating: 5
    },
    {
      name: "Mehmet A.",
      text: "Boya koruma filmi sayesinde aracım ilk günkü gibi parlak duruyor. Kesinlikle tavsiye ederim.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">KAR PLUS Cam Filmi</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">Kalite ve profesyonellik ile İzmir'de cam filmi çözümleri sunuyoruz</p>
        
        <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 leading-relaxed mb-6">
            KAR PLUS olarak profesyonel cam filmi uygulama hizmetleri sunuyoruz. Oto cam filmi, bina cam filmi, güvenlik filmi ve boya koruma filmi ihtiyaçlarınız için kaliteli ürünler ve uzman kadromuzla yanınızdayız.
          </p>
          
          <div className="flex justify-center mb-6">
            <Link href="/iletisim" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
              Detaylı Bilgi Alın
            </Link>
          </div>
        </div>
        
        {/* Service tabs */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            <button 
              onClick={() => setActiveTab(0)}
              className={`flex items-center px-4 py-3 rounded-lg transition-all ${activeTab === 0 ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              <FaCar className="mr-2" /> OTO CAM FİLMİ
            </button>
            <button 
              onClick={() => setActiveTab(1)}
              className={`flex items-center px-4 py-3 rounded-lg transition-all ${activeTab === 1 ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              <FaBuilding className="mr-2" /> BİNA CAM FİLMİ
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              className={`flex items-center px-4 py-3 rounded-lg transition-all ${activeTab === 2 ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              <FaShieldAlt className="mr-2" /> GÜVENLİK FİLMİ
            </button>
            <button 
              onClick={() => setActiveTab(3)}
              className={`flex items-center px-4 py-3 rounded-lg transition-all ${activeTab === 3 ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              <FaPaintBrush className="mr-2" /> BOYA KORUMA FİLMİ
            </button>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8 transition-all">
            {activeTab === 0 && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                  <FaCar className="mr-3 text-red-600" size={24} />
                  OTO CAM FİLMİ
                </h3>
                
                <p className="mb-6 text-gray-700">
                  Aracınız için farklı ton seçenekleriyle (%70, %50, %35, %20, %5) cam filmi uygulama hizmeti.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Aracınızın içini güneş ışınlarına karşı korur.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Serin bir iç ortam sağlar.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Zararlı UV ışınlarını bloke eder.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Güvenlik ve mahremiyet sağlar.</p>
                  </li>
                </ul>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                  <FaBuilding className="mr-3 text-red-600" size={24} />
                  BİNA CAM FİLMİ
                </h3>
                
                <p className="mb-6 text-gray-700">
                  Ev ve işyerleri için profesyonel bina cam filmi uygulama hizmeti.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Enerji tasarrufu sağlar.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>İç mekanları güneşin zararlı ışınlarından korur.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Mobilya ve eşyaların solmasını engeller.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Mahremiyet sağlar.</p>
                  </li>
                </ul>
              </div>
            )}
            
            {activeTab === 2 && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                  <FaShieldAlt className="mr-3 text-red-600" size={24} />
                  GÜVENLİK FİLMİ
                </h3>
                
                <p className="mb-6 text-gray-700">
                  Yüksek koruma sağlayan güvenlik filmi çözümleri.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Cam kırılmalarında parçalanmayı önler.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Hırsızlığa karşı ekstra koruma sağlar.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Deprem gibi doğal afetlerde zarar riskini azaltır.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>UV ışınlarına karşı koruma sağlar.</p>
                  </li>
                </ul>
              </div>
            )}
            
            {activeTab === 3 && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                  <FaPaintBrush className="mr-3 text-red-600" size={24} />
                  BOYA KORUMA FİLMİ
                </h3>
                
                <p className="mb-6 text-gray-700">
                  Aracınızın boyasını çizilmelere ve dış etkenlere karşı koruyun.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Çizilmelere karşı koruma sağlar.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Taş ve yol atıklarından aracınızı korur.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>UV ışınlarının boyaya vereceği zararı engeller.</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-1">●</span>
                    <p>Aracınızın değerini korur.</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Tint percentages */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-bold mb-8">Tüm Cam Filmi Tonları</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            <div className="bg-[#dcdcdc] text-black px-6 py-4 rounded-lg font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">%70</div>
            <div className="bg-[#b3b3b3] text-black px-6 py-4 rounded-lg font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">%50</div>
            <div className="bg-[#808080] text-white px-6 py-4 rounded-lg font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">%35</div>
            <div className="bg-[#4d4d4d] text-white px-6 py-4 rounded-lg font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">%20</div>
            <div className="bg-[#1a1a1a] text-white px-6 py-4 rounded-lg font-bold shadow-md hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">%5</div>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            İhtiyacınıza uygun ton seçenekleriyle cam filmi uygulaması yapıyoruz. Farklı filmlerin özelliklerini ve tonlarını görmek için bizi ziyaret edin.
          </p>
        </div>
        
        {/* Testimonials Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Müşteri Yorumları</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <FaQuoteLeft className="text-red-600 opacity-30 text-4xl mb-4" />
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">{testimonial.name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900 to-black text-white rounded-xl p-8 md:p-12 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Profesyonel Cam Filmi Çözümleri</h3>
          <p className="mb-8 text-lg">Ücretsiz keşif ve fiyat teklifi için hemen bize ulaşın</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/iletisim" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-all">
              ÜCRETSİZ FİYAT TEKLİFİ
            </Link>
            <Link href="tel:05458207084" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-lg text-center transition-all">
              BİZİ ARAYIN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 