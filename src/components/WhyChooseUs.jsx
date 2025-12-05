import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: '🎯',
      title: 'Budget-Flexible Solutions',
      description: 'Quality designs that match your budget - from smart renovations to luxury builds'
    },
    {
      id: 2,
      icon: '📱',
      title: '3D Visualization',
      description: 'See your space before we build it with detailed 3D renders and walkthroughs'
    },
    {
      id: 3,
      icon: '🌍',
      title: 'Remote Consultations',
      description: 'Serving Gujarat and beyond with online design consultations and 3D planning'
    },
    {
      id: 4,
      icon: '⏱️',
      title: 'On-Time Delivery',
      description: 'Commitment to timelines with regular project updates and quality checks'
    },
    {
      id: 5,
      icon: '🔧',
      title: 'Complete Execution',
      description: 'From design to handover - we manage everything so you don\'t have to'
    },
    {
      id: 6,
      icon: '🎨',
      title: 'Custom Solutions',
      description: 'Personalized designs tailored to your style, needs, and lifestyle'
    }
  ];

  return (
    <section style={{
      padding: '96px 24px',
      backgroundColor: 'var(--surface)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3rem)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '16px',
          color: 'var(--text-primary)'
        }}>
          Why Choose Ganesh Studio
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          marginBottom: '64px',
          fontSize: '18px',
          maxWidth: '672px',
          margin: '0 auto 64px auto'
        }}>
          We combine expertise, innovation, and attention to detail to create spaces that truly reflect your vision
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="card"
              style={{
                backgroundColor: 'var(--background)',
                borderRadius: '12px',
                padding: '32px'
              }}
            >
              {/* Icon */}
              <div style={{
                fontSize: '48px',
                marginBottom: '16px'
              }}>
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '12px',
                color: 'var(--text-primary)'
              }}>
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7'
              }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div style={{
          marginTop: '64px',
          backgroundColor: 'var(--charcoal-wood)',
          borderRadius: '16px',
          padding: '48px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Ready to Transform Your Space?
          </h3>
          <p style={{
            color: '#E5E5E5',
            marginBottom: '32px',
            fontSize: '18px',
            maxWidth: '672px',
            margin: '0 auto 32px auto'
          }}>
            Join 200+ satisfied clients who trusted us with their interior design projects
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
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
              View Our Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
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
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;