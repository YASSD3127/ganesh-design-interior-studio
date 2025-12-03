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
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Top 70%: Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {project.type}
          </span>
        </div>
      </div>
      
      {/* Bottom 30%: Project Details */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
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
        <div className={`mt-4 pt-4 border-t border-gray-100 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <span className="text-orange-600 font-semibold text-sm flex items-center gap-2">
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