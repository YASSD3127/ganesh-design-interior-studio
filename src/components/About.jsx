import React from 'react';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  return (
    <section id="about" className="py-24 px-6"
    style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">About Ganesh Studio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image/Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800" 
                alt="Bhargav Ladani - Interior Designer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg -z-10"
            style={{ backgroundColor: 'var(--primary)' }}></div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Creating Beautiful Spaces Since Years
            </h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Ganesh Studio, we specialize in transforming ordinary spaces into extraordinary experiences. Led by Bhargav Ladani, our team brings expertise in both residential and commercial interior design, backed by years of experience and a passion for creating functional yet beautiful environments.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              What sets us apart is our comprehensive approach – from initial 3D visualization to complete execution and build. We work with clients across Gujarat and beyond, offering flexible solutions that match any budget without compromising on quality.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
                  <AnimatedCounter end={200} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold  mb-2"
                style={{ color: 'var(--primary)' }}>
                  <AnimatedCounter end={150} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2"
                style={{ color: 'var(--primary)' }}>
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
            
            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-1"
                style={{ color: 'var(--primary)' }}>✓</span>
                <span className="text-gray-700">Complete design to execution services</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-1"
                style={{ color: 'var(--primary)' }}>✓</span>
                <span className="text-gray-700">3D visualization for all projects</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-1"
                style={{ color: 'var(--primary)' }}>✓</span>
                <span className="text-gray-700">Budget-flexible solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-1"
                style={{ color: 'var(--primary)' }}>✓</span>
                <span className="text-gray-700">Remote consultations available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;