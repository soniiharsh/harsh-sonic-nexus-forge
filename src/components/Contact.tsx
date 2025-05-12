
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-tech-dark relative overflow-hidden">
      {/* Background graphics - more subtle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tech-cyan/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tech-purple/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center text-tech-cyan">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <ContactInfo />
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
