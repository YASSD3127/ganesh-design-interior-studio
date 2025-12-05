import React, { useState, useEffect } from 'react';
import { Play, ArrowLeft } from 'lucide-react';

const BehindTheScenes = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      title: 'Sourcing Premium Materials at Ganesh Studio',
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
    },
    {
      id: 9,
      category: 'process',
      title: 'Color & Material Selection',
      thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
      duration: '4:30',
      description: 'How we choose the perfect color palette and materials for each unique project.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Sep 2024'
    },
    {
      id: 10,
      category: 'site-visit',
      title: 'Final Reveal & Client Reaction',
      thumbnail: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800',
      duration: '7:20',
      description: 'The most rewarding moment - watching clients see their transformed space for the first time.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Nov 2024'
    },
    {
      id: 11,
      category: 'shopping',
      title: 'Fabric & Upholstery Selection',
      thumbnail: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800',
      duration: '3:40',
      description: 'Choosing luxurious fabrics and textures that bring comfort and style together.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Oct 2024'
    },
    {
      id: 12,
      category: 'construction',
      title: 'Living Room Construction Update',
      thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
      duration: '4:00',
      description: 'From demolition to stunning finish - the complete journey of a living room makeover.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      date: 'Nov 2024'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Videos', icon: '🎬' },
    { id: 'site-visit', label: 'Site Visits', icon: '🏗️' },
    { id: 'shopping', label: 'Material Shopping', icon: '🛍️' },
    { id: 'process', label: 'Design Process', icon: '✏️' },
    { id: 'construction', label: 'Construction', icon: '🔨' }
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
          Behind The Scenes
        </h1>
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.95,
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          See how we bring design visions to life, from concept to completion
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
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                border: activeFilter === cat.id 
                  ? '2px solid var(--primary)' 
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

        {/* Video Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {filteredVideos.map(video => (
            <div
              key={video.id}
              onClick={() => handleVideoClick(video.id)}
              className="card"
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              {/* Thumbnail */}
              <div style={{ 
                position: 'relative',
                paddingTop: '56.25%',
                overflow: 'hidden'
              }}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
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
                  backgroundColor: 'rgba(0,0,0,0.4)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Play size={28} fill="var(--primary)" color="var(--primary)" style={{ marginLeft: '4px' }} />
                  </div>
                </div>
                {/* Duration Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div style={{ padding: '20px' }}>
                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--primary)',
                  fontWeight: '600',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {video.date}
                </div>
                <h3 style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                  fontWeight: '600',
                  lineHeight: '1.4'
                }}>
                  {video.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
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
            Want to See Your Project Come to Life?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px auto'
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
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default BehindTheScenes;