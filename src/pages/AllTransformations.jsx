import { useEffect } from 'react';
import React, { useState } from 'react';
import { Star, ArrowLeft } from 'lucide-react';

const AllTransformations = () => {
  const [activeFilter, setActiveFilter] = useState('all');
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const transformations = [
    {
      id: 1,
      category: 'living-room',
      title: 'Modern Minimalist Living Room',
      before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
      problem: 'The space felt cramped and outdated with dark furniture and poor lighting. The client wanted a fresh, airy atmosphere for entertaining guests.',
      solution: 'We opened up the space by removing a non-structural wall, installed recessed lighting, and chose a neutral color palette with warm wood tones. Custom built-in storage maximized space efficiency.',
      results: '40% more usable space, natural light increased by 60%, and the client reports hosting gatherings twice as often.',
      clientName: 'Priya Sharma',
      testimonial: 'Bhargav transformed our cramped living room into an elegant space we absolutely love. The attention to detail and quality of materials exceeded our expectations.',
      rating: 5,
      location: 'Bangalore',
      duration: '6 weeks',
      budget: '₹4.5L'
    },
    {
      id: 2,
      category: 'kitchen',
      title: 'Contemporary Kitchen Renovation',
      before: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
      after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      problem: 'The old kitchen had insufficient counter space, poor ventilation, and outdated appliances. The layout made cooking for the family difficult.',
      solution: 'Complete redesign with an L-shaped layout, premium granite countertops, modular cabinets with soft-close mechanisms, and a new chimney system. Added a breakfast counter for casual dining.',
      results: 'Cooking efficiency improved by 50%, storage capacity doubled, and the kitchen became the heart of the home.',
      clientName: 'Rajesh Kumar',
      testimonial: 'The kitchen renovation was seamless. Bhargav handled everything from design to execution. Our family now enjoys cooking together!',
      rating: 5,
      location: 'Mumbai',
      duration: '8 weeks',
      budget: '₹6.8L'
    },
    {
      id: 3,
      category: 'bedroom',
      title: 'Serene Master Bedroom Suite',
      before: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
      after: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
      problem: 'The master bedroom lacked personality and storage. The couple wanted a relaxing retreat with a spa-like en-suite bathroom.',
      solution: 'Created a calming palette with soft grays and blues, added a custom walk-in wardrobe, upgraded the bathroom with Italian marble, and installed ambient lighting throughout.',
      results: 'The clients report better sleep quality, organized storage for all belongings, and a luxurious bathroom experience.',
      clientName: 'Anjali & Vikram Reddy',
      testimonial: 'Our bedroom is now a true sanctuary. The attention to lighting and materials created the perfect ambiance. Worth every rupee!',
      rating: 5,
      location: 'Hyderabad',
      duration: '7 weeks',
      budget: '₹5.2L'
    },
    {
      id: 4,
      category: 'living-room',
      title: 'Traditional Meets Modern Living Space',
      before: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
      after: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800',
      problem: 'The client wanted to preserve traditional Indian aesthetics while incorporating modern functionality and comfort.',
      solution: 'Blended traditional carved wooden elements with contemporary furniture, used rich fabrics with modern silhouettes, and integrated smart home technology discreetly.',
      results: 'A perfect fusion that honors heritage while meeting modern lifestyle needs. Featured in Home & Design magazine.',
      clientName: 'Meera Iyer',
      testimonial: 'Bhargav understood our vision perfectly. The space honors our culture while being incredibly functional for our modern family.',
      rating: 5,
      location: 'Chennai',
      duration: '9 weeks',
      budget: '₹7.5L'
    },
    {
      id: 5,
      category: 'kitchen',
      title: 'Compact Modular Kitchen',
      before: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800',
      after: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800',
      problem: 'A small apartment kitchen with limited space and no proper organization. The client needed maximum storage in minimal area.',
      solution: 'Designed a smart modular system with pull-out pantries, corner carousel units, and vertical storage. Used light colors to make the space feel larger.',
      results: 'Storage capacity tripled, workspace doubled, and the kitchen feels much more spacious despite the same footprint.',
      clientName: 'Arjun Malhotra',
      testimonial: 'I never thought my tiny kitchen could be so functional. Every inch is optimized. Brilliant space planning!',
      rating: 5,
      location: 'Pune',
      duration: '5 weeks',
      budget: '₹3.8L'
    },
    {
      id: 6,
      category: 'bedroom',
      title: "Kids' Room Transformation",
      before: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      after: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
      problem: 'Two siblings sharing one room led to constant clutter and fights. Parents wanted a fun, organized space that both kids would love.',
      solution: 'Created separate zones with loft beds, built-in study areas for each child, colorful storage solutions, and a small play area. Used durable, easy-to-clean materials.',
      results: 'Kids now have their own space while sharing the room harmoniously. Homework completion improved, and tidying up became easier.',
      clientName: 'Deepa & Suresh Patel',
      testimonial: 'The kids absolutely love their new room! No more fights, and everything has its place. Bhargav made it fun and functional.',
      rating: 5,
      location: 'Ahmedabad',
      duration: '4 weeks',
      budget: '₹2.9L'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: transformations.length },
    { id: 'living-room', label: 'Living Rooms', count: transformations.filter(t => t.category === 'living-room').length },
    { id: 'kitchen', label: 'Kitchens', count: transformations.filter(t => t.category === 'kitchen').length },
    { id: 'bedroom', label: 'Bedrooms', count: transformations.filter(t => t.category === 'bedroom').length }
  ];

  const filteredTransformations = activeFilter === 'all' 
    ? transformations 
    : transformations.filter(t => t.category === activeFilter);

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: 'var(--background)',
      paddingTop: '0px'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        padding: '60px 20px',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <button
          onClick={() => window.history.back()}
          style={{
            position: 'absolute',
            left: '20px',
            top: '20px',
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)'
          }}
        >
          <ArrowLeft size={20} color="white" />
        </button>
        
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: '700',
          marginBottom: '20px',
          letterSpacing: '-0.02em'
        }}>
          Complete Transformations
        </h1>
        <p style={{
          fontSize: '1.2rem',
          opacity: 0.95,
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Explore detailed before & after stories of spaces we've transformed
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                border: activeFilter === cat.id 
                  ? '2px solid var(--primary)' 
                  : '2px solid var(--border)',
                backgroundColor: activeFilter === cat.id 
                  ? 'var(--primary)' 
                  : 'var(--surface)',
                color: activeFilter === cat.id 
                  ? 'white' 
                  : 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Transformations Grid */}
        <div style={{
          display: 'grid',
          gap: '40px'
        }}>
          {filteredTransformations.map(project => (
            <div
              key={project.id}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Before & After Images */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2px',
                backgroundColor: 'var(--border)'
              }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={project.before}
                    alt="Before"
                    style={{
                      width: '100%',
                      height: '350px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    BEFORE
                  </div>
                </div>
                <div style={{ position: 'relative' }}>
                  <img
                    src={project.after}
                    alt="After"
                    style={{
                      width: '100%',
                      height: '350px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    AFTER
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div style={{ padding: '30px' }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                  fontWeight: '700'
                }}>
                  {project.title}
                </h2>

                {/* Quick Info */}
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  flexWrap: 'wrap',
                  marginBottom: '25px',
                  padding: '15px',
                  backgroundColor: 'var(--background)',
                  borderRadius: '8px'
                }}>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Location</span>
                    <p style={{ margin: '4px 0 0 0', fontWeight: '600', color: 'var(--text-primary)' }}>{project.location}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Duration</span>
                    <p style={{ margin: '4px 0 0 0', fontWeight: '600', color: 'var(--text-primary)' }}>{project.duration}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Investment</span>
                    <p style={{ margin: '4px 0 0 0', fontWeight: '600', color: 'var(--text-primary)' }}>{project.budget}</p>
                  </div>
                </div>

                {/* Problem */}
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    color: 'var(--primary)',
                    marginBottom: '10px',
                    fontWeight: '600'
                  }}>
                    The Challenge
                  </h3>
                  <p style={{
                    color: 'var(--text-primary)',
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    color: 'var(--primary)',
                    marginBottom: '10px',
                    fontWeight: '600'
                  }}>
                    Our Solution
                  </h3>
                  <p style={{
                    color: 'var(--text-primary)',
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    {project.solution}
                  </p>
                </div>

                {/* Results */}
                <div style={{ marginBottom: '25px' }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    color: 'var(--primary)',
                    marginBottom: '10px',
                    fontWeight: '600'
                  }}>
                    The Results
                  </h3>
                  <p style={{
                    color: 'var(--text-primary)',
                    lineHeight: '1.7',
                    fontSize: '1rem'
                  }}>
                    {project.results}
                  </p>
                </div>

                {/* Testimonial */}
                <div style={{
                  backgroundColor: 'var(--background)',
                  padding: '20px',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--primary)'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '4px',
                    marginBottom: '10px'
                  }}>
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--primary)" color="var(--primary)" />
                    ))}
                  </div>
                  <p style={{
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    lineHeight: '1.7',
                    marginBottom: '10px'
                  }}>
                    "{project.testimonial}"
                  </p>
                  <p style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)'
                  }}>
                    — {project.clientName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '60px',
          padding: '50px 30px',
          backgroundColor: 'var(--surface)',
          borderRadius: '16px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: 'var(--text-primary)',
            marginBottom: '15px'
          }}>
            Ready for Your Own Transformation?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px auto'
          }}>
            Let's discuss how we can transform your space into something extraordinary
          </p>
          <button
            style={{
              padding: '15px 40px',
              fontSize: '1.1rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTransformations;