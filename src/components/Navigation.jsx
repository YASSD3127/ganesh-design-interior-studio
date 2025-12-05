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
    <nav className="fixed top-0 w-full backdrop-blur-md z-50 shadow-sm"
    style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-bold tracking-tight cursor-pointer" 
          onClick={() => scrollToSection('home')}
        >
          <span style={{ color: 'var(--text-primary)' }}>GANESH</span>
          <span style={{ color: 'var(--primary)' }}> STUDIO</span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="font-medium"
              style={{ color: 'var(--text-secondary)' }}
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
              className="font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              Our Work
            </button>
            
            {/* Dropdown Menu */}
            {showPortfolioDropdown && (
              <div className="absolute top-full left-0 mt-2 shadow-lg rounded-lg py-2 min-w-[180px] border"
              style={{ 
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)'
              }}>
                <button 
                  onClick={() => handlePortfolioFilter('all')}
                  className="block w-full text-left px-4 py-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  All Projects
                </button>
                <button 
                  onClick={() => handlePortfolioFilter('residential')}
                  className="block w-full text-left px-4 py-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Residential
                </button>
                <button 
                  onClick={() => handlePortfolioFilter('commercial')}
                  className="block w-full text-left px-4 py-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Commercial
                </button>
                <button 
                  onClick={() => handlePortfolioFilter('3d-renders')}
                  className="block w-full text-left px-4 py-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  3D Designs
                </button>
              </div>
            )}
          </li>
          
          <li>
            <button
              onClick={() => scrollToSection('services')}
              className="font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('process')}
              className="font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              Design Process
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/about-designer')}
              className="font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              About Bhargav
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/materials')}
              className="font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              Materials
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/all-transformations')}
              className="font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              Transformations
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/behind-the-scenes')}
              className="font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              Behind The Scenes
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: 'var(--text-primary)' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - NOW WITH ALL ITEMS */}
      {isOpen && (
        <div className="md:hidden border-t"
        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="font-medium w-full text-left"
                style={{ color: 'var(--text-secondary)' }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="font-medium w-full text-left"
                style={{ color: 'var(--text-secondary)' }}
              >
                Our Work
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="font-medium w-full text-left"
                style={{ color: 'var(--text-secondary)' }}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('process')}
                className="font-medium w-full text-left"
                style={{ color: 'var(--text-secondary)' }}
              >
                Design Process
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate('/about-designer');
                  setIsOpen(false);
                }}
                className="font-medium w-full text-left"
                style={{ color: 'var(--text-secondary)' }}
              >
                About Bhargav
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate('/materials');
                  setIsOpen(false);
                }}
                className="font-medium w-full text-left"
                style={{ color: 'var(--text-secondary)' }}
              >
                Materials
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate('/all-transformations');
                  setIsOpen(false);
                }}
                className="font-medium w-full text-left"
                style={{ color: 'var(--text-secondary)' }}
              >
                Transformations
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigate('/behind-the-scenes');
                  setIsOpen(false);
                }}
                className="font-medium w-full text-left"
                style={{ color: 'var(--text-secondary)' }}
              >
                Behind The Scenes
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-medium w-full text-left"
                style={{ color: 'var(--text-secondary)' }}
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