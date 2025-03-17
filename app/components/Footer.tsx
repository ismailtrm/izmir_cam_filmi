import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#14182f] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-6">ROYAL CLASS GARAGE</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Ana Sayfa</Link></li>
              <li><Link href="/tekne-kaplama" className="hover:text-gray-300">Tekne Kaplama</Link></li>
              <li><Link href="/oto-kuafor" className="hover:text-gray-300">Oto Kuaför</Link></li>
              <li><Link href="/bodykit" className="hover:text-gray-300">Bodykit</Link></li>
              <li><Link href="/resimler" className="hover:text-gray-300">Resimler</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-gray-300">Hakkımızda</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">HİZMETLERİMİZ</h3>
            <ul className="space-y-2">
              <li><Link href="/arac-kaplama" className="hover:text-gray-300">Araç Kaplama</Link></li>
              <li><Link href="/cam-filmi" className="hover:text-gray-300">Cam Filmi</Link></li>
              <li><Link href="/kisiye-ozel-tasarim" className="hover:text-gray-300">Kişiye Özel Tasarım</Link></li>
              <li><Link href="/arac-yazilim" className="hover:text-gray-300">Araç Yazılım</Link></li>
              <li><Link href="/videolar" className="hover:text-gray-300">Videolar</Link></li>
              <li><Link href="/iletisim" className="hover:text-gray-300">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">İletişim Bilgilerimiz</h3>
            <p className="mb-4">TEL: (232) 435 01 58</p>
            <p className="mb-4">Email: destek@royalclassgarage.com</p>
            <p className="mb-8">
              Royal Class Otomotiv San. Tic. ve Ltd. Şti.<br />
              Kazımdirik Mahallesi Sanayi Caddesi No: 60 - 62 Bornova<br />
              İZMİR
            </p>
            <Link href="/harita" className="text-gray-300 hover:text-white underline">Haritada göster</Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="h-10">
              <img 
                src="/images/logo-white.png" 
                alt="Royal Class Garage" 
                className="h-10 object-contain" 
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  // Show text instead
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<span class="text-yellow-500 font-bold">ROYAL CLASS GARAGE</span>';
                  }
                }}
              />
            </div>
          </div>
          
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2016 Tüm Hakları Royal Class Otomotiv Tic. San. ve Ltd. Şti. aittir.
          </p>
          
          <div className="flex space-x-4">
            <span className="text-gray-400 mr-2">SOSYAL MEDYA</span>
            <Link href="https://facebook.com" className="hover:text-gray-300">
              <FaFacebook />
            </Link>
            <Link href="https://instagram.com" className="hover:text-gray-300">
              <FaInstagram />
            </Link>
            <Link href="https://youtube.com" className="hover:text-gray-300">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 