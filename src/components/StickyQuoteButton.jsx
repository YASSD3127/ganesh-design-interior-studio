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
  style={{
    position: 'fixed',
    right: '24px',
    bottom: '96px',
    backgroundColor: 'var(--primary)',
    color: 'white',
    padding: '16px 24px',
    borderRadius: '9999px',
    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
    zIndex: 40,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transform: isVisible ? 'translateX(0)' : 'translateX(128px)',
    opacity: isVisible ? 1 : 0,
    transition: 'transform 0.3s ease, opacity 0.3s ease'
  }}
  aria-label="Get a quote"
>
  <FileText size={24} />
  <span style={{ display: window.innerWidth >= 768 ? 'inline' : 'none' }}>
    Get Quote
  </span>
  
  {/* Pulse Animation */}
  <style jsx>{`
    @keyframes pulse-primary {
      0%, 100% {
        box-shadow: 0 0 0 0 rgba(188, 138, 115, 0.7);
      }
      50% {
        box-shadow: 0 0 0 15px rgba(188, 138, 115, 0);
      }
    }
    button:not(:hover) {
      animation: pulse-primary 2s infinite;
    }
  `}</style>
</button>
  );
};

export default StickyQuoteButton;