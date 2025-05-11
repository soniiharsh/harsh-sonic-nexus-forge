
import React, { useState, useRef } from 'react';
import { Send, Mail, Phone, Github, Linkedin, Download } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init("0YeFAR4TQccIWMRGr");
      
      // Send the email using EmailJS
      await emailjs.sendForm(
        "service_wmat0e5", // Updated Service ID
        "template_yn593gc", // Template ID
        formRef.current as HTMLFormElement,
        "0YeFAR4TQccIWMRGr" // Public Key
      );
      
      // Show success message
      toast.success('Message sent successfully! I will get back to you soon.');
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-tech-dark relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tech-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tech-purple/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center text-tech-cyan text-glow">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="p-6 rounded-lg border border-gray-700 bg-tech-dark/50 h-full">
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
                    className="p-3 rounded-full border border-gray-700 hover:border-tech-cyan hover:bg-tech-cyan/5 text-gray-400 hover:text-tech-cyan transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/harsh-soni-b60536251" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-700 hover:border-tech-cyan hover:bg-tech-cyan/5 text-gray-400 hover:text-tech-cyan transition-colors"
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
                  className="inline-flex items-center px-6 py-3 rounded-md border border-tech-cyan text-tech-cyan hover:bg-tech-cyan/10 transition-colors"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="p-6 rounded-lg border border-gray-700 bg-tech-dark/50">
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-white">
                Send Me a Message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan/50 transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan/50 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-400 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan/50 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-tech-cyan focus:ring-1 focus:ring-tech-cyan/50 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <button 
                    type="submit" 
                    className="px-6 py-3 rounded-md bg-tech-cyan text-tech-dark font-medium hover:bg-tech-cyan/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-block h-5 w-5 border-2 border-tech-dark/30 border-t-tech-dark rounded-full animate-spin mr-2"></span>
                    ) : (
                      <Send size={18} className="mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
