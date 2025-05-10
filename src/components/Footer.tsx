
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-tech-dark border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/1a33f998-0a49-4c30-b7c1-69b2a2bc3d90.png" 
              alt="Harsh Soni Logo" 
              className="h-8 w-8 mr-2" 
            />
            <span className="text-tech-cyan font-orbitron font-bold">
              Harsh Soni
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Harsh Soni. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
