'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905458207084"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 bg-green-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all transform hover:scale-105"
      aria-label="WhatsApp ile İletişim"
    >
      <FaWhatsapp size={24} />
    </a>
  );
} 