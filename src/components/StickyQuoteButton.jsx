import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const StickyQuoteButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className={`fixed right-6 bottom-24 bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-orange-700 hover:scale-110 transition-all duration-300 z-40 flex items-center gap-3 font-semibold ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
      }`}
      aria-label="Get a quote"
    >
      <FileText size={24} />
      <span className="hidden md:inline">Get Quote</span>
      
      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulse-orange {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(234, 88, 12, 0.7);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(234, 88, 12, 0);
          }
        }
        button:not(:hover) {
          animation: pulse-orange 2s infinite;
        }
      `}</style>
    </button>
  );
};

export default StickyQuoteButton;