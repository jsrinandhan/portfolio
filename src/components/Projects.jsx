import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'HACKVIBE - Real-World Hackathon Management Platform',
      description: 'Developed and deployed a web application for managing hackathon registrations with efficient participant registration module and streamlined event coordination.',
      tech: ['Node.js', 'React', 'MongoDB', 'Express.js'],
      icon: 'fa-laptop-code',
      github: 'https://github.com/jsrinandhan'
    },
    {
      title: 'Jan AI - AI Agent for Government Scheme Assistance',
      description: 'Voice-enabled AI assistant for users to discover and apply for government schemes with conversational interaction and multilingual support.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Speech Recognition'],
      icon: 'fa-robot',
      github: 'https://github.com/jsrinandhan'
    },
    {
      title: 'Crop Disease Detection',
      description: 'Image-based disease detection system to identify crop diseases from leaf images using machine learning and image processing techniques.',
      tech: ['Python', 'OpenCV', 'Scikit-Learn', 'Deep Learning'],
      icon: 'fa-seedling',
      github: 'https://github.com/jsrinandhan'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <i className={`fas ${project.icon}`}></i>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
