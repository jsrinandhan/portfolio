import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Vignan Institute of Technology and Science',
      period: '2023 - Present',
      location: 'Hyderabad, India',
      score: 'CGPA: 8.02/10',
      icon: 'fa-graduation-cap'
    },
    {
      degree: 'Intermediate',
      institution: 'Alphores Jr College',
      period: '2021 - 2023',
      location: 'Warangal, India',
      score: 'Percentage: 90.6/100',
      icon: 'fa-percentage'
    },
    {
      degree: 'Secondary Education',
      institution: 'GREENWOOD HIGH SCHOOL',
      period: '2021',
      location: 'Warangal, India',
      score: 'Percentage: 71.5/100',
      icon: 'fa-percentage'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <div className="education-title">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                </div>
                <div className="education-date">
                  {edu.period}
                </div>
              </div>
              <div className="education-details">
                <div className="education-detail">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{edu.location}</span>
                </div>
                <div className="education-detail">
                  <i className={`fas ${edu.icon}`}></i>
                  <span>{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
