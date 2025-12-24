import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects';

const AllProjects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState(location.state?.filterCategory || 'all');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;
  const isTiny = windowWidth < 375;

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
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
            fontWeight: '300'
          }}>
            Portfolio — All Projects
          </div>
          <h1 style={{
            fontSize: isTiny ? '2rem' : isSmall ? '2.5rem' : isMobile ? '3rem' : 'clamp(3rem, 6vw, 4rem)',
            fontWeight: '100',
            lineHeight: '1.1',
            marginBottom: isTiny ? '16px' : '24px',
            letterSpacing: isTiny ? '-1px' : '-2px'
          }}>
            Our Complete
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Portfolio</span>
          </h1>
          <p style={{
            fontSize: isTiny ? '14px' : isSmall ? '15px' : '16px',
            color: '#555',
            fontWeight: '300',
            maxWidth: '600px',
            margin: '0 auto',
            padding: isTiny ? '0 8px' : '0'
          }}>
            Explore {filteredProjects.length} projects showcasing our design expertise
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          justifyContent: 'center',
          gap: isMobile ? '8px' : '0',
          marginBottom: isTiny ? '48px' : isSmall ? '56px' : isMobile ? '64px' : '80px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            gap: isMobile ? '8px' : '0',
            justifyContent: 'center',
            borderBottom: isMobile ? 'none' : '1px solid #E5E5E5'
          }}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  padding: isTiny ? '10px 16px' : isSmall ? '12px 18px' : isMobile ? '12px 20px' : '16px 32px',
                  border: isMobile ? `1px solid ${activeFilter === filter.id ? '#2A2A2A' : '#E5E5E5'}` : 'none',
                  borderRadius: isMobile ? '4px' : '0',
                  backgroundColor: isMobile && activeFilter === filter.id ? '#2A2A2A' : 'transparent',
                  color: isMobile && activeFilter === filter.id ? '#FFFFFF' : activeFilter === filter.id ? '#2A2A2A' : '#555',
                  fontSize: isTiny ? '10px' : isSmall ? '11px' : isMobile ? '11px' : '14px',
                  letterSpacing: '1px',
                  fontWeight: activeFilter === filter.id ? '500' : '300',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderBottom: !isMobile && activeFilter === filter.id ? '3px solid #2A2A2A' : !isMobile ? '2px solid transparent' : 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter.id) {
                    e.target.style.color = '#2A2A2A';
                    if (isMobile) e.target.style.borderColor = '#2A2A2A';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter.id) {
                    e.target.style.color = '#555';
                    if (isMobile) e.target.style.borderColor = '#E5E5E5';
                  }
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
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
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                cursor: 'pointer',
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onClick={() => navigate(`/project/${project.id}`)}
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
                height: isTiny ? '220px' : isSmall ? '240px' : isMobile ? '260px' : '280px',
                overflow: 'hidden'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                />
                
                <div style={{
                  position: 'absolute',
                  top: isTiny ? '12px' : '16px',
                  right: isTiny ? '12px' : '16px',
                  backgroundColor: 'rgba(42,42,42,0.9)',
                  color: '#FFFFFF',
                  padding: isTiny ? '4px 8px' : '6px 12px',
                  fontSize: isTiny ? '10px' : '11px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  {project.category}
                </div>
              </div>

              <div style={{ padding: isTiny ? '20px' : '24px' }}>
                <h3 style={{
                  fontSize: isTiny ? '1rem' : isSmall ? '1.1rem' : '1.2rem',
                  fontWeight: '100',
                  color: '#2A2A2A',
                  marginBottom: isTiny ? '10px' : '12px',
                  letterSpacing: '-0.5px',
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>
                
                <div style={{
                  display: 'flex',
                  flexDirection: isTiny ? 'column' : 'row',
                  gap: isTiny ? '8px' : '16px',
                  marginBottom: isTiny ? '12px' : '16px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: isTiny ? '11px' : isSmall ? '12px' : '13px',
                    color: '#555',
                    fontWeight: '600'
                  }}>
                    <span style={{ fontSize: isTiny ? '12px' : '14px' }}>📍</span>
                    {project.location}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: isTiny ? '11px' : isSmall ? '12px' : '13px',
                    color: '#555',
                    fontWeight: '600'
                  }}>
                    <span style={{ fontSize: isTiny ? '12px' : '14px' }}>📐</span>
                    {project.size}
                  </div>
                </div>

                <p style={{
                  fontSize: isTiny ? '12px' : isSmall ? '13px' : '14px',
                  lineHeight: '1.6',
                  color: '#555',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;