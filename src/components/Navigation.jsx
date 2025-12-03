import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
    setShowPortfolioDropdown(false);
  };

  const handlePortfolioFilter = (category) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { filterCategory: category } });
    } else {
      window.dispatchEvent(new CustomEvent('filterPortfolio', { detail: category }));
      scrollToSection('portfolio');
    }
    setShowPortfolioDropdown(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-bold tracking-tight cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          <span className="text-gray-900">GANESH</span>
          <span className="text-orange-600"> STUDIO</span>
        </div>
        
        {/* Desktop Menu - NO HOVER EFFECTS */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 font-medium"
            >
              Home
            </button>
          </li>
          
          {/* Our Work with Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setShowPortfolioDropdown(true)}
            onMouseLeave={() => setShowPortfolioDropdown(false)}
          >
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 font-medium"
            >
              Our Work
            </button>
            
            {/* Dropdown Menu - NO HOVER EFFECTS */}
            {showPortfolioDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[180px] border border-gray-100">
                <button 
                  onClick={() => handlePortfolioFilter('all')}
                  className="block w-full text-left px-4 py-2 text-gray-700"
                >
                  All Projects
                </button>
                <button 
                  onClick={() => handlePortfolioFilter('residential')}
                  className="block w-full text-left px-4 py-2 text-gray-700"
                >
                  Residential
                </button>
                <button 
                  onClick={() => handlePortfolioFilter('commercial')}
                  className="block w-full text-left px-4 py-2 text-gray-700"
                >
                  Commercial
                </button>
                <button 
                  onClick={() => handlePortfolioFilter('3d-renders')}
                  className="block w-full text-left px-4 py-2 text-gray-700"
                >
                  3D Designs
                </button>
              </div>
            )}
          </li>
          
          <li>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 font-medium"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-700 font-medium"
            >
              Design Process
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 font-medium"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 font-medium"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 font-medium capitalize"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 font-medium capitalize"
              >
                Our Work
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 font-medium capitalize"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('process')}
                className="text-gray-700 font-medium capitalize"
              >
                Design Process
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 font-medium capitalize"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 font-medium capitalize"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;