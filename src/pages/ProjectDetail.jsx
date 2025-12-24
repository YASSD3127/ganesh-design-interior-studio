import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectDetailsData } from '../data/projectDetails';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  const project = projectDetailsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [id]);

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;
  const isTiny = windowWidth < 375;

  if (!project) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAFAFA'
      }}>
        <div style={{ textAlign: 'center', padding: isMobile ? '20px' : '40px' }}>
          <h2 style={{
            fontSize: isTiny ? '1.5rem' : isSmall ? '1.7rem' : '2rem',
            fontWeight: '100',
            marginBottom: isTiny ? '16px' : '24px',
            color: '#2A2A2A'
          }}>
            Project Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            style={{
              color: '#2A2A2A',
              background: 'none',
              border: 'none',
              fontSize: isTiny ? '13px' : '14px',
              fontWeight: '300',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Lightbox navigation functions
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFAFA' }}>
      {/* Navigation - Same pattern as other pages */}
      <nav 
        className="fixed top-0 w-full z-40"
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
            <span>Back to Portfolio</span>
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

      {/* Hero Image - Responsive */}
      <div style={{ paddingTop: isTiny ? '80px' : '96px' }}>
        <div style={{
          position: 'relative',
          height: isMobile ? '40vh' : '60vh',
          overflow: 'hidden'
        }}>
          <img
            src={project.images[0].url}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.4) 40%, rgba(42,42,42,0.85) 100%)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: isTiny ? '24px 12px' : isSmall ? '32px 16px' : isMobile ? '40px 20px' : '64px 32px',
            color: '#FFFFFF'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{
                display: 'inline-block',
                padding: isTiny ? '6px 12px' : '8px 16px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '4px',
                fontSize: isTiny ? '10px' : '11px',
                fontWeight: '300',
                letterSpacing: isTiny ? '1px' : '2px',
                textTransform: 'uppercase',
                marginBottom: isTiny ? '12px' : '24px',
                backdropFilter: 'blur(8px)'
              }}>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </div>
              <h1 style={{
                fontSize: isTiny ? '1.5rem' : isSmall ? '2rem' : isMobile ? '2.5rem' : 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '100',
                marginBottom: isTiny ? '12px' : '24px',
                lineHeight: '1.2',
                letterSpacing: isTiny ? '-1px' : '-2px'
              }}>
                {project.title}
              </h1>
              <p style={{
                fontSize: isTiny ? '14px' : isSmall ? '15px' : isMobile ? '16px' : '1.2rem',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '800px',
                fontWeight: '300',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: isTiny ? '48px 12px 32px' : isSmall ? '56px 16px 40px' : isMobile ? '64px 20px 48px' : '96px 32px 64px'
      }}>
        {/* Project Info Grid - Responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? '1fr 1fr' 
            : windowWidth < 1024
              ? 'repeat(2, 1fr)'
              : 'repeat(4, 1fr)',
          gap: isTiny ? '24px' : isSmall ? '28px' : isMobile ? '32px' : '48px',
          marginBottom: isTiny ? '48px' : isSmall ? '56px' : isMobile ? '64px' : '80px',
          padding: isTiny ? '24px' : isSmall ? '28px' : isMobile ? '32px' : '40px',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px'
        }}>
          {[
            { label: 'Client', value: project.client },
            { label: 'Location', value: project.location },
            { label: 'Year', value: project.year },
            { label: 'Size', value: project.size },
            { label: 'Duration', value: project.duration },
            { label: 'Budget', value: project.budgetRange },
            { label: 'Style', value: project.style },
            { label: 'Category', value: project.category }
          ].slice(0, windowWidth < 768 ? 4 : 8).map((item, index) => (
            <div key={index}>
              <div style={{
                fontSize: isTiny ? '10px' : '11px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#555',
                marginBottom: isTiny ? '6px' : '8px',
                fontWeight: '300'
              }}>
                {item.label}
              </div>
              <div style={{
                fontSize: isTiny ? '14px' : isSmall ? '15px' : '16px',
                color: '#2A2A2A',
                fontWeight: '300'
              }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Features List - Responsive */}
        <div style={{
          marginBottom: isTiny ? '48px' : isSmall ? '56px' : isMobile ? '64px' : '80px'
        }}>
          <h2 style={{
            fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
            fontWeight: '100',
            marginBottom: isTiny ? '24px' : isSmall ? '28px' : '32px',
            letterSpacing: '-1px'
          }}>
            Project Features
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isTiny ? '12px' : '16px'
          }}>
            {project.features.map((feature, index) => (
              <div
                key={index}
                style={{
                  padding: isTiny ? '12px 16px' : '16px 20px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '4px',
                  fontSize: isTiny ? '13px' : isSmall ? '14px' : '15px',
                  color: '#555',
                  fontWeight: '300',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isTiny ? '10px' : '12px'
                }}
              >
                <div style={{
                  width: isTiny ? '6px' : '8px',
                  height: isTiny ? '6px' : '8px',
                  backgroundColor: '#2A2A2A',
                  borderRadius: '50%',
                  flexShrink: 0
                }} />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery - Responsive Grid */}
        <div style={{
          marginBottom: isTiny ? '48px' : isSmall ? '56px' : isMobile ? '64px' : '80px'
        }}>
          <h2 style={{
            fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
            fontWeight: '100',
            marginBottom: isTiny ? '24px' : isSmall ? '28px' : '32px',
            letterSpacing: '-1px'
          }}>
            Project Gallery
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isTiny ? '16px' : isSmall ? '20px' : '24px'
          }}>
            {project.images.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                style={{
                  position: 'relative',
                  height: isTiny ? '200px' : isSmall ? '240px' : isMobile ? '280px' : '320px',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isTiny ? '12px' : '16px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  color: '#FFFFFF',
                  fontSize: isTiny ? '12px' : isSmall ? '13px' : '14px',
                  fontWeight: '300'
                }}>
                  {image.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            style={{
              backgroundColor: '#2A2A2A',
              color: '#FFFFFF',
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
            Start Your Own Project
          </button>
        </div>
      </div>

      {/* Lightbox with Touch-Friendly Navigation */}
      {lightboxIndex !== null && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '16px' : '32px',
            zIndex: 50,
            backgroundColor: 'rgba(0,0,0,0.95)'
          }}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: isTiny ? '16px' : '32px',
              right: isTiny ? '16px' : '32px',
              color: '#FFFFFF',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10,
              padding: '8px'
            }}
          >
            <X size={isTiny ? 20 : 24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: isTiny ? '8px' : '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#FFFFFF',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: isTiny ? '36px' : isSmall ? '40px' : '48px',
              height: isTiny ? '36px' : isSmall ? '40px' : '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronLeft size={isTiny ? 20 : 24} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: isTiny ? '8px' : '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#FFFFFF',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: isTiny ? '36px' : isSmall ? '40px' : '48px',
              height: isTiny ? '36px' : isSmall ? '40px' : '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronRight size={isTiny ? 20 : 24} />
          </button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[lightboxIndex].url}
              alt={project.images[lightboxIndex].caption}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '4px'
              }}
            />
            {/* Caption */}
            <div style={{
              textAlign: 'center',
              marginTop: isTiny ? '12px' : '16px',
              color: '#FFFFFF',
              fontSize: isTiny ? '12px' : isSmall ? '13px' : '14px',
              fontWeight: '300'
            }}>
              {project.images[lightboxIndex].caption}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;