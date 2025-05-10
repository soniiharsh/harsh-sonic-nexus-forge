
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // List of navigation items
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  // Track scrolling to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-tech-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/1a33f998-0a49-4c30-b7c1-69b2a2bc3d90.png" 
            alt="Harsh Soni Logo" 
            className="h-10 w-10 mr-2" 
          />
          <span className="text-tech-cyan font-orbitron font-bold text-xl">HS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500}
              className="text-gray-300 hover:text-tech-cyan cursor-pointer transition-colors font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-cyan group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
          ))}
          <a 
            href="https://drive.google.com/file/d/1rSQ1HdSExmvDHYwPntrk-YcKTE3k1eSn/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border border-tech-cyan text-tech-cyan hover:bg-tech-cyan/10 transition-colors font-medium"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-tech-dark/95 backdrop-blur-md py-4 px-4 absolute top-full left-0 right-0 z-50 border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-300 hover:text-tech-cyan py-2 cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </ScrollLink>
            ))}
            <a 
              href="https://drive.google.com/file/d/1rSQ1HdSExmvDHYwPntrk-YcKTE3k1eSn/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-2 px-4 rounded-md border border-tech-cyan text-tech-cyan hover:bg-tech-cyan/10 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
