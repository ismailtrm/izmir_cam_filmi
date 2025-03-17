export default function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-blue-900 to-black">
      <div className="absolute inset-0">
        <img 
          src="/images/hero-car.jpg" 
          alt="Luxury car with window tinting" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // If the image fails to load, we already have a gradient background
            const target = e.target as HTMLElement;
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cam Filmi</h1>
          <p className="text-xl md:text-2xl font-light mb-4">RoyalClassGarage</p>
        </div>
      </div>
    </section>
  );
} 