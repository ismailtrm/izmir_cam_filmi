import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import ClientOnly from '../components/ClientOnly';

// Dynamic imports
const Header = dynamic(() => import('../components/Header'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: true });
const ContactForm = dynamic(() => import('../components/ContactForm'));
const BackToTop = dynamic(() => import('../components/BackToTop'));
const WhatsAppButton = dynamic(() => import('../components/WhatsAppButton'));

export const metadata: Metadata = {
  title: 'İletişim | KAR PLUS Cam Filmi İzmir',
  description: 'İzmir\'de cam filmi uygulamaları için bizimle iletişime geçin. Telefon, e-posta ve adres bilgilerimiz ile size hizmet vermekten memnuniyet duyarız.',
};

export default function ContactPage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[80px]"></div>}>
        <Header />
      </Suspense>
      
      <div className="h-20 bg-blue-900"></div>
      
      <ContactForm />
      
      <Suspense fallback={<div className="h-[400px] bg-[#14182f]"></div>}>
        <Footer />
      </Suspense>
      
      <ClientOnly>
        <BackToTop />
        <WhatsAppButton />
      </ClientOnly>
    </main>
  );
} 