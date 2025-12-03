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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Before & After Transformations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the dramatic difference our interior design makes. Real projects, real results.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                setActiveProjectIndex(0);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeCategory === index
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Main Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Before Image */}
          <div className="relative group">
            <div className="absolute top-4 left-4 bg-gray-900 text-white px-4 py-2 rounded-full font-semibold z-10">
              BEFORE
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={current.before}
                alt="Before transformation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* After Image */}
          <div className="relative group">
            <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full font-semibold z-10">
              AFTER
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={current.after}
                alt="After transformation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation Arrows & Dots */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prevProject}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {currentCategory.projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProjectIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeProjectIndex === index ? 'bg-orange-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Project Details */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-4">{current.title}</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Location</div>
              <div className="font-semibold">{current.location}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Duration</div>
              <div className="font-semibold">{current.duration}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Budget</div>
              <div className="font-semibold">{current.budget}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Result</div>
              <div className="font-semibold text-orange-600">{current.savings}</div>
            </div>
          </div>

          {/* Improvements */}
          <div>
            <h4 className="font-bold text-lg mb-3">Key Improvements:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {current.improvements.map((improvement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-orange-600 text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">{improvement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-6 text-gray-600">
          Project {activeProjectIndex + 1} of {totalProjects} in {currentCategory.title}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;