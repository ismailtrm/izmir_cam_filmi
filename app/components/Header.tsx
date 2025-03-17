'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaGlobe, FaPhone } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="w-full">
      {/* Top bar with contact info and social media */}
      <div className="bg-[#14182f] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="https://www.instagram.com/izmircamfilmi/" target="_blank" className="hover:text-gray-300 flex items-center">
              <FaInstagram className="mr-1" /> <span className="hidden sm:inline">izmircamfilmi</span>
            </Link>
            <Link href="https://izmircamfilmkaplama.com" target="_blank" className="hover:text-gray-300 flex items-center">
              <FaGlobe className="mr-1" /> <span className="hidden sm:inline">izmircamfilmkaplama.com</span>
            </Link>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-6">
            <Link href="tel:05458207084" className="flex items-center hover:text-gray-300">
              <FaPhone className="mr-1" /> 0545 820 70 84
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white shadow-md relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              {!logoError ? (
                <img 
                  src="/images/logo.png" 
                  alt="KAR PLUS" 
                  width={120} 
                  height={40} 
                  className="object-contain" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-gray-700 font-bold">KAR PLUS</span>
              )}
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              ANA SAYFA
            </Link>
            <Link href="/oto-cam-filmi" className="text-gray-700 hover:text-gray-900">
              OTO CAM FİLMİ
            </Link>
            <Link href="/bina-cam-filmi" className="text-gray-700 hover:text-gray-900">
              BİNA CAM FİLMİ
            </Link>
            <Link href="/guvenlik-filmi" className="text-gray-700 hover:text-gray-900">
              GÜVENLİK FİLMİ
            </Link>
            <Link href="/boya-koruma-filmi" className="text-gray-700 hover:text-gray-900">
              BOYA KORUMA FİLMİ
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-gray-900">
              İLETİŞİM
            </Link>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute z-50 w-full shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ANA SAYFA
                </Link>
                <Link 
                  href="/oto-cam-filmi" 
                  className="text-gray-700 hover:text-gray-900 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  OTO CAM FİLMİ
                </Link>
                <Link 
                  href="/bina-cam-filmi" 
                  className="text-gray-700 hover:text-gray-900 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  BİNA CAM FİLMİ
                </Link>
                <Link 
                  href="/guvenlik-filmi" 
                  className="text-gray-700 hover:text-gray-900 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GÜVENLİK FİLMİ
                </Link>
                <Link 
                  href="/boya-koruma-filmi" 
                  className="text-gray-700 hover:text-gray-900 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  BOYA KORUMA FİLMİ
                </Link>
                <Link 
                  href="/iletisim" 
                  className="text-gray-700 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  İLETİŞİM
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 