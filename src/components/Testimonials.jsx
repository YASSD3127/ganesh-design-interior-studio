import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { id: 1, name: 'Rajesh Patel', location: 'Ahmedabad', text: 'Exceptional work! The 3D visualization helped us see exactly how our home would look. The execution was flawless and on time. Highly recommend Ganesh Studio for anyone looking for quality interior design.', rating: 5, project: '3BHK Apartment' },
    { id: 2, name: 'Priya Shah', location: 'Surat', text: 'Professional team with great attention to detail. They transformed our office space beyond our expectations. The design is both functional and beautiful. Worth every penny!', rating: 5, project: 'Corporate Office' },
    { id: 3, name: 'Amit Desai', location: 'Vadodara', text: 'From design to delivery, everything was smooth. Bhargav and his team were very responsive and made sure every detail was perfect. Highly recommend for anyone looking for quality interior work.', rating: 5, project: 'Villa Renovation' },
    { id: 4, name: 'Neha Kapoor', location: 'Rajkot', text: 'Amazing transformation of our home! The 3D designs made decision-making so easy. The team was punctual and the quality of work exceeded our expectations.', rating: 5, project: '2BHK Apartment' },
    { id: 5, name: 'Karan Mehta', location: 'Ahmedabad', text: 'Best decision we made was choosing Ganesh Studio. Their creativity and professionalism are unmatched. Our retail store looks stunning!', rating: 5, project: 'Retail Store' },
    { id: 6, name: 'Divya Joshi', location: 'Surat', text: 'The team understood our vision perfectly and brought it to life. Budget-friendly options without compromising on quality. Highly satisfied!', rating: 5, project: 'Home Makeover' },
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const startIndex = currentIndex * testimonialsPerPage;
  const displayedTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4"
        style={{ color: 'var(--text-primary)' }}>What Our Clients Say</h2>
        <p className="text-center mb-16 text-lg"
        style={{ color: 'var(--text-secondary)' }}>
          Don't just take our word for it - hear from our satisfied clients
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {displayedTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="rounded-xl p-8 shadow-lg h-full flex flex-col"
              style={{ backgroundColor: 'var(--background)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl" style={{ color: 'var(--primary)' }}>★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="mb-6 leading-relaxed italic flex-1"
              style={{ color: 'var(--text-secondary)' }}>
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                <div className="font-bold" style={{ color: 'var(--text-primary)' }}>{testimonial.name}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{testimonial.location}</div>
                <div className="text-sm mt-1" style={{ color: 'var(--primary)' }}>{testimonial.project}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevPage}
            className="p-3 rounded-full shadow-lg"
            style={{ backgroundColor: 'var(--background)' }}
          >
            <ChevronLeft size={24} />
          </button>

          <div style={{ display: 'flex', gap: '8px' }}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '9999px',
                  backgroundColor: currentIndex === index ? 'var(--primary)' : 'var(--border)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="p-3 rounded-full shadow-lg"
            style={{ backgroundColor: 'var(--background)' }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;