
import React from 'react';
import { Mail, Phone, Github, Linkedin, Download } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="p-6 rounded-lg border border-gray-800 bg-card shadow-md h-full transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-orbitron font-semibold mb-6 text-white">
        Contact Information
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="p-2 rounded-full bg-tech-cyan/10 mr-4">
            <Mail className="text-tech-cyan" size={20} />
          </div>
          <div>
            <p className="text-gray-400 mb-1">Email</p>
            <a href="mailto:2200040320ece@gmail.com" className="text-white hover:text-tech-cyan transition-colors">
              2200040320ece@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="p-2 rounded-full bg-tech-cyan/10 mr-4">
            <Phone className="text-tech-cyan" size={20} />
          </div>
          <div>
            <p className="text-gray-400 mb-1">Phone</p>
            <a href="tel:+917989917106" className="text-white hover:text-tech-cyan transition-colors">
              +91 7989917106
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-medium mb-4 text-white">
          Social Profiles
        </h4>
        <div className="flex space-x-4">
          <a 
            href="https://github.com/soniiharsh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-800 hover:border-tech-cyan hover:bg-tech-cyan/5 text-gray-400 hover:text-tech-cyan transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/harsh-soni-b60536251" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-800 hover:border-tech-cyan hover:bg-tech-cyan/5 text-gray-400 hover:text-tech-cyan transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-8">
        <a 
          href="https://drive.google.com/file/d/1rSQ1HdSExmvDHYwPntrk-YcKTE3k1eSn/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-md bg-tech-cyan text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Download size={18} className="mr-2" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
