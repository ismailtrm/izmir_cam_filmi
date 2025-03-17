'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">İletişim</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Soru ve talepleriniz için bize ulaşabilir, ücretsiz fiyat teklifi alabilirsiniz.
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
              <p className="text-gray-700">İzmir</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Bize Yazın</h3>
                
                {submitSuccess ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <p>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
                  </div>
                ) : null}
                
                {submitError ? (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    <p>Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Adınız Soyadınız</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta Adresiniz</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon Numaranız</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Hizmet</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="oto-cam-filmi">Oto Cam Filmi</option>
                      <option value="bina-cam-filmi">Bina Cam Filmi</option>
                      <option value="guvenlik-filmi">Güvenlik Filmi</option>
                      <option value="boya-koruma-filmi">Boya Koruma Filmi</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'GÖNDER'}
                  </button>
                </form>
              </div>
              
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
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198769.55288157454!2d26.9620691!3d38.3544802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWlyLCBUw7xya2l5ZQ!5e0!3m2!1str!2s!4v1660556582669!5m2!1str!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
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