import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play } from 'lucide-react';

const BehindTheScenes = () => {
  const [activeFilter, setActiveFilter] = useState('all');
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

  const videos = [
    {
      id: 1,
      category: 'site-visit',
      title: 'Initial Site Assessment - Villa Project',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
      duration: '3:45',
      description: 'Walking through the space with clients to understand their vision and assess structural possibilities.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Nov 2024'
    },
    {
      id: 2,
      category: 'process',
      title: 'Design Concept Presentation',
      thumbnail: 'https://images.unsplash.com/photo-1581093458791-9d42e1f5b99f?w=800',
      duration: '5:20',
      description: 'Presenting 3D renders and mood boards to help clients visualize their dream space.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Oct 2024'
    },
    {
      id: 3,
      category: 'shopping',
      title: 'Sourcing Premium Materials',
      thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      duration: '4:15',
      description: 'Handpicking Italian marble, designer tiles, and custom hardware for our luxury kitchen project.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Nov 2024'
    },
    {
      id: 4,
      category: 'construction',
      title: 'Kitchen Installation Time-lapse',
      thumbnail: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800',
      duration: '2:30',
      description: 'Watch a complete modular kitchen come together in just 2 minutes.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Nov 2024'
    },
    {
      id: 5,
      category: 'site-visit',
      title: 'Mid-Construction Walkthrough',
      thumbnail: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800',
      duration: '4:50',
      description: 'Checking progress, ensuring quality, and making real-time adjustments with the construction team.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Oct 2024'
    },
    {
      id: 6,
      category: 'process',
      title: 'Custom Furniture Design Process',
      thumbnail: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800',
      duration: '6:10',
      description: 'From sketch to reality - designing bespoke furniture pieces that perfectly fit the space.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Sep 2024'
    },
    {
      id: 7,
      category: 'shopping',
      title: 'Lighting Fixtures Shopping Trip',
      thumbnail: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800',
      duration: '3:55',
      description: 'Selecting the perfect lighting to set the mood and enhance architectural features.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Oct 2024'
    },
    {
      id: 8,
      category: 'construction',
      title: 'Bedroom Transformation Progress',
      thumbnail: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
      duration: '5:45',
      description: 'Weekly progress updates showing the dramatic transformation of a master bedroom.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Nov 2024'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'site-visit', label: 'Site Visits' },
    { id: 'shopping', label: 'Material Shopping' },
    { id: 'process', label: 'Design Process' },
    { id: 'construction', label: 'Construction' }
  ];

  const filteredVideos = activeFilter === 'all' 
    ? videos 
    : videos.filter(v => v.category === activeFilter);

  const handleVideoClick = (videoId) => {
    window.location.href = `/video/${videoId}`;
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#FAFAFA',
      paddingTop: isTiny ? '80px' : '96px',
      paddingBottom: isTiny ? '48px' : '64px',
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
            onClick={() => window.history.back()}
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
            <span>Back</span>
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
            Videos — Behind The Scenes
          </div>
          <h1 style={{
            fontSize: isTiny ? '2rem' : isSmall ? '2.5rem' : isMobile ? '3rem' : 'clamp(3rem, 6vw, 4rem)',
            fontWeight: '100',
            lineHeight: '1.1',
            marginBottom: isTiny ? '16px' : '24px',
            letterSpacing: isTiny ? '-1px' : '-2px'
          }}>
            Behind The
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Scenes</span>
          </h1>
          <p style={{
            fontSize: isTiny ? '15px' : isSmall ? '16px' : isMobile ? '17px' : '1.2rem',
            color: '#555',
            fontWeight: '300',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: isTiny ? '0 8px' : '0'
          }}>
            See how we bring design visions to life, from concept to completion
          </p>
        </div>

        {/* Filter Categories */}
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
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                style={{
                  padding: isTiny ? '12px 16px' : isSmall ? '14px 20px' : isMobile ? '14px 24px' : '16px 32px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: activeFilter === cat.id ? '#2A2A2A' : '#555',
                  fontSize: isTiny ? '11px' : isSmall ? '12px' : isMobile ? '13px' : '14px',
                  letterSpacing: '1px',
                  fontWeight: activeFilter === cat.id ? '400' : '300',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderBottom: activeFilter === cat.id ? '2px solid #2A2A2A' : '2px solid transparent',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== cat.id) {
                    e.target.style.color = '#2A2A2A';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== cat.id) {
                    e.target.style.color = '#555';
                  }
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
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
          {filteredVideos.map(video => (
            <div
              key={video.id}
              onClick={() => handleVideoClick(video.id)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
              }}
            >
              {/* Thumbnail */}
              <div style={{ 
                position: 'relative',
                height: isTiny ? '180px' : isSmall ? '200px' : isMobile ? '220px' : '240px',
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
                {/* Play Button Overlay */}
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
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    <Play size={isTiny ? 18 : isSmall ? 20 : 24} fill="#2A2A2A" color="#2A2A2A" style={{ marginLeft: '3px' }} />
                  </div>
                </div>
                {/* Duration Badge */}
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

              {/* Video Info */}
              <div style={{ padding: isTiny ? '20px 16px' : isSmall ? '24px 20px' : '32px 24px' }}>
                <div style={{
                  fontSize: isTiny ? '10px' : '11px',
                  color: '#555',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: isTiny ? '8px' : '12px'
                }}>
                  {video.date}
                </div>
                <h3 style={{
                  fontSize: isTiny ? '1rem' : isSmall ? '1.1rem' : '1.2rem',
                  color: '#2A2A2A',
                  marginBottom: isTiny ? '12px' : '16px',
                  fontWeight: '400',
                  lineHeight: '1.4',
                  letterSpacing: '-0.5px'
                }}>
                  {video.title}
                </h3>
                <p style={{
                  fontSize: isTiny ? '13px' : isSmall ? '14px' : '15px',
                  color: '#555',
                  lineHeight: '1.6',
                  fontWeight: '400'
                }}>
                  {video.description}
                </p>
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
            Want to See Your Project Come to Life?
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
            We document every step of the journey and keep you updated throughout the process
          </p>
          <button
            onClick={() => {
              window.location.href = '/';
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
      </div>
    </div>
  );
};

export default BehindTheScenes;