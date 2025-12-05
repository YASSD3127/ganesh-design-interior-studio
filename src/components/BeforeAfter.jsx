import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const BeforeAfter = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    {
      title: 'Modern Living Room Makeover',
      projects: [
        {
          id: 1,
          title: 'Contemporary Living Space',
          before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
          after: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
          location: 'Ahmedabad',
          duration: '2 months',
          budget: 'Mid-Range',
          improvements: ['Complete furniture upgrade', 'New lighting design', 'Wall color transformation', 'Space optimization'],
          savings: 'Increased property value by 25%'
        },
        {
          id: 2,
          title: 'Minimalist Living Room',
          before: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
          after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
          location: 'Surat',
          duration: '1.5 months',
          budget: 'Budget-Friendly',
          improvements: ['Decluttered space', 'Modern furniture', 'Improved lighting', 'New paint'],
          savings: 'Completed 20% under budget'
        },
        {
          id: 3,
          title: 'Luxury Living Room',
          before: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
          after: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800',
          location: 'Vadodara',
          duration: '3 months',
          budget: 'Premium',
          improvements: ['Premium finishes', 'Designer furniture', 'Custom lighting', 'Accent walls'],
          savings: 'Property value increased 40%'
        },
        {
          id: 4,
          title: 'Family Living Room',
          before: 'https://images.unsplash.com/photo-1556909114-ac18554c6a0c?w=800',
          after: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
          location: 'Rajkot',
          duration: '2.5 months',
          budget: 'Mid-Range',
          improvements: ['Kid-friendly design', 'Storage solutions', 'Durable materials', 'Safety features'],
          savings: 'Increased usable space by 30%'
        }
      ]
    },
    {
      title: 'Kitchen Renovations',
      projects: [
        {
          id: 5,
          title: 'Modern Kitchen Design',
          before: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
          after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
          location: 'Mumbai',
          duration: '3 months',
          budget: 'Premium',
          improvements: ['L-shaped modular design', 'Premium granite countertops', 'Modern appliances', 'Chimney installation'],
          savings: 'Cooking efficiency increased 60%'
        },
        {
          id: 6,
          title: 'Compact Kitchen Solution',
          before: 'https://images.unsplash.com/photo-1556928617-1ddc4e17bb4e?w=800',
          after: 'https://images.unsplash.com/photo-1556909049-39fadd4bdb8b?w=800',
          location: 'Pune',
          duration: '1.5 months',
          budget: 'Budget-Friendly',
          improvements: ['Space optimization', 'Smart storage', 'Cost-effective materials', 'Efficient layout'],
          savings: 'Maximized 40% more storage'
        },
        {
          id: 7,
          title: 'Traditional Kitchen Upgrade',
          before: 'https://images.unsplash.com/photo-1556909049-4bc9e5e42b79?w=800',
          after: 'https://images.unsplash.com/photo-1556909048-c6c4d9b1c1f8?w=800',
          location: 'Jaipur',
          duration: '2 months',
          budget: 'Mid-Range',
          improvements: ['Traditional elements', 'Modern functionality', 'Wooden cabinets', 'Brass fittings'],
          savings: 'Perfect blend of old and new'
        }
      ]
    },
    {
      title: 'Bedroom Transformations',
      projects: [
        {
          id: 8,
          title: 'Master Bedroom Suite',
          before: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
          after: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
          location: 'Bangalore',
          duration: '2.5 months',
          budget: 'Premium',
          improvements: ['Walk-in wardrobe', 'En-suite bathroom', 'Ambient lighting', 'Reading nook'],
          savings: 'Hotel-like luxury experience'
        },
        {
          id: 9,
          title: 'Kids Bedroom Design',
          before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
          after: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800',
          location: 'Chennai',
          duration: '1 month',
          budget: 'Budget-Friendly',
          improvements: ['Colorful theme', 'Study area', 'Play zone', 'Safety features'],
          savings: 'Fun learning environment'
        }
      ]
    },
    {
      title: 'Bathroom Upgrades',
      projects: [
        {
          id: 10,
          title: 'Spa-Like Bathroom',
          before: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
          after: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800',
          location: 'Delhi',
          duration: '2 months',
          budget: 'Premium',
          improvements: ['Jacuzzi installation', 'Premium tiles', 'Ambient lighting', 'Ventilation system'],
          savings: 'Daily spa experience at home'
        },
        {
          id: 11,
          title: 'Compact Bathroom Solution',
          before: 'https://images.unsplash.com/photo-1584622781564-1d987d7c2c2d?w=800',
          after: 'https://images.unsplash.com/photo-1584622650163-3a136b1d5e78?w=800',
          location: 'Kolkata',
          duration: '1 month',
          budget: 'Budget-Friendly',
          improvements: ['Space optimization', 'Modern fixtures', 'Storage solutions', 'Waterproofing'],
          savings: 'Feels 50% larger than before'
        }
      ]
    }
  ];

  // Get current category and project
  const currentCategory = categories[activeCategory];
  const current = currentCategory.projects[activeProjectIndex];
  const totalProjects = currentCategory.projects.length;

  // Navigation functions
  const nextProject = () => {
    setActiveProjectIndex((prev) => 
      prev === totalProjects - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setActiveProjectIndex((prev) => 
      prev === 0 ? totalProjects - 1 : prev - 1
    );
  };

  const goToProject = (index) => {
    setActiveProjectIndex(index);
  };

  const switchCategory = (categoryIndex) => {
    setActiveCategory(categoryIndex);
    setActiveProjectIndex(0);
  };

  return (
    <section style={{ 
      backgroundColor: 'var(--background)', 
      padding: '80px 20px',
      color: 'var(--text-primary)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: 'var(--text-primary)'
          }}>
            Before & After Transformations
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto' 
          }}>
            See how we've transformed spaces across Gujarat and beyond
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '48px',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => switchCategory(index)}
              className="safe-hover-btn"
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                border: activeCategory === index 
                  ? 'none' 
                  : '2px solid var(--border)',
                backgroundColor: activeCategory === index 
                  ? 'var(--primary)' 
                  : 'var(--surface)',
                color: activeCategory === index 
                  ? 'white' 
                  : 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Before/After Images */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
            gap: '32px',
            marginBottom: '32px'
          }}>
            {/* Before Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'rgba(0,0,0,0.8)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontWeight: 600,
                zIndex: 10
              }}>
                BEFORE
              </div>
              <div style={{ 
                aspectRatio: '4/3', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                cursor: 'pointer'
              }}>
                <img
                  src={current.before}
                  alt="Before transformation"
                  onClick={() => setLightboxImage(current.before)}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>

            {/* After Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: 'var(--primary)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontWeight: 600,
                zIndex: 10
              }}>
                AFTER
              </div>
              <div style={{ 
                aspectRatio: '4/3', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                cursor: 'pointer'
              }}>
                <img
                  src={current.after}
                  alt="After transformation"
                  onClick={() => setLightboxImage(current.after)}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Click to Enlarge Instruction */}
          <div style={{
            textAlign: 'center',
            padding: '12px',
            color: 'var(--text-secondary)',
            fontSize: '14px',
            fontStyle: 'italic'
          }}>
            💡 Click on any image above to enlarge and view details
          </div>
        </div>

        {/* Navigation Arrows & Dots */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '16px', 
          marginBottom: '32px' 
        }}>
          <button
            onClick={prevProject}
            className="safe-hover-btn"
            style={{
              backgroundColor: 'var(--background)',
              padding: '12px',
              borderRadius: '9999px',
              border: '2px solid var(--border)',
              cursor: 'pointer',
              color: 'var(--text-primary)'
            }}
          >
            <ChevronLeft size={20} />
          </button>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            {currentCategory.projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: index === activeProjectIndex 
                    ? 'var(--primary)' 
                    : 'var(--border)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
          
          <button
            onClick={nextProject}
            className="safe-hover-btn"
            style={{
              backgroundColor: 'var(--background)',
              padding: '12px',
              borderRadius: '9999px',
              border: '2px solid var(--border)',
              cursor: 'pointer',
              color: 'var(--text-primary)'
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Project Details */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '32px',
            color: 'var(--text-primary)'
          }}>
            {current.title}
          </h3>

          {/* Project Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
            gap: '24px',
            marginBottom: '32px',
            backgroundColor: 'var(--surface)',
            padding: '24px',
            borderRadius: '16px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Location
              </div>
              <div style={{ fontWeight: 600, color: 'var(--primary)' }}>
                {current.location}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Duration
              </div>
              <div style={{ fontWeight: 600, color: 'var(--primary)' }}>
                {current.duration}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Budget
              </div>
              <div style={{ fontWeight: 600, color: 'var(--primary)' }}>
                {current.budget}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Result
              </div>
              <div style={{ fontWeight: 600, color: 'var(--primary)' }}>
                {current.savings}
              </div>
            </div>
          </div>

          {/* Improvements */}
          <div>
            <h4 style={{ 
              fontWeight: 'bold', 
              fontSize: '18px', 
              marginBottom: '12px',
              color: 'var(--text-primary)'
            }}>
              Key Improvements:
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '12px'
            }}>
              {current.improvements.map((improvement, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'start', gap: '8px' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '18px', marginTop: '2px' }}>
                    ✓
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>
                    {improvement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Counter */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '48px', 
          color: 'var(--text-secondary)' 
        }}>
          Project {activeProjectIndex + 1} of {totalProjects} in {currentCategory.title}
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <button
            className="safe-hover-btn"
            onClick={() => {
              window.location.href = '/all-transformations';
            }}
            style={{
              padding: '16px 32px',
              fontSize: '1.1rem',
              backgroundColor: 'transparent',
              color: 'var(--primary)',
              border: '2px solid var(--primary)',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            View All Transformations
          </button>
          
          <button
            className="safe-hover-btn"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '16px 32px',
              fontSize: '1.1rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Start Your Transformation
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              zIndex: 10
            }}
          >
            <X size={30} />
          </button>

          {/* Main Image */}
          <img
            src={lightboxImage}
            alt="Enlarged view"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
        </div>
      )}
    </section>
  );
};

export default BeforeAfter;