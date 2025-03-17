'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  imagePath: string;
}

export default function ServicePage({ 
  title, 
  description, 
  features, 
  benefits, 
  imagePath
}: ServicePageProps) {
  return (
    <div className="pt-10 pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <motion.h1 
                className="text-3xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Özellikler</h2>
                <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-600">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Faydaları</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
              {imagePath ? (
                <Image
                  src={imagePath}
                  alt={title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="h-full w-full"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Görsel yükleniyor...</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="p-8 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Profesyonel Hizmetlerimizden Faydalanın</h2>
              <p className="text-gray-600 mb-8">
                KAR PLUS olarak İzmir'de en kaliteli {title.toLowerCase()} hizmetini sunuyoruz. 
                Detaylı bilgi ve fiyat teklifi için hemen iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/iletisim" 
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  ÜCRETSİZ FİYAT TEKLİFİ ALIN
                </Link>
                <Link 
                  href="tel:05458207084" 
                  className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  BİZİ ARAYIN: 0545 820 70 84
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 