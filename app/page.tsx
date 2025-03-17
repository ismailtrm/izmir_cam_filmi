import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ContentSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
