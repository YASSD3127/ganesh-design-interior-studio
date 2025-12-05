import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import VideoSection from '../components/VideoSection';
import { useEffect } from 'react';

const AllVideos = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allVideos = {
    residential: [
      { id: 1, title: 'Modern 3BHK Apartment Walkthrough', thumbnail: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:30', category: 'residential' },
      { id: 2, title: 'Luxury Villa Interior Design', thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '3:45', category: 'residential' },
      { id: 5, title: 'Bedroom Makeover', thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:00', category: 'residential' },
      { id: 9, title: 'Complete Home Tour', thumbnail: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '5:30', category: 'residential' },
    ],
    commercial: [
      { id: 3, title: 'Office Space Transformation', thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:15', category: 'commercial' },
      { id: 6, title: 'Restaurant Interior Design', thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '3:20', category: 'commercial' },
      { id: 7, title: 'Retail Store Design', thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:50', category: 'commercial' },
    ],
    '3d-renders': [
      { id: 4, title: 'Kitchen Renovation Time-lapse', thumbnail: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '1:45', category: '3d-renders' },
      { id: 8, title: '3D Visualization Showcase', thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '4:10', category: '3d-renders' },
    ]
  };

  const getAllVideos = () => {
    return [...allVideos.residential, ...allVideos.commercial, ...allVideos['3d-renders']];
  };

  const filteredVideos = activeFilter === 'all' ? getAllVideos() : allVideos[activeFilter];

  const filters = [
    { id: 'all', label: 'All Videos' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: '3d-renders', label: '3D Designs' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16"
    style={{ backgroundColor: 'var(--background)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 shadow-sm"
      style={{ backgroundColor: 'var(--surface)' }}>
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
        {selectedVideo ? (
          <div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="mb-6 font-semibold"
              style={{ color: 'var(--primary)' }}
            >
              ← Back to all videos
            </button>
            <VideoSection
              videoUrl={selectedVideo.videoUrl}
              thumbnail={selectedVideo.thumbnail}
              title={selectedVideo.title}
            />
          </div>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Video Gallery</h1>
            <p className="text-center mb-12"
            style={{ color: 'var(--text-secondary)' }}>
              Explore {getAllVideos().length}+ project walkthroughs and design showcases
            </p>

            {/* Filter Tabs */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold ${
                    activeFilter === filter.id
                      ? 'text-white shadow-lg'
                      : ''
                  }`}
                  style={{
                    backgroundColor: activeFilter === filter.id ? 'var(--primary)' : 'var(--surface)',
                    color: activeFilter === filter.id ? 'white' : 'var(--text-primary)',
                    border: activeFilter === filter.id ? 'none' : '2px solid var(--border)'
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="rounded-full p-4"
                      style={{ backgroundColor: 'var(--primary)' }}>
                        <Play size={32} className="text-white fill-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllVideos;