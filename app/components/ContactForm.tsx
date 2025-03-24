'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">İletişim</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Bize ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
              <div className="bg-red-600 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefon</h3>
              <p className="text-gray-700">0545 820 70 84</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
              <div className="bg-red-600 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">E-posta</h3>
              <p className="text-gray-700">info@izmircamfilmi.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center">
              <div className="bg-red-600 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Adres</h3>
              <p className="text-gray-700">Ali Fuat Cebesoy Mah. 9125/6. Sk. 184 A, 35160 Karabağlar/İzmir</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1">
              <div className="bg-blue-900 text-white p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Hizmetlerimiz</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="mr-2">●</span>
                      <p>Oto Cam Filmi</p>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">●</span>
                      <p>Bina Cam Filmi</p>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">●</span>
                      <p>Güvenlik Filmi</p>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">●</span>
                      <p>Boya Koruma Filmi</p>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">●</span>
                      <p>Araç Kaplama</p>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">●</span>
                      <p>PPF TPU Kaplama</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Çalışma Saatleri</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Pazartesi - Cuma:</span>
                      <span>09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Cumartesi:</span>
                      <span>09:00 - 14:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pazar:</span>
                      <span>Kapalı</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Konum</h3>
            <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.680448973458!2d27.105507076377872!3d38.3795131770945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdeea0800305d%3A0x54797688b8273b9e!2sAli%20Fuat%20Cebesoy%2C%209125%2F6.%20Sk.%20184%20A%2C%2035160%20Karaba%C4%9Flar%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1742827178461!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="KAR PLUS Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 