
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Element } from 'react-scroll';

const Index = () => {
  return (
    <div className="bg-tech-dark min-h-screen">
      <NavBar />
      
      <Element name="home">
        <Hero />
      </Element>
      
      <Element name="about">
        <About />
      </Element>
      
      <Element name="experience">
        <Experience />
      </Element>
      
      <Element name="skills">
        <Skills />
      </Element>
      
      <Element name="projects">
        <Projects />
      </Element>
      
      <Element name="contact">
        <Contact />
      </Element>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
