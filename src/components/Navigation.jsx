import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

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
    // Navigate to AllProjects page with the selected filter
    navigate('/all-projects', { state: { filterCategory: category } });
    setShowPortfolioDropdown(false);
    setIsOpen(false);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setShowPortfolioDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowPortfolioDropdown(false);
    }, 150);
  };

  return (
    <>
      <nav 
        className="fixed top-0 w-full z-50 nav-container"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderBottom: '1px solid #E5E5E5',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)'
        }}
      >
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center nav-content">
          {/* Logo */}
          <div 
            className="cursor-pointer logo-text"
            onClick={() => window.location.href = '/'}
            style={{
              fontSize: '18px',
              fontWeight: '500',
              letterSpacing: '3px',
              color: '#2A2A2A'
            }}
          >
            GANESH DESIGN STUDIO
          </div>
          
          {/* Desktop Menu - Only show on large desktop screens */}
          <ul className="desktop-menu gap-6 items-center">
            {[
              { label: 'Home', action: () => scrollToSection('home') },
              { label: 'Portfolio', action: () => navigate('/all-projects'), hasDropdown: true },
              { label: 'Services', action: () => scrollToSection('services') },
              // { label: 'Process', action: () => scrollToSection('process') },
              { label: 'About', action: () => navigate('/about-designer') },
              { label: 'Materials', action: () => navigate('/materials') },
              { label: 'Transformations', action: () => navigate('/all-transformations') },
              { label: 'Behind the Scenes', action: () => { navigate('/behind-the-scenes'); setIsOpen(false); } },
              { label: 'Contact', action: () => scrollToSection('contact') }
            ].map((item, index) => (
              <li 
                key={index} 
                className={item.hasDropdown ? "relative" : ""}
                onMouseEnter={() => {
                  if (item.hasDropdown) handleDropdownEnter();
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown) handleDropdownLeave();
                }}
              >
                <button
                  onClick={item.action}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#555',
                    cursor: 'pointer',
                    letterSpacing: '0.5px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#2A2A2A';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#555';
                  }}
                >
                  {item.label}
                </button>
                
                {/* Portfolio Dropdown */}
                {item.hasDropdown && showPortfolioDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-2 py-2 min-w-[180px]"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E5E5E5',
                      borderRadius: '4px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                      zIndex: 1000
                    }}
                  >
                    {[
                      { label: 'All Projects', filter: 'all' },
                      { label: 'Residential', filter: 'residential' },
                      { label: 'Commercial', filter: 'commercial' },
                      { label: '3D Designs', filter: '3d-renders' }
                    ].map((dropdownItem, idx) => (
                      <button 
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handlePortfolioFilter(dropdownItem.filter);
                        }}
                        className="block w-full text-left px-4 py-2"
                        style={{
                          background: 'none',
                          border: 'none',
                          fontSize: '13px',
                          color: '#555',
                          cursor: 'pointer',
                          fontWeight: '300',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#F5F5F5';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                        }}
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - Show for anything smaller than large desktop */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#2A2A2A',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Show when hamburger is clicked */}
        {isOpen && (
          <div 
            className="mobile-menu"
            style={{ 
              backgroundColor: '#FFFFFF', 
              borderTop: '1px solid #E5E5E5'
            }}
          >
            <ul className="flex flex-col p-6 gap-6">
              {[
                { label: 'Home', action: () => scrollToSection('home') },
                { label: 'Our Work', action: () => { navigate('/all-projects'); setIsOpen(false); } },
                { label: 'Services', action: () => scrollToSection('services') },
                { label: 'Process', action: () => scrollToSection('process') },
                { label: 'About Bhargav', action: () => { navigate('/about-designer'); setIsOpen(false); } },
                { label: 'Materials', action: () => { navigate('/materials'); setIsOpen(false); } },
                { label: 'Transformations', action: () => { navigate('/all-transformations'); setIsOpen(false); } },
                { label: 'Behind the Scenes', action: () => { navigate('/behind-the-scenes'); setIsOpen(false); } },
                { label: 'Contact', action: () => scrollToSection('contact') }
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={item.action}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: '300',
                      color: '#555',
                      cursor: 'pointer',
                      letterSpacing: '0.5px',
                      textAlign: 'left',
                      width: '100%',
                      padding: '8px 0',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#2A2A2A'}
                    onMouseLeave={(e) => e.target.style.color = '#555'}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Dynamic Responsive CSS - Desktop = 1200px+, everything else = hamburger */}
      <style jsx>{`
        /* Default: Show hamburger, hide desktop menu */
        .desktop-menu {
          display: none !important;
        }
        .mobile-menu-btn {
          display: block !important;
        }

        /* Large Desktop Only - 1200px and up */
        @media (min-width: 1200px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }

        /* Logo text scaling for all screen sizes */
        @media (max-width: 1200px) {
          .logo-text {
            font-size: 16px !important;
            letter-spacing: 2px !important;
          }
        }

        @media (max-width: 768px) {
          .nav-content {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          
          .logo-text {
            font-size: 14px !important;
            letter-spacing: 1.5px !important;
          }
        }

        @media (max-width: 430px) {
          .logo-text {
            font-size: 12px !important;
            letter-spacing: 1px !important;
          }
        }

        @media (max-width: 375px) {
          .logo-text {
            font-size: 11px !important;
            letter-spacing: 0.5px !important;
          }
          
          .nav-content {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
        }

        /* Mobile menu visibility */
        .mobile-menu {
          display: block !important;
        }
        
        /* Force hide mobile menu on large desktop */
        @media (min-width: 1200px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;