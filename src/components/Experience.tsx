
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const internships = [
    {
      id: 1,
      company: 'APSSDC (Edunet Foundation)',
      position: 'AI/ML Internship',
      period: 'Summer 2024',
      description: 'Built and trained AI models using real datasets, gaining core ML/DL exposure. Worked on practical applications of computer vision and natural language processing.',
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Data Analysis'],
    },
    {
      id: 2,
      company: 'YBI Foundation',
      position: 'Web Development Internship',
      period: 'Spring 2024',
      description: 'Created responsive websites and gained practical front-end/back-end experience. Developed and deployed full-stack web applications with modern frameworks.',
      skills: ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Responsive Design'],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-tech-dark to-tech-dark/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center text-tech-green text-glow">
          Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {internships.map((internship) => (
            <div 
              key={internship.id} 
              className="mb-8 p-6 border border-gray-700 rounded-lg bg-tech-dark/50 hover:shadow-lg hover:shadow-tech-green/10 transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <div className="p-2 rounded-full bg-tech-green/10 mr-3">
                    <Briefcase className="text-tech-green" size={20} />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold text-white">
                    {internship.company}
                  </h3>
                </div>
                <span className="text-gray-400 text-sm">{internship.period}</span>
              </div>
              
              <h4 className="text-tech-green font-medium mb-3">{internship.position}</h4>
              <p className="text-gray-300 mb-4">{internship.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-3 py-1 rounded-full bg-tech-green/10 text-tech-green border border-tech-green/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
