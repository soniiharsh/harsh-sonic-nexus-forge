
import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
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
        "service_wmat0e5", // Service ID
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
  );
};

export default ContactForm;
