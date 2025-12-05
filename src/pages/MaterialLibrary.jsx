import React, { useState, useEffect } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const MaterialLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const materials = {
    flooring: [
      { 
        id: 1, 
        name: 'Italian Marble - Statuario', 
        image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600', 
        price: '₹180-250/sq ft', 
        description: 'Luxurious white marble with grey veining',
        detailedDescription: 'Premium Italian Statuario marble featuring elegant grey veining on a pristine white background. This timeless material adds luxury and sophistication to any space.',
        features: ['Heat resistant', 'Scratch resistant', 'Easy to clean', 'Timeless elegance'],
        applications: ['Living rooms', 'Foyers', 'Bathrooms', 'Kitchen countertops'],
        gallery: [
          'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800',
          'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
          'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800'
        ]
      },
      { 
        id: 2, 
        name: 'Engineered Wood Flooring', 
        image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=600', 
        price: '₹120-180/sq ft', 
        description: 'Durable oak finish, water resistant',
        detailedDescription: 'High-quality engineered wood with authentic oak finish. Water-resistant treatment makes it perfect for Indian climates.',
        features: ['Water resistant', 'Durable', 'Easy installation', 'Natural look'],
        applications: ['Bedrooms', 'Living rooms', 'Offices', 'Commercial spaces'],
        gallery: [
          'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800',
          'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
        ]
      }
    ],
    tiles: [
      { 
        id: 3, 
        name: 'Designer Ceramic Tiles', 
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600', 
        price: '₹60-120/sq ft', 
        description: 'Contemporary patterns, easy maintenance',
        detailedDescription: 'Beautiful ceramic tiles with contemporary patterns. Perfect for modern homes.',
        features: ['Easy maintenance', 'Variety of designs', 'Affordable', 'Durable'],
        applications: ['Kitchens', 'Bathrooms', 'Living areas', 'Commercial spaces'],
        gallery: [
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
          'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
          'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800'
        ]
      }
    ]
  };

  const categories = [
    { id: 'all', label: 'All Materials', icon: '🏗️' },
    { id: 'flooring', label: 'Flooring', icon: '🏠' },
    { id: 'tiles', label: 'Tiles', icon: '🔲' },
    { id: 'paint', label: 'Paint & Finishes', icon: '🎨' },
    { id: 'lighting', label: 'Lighting', icon: '💡' },
    { id: 'furniture', label: 'Custom Furniture', icon: '🛋️' }
  ];

  const getAllMaterials = () => {
    return [...materials.flooring, ...materials.tiles];
  };

  const filteredMaterials = activeCategory === 'all' 
    ? getAllMaterials() 
    : materials[activeCategory] || [];

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (selectedMaterial?.gallery) {
      setLightboxIndex((prev) => 
        prev === selectedMaterial.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedMaterial?.gallery) {
      setLightboxIndex((prev) => 
        prev === 0 ? selectedMaterial.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: 'var(--background)',
      paddingTop: '120px',
      paddingBottom: '64px',
      color: 'var(--text-primary)'
    }}>
      {/* Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 40,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        backgroundColor: 'var(--surface)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <button
            onClick={() => window.history.back()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 500,
              color: 'var(--text-primary)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          
          <div 
            className="text-xl font-bold cursor-pointer"
            onClick={() => window.location.href = '/'}
          >
            <span style={{ color: 'var(--text-primary)' }}>GANESH</span>
            <span style={{ color: 'var(--primary)' }}> STUDIO</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '20px',
          color: 'var(--text-primary)'
        }}>
          Material Library
        </h1>
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '40px',
          color: 'var(--text-secondary)'
        }}>
          Explore our curated collection of premium materials
        </p>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap'
        }}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="safe-hover-btn"
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                border: activeCategory === category.id 
                  ? 'none' 
                  : '2px solid var(--border)',
                backgroundColor: activeCategory === category.id 
                  ? 'var(--primary)' 
                  : 'var(--surface)',
                color: activeCategory === category.id 
                  ? 'white' 
                  : 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Materials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}>
          {filteredMaterials.map(material => (
            <div
              key={material.id}
              onClick={() => setSelectedMaterial(material)}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={material.image}
                alt={material.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  {material.name}
                </h3>
                <p style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--primary)',
                  marginBottom: '8px'
                }}>
                  {material.price}
                </p>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Material Modal */}
      {selectedMaterial && (
        <div
          onClick={() => setSelectedMaterial(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            overflowY: 'auto'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--surface)',
              borderRadius: '16px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setSelectedMaterial(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={24} />
            </button>

            {/* CLICKABLE Image Gallery */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '8px',
              backgroundColor: 'var(--border)'
            }}>
              {selectedMaterial.gallery?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedMaterial.name} ${idx + 1}`}
                  onClick={() => openLightbox(idx)}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>

            {/* Click to Enlarge Instruction */}
            <div style={{
              textAlign: 'center',
              padding: '16px',
              backgroundColor: 'var(--background)',
              color: 'var(--text-secondary)',
              fontSize: '14px',
              fontStyle: 'italic'
            }}>
              💡 Click on any image above to enlarge and view gallery
            </div>

            {/* Content */}
            <div style={{ padding: '40px' }}>
              <h2 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: 'var(--text-primary)'
              }}>
                {selectedMaterial.name}
              </h2>

              <div style={{
                fontSize: '24px',
                fontWeight: 600,
                color: 'var(--primary)',
                marginBottom: '24px'
              }}>
                {selectedMaterial.price}
              </div>

              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                marginBottom: '32px',
                color: 'var(--text-secondary)'
              }}>
                {selectedMaterial.detailedDescription}
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ marginBottom: '16px', fontSize: '20px', fontWeight: 'bold' }}>Features</h3>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {selectedMaterial.features?.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: 'var(--primary)', fontSize: '20px' }}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  className="safe-hover-btn"
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  style={{
                    padding: '16px 32px',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  Get Quote - Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULL-SCREEN IMAGE CAROUSEL */}
      {lightboxIndex !== null && selectedMaterial?.gallery && (
        <div 
          onClick={closeLightbox}
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
            onClick={closeLightbox}
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

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{
              position: 'absolute',
              left: '20px',
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
              zIndex: 10
            }}
          >
            <ChevronLeft size={30} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{
              position: 'absolute',
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
              zIndex: 10
            }}
          >
            <ChevronRight size={30} />
          </button>

          {/* Main Image */}
          <img
            src={selectedMaterial.gallery[lightboxIndex]}
            alt={`${selectedMaterial.name} ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />

          {/* Image Counter */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '14px'
          }}>
            {lightboxIndex + 1} / {selectedMaterial.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default MaterialLibrary;