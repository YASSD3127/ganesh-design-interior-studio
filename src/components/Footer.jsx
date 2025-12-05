import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000000',
      color: 'white',
      padding: '48px 24px'
    }}>
      <div style={{
          paddingTop: '32px',
          borderTop: '1px solid #374151',
          textAlign: 'center'
        }}></div>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>
              <span style={{ color: 'white' }}>GANESH</span>
              <span style={{ color: 'var(--primary)' }}> STUDIO</span>
            </div>
            <p style={{
              color: '#9CA3AF',
              marginBottom: '16px'
            }}>
              Transforming spaces with expert interior design and execution services across Gujarat.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 style={{
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>
              Quick Links
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <li>
                <a href="#home" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none'
                }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none'
                }}>
                  Our Work
                </a>
              </li>
              <li>
                <a href="#services" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none'
                }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none'
                }}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none'
                }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 style={{
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>
              Our Services
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              color: '#9CA3AF'
            }}>
              <li>Residential Interiors</li>
              <li>Commercial Spaces</li>
              <li>3D Visualization</li>
              <li>Complete Execution</li>
              <li>Custom Furniture</li>
              <li>Renovation</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 style={{
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>
              Get In Touch
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              color: '#9CA3AF'
            }}>
              <li>📞 +91 XXXXX XXXXX</li>
              <li>✉️ info@ganeshstudio.com</li>
              <li>📍 Gujarat, India</li>
            </ul>
            
            <div style={{ marginTop: '16px' }}>
              <h4 style={{
                fontWeight: 600,
                marginBottom: '8px'
              }}>
                Follow Us
              </h4>
              <div style={{
                display: 'flex',
                gap: '12px'
              }}>
                <a href="#" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none'
                }}>
                  Instagram
                </a>
                <a href="#" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none'
                }}>
                  Facebook
                </a>
                <a href="#" style={{
                  color: '#9CA3AF',
                  textDecoration: 'none'
                }}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid #374151',
          textAlign: 'center'
        }}>
          <p style={{ color: '#9CA3AF' }}>
            &copy; 2025 Ganesh Studio. All rights reserved. | Designed with passion for beautiful spaces
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;