import React from 'react';

const DesignProcess = () => {
  const steps = [
    { 
      step: 1, 
      title: 'Free Consultation', 
      description: 'We understand your vision and requirements',
      icon: '💬'
    },
    { 
      step: 2, 
      title: '3D Design & Planning', 
      description: 'Detailed renders and layouts',
      icon: '📐'
    },
    { 
      step: 3, 
      title: 'Material Selection', 
      description: 'Choose from curated materials',
      icon: '🎨'
    },
    { 
      step: 4, 
      title: 'Execution & Build', 
      description: 'Quality construction with updates',
      icon: '🔨'
    },
    { 
      step: 5, 
      title: 'Final Handover', 
      description: 'Your dream space ready to move in',
      icon: '🏡'
    }
  ];

  return (
    <section id="process" className="py-24 px-6"
    style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4"
        style={{ color: 'var(--text-primary)' }}>Our Design Process</h2>
        <p className="text-center mb-16 text-lg max-w-2xl mx-auto"
        style={{ color: 'var(--text-secondary)' }}>
          From initial concept to final execution, we follow a proven process to bring your vision to life
        </p>
        
        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connecting Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 -z-10"
                  style={{ backgroundColor: 'var(--border)' }}></div>
                )}
                
                {/* Step Card */}
                <div className="rounded-xl p-8 text-center safe-hover-card shadow-lg"
                style={{ 
                  backgroundColor: 'var(--surface)',
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--border)'
                }}>
                  {/* Icon */}
                  <div className="text-4xl mb-4">
                    {item.icon}
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-center mb-4">
                    <span className="text-white px-3 py-1 rounded-full text-sm font-bold"
                    style={{ backgroundColor: 'var(--primary)' }}>
                      Step {item.step}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-center mb-3"
                  style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-center leading-relaxed flex-1"
                  style={{ color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-6"
          style={{ color: 'var(--text-secondary)' }}>
            Ready to start your interior design journey?
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="safe-hover-btn text-white px-8 py-4 rounded-full font-semibold"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;