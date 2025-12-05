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
    <section id="home" style={{ 
      position: 'relative', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      overflow: 'hidden' 
    }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920" 
          alt="Interior Design"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6), rgba(0,0,0,0.4))'
      }}></div>
      
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        color: 'white',
        padding: '0 24px',
        maxWidth: '1280px'
      }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 4.5rem)',
          fontWeight: 'bold',
          marginBottom: '24px'
        }}>
          Transform Your Space
        </h1>
        <p style={{
          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
          marginBottom: '16px',
          fontWeight: 300
        }}>
          Expert Interior Design & Execution
        </p>
        <p style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
          marginBottom: '32px',
          color: '#E5E5E5'
        }}>
          Residential & Commercial Projects | Serving Gujarat & Beyond
        </p>
        
        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            safe-hover-btn
            onClick={scrollToPortfolio}
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '9999px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            View Our Work
          </button>
          <button
            onClick={scrollToContact}
            style={{
              backgroundColor: 'white',
              color: 'var(--charcoal-wood)',
              padding: '16px 32px',
              borderRadius: '9999px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;