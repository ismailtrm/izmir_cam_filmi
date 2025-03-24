'use client';

import Link from 'next/link';
import { FaInstagram, FaGlobe, FaPhone } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  
  return (
    <footer className="bg-[#14182f] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-6">KAR PLUS</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Ana Sayfa</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">HİZMETLERİMİZ</h3>
            <ul className="space-y-2">
              <li><Link href="/oto-cam-filmi" className="hover:text-gray-300">Oto Cam Filmi</Link></li>
              <li><Link href="/bina-cam-filmi" className="hover:text-gray-300">Bina Cam Filmi</Link></li>
              <li><Link href="/guvenlik-filmi" className="hover:text-gray-300">Güvenlik Filmi</Link></li>
              <li><Link href="/boya-koruma-filmi" className="hover:text-gray-300">Boya Koruma Filmi</Link></li>
              <li><Link href="/arac-kaplama" className="hover:text-gray-300">Araç Kaplama</Link></li>
              <li><Link href="/ppf-tpu-kaplama" className="hover:text-gray-300">PPF TPU Kaplama</Link></li>
              <li><Link href="/iletisim" className="hover:text-gray-300">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">İletişim Bilgilerimiz</h3>
            <p className="mb-4 flex items-center">
              <FaPhone className="mr-2" /> 0545 820 70 84
            </p>
            <p className="mb-4 flex items-center">
              <FaInstagram className="mr-2" /> izmircamfilm
            </p>
            <p className="mb-4 flex items-center">
              <FaGlobe className="mr-2" /> izmircamfilmkaplama.com
            </p>
            <p className="mb-4">
              Ali Fuat Cebesoy Mah. 9125/6. Sk. 184 A, 35160 Karabağlar/İzmir
            </p>
            <div className="mt-6">
              <Link href="https://maps.app.goo.gl/DzoiYEBSy9wA44zm9" target="_blank" className="text-gray-300 hover:text-white underline">
                Haritada göster
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="h-10">
              {!logoError ? (
                <img 
                  src="/images/logo.png" 
                  alt="KAR PLUS" 
                  width={130}
                  className="h-8 object-contain mt-3" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-white font-bold">KAR PLUS</span>
              )}
            </div>
          </div>
          
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Tüm Hakları Saklıdır.
          </p>
          
          <div className="flex space-x-4">
            <span className="text-gray-400 mr-2">SOSYAL MEDYA</span>
            <Link href="https://www.instagram.com/izmircamfilm/" target="_blank" className="hover:text-gray-300">
              <FaInstagram />
            </Link>
            <Link href="https://izmircamfilmkaplama.com" target="_blank" className="hover:text-gray-300">
              <FaGlobe />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 