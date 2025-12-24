import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VideoSection = ({ videoUrl, thumbnail, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = videoUrl ? getYouTubeId(videoUrl) : null;

  if (!videoUrl) {
    return (
      <div style={{
        padding: '64px',
        textAlign: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: '4px'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '24px' }}>🎬</div>
        <p style={{ 
          color: '#555', 
          fontSize: '16px',
          fontWeight: '300'
        }}>
          Video coming soon for this project
        </p>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      {!isPlaying ? (
        <div 
          style={{
            position: 'relative', 
            cursor: 'pointer'
          }} 
          onClick={() => setIsPlaying(true)}
        >
          <div style={{
            aspectRatio: '16/9',
            borderRadius: '4px',
            overflow: 'hidden',
            backgroundColor: '#F5F5F5'
          }}>
            <img
              src={thumbnail || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200'}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.3)'
          }}>
            <div style={{
              borderRadius: '50%',
              padding: '24px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}>
              <Play size={48} fill="#2A2A2A" color="#2A2A2A" style={{ marginLeft: '4px' }} />
            </div>
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            padding: '32px 24px 24px 24px'
          }}>
            <p style={{
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: '300',
              margin: 0
            }}>
              {title || 'Watch Project Video'}
            </p>
          </div>
        </div>
      ) : (
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsPlaying(false)}
            style={{
              position: 'absolute',
              top: '-48px',
              right: '0',
              borderRadius: '50%',
              padding: '12px',
              backgroundColor: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              zIndex: 10
            }}
          >
            <X size={20} color="#2A2A2A" />
          </button>
          
          <div style={{
            aspectRatio: '16/9',
            borderRadius: '4px',
            overflow: 'hidden',
            backgroundColor: '#000',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            {youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                style={{
                  width: '100%',
                  height: '100%'
                }}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Featured Videos with Carousel
export const FeaturedVideos = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const videos = [
    { id: 1, title: 'Modern 3BHK Apartment Walkthrough', thumbnail: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:30' },
    { id: 2, title: 'Luxury Villa Interior Design', thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '3:45' },
    { id: 3, title: 'Office Space Transformation', thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:15' },
    { id: 4, title: 'Kitchen Renovation Time-lapse', thumbnail: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '1:45' },
    { id: 5, title: 'Bedroom Makeover', thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:00' },
    { id: 6, title: 'Restaurant Interior Design', thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '3:20' },
    { id: 7, title: 'Retail Store Design', thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:50' },
    { id: 8, title: '3D Visualization Showcase', thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '4:10' },
    { id: 9, title: 'Complete Home Tour', thumbnail: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '5:30' }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const videosPerPage = 3;
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const startIndex = currentPage * videosPerPage;
  const displayedVideos = videos.slice(startIndex, startIndex + videosPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section style={{ 
      padding: '96px 32px',
      backgroundColor: '#FAFAFA'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: '16px',
            fontWeight: '300'
          }}>
            Videos — Featured Work
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '100',
            lineHeight: '1.2',
            color: '#2A2A2A',
            marginBottom: '24px',
            letterSpacing: '-2px'
          }}>
            See Our Work
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>In Action</span>
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#555',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: '300'
          }}>
            Virtual walkthroughs and project showcases that bring our designs to life
          </p>
        </div>

        {selectedVideo ? (
          <div style={{ maxWidth: '900px', margin: '0 auto 64px auto' }}>
            <VideoSection
              videoUrl={selectedVideo.videoUrl}
              thumbnail={selectedVideo.thumbnail}
              title={selectedVideo.title}
            />
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                marginTop: '24px',
                background: 'none',
                border: 'none',
                color: '#555',
                fontSize: '14px',
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
          </div>
        ) : (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '48px',
              marginBottom: '64px'
            }}>
              {displayedVideos.map((video) => (
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
                        borderRadius: '50%',
                        padding: '16px',
                        backgroundColor: 'rgba(255,255,255,0.9)'
                      }}>
                        <Play size={32} fill="#2A2A2A" color="#2A2A2A" style={{ marginLeft: '3px' }} />
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      color: '#FFFFFF',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: '400'
                    }}>
                      {video.duration}
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '500',
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

            {/* Navigation */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
              marginBottom: '48px'
            }}>
              <button
                onClick={prevPage}
                style={{
                  backgroundColor: '#F5F5F5',
                  border: 'none',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2A2A2A';
                  e.target.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#F5F5F5';
                  e.target.style.color = '#2A2A2A';
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <div style={{ display: 'flex', gap: '12px' }}>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    style={{
                      width: currentPage === index ? '32px' : '12px',
                      height: '12px',
                      borderRadius: '6px',
                      backgroundColor: currentPage === index ? '#2A2A2A' : '#E5E5E5',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                style={{
                  backgroundColor: '#F5F5F5',
                  border: 'none',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2A2A2A';
                  e.target.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#F5F5F5';
                  e.target.style.color = '#2A2A2A';
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>

             {/* More Videos Button */}
            <div style={{ textAlign: 'center', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/all-videos')}
                style={{
                  backgroundColor: '#2A2A2A',
                  color: '#FFFFFF',
                  padding: '18px 48px',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
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
                View All {videos.length} Videos →
              </button>
              
              <button
                onClick={() => navigate('/behind-the-scenes')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#2A2A2A',
                  padding: '18px 48px',
                  border: '1px solid #2A2A2A',
                  borderRadius: '4px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2A2A2A';
                  e.target.style.color = '#FFFFFF';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#2A2A2A';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Behind The Scenes 🎬
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default VideoSection;