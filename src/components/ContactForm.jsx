import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    propertyType: '',
    budgetRange: '',
    message: ''
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '',
      projectType: '',
      propertyType: '',
      budgetRange: '',
      message: '' 
    });
  };

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;
  const isTiny = windowWidth < 375;

  return (
    <>
      <section 
        id="contact"
        style={{
          padding: isTiny ? '40px 12px' : (isSmall ? '48px 16px' : (isMobile ? '64px 20px' : '96px 32px')),
          backgroundColor: '#2A2A2A',
          color: '#FFFFFF'
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
            marginBottom: isTiny ? '32px' : (isSmall ? '40px' : (isMobile ? '48px' : '64px'))
          }}>
            <div style={{
              fontSize: isTiny ? '9px' : (isSmall ? '10px' : '11px'),
              letterSpacing: isTiny ? '1px' : (isSmall ? '1.5px' : '2px'),
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: isTiny ? '8px' : (isSmall ? '10px' : '12px'),
              fontWeight: '300'
            }}>
              Contact — Let's Connect
            </div>
            <h2 style={{
              fontSize: isTiny ? '1.5rem' : (isSmall ? '1.75rem' : (isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 3.5rem)')),
              fontWeight: '100',
              lineHeight: '1.2',
              marginBottom: isTiny ? '12px' : (isSmall ? '14px' : '16px'),
              letterSpacing: isTiny ? '-0.5px' : (isSmall ? '-1px' : '-2px'),
              padding: '0 8px'
            }}>
              Start Your Design
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Journey Today</span>
            </h2>
            <p style={{
              fontSize: isTiny ? '13px' : (isSmall ? '14px' : (isMobile ? '15px' : '16px')),
              lineHeight: '1.5',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              fontWeight: '300',
              padding: '0 12px'
            }}>
              Ready to transform your space? Get in touch for a free consultation
            </p>
          </div>

          {/* Contact Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isTiny ? '32px' : (isSmall ? '40px' : (isMobile ? '48px' : '64px'))
          }}>
            {/* Contact Info */}
            <div>
              <h3 style={{
                fontSize: isTiny ? '1.2rem' : (isSmall ? '1.3rem' : (isMobile ? '1.4rem' : '1.5rem')),
                fontWeight: '100',
                marginBottom: isTiny ? '20px' : (isSmall ? '24px' : '28px'),
                letterSpacing: '-0.5px'
              }}>
                Get in Touch
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: isTiny ? '20px' : (isSmall ? '24px' : '28px'),
                marginBottom: isTiny ? '28px' : (isSmall ? '32px' : '40px')
              }}>
                {/* Phone */}
                <div style={{
                  display: 'flex',
                  gap: isTiny ? '12px' : '16px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    padding: isTiny ? '10px' : '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={isTiny ? 16 : (isSmall ? 18 : 20)} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: isTiny ? '13px' : (isSmall ? '14px' : '16px'),
                      fontWeight: '300',
                      marginBottom: isTiny ? '4px' : '6px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      Phone
                    </h4>
                    <a
                      href="tel:+919999999999"
                      style={{
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                        fontWeight: '300',
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div style={{
                  display: 'flex',
                  gap: isTiny ? '12px' : '16px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    padding: isTiny ? '10px' : '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={isTiny ? 16 : (isSmall ? 18 : 20)} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: isTiny ? '13px' : (isSmall ? '14px' : '16px'),
                      fontWeight: '300',
                      marginBottom: isTiny ? '4px' : '6px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      Email
                    </h4>
                    <a
                      href="mailto:hello@ganeshdesign.com"
                      style={{
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                        fontWeight: '300',
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      hello@ganeshdesign.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div style={{
                  display: 'flex',
                  gap: isTiny ? '12px' : '16px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    padding: isTiny ? '10px' : '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={isTiny ? 16 : (isSmall ? 18 : 20)} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: isTiny ? '13px' : (isSmall ? '14px' : '16px'),
                      fontWeight: '300',
                      marginBottom: isTiny ? '4px' : '6px',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      Location
                    </h4>
                    <p style={{
                      color: '#FFFFFF',
                      margin: 0,
                      fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                      lineHeight: '1.5',
                      fontWeight: '300'
                    }}>
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h4 style={{
                  fontSize: isTiny ? '14px' : (isSmall ? '15px' : '16px'),
                  fontWeight: '300',
                  marginBottom: isTiny ? '12px' : '14px'
                }}>
                  Business Hours
                </h4>
                <div style={{
                  fontSize: isTiny ? '12px' : (isSmall ? '13px' : '14px'),
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: '300',
                  lineHeight: '1.6'
                }}>
                  <p style={{ margin: '0 0 8px 0' }}>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p style={{ margin: 0 }}>Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: isTiny ? '12px' : (isSmall ? '14px' : '16px'),
                  marginBottom: isTiny ? '12px' : (isSmall ? '14px' : '16px')
                }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      padding: isTiny ? '12px 14px' : (isSmall ? '14px 16px' : '16px'),
                      color: '#FFFFFF',
                      fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                      fontWeight: '300',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      padding: isTiny ? '12px 14px' : (isSmall ? '14px 16px' : '16px'),
                      color: '#FFFFFF',
                      fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                      fontWeight: '300',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    padding: isTiny ? '12px 14px' : (isSmall ? '14px 16px' : '16px'),
                    color: '#FFFFFF',
                    fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                    fontWeight: '300',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    marginBottom: isTiny ? '12px' : (isSmall ? '14px' : '16px')
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: isTiny ? '12px' : (isSmall ? '14px' : '16px'),
                  marginBottom: isTiny ? '12px' : (isSmall ? '14px' : '16px')
                }}>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      padding: isTiny ? '12px 14px' : (isSmall ? '14px 16px' : '16px'),
                      color: formData.projectType ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                      fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                      fontWeight: '300',
                      outline: 'none',
                      cursor: 'pointer',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                      backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'rgba(255,255,255,0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '16px',
                      paddingRight: '36px'
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>Project Type</option>
                    <option value="residential" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>Residential</option>
                    <option value="commercial" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>Commercial</option>
                    <option value="consultation" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>Consultation</option>
                    <option value="renovation" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>Renovation</option>
                  </select>

                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      padding: isTiny ? '12px 14px' : (isSmall ? '14px 16px' : '16px'),
                      color: formData.budgetRange ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                      fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                      fontWeight: '300',
                      outline: 'none',
                      cursor: 'pointer',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                      backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'rgba(255,255,255,0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      backgroundSize: '16px',
                      paddingRight: '36px'
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>Budget Range</option>
                    <option value="under-5L" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>Under ₹5 Lakhs</option>
                    <option value="5L-10L" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>₹5 - ₹10 Lakhs</option>
                    <option value="10L-25L" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>₹10 - ₹25 Lakhs</option>
                    <option value="25L+" style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}>₹25 Lakhs+</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project... *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={isTiny ? 4 : 5}
                  style={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    padding: isTiny ? '12px 14px' : (isSmall ? '14px 16px' : '16px'),
                    color: '#FFFFFF',
                    fontSize: isTiny ? '13px' : (isSmall ? '14px' : '15px'),
                    fontWeight: '300',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    marginBottom: isTiny ? '20px' : (isSmall ? '24px' : '28px'),
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                />

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    color: '#2A2A2A',
                    padding: isTiny ? '14px 24px' : (isSmall ? '16px 28px' : '18px 32px'),
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: isTiny ? '10px' : (isSmall ? '11px' : '12px'),
                    fontWeight: '600',
                    letterSpacing: isTiny ? '1.5px' : '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#F0F0F0';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 24px rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#FFFFFF';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;