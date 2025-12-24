import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const faqRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const faqs = [
    {
      question: 'How much does interior design cost?',
      answer: 'Our interior design costs vary based on project scope, size, and requirements. We offer flexible packages: Budget-Friendly (₹500-1000/sq ft), Mid-Range (₹1000-1500/sq ft), and Premium (₹1500-3000/sq ft). Contact us for a detailed quote tailored to your specific needs and vision.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines depend on size and complexity. A 2BHK apartment typically takes 1.5-2 months, a 3BHK takes 2-3 months, and larger projects or commercial spaces may take 3-6 months. We provide a detailed timeline after the initial consultation and always strive to complete projects on schedule.'
    },
    {
      question: 'Do you work outside Gujarat?',
      answer: 'Yes! While we\'re based in Gujarat and primarily serve Ahmedabad, Surat, Vadodara, and Rajkot, we offer remote consultation and 3D design services for clients anywhere in India. For projects outside Gujarat, we can provide complete 3D visualization and coordinate with local contractors for execution.'
    },
    {
      question: 'What\'s included in 3D design visualization?',
      answer: '3D visualization includes detailed renders of all rooms, 360-degree views, photorealistic materials and finishes, lighting simulation, furniture placement, and multiple design options. You\'ll see exactly how your space will look before any construction begins, allowing you to make informed decisions and request changes.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'We follow a milestone-based payment structure: 30% advance upon project confirmation, 30% after design approval and material selection, 30% during execution midpoint, and 10% upon project completion. This ensures transparency and allows you to track progress at every stage.'
    },
    {
      question: 'Do you provide warranties or after-sales service?',
      answer: 'Yes, we provide a 1-year warranty on all workmanship and execution. We also offer complimentary after-sales support for minor adjustments within 3 months of project completion. For furniture and fixtures, manufacturer warranties apply, and we assist with any warranty-related issues.'
    },
    {
      question: 'Can I see work in progress?',
      answer: 'Absolutely! We believe in complete transparency. You\'ll receive regular photo and video updates throughout the project. You\'re welcome to visit the site anytime, and we schedule formal review meetings at key milestones to ensure everything meets your expectations.'
    },
    {
      question: 'Do you help with furniture and décor sourcing?',
      answer: 'Yes, we offer complete furniture and décor sourcing as part of our service. We have partnerships with trusted vendors and can provide both custom-made and ready-made options to match your design and budget. We handle everything from selection to delivery and installation.'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = (clickedIndex) => {
    if (openIndex === clickedIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(clickedIndex);
    }
  };

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;
  const isTiny = windowWidth < 375;

  return (
    <section style={{
      padding: isTiny ? '40px 12px' : (isSmall ? '48px 16px' : (isMobile ? '64px 20px' : '96px 32px')),
      backgroundColor: '#FFFFFF'
    }}>
      <div style={{ 
        maxWidth: '900px', 
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
            FAQ — Questions
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
            Frequently Asked
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Questions</span>
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
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ List */}
        <div ref={faqRef} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: isTiny ? '10px' : (isSmall ? '12px' : (isMobile ? '14px' : '16px')),
          marginBottom: isTiny ? '32px' : (isSmall ? '36px' : (isMobile ? '40px' : '64px'))
        }}>
          {faqs.map((faq, index) => (
            <div
              key={`faq-${index}`}
              style={{
                backgroundColor: '#F5F5F5',
                borderRadius: '4px',
                border: openIndex === index ? '1px solid #2A2A2A' : '1px solid transparent',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }}
            >
              <button
                type="button"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                style={{
                  width: '100%',
                  padding: isTiny ? '14px 16px' : (isSmall ? '16px 18px' : (isMobile ? '18px 20px' : '20px 24px')),
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: isTiny ? '8px' : (isSmall ? '10px' : '12px'),
                  outline: 'none'
                }}
              >
                <span style={{
                  fontSize: isTiny ? '13px' : (isSmall ? '13.5px' : (isMobile ? '14px' : '16px')),
                  fontWeight: '400',
                  color: '#2A2A2A',
                  lineHeight: '1.4',
                  textAlign: 'left',
                  flex: 1,
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word',
                  hyphens: 'auto',
                  WebkitHyphens: 'auto',
                  MsHyphens: 'auto'
                }}>
                  {faq.question}
                </span>
                <div style={{
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'flex-start',
                  paddingTop: '2px'
                }}>
                  <ChevronDown
                    size={isTiny ? 16 : (isSmall ? 18 : (isMobile ? 20 : 22))}
                    style={{
                      color: '#555',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
              </button>
              
              <div style={{
                maxHeight: openIndex === index ? '1000px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div style={{
                  padding: isTiny ? '0 16px 16px 16px' : (isSmall ? '0 18px 18px 18px' : (isMobile ? '0 20px 20px 20px' : '0 24px 24px 24px')),
                  fontSize: isTiny ? '12px' : (isSmall ? '12.5px' : (isMobile ? '13px' : '14px')),
                  lineHeight: '1.6',
                  color: '#555',
                  fontWeight: '400',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word'
                }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: isTiny ? '32px 16px' : (isSmall ? '36px 20px' : (isMobile ? '40px 24px' : '64px 40px')),
          backgroundColor: '#F5F5F5',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: isTiny ? '1.2rem' : (isSmall ? '1.3rem' : (isMobile ? '1.4rem' : '1.8rem')),
            fontWeight: '400',
            color: '#2A2A2A',
            marginBottom: isTiny ? '10px' : (isSmall ? '12px' : '14px'),
            letterSpacing: '-0.5px',
            padding: '0 8px'
          }}>
            Still Have Questions?
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
            We're here to help! Contact us for a free consultation
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isTiny ? '10px' : (isSmall ? '12px' : '14px'),
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 12px'
          }}>
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
                width: '100%',
                maxWidth: isTiny ? '240px' : (isSmall ? '260px' : '280px')
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
              Contact Us
            </button>
            
            <button
              type="button"
              onClick={() => {
                const url = `https://wa.me/919999999999?text=${encodeURIComponent('Hi! I have questions about your interior design services.')}`;
                window.open(url, '_blank');
              }}
              style={{
                backgroundColor: 'transparent',
                color: '#2A2A2A',
                padding: isTiny ? '12px 24px' : (isSmall ? '14px 28px' : (isMobile ? '15px 32px' : '16px 40px')),
                border: '1px solid #2A2A2A',
                borderRadius: '4px',
                fontSize: isTiny ? '10px' : (isSmall ? '10.5px' : (isMobile ? '11px' : '12px')),
                letterSpacing: isTiny ? '1px' : (isSmall ? '1.5px' : '2px'),
                textTransform: 'uppercase',
                fontWeight: '300',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                outline: 'none',
                width: '100%',
                maxWidth: isTiny ? '240px' : (isSmall ? '260px' : '280px')
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
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;