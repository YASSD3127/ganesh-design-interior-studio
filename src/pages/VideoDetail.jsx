import React, { useEffect, useState } from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const VideoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [id]);

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;
  const isTiny = windowWidth < 375;

  const allVideos = [
    {
      id: 1,
      category: 'site-visit',
      title: 'Initial Site Assessment - Villa Project',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
      duration: '3:45',
      description: 'Walking through the space with clients to understand their vision and assess structural possibilities.',
      fullDescription: 'In this comprehensive site visit, we walk through a stunning villa project with our clients. We discuss spatial possibilities, structural considerations, and how to maximize natural light.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Nov 2024',
      location: 'Ahmedabad, Gujarat',
      projectType: 'Luxury Villa',
      highlights: [
        'Initial client consultation',
        'Space analysis and measurements',
        'Discussion of architectural possibilities',
        'Understanding client lifestyle needs',
        'Identifying key design challenges'
      ],
      relatedVideos: [2, 3]
    },
    // ... more videos
  ];

  const video = allVideos.find(v => v.id === parseInt(id)) || allVideos[0];
  const relatedVideos = allVideos.filter(v => video.relatedVideos.includes(v.id));

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#FAFAFA',
      paddingTop: isTiny ? '80px' : '96px',
      paddingBottom: isTiny ? '48px' : '64px',
      color: '#2A2A2A'
    }}>
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
            <span>Back to Videos</span>
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
        {/* Video Player - Responsive 16:9 */}
        <div style={{
          marginBottom: isTiny ? '48px' : isSmall ? '56px' : isMobile ? '64px' : '96px',
          borderRadius: '4px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
        }}>
          <div style={{
            position: 'relative',
            paddingTop: '56.25%', // 16:9 aspect ratio
            backgroundColor: '#000'
          }}>
            <iframe
              src={video.videoUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            />
          </div>
        </div>

        {/* Video Info - Responsive Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
          gap: isTiny ? '32px' : isSmall ? '40px' : isMobile ? '48px' : '64px',
          marginBottom: isTiny ? '48px' : isSmall ? '56px' : isMobile ? '64px' : '96px'
        }}>
          {/* Main Info */}
          <div>
            <div style={{
              fontSize: isTiny ? '10px' : '11px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#555',
              marginBottom: isTiny ? '8px' : '12px',
              fontWeight: '600'
            }}>
              {video.date} • {video.duration}
            </div>
            
            <h1 style={{
              fontSize: isTiny ? '1.5rem' : isSmall ? '1.8rem' : isMobile ? '2rem' : '2.5rem',
              fontWeight: '300',
              marginBottom: isTiny ? '16px' : '24px',
              letterSpacing: '-1px',
              lineHeight: '1.2'
            }}>
              {video.title}
            </h1>
            
            <p style={{
              fontSize: isTiny ? '14px' : isSmall ? '15px' : '16px',
              lineHeight: '1.7',
              color: '#555',
              fontWeight: '400',
              marginBottom: isTiny ? '24px' : '32px'
            }}>
              {video.fullDescription}
            </p>
          </div>

          {/* Sidebar Info */}
          <div style={{
            backgroundColor: '#F5F5F5',
            padding: isTiny ? '24px 20px' : isSmall ? '28px 24px' : '32px',
            borderRadius: '4px'
          }}>
            <h3 style={{
              fontSize: isTiny ? '13px' : '14px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#2A2A2A',
              marginBottom: isTiny ? '16px' : '20px',
              fontWeight: '500'
            }}>
              Project Details
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isTiny ? '12px' : '16px',
              fontSize: isTiny ? '13px' : isSmall ? '14px' : '15px',
              color: '#555',
              fontWeight: '400'
            }}>
              <div>
                <strong style={{ fontWeight: '400', color: '#2A2A2A' }}>Location:</strong> {video.location}
              </div>
              <div>
                <strong style={{ fontWeight: '400', color: '#2A2A2A' }}>Type:</strong> {video.projectType}
              </div>
              <div>
                <strong style={{ fontWeight: '400', color: '#2A2A2A' }}>Category:</strong> {video.category.replace('-', ' ')}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div style={{
          marginBottom: isTiny ? '48px' : isSmall ? '56px' : isMobile ? '64px' : '96px'
        }}>
          <h2 style={{
            fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
            fontWeight: '300',
            marginBottom: isTiny ? '24px' : '32px',
            letterSpacing: '-1px'
          }}>
            Video Highlights
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isTiny ? '12px' : '16px'
          }}>
            {video.highlights.map((highlight, index) => (
              <div
                key={index}
                style={{
                  padding: isTiny ? '12px 16px' : '16px 20px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '4px',
                  fontSize: isTiny ? '13px' : isSmall ? '14px' : '15px',
                  color: '#555',
                  fontWeight: '400',
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
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Related Videos */}
        {relatedVideos.length > 0 && (
          <>
            <h2 style={{
              fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
              fontWeight: '100',
              marginBottom: isTiny ? '24px' : '32px',
              letterSpacing: '-1px'
            }}>
              Related Videos
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : windowWidth < 1024
                  ? 'repeat(2, 1fr)'
                  : 'repeat(3, 1fr)',
              gap: isTiny ? '24px' : isSmall ? '28px' : isMobile ? '32px' : '40px',
              marginBottom: isTiny ? '48px' : isSmall ? '56px' : isMobile ? '64px' : '96px'
            }}>
              {relatedVideos.map((relatedVideo) => (
                <div
                  key={relatedVideo.id}
                  onClick={() => navigate(`/video/${relatedVideo.id}`)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '4px',
                    overflow: 'hidden',
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
                  <div style={{
                    position: 'relative',
                    aspectRatio: '16/9',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={relatedVideo.thumbnail}
                      alt={relatedVideo.title}
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
                        width: isTiny ? '40px' : '48px',
                        height: isTiny ? '40px' : '48px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Play size={isTiny ? 16 : 20} fill="#2A2A2A" color="#2A2A2A" style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: isTiny ? '10px' : '12px',
                      right: isTiny ? '10px' : '12px',
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      color: '#FFFFFF',
                      padding: isTiny ? '4px 8px' : '6px 10px',
                      borderRadius: '4px',
                      fontSize: isTiny ? '10px' : '11px',
                      fontWeight: '400'
                    }}>
                      {relatedVideo.duration}
                    </div>
                  </div>
                  <div style={{ padding: isTiny ? '16px' : '20px' }}>
                    <h3 style={{
                      fontSize: isTiny ? '14px' : isSmall ? '15px' : '16px',
                      fontWeight: '100',
                      color: '#2A2A2A',
                      lineHeight: '1.4',
                      letterSpacing: '-0.5px'
                    }}>
                      {relatedVideo.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

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
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;