'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
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
      <div className="bg-white shadow-md relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              {!logoError ? (
                <img 
                  src="/images/logo.png" 
                  alt="Royal Class Garage" 
                  width={120} 
                  height={40} 
                  className="object-contain" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-yellow-500 font-bold">ROYAL CLASS GARAGE</span>
              )}
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
                  href="/hizmetlerimiz" 
                  className="text-gray-700 hover:text-gray-900 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HİZMETLERİMİZ
                </Link>
                <Link 
                  href="/resimler" 
                  className="text-gray-700 hover:text-gray-900 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  RESİMLER
                </Link>
                <Link 
                  href="/videolar" 
                  className="text-gray-700 hover:text-gray-900 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  VİDEOLAR
                </Link>
                <Link 
                  href="/ozel-tasarimlar" 
                  className="text-gray-700 hover:text-gray-900 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ÖZEL TASARIMLAR
                </Link>
                <Link 
                  href="/hakkimizda" 
                  className="text-gray-700 hover:text-gray-900 border-b border-gray-100 pb-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HAKKIMIZDA
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