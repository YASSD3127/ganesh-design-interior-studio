import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    propertyType: '',
    budgetRange: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '',
      projectType: '',
      propertyType: '',
      budgetRange: '',
      message: '' 
    });
  };

  return (
    <section id="contact" className="py-24 px-6 text-white"
    style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center mb-12 text-lg opacity-90">
          Let's discuss your project and bring your vision to life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="mb-8 leading-relaxed opacity-90">
              Ready to transform your space? Reach out to us for a free consultation. We serve clients across Gujarat and offer remote design services.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg"
                style={{ backgroundColor: 'var(--primary)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <div className="opacity-90">+91 XXXXX XXXXX</div>
                  <div className="text-sm opacity-75 mt-1">Mon-Sat, 9:00 AM - 7:00 PM</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg"
                style={{ backgroundColor: 'var(--primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="opacity-90">info@ganeshstudio.com</div>
                  <div className="text-sm opacity-75 mt-1">We'll respond within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg"
                style={{ backgroundColor: 'var(--primary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Location</div>
                  <div className="opacity-90">Gujarat, India</div>
                  <div className="text-sm opacity-75 mt-1">Serving across Gujarat & remote consultations</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <div className="font-semibold mb-4">Follow Us</div>
              <div className="flex gap-4">
                <a href="#" className="safe-hover-btn p-3 rounded-lg flex items-center gap-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a href="#" className="safe-hover-btn p-3 rounded-lg flex items-center gap-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a href="#" className="safe-hover-btn p-3 rounded-lg flex items-center gap-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="rounded-xl p-8" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg text-white"
                    style={{ 
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      borderColor: 'rgba(255,255,255,0.2)'
                    }}
                    placeholder="Your full name"
                  />
                </div>
                
                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg text-white"
                      style={{ 
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderColor: 'rgba(255,255,255,0.2)'
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 rounded-lg text-white"
                      style={{ 
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderColor: 'rgba(255,255,255,0.2)'
                      }}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                
                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block mb-2 font-medium">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 rounded-lg text-white"
                    style={{ 
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      borderColor: 'rgba(255,255,255,0.2)'
                    }}
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Just Consultation</option>
                  </select>
                </div>
                
                {/* Property Type and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyType" className="block mb-2 font-medium">Property Type</label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-lg text-white"
                      style={{ 
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderColor: 'rgba(255,255,255,0.2)'
                      }}
                    >
                      <option value="">Select type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="office">Office</option>
                      <option value="retail">Retail/Shop</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budgetRange" className="block mb-2 font-medium">Budget Range</label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 rounded-lg text-white"
                      style={{ 
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderColor: 'rgba(255,255,255,0.2)'
                      }}
                    >
                      <option value="">Select budget</option>
                      <option value="budget">Budget-Friendly</option>
                      <option value="mid">Mid-Range</option>
                      <option value="premium">Premium</option>
                      <option value="discuss">Prefer to Discuss</option>
                    </select>
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border-2 rounded-lg resize-none text-white"
                    style={{ 
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      borderColor: 'rgba(255,255,255,0.2)'
                    }}
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full text-white py-4 rounded-lg font-semibold"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;