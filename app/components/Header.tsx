import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="w-full">
      {/* Top bar with contact info and social media */}
      <div className="bg-[#14182f] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
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
          <div className="flex items-center space-x-6">
            <span>TEL: 0232 435 01 58</span>
            <span>-</span>
            <span>0534 551 35 58</span>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <img 
                src="/images/logo.png" 
                alt="Royal Class Garage" 
                width={120} 
                height={40} 
                className="object-contain" 
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  // Show text instead
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<span class="text-yellow-500 font-bold">ROYAL CLASS GARAGE</span>';
                  }
                }}
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              ANA SAYFA
            </Link>
            <Link href="/hizmetlerimiz" className="text-gray-700 hover:text-gray-900">
              HİZMETLERİMİZ
            </Link>
            <Link href="/resimler" className="text-gray-700 hover:text-gray-900">
              RESİMLER
            </Link>
            <Link href="/videolar" className="text-gray-700 hover:text-gray-900">
              VİDEOLAR
            </Link>
            <Link href="/ozel-tasarimlar" className="text-gray-700 hover:text-gray-900">
              ÖZEL TASARIMLAR
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-gray-900">
              HAKKIMIZDA
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-gray-900">
              İLETİŞİM
            </Link>
          </nav>
          
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 