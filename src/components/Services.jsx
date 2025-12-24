import React, { useState, useEffect } from 'react';

const Services = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      id: 1,
      icon: '🏠',
      title: 'Residential Interiors',
      description: 'Complete home transformations tailored to your lifestyle, from concept to completion with personalized design solutions.',
      features: ['Space Planning', 'Custom Furniture', 'Lighting Design', 'Material Selection']
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Commercial Spaces',
      description: 'Professional environments that enhance productivity and reflect your brand identity with functional design.',
      features: ['Office Design', 'Retail Spaces', 'Restaurants', 'Healthcare Facilities']
    },
    {
      id: 3,
      icon: '📱',
      title: '3D Visualization',
      description: 'See your space before it\'s built with photorealistic renders and virtual walkthroughs.',
      features: ['3D Rendering', 'Virtual Tours', 'Material Previews', 'Design Iterations']
    },
    {
      id: 4,
      icon: '🔧',
      title: 'Complete Execution',
      description: 'End-to-end project management from design through final installation with quality oversight.',
      features: ['Timeline Management', 'Quality Control', 'Vendor Coordination', 'Final Styling']
    },
    {
      id: 5,
      icon: '💡',
      title: 'Design Consultation',
      description: 'Expert advice and guidance for your interior design projects, both in-person and remote.',
      features: ['Space Analysis', 'Style Development', 'Budget Planning', 'Remote Consultations']
    },
    {
      id: 6,
      icon: '🎨',
      title: 'Custom Solutions',
      description: 'Personalized design approaches that reflect your unique style, needs, and lifestyle preferences.',
      features: ['Bespoke Furniture', 'Art Selection', 'Color Schemes', 'Lighting Solutions']
    }
  ];

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;
  const isTiny = windowWidth < 375;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <section 
      id="services"
      style={{
        padding: isTiny ? '40px 12px' : (isSmall ? '48px 16px' : (isMobile ? '64px 20px' : '96px 32px')),
        backgroundColor: '#FFFFFF'
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: isTiny ? '32px' : (isSmall ? '36px' : (isMobile ? '40px' : '64px'))
        }}>
          <div style={{
            fontSize: isTiny ? '9px' : (isSmall ? '10px' : '11px'),
            letterSpacing: isTiny ? '1px' : (isSmall ? '1.5px' : '2px'),
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: isTiny ? '8px' : (isSmall ? '10px' : '12px'),
            fontWeight: '600'
          }}>
            Services — What We Offer
          </div>
          <h2 style={{
            fontSize: isTiny ? '1.5rem' : (isSmall ? '1.75rem' : (isMobile ? '2rem' : 'clamp(2rem, 5vw, 3.5rem)')),
            fontWeight: '100',
            lineHeight: '1.2',
            color: '#2A2A2A',
            marginBottom: isTiny ? '12px' : (isSmall ? '14px' : '16px'),
            letterSpacing: isTiny ? '-0.5px' : '-1px',
            padding: '0 8px'
          }}>
            Our Design
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Services</span>
          </h2>
          <p style={{
            fontSize: isTiny ? '13px' : (isSmall ? '14px' : (isMobile ? '15px' : '16px')),
            lineHeight: '1.5',
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: '400',
            padding: '0 12px'
          }}>
            From concept to completion, we bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? '1fr' 
            : isTablet 
              ? 'repeat(2, 1fr)' 
              : 'repeat(3, 1fr)',
          gap: isTiny ? '16px' : (isSmall ? '20px' : (isMobile ? '24px' : '32px'))
        }}>
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                backgroundColor: '#F5F5F5',
                borderRadius: '4px',
                padding: isTiny ? '20px 16px' : (isSmall ? '24px 20px' : (isMobile ? '28px 24px' : '32px')),
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                border: '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
                e.currentTarget.style.border = '1px solid #2A2A2A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid transparent';
              }}
            >
              {/* Icon */}
              <div style={{
                fontSize: isTiny ? '32px' : (isSmall ? '36px' : '40px'),
                marginBottom: isTiny ? '14px' : (isSmall ? '16px' : '20px')
              }}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 style={{
                fontSize: isTiny ? '1rem' : (isSmall ? '1.1rem' : (isMobile ? '1.15rem' : '1.25rem')),
                fontWeight: '600',
                color: '#2A2A2A',
                marginBottom: isTiny ? '10px' : (isSmall ? '12px' : '14px'),
                letterSpacing: '-0.5px'
              }}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p style={{
                fontSize: isTiny ? '12px' : (isSmall ? '12.5px' : (isMobile ? '13px' : '14px')),
                lineHeight: '1.6',
                color: '#555',
                marginBottom: isTiny ? '14px' : (isSmall ? '16px' : '20px'),
                fontWeight: '500'
              }}>
                {service.description}
              </p>
              
              {/* Features List */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: isTiny ? '6px' : (isSmall ? '7px' : '8px')
              }}>
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: isTiny ? '11px' : (isSmall ? '11.5px' : (isMobile ? '12px' : '13px')),
                      color: '#555',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span style={{
                      width: isTiny ? '4px' : '5px',
                      height: isTiny ? '4px' : '5px',
                      backgroundColor: '#2A2A2A',
                      borderRadius: '50%',
                      flexShrink: 0
                    }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          marginTop: isTiny ? '32px' : (isSmall ? '36px' : (isMobile ? '40px' : '64px')),
          padding: isTiny ? '32px 16px' : (isSmall ? '36px 20px' : (isMobile ? '40px 24px' : '64px 40px')),
          backgroundColor: '#F5F5F5',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: isTiny ? '1.2rem' : (isSmall ? '1.3rem' : (isMobile ? '1.4rem' : '1.8rem')),
            fontWeight: '300',
            color: '#2A2A2A',
            marginBottom: isTiny ? '10px' : (isSmall ? '12px' : '14px'),
            letterSpacing: '-0.5px',
            padding: '0 8px'
          }}>
            Interested in Our Services?
          </h3>
          <p style={{
            fontSize: isTiny ? '12px' : (isSmall ? '13px' : (isMobile ? '14px' : '15px')),
            lineHeight: '1.5',
            color: '#555',
            marginBottom: isTiny ? '24px' : (isSmall ? '28px' : (isMobile ? '32px' : '40px')),
            maxWidth: '500px',
            margin: `0 auto ${isTiny ? '24px' : (isSmall ? '28px' : (isMobile ? '32px' : '40px'))} auto`,
            fontWeight: '400',
            padding: '0 12px'
          }}>
            Let's discuss your project and create something amazing together
          </p>
          
          <button
            type="button"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{
              backgroundColor: '#2A2A2A',
              color: '#FFFFFF',
              padding: isTiny ? '12px 24px' : (isSmall ? '14px 28px' : (isMobile ? '15px 32px' : '16px 40px')),
              border: 'none',
              borderRadius: '4px',
              fontSize: isTiny ? '10px' : (isSmall ? '10.5px' : (isMobile ? '11px' : '12px')),
              letterSpacing: isTiny ? '1px' : (isSmall ? '1.5px' : '2px'),
              textTransform: 'uppercase',
              fontWeight: '300',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              outline: 'none',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? (isTiny ? '240px' : (isSmall ? '260px' : '280px')) : 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#000000';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2A2A2A';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;