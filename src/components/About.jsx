import React from 'react';
import '../styles/About.css';

const About = () => {
  const personalInfo = [
    { icon: 'fa-user', label: 'Name', value: 'SRINANDHAN JANJIRALA' },
    { icon: 'fa-envelope', label: 'Email', value: 'janjiralasrinandhan@gmail.com' },
    { icon: 'fa-phone', label: 'Phone', value: '+91 9392981385' },
    { icon: 'fa-map-marker-alt', label: 'Location', value: 'Hyderabad, India' },
    { icon: 'fa-graduation-cap', label: 'Education', value: 'B.Tech CSE (Pursuing)' },
    { icon: 'fa-globe', label: 'Languages', value: 'English, Telugu, Hindi' }
  ];

  const stats = [
    { number: '3+', label: 'Major Projects' },
    { number: '8.06', label: 'CGPA' },
    { number: '2+', label: 'Certifications' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Computer Science student at Vignan Institute of Technology and Science 
              with a strong foundation in programming, AI/ML, full-stack development, and database systems. 
              Passionate about technology and continuous learning, with strong problem-solving, 
              analytical, and development skills gained through real-world projects.
            </p>
            <p>
              Currently maintaining a CGPA of 8.06 while working on innovative projects in 
              artificial intelligence, web development, and machine learning. Eager to 
              contribute effectively in a challenging internship role and make a meaningful impact.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-info">
            <div className="info-grid">
              {personalInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <i className={`fas ${info.icon}`}></i>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="/resume.pdf" className="btn btn-primary download-btn" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
