import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How much does interior design cost?',
      answer: 'Our interior design costs vary based on project scope, size, and requirements. We offer flexible packages: Budget-Friendly (₹500-1000/sq ft), Mid-Range (₹1000-1500/sq ft), and Premium (₹1500-3000/sq ft). Contact us for a detailed quote tailored to your specific needs.'
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
      answer: 'Yes, we provide a 1-year warranty on all workmanship and execution. We also offer complimentary after-sales support for minor adjustments within 3 months of project completion. For furniture and fixtures, manufacturer warranties apply.'
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{
      padding: '96px 24px',
      backgroundColor: 'var(--background)'
    }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3rem)',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '16px',
          color: 'var(--text-primary)'
        }}>
          Frequently Asked Questions
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          marginBottom: '48px',
          fontSize: '18px'
        }}>
          Got questions? We've got answers. Can't find what you're looking for? Contact us!
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-primary)'
                }}
              >
                <span style={{
                  fontWeight: 600,
                  fontSize: '18px',
                  paddingRight: '32px'
                }}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  style={{
                    color: 'var(--primary)',
                    flexShrink: 0,
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </button>
              
              <div
                style={{
                  maxHeight: openIndex === index ? '400px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  padding: '0 24px 20px 24px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7'
                }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '48px',
          padding: '32px',
          backgroundColor: 'var(--surface)',
          borderRadius: '12px',
          border: `2px solid var(--primary)`
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: 'var(--text-primary)'
          }}>
            Still have questions?
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '24px'
          }}>
            We're here to help! Get in touch with our team for personalized answers.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '12px 32px',
              borderRadius: '9999px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;