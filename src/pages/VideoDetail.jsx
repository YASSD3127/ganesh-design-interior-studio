import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const VideoDetail = ({ videoId }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);

  // Video data - in real app, fetch by videoId
  const allVideos = [
    {
      id: 1,
      category: 'site-visit',
      title: 'Initial Site Assessment - Villa Project',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
      duration: '3:45',
      description: 'Walking through the space with clients to understand their vision and assess structural possibilities.',
      fullDescription: 'In this comprehensive site visit, we walk through a stunning villa project with our clients. We discuss spatial possibilities, structural considerations, and how to maximize natural light. This initial assessment is crucial for understanding the clients vision and creating a design that perfectly fits their lifestyle.',
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
      relatedVideos: [2, 3, 4]
    },
    {
      id: 2,
      category: 'process',
      title: 'Design Concept Presentation',
      thumbnail: 'https://images.unsplash.com/photo-1581093458791-9d42e1f5b99f?w=800',
      duration: '5:20',
      description: 'Presenting 3D renders and mood boards to help clients visualize their dream space.',
      fullDescription: 'Watch as we present our complete design concept to the client, including 3D visualizations, mood boards, material samples, and color palettes. This presentation brings the design to life and helps clients make informed decisions about their space.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Oct 2024',
      location: 'Surat, Gujarat',
      projectType: 'Modern Apartment',
      highlights: [
        '3D visualization presentation',
        'Material and color selection',
        'Mood board review',
        'Client feedback and revisions',
        'Budget discussion'
      ],
      relatedVideos: [1, 5, 6]
    },
    {
      id: 3,
      category: 'shopping',
      title: 'Sourcing Premium Materials',
      thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
      duration: '4:15',
      description: 'Handpicking Italian marble, designer tiles, and custom hardware for our luxury kitchen project.',
      fullDescription: 'Join us on a materials sourcing trip where we handpick premium materials from trusted suppliers. From Italian marble to designer tiles and custom hardware, every material is carefully selected for quality and authenticity.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Nov 2024',
      location: 'Various Suppliers, Gujarat',
      projectType: 'Luxury Kitchen',
      highlights: [
        'Visiting material suppliers',
        'Quality checks and authenticity verification',
        'Comparing different options',
        'Negotiating best prices',
        'Coordinating delivery schedules'
      ],
      relatedVideos: [7, 11, 4]
    }
  ];

  const video = allVideos.find(v => v.id === parseInt(videoId)) || allVideos[0];

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: 'var(--background)',
      paddingTop: '0px',
      paddingBottom: '64px',
      color: 'var(--text-primary)'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 40,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        backgroundColor: 'var(--surface)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <button
            onClick={() => window.history.back()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 500,
              color: 'var(--text-primary)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            <ArrowLeft size={20} />
            <span>Back to Videos</span>
          </button>
          
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
            <span style={{ color: 'var(--text-primary)' }}>GANESH</span>
            <span style={{ color: 'var(--primary)' }}> STUDIO</span>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Video Player */}
        <div style={{
          marginBottom: '40px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          backgroundColor: 'var(--surface)'
        }}>
          <div style={{
            position: 'relative',
            paddingTop: '56.25%',
            backgroundColor: '#000'
          }}>
            <iframe
              src={video.videoUrl}
              title={video.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '40px'
        }}>
          {/* Main Content */}
          <div>
            {/* Category Badge */}
            <div style={{
              display: 'inline-block',
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              {video.category.replace('-', ' ')}
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 'bold',
              marginBottom: '16px',
              lineHeight: '1.2'
            }}>
              {video.title}
            </h1>

            {/* Meta Info */}
            <div style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              marginBottom: '32px',
              padding: '16px',
              backgroundColor: 'var(--background)',
              borderRadius: '12px'
            }}>
              <div>
                <span style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--text-secondary)',
                  display: 'block',
                  marginBottom: '4px'
                }}>
                  Date
                </span>
                <span style={{ fontWeight: 600 }}>{video.date}</span>
              </div>
              <div>
                <span style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--text-secondary)',
                  display: 'block',
                  marginBottom: '4px'
                }}>
                  Duration
                </span>
                <span style={{ fontWeight: 600 }}>{video.duration}</span>
              </div>
              <div>
                <span style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--text-secondary)',
                  display: 'block',
                  marginBottom: '4px'
                }}>
                  Location
                </span>
                <span style={{ fontWeight: 600 }}>{video.location}</span>
              </div>
              <div>
                <span style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--text-secondary)',
                  display: 'block',
                  marginBottom: '4px'
                }}>
                  Project Type
                </span>
                <span style={{ fontWeight: 600 }}>{video.projectType}</span>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>
                About This Video
              </h2>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: 'var(--text-secondary)'
              }}>
                {video.fullDescription}
              </p>
            </div>

            {/* Highlights */}
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>
                Key Highlights
              </h2>
              <div style={{
                display: 'grid',
                gap: '12px'
              }}>
                {video.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '12px',
                      padding: '16px',
                      backgroundColor: 'var(--background)',
                      borderRadius: '12px'
                    }}
                  >
                    <span style={{
                      color: 'var(--primary)',
                      fontSize: '20px',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    <span style={{
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      flex: 1
                    }}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* CTA Card */}
            <div style={{
              padding: '32px',
              backgroundColor: 'var(--surface)',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>
                Start Your Project
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                lineHeight: '1.6'
              }}>
                Want a similar transformation for your space? Let's discuss your project.
              </p>
              <button
                onClick={() => {
                  window.location.href = '/';
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                style={{
                  width: '100%',
                  padding: '16px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Get Free Consultation
              </button>
            </div>

            {/* Related Videos */}
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>
                Related Videos
              </h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                {video.relatedVideos.slice(0, 3).map(relatedId => {
                  const related = allVideos.find(v => v.id === relatedId);
                  if (!related) return null;
                  return (
                    <div
                      key={related.id}
                      onClick={() => window.location.href = `/video/${related.id}`}
                      style={{
                        display: 'flex',
                        gap: '12px',
                        padding: '12px',
                        backgroundColor: 'var(--surface)',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                      }}
                    >
                      <img
                        src={related.thumbnail}
                        alt={related.title}
                        style={{
                          width: '120px',
                          height: '68px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          flexShrink: 0
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          marginBottom: '4px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical'
                        }}>
                          {related.title}
                        </h4>
                        <p style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)'
                        }}>
                          {related.duration}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;