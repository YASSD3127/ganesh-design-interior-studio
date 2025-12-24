import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Replace with actual WhatsApp number (without + or spaces)
  const phoneNumber = '919999999999'; // Format: 91XXXXXXXXXX
  const message = 'Hi! I would like to discuss an interior design project with Ganesh Design Studio.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;

  return (
    <>
      {/* Sophisticated WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.3)';
          setIsHovered(false);
        }}
        style={{
          position: 'fixed',
          bottom: isMobile ? '20px' : '24px',
          right: isMobile ? '20px' : '24px',
          backgroundColor: '#25D366',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: isSmall ? '50px' : (isMobile ? '52px' : '56px'),
          height: isSmall ? '50px' : (isMobile ? '52px' : '56px'),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 50,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)',
          outline: 'none'
        }}
        onMouseMove={(e) => {
          if (isHovered) {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.4)';
          }
        }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={isSmall ? 20 : (isMobile ? 22 : 24)} fill="currentColor" />
        
        {/* Tooltip - Hide on small screens */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            right: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            marginRight: '16px',
            backgroundColor: '#2A2A2A',
            color: '#FFFFFF',
            padding: '12px 16px',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: '300',
            whiteSpace: 'nowrap',
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? 'visible' : 'hidden',
            transition: 'all 0.3s ease',
            pointerEvents: 'none',
            letterSpacing: '0.5px'
          }}>
            Chat with us on WhatsApp
            
            {/* Arrow */}
            <div style={{
              position: 'absolute',
              left: '100%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 0,
              height: 0,
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
              borderLeft: '8px solid #2A2A2A'
            }} />
          </div>
        )}
      </button>
      
      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes sophisticatedPulse {
          0%, 100% {
            box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3), 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3), 0 0 0 12px rgba(37, 211, 102, 0);
          }
        }
        
        button:not(:hover) {
          animation: sophisticatedPulse 2.5s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;