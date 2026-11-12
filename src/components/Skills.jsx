import React from 'react';

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS'],
  Tools: ['Git', 'Webpack', 'Vite', 'npm', 'Jira'],
  'Soft Skills': ['Communication', 'Team Collaboration', 'Problem Solving', 'Time Management'],
  Frameworks: ['React'],
  'UI/UX Design Tools': ['Figma', 'Adobe XD', 'Sketch'],
};

const Skills = () => (
  <section id="skills" tabIndex={-1} aria-label="Skills" className="skills-section">
    <h2 className="skills-title">Skills</h2>
    {Object.entries(skills).map(([category, list]) => (
      <div key={category} className="skills-category">
        <h3 className="skills-category-title">{category}</h3>
        <p className="skills-inline">
          {list.map((skill, idx) => (
            <span key={skill} className="skill-item">
              {skill}
              {idx < list.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
    ))}
  </section>
);

export default Skills;
