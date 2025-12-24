import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Users, Heart, Leaf } from 'lucide-react';

const AboutDesigner = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;
  const isTiny = windowWidth < 375;

  const values = [
    {
      icon: <Users size={isTiny ? 20 : isSmall ? 22 : 24} />,
      title: 'Client-Centered',
      description: 'Your vision and needs drive every design decision we make throughout the entire process'
    },
    {
      icon: <Heart size={isTiny ? 20 : isSmall ? 22 : 24} />,
      title: 'Collaborative',
      description: 'We work together as partners throughout the entire design journey from start to finish'
    },
    {
      icon: <Award size={isTiny ? 20 : isSmall ? 22 : 24} />,
      title: 'Quality Materials',
      description: 'Thoughtful selection of premium materials that stand the test of time and daily use'
    },
    {
      icon: <Leaf size={isTiny ? 20 : isSmall ? 22 : 24} />,
      title: 'Sustainable Design',
      description: 'Eco-friendly options that are both beautiful and environmentally responsible'
    }
  ];

  const approach = [
    { step: 1, title: 'Discovery Call', description: 'Understanding your lifestyle, preferences, and project goals in detail' },
    { step: 2, title: 'Site Visit', description: 'Measuring the space and understanding its unique character and potential' },
    { step: 3, title: 'Concept Development', description: 'Creating mood boards and detailed 3D visualizations of your space' },
    { step: 4, title: 'Design Refinement', description: 'Collaborating on materials, colors, and layouts until perfect' },
    { step: 5, title: 'Execution', description: 'Managing construction with quality oversight and regular updates' },
    { step: 6, title: 'Final Reveal', description: 'Walking you through your completely transformed space' }
  ];

  const awards = [
    'Best Interior Design Studio 2023 - Gujarat',
    'Excellence in Residential Design Award',
    'Certified Interior Designer (CID)',
    'Member of Indian Institute of Interior Designers',
    'Featured in Home & Design Magazine'
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      paddingTop: isTiny ? '80px' : '96px', 
      paddingBottom: isTiny ? '48px' : '64px',
      backgroundColor: '#FAFAFA',
      color: '#2A2A2A'
    }}>
      {/* Sophisticated Navigation */}
      <nav 
        className="fixed top-0 w-full z-50"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderBottom: '1px solid #E5E5E5',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isTiny ? '16px 12px' : isSmall ? '20px 16px' : isMobile ? '24px 20px' : '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isTiny ? '8px' : '12px',
              background: 'none',
              border: 'none',
              color: '#555',
              fontSize: isTiny ? '12px' : isSmall ? '13px' : '14px',
              fontWeight: '300',
              cursor: 'pointer',
              letterSpacing: '0.5px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#2A2A2A'}
            onMouseLeave={(e) => e.target.style.color = '#555'}
          >
            <ArrowLeft size={isTiny ? 14 : 16} />
            <span>Back</span>
          </button>
          
          <div 
            className="cursor-pointer"
            onClick={() => window.location.href = '/'}
            style={{
              fontSize: isTiny ? '11px' : isSmall ? '13px' : isMobile ? '14px' : '18px',
              fontWeight: '300',
              letterSpacing: isTiny ? '1px' : isSmall ? '1.5px' : isMobile ? '2px' : '3px',
              color: '#2A2A2A'
            }}
          >
            GANESH DESIGN STUDIO
          </div>
        </div>
      </nav>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: isTiny ? '0 12px' : isSmall ? '0 16px' : isMobile ? '0 20px' : '0 32px'
      }}>
        {/* Elegant Hero */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isTiny ? '48px' : isSmall ? '60px' : isMobile ? '80px' : '120px'
        }}>
          <div style={{
            fontSize: isTiny ? '9px' : isSmall ? '10px' : '11px',
            letterSpacing: isTiny ? '1px' : '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: isTiny ? '12px' : isSmall ? '16px' : '24px',
            fontWeight: '600'
          }}>
            About — Meet The Designer
          </div>
          <h1 style={{
            fontSize: isTiny ? '2rem' : isSmall ? '2.5rem' : isMobile ? '3rem' : 'clamp(3rem, 7vw, 4.5rem)',
            fontWeight: '100',
            lineHeight: '1.1',
            marginBottom: isTiny ? '16px' : isSmall ? '20px' : '32px',
            letterSpacing: isTiny ? '-1px' : '-2px'
          }}>
            Meet Bhargav
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Ladani</span>
          </h1>
          <p style={{
            fontSize: isTiny ? '14px' : isSmall ? '16px' : isMobile ? '18px' : '1.4rem',
            color: '#555',
            fontWeight: '300',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: isTiny ? '0 8px' : '0'
          }}>
            Creating spaces that feel lived-in, warm, and deeply functional
          </p>
        </div>

        {/* Designer Bio */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isTiny ? '32px' : isSmall ? '40px' : isMobile ? '48px' : '80px',
          marginBottom: isTiny ? '48px' : isSmall ? '60px' : isMobile ? '80px' : '120px',
          alignItems: 'center'
        }}>
          {/* Portrait */}
          <div>
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: isTiny ? '12px' : isSmall ? '16px' : '24px',
              borderRadius: '4px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                alt="Bhargav Ladani"
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Bio Content */}
          <div>
            <h2 style={{
              fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
              fontWeight: '500',
              marginBottom: isTiny ? '16px' : isSmall ? '20px' : '32px',
              letterSpacing: '-1px'
            }}>
              About Bhargav
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: isTiny ? '16px' : '24px' }}>
              <p style={{
                fontSize: isTiny ? '13px' : isSmall ? '14px' : isMobile ? '15px' : '16px',
                color: '#555',
                lineHeight: '1.7',
                fontWeight: '400'
              }}>
                With over 10 years of experience in interior design, I've had the privilege of transforming more than 200 spaces across Gujarat and beyond. My journey began with a deep fascination for how spaces can influence emotions and enhance daily life.
              </p>
              <p style={{
                fontSize: isTiny ? '13px' : isSmall ? '14px' : isMobile ? '15px' : '16px',
                color: '#555',
                lineHeight: '1.7',
                fontWeight: '400'
              }}>
                I hold a degree in Interior Design and have trained under renowned designers in both traditional and contemporary styles. But my real education comes from listening to clients and understanding their unique stories and needs.
              </p>
              <p style={{
                fontSize: isTiny ? '13px' : isSmall ? '14px' : isMobile ? '15px' : '16px',
                color: '#555',
                lineHeight: '1.7',
                fontWeight: '400'
              }}>
                My design philosophy is simple: <strong style={{ color: '#2A2A2A', fontWeight: '500' }}>Every space should tell your story</strong>. Whether it's a cozy apartment or a sprawling villa, I believe in creating interiors that are not just beautiful, but deeply personal and functional.
              </p>
            </div>
          </div>
        </div>

        {/* Design Philosophy */}
        <div style={{
          marginBottom: isTiny ? '48px' : isSmall ? '60px' : isMobile ? '80px' : '120px',
          padding: isTiny ? '32px 20px' : isSmall ? '40px 24px' : isMobile ? '48px 32px' : '80px 64px',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
            fontWeight: '500',
            marginBottom: isTiny ? '16px' : isSmall ? '20px' : '32px',
            letterSpacing: '-1px'
          }}>
            Design Philosophy
          </h2>
          <blockquote style={{
            fontSize: isTiny ? '15px' : isSmall ? '17px' : isMobile ? '19px' : '1.3rem',
            color: '#555',
            fontStyle: 'italic',
            fontWeight: '300',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto',
            padding: isTiny ? '0 8px' : '0'
          }}>
            "Design is not just about aesthetics—it's about creating spaces that enhance daily life, inspire joy, and grow with the people who inhabit them."
          </blockquote>
        </div>

        {/* Values */}
        <div style={{ 
          marginBottom: isTiny ? '48px' : isSmall ? '60px' : isMobile ? '80px' : '120px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: isTiny ? '32px' : isSmall ? '40px' : isMobile ? '48px' : '64px' }}>
            <h2 style={{
              fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
              fontWeight: '400',
              marginBottom: isTiny ? '12px' : '16px',
              letterSpacing: '-1px'
            }}>
              What I Stand For
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isTiny ? '24px' : isSmall ? '32px' : '48px'
          }}>
            {values.map((value, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: isTiny ? '28px 20px' : isSmall ? '36px 24px' : isMobile ? '40px 28px' : '48px 32px',
                borderRadius: '4px',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.05)';
              }}>
                <div style={{
                  marginBottom: isTiny ? '16px' : '24px',
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#2A2A2A'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: isTiny ? '1rem' : isSmall ? '1.1rem' : isMobile ? '1.2rem' : '1.3rem',
                  fontWeight: '400',
                  marginBottom: isTiny ? '12px' : '16px',
                  letterSpacing: '-0.5px'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  fontWeight: '400',
                  fontSize: isTiny ? '13px' : isSmall ? '13.5px' : isMobile ? '14px' : '15px'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div style={{ 
          marginBottom: isTiny ? '48px' : isSmall ? '60px' : isMobile ? '80px' : '120px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: isTiny ? '32px' : isSmall ? '40px' : isMobile ? '48px' : '80px' }}>
            <h2 style={{
              fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
              fontWeight: '100',
              marginBottom: isTiny ? '12px' : '16px',
              letterSpacing: '-1px'
            }}>
              How We Work Together
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : window.innerWidth < 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isTiny ? '28px' : isSmall ? '36px' : '48px'
          }}>
            {approach.map((item) => (
              <div key={item.step} style={{
                backgroundColor: '#FFFFFF',
                padding: isTiny ? '28px 20px' : isSmall ? '32px 24px' : '40px 32px',
                borderRadius: '4px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: isTiny ? '-12px' : '-16px',
                  left: isTiny ? '20px' : '32px',
                  width: isTiny ? '28px' : '32px',
                  height: isTiny ? '28px' : '32px',
                  borderRadius: '50%',
                  backgroundColor: '#2A2A2A',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isTiny ? '12px' : '14px',
                  fontWeight: '400'
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontSize: isTiny ? '1rem' : isSmall ? '1.1rem' : isMobile ? '1.2rem' : '1.3rem',
                  fontWeight: '300',
                  marginBottom: isTiny ? '12px' : '16px',
                  marginTop: isTiny ? '12px' : '16px',
                  letterSpacing: '-0.5px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  fontWeight: '300',
                  fontSize: isTiny ? '13px' : isSmall ? '13.5px' : isMobile ? '14px' : '15px'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div style={{
          marginBottom: isTiny ? '32px' : isSmall ? '40px' : isMobile ? '48px' : '80px',
          padding: isTiny ? '32px 20px' : isSmall ? '40px 24px' : isMobile ? '48px 32px' : '64px 48px',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px'
        }}>
          <h2 style={{
            fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
            fontWeight: '500',
            marginBottom: isTiny ? '24px' : isSmall ? '32px' : '48px',
            textAlign: 'center',
            letterSpacing: '-1px'
          }}>
            Awards & Recognition
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isTiny ? '16px' : '24px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {awards.map((award, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: isTiny ? '12px' : '16px'
              }}>
                <Award size={isTiny ? 16 : 20} style={{ 
                  color: '#2A2A2A', 
                  flexShrink: 0,
                  marginTop: '4px'
                }} />
                <span style={{
                  color: '#555',
                  lineHeight: '1.6',
                  fontWeight: '400',
                  fontSize: isTiny ? '13px' : isSmall ? '13.5px' : isMobile ? '14px' : '15px'
                }}>
                  {award}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          padding: isTiny ? '40px 20px' : isSmall ? '48px 24px' : isMobile ? '56px 32px' : '80px 48px',
          backgroundColor: '#2A2A2A',
          color: '#FFFFFF',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
            fontWeight: '100',
            marginBottom: isTiny ? '16px' : '24px',
            letterSpacing: '-1px'
          }}>
            Let's Create Something Beautiful Together
          </h3>
          <p style={{
            fontSize: isTiny ? '13px' : isSmall ? '14px' : isMobile ? '15px' : '16px',
            marginBottom: isTiny ? '32px' : '48px',
            maxWidth: '500px',
            margin: `0 auto ${isTiny ? '32px' : '48px'} auto`,
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            fontWeight: '300',
            padding: isTiny ? '0 8px' : '0'
          }}>
            Ready to start your design journey? Schedule a free consultation and let's discuss how we can transform your space.
          </p>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#2A2A2A',
              padding: isTiny ? '14px 32px' : isSmall ? '16px 40px' : '18px 48px',
              border: 'none',
              borderRadius: '4px',
              fontSize: isTiny ? '10px' : isSmall ? '11px' : '12px',
              letterSpacing: isTiny ? '1.5px' : '2px',
              textTransform: 'uppercase',
              fontWeight: '400',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '280px' : 'none'
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
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDesigner;