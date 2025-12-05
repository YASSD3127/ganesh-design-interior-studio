import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PortfolioItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-md cursor-pointer"
      style={{ backgroundColor: 'var(--surface)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Top 70%: Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="text-white px-3 py-1 rounded-full text-sm font-semibold"
          style={{ backgroundColor: 'var(--primary)' }}>
            {project.type}
          </span>
        </div>
      </div>
      
      {/* Bottom 30%: Project Details */}
      <div className="p-6"
      style={{ backgroundColor: 'var(--surface)' }}>
        <h3 className="text-xl font-bold mb-2"
        style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
        <p className="text-sm mb-3"
        style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
        
        <div className="flex items-center justify-between text-sm"
        style={{ color: 'var(--text-secondary)' }}>
          <div className="flex items-center gap-1">
            <span>📍</span>
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📐</span>
            <span>{project.size}</span>
          </div>
        </div>
        
        {/* View Details Link */}
        <div className={`mt-4 pt-4 border-t transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ borderColor: 'var(--border)' }}>
          <span className="font-semibold text-sm flex items-center gap-2"
          style={{ color: 'var(--primary)' }}>
            View Project Details
            <span className="transition-transform duration-300" style={{
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
            }}>→</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;