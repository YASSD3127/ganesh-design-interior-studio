import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PortfolioFilter from '../components/PortfolioFilter';
import PortfolioItem from '../components/PortfolioItem';
import { projectsData } from '../data/projects';

const AllProjects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState(
    location.state?.filterCategory || 'all'
  );
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  // Group projects by category
  const groupedProjects = {
    residential: projectsData.filter(p => p.category === 'residential'),
    commercial: projectsData.filter(p => p.category === 'commercial'),
    '3d-renders': projectsData.filter(p => p.category === '3d-renders')
  };

  const categoryTitles = {
    residential: 'Residential Projects',
    commercial: 'Commercial Projects',
    '3d-renders': '3D Design Visualizations'
  };

  return (
    <div className="min-h-screen pt-32 pb-16"
    style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 shadow-sm"
      style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 font-medium"
            style={{ color: 'var(--text-primary)' }}
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          
          <div className="text-xl font-bold">
            <span style={{ color: 'var(--text-primary)' }}>GANESH</span>
            <span style={{ color: 'var(--primary)' }}> STUDIO</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">All Projects</h1>
        <p className="text-center mb-12" style={{ color: 'var(--text-secondary)' }}>
          Explore our complete portfolio of {projectsData.length}+ completed projects
        </p>

        {/* Filter Tabs */}
        <PortfolioFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* Projects Grid */}
        {activeFilter === 'all' ? (
          // Show by category when "All" is selected
          <div className="space-y-16">
            {Object.entries(groupedProjects).map(([category, projects]) => (
              <div key={category}>
                <h2 className="text-3xl font-bold mb-8">{categoryTitles[category]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <PortfolioItem key={project.id} project={project} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Show filtered results
          <div>
            <h2 className="text-3xl font-bold mb-8">{categoryTitles[activeFilter]}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <PortfolioItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;