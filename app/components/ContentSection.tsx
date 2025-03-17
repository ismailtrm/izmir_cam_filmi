export default function ContentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Cam Filmi</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-700 leading-relaxed mb-6">
            Cam filmi uygulamalarımızda falçata ile kesme veya parça sökme yapmıyoruz. Kesim makinamız ile tüm araçların cam kalıpları şirketimiz bünyesinde mevcut. Birebir kalıp çıkartarak cam filmlerinizi titizlikle uygulayarak ORACAL marka Almanya menşeili %100 garantili cam filmi ile işlemlerimizi tamamlıyoruz.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="mr-3 inline-block w-8 h-8 text-center rounded-full bg-red-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto mt-1.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
            ORACAL Cam Filmi
          </h3>
          
          <p className="mb-6 text-gray-700">
            10 YIL Garantili 3M Cam Filmi Serileri.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">●</span>
              <p>Aracınızın içini ısıya karşı %99 korur.</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">●</span>
              <p>Daha serin bir iç ortam ile konfor sağlar.</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">●</span>
              <p>Döşemeleri ve iç trimleri güneşten korur.</p>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">●</span>
              <p>Daha rahat görüş ile konforlu sürüş.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 