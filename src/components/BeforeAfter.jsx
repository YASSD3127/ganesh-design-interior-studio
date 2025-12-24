import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const transformations = [
    {
      id: 1,
      title: 'Modern Living Room Transformation',
      location: 'Ahmedabad',
      area: '450 sq ft',
      before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
      description: 'Complete transformation from a cramped, outdated space to a modern, airy living area with custom furniture and smart storage solutions.'
    },
    {
      id: 2,
      title: 'Contemporary Kitchen Renovation',
      location: 'Surat',
      area: '320 sq ft',
      before: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
      after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      description: 'Kitchen redesign featuring premium materials, efficient layout, and modern appliances for enhanced functionality and style.'
    },
    {
      id: 3,
      title: 'Master Bedroom Makeover',
      location: 'Vadodara',
      area: '280 sq ft',
      before: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
      after: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
      description: 'Bedroom transformation creating a serene retreat with built-in storage, ambient lighting, and luxurious finishes.'
    },
    {
      id: 4,
      title: 'Commercial Office Design',
      location: 'Rajkot',
      area: '1200 sq ft',
      before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      after: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
      description: 'Office space redesign focusing on productivity, collaboration zones, and modern aesthetic for enhanced work environment.'
    },
    {
      id: 5,
      title: 'Luxury Villa Interior',
      location: 'Gandhinagar',
      area: '2800 sq ft',
      before: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      description: 'Villa interior design featuring premium materials, sophisticated color palette, and luxury finishes throughout multiple rooms.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === transformations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? transformations.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section style={{
      padding: window.innerWidth < 768 ? '64px 16px' : '96px 32px',
      backgroundColor: '#F5F5F5'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: window.innerWidth < 768 ? '48px' : '80px'
        }}>
          <div style={{
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: '16px',
            fontWeight: '600'
          }}>
            Transformations — Before & After
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '100',
            lineHeight: '1.2',
            color: '#2A2A2A',
            marginBottom: '24px',
            letterSpacing: 'clamp(-1px, -0.05em, -2px)'
          }}>
            Amazing
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '600' }}>Transformations</span>
          </h2>
          <p style={{
            fontSize: window.innerWidth < 768 ? '14px' : '18px',
            lineHeight: '1.6',
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: '600'
          }}>
            See how we transformed ordinary spaces into extraordinary environments
          </p>
        </div>

        {/* Main Transformation Display */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          padding: window.innerWidth < 768 ? '24px' : '48px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          marginBottom: window.innerWidth < 768 ? '32px' : '48px',
          position: 'relative'
        }}>
          {/* Project Info Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: window.innerWidth < 768 ? '24px' : '32px'
          }}>
            <h3 style={{
              fontSize: window.innerWidth < 768 ? '1.3rem' : '1.5rem',
              fontWeight: '600',
              color: '#2A2A2A',
              marginBottom: '8px',
              letterSpacing: '-0.5px'
            }}>
              {transformations[currentIndex].title}
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: window.innerWidth < 768 ? '16px' : '24px',
              fontSize: window.innerWidth < 768 ? '13px' : '14px',
              color: '#555',
              fontWeight: '600'
            }}>
              <span>📍 {transformations[currentIndex].location}</span>
              <span>📐 {transformations[currentIndex].area}</span>
            </div>
          </div>

          {/* Before/After Images */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
            gap: window.innerWidth < 768 ? '24px' : '32px',
            marginBottom: window.innerWidth < 768 ? '24px' : '32px'
          }}>
            {/* Before Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(0,0,0,0.8)',
                color: '#FFFFFF',
                padding: '6px 12px',
                fontSize: window.innerWidth < 768 ? '11px' : '12px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                zIndex: 2
              }}>
                Before
              </div>
              <img
                src={transformations[currentIndex].before}
                alt="Before transformation"
                style={{
                  width: '100%',
                  height: window.innerWidth < 768 ? '240px' : '320px',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
            </div>

            {/* After Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(42,42,42,0.9)',
                color: '#FFFFFF',
                padding: '6px 12px',
                fontSize: window.innerWidth < 768 ? '11px' : '12px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                zIndex: 2
              }}>
                After
              </div>
              <img
                src={transformations[currentIndex].after}
                alt="After transformation"
                style={{
                  width: '100%',
                  height: window.innerWidth < 768 ? '240px' : '320px',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
            </div>
          </div>

          {/* Description */}
          <p style={{
            textAlign: 'center',
            color: '#555',
            fontSize: window.innerWidth < 768 ? '14px' : '15px',
            lineHeight: '1.6',
            fontWeight: '600'
          }}>
            {transformations[currentIndex].description}
          </p>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: window.innerWidth < 768 ? '8px' : '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E5E5',
              borderRadius: '50%',
              width: window.innerWidth < 768 ? '40px' : '48px',
              height: window.innerWidth < 768 ? '40px' : '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2A2A2A';
              e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.color = '#2A2A2A';
            }}
          >
            <ChevronLeft size={window.innerWidth < 768 ? 16 : 20} />
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: window.innerWidth < 768 ? '8px' : '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E5E5',
              borderRadius: '50%',
              width: window.innerWidth < 768 ? '40px' : '48px',
              height: window.innerWidth < 768 ? '40px' : '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2A2A2A';
              e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.color = '#2A2A2A';
            }}
          >
            <ChevronRight size={window.innerWidth < 768 ? 16 : 20} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: window.innerWidth < 768 ? '48px' : '80px'
        }}>
          {transformations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: currentIndex === index ? '32px' : '12px',
                height: '12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: currentIndex === index ? '#2A2A2A' : '#E5E5E5',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* Transformation Grid Preview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth < 768 
            ? '1fr' 
            : window.innerWidth < 1024 
              ? 'repeat(2, 1fr)' 
              : 'repeat(3, 1fr)',
          gap: window.innerWidth < 768 ? '24px' : '32px',
          marginBottom: window.innerWidth < 768 ? '48px' : '80px'
        }}>
          {transformations.slice(0, window.innerWidth < 768 ? 3 : 6).map((transformation, index) => (
            <div
              key={transformation.id}
              onClick={() => setCurrentIndex(index)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: currentIndex === index ? '2px solid #2A2A2A' : '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== index) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)';
                }
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== index) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                }
              }}
            >
              <div style={{
                position: 'relative',
                height: window.innerWidth < 768 ? '150px' : '180px'
              }}>
                <img
                  src={transformation.after}
                  alt={transformation.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: '#FFFFFF',
                  padding: '12px',
                  fontSize: window.innerWidth < 768 ? '12px' : '13px',
                  fontWeight: '600'
                }}>
                  {transformation.location}
                </div>
              </div>
              
              <div style={{
                padding: window.innerWidth < 768 ? '16px' : '20px'
              }}>
                <h4 style={{
                  fontSize: window.innerWidth < 768 ? '14px' : '15px',
                  fontWeight: '600',
                  color: '#2A2A2A',
                  marginBottom: '4px',
                  lineHeight: '1.3'
                }}>
                  {transformation.title}
                </h4>
                <div style={{
                  fontSize: window.innerWidth < 768 ? '11px' : '12px',
                  color: '#555',
                  fontWeight: '600'
                }}>
                  {transformation.area}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Transformations Button */}
        <div style={{ textAlign: 'center', marginBottom: window.innerWidth < 768 ? '48px' : '80px' }}>
          <button
            onClick={() => navigate('/all-transformations')}
            style={{
              backgroundColor: 'transparent',
              color: '#2A2A2A',
              padding: window.innerWidth < 768 ? '16px 32px' : '18px 48px',
              border: '1px solid #2A2A2A',
              borderRadius: '4px',
              fontSize: window.innerWidth < 768 ? '11px' : '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              width: window.innerWidth < 768 ? '100%' : 'auto',
              maxWidth: window.innerWidth < 768 ? '280px' : 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2A2A2A';
              e.target.style.color = '#FFFFFF';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#2A2A2A';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            View All Transformations
          </button>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: window.innerWidth < 768 ? '48px 24px' : '80px 48px',
          backgroundColor: '#2A2A2A',
          color: '#FFFFFF',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: window.innerWidth < 768 ? '1.5rem' : '2rem',
            fontWeight: '100',
            marginBottom: '16px',
            letterSpacing: '-1px'
          }}>
            Ready for Your Own Transformation?
          </h3>
          <p style={{
            fontSize: window.innerWidth < 768 ? '14px' : '16px',
            marginBottom: window.innerWidth < 768 ? '32px' : '48px',
            maxWidth: '500px',
            margin: `0 auto ${window.innerWidth < 768 ? '32px' : '48px'} auto`,
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            fontWeight: '600'
          }}>
            Let us transform your space into something extraordinary
          </p>
          
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#2A2A2A',
              padding: window.innerWidth < 768 ? '16px 32px' : '18px 48px',
              border: 'none',
              borderRadius: '4px',
              fontSize: window.innerWidth < 768 ? '11px' : '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: window.innerWidth < 768 ? '100%' : 'auto',
              maxWidth: window.innerWidth < 768 ? '280px' : 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;