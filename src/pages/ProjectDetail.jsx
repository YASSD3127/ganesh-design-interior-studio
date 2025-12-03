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
            className="text-orange-600 font-semibold"
            style={{ transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#c2410c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ea580c'}
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 font-medium"
            style={{ transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="text-xl font-bold">
            <span className="text-gray-900">GANESH</span>
            <span className="text-orange-600"> STUDIO</span>
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
              <div className="inline-block bg-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 bg-gray-50 p-8 rounded-xl">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Location</h3>
            <p className="text-lg font-semibold">{project.location}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Year</h3>
            <p className="text-lg font-semibold">{project.year}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Size</h3>
            <p className="text-lg font-semibold">{project.size}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Duration</h3>
            <p className="text-lg font-semibold">{project.duration}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Style</h3>
            <p className="text-lg font-semibold">{project.style}</p>
          </div>
        </div>

        {/* Features - 3 COLUMNS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg">
                <span className="text-orange-600 text-xl mt-0.5 flex-shrink-0">✓</span>
                <span className="text-gray-700">{feature}</span>
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
                  style={{ transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-4xl">🔍</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <div className="bg-gray-900 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Interested in a Similar Project?</h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expert interior design services
          </p>
          <button 
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
            style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            }}
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
            style={{ transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d1d5db'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-6xl z-10 w-12 h-12 flex items-center justify-center"
            style={{ transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d1d5db'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
          >
            ‹
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-6xl z-10 w-12 h-12 flex items-center justify-center"
            style={{ transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d1d5db'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
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