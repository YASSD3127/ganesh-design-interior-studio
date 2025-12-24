import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PortfolioItem from './PortfolioItem';
import { projectsData } from '../data/projects';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen for filter changes from navigation
  useEffect(() => {
    const handleFilterEvent = (event) => {
      setActiveFilter(event.detail);
    };

    window.addEventListener('filterPortfolio', handleFilterEvent);
    return () => window.removeEventListener('filterPortfolio', handleFilterEvent);
  }, []);

  // Check if coming from navigation with filter
  useEffect(() => {
    if (location.state?.filterCategory) {
      setActiveFilter(location.state.filterCategory);
    }
  }, [location.state]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  // Limit to 12 projects on homepage
  const projectLimit = isMobile ? 5 : 12;
  const displayedProjects = filteredProjects.slice(0, projectLimit);
  const hasMore = filteredProjects.length > projectLimit;

  const handleViewAll = () => {
    navigate('/all-projects', { state: { filterCategory: activeFilter } });
  };

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: '3d-renders', label: '3D Designs' }
  ];

  return (
    <section 
      id="portfolio" 
      style={{
        padding: window.innerWidth < 768 ? '64px 16px' : '96px 32px',
        backgroundColor: '#F5F5F5'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: window.innerWidth < 768 ? '48px' : '80px'
        }}>
          <div style={{
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: '16px',
            fontWeight: '600'
          }}>
            Portfolio — Our Work
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '100',
            lineHeight: '1.2',
            color: '#2A2A2A',
            marginBottom: window.innerWidth < 768 ? '16px' : '24px',
            letterSpacing: '-2px'
          }}>
            Featured
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Projects</span>
          </h2>
          
          <div style={{
            width: '60px',
            height: '1px',
            backgroundColor: '#2A2A2A',
            margin: '0 auto'
          }} />
        </div>
        
        {/* Modern Filter Tabs - Responsive Wrapped */}
        <div style={{
          display: 'flex',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          justifyContent: 'center',
          gap: isMobile ? '8px' : '0',
          marginBottom: window.innerWidth < 768 ? '48px' : '64px'
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
                className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                style={{
                  padding: isMobile ? '10px 16px' : '16px 32px',
                  border: isMobile ? `1px solid ${activeFilter === filter.id ? '#2A2A2A' : '#E5E5E5'}` : 'none',
                  borderRadius: isMobile ? '4px' : '0',
                  backgroundColor: isMobile && activeFilter === filter.id ? '#2A2A2A' : 'transparent',
                  color: isMobile && activeFilter === filter.id ? '#FFFFFF' : activeFilter === filter.id ? '#2A2A2A' : '#555',
                  fontSize: isMobile ? '11px' : '14px',
                  letterSpacing: '1px',
                  fontWeight: activeFilter === filter.id ? '400' : '300',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  outline: 'none',
                  borderBottom: !isMobile && activeFilter === filter.id ? '3px solid #2A2A2A' : !isMobile ? '2px solid transparent' : 'none',
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
          gridTemplateColumns: window.innerWidth < 768 
            ? '1fr' 
            : window.innerWidth < 1024 
              ? 'repeat(2, 1fr)' 
              : 'repeat(3, 1fr)',
          gap: window.innerWidth < 768 ? '32px' : '48px',
          marginBottom: hasMore ? (window.innerWidth < 768 ? '48px' : '80px') : '0'
        }}>
          {displayedProjects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>

        {/* View All Button */}
        {hasMore && (
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleViewAll}
              style={{
                backgroundColor: 'transparent',
                color: '#2A2A2A',
                padding: window.innerWidth < 768 ? '16px 32px' : '18px 48px',
                border: '1px solid #2A2A2A',
                borderRadius: '4px',
                fontSize: window.innerWidth < 768 ? '11px' : '12px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                outline: 'none',
                width: window.innerWidth < 768 ? '100%' : 'auto',
                maxWidth: window.innerWidth < 768 ? '280px' : 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2A2A2A';
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#2A2A2A';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              View All {filteredProjects.length} Projects →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;