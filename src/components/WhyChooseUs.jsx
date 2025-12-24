import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: '🎯',
      title: 'Budget-Flexible Solutions',
      description: 'Quality designs that match your budget - from smart renovations to luxury builds without compromising on style.'
    },
    {
      id: 2,
      icon: '📱',
      title: '3D Visualization',
      description: 'See your space before we build it with detailed 3D renders and immersive walkthroughs.'
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Remote Consultations',
      description: 'Serving Gujarat and beyond with comprehensive online design consultations and 3D planning services.'
    },
    {
      id: 4,
      icon: '⏱️',
      title: 'On-Time Delivery',
      description: 'Commitment to timelines with regular project updates, quality checks, and transparent communication.'
    },
    {
      id: 5,
      icon: '🔧',
      title: 'Complete Execution',
      description: 'From initial design to final handover - we manage everything so you can focus on your life.'
    },
    {
      id: 6,
      icon: '🎨',
      title: 'Custom Solutions',
      description: 'Personalized designs tailored to your unique style, functional needs, and lifestyle preferences.'
    }
  ];

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isSmallMobile = typeof window !== 'undefined' && window.innerWidth < 480;

  return (
    <section style={{
      padding: isSmallMobile ? '48px 16px' : (isMobile ? '64px 24px' : '96px 32px'),
      backgroundColor: '#F5F5F5'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: isSmallMobile ? '40px' : (isMobile ? '48px' : '80px')
        }}>
          <div style={{
            fontSize: isSmallMobile ? '10px' : '11px',
            letterSpacing: isSmallMobile ? '1.5px' : '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: isSmallMobile ? '12px' : '16px',
            fontWeight: '600'
          }}>
            Why Choose Us — Excellence
          </div>
          <h2 style={{
            fontSize: isSmallMobile ? 'clamp(1.5rem, 8vw, 2rem)' : 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '100',
            lineHeight: '1.2',
            color: '#2A2A2A',
            marginBottom: isSmallMobile ? '16px' : '24px',
            letterSpacing: isSmallMobile ? '-1px' : 'clamp(-1px, -0.05em, -2px)'
          }}>
            Why Work With
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '600' }}>Ganesh Design Studio</span>
          </h2>
          <p style={{
            fontSize: isSmallMobile ? '14px' : (isMobile ? '16px' : '18px'),
            lineHeight: '1.6',
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: '600',
            padding: isSmallMobile ? '0 8px' : '0'
          }}>
            We combine creativity, expertise, and dedication to deliver exceptional interior design solutions
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isSmallMobile 
            ? '1fr' 
            : isMobile 
              ? '1fr' 
              : window.innerWidth < 1024 
                ? 'repeat(2, 1fr)' 
                : 'repeat(3, 1fr)',
          gap: isSmallMobile ? '20px' : (isMobile ? '24px' : '32px'),
          marginBottom: isSmallMobile ? '40px' : (isMobile ? '48px' : '80px')
        }}>
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                padding: isSmallMobile ? '24px 20px' : (isMobile ? '28px 24px' : '32px'),
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{
                fontSize: isSmallMobile ? '32px' : (isMobile ? '36px' : '40px'),
                marginBottom: isSmallMobile ? '16px' : (isMobile ? '18px' : '20px')
              }}>
                {benefit.icon}
              </div>
              
              <h3 style={{
                fontSize: isSmallMobile ? '1rem' : (isMobile ? '1.1rem' : '1.2rem'),
                fontWeight: '600',
                color: '#2A2A2A',
                marginBottom: isSmallMobile ? '12px' : '16px',
                letterSpacing: '-0.5px'
              }}>
                {benefit.title}
              </h3>
              
              <p style={{
                fontSize: isSmallMobile ? '13px' : (isMobile ? '13.5px' : '14px'),
                lineHeight: '1.6',
                color: '#555',
                margin: 0,
                fontWeight: '600'
              }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: isSmallMobile ? '40px 20px' : (isMobile ? '48px 32px' : '80px 48px'),
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{
            fontSize: isSmallMobile ? '1.3rem' : (isMobile ? '1.5rem' : '2rem'),
            fontWeight: '100',
            color: '#2A2A2A',
            marginBottom: isSmallMobile ? '12px' : '16px',
            letterSpacing: '-1px'
          }}>
            Ready to Start Your Project?
          </h3>
          <p style={{
            fontSize: isSmallMobile ? '13px' : (isMobile ? '14px' : '16px'),
            lineHeight: '1.6',
            color: '#555',
            marginBottom: isSmallMobile ? '28px' : (isMobile ? '32px' : '48px'),
            maxWidth: '500px',
            margin: `0 auto ${isSmallMobile ? '28px' : (isMobile ? '32px' : '48px')} auto`,
            fontWeight: '600',
            padding: isSmallMobile ? '0 8px' : '0'
          }}>
            Let's discuss your vision and create something amazing together
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isSmallMobile ? '12px' : (isMobile ? '16px' : '24px'),
            justifyContent: 'center',
            alignItems: 'center',
            padding: isSmallMobile ? '0 16px' : '0'
          }}>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                backgroundColor: '#2A2A2A',
                color: '#FFFFFF',
                padding: isSmallMobile ? '14px 28px' : (isMobile ? '16px 36px' : '18px 48px'),
                border: 'none',
                borderRadius: '4px',
                fontSize: isSmallMobile ? '10px' : (isMobile ? '11px' : '12px'),
                letterSpacing: isSmallMobile ? '1.5px' : '2px',
                textTransform: 'uppercase',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '280px' : 'none',
                outline: 'none'
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
              Get Free Quote
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                backgroundColor: 'transparent',
                color: '#2A2A2A',
                padding: isSmallMobile ? '14px 28px' : (isMobile ? '16px 36px' : '18px 48px'),
                border: '1px solid #2A2A2A',
                borderRadius: '4px',
                fontSize: isSmallMobile ? '10px' : (isMobile ? '11px' : '12px'),
                letterSpacing: isSmallMobile ? '1.5px' : '2px',
                textTransform: 'uppercase',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '280px' : 'none',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2A2A2A';
                e.target.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#2A2A2A';
              }}
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;