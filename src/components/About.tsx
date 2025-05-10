
import React from 'react';
import { GraduationCap } from 'lucide-react';

const About = () => {
  const educationTimeline = [
    { 
      id: 1, 
      institution: 'KL University', 
      degree: 'B.Tech ECE (AI Specialization)', 
      period: '2022 - Present',
      details: 'CGPA: 9.41 (Ongoing)',
    },
    { 
      id: 2, 
      institution: 'Krishnaveni Jr College', 
      degree: 'TSBIE (12th)',
      period: '2021 - 2022',
      details: 'Focus on PCM with Computer Science',
    },
    { 
      id: 3, 
      institution: 'Narayana Jr College',
      degree: 'TSBIE (11th)', 
      period: '2020 - 2021',
      details: 'Foundation for engineering stream',
    },
    { 
      id: 4, 
      institution: 'Nava Bharat Public School', 
      degree: 'CBSE (10th)',
      period: '2019 - 2020',
      details: 'Strong academic foundation',
    },
  ];

  return (
    <section id="about" className="py-20 bg-tech-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center text-tech-cyan text-glow">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-tech-dark/50 border border-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-white">
                Who I Am
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Hi, I'm Harsh Soni. I love solving complex problems and aim to become one of the best engineers by contributing to innovations that optimize leading industries.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                With expertise in both AI and Electronics Engineering, I aspire to tackle real-life challenges with smart, tech-driven solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I am passionate about pushing boundaries and learning cutting-edge technologies. My goal is to create solutions that make a real difference.
              </p>
            </div>
          </div>
          
          {/* Education Timeline */}
          <div className="order-1 lg:order-2">
            <div className="bg-tech-dark/50 border border-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-white flex items-center">
                <GraduationCap className="mr-2 text-tech-green" />
                Education Timeline
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-tech-cyan/30"></div>
                
                {/* Timeline items */}
                <div className="space-y-8">
                  {educationTimeline.map((item) => (
                    <div key={item.id} className="relative pl-12">
                      {/* Timeline dot */}
                      <div className="absolute left-1.5 top-1.5 w-5 h-5 rounded-full border-2 border-tech-cyan bg-tech-dark"></div>
                      
                      {/* Content */}
                      <div className="mb-1">
                        <h4 className="text-lg font-medium text-tech-cyan">
                          {item.institution}
                        </h4>
                        <p className="text-white font-medium">
                          {item.degree}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {item.period}
                        </p>
                        <p className="text-gray-300 mt-1">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
