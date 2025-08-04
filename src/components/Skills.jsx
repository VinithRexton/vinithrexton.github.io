import React from 'react';

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SCSS'],
  Tools: ['Git', 'Webpack', 'Vite', 'npm', 'Jira'],
  'Soft Skills': ['Communication', 'Team Collaboration', 'Problem Solving', 'Time Management'],
  Frameworks: ['React', 'Redux', 'React Router'],
  'UI/UX Design Tools': ['Figma', 'Adobe XD', 'Sketch'],
};

const Skills = () => (
  <section id="skills" tabIndex={-1} aria-label="Skills">
    <h2>Skills</h2>
    {Object.entries(skills).map(([category, list]) => (
      <div key={category} style={{ marginBottom: '1rem' }}>
        <h3>{category}</h3>
        <ul className="skills-list" aria-label={`${category} skills`}>
          {list.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Skills;
