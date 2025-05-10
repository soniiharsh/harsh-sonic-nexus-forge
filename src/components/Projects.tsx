
import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Order Ease",
      description: "A canteen order management system that reduced peak-hour rush by 30% through mobile ordering and real-time tracking. Integrated seamless payment and improved user satisfaction.",
      technologies: ["React.js", "Firebase", "Tailwind CSS", "Redux"],
      year: "2024",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      github: "https://github.com/soniiharsh",
      liveDemo: "#",
      color: "cyan"
    },
    {
      id: 2,
      title: "QuickMart",
      description: "A hyperlocal e-commerce platform using local Kirana stores to deliver in 5–10 minutes. Supported community commerce with 40% sales boost. Integrated secure payment gateways and responsive UI.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
      year: "2025",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      github: "https://github.com/soniiharsh",
      liveDemo: "#",
      color: "green"
    },
    {
      id: 3,
      title: "MediQ",
      description: "A doctor appointment booking system with real-time queue management. Featured responsive design, secure MongoDB storage, and automated appointment handling APIs.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      year: "2025",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/soniiharsh",
      liveDemo: "#",
      color: "purple"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-tech-dark/95 to-tech-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-16 text-center text-white text-glow">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden border ${
                project.color === 'cyan' 
                  ? 'border-tech-cyan hover:shadow-tech-cyan/20' 
                  : project.color === 'green' 
                    ? 'border-tech-green hover:shadow-tech-green/20' 
                    : 'border-tech-purple hover:shadow-tech-purple/20'
              } bg-tech-dark/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-dark to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span 
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      project.color === 'cyan' 
                        ? 'bg-tech-cyan/20 text-tech-cyan' 
                        : project.color === 'green' 
                          ? 'bg-tech-green/20 text-tech-green' 
                          : 'bg-tech-purple/20 text-tech-purple'
                    }`}
                  >
                    {project.year}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-orbitron font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.color === 'cyan' 
                          ? 'bg-tech-cyan/10 text-tech-cyan' 
                          : project.color === 'green' 
                            ? 'bg-tech-green/10 text-tech-green' 
                            : 'bg-tech-purple/10 text-tech-purple'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-700/30 text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Selected Project Details */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-lg border border-gray-700 bg-tech-dark/50 backdrop-blur-sm">
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">
              {projects[activeIndex].title}
            </h3>
            
            <p className="text-gray-300 mb-6">
              {projects[activeIndex].description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-gray-200">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeIndex].technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className={`text-sm px-3 py-1 rounded-full ${
                      projects[activeIndex].color === 'cyan' 
                        ? 'bg-tech-cyan/10 text-tech-cyan border-tech-cyan/30' 
                        : projects[activeIndex].color === 'green' 
                          ? 'bg-tech-green/10 text-tech-green border-tech-green/30' 
                          : 'bg-tech-purple/10 text-tech-purple border-tech-purple/30'
                    } border`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={projects[activeIndex].github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-md bg-tech-dark text-white border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <Github size={18} className="mr-2" />
                GitHub Repository
              </a>
              <a 
                href={projects[activeIndex].liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center px-4 py-2 rounded-md ${
                  projects[activeIndex].color === 'cyan' 
                    ? 'bg-tech-cyan text-tech-dark hover:bg-tech-cyan/90' 
                    : projects[activeIndex].color === 'green' 
                      ? 'bg-tech-green text-tech-dark hover:bg-tech-green/90' 
                      : 'bg-tech-purple text-white hover:bg-tech-purple/90'
                } transition-colors`}
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
