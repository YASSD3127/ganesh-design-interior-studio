import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">GANESH</span>
              <span className="text-orange-600"> STUDIO</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming spaces with expert interior design and execution services across Gujarat.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-600 transition-colors">Home</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-orange-600 transition-colors">Our Work</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-600 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-600 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Interiors</li>
              <li>Commercial Spaces</li>
              <li>3D Visualization</li>
              <li>Complete Execution</li>
              <li>Custom Furniture</li>
              <li>Renovation</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +91 XXXXX XXXXX</li>
              <li>✉️ info@ganeshstudio.com</li>
              <li>📍 Gujarat, India</li>
            </ul>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="hover:text-orange-600 transition-colors">Instagram</a>
                <a href="#" className="hover:text-orange-600 transition-colors">Facebook</a>
                <a href="#" className="hover:text-orange-600 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; 2025 Ganesh Studio. All rights reserved. | Designed with passion for beautiful spaces
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;