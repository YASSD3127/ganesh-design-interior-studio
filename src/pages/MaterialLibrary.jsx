import React, { useState, useEffect } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MaterialLibrary = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isSmall = windowWidth < 480;
  const isTiny = windowWidth < 375;

  const materials = [
    {
      id: 1,
      name: 'Italian Marble Collection',
      category: 'flooring',
      description: 'Premium Italian marble with natural veining patterns. Perfect for luxury interiors with timeless elegance.',
      images: [
        'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800',
        'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800'
      ],
      price: '₹800-1200/sq ft',
      applications: ['Living rooms', 'Bathrooms', 'Kitchen countertops'],
      specifications: {
        thickness: '10-20mm',
        finish: 'Polished/Honed',
        maintenance: 'Medium',
        durability: 'High'
      }
    },
    {
      id: 2,
      name: 'Engineered Wood Flooring',
      category: 'flooring',
      description: 'Premium engineered wood with authentic oak finish. Combines natural beauty with modern durability.',
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
      ],
      price: '₹200-400/sq ft',
      applications: ['Bedrooms', 'Living areas', 'Offices'],
      specifications: {
        thickness: '12-15mm',
        finish: 'UV Lacquered',
        maintenance: 'Low',
        durability: 'High'
      }
    },
    {
      id: 3,
      name: 'Designer Ceramic Tiles',
      category: 'tiles',
      description: 'Contemporary ceramic tiles with geometric patterns. Modern aesthetics with practical functionality.',
      images: [
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
      ],
      price: '₹150-300/sq ft',
      applications: ['Kitchens', 'Bathrooms', 'Feature walls'],
      specifications: {
        thickness: '8-12mm',
        finish: 'Glossy/Matte',
        maintenance: 'Low',
        durability: 'Medium'
      }
    },
    {
      id: 4,
      name: 'Premium Paint Collection',
      category: 'paint',
      description: 'Luxury paint finishes with superior coverage and durability. Available in curated color palettes.',
      images: [
        'https://images.unsplash.com/photo-1562184552-c1eb8fe5a67c?w=800',
        'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800',
        'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800'
      ],
      price: '₹80-150/sq ft',
      applications: ['All interior walls', 'Ceilings', 'Feature walls'],
      specifications: {
        coverage: '120-140 sq ft/liter',
        finish: 'Matt/Satin/Gloss',
        maintenance: 'Easy',
        durability: 'High'
      }
    },
    {
      id: 5,
      name: 'Designer LED Lighting',
      category: 'lighting',
      description: 'Contemporary LED fixtures with smart controls. Energy-efficient lighting solutions for modern homes.',
      images: [
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800'
      ],
      price: '₹2000-8000/unit',
      applications: ['Living rooms', 'Bedrooms', 'Kitchens'],
      specifications: {
        power: '15-50W',
        finish: 'Multiple options',
        maintenance: 'Minimal',
        durability: 'Very High'
      }
    },
    {
      id: 6,
      name: 'Custom Modular Furniture',
      category: 'furniture',
      description: 'Bespoke modular furniture designed for your space. Premium materials with contemporary aesthetics.',
      images: [
        'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800'
      ],
      price: '₹15000-50000/unit',
      applications: ['Living rooms', 'Bedrooms', 'Offices'],
      specifications: {
        material: 'Engineered wood',
        finish: 'Laminate/Veneer',
        maintenance: 'Low',
        durability: 'High'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Materials' },
    { id: 'flooring', label: 'Flooring' },
    { id: 'tiles', label: 'Tiles' },
    { id: 'paint', label: 'Paint & Finishes' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'furniture', label: 'Custom Furniture' }
  ];

  const filteredMaterials = selectedFilter === 'all'
    ? materials
    : materials.filter(material => material.category === selectedFilter);

  return (
    <div style={{ 
      backgroundColor: '#FAFAFA', 
      minHeight: '100vh',
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
            <span>Back to Home</span>
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

      {/* Hero Section */}
      <section style={{ 
        paddingTop: isTiny ? '120px' : isSmall ? '136px' : isMobile ? '152px' : '160px',
        paddingBottom: isTiny ? '64px' : isSmall ? '72px' : isMobile ? '80px' : '96px',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isTiny ? '0 12px' : isSmall ? '0 16px' : isMobile ? '0 20px' : '0 32px'
        }}>
          <div style={{
            fontSize: isTiny ? '9px' : isSmall ? '10px' : '11px',
            letterSpacing: isTiny ? '1px' : '2px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: isTiny ? '12px' : isSmall ? '16px' : '24px',
            fontWeight: '600'
          }}>
            Materials — Material Library
          </div>
          <h1 style={{
            fontSize: isTiny ? '2rem' : isSmall ? '2.5rem' : isMobile ? '3rem' : 'clamp(3rem, 6vw, 4rem)',
            fontWeight: '400',
            lineHeight: '1.1',
            marginBottom: isTiny ? '16px' : isSmall ? '20px' : '32px',
            letterSpacing: isTiny ? '-1px' : '-2px'
          }}>
            Material
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Library</span>
          </h1>
          <p style={{
            fontSize: isTiny ? '15px' : isSmall ? '16px' : isMobile ? '17px' : '1.2rem',
            color: '#555',
            fontWeight: '300',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            padding: isTiny ? '0 8px' : '0'
          }}>
            Explore our curated collection of premium materials for your interior design project
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ 
        padding: isTiny ? '32px 12px' : isSmall ? '40px 16px' : isMobile ? '48px 20px' : '64px 32px',
        backgroundColor: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  style={{
                    padding: isTiny ? '10px 16px' : isSmall ? '12px 18px' : isMobile ? '12px 20px' : '16px 32px',
                    border: isMobile ? `1px solid ${selectedFilter === category.id ? '#2A2A2A' : '#E5E5E5'}` : 'none',
                    borderRadius: isMobile ? '4px' : '0',
                    backgroundColor: isMobile && selectedFilter === category.id ? '#2A2A2A' : 'transparent',
                    color: isMobile && selectedFilter === category.id ? '#FFFFFF' : selectedFilter === category.id ? '#2A2A2A' : '#555',
                    fontSize: isTiny ? '10px' : isSmall ? '11px' : isMobile ? '11px' : '14px',
                    letterSpacing: '1px',
                    fontWeight: selectedFilter === category.id ? '400' : '300',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    borderBottom: !isMobile && selectedFilter === category.id ? '2px solid #2A2A2A' : !isMobile ? '2px solid transparent' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedFilter !== category.id) {
                      e.target.style.color = '#2A2A2A';
                      if (isMobile) e.target.style.borderColor = '#2A2A2A';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedFilter !== category.id) {
                      e.target.style.color = '#555';
                      if (isMobile) e.target.style.borderColor = '#E5E5E5';
                    }
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Materials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile 
              ? '1fr' 
              : windowWidth < 1024
                ? 'repeat(2, 1fr)'
                : 'repeat(3, 1fr)',
            gap: isTiny ? '32px' : isSmall ? '36px' : isMobile ? '40px' : '48px'
          }}>
            {filteredMaterials.map((material) => (
              <div
                key={material.id}
                onClick={() => setSelectedMaterial(material)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
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
                  height: isTiny ? '180px' : isSmall ? '200px' : isMobile ? '220px' : '240px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={material.images[0]}
                    alt={material.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
                <div style={{ padding: isTiny ? '20px' : '24px' }}>
                  <h3 style={{
                    fontSize: isTiny ? '1rem' : isSmall ? '1.1rem' : '1.2rem',
                    fontWeight: '300',
                    marginBottom: isTiny ? '8px' : '12px',
                    color: '#2A2A2A',
                    letterSpacing: '-0.5px'
                  }}>
                    {material.name}
                  </h3>
                  <div style={{
                    fontSize: isTiny ? '11px' : isSmall ? '12px' : '13px',
                    color: '#555',
                    fontWeight: '600',
                    marginBottom: isTiny ? '12px' : '16px'
                  }}>
                    {material.price}
                  </div>
                  <p style={{
                    fontSize: isTiny ? '12px' : isSmall ? '13px' : '14px',
                    lineHeight: '1.6',
                    color: '#555',
                    fontWeight: '300',
                    marginBottom: isTiny ? '16px' : '20px'
                  }}>
                    {material.description}
                  </p>
                  <button
                    style={{
                      width: '100%',
                      padding: isTiny ? '10px' : '12px',
                      backgroundColor: 'transparent',
                      border: '1px solid #2A2A2A',
                      borderRadius: '4px',
                      color: '#2A2A2A',
                      fontSize: isTiny ? '10px' : isSmall ? '11px' : '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      fontWeight: '300',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#2A2A2A';
                      e.target.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#2A2A2A';
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: isTiny ? '64px 12px' : isSmall ? '72px 16px' : isMobile ? '80px 20px' : '96px 32px',
        backgroundColor: '#FFFFFF'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          padding: isTiny ? '40px 20px' : isSmall ? '48px 24px' : isMobile ? '56px 32px' : '80px 48px',
          backgroundColor: '#2A2A2A',
          borderRadius: '4px',
          color: '#FFFFFF'
        }}>
          <h2 style={{
            fontSize: isTiny ? '1.3rem' : isSmall ? '1.5rem' : isMobile ? '1.7rem' : '2rem',
            fontWeight: '100',
            marginBottom: isTiny ? '16px' : '24px',
            letterSpacing: '-1px'
          }}>
            Need Help Choosing Materials?
          </h2>
          <p style={{
            fontSize: isTiny ? '13px' : isSmall ? '14px' : isMobile ? '15px' : '16px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: isTiny ? '32px' : '48px',
            lineHeight: '1.6',
            fontWeight: '300',
            maxWidth: '500px',
            margin: `0 auto ${isTiny ? '32px' : '48px'} auto`,
            padding: isTiny ? '0 8px' : '0'
          }}>
            Our experts will help you select the perfect materials for your project. 
            Get personalized recommendations based on your style, budget, and requirements.
          </p>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#2A2A2A',
              padding: isTiny ? '14px 32px' : isSmall ? '16px 40px' : '18px 48px',
              border: 'none',
              borderRadius: '4px',
              fontSize: isTiny ? '10px' : isSmall ? '11px' : '12px',
              letterSpacing: isTiny ? '1.5px' : '2px',
              textTransform: 'uppercase',
              fontWeight: '400',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '280px' : 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Get Material Consultation
          </button>
        </div>
      </section>

      {/* Material Detail Modal */}
      {selectedMaterial && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '16px' : '32px',
            zIndex: 50,
            backgroundColor: 'rgba(0,0,0,0.8)'
          }}
          onClick={() => setSelectedMaterial(null)}
        >
          <div 
            style={{
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '4px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: isTiny ? '20px' : isSmall ? '24px' : '32px',
              borderBottom: '1px solid #E5E5E5'
            }}>
              <h2 style={{ 
                fontSize: isTiny ? '1.2rem' : isSmall ? '1.4rem' : isMobile ? '1.6rem' : '1.8rem',
                fontWeight: '400',
                color: '#2A2A2A',
                letterSpacing: '-1px'
              }}>
                {selectedMaterial.name}
              </h2>
              <button
                onClick={() => setSelectedMaterial(null)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  color: '#555',
                  transition: 'color 0.3s ease',
                  padding: '8px'
                }}
                onMouseEnter={(e) => e.target.style.color = '#2A2A2A'}
                onMouseLeave={(e) => e.target.style.color = '#555'}
              >
                <X size={isTiny ? 20 : 24} />
              </button>
            </div>

            <div style={{ padding: isTiny ? '20px' : isSmall ? '24px' : '32px' }}>
              {/* Image Gallery */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: isTiny ? '12px' : '16px',
                marginBottom: isTiny ? '32px' : isSmall ? '40px' : '48px'
              }}>
                {selectedMaterial.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedMaterial.name} ${index + 1}`}
                    onClick={() => setLightboxImage(image)}
                    style={{
                      width: '100%',
                      height: isTiny ? '150px' : isSmall ? '170px' : '200px',
                      objectFit: 'cover',
                      cursor: 'pointer',
                      borderRadius: '4px',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                ))}
              </div>

              {/* Material Info */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isTiny ? '24px' : isSmall ? '28px' : '32px',
                marginBottom: isTiny ? '32px' : isSmall ? '40px' : '48px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: isTiny ? '13px' : isSmall ? '14px' : '16px',
                    fontWeight: '400',
                    color: '#2A2A2A',
                    marginBottom: isTiny ? '12px' : '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Description
                  </h3>
                  <p style={{
                    fontSize: isTiny ? '13px' : isSmall ? '14px' : '15px',
                    lineHeight: '1.6',
                    color: '#555',
                    fontWeight: '300'
                  }}>
                    {selectedMaterial.description}
                  </p>
                </div>

                <div>
                  <h3 style={{
                    fontSize: isTiny ? '13px' : isSmall ? '14px' : '16px',
                    fontWeight: '400',
                    color: '#2A2A2A',
                    marginBottom: isTiny ? '12px' : '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    Specifications
                  </h3>
                  <div style={{
                    fontSize: isTiny ? '13px' : isSmall ? '14px' : '15px',
                    color: '#555',
                    fontWeight: '300',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isTiny ? '8px' : '12px'
                  }}>
                    {Object.entries(selectedMaterial.specifications).map(([key, value]) => (
                      <div key={key}>
                        <strong style={{ fontWeight: '400', textTransform: 'capitalize' }}>{key}:</strong> {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div style={{ marginBottom: isTiny ? '32px' : isSmall ? '40px' : '48px' }}>
                <h3 style={{
                  fontSize: isTiny ? '13px' : isSmall ? '14px' : '16px',
                  fontWeight: '400',
                  color: '#2A2A2A',
                  marginBottom: isTiny ? '12px' : '16px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  Applications
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: isTiny ? '8px' : '12px'
                }}>
                  {selectedMaterial.applications.map((app, index) => (
                    <span
                      key={index}
                      style={{
                        padding: isTiny ? '6px 12px' : '8px 16px',
                        backgroundColor: '#F5F5F5',
                        borderRadius: '4px',
                        fontSize: isTiny ? '11px' : isSmall ? '12px' : '13px',
                        color: '#000',
                        fontWeight: '300'
                      }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => {
                    setSelectedMaterial(null);
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  style={{
                    backgroundColor: '#2A2A2A',
                    color: '#FFFFFF',
                    padding: isTiny ? '14px 32px' : isSmall ? '16px 40px' : '18px 48px',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: isTiny ? '10px' : isSmall ? '11px' : '12px',
                    letterSpacing: isTiny ? '1.5px' : '2px',
                    textTransform: 'uppercase',
                    fontWeight: '400',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: isMobile ? '100%' : 'auto'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#000000';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#2A2A2A';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Get Quote for This Material
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '16px' : '32px',
            zIndex: 60,
            backgroundColor: 'rgba(0,0,0,0.95)'
          }}
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute',
              top: isTiny ? '16px' : '32px',
              right: isTiny ? '16px' : '32px',
              color: '#FFFFFF',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10,
              padding: '8px'
            }}
          >
            <X size={isTiny ? 24 : 32} />
          </button>
          
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage}
              alt="Enlarged view"
              style={{ 
                maxWidth: '90vw', 
                maxHeight: '90vh', 
                objectFit: 'contain',
                borderRadius: '4px'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MaterialLibrary;