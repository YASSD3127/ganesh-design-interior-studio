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
    <>
      <section 
        id="home" 
        className="hero-section"
        style={{ 
          position: 'relative', 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          overflow: 'hidden' 
        }}
      >
        {/* Background Image */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920" 
            alt="Interior Design"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        
        {/* Sophisticated Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(42, 42, 42, 0.8) 0%, rgba(42, 42, 42, 0.6) 50%, rgba(42, 42, 42, 0.7) 100%)'
        }}></div>
        
        {/* Content */}
        <div 
          className="hero-content"
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            color: '#FFFFFF',
            maxWidth: '800px',
            padding: '0 32px'
          }}
        >
          <h1 
            className="hero-title"
            style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: '300',
              lineHeight: '1.1',
              marginBottom: '24px',
              letterSpacing: '-2px'
            }}
          >
            Design That
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Speaks for Itself</span>
          </h1>
          
          <p 
            className="hero-description"
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              marginBottom: '48px',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '300',
              maxWidth: '600px',
              margin: '0 auto 48px auto'
            }}
          >
            Transforming houses into homes with sophisticated design, 
            premium materials, and meticulous attention to detail.
          </p>
          
          <div 
            className="hero-buttons"
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <button
              className="hero-btn hero-btn-outline"
              onClick={scrollToPortfolio}
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '18px 48px',
                border: '1px solid #FFFFFF',
                borderRadius: '4px',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: '400',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FFFFFF';
                e.target.style.color = '#2A2A2A';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 24px rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              View Our Work
            </button>
            
            <button
              className="hero-btn hero-btn-filled"
              onClick={scrollToContact}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#2A2A2A',
                padding: '18px 48px',
                border: '1px solid #FFFFFF',
                borderRadius: '4px',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: '400',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 24px rgba(255,255,255,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FFFFFF';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get Free Quote
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="scroll-indicator"
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <span style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '12px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontWeight: '500'
          }}>
            Scroll to explore
          </span>
          <div 
            className="scroll-line"
            style={{
              width: '1px',
              height: '48px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), transparent)'
            }}
          ></div>
        </div>
      </section>

      {/* Responsive CSS with proper mobile breakpoints */}
      <style jsx>{`
        /* Desktop styles - default above */

        /* Large Tablets - 1024px and down */
        @media (max-width: 1024px) {
          .hero-content {
            padding: 0 24px !important;
          }
          
          .hero-title {
            font-size: clamp(2.5rem, 7vw, 4rem) !important;
          }
        }

        /* Mobile Large - 768px and down */
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 16px !important;
          }
          
          .hero-title {
            font-size: clamp(2rem, 6vw, 3rem) !important;
            letter-spacing: -1px !important;
            margin-bottom: 16px !important;
          }
          
          .hero-description {
            font-size: 16px !important;
            margin-bottom: 32px !important;
          }
          
          .hero-buttons {
            flex-direction: column !important;
            gap: 16px !important;
            max-width: 280px !important;
            margin: 0 auto !important;
          }
          
          .hero-btn {
            width: 100% !important;
            padding: 16px 32px !important;
            font-size: 11px !important;
          }
          
          .scroll-indicator {
            bottom: 24px !important;
          }
          
          .scroll-indicator span {
            font-size: 11px !important;
          }
          
          .scroll-line {
            height: 32px !important;
          }
        }

        /* Mobile Medium - 430px and down (iPhone 14 Pro Max) */
        @media (max-width: 430px) {
          .hero-content {
            padding: 0 12px !important;
          }
          
          .hero-title {
            font-size: clamp(1.8rem, 5vw, 2.5rem) !important;
            margin-bottom: 12px !important;
          }
          
          .hero-description {
            font-size: 14px !important;
            margin-bottom: 28px !important;
          }
          
          .hero-buttons {
            max-width: 260px !important;
          }
          
          .hero-btn {
            padding: 14px 28px !important;
            font-size: 10px !important;
            letter-spacing: 1px !important;
          }
        }

        /* Mobile Small - 375px and down */
        @media (max-width: 375px) {
          .hero-content {
            padding: 0 8px !important;
          }
          
          .hero-title {
            font-size: clamp(1.6rem, 4vw, 2.2rem) !important;
          }
          
          .hero-description {
            font-size: 13px !important;
          }
          
          .hero-buttons {
            max-width: 240px !important;
          }
          
          .hero-btn {
            padding: 12px 24px !important;
            font-size: 9px !important;
          }
        }

        /* Mobile Extra Small - 320px and down */
        @media (max-width: 320px) {
          .hero-title {
            font-size: clamp(1.4rem, 3vw, 2rem) !important;
          }
          
          .hero-buttons {
            max-width: 220px !important;
          }
          
          .hero-btn {
            padding: 12px 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
