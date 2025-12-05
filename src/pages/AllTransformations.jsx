import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const AllTransformations = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transformations = [
    {
      id: 1,
      category: 'living-room',
      title: 'Modern Minimalist Living Room',
      before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
      problem: 'The space felt cramped and outdated with dark furniture and poor lighting. The client wanted a fresh, airy atmosphere for entertaining guests.',
      solution: 'We opened up the space by removing a non-structural wall, installed recessed lighting, and chose a neutral color palette with warm wood tones. Custom built-in storage maximized space efficiency.',
      results: '40% more usable space, natural light increased by 60%, and the client reports hosting gatherings twice as often.',
      clientName: 'Priya Sharma',
      testimonial: 'Bhargav transformed our cramped living room into an elegant space we absolutely love. The attention to detail and quality of materials exceeded our expectations.',
      rating: 5,
      location: 'Bangalore',
      duration: '6 weeks',
      budget: '₹4.5L'
    },
    {
      id: 2,
      category: 'kitchen',
      title: 'Contemporary Kitchen Renovation',
      before: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
      after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      problem: 'The old kitchen had insufficient counter space, poor ventilation, and outdated appliances. The layout made cooking for the family difficult.',
      solution: 'Complete redesign with an L-shaped layout, premium granite countertops, modular cabinets with soft-close mechanisms, and a new chimney system. Added a breakfast counter for casual dining.',
      results: 'Cooking efficiency improved by 50%, storage capacity doubled, and the kitchen became the heart of the home.',
      clientName: 'Rajesh Kumar',
      testimonial: 'The kitchen renovation was seamless. Bhargav handled everything from design to execution. Our family now enjoys cooking together!',
      rating: 5,
      location: 'Mumbai',
      duration: '8 weeks',
      budget: '₹6.8L'
    },
    {
      id: 3,
      category: 'bedroom',
      title: 'Serene Master Bedroom Suite',
      before: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
      after: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
      problem: 'The master bedroom lacked personality and storage. The couple wanted a relaxing retreat with a spa-like en-suite bathroom.',
      solution: 'Created a calming palette with soft grays and blues, added a custom walk-in wardrobe, upgraded the bathroom with Italian marble, and installed ambient lighting throughout.',
      results: 'Sleep quality improved significantly, and the space now feels like a luxury hotel suite.',
      clientName: 'Anita & Suresh Gupta',
      testimonial: 'Our bedroom is now our sanctuary. The design is timeless and the execution was flawless. We recommend Ganesh Studio without hesitation.',
      rating: 5,
      location: 'Delhi',
      duration: '10 weeks',
      budget: '₹8.2L'
    },
    {
      id: 4,
      category: 'bathroom',
      title: 'Luxury Spa-Inspired Bathroom',
      before: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
      after: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800',
      problem: 'Small bathroom with poor ventilation and outdated fixtures. The space felt cramped and uninviting.',
      solution: 'Maximized space with a corner shower, floating vanity, and floor-to-ceiling tiles. Added skylight for natural light and premium fixtures throughout.',
      results: 'Space feels 50% larger, natural light transformed the ambiance, and daily routines are now more enjoyable.',
      clientName: 'Kavya Reddy',
      testimonial: 'What seemed impossible in such a small space became reality. The bathroom now feels like a private spa retreat.',
      rating: 5,
      location: 'Chennai',
      duration: '4 weeks',
      budget: '₹3.8L'
    },
    {
      id: 5,
      category: 'office',
      title: 'Productive Home Office Design',
      before: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
      after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      problem: 'Cluttered spare room serving as makeshift office. Poor lighting and no storage solutions affected productivity.',
      solution: 'Custom built-in desk and shelving, ergonomic lighting setup, acoustic panels for video calls, and a dedicated storage wall.',
      results: 'Productivity increased by 40%, video call quality improved, and work-life balance enhanced.',
      clientName: 'Arjun Patel',
      testimonial: 'My home office went from chaotic to inspiring. The design perfectly balances functionality with aesthetics.',
      rating: 5,
      location: 'Pune',
      duration: '3 weeks',
      budget: '₹2.5L'
    },
    {
      id: 6,
      category: 'dining-room',
      title: 'Elegant Dining Room Makeover',
      before: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      after: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      problem: 'Formal dining room felt cold and unused. Family preferred eating in the kitchen due to poor ambiance.',
      solution: 'Warm color scheme, statement chandelier, custom dining table, and cozy seating nook. Added art gallery wall and wine storage.',
      results: 'Family dinners increased by 300%, space now used daily, and entertaining became a joy.',
      clientName: 'Meera & Vikram Shah',
      testimonial: 'Our dining room went from formal and cold to warm and inviting. We actually use it every day now!',
      rating: 5,
      location: 'Ahmedabad',
      duration: '5 weeks',
      budget: '₹5.2L'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Transformations', icon: '🏠' },
    { id: 'living-room', label: 'Living Room', icon: '🛋️' },
    { id: 'kitchen', label: 'Kitchen', icon: '👨‍🍳' },
    { id: 'bedroom', label: 'Bedroom', icon: '🛏️' },
    { id: 'bathroom', label: 'Bathroom', icon: '🛁' },
    { id: 'office', label: 'Home Office', icon: '💻' },
    { id: 'dining-room', label: 'Dining Room', icon: '🍽️' }
  ];

  const filteredTransformations = activeFilter === 'all' 
    ? transformations 
    : transformations.filter(t => t.category === activeFilter);

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: 'var(--background)',
      paddingTop: '0px',
      paddingBottom: '64px',
      color: 'var(--text-primary)'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #6B4E71 0%, #8B7355 100%)',
        padding: '60px 20px',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <button
          onClick={() => window.history.back()}
          style={{
            position: 'absolute',
            left: '20px',
            top: '20px',
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)'
          }}
        >
          <ArrowLeft size={20} color="white" />
        </button>
        
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '700',
          marginBottom: '20px',
          letterSpacing: '-0.02em'
        }}>
          Amazing Transformations
        </h1>
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.95,
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Explore detailed before & after stories of spaces we've transformed
        </p>
      </div>

      {/* Filter Categories */}
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className="safe-hover-btn"
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                border: activeFilter === cat.id 
                  ? 'none' 
                  : '2px solid var(--border)',
                backgroundColor: activeFilter === cat.id 
                  ? 'var(--primary)' 
                  : 'var(--surface)',
                color: activeFilter === cat.id 
                  ? 'white' 
                  : 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Transformations Grid - SINGLE COLUMN LAYOUT */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          marginBottom: '60px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {filteredTransformations.map(project => (
            <div
              key={project.id}
              className="safe-hover-card"
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                width: '100%'
              }}
            >
              {/* Before/After Images - LARGE SHOWCASE */}
              <div style={{
                display: 'flex',
                gap: '3px',
                backgroundColor: 'var(--border)',
                minHeight: '450px'
              }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <img
                    src={project.before}
                    alt="Before"
                    onClick={() => setLightboxImage(project.before)}
                    style={{
                      width: '100%',
                      height: '450px',
                      objectFit: 'cover',
                      display: 'block',
                      cursor: 'pointer'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    letterSpacing: '1px'
                  }}>
                    BEFORE
                  </div>
                </div>
                
                <div style={{ position: 'relative', flex: 1 }}>
                  <img
                    src={project.after}
                    alt="After"
                    onClick={() => setLightboxImage(project.after)}
                    style={{
                      width: '100%',
                      height: '450px',
                      objectFit: 'cover',
                      display: 'block',
                      cursor: 'pointer'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    letterSpacing: '1px'
                  }}>
                    AFTER
                  </div>
                </div>
              </div>

              {/* Click to Enlarge Instruction */}
              <div style={{
                textAlign: 'center',
                padding: '12px',
                backgroundColor: 'var(--background)',
                color: 'var(--text-secondary)',
                fontSize: '14px',
                fontStyle: 'italic',
                borderBottom: '1px solid var(--border)'
              }}>
                💡 Click on any image above to enlarge and view details
              </div>

              {/* Project Details */}
              <div style={{ padding: '40px' }}>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: 'var(--text-primary)',
                  textAlign: 'center'
                }}>
                  {project.title}
                </h3>

                {/* Quick Stats - Horizontal Layout */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  gap: '20px',
                  marginBottom: '32px',
                  padding: '24px',
                  backgroundColor: 'var(--background)',
                  borderRadius: '16px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ textAlign: 'center', minWidth: '120px' }}>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>📍 Location</div>
                    <div style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '1.1rem' }}>{project.location}</div>
                  </div>
                  <div style={{ textAlign: 'center', minWidth: '120px' }}>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>⏱️ Duration</div>
                    <div style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '1.1rem' }}>{project.duration}</div>
                  </div>
                  <div style={{ textAlign: 'center', minWidth: '120px' }}>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>💰 Budget</div>
                    <div style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '1.1rem' }}>{project.budget}</div>
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
                  gap: '40px',
                  marginBottom: '32px'
                }}>
                  {/* Left Column */}
                  <div>
                    {/* The Challenge */}
                    <div style={{ marginBottom: '28px' }}>
                      <h4 style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '12px',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        🎯 The Challenge
                      </h4>
                      <p style={{
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        fontSize: '1.05rem'
                      }}>
                        {project.problem}
                      </p>
                    </div>

                    {/* Our Solution */}
                    <div style={{ marginBottom: '28px' }}>
                      <h4 style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '12px',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        💡 Our Solution
                      </h4>
                      <p style={{
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        fontSize: '1.05rem'
                      }}>
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* The Results */}
                    <div style={{ marginBottom: '28px' }}>
                      <h4 style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        marginBottom: '12px',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        🏆 The Results
                      </h4>
                      <p style={{
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        fontSize: '1.05rem'
                      }}>
                        {project.results}
                      </p>
                    </div>

                    {/* Client Testimonial */}
                    <div style={{
                      padding: '24px',
                      backgroundColor: 'var(--background)',
                      borderRadius: '16px',
                      borderLeft: `5px solid var(--primary)`
                    }}>
                      <div style={{ display: 'flex', marginBottom: '12px' }}>
                        {Array.from({ length: project.rating }).map((_, i) => (
                          <Star key={i} size={20} fill="var(--primary)" color="var(--primary)" />
                        ))}
                      </div>
                      <p style={{
                        fontStyle: 'italic',
                        marginBottom: '16px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6',
                        fontSize: '1.05rem'
                      }}>
                        "{project.testimonial}"
                      </p>
                      <p style={{
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        fontSize: '1.1rem'
                      }}>
                        — {project.clientName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          padding: '50px 30px',
          backgroundColor: 'var(--surface)',
          borderRadius: '16px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: 'var(--text-primary)',
            marginBottom: '15px'
          }}>
            Ready for Your Own Transformation?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px auto'
          }}>
            Let's discuss your space and create something amazing together
          </p>
          <button
            className="safe-hover-btn"
            onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
            style={{
              padding: '15px 40px',
              fontSize: '1.1rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Start Your Transformation
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              zIndex: 10
            }}
          >
            <X size={30} />
          </button>

          {/* Main Image */}
          <img
            src={lightboxImage}
            alt="Enlarged view"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AllTransformations;