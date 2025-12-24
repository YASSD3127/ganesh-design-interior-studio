import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  return (
    <>
      <section 
        id="about" 
        className="about-section"
        style={{ 
          padding: '96px 32px',
          backgroundColor: '#FFFFFF' 
        }}
      >
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <div style={{
              fontSize: '11px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#555',
              marginBottom: '16px',
              fontWeight: '600'
            }}>
              About — Ganesh Design Studio
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '100',
              lineHeight: '1.2',
              color: '#2A2A2A',
              marginBottom: '24px',
              letterSpacing: '-2px'
            }}>
              Creating Beautiful Spaces
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Since Years</span>
            </h2>
          </div>
          
          <div className="about-content" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            {/* Image Section */}
            <div style={{ position: 'relative' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                padding: '24px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
              }}>
                <img 
                  className="about-image"
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600" 
                  alt="Bhargav Ladani - Interior Designer"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#2A2A2A',
                marginBottom: '24px',
                letterSpacing: '-0.5px'
              }}>
                Meet Bhargav Ladani
              </h3>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#555',
                marginBottom: '24px',
                fontWeight: '400'
              }}>
                With a passion for creating exceptional living spaces, Bhargav Ladani has been 
                transforming homes and commercial spaces with innovative design solutions. 
                His approach combines contemporary aesthetics with functional design, 
                ensuring every project reflects the client's personality and lifestyle.
              </p>
              
              <p style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#555',
                marginBottom: '32px',
                fontWeight: '400'
              }}>
                From luxury villas to modern apartments, each project is meticulously planned 
                and executed with attention to detail, premium materials, and a commitment 
                to excellence that has earned recognition throughout the region.
              </p>

              {/* Statistics */}
              <div className="stats-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '32px',
                marginBottom: '32px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '300',
                    color: '#2A2A2A',
                    marginBottom: '8px',
                    letterSpacing: '-1px'
                  }}>
                    <AnimatedCounter end={200} duration={2000} />+
                  </div>
                  <p style={{
                    fontSize: '12px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#555',
                    margin: 0,
                    fontWeight: '300'
                  }}>
                    Projects Completed
                  </p>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '300',
                    color: '#2A2A2A',
                    marginBottom: '8px',
                    letterSpacing: '-1px'
                  }}>
                    <AnimatedCounter end={10} duration={2000} />+
                  </div>
                  <p style={{
                    fontSize: '12px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#555',
                    margin: 0,
                    fontWeight: '300'
                  }}>
                    Years Experience
                  </p>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '300',
                    color: '#2A2A2A',
                    marginBottom: '8px',
                    letterSpacing: '-1px'
                  }}>
                    <AnimatedCounter end={150} duration={2000} />+
                  </div>
                  <p style={{
                    fontSize: '12px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#555',
                    margin: 0,
                    fontWeight: '300'
                  }}>
                    Happy Clients
                  </p>
                </div>
              </div>

              <button
                className="about-cta-button"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  backgroundColor: 'transparent',
                  color: '#2A2A2A',
                  padding: '18px 48px',
                  border: '1px solid #2A2A2A',
                  borderRadius: '4px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2A2A2A';
                  e.target.style.color = '#FFFFFF';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 24px rgba(42,42,42,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#2A2A2A';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Let's Work Together
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .about-section {
            padding: 64px 16px !important;
          }
          
          .about-content {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          
          .about-image {
            height: 280px !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          
          .stats-grid > div:nth-child(3) {
            grid-column: span 2 !important;
          }
          
          .about-cta-button {
            width: 100% !important;
            padding: 14px 32px !important;
            font-size: 11px !important;
          }
          
          h3 {
            font-size: 1.3rem !important;
          }
          
          p {
            font-size: 14px !important;
          }
          
          .stats-grid div div {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default About;
             