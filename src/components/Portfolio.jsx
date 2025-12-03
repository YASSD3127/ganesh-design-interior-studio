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
    <section id="portfolio" className="py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Portfolio</h2>
      
      <PortfolioFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>

      {/* View All Button */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={handleViewAll}
            className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg"
          >
            View All {filteredProjects.length} Projects →
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;