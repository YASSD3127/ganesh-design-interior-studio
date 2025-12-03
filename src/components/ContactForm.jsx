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
    <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Let's discuss your project and bring your vision to life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready to transform your space? Reach out to us for a free consultation. We serve clients across Gujarat and offer remote design services.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <div className="text-gray-300">+91 XXXXX XXXXX</div>
                  <div className="text-sm text-gray-400 mt-1">Mon-Sat, 9:00 AM - 7:00 PM</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-gray-300">info@ganeshstudio.com</div>
                  <div className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Location</div>
                  <div className="text-gray-300">Gujarat, India</div>
                  <div className="text-sm text-gray-400 mt-1">Serving across Gujarat & remote consultations</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="font-semibold mb-4">Follow Us</div>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-3 rounded-lg transition-colors">
                  Instagram
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-3 rounded-lg transition-colors">
                  Facebook
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-3 rounded-lg transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-gray-800 rounded-xl p-8">
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
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg focus:border-orange-600 focus:outline-none transition-colors text-white"
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
                      className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg focus:border-orange-600 focus:outline-none transition-colors text-white"
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
                      className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg focus:border-orange-600 focus:outline-none transition-colors text-white"
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
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg focus:border-orange-600 focus:outline-none transition-colors text-white"
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
                      className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg focus:border-orange-600 focus:outline-none transition-colors text-white"
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
                      className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg focus:border-orange-600 focus:outline-none transition-colors text-white"
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
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg focus:border-orange-600 focus:outline-none transition-colors resize-none text-white"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-700 hover:shadow-2xl hover:-translate-y-1 transition-all"
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