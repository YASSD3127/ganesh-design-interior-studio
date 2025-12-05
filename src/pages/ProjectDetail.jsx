import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { projectDetailsData } from '../data/projectDetails';
import VideoSection from '../components/VideoSection';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const project = projectDetailsData[id];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="font-semibold"
            style={{ color: 'var(--primary)' }}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 shadow-sm"
      style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 font-medium"
            style={{ color: 'var(--text-primary)' }}
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          
          <div 
            className="text-xl font-bold cursor-pointer"
            onClick={() => window.location.href = '/'}
          >
            <span style={{ color: 'var(--text-primary)' }}>GANESH</span>
            <span style={{ color: 'var(--primary)' }}> STUDIO</span>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="pt-28">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={project.images[0].url}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'var(--primary)' }}>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-white/90 max-w-3xl">{project.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 p-8 rounded-xl"
        style={{ backgroundColor: 'var(--surface)' }}>
          <div>
            <h3 className="text-sm font-semibold uppercase mb-2"
            style={{ color: 'var(--text-secondary)' }}>Location</h3>
            <p className="text-lg font-semibold">{project.location}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase mb-2"
            style={{ color: 'var(--text-secondary)' }}>Year</h3>
            <p className="text-lg font-semibold">{project.year}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase mb-2"
            style={{ color: 'var(--text-secondary)' }}>Size</h3>
            <p className="text-lg font-semibold">{project.size}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase mb-2"
            style={{ color: 'var(--text-secondary)' }}>Duration</h3>
            <p className="text-lg font-semibold">{project.duration}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase mb-2"
            style={{ color: 'var(--text-secondary)' }}>Style</h3>
            <p className="text-lg font-semibold">{project.style}</p>
          </div>
        </div>

        {/* Features - 3 COLUMNS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 p-4 rounded-lg"
              style={{ backgroundColor: 'var(--surface)' }}>
                <span className="text-xl mt-0.5 flex-shrink-0"
                style={{ color: 'var(--primary)' }}>✓</span>
                <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 text-4xl">🔍</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Walkthrough */}
        {project.videoUrl && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Project Walkthrough</h2>
            <VideoSection 
              videoUrl={project.videoUrl}
              thumbnail={project.images[0].url}
              title={`${project.title} - Virtual Tour`}
            />
          </div>
        )}

        {/* CTA Section */}
        <div className="rounded-2xl p-12 text-center text-white"
        style={{ backgroundColor: 'var(--charcoal-wood)' }}>
          <h3 className="text-3xl font-bold mb-4">Interested in a Similar Project?</h3>
          <p className="mb-8 text-lg max-w-2xl mx-auto opacity-90">
            Let's discuss how we can bring your vision to life with our expert interior design services
          </p>
          <button 
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="text-white px-8 py-4 rounded-full font-semibold"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white z-10"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-6xl z-10 w-12 h-12 flex items-center justify-center"
          >
            ‹
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-6xl z-10 w-12 h-12 flex items-center justify-center"
          >
            ›
          </button>

          <div className="max-w-6xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[lightboxIndex].url}
              alt={project.images[lightboxIndex].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center">
              <p className="text-white text-lg mb-2">
                {project.images[lightboxIndex].caption}
              </p>
              <p className="text-gray-400 text-sm">
                {lightboxIndex + 1} / {project.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;