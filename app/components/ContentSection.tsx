export default function ContentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">KAR PLUS Cam Filmi Hizmetleri</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-700 leading-relaxed mb-6">
            KAR PLUS olarak profesyonel cam filmi uygulama hizmetleri sunuyoruz. Oto cam filmi, bina cam filmi, güvenlik filmi ve boya koruma filmi ihtiyaçlarınız için kaliteli ürünler ve uzman kadromuzla yanınızdayız.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Oto Cam Filmi */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3 inline-block w-8 h-8 text-center rounded-full bg-red-600 text-white flex items-center justify-center">
                1
              </span>
              OTO CAM FİLMİ
            </h3>
            
            <p className="mb-6 text-gray-700">
              Aracınız için farklı ton seçenekleriyle (%70, %50, %35, %20, %5) cam filmi uygulama hizmeti.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Aracınızın içini güneş ışınlarına karşı korur.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Serin bir iç ortam sağlar.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Zararlı UV ışınlarını bloke eder.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Güvenlik ve mahremiyet sağlar.</p>
              </li>
            </ul>
          </div>
          
          {/* Bina Cam Filmi */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3 inline-block w-8 h-8 text-center rounded-full bg-red-600 text-white flex items-center justify-center">
                2
              </span>
              BİNA CAM FİLMİ
            </h3>
            
            <p className="mb-6 text-gray-700">
              Ev ve işyerleri için profesyonel bina cam filmi uygulama hizmeti.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Enerji tasarrufu sağlar.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>İç mekanları güneşin zararlı ışınlarından korur.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Mobilya ve eşyaların solmasını engeller.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Mahremiyet sağlar.</p>
              </li>
            </ul>
          </div>
          
          {/* Güvenlik Filmi */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3 inline-block w-8 h-8 text-center rounded-full bg-red-600 text-white flex items-center justify-center">
                3
              </span>
              GÜVENLİK FİLMİ
            </h3>
            
            <p className="mb-6 text-gray-700">
              Yüksek koruma sağlayan güvenlik filmi çözümleri.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Cam kırılmalarında parçalanmayı önler.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Hırsızlığa karşı ekstra koruma sağlar.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Deprem gibi doğal afetlerde zarar riskini azaltır.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>UV ışınlarına karşı koruma sağlar.</p>
              </li>
            </ul>
          </div>
          
          {/* Boya Koruma Filmi */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3 inline-block w-8 h-8 text-center rounded-full bg-red-600 text-white flex items-center justify-center">
                4
              </span>
              BOYA KORUMA FİLMİ
            </h3>
            
            <p className="mb-6 text-gray-700">
              Aracınızın boyasını çizilmelere ve dış etkenlere karşı koruyun.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Çizilmelere karşı koruma sağlar.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Taş ve yol atıklarından aracınızı korur.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>UV ışınlarının boyaya vereceği zararı engeller.</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">●</span>
                <p>Aracınızın değerini korur.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Tüm Cam Filmi Tonları</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="bg-[#dcdcdc] text-black px-6 py-3 rounded-lg font-bold">%70</div>
            <div className="bg-[#b3b3b3] text-black px-6 py-3 rounded-lg font-bold">%50</div>
            <div className="bg-[#808080] text-white px-6 py-3 rounded-lg font-bold">%35</div>
            <div className="bg-[#4d4d4d] text-white px-6 py-3 rounded-lg font-bold">%20</div>
            <div className="bg-[#1a1a1a] text-white px-6 py-3 rounded-lg font-bold">%5</div>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            İhtiyacınıza uygun ton seçenekleriyle cam filmi uygulaması yapıyoruz. Farklı filmlerin özelliklerini ve tonlarını görmek için bizi ziyaret edin.
          </p>
        </div>
      </div>
    </section>
  );
} 