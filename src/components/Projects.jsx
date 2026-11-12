import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Portfolio Website',
    role: 'Lead Developer',
    tools: ['React', 'Vite', 'SCSS'],
    description: 'A responsive, accessible portfolio website showcasing projects and skills.',
    link: '/toshiba-commerce',
  },
  {
    title: 'E-Commerce Dashboard',
    role: 'UI Developer',
    tools: ['React', 'Redux', 'Material UI'],
    description: 'Developed interactive dashboards and data visualizations for e-commerce analytics.',
    link: '#',
  },
  {
    title: 'Task Management App',
    role: 'Frontend Developer',
    tools: ['Vue', 'Pinia', 'Tailwind CSS'],
    description: 'A kanban-style productivity app with drag-and-drop functionality and real-time collaboration.',
    link: '#',
  },
  {
    title: 'Blog CMS',
    role: 'Full Stack Developer',
    tools: ['Next.js', 'Prisma', 'PostgreSQL'],
    description: 'Created a full-featured content management system with markdown support and user authentication.',
    link: '#',
  },
  {
    title: 'Chat App',
    role: 'Frontend Engineer',
    tools: ['React Native', 'Firebase', 'Expo'],
    description: 'Built a mobile messaging app with real-time chat and media sharing features.',
    link: '#',
  },
  {
    title: 'Weather Forecast Tool',
    role: 'Developer',
    tools: ['SvelteKit', 'TypeScript', 'OpenWeather API'],
    description: 'Designed a fast, lightweight weather app with location search and forecast charts.',
    link: '#',
  },
  {
    title: 'NFT Marketplace',
    role: 'Frontend Engineer',
    tools: ['React', 'Web3.js', 'Tailwind CSS'],
    description: 'Developed UI components and connected smart contracts to display and trade NFTs.',
    link: '#',
  },
];


const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section id="projects" tabIndex={-1} aria-label="Projects" className="projects-section">
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map(({ title, role, tools, description, link }, i) => (
          <article key={i} className="project-card">
            <a href={link}>
              <h3>{title}</h3>
              <p><strong>Role:</strong> {role}</p>
              <p><strong>Tools:</strong> {tools.join(', ')}</p>
              <p>{description}</p>
            </a>
          </article>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
