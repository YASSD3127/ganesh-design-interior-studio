import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VideoSection = ({ videoUrl, thumbnail, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = videoUrl ? getYouTubeId(videoUrl) : null;

  if (!videoUrl) {
    return (
      <div className="bg-gray-100 rounded-xl p-12 text-center">
        <div className="text-6xl mb-4">🎬</div>
        <p className="text-gray-600">Video coming soon for this project</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isPlaying ? (
        <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
          <div className="aspect-video rounded-xl overflow-hidden">
            <img
              src={thumbnail || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200'}
              alt={title}
              className="w-full h-full object-cover"
              style={{ transition: 'transform 0.5s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-orange-600 rounded-full p-6 shadow-2xl">
              <Play size={48} className="text-white fill-white ml-1" />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-white text-lg font-semibold">
              {title || 'Watch Project Video'}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute -top-12 right-0 bg-white rounded-full p-2 shadow-lg"
          >
            <X size={24} />
          </button>
          
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
            {youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Featured Videos with Carousel
export const FeaturedVideos = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const videos = [
    { id: 1, title: 'Modern 3BHK Apartment Walkthrough', thumbnail: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:30' },
    { id: 2, title: 'Luxury Villa Interior Design', thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '3:45' },
    { id: 3, title: 'Office Space Transformation', thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:15' },
    { id: 4, title: 'Kitchen Renovation Time-lapse', thumbnail: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '1:45' },
    { id: 5, title: 'Bedroom Makeover', thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:00' },
    { id: 6, title: 'Restaurant Interior Design', thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '3:20' },
    { id: 7, title: 'Retail Store Design', thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '2:50' },
    { id: 8, title: '3D Visualization Showcase', thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '4:10' },
    { id: 9, title: 'Complete Home Tour', thumbnail: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', duration: '5:30' }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const videosPerPage = 3;
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const startIndex = currentPage * videosPerPage;
  const displayedVideos = videos.slice(startIndex, startIndex + videosPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          See Our Work in Action
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Virtual walkthroughs and project showcases
        </p>

        {selectedVideo ? (
          <div className="max-w-5xl mx-auto mb-12">
            <VideoSection
              videoUrl={selectedVideo.videoUrl}
              thumbnail={selectedVideo.thumbnail}
              title={selectedVideo.title}
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="mt-4 text-orange-600 font-semibold"
              style={{ transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#c2410c'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ea580c'}
            >
              ← Back to all videos
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {displayedVideos.map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      style={{ transition: 'transform 0.5s ease' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="bg-orange-600 rounded-full p-4">
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

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <button
                onClick={prevPage}
                className="bg-gray-200 p-3 rounded-full"
                style={{ transition: 'background-color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1d5db'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentPage === index ? 'bg-orange-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                className="bg-gray-200 p-3 rounded-full"
                style={{ transition: 'background-color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1d5db'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* More Videos Button */}
            <div className="text-center">
              <button
                onClick={() => navigate('/all-videos')}
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
                View All {videos.length} Videos →
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default VideoSection;