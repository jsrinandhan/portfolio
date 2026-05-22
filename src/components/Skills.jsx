import React, { useState, useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skills = [
    { name: 'Python', icon: 'fa-python', progress: 90 },
    { name: 'Node.js', icon: 'fa-node', progress: 85 },
    { name: 'React', icon: 'fa-react', progress: 80 },
    { name: 'SQL', icon: 'fa-database', progress: 85 },
    { name: 'TensorFlow', icon: 'fa-brain', progress: 75 },
    { name: 'Scikit-Learn', icon: 'fa-chart-line', progress: 80 },
    { name: 'OpenCV', icon: 'fa-camera', progress: 70 },
    { name: 'Numpy/Pandas', icon: 'fa-chart-bar', progress: 85 }
  ];

  const tools = ['Docker', 'Kubernetes', 'Git', 'GitHub', 'MongoDB', 'Express.js', 'REST APIs', 'Matplotlib'];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3>Programming Languages & Frameworks</h3>
            <div className="skills-grid">
              {skills.slice(0, 4).map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">
                    <i className={`fab ${skill.icon}`}></i>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: isVisible ? `${skill.progress}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>AI/ML Libraries & Tools</h3>
            <div className="skills-grid">
              {skills.slice(4).map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">
                    <i className={`fas ${skill.icon}`}></i>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: isVisible ? `${skill.progress}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Tools & Technologies</h3>
            <div className="tech-tags">
              {tools.map((tool, index) => (
                <span key={index} className="tech-tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
