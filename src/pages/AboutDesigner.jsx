import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Users, Heart, Leaf } from 'lucide-react';
import { useEffect } from 'react';

const AboutDesigner = () => {
  const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
  const values = [
    {
      icon: <Users size={32} />,
      title: 'Client-Centered',
      description: 'Your vision and needs drive every design decision we make'
    },
    {
      icon: <Heart size={32} />,
      title: 'Collaborative',
      description: 'We work together throughout the entire design journey'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Materials',
      description: 'Thoughtful selection of materials that stand the test of time'
    },
    {
      icon: <Leaf size={32} />,
      title: 'Sustainable Design',
      description: 'Eco-friendly options that are beautiful and responsible'
    }
  ];

  const approach = [
    { step: 1, title: 'Discovery Call', description: 'Understanding your lifestyle, preferences, and project goals' },
    { step: 2, title: 'Site Visit', description: 'Measuring the space and understanding its unique character' },
    { step: 3, title: 'Concept Development', description: 'Creating mood boards and 3D visualizations' },
    { step: 4, title: 'Design Refinement', description: 'Collaborating on materials, colors, and layouts' },
    { step: 5, title: 'Execution', description: 'Managing construction with quality oversight' },
    { step: 6, title: 'Final Reveal', description: 'Walking you through your transformed space' }
  ];

  const awards = [
    'Best Interior Design Studio 2023 - Gujarat',
    'Excellence in Residential Design Award',
    'Certified Interior Designer (CID)',
    'Member of Indian Institute of Interior Designers',
    'Featured in Home & Design Magazine'
  ];

  return (
    <div className="min-h-screen pt-32 pb-16" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 shadow-sm" style={{ backgroundColor: 'var(--surface)' }}>
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
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Bhargav Ladani</h1>
          <p className="text-2xl" style={{ color: 'var(--text-secondary)' }}>
            Creating spaces that feel lived-in, warm, and functional
          </p>
        </div>

        {/* Designer Bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Headshot */}
          <div className="card rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
              alt="Bhargav Ladani"
              className="w-full h-full object-cover aspect-[3/4]"
            />
          </div>

          {/* Bio Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">About Bhargav</h2>
            <div className="space-y-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
              <p>
                With over 10 years of experience in interior design, I've had the privilege of transforming more than 200 spaces across Gujarat and beyond. My journey began with a deep fascination for how spaces can influence emotions and daily life.
              </p>
              <p>
                I hold a degree in Interior Design from [University Name] and have trained under renowned designers in both traditional and contemporary styles. But my real education comes from listening to clients and understanding their unique stories.
              </p>
              <p>
                My design philosophy is simple: <strong style={{ color: 'var(--primary)' }}>Every space should tell your story</strong>. Whether it's a cozy apartment or a sprawling villa, I believe in creating interiors that are not just beautiful, but deeply personal and functional.
              </p>
              <p>
                I don't chase trends—I create timeless designs that you'll love for years to come. My approach combines thoughtful material selection, sustainable practices, and a collaborative process that puts you at the center of every decision.
              </p>
            </div>
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="mb-20 p-12 rounded-2xl" style={{ backgroundColor: 'var(--surface)' }}>
          <h2 className="text-3xl font-bold mb-6 text-center">Design Philosophy</h2>
          <p className="text-xl text-center max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            "I create spaces that feel lived-in, warm, and functional. Design should enhance your daily life, not complicate it. Every material, every color, every piece of furniture is chosen with intention—to serve both beauty and purpose."
          </p>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">What I Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 rounded-xl text-center" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="mb-4 flex justify-center" style={{ color: 'var(--primary)' }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((item) => (
              <div key={item.step} className="card p-8 rounded-xl" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white font-bold" style={{ backgroundColor: 'var(--primary)' }}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20 p-12 rounded-2xl" style={{ backgroundColor: 'var(--surface)' }}>
          <h2 className="text-3xl font-bold mb-8 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start gap-3">
                <Award size={24} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>{award}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-2xl" style={{ backgroundColor: 'var(--charcoal-wood)', color: 'var(--chalk-white)' }}>
          <h3 className="text-3xl font-bold mb-6">Let's Create Something Beautiful Together</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ready to start your design journey? Schedule a free consultation and let's discuss how we can transform your space.
          </p>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-8 py-4 rounded-full font-semibold"
            style={{ backgroundColor: 'var(--primary)', color: 'white' }}
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutDesigner;