import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const StickyQuoteButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px
      if (window.scrollY > 400) {
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

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;

  // Position above WhatsApp button
  // WhatsApp is at bottom: 20-24px
  // WhatsApp button is 50-56px high
  // Add gap of 12-16px
  const bottomPosition = isMobile 
    ? (isSmall ? '82px' : '88px')  // 20px + 50/52px + 12/16px
    : '96px';  // 24px + 56px + 16px

  return (
    <button
      onClick={scrollToContact}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#2A2A2A';
        e.target.style.transform = isVisible ? 'translateX(0)' : 'translateX(120%)';
        e.target.style.boxShadow = '0 8px 24px rgba(42, 42, 42, 0.3)';
        setIsHovered(false);
      }}
      style={{
        position: 'fixed',
        right: isMobile ? '20px' : '24px',
        bottom: bottomPosition,
        backgroundColor: '#2A2A2A',
        color: '#FFFFFF',
        padding: isSmall ? '12px' : (isMobile ? '14px' : '16px 24px'),
        border: 'none',
        borderRadius: '4px',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '0' : '12px',
        fontSize: isSmall ? '10px' : (isMobile ? '11px' : '12px'),
        fontWeight: '600',
        letterSpacing: isMobile ? '1px' : '2px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transform: isVisible ? 'translateX(0)' : 'translateX(120%)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 8px 24px rgba(42, 42, 42, 0.3)',
        outline: 'none',
        minWidth: isMobile ? '48px' : 'auto',
        justifyContent: 'center'
      }}
      onMouseMove={(e) => {
        if (isHovered) {
          e.target.style.backgroundColor = '#000000';
          e.target.style.transform = isVisible ? 'translateX(0) translateY(-4px)' : 'translateX(120%) translateY(-4px)';
          e.target.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.4)';
        }
      }}
      aria-label="Get a free quote"
    >
      <FileText size={isSmall ? 14 : (isMobile ? 16 : 18)} />
      {!isMobile && (
        <span style={{ 
          fontFamily: 'Inter, sans-serif'
        }}>
          Get Free Quote
        </span>
      )}
      
      {/* Mobile Tooltip */}
      {isMobile && (
        <div style={{
          position: 'absolute',
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginRight: '12px',
          backgroundColor: '#2A2A2A',
          color: '#FFFFFF',
          padding: isSmall ? '6px 10px' : '8px 12px',
          borderRadius: '4px',
          fontSize: isSmall ? '11px' : '12px',
          fontWeight: '600',
          whiteSpace: 'nowrap',
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          pointerEvents: 'none',
          letterSpacing: '0.5px'
        }}>
          Get Free Quote
          
          {/* Arrow */}
          <div style={{
            position: 'absolute',
            left: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 0,
            height: 0,
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            borderLeft: '6px solid #2A2A2A'
          }} />
        </div>
      )}
    </button>
  );
};

export default StickyQuoteButton;