
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const phrases = ["Innovator", "Problem Solver", "AI Engineer", "Web Developer"];
  const typingRef = useRef(0);
  const phraseRef = useRef(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeEffect = () => {
      const currentPhrase = phrases[phraseRef.current];
      
      if (isDeleting) {
        // Delete text
        setTypingText(currentPhrase.substring(0, typingRef.current - 1));
        typingRef.current -= 1;
        
        // If empty, move to next word
        if (typingRef.current === 0) {
          setIsDeleting(false);
          phraseRef.current = (phraseRef.current + 1) % phrases.length;
        }
      } else {
        // Type text
        setTypingText(currentPhrase.substring(0, typingRef.current + 1));
        typingRef.current += 1;
        
        // If word complete, start deleting
        if (typingRef.current === currentPhrase.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500); // Wait before deleting
          return;
        }
      }
    };
    
    const timer = setTimeout(typeEffect, isDeleting ? 100 : 200); // Faster when deleting
    
    return () => clearTimeout(timer);
  }, [typingText, isDeleting]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 circuit-background"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark/80 to-tech-dark"></div>
      
      <div className="container relative mx-auto px-4 flex flex-col items-center text-center z-10">
        <img 
          src="/lovable-uploads/1a33f998-0a49-4c30-b7c1-69b2a2bc3d90.png" 
          alt="Harsh Soni Logo" 
          className="h-24 w-24 mb-8 animate-float" 
        />
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-4 text-white text-glow">
          Harsh Soni
        </h1>
        
        <div className="h-8 mb-6">
          <p className="text-xl md:text-2xl font-medium text-tech-cyan typing-effect">
            {typingText}
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          Electronics and Communication Engineer specialized in Artificial Intelligence
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-8 py-3 rounded-md bg-tech-cyan text-tech-dark font-medium hover:bg-tech-cyan/90 transition-colors cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-8 py-3 rounded-md border border-tech-cyan text-tech-cyan hover:bg-tech-cyan/10 transition-colors cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer p-2 rounded-full border border-tech-cyan text-tech-cyan hover:bg-tech-cyan/10 transition-colors"
        >
          <ArrowDown size={24} />
        </Link>
      </div>
      
      {/* Animated grid/lines overlay */}
      <div className="absolute inset-0 z-[5] opacity-20 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-8 gap-0.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`col-${i}`} className="h-full border-r border-tech-cyan/20"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-8 gap-0.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`row-${i}`} className="w-full border-b border-tech-cyan/20"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
