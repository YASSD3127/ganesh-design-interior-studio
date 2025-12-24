import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';

const AllVideos = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
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

  const allVideos = {
    residential: [
      { id: 1, title: 'Modern 3BHK Apartment Walkthrough', thumbnail: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:30', category: 'residential' },
      { id: 2, title: 'Luxury Villa Interior Design', thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '3:45', category: 'residential' },
      { id: 5, title: 'Bedroom Makeover', thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:00', category: 'residential' },
      { id: 9, title: 'Complete Home Tour', thumbnail: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '5:30', category: 'residential' },
    ],
    commercial: [
      { id: 3, title: 'Office Space Transformation', thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:15', category: 'commercial' },
      { id: 6, title: 'Restaurant Interior Design', thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '3:20', category: 'commercial' },
      { id: 7, title: 'Retail Store Design', thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:50', category: 'commercial' },
    ],
    '3d-renders': [
      { id: 4, title: 'Kitchen Renovation Time-lapse', thumbnail: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '1:45', category: '3d-renders' },
      { id: 8, title: '3D Visualization Showcase', thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '4:10', category: '3d-renders' },
    ]
  };

  const getAllVideos = () => {
    return [...allVideos.residential, ...allVideos.commercial, ...allVideos['3d-renders']];
  };

  const filteredVideos = activeFilter === 'all' ? getAllVideos() : allVideos[activeFilter];

  const filters = [
    { id: 'all', label: 'All Videos' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: '3d-renders', label: '3D Designs' }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      paddingTop: isTiny ? '80px' : '96px', 
      paddingBottom: isTiny ? '48px' : '64px',
      backgroundColor: '#FAFAFA',
      color: '#2A2A2A'
    }}>
      {/* Navigation */}
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
            <span>Back to Home</span>
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
        {selectedVideo ? (
          <div>
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                marginBottom: isTiny ? '24px' : '32px',
                background: 'none',
                border: 'none',
                color: '#555',
                fontSize: isTiny ? '13px' : '14px',
                fontWeight: '300',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#2A2A2A'}
              onMouseLeave={(e) => e.target.style.color = '#555'}
            >
              ← Back to all videos
            </button>
            
            {/* Video Player Section */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '4px',
              overflow: 'hidden',
              marginBottom: isTiny ? '32px' : isSmall ? '40px' : '48px'
            }}>
              <div style={{ 
                position: 'relative',
                paddingTop: '56.25%',
                backgroundColor: '#F5F5F5'
              }}>
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.3)'
                }}>
                  <div style={{
                    width: isTiny ? '60px' : isSmall ? '70px' : '80px',
                    height: isTiny ? '60px' : isSmall ? '70px' : '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}>
                    <Play size={isTiny ? 24 : isSmall ? 28 : 32} fill="#2A2A2A" color="#2A2A2A" style={{ marginLeft: '4px' }} />
                  </div>
                </div>
              </div>
              <div style={{ padding: isTiny ? '24px 20px' : '32px' }}>
                <h1 style={{
                  fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.6rem' : '1.8rem',
                  fontWeight: '300',
                  marginBottom: isTiny ? '12px' : '16px',
                  letterSpacing: '-1px'
                }}>
                  {selectedVideo.title}
                </h1>
                <p style={{
                  color: '#555',
                  fontSize: isTiny ? '13px' : isSmall ? '14px' : '15px',
                  lineHeight: '1.6',
                  fontWeight: '400'
                }}>
                  Video description and details about this project showcase.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Page Header */}
            <div style={{ 
              textAlign: 'center', 
              marginBottom: isTiny ? '48px' : isSmall ? '56px' : isMobile ? '64px' : '80px'
            }}>
              <div style={{
                fontSize: isTiny ? '9px' : isSmall ? '10px' : '11px',
                letterSpacing: isTiny ? '1px' : '2px',
                textTransform: 'uppercase',
                color: '#555',
                marginBottom: isTiny ? '12px' : isSmall ? '16px' : '24px',
                fontWeight: '600'
              }}>
                Videos — All Videos
              </div>
              <h1 style={{
                fontSize: isTiny ? '2rem' : isSmall ? '2.5rem' : isMobile ? '3rem' : 'clamp(3rem, 6vw, 4rem)',
                fontWeight: '100',
                lineHeight: '1.1',
                marginBottom: isTiny ? '16px' : '24px',
                letterSpacing: isTiny ? '-1px' : '-2px'
              }}>
                All Project
                <br />
                <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Videos</span>
              </h1>
              <p style={{
                fontSize: isTiny ? '14px' : isSmall ? '15px' : '16px',
                color: '#555',
                fontWeight: '400',
                maxWidth: '600px',
                margin: '0 auto',
                padding: isTiny ? '0 8px' : '0'
              }}>
                Watch our complete collection of project videos and transformations
              </p>
            </div>

            {/* Filter Tabs */}
            <div style={{
              display: 'flex',
              justifyContent: isMobile ? 'flex-start' : 'center',
              marginBottom: isTiny ? '48px' : isSmall ? '56px' : isMobile ? '64px' : '80px',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: isMobile ? '8px' : '0'
            }}>
              <div style={{
                display: 'flex',
                gap: '0',
                borderBottom: '1px solid #E5E5E5'
              }}>
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    style={{
                      padding: isTiny ? '12px 16px' : isSmall ? '14px 20px' : isMobile ? '14px 24px' : '16px 32px',
                      border: 'none',
                      backgroundColor: 'transparent',
                      color: activeFilter === filter.id ? '#2A2A2A' : '#555',
                      fontSize: isTiny ? '11px' : isSmall ? '12px' : isMobile ? '13px' : '14px',
                      letterSpacing: '1px',
                      fontWeight: activeFilter === filter.id ? '400' : '300',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      borderBottom: activeFilter === filter.id ? '2px solid #2A2A2A' : '2px solid transparent',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      flexShrink: 0
                    }}
                    onMouseEnter={(e) => {
                      if (activeFilter !== filter.id) {
                        e.target.style.color = '#2A2A2A';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeFilter !== filter.id) {
                        e.target.style.color = '#555';
                      }
                    }}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Videos Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : windowWidth < 1024
                  ? 'repeat(2, 1fr)'
                  : 'repeat(3, 1fr)',
              gap: isTiny ? '32px' : isSmall ? '36px' : isMobile ? '40px' : '48px',
              marginBottom: isTiny ? '64px' : isSmall ? '72px' : isMobile ? '80px' : '96px'
            }}>
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onClick={() => setSelectedVideo(video)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{
                    position: 'relative',
                    aspectRatio: '16/9',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
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
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0,0,0,0.3)'
                    }}>
                      <div style={{
                        width: isTiny ? '48px' : isSmall ? '56px' : '64px',
                        height: isTiny ? '48px' : isSmall ? '56px' : '64px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Play size={isTiny ? 18 : isSmall ? 20 : 24} fill="#2A2A2A" color="#2A2A2A" style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: isTiny ? '12px' : '16px',
                      right: isTiny ? '12px' : '16px',
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      color: '#FFFFFF',
                      padding: isTiny ? '4px 8px' : '6px 12px',
                      borderRadius: '4px',
                      fontSize: isTiny ? '11px' : '13px',
                      fontWeight: '400'
                    }}>
                      {video.duration}
                    </div>
                  </div>
                  <div style={{ padding: isTiny ? '20px' : '24px' }}>
                    <h3 style={{
                      fontSize: isTiny ? '1rem' : isSmall ? '1.05rem' : '1.1rem',
                      fontWeight: '300',
                      color: '#2A2A2A',
                      lineHeight: '1.4',
                      letterSpacing: '-0.5px'
                    }}>
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
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
                Ready to See Your Project Featured?
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
                Let's create something beautiful together and document the entire transformation journey
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
                Start Your Project
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllVideos;