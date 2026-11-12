const expertise = ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'SCSS', 'Tailwind CSS', 'Design Systems', 'Accessibility'];

export default function ExpertisePreview() {
  return (
    <section className="expertise-preview" id="expertise" aria-labelledby="expertise-title">
      <div className="section-index">01 / WHAT I DO</div>
      <div className="expertise-intro">
        <h2 id="expertise-title">Thoughtful interfaces.<br /><em>Solid engineering.</em></h2>
        <p>From design handoff to production delivery, I work across the frontend lifecycle with a focus on maintainability, performance and user experience.</p>
      </div>
      <div className="expertise-tags" aria-label="Core technologies and practices">
        {expertise.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
      <div className="coming-next"><span>02 / PROFESSIONAL WORK</span><p>Client-facing career experiences and enterprise interfaces.</p><span className="coming-next__arrow" aria-hidden="true">↘</span></div>
      <div className="contact-anchor" id="contact"><span>Have a project or opportunity in mind?</span><a href="mailto:vinithuiux@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a></div>
    </section>
  );
}
