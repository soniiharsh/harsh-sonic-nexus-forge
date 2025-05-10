
import React from 'react';
import { Code, Database, FileCode, Github, Java, Linkedin, Python } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      name: 'Programming',
      skills: [
        { name: 'Python', icon: <Python className="text-tech-cyan" />, level: 90 },
        { name: 'C++', icon: <FileCode className="text-tech-cyan" />, level: 85 },
        { name: 'Java', icon: <Java className="text-tech-cyan" />, level: 75 },
        { name: 'C', icon: <Code className="text-tech-cyan" />, level: 80 },
      ],
    },
    {
      id: 2,
      name: 'Web Development',
      skills: [
        { name: 'MongoDB', icon: <Database className="text-tech-purple" />, level: 80 },
        { name: 'Express.js', icon: <FileCode className="text-tech-purple" />, level: 75 },
        { name: 'React.js', icon: <React className="text-tech-purple" />, level: 85 },
        { name: 'Node.js', icon: <FileCode className="text-tech-purple" />, level: 75 },
      ],
    },
    {
      id: 3,
      name: 'AI/ML & Cloud',
      skills: [
        { name: 'Machine Learning', icon: <Code className="text-tech-green" />, level: 85 },
        { name: 'Deep Learning', icon: <Code className="text-tech-green" />, level: 80 },
        { name: 'AWS', icon: <Database className="text-tech-green" />, level: 70 },
        { name: 'Data Analysis', icon: <Database className="text-tech-green" />, level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-tech-dark/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center text-tech-purple text-glow">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className="p-6 rounded-lg border border-gray-700 bg-tech-dark hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300"
            >
              <h3 className="text-xl font-orbitron font-bold mb-6 text-white">
                {category.name}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {skill.icon}
                        <span className="ml-2 text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          category.id === 1 ? 'bg-tech-cyan' : 
                          category.id === 2 ? 'bg-tech-purple' : 'bg-tech-green'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-xl font-orbitron font-semibold mb-6 text-white text-center">
            Connect With Me
          </h3>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/soniiharsh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-tech-cyan text-gray-400 hover:text-tech-cyan hover:bg-tech-cyan/5 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/harsh-soni-b60536251" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full border border-gray-700 hover:border-tech-cyan text-gray-400 hover:text-tech-cyan hover:bg-tech-cyan/5 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
