import React from 'react';

const DesignProcess = () => {
  const steps = [
    { 
      step: 1, 
      title: 'Free Consultation', 
      description: 'We understand your vision, requirements, and budget',
      icon: '💬'
    },
    { 
      step: 2, 
      title: '3D Design & Planning', 
      description: 'Detailed 3D renders and layouts',
      icon: '📐'
    },
    { 
      step: 3, 
      title: 'Material Selection', 
      description: 'Choose from curated materials and finishes',
      icon: '🎨'
    },
    { 
      step: 4, 
      title: 'Execution & Build', 
      description: 'Quality construction with regular updates',
      icon: '🔨'
    },
    { 
      step: 5, 
      title: 'Final Handover', 
      description: 'Your dream space ready to move in',
      icon: '🏠'
    }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Design Process</h2>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          From initial concept to final execution, we follow a proven process to bring your vision to life
        </p>
        
        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connecting Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-orange-200 -z-10"></div>
                )}
                
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100">
                  {/* Icon */}
                  <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg">
                    {item.icon}
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-center mb-3">
                    <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Step {item.step}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-center mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to start your interior design journey?
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;