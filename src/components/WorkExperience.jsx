import React from 'react';

const experiences = [
  {
    company: 'Tech Solutions Ltd',
    role: 'UI Developer',
    duration: 'Jan 2021 - Present',
    location: 'Chennai, TN',
    points: [
      'Developed responsive web interfaces using React and SCSS.',
      'Collaborated with UX designers to enhance user experience.',
      'Optimized application performance improving load time by 30%.',
    ],
  },
  {
    company: 'Creative Minds',
    role: 'Frontend Developer',
    duration: 'Jun 2019 - Dec 2020',
    location: 'Chennai, TN',
    points: [
      'Implemented UI components with React and Redux.',
      'Participated in Agile ceremonies and sprint planning.',
      'Ensured accessibility compliance for all UI components.',
    ],
  },
];

const WorkExperience = () => (
  <section id="work" tabIndex={-1} aria-label="Work Experience">
    <h2>Work Experience</h2>
    {experiences.map(({ company, role, duration, location, points }, i) => (
      <article key={i} style={{ marginBottom: '1.5rem' }}>
        <h3>{role} - {company}</h3>
        <p><em>{duration} | {location}</em></p>
        <ul>
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </article>
    ))}
  </section>
);

export default WorkExperience;
