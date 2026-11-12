import { personalProjects } from '../../data/personalProjects';

function PersonalProjectVisual({ project, index }) {
  return (
    <div className={`personal-project__visual personal-project__visual--${project.visual}`} aria-hidden="true">
      <div className="personal-project__browser"><span /><span /><span /><i>PERSONAL PRODUCT / 0{index + 1}</i></div>
      <div className="personal-project__mock">
        {project.visual === 'tasks' ? (
          <>
            <div className="mock-task__rail"><b>MY TASKS</b><span>Overview</span><span>Today</span><span>Upcoming</span></div>
            <div className="mock-task__main"><small>YOUR WORKSPACE</small><strong>Make space<br />for focus.</strong><div className="mock-task__items"><i>◉ Design system review</i><i>◯ Update project brief</i><i>◯ Prepare weekly plan</i></div></div>
          </>
        ) : (
          <>
            <div className="mock-spend__rail"><b>spendwise.</b><span>Overview</span><span>Expenses</span><span>Workspace</span></div>
            <div className="mock-spend__main"><small>YOUR FINANCES</small><strong>Know where<br />it goes.</strong><div className="mock-spend__bars"><i /><i /><i /><i /><i /><i /><i /></div></div>
          </>
        )}
      </div>
      <div className="personal-project__visual-label">{project.label}</div>
    </div>
  );
}

export default function PersonalProjects() {
  return (
    <section className="personal-projects" id="personal-projects" aria-labelledby="personal-projects-title">
      <div className="section-index">03 / INDEPENDENT BUILDS</div>
      <div className="personal-projects__heading">
        <div>
          <h2 id="personal-projects-title">Products I build<br /><em>on my own time.</em></h2>
          <p>Independent applications where I explore product thinking, frontend architecture, authentication, data flows and practical user experiences.</p>
        </div>
        <span className="personal-projects__count">02<br /><small>PERSONAL PROJECTS</small></span>
      </div>
      <div className="personal-projects__grid">
        {personalProjects.map((project, index) => (
          <article className="personal-project" key={project.id}>
            <PersonalProjectVisual project={project} index={index} />
            <div className="personal-project__body">
              <div className="personal-project__meta"><span>0{index + 1} / 02</span><span>PERSONAL PROJECT</span></div>
              <h3>{project.name}</h3>
              <p className="personal-project__category">{project.category}</p>
              <p className="personal-project__summary">{project.summary}</p>
              <span className="meta-label">SELECTED CAPABILITIES</span>
              <ul className="personal-project__features">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <div className="personal-project__stack">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <div className="personal-project__actions">
                <a className="personal-project__live" href={project.liveUrl} target="_blank" rel="noreferrer">View live app <span aria-hidden="true">↗</span></a>
                <a className="personal-project__source" href={project.repoUrl} target="_blank" rel="noreferrer">Source code ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="personal-projects__note">Product visuals above are portfolio mockups created to represent each application, not captured screenshots of the live products.</p>
    </section>
  );
}
