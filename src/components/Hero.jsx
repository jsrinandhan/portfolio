import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = ['Computer Science Student', 'AI/ML Enthusiast', 'Full Stack Developer', 'Problem Solver'];
    const typingSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setRoleText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setRoleText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setIsDeleting(true);
        setTimeout(() => {}, 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const achievements = [
    {
      icon: 'fa-certificate',
      title: 'NPTEL Certified',
      description: 'Programming, Data Structures & Algorithms',
      issuer: 'IIT Madras'
    },
    {
      icon: 'fa-award',
      title: 'ML Fundamentals',
      description: 'Machine Learning Core Concepts',
      issuer: 'Infosys Springboard'
    },
    {
      icon: 'fa-trophy',
      title: 'Top Performer',
      description: 'Academic Excellence Award',
      issuer: 'Vignan Institute'
    }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">SRINANDHAN JANJIRALA</span>
          </h1>
          <div className="hero-subtitle">
            <span className="role-text">{roleText}</span>
            <span className="cursor-blink">|</span>
          </div>
          <p className="hero-description">
            Computer Science student with a strong foundation in programming, AI/ML, 
            full-stack development, and database systems. Passionate about technology 
            and continuous learning with strong problem-solving and analytical skills.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/jsrinandhan" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/srinandhanjanjirala" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:janjiralasrinandhan@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-achievements">
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  <i className={`fas ${achievement.icon}`}></i>
                </div>
                <div className="achievement-content">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                  <span className="achievement-issuer">{achievement.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;
