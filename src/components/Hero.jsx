import React from 'react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920" 
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/40"></div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transform Your Space
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light">
          Expert Interior Design & Execution
        </p>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Residential & Commercial Projects | Serving Gujarat & Beyond
        </p>
        
        {/* CTA Buttons - ZERO EFFECTS */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={scrollToPortfolio}
            className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold"
          >
            View Our Work
          </button>
          <button
            onClick={scrollToContact}
            className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;