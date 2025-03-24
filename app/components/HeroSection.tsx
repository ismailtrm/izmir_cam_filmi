'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Use a placeholder if not mounted yet (server render)
  if (!isMounted) {
    return (
      <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-blue-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">KAR PLUS</h1>
            <p className="text-xl md:text-2xl font-light mb-4">Oto Cam Filmi - Bina Cam Filmi</p>
            <p className="text-lg md:text-xl font-light mb-8">Güvenlik Filmi - Boya Koruma Filmi</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/iletisim" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-all transform hover:scale-105">
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
  
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-blue-900 to-black">
      <div className="absolute inset-0">
        {!imageError && (
          <img 
            src="\images\hero-car.jpg" 
            alt="Luxury car with window tinting" 
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">KAR PLUS</h1>
          <p className="text-xl md:text-2xl font-light mb-4">Oto Cam Filmi - Bina Cam Filmi</p>
          <p className="text-lg md:text-xl font-light mb-8">Güvenlik Filmi - Boya Koruma Filmi</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/iletisim" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-all transform hover:scale-105">
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