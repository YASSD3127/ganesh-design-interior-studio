import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Replace with actual WhatsApp number (without + or spaces)
  const phoneNumber = '919999999999'; // Format: 91XXXXXXXXXX
  const message = 'Hi! I would like to discuss an interior design project.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center gap-3"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
        
        {/* Text that appears on hover */}
        <span className={`overflow-hidden transition-all duration-300 ${
          isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
        }`}>
          <span className="whitespace-nowrap font-semibold">Chat with us</span>
        </span>
      </button>
      
      {/* Pulse Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(34, 197, 94, 0);
          }
        }
        button:not(:hover) {
          animation: pulse 2s infinite;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;