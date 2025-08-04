import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    role: 'Lead Developer',
    tools: ['React', 'Vite', 'SCSS'],
    description: 'A responsive, accessible portfolio website showcasing projects and skills.',
  },
  {
    title: 'E-Commerce Dashboard',
    role: 'UI Developer',
    tools: ['React', 'Redux', 'Material UI'],
    description: 'Developed interactive dashboards and data visualizations for e-commerce analytics.',
  },
];

const Projects = () => (
  <section id="projects" tabIndex={-1} aria-label="Projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map(({ title, role, tools, description }, i) => (
        <article className="project-card" key={i}>
          <h3>{title}</h3>
          <p><strong>Role:</strong> {role}</p>
          <p><strong>Tools:</strong> {tools.join(', ')}</p>
          <p>{description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
