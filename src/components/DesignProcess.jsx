import React from 'react';

const DesignProcess = () => {
  const steps = [
    { 
      step: 1, 
      title: 'Free Consultation', 
      description: 'We understand your vision, requirements, and budget to create a tailored approach for your space.',
      icon: '💬'
    },
    { 
      step: 2, 
      title: '3D Design & Planning', 
      description: 'Detailed 3D renders, layouts, and material selection so you can visualize your space before execution.',
      icon: '📐'
    },
    { 
      step: 3, 
      title: 'Material Selection', 
      description: 'Choose from our curated collection of premium materials and finishes that match your style and budget.',
      icon: '🎨'
    },
    { 
      step: 4, 
      title: 'Execution & Build', 
      description: 'Quality construction with regular updates, timeline adherence, and attention to every detail.',
      icon: '🔨'
    },
    { 
      step: 5, 
      title: 'Final Handover', 
      description: 'Complete styling, final touches, and handover of your dream space ready for you to enjoy.',
      icon: '🏡'
    }
  ];

  return (
    <section 
      id="process" 
      style={{
        padding: '96px 32px',
        backgroundColor: '#F5F5F5'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            Process — How We Work
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '100',
            lineHeight: '1.2',
            color: '#2A2A2A',
            marginBottom: '24px',
            letterSpacing: '-2px'
          }}>
            Our Design
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Process</span>
          </h2>
          
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: '400'
          }}>
            From initial concept to final execution, we follow a proven process to 
            bring your vision to life with precision and care.
          </p>
        </div>
        
        {/* Process Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          marginBottom: '80px'
        }}>
          {steps.map((item, index) => (
            <div key={item.step} style={{ position: 'relative' }}>
              {/* Connecting Line - Desktop Only */}
              {index < steps.length - 1 && window.innerWidth >= 768 && (
                <div style={{
                  position: 'absolute',
                  top: '80px',
                  left: '50%',
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#E5E5E5',
                  transform: 'translateX(-50%)',
                  zIndex: 0
                }} />
              )}
              
              {/* Step Card */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                padding: '48px 32px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {/* Step Number */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#2A2A2A',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '400'
                }}>
                  {item.step}
                </div>
                
                {/* Icon */}
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '24px',
                  marginTop: '24px'
                }}>
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#2A2A2A',
                  marginBottom: '16px',
                  letterSpacing: '-0.5px',
                  lineHeight: '1.3'
                }}>
                  {item.title}
                </h3>
                
                {/* Description */}
                <p style={{
                  fontSize: '15px',
                  color: '#555',
                  lineHeight: '1.7',
                  fontWeight: '300',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          padding: '64px 48px'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '300',
            color: '#2A2A2A',
            marginBottom: '16px',
            letterSpacing: '-1px'
          }}>
            Ready to Start Your Design Journey?
          </h3>
          
          <p style={{
            fontSize: '16px',
            color: '#555',
            marginBottom: '32px',
            fontWeight: '300',
            maxWidth: '500px',
            margin: '0 auto 32px auto',
            lineHeight: '1.6'
          }}>
            Let's discuss your project and create a space that reflects your vision, 
            lifestyle, and personality.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              style={{
                backgroundColor: 'transparent',
                color: '#2A2A2A',
                padding: '18px 48px',
                border: '1px solid #2A2A2A',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontWeight: '300',
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
              View Our Work
            </button>
            
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              style={{
                backgroundColor: '#2A2A2A',
                color: '#FFFFFF',
                padding: '18px 48px',
                border: '1px solid #2A2A2A',
                fontSize: '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontWeight: '300',
                transition: 'all 0.3s ease'
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
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;