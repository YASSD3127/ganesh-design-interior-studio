import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfter = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

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
          improvements: ['Child-friendly design', 'Storage solutions', 'Durable materials', 'Bright colors'],
          savings: 'Storage space increased 50%'
        },
        {
          id: 5,
          title: 'Apartment Living Room',
          before: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800',
          after: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800',
          location: 'Ahmedabad',
          duration: '1 month',
          budget: 'Budget-Friendly',
          improvements: ['Space maximization', 'Smart storage', 'Light colors', 'Multipurpose furniture'],
          savings: 'Saved 30% through smart choices'
        }
      ]
    },
    {
      title: 'Kitchen Renovations',
      projects: [
        {
          id: 6,
          title: 'Modern Modular Kitchen',
          before: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800',
          after: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
          location: 'Surat',
          duration: '1.5 months',
          budget: 'Premium',
          improvements: ['Modular kitchen installation', 'Granite countertops', 'Modern appliances', 'Improved storage by 40%'],
          savings: 'Space efficiency increased 40%'
        },
        {
          id: 7,
          title: 'Compact Kitchen Design',
          before: 'https://images.unsplash.com/photo-1556909114-f1e7e89f17be?w=800',
          after: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800',
          location: 'Vadodara',
          duration: '3 weeks',
          budget: 'Budget-Friendly',
          improvements: ['Space optimization', 'Smart storage', 'New cabinets', 'Better lighting'],
          savings: 'Under budget completion'
        },
        {
          id: 8,
          title: 'Luxury Kitchen',
          before: 'https://images.unsplash.com/photo-1556909114-d5f7b9b1e9f2?w=800',
          after: 'https://images.unsplash.com/photo-1600489000739-c0e3ca9e6f3f?w=800',
          location: 'Ahmedabad',
          duration: '2 months',
          budget: 'Premium',
          improvements: ['Imported materials', 'Island counter', 'High-end appliances', 'Custom cabinets'],
          savings: 'Home value increased 35%'
        },
        {
          id: 9,
          title: 'Traditional Kitchen Upgrade',
          before: 'https://images.unsplash.com/photo-1556909212-03e25d99e07e?w=800',
          after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
          location: 'Rajkot',
          duration: '1 month',
          budget: 'Mid-Range',
          improvements: ['Modern meets traditional', 'New countertops', 'Updated cabinets', 'Improved workflow'],
          savings: 'Functionality improved 60%'
        },
        {
          id: 10,
          title: 'Open Kitchen Concept',
          before: 'https://images.unsplash.com/photo-1556909114-f2d5d89f5ff5?w=800',
          after: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800',
          location: 'Surat',
          duration: '2.5 months',
          budget: 'Premium',
          improvements: ['Wall removal', 'Open layout', 'Breakfast counter', 'Seamless living integration'],
          savings: 'Space feels 50% larger'
        }
      ]
    },
    {
      title: 'Bedroom Transformations',
      projects: [
        {
          id: 11,
          title: 'Master Bedroom Suite',
          before: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
          after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
          location: 'Vadodara',
          duration: '3 weeks',
          budget: 'Budget-Friendly',
          improvements: ['Built-in wardrobe', 'Accent wall design', 'New flooring', 'Smart lighting'],
          savings: 'Completed 15% under budget'
        },
        {
          id: 12,
          title: 'Kids Bedroom',
          before: 'https://images.unsplash.com/photo-1556909114-44d3b6f07b55?w=800',
          after: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
          location: 'Ahmedabad',
          duration: '2 weeks',
          budget: 'Mid-Range',
          improvements: ['Playful colors', 'Study area', 'Storage solutions', 'Safe materials'],
          savings: 'Multifunctional space created'
        },
        {
          id: 13,
          title: 'Luxury Master Bedroom',
          before: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
          after: 'https://images.unsplash.com/photo-1600573472550-570e8b34f906?w=800',
          location: 'Surat',
          duration: '1.5 months',
          budget: 'Premium',
          improvements: ['Walk-in closet', 'Premium finishes', 'Automated lighting', 'En-suite bathroom'],
          savings: 'Hotel-like luxury achieved'
        },
        {
          id: 14,
          title: 'Guest Bedroom',
          before: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
          after: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
          location: 'Vadodara',
          duration: '2 weeks',
          budget: 'Budget-Friendly',
          improvements: ['Neutral design', 'Comfortable bed', 'Good storage', 'Welcoming ambiance'],
          savings: 'Quick turnaround'
        },
        {
          id: 15,
          title: 'Teen Bedroom',
          before: 'https://images.unsplash.com/photo-1556909114-f8dd8e68ae5e?w=800',
          after: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
          location: 'Rajkot',
          duration: '3 weeks',
          budget: 'Mid-Range',
          improvements: ['Modern aesthetic', 'Study zone', 'Entertainment area', 'Smart storage'],
          savings: 'Personalized design'
        }
      ]
    }
  ];

  const currentCategory = categories[activeCategory];
  const current = currentCategory.projects[activeProjectIndex];
  const totalProjects = currentCategory.projects.length;

  const nextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  return (
    <section style={{ 
      padding: '96px 24px',
      backgroundColor: 'var(--surface)' 
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3rem)', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: 'var(--text-primary)'
          }}>
            Before & After Transformations
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: 'var(--text-secondary)', 
            maxWidth: '672px', 
            margin: '0 auto' 
          }}>
            See the dramatic difference our interior design makes. Real projects, real results.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '48px',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                setActiveProjectIndex(0);
              }}
              style={{
                padding: '12px 24px',
                borderRadius: '9999px',
                fontWeight: 600,
                backgroundColor: activeCategory === index ? 'var(--primary)' : 'var(--background)',
                color: activeCategory === index ? 'white' : 'var(--text-primary)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                boxShadow: activeCategory === index ? '0 10px 15px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Main Comparison */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '32px', 
          marginBottom: '32px' 
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
            gap: '32px' 
          }}>
            {/* Before Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: '#1F2937',
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
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)' 
              }}>
                <img
                  src={current.before}
                  alt="Before transformation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)' 
              }}>
                <img
                  src={current.after}
                  alt="After transformation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
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
            style={{
              backgroundColor: 'var(--background)',
              padding: '12px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ChevronLeft size={24} style={{ color: 'var(--text-primary)' }} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {currentCategory.projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProjectIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '9999px',
                  backgroundColor: activeProjectIndex === index ? 'var(--primary)' : 'var(--border)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            style={{
              backgroundColor: 'var(--background)',
              padding: '12px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={24} style={{ color: 'var(--text-primary)' }} />
          </button>
        </div>

        {/* Project Details */}
        <div style={{
          backgroundColor: 'var(--background)',
          borderRadius: '16px',
          padding: '32px'
        }}>
          <h3 style={{ 
            fontSize: '30px', 
            fontWeight: 'bold', 
            marginBottom: '16px',
            color: 'var(--text-primary)'
          }}>
            {current.title}
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <div>
              <div style={{ 
                fontSize: '14px', 
                color: 'var(--text-secondary)', 
                marginBottom: '4px' 
              }}>
                Location
              </div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                {current.location}
              </div>
            </div>
            <div>
              <div style={{ 
                fontSize: '14px', 
                color: 'var(--text-secondary)', 
                marginBottom: '4px' 
              }}>
                Duration
              </div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                {current.duration}
              </div>
            </div>
            <div>
              <div style={{ 
                fontSize: '14px', 
                color: 'var(--text-secondary)', 
                marginBottom: '4px' 
              }}>
                Budget
              </div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                {current.budget}
              </div>
            </div>
            <div>
              <div style={{ 
                fontSize: '14px', 
                color: 'var(--text-secondary)', 
                marginBottom: '4px' 
              }}>
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
          marginTop: '24px', 
          color: 'var(--text-secondary)' 
        }}>
          Project {activeProjectIndex + 1} of {totalProjects} in {currentCategory.title}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;