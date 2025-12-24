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
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
        setIsHovered(false);
      }}
      onClick={handleClick}
      onMouseMove={(e) => {
        if (isHovered) {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
        }
      }}
    >
      {/* Image Section */}
      <div style={{ 
        position: 'relative', 
        height: window.innerWidth < 768 ? '220px' : '280px', 
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
        
        {/* Category Badge */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          backgroundColor: 'rgba(42,42,42,0.9)',
          color: '#FFFFFF',
          padding: '6px 12px',
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          {project.category}
        </div>

        {/* Hover Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(42, 42, 42, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}>
          <span style={{
            color: '#FFFFFF',
            fontSize: window.innerWidth < 768 ? '12px' : '14px',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            View Project
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ 
        padding: window.innerWidth < 768 ? '20px' : '24px' 
      }}>
        <h3 style={{
          fontSize: window.innerWidth < 768 ? '1.2rem' : '1.4rem',
          fontWeight: '300',
          color: '#2A2A2A',
          marginBottom: '12px',
          letterSpacing: '-0.5px',
          lineHeight: '1.3'
        }}>
          {project.title}
        </h3>
        
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          gap: window.innerWidth < 768 ? '8px' : '16px',
          marginBottom: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: window.innerWidth < 768 ? '12px' : '13px',
            color: '#555',
            fontWeight: '600'
          }}>
            <span style={{ fontSize: '14px' }}>📍</span>
            {project.location}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: window.innerWidth < 768 ? '12px' : '13px',
            color: '#555',
            fontWeight: '600'
          }}>
            <span style={{ fontSize: '14px' }}>📐</span>
            {project.size}
          </div>
        </div>

        <p style={{
          fontSize: window.innerWidth < 768 ? '13px' : '14px',
          lineHeight: '1.6',
          color: '#555',
          fontWeight: '600',
          margin: 0
        }}>
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;