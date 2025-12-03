import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: '🎯',
      title: 'Budget-Flexible Solutions',
      description: 'Quality designs that match your budget - from smart renovations to luxury builds'
    },
    {
      id: 2,
      icon: '📱',
      title: '3D Visualization',
      description: 'See your space before we build it with detailed 3D renders and walkthroughs'
    },
    {
      id: 3,
      icon: '🌍',
      title: 'Remote Consultations',
      description: 'Serving Gujarat and beyond with online design consultations and 3D planning'
    },
    {
      id: 4,
      icon: '⏱️',
      title: 'On-Time Delivery',
      description: 'Commitment to timelines with regular project updates and quality checks'
    },
    {
      id: 5,
      icon: '🔧',
      title: 'Complete Execution',
      description: 'From design to handover - we manage everything so you don\'t have to'
    },
    {
      id: 6,
      icon: '🎨',
      title: 'Custom Solutions',
      description: 'Personalized designs tailored to your style, needs, and lifestyle'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why Choose Ganesh Studio</h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          We combine expertise, innovation, and attention to detail to create spaces that truly reflect your vision
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="group bg-gray-50 rounded-xl p-8 hover:bg-orange-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 group-hover:text-white/90 transition-colors leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Join 200+ satisfied clients who trusted us with their interior design projects
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              View Our Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;