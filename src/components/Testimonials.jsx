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
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Don't just take our word for it - hear from our satisfied clients
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {displayedTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-8 shadow-lg h-full flex flex-col"
              style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-600 text-xl">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic flex-1">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-sm text-orange-600 mt-1">{testimonial.project}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevPage}
            className="bg-white p-3 rounded-full shadow-lg"
            style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-orange-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="bg-white p-3 rounded-full shadow-lg"
            style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;