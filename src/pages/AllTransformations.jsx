import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllTransformations = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;
  const isTiny = windowWidth < 375;

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
      problem: 'The master bedroom lacked personality and storage. The clients wanted a peaceful retreat with ample wardrobe space.',
      solution: 'Created a calming sanctuary with built-in wardrobes, soft lighting, and a reading nook. Added a walk-in closet behind the headboard wall.',
      results: 'Storage capacity tripled, sleep quality improved, and the room became a true personal sanctuary.',
      clientName: 'Anita Patel',
      testimonial: 'Our bedroom is now our favorite space in the house. The design is both beautiful and incredibly functional.',
      rating: 5,
      location: 'Delhi',
      duration: '5 weeks',
      budget: '₹3.2L'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'living-room', label: 'Living Spaces' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'bathroom', label: 'Bathrooms' }
  ];

  const filteredTransformations = activeFilter === 'all'
    ? transformations
    : transformations.filter(t => t.category === activeFilter);

  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      {/* Sophisticated Navigation */}
      <nav 
        className="fixed top-0 w-full z-50 backdrop-blur-md"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderBottom: '1px solid #E5E5E5'
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
              color: '#2A2A2A',
              fontSize: isTiny ? '12px' : isSmall ? '13px' : '14px',
              fontWeight: '300',
              cursor: 'pointer',
              letterSpacing: '0.5px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#000'}
            onMouseLeave={(e) => e.target.style.color = '#2A2A2A'}
          >
            <ArrowLeft size={isTiny ? 14 : 16} />
            <span>Home</span>
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

      {/* Elegant Hero Section */}
      <section 
        style={{
          paddingTop: isTiny ? '96px' : isSmall ? '112px' : '128px',
          paddingBottom: isTiny ? '48px' : isSmall ? '64px' : '96px',
          padding: `${isTiny ? '96px 12px 48px' : isSmall ? '112px 16px 64px' : isMobile ? '128px 20px 80px' : '128px 32px 96px'}`,
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: isTiny ? '9px' : isSmall ? '10px' : '11px',
            letterSpacing: isTiny ? '1px' : '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: isTiny ? '12px' : isSmall ? '16px' : '24px',
            fontWeight: '600'
          }}>
            Portfolio — Design Transformations
          </div>
          
          <h1 style={{
            fontSize: isTiny ? '2rem' : isSmall ? '2.5rem' : isMobile ? '3rem' : 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '100',
            lineHeight: '1.1',
            color: '#2A2A2A',
            marginBottom: isTiny ? '16px' : isSmall ? '20px' : '32px',
            letterSpacing: isTiny ? '-1px' : '-2px'
          }}>
            Before & After
            <br />
            <span style={{ fontWeight: '400', fontStyle: 'italic' }}>Transformations</span>
          </h1>
          
          <p style={{
            fontSize: isTiny ? '14px' : isSmall ? '15px' : isMobile ? '16px' : '18px',
            lineHeight: '1.6',
            color: '#333',
            maxWidth: '600px',
            margin: `0 auto ${isTiny ? '24px' : isSmall ? '32px' : '48px'} auto`,
            fontWeight: '300',
            padding: isTiny ? '0 8px' : '0'
          }}>
            Each project tells a story of transformation—from initial vision 
            through thoughtful execution to stunning reality.
          </p>

          <div style={{
            width: '100px',
            height: '1px',
            backgroundColor: '#2A2A2A',
            margin: '0 auto'
          }} />
        </div>
      </section>

      {/* Refined Filter Section */}
      <section style={{ 
        padding: isTiny ? '32px 12px' : isSmall ? '40px 16px' : isMobile ? '48px 20px' : '64px 32px',
        backgroundColor: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            justifyContent: 'center',
            gap: isMobile ? '8px' : '0',
            marginBottom: isTiny ? '32px' : isSmall ? '40px' : '64px'
          }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                style={{
                  padding: isTiny ? '10px 16px' : isSmall ? '12px 18px' : isMobile ? '12px 20px' : '16px 32px',
                  border: isMobile ? `1px solid ${activeFilter === category.id ? '#2A2A2A' : '#E5E5E5'}` : 'none',
                  borderRadius: isMobile ? '4px' : '0',
                  backgroundColor: isMobile && activeFilter === category.id ? '#2A2A2A' : 'transparent',
                  color: isMobile && activeFilter === category.id ? '#FFFFFF' : activeFilter === category.id ? '#2A2A2A' : '#555',
                  fontSize: isTiny ? '10px' : isSmall ? '11px' : isMobile ? '11px' : '14px',
                  letterSpacing: '1px',
                  fontWeight: activeFilter === category.id ? '400' : '300',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderBottom: !isMobile && activeFilter === category.id ? '2px solid #2A2A2A' : !isMobile ? '2px solid transparent' : 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== category.id) {
                    e.target.style.color = isMobile ? '#2A2A2A' : '#2A2A2A';
                    if (isMobile) e.target.style.borderColor = '#2A2A2A';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== category.id) {
                    e.target.style.color = '#555';
                    if (isMobile) e.target.style.borderColor = '#E5E5E5';
                  }
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sophisticated Transformation Grid */}
      <section style={{ 
        paddingBottom: isTiny ? '64px' : isSmall ? '80px' : '128px',
        padding: `0 ${isTiny ? '12px' : isSmall ? '16px' : isMobile ? '20px' : '32px'} ${isTiny ? '64px' : isSmall ? '80px' : '128px'}`,
        backgroundColor: '#F5F5F5'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: isTiny ? '64px' : isSmall ? '80px' : '120px'
          }}>
            {filteredTransformations.map((project, index) => (
              <article 
                key={project.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: isTiny ? '24px' : isSmall ? '32px' : isMobile ? '40px' : '80px',
                  alignItems: 'center'
                }}
              >
                {/* Before/After Images */}
                <div style={{ 
                  order: isMobile ? 1 : (index % 2 === 0 ? 1 : 2)
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isTiny ? '16px' : isSmall ? '20px' : isMobile ? '24px' : '32px'
                  }}>
                    <div>
                      <div style={{
                        fontSize: isTiny ? '10px' : '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: '#555',
                        marginBottom: isTiny ? '8px' : '12px',
                        fontWeight: '600'
                      }}>
                        Before
                      </div>
                      <div 
                        onClick={() => setLightboxImage(project.before)}
                        style={{
                          aspectRatio: isMobile ? '16/9' : '3/4',
                          overflow: 'hidden',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease',
                          position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
                        }}
                      >
                        <img 
                          src={project.before}
                          alt="Before"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        {/* Desktop Tooltip */}
                        {!isMobile && (
                          <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '12px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            color: '#FFFFFF',
                            fontSize: '11px',
                            fontWeight: '300',
                            textAlign: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none'
                          }}
                          className="hover-tooltip"
                          >
                            💡 Click to enlarge
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <div style={{
                        fontSize: isTiny ? '10px' : '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: '#555',
                        marginBottom: isTiny ? '8px' : '12px',
                        fontWeight: '300'
                      }}>
                        After
                      </div>
                      <div 
                        onClick={() => setLightboxImage(project.after)}
                        style={{
                          aspectRatio: isMobile ? '16/9' : '3/4',
                          overflow: 'hidden',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease',
                          position: 'relative'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.02)';
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                          const tooltip = e.currentTarget.querySelector('.hover-tooltip');
                          if (tooltip) tooltip.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
                          const tooltip = e.currentTarget.querySelector('.hover-tooltip');
                          if (tooltip) tooltip.style.opacity = '0';
                        }}
                      >
                        <img 
                          src={project.after}
                          alt="After"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        {/* Desktop Tooltip */}
                        {!isMobile && (
                          <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '12px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            color: '#FFFFFF',
                            fontSize: '11px',
                            fontWeight: '300',
                            textAlign: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none'
                          }}
                          className="hover-tooltip"
                          >
                            💡 Click to enlarge
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Tip Text - Only on Mobile */}
                  {isMobile && (
                    <div style={{
                      marginTop: isTiny ? '12px' : '16px',
                      fontSize: isTiny ? '11px' : '12px',
                      color: '#888',
                      fontWeight: '300',
                      fontStyle: 'italic',
                      textAlign: 'center'
                    }}>
                      💡 Click on images to view enlarged photos
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div style={{ 
                  order: isMobile ? 2 : (index % 2 === 0 ? 2 : 1),
                  padding: isMobile ? '0' : '40px 0'
                }}>
                  {/* Project Meta */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: isTiny ? '12px 16px' : isSmall ? '16px 20px' : '16px 32px',
                    marginBottom: isTiny ? '16px' : isSmall ? '20px' : '32px',
                    fontSize: isTiny ? '10px' : isSmall ? '11px' : '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: '#555',
                    fontWeight: '500'
                  }}>
                    <span>{project.location}</span>
                    <span>{project.duration}</span>
                    <span>{project.budget}</span>
                  </div>

                  <h2 style={{
                    fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.8rem' : '2.2rem',
                    fontWeight: '300',
                    lineHeight: '1.2',
                    color: '#2A2A2A',
                    marginBottom: isTiny ? '16px' : '24px',
                    letterSpacing: '-1px'
                  }}>
                    {project.title}
                  </h2>

                  <div style={{
                    fontSize: isTiny ? '13px' : isSmall ? '14px' : isMobile ? '15px' : '16px',
                    lineHeight: '1.7',
                    color: '#333',
                    marginBottom: isTiny ? '24px' : isSmall ? '28px' : '40px',
                    fontWeight: '300'
                  }}>
                    {project.solution}
                  </div>

                  {/* Results */}
                  <div style={{
                    padding: isTiny ? '16px 0' : '24px 0',
                    borderTop: '1px solid #E5E5E5',
                    borderBottom: '1px solid #E5E5E5',
                    marginBottom: isTiny ? '20px' : isSmall ? '24px' : '32px'
                  }}>
                    <div style={{
                      fontSize: isTiny ? '11px' : isSmall ? '12px' : '14px',
                      color: '#555',
                      fontWeight: '300',
                      marginBottom: isTiny ? '8px' : '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Impact
                    </div>
                    <div style={{
                      fontSize: isTiny ? '13px' : isSmall ? '14px' : isMobile ? '15px' : '16px',
                      color: '#2A2A2A',
                      lineHeight: '1.6',
                      fontWeight: '300'
                    }}>
                      {project.results}
                    </div>
                  </div>

                  {/* Client Testimonial */}
                  <blockquote style={{
                    fontSize: isTiny ? '13px' : isSmall ? '14px' : '15px',
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                    color: '#333',
                    marginBottom: isTiny ? '12px' : '16px',
                    fontWeight: '300'
                  }}>
                    "{project.testimonial}"
                  </blockquote>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isTiny ? '8px' : '12px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{
                      fontSize: isTiny ? '12px' : '13px',
                      color: '#555',
                      fontWeight: '300',
                      letterSpacing: '0.5px'
                    }}>
                      — {project.clientName}
                    </div>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {Array.from({ length: project.rating }).map((_, i) => (
                        <Star key={i} size={isTiny ? 10 : 12} fill="#2A2A2A" color="#2A2A2A" />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant CTA Section */}
      <section 
        style={{
          padding: isTiny ? '64px 12px' : isSmall ? '80px 16px' : isMobile ? '96px 20px' : '128px 32px',
          backgroundColor: '#2A2A2A',
          color: '#FFFFFF'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: isTiny ? '1.5rem' : isSmall ? '1.8rem' : isMobile ? '2rem' : '2.5rem',
            fontWeight: '100',
            lineHeight: '1.3',
            marginBottom: isTiny ? '16px' : '24px',
            letterSpacing: '-1px'
          }}>
            Ready to Transform
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Your Space?</span>
          </h2>
          
          <p style={{
            fontSize: isTiny ? '13px' : isSmall ? '14px' : isMobile ? '15px' : '16px',
            lineHeight: '1.6',
            color: '#BBBBBB',
            marginBottom: isTiny ? '32px' : '48px',
            fontWeight: '300',
            maxWidth: '500px',
            margin: `0 auto ${isTiny ? '32px' : '48px'} auto`,
            padding: isTiny ? '0 8px' : '0'
          }}>
            Every space has untapped potential. Let's discover 
            what's possible with thoughtful design and expert execution.
          </p>
          
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            style={{
              padding: isTiny ? '14px 32px' : isSmall ? '16px 40px' : '18px 48px',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              border: '1px solid #FFFFFF',
              borderRadius: '4px',
              fontSize: isTiny ? '10px' : isSmall ? '11px' : '12px',
              letterSpacing: isTiny ? '1.5px' : '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '300',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '280px' : 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.color = '#2A2A2A';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#FFFFFF';
            }}
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50" 
          onClick={() => setLightboxImage(null)}
          style={{ 
            backgroundColor: 'rgba(42, 42, 42, 0.95)',
            padding: isTiny ? '12px' : isSmall ? '16px' : '24px'
          }}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute z-10"
            style={{
              top: isTiny ? '16px' : isSmall ? '20px' : '32px',
              right: isTiny ? '16px' : isSmall ? '20px' : '32px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              fontSize: '24px'
            }}
          >
            <X size={isTiny ? 20 : 24} />
          </button>
          
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage}
              alt="Enlarged view"
              style={{ 
                maxWidth: '90vw', 
                maxHeight: '90vh', 
                objectFit: 'contain',
                borderRadius: '4px'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTransformations;