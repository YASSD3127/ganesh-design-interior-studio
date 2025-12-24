import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { 
      id: 1, 
      name: 'Rajesh Patel', 
      location: 'Ahmedabad', 
      text: 'Exceptional work! The 3D visualization helped us see exactly how our home would look. The execution was flawless and on time. Highly recommend Ganesh Design Studio for anyone looking for quality interior design.', 
      rating: 5, 
      project: '3BHK Apartment',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
    },
    { 
      id: 2, 
      name: 'Priya Shah', 
      location: 'Surat', 
      text: 'Professional team with great attention to detail. They transformed our office space beyond our expectations. The design is both functional and beautiful. Worth every penny!', 
      rating: 5, 
      project: 'Corporate Office',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b123?w=150'
    },
    { 
      id: 3, 
      name: 'Amit Desai', 
      location: 'Vadodara', 
      text: 'From design to delivery, everything was smooth. Bhargav and his team were very responsive and made sure every detail was perfect. Highly recommend for anyone looking for quality interior work.', 
      rating: 5, 
      project: 'Villa Renovation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    { 
      id: 4, 
      name: 'Neha Kapoor', 
      location: 'Rajkot', 
      text: 'Amazing transformation of our home! The 3D designs made decision-making so easy. The team was punctual and the quality of work exceeded our expectations.', 
      rating: 5, 
      project: '2BHK Apartment',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    },
    { 
      id: 5, 
      name: 'Karan Mehta', 
      location: 'Ahmedabad', 
      text: 'Best decision we made was choosing Ganesh Design Studio. Their creativity and professionalism are unmatched. Our retail store looks stunning!', 
      rating: 5, 
      project: 'Retail Store',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section 
      id="testimonials"
      style={{
        padding: window.innerWidth < 768 ? '64px 16px' : '96px 32px',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: window.innerWidth < 768 ? '48px' : '80px'
        }}>
          <div style={{
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: '16px',
            fontWeight: '600'
          }}>
            Testimonials — Client Stories
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '100',
            lineHeight: '1.2',
            color: '#2A2A2A',
            marginBottom: '24px',
            letterSpacing: 'clamp(-1px, -0.05em, -2px)'
          }}>
            What Our Clients
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '600' }}>Say About Us</span>
          </h2>
          <p style={{
            fontSize: window.innerWidth < 768 ? '14px' : '18px',
            lineHeight: '1.6',
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: '400'
          }}>
            Real experiences from real clients who trusted us with their spaces
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div style={{
          backgroundColor: '#F5F5F5',
          borderRadius: '4px',
          padding: window.innerWidth < 768 ? '32px 24px' : '64px 48px',
          marginBottom: window.innerWidth < 768 ? '32px' : '48px',
          textAlign: 'center',
          position: 'relative'
        }}>
          {/* Quote Icon */}
          <div style={{
            fontSize: window.innerWidth < 768 ? '48px' : '64px',
            color: '#E5E5E5',
            marginBottom: window.innerWidth < 768 ? '16px' : '24px',
            fontFamily: 'serif'
          }}>
            "
          </div>

          {/* Testimonial Text */}
          <blockquote style={{
            fontSize: window.innerWidth < 768 ? '16px' : '20px',
            lineHeight: '1.6',
            color: '#2A2A2A',
            marginBottom: window.innerWidth < 768 ? '32px' : '48px',
            fontStyle: 'italic',
            fontWeight: '600',
            maxWidth: '800px',
            margin: `0 auto ${window.innerWidth < 768 ? '32px' : '48px'} auto`
          }}>
            {testimonials[currentIndex].text}
          </blockquote>

          {/* Client Info */}
          <div style={{
            display: 'flex',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: window.innerWidth < 768 ? '16px' : '24px'
          }}>
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              style={{
                width: window.innerWidth < 768 ? '60px' : '80px',
                height: window.innerWidth < 768 ? '60px' : '80px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              textAlign: window.innerWidth < 768 ? 'center' : 'left'
            }}>
              <h4 style={{
                fontSize: window.innerWidth < 768 ? '16px' : '18px',
                fontWeight: '100',
                color: '#2A2A2A',
                marginBottom: '4px',
                letterSpacing: '-0.5px'
              }}>
                {testimonials[currentIndex].name}
              </h4>
              <div style={{
                fontSize: window.innerWidth < 768 ? '12px' : '14px',
                color: '#555',
                marginBottom: '8px',
                fontWeight: '600'
              }}>
                {testimonials[currentIndex].project} • {testimonials[currentIndex].location}
              </div>
              {/* Star Rating */}
              <div style={{
                display: 'flex',
                justifyContent: window.innerWidth < 768 ? 'center' : 'flex-start',
                gap: '2px'
              }}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={window.innerWidth < 768 ? 12 : 14} 
                    fill="#FFD700" 
                    style={{ color: '#FFD700' }} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            style={{
              position: 'absolute',
              left: window.innerWidth < 768 ? '8px' : '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FFFFFF',
              border: 'none',
              borderRadius: '50%',
              width: window.innerWidth < 768 ? '40px' : '48px',
              height: window.innerWidth < 768 ? '40px' : '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2A2A2A';
              e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.color = '#2A2A2A';
            }}
          >
            <ChevronLeft size={window.innerWidth < 768 ? 16 : 20} />
          </button>

          <button
            onClick={nextTestimonial}
            style={{
              position: 'absolute',
              right: window.innerWidth < 768 ? '8px' : '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#FFFFFF',
              border: 'none',
              borderRadius: '50%',
              width: window.innerWidth < 768 ? '40px' : '48px',
              height: window.innerWidth < 768 ? '40px' : '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2A2A2A';
              e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.color = '#2A2A2A';
            }}
          >
            <ChevronRight size={window.innerWidth < 768 ? 16 : 20} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: window.innerWidth < 768 ? '48px' : '80px'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? '32px' : '12px',
                height: '12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: currentIndex === index ? '#2A2A2A' : '#E5E5E5',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: window.innerWidth < 768 ? '48px 24px' : '80px 48px',
          backgroundColor: '#2A2A2A',
          color: '#FFFFFF',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontSize: window.innerWidth < 768 ? '1.5rem' : '2rem',
            fontWeight: '100',
            marginBottom: '16px',
            letterSpacing: '-1px'
          }}>
            Join Our Happy Clients
          </h3>
          <p style={{
            fontSize: window.innerWidth < 768 ? '14px' : '16px',
            marginBottom: window.innerWidth < 768 ? '32px' : '48px',
            maxWidth: '500px',
            margin: `0 auto ${window.innerWidth < 768 ? '32px' : '48px'} auto`,
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            fontWeight: '600'
          }}>
            Experience the same quality and dedication that made our clients love their spaces
          </p>
          
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#2A2A2A',
              padding: window.innerWidth < 768 ? '16px 32px' : '18px 48px',
              border: 'none',
              borderRadius: '4px',
              fontSize: window.innerWidth < 768 ? '11px' : '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: window.innerWidth < 768 ? '100%' : 'auto',
              maxWidth: window.innerWidth < 768 ? '280px' : 'none'
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
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
      