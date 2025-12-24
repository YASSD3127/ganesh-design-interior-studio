import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;
  const isTiny = windowWidth < 375;

  return (
    <footer style={{
      backgroundColor: '#000000',
      color: 'white',
      padding: isTiny ? '48px 12px 24px 12px' : (isSmall ? '56px 16px 28px 16px' : (isMobile ? '64px 20px 32px 20px' : '80px 32px 32px 32px'))
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? '1fr' 
            : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isTiny ? '32px' : (isSmall ? '36px' : (isMobile ? '40px' : '64px')),
          marginBottom: isTiny ? '32px' : (isSmall ? '36px' : (isMobile ? '40px' : '64px'))
        }}>
          {/* Brand Section */}
          <div>
            <div style={{
              fontSize: isTiny ? '14px' : (isSmall ? '15px' : (isMobile ? '16px' : '20px')),
              fontWeight: '600',
              letterSpacing: isTiny ? '1.5px' : (isSmall ? '2px' : '3px'),
              marginBottom: isTiny ? '16px' : (isSmall ? '18px' : '20px'),
              color: '#FFFFFF'
            }}>
              GANESH DESIGN STUDIO
            </div>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: isTiny ? '20px' : (isSmall ? '24px' : '28px'),
              lineHeight: '1.7',
              fontSize: isTiny ? '12px' : (isSmall ? '13px' : (isMobile ? '14px' : '15px')),
              fontWeight: '600'
            }}>
              Transforming spaces with expert interior design and complete execution services. 
              Creating beautiful, functional environments across Gujarat and beyond.
            </p>
            
            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: isTiny ? '12px' : (isSmall ? '14px' : (isMobile ? '16px' : '24px')),
              paddingTop: isTiny ? '16px' : (isSmall ? '18px' : '20px'),
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div>
                <div style={{
                  fontSize: isTiny ? '1rem' : (isSmall ? '1.1rem' : (isMobile ? '1.2rem' : '1.5rem')),
                  fontWeight: '100',
                  color: '#FFFFFF',
                  marginBottom: '4px',
                  letterSpacing: '-1px'
                }}>
                  200+
                </div>
                <div style={{
                  fontSize: isTiny ? '10px' : (isSmall ? '10.5px' : (isMobile ? '11px' : '12px')),
                  color: 'rgba(255, 255, 255, 0.6)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: '600'
                }}>
                  Projects Done
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: isTiny ? '1rem' : (isSmall ? '1.1rem' : (isMobile ? '1.2rem' : '1.5rem')),
                  fontWeight: '100',
                  color: '#FFFFFF',
                  marginBottom: '4px',
                  letterSpacing: '-1px'
                }}>
                  150+
                </div>
                <div style={{
                  fontSize: isTiny ? '10px' : (isSmall ? '10.5px' : (isMobile ? '11px' : '12px')),
                  color: 'rgba(255, 255, 255, 0.6)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: '600'
                }}>
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Services - Side by Side on Mobile */}
          {isMobile ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: isTiny ? '20px' : (isSmall ? '24px' : '28px')
            }}>
              {/* Quick Links */}
              <div>
                <h3 style={{
                  fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                  fontWeight: '600',
                  marginBottom: isTiny ? '14px' : (isSmall ? '16px' : '18px'),
                  color: '#FFFFFF'
                }}>
                  Quick Links
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    { label: 'Home', href: '#home' },
                    { label: 'Portfolio', href: '#portfolio' },
                    { label: 'Services', href: '#services' },
                    { label: 'About', href: '/about-designer' },
                    { label: 'Materials', href: '/materials' },
                    { label: 'Contact', href: '#contact' }
                  ].map((link, index) => (
                    <li key={index} style={{ marginBottom: isTiny ? '8px' : '10px' }}>
                      <a
                        href={link.href}
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          fontSize: isTiny ? '11px' : (isSmall ? '12px' : '13px'),
                          fontWeight: '600',
                          transition: 'color 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                        onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.href.startsWith('#')) {
                            const element = document.getElementById(link.href.slice(1));
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          } else {
                            window.location.href = link.href;
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 style={{
                  fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                  fontWeight: '600',
                  marginBottom: isTiny ? '14px' : (isSmall ? '16px' : '18px'),
                  color: '#FFFFFF'
                }}>
                  Services
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    'Residential',
                    'Commercial',
                    '3D Design',
                    'Execution',
                    'Consultation',
                    'Custom'
                  ].map((service, index) => (
                    <li key={index} style={{ marginBottom: isTiny ? '8px' : '10px' }}>
                      <span style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: isTiny ? '11px' : (isSmall ? '12px' : '13px'),
                        fontWeight: '600'
                      }}>
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <>
              {/* Quick Links - Desktop */}
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#FFFFFF'
                }}>
                  Quick Links
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    { label: 'Home', href: '#home' },
                    { label: 'Portfolio', href: '#portfolio' },
                    { label: 'Services', href: '#services' },
                    { label: 'About Designer', href: '/about-designer' },
                    { label: 'Materials', href: '/materials' },
                    { label: 'Contact', href: '#contact' }
                  ].map((link, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <a
                        href={link.href}
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '600',
                          transition: 'color 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                        onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                        onClick={(e) => {
                          e.preventDefault();
                          if (link.href.startsWith('#')) {
                            const element = document.getElementById(link.href.slice(1));
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          } else {
                            window.location.href = link.href;
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services - Desktop */}
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#FFFFFF'
                }}>
                  Services
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    'Residential Interiors',
                    'Commercial Spaces',
                    '3D Visualization',
                    'Complete Execution',
                    'Design Consultation',
                    'Custom Solutions'
                  ].map((service, index) => (
                    <li key={index} style={{ marginBottom: '12px' }}>
                      <span style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: isTiny ? '13px' : (isSmall ? '14px' : (isMobile ? '15px' : '16px')),
              fontWeight: '600',
              marginBottom: isTiny ? '14px' : (isSmall ? '16px' : (isMobile ? '18px' : '24px')),
              color: '#FFFFFF'
            }}>
              Get in Touch
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isTiny ? '12px' : (isSmall ? '14px' : '16px')
            }}>
              <div>
                <div style={{
                  fontSize: isTiny ? '11px' : (isSmall ? '12px' : (isMobile ? '13px' : '14px')),
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: '600'
                }}>
                  Phone
                </div>
                <a
                  href="tel:+919999999999"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: isTiny ? '11px' : (isSmall ? '12px' : (isMobile ? '13px' : '14px')),
                    fontWeight: '600',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  +91 99999 99999
                </a>
              </div>

              <div>
                <div style={{
                  fontSize: isTiny ? '11px' : (isSmall ? '12px' : (isMobile ? '13px' : '14px')),
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: '600'
                }}>
                  Email
                </div>
                <a
                  href="mailto:hello@ganeshdesign.com"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    fontSize: isTiny ? '11px' : (isSmall ? '12px' : (isMobile ? '13px' : '14px')),
                    fontWeight: '600',
                    transition: 'color 0.3s ease',
                    wordBreak: 'break-word'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  hello@ganeshdesign.com
                </a>
              </div>

              <div>
                <div style={{
                  fontSize: isTiny ? '11px' : (isSmall ? '12px' : (isMobile ? '13px' : '14px')),
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: '600'
                }}>
                  Location
                </div>
                <div style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: isTiny ? '11px' : (isSmall ? '12px' : (isMobile ? '13px' : '14px')),
                  lineHeight: '1.5',
                  fontWeight: '600'
                }}>
                  Ahmedabad, Gujarat, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: isTiny ? '20px' : (isSmall ? '24px' : (isMobile ? '28px' : '32px')),
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'center' : 'center',
          gap: isTiny ? '12px' : (isSmall ? '14px' : '16px'),
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <div style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: isTiny ? '10px' : (isSmall ? '11px' : (isMobile ? '12px' : '13px')),
            fontWeight: '600'
          }}>
            © {new Date().getFullYear()} Ganesh Design Studio. All rights reserved.
          </div>
          <div style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: isTiny ? '10px' : (isSmall ? '11px' : (isMobile ? '12px' : '13px')),
            fontWeight: '600'
          }}>
            Made by Yash Devmurari
          </div>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? (isTiny ? '6px' : '8px') : '32px',
            alignItems: 'center'
          }}>
            <a
              href="#"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: isTiny ? '10px' : (isSmall ? '11px' : (isMobile ? '12px' : '13px')),
                fontWeight: '600',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: isTiny ? '10px' : (isSmall ? '11px' : (isMobile ? '12px' : '13px')),
                fontWeight: '600',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;