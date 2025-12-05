import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PortfolioFilter from './PortfolioFilter';
import PortfolioItem from './PortfolioItem';
import { projectsData } from '../data/projects';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
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

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  // Limit to 12 projects on homepage
  const displayedProjects = filteredProjects.slice(0, 12);
  const hasMore = filteredProjects.length > 12;

  const handleViewAll = () => {
    navigate('/all-projects', { state: { filterCategory: activeFilter } });
  };

  return (
    <section id="portfolio" style={{
      padding: '96px 24px',
      backgroundColor: 'var(--background)'
    }}>
      <h2 style={{
        fontSize: 'clamp(2.5rem, 5vw, 3rem)',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '48px',
        color: 'var(--text-primary)'
      }}>
        Our Portfolio
      </h2>
      
      <PortfolioFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '32px'
      }}>
        {displayedProjects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>

      {/* View All Button */}
      {hasMore && (
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            onClick={handleViewAll}
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '9999px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              // boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            View All {filteredProjects.length} Projects →
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;