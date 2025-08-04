import React from 'react';

const educationList = [
  {
    degree: 'B.Sc. Computer Science',
    university: 'University of Chennai',
    years: '2015 - 2018',
    gpa: '3.8 GPA',
  },
  {
    degree: 'Higher Secondary Certificate',
    university: 'Chennai Higher Secondary School',
    years: '2013 - 2015',
    gpa: '92%',
  },
];

const Education = () => (
  <section id="education" tabIndex={-1} aria-label="Education">
    <h2>Education</h2>
    {educationList.map(({ degree, university, years, gpa }, i) => (
      <article key={i} style={{ marginBottom: '1rem' }}>
        <h3>{degree}</h3>
        <p><em>{university} | {years}</em></p>
        <p>{gpa}</p>
      </article>
    ))}
  </section>
);

export default Education;
