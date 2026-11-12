import { enterpriseProjects, enterpriseCaseStudyContext } from '../../data/enterpriseProjects';

function ProjectVisual({ project }) {
  return (
    <div className={`enterprise-visual enterprise-visual--${project.visual}`} aria-hidden="true">
      <div className="enterprise-visual__top"><span /><span /><span /></div>
      <div className="enterprise-visual__content">
        <span className="enterprise-visual__eyebrow">CAREERS / OPPORTUNITIES</span>
        <span className="enterprise-visual__brand">{project.name}</span>
        <span className="enterprise-visual__rule" />
        <span className="enterprise-visual__line enterprise-visual__line--long" />
        <span className="enterprise-visual__line enterprise-visual__line--short" />
        <span className="enterprise-visual__cta">EXPLORE ROLES ↗</span>
      </div>
      <span className="enterprise-visual__index">WEB EXPERIENCE / 0{enterpriseProjects.indexOf(project) + 1}</span>
    </div>
  );
}

export default function EnterpriseWork() {
  return (
    <section className="enterprise-work" id="work" aria-labelledby="enterprise-work-title">
      <div className="section-index">02 / SELECTED ENTERPRISE WORK</div>
      <div className="enterprise-work__heading">
        <div>
          <h2 id="enterprise-work-title">Career experiences<br /><em>built for the real world.</em></h2>
          <p className="enterprise-work__intro">
            Radancy client engagements across corporate, government and financial-sector career websites.
          </p>
        </div>
        <div className="enterprise-work__count"><strong>09</strong><span>SELECTED<br />ENGAGEMENTS</span></div>
      </div>

      <div className="enterprise-work__context">
        <div><span className="meta-label">MY CONTRIBUTION</span><p>{enterpriseCaseStudyContext.involvement}</p></div>
        <div><span className="meta-label">TECHNOLOGIES</span><div className="enterprise-work__tags">{enterpriseCaseStudyContext.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
      </div>

      <div className="enterprise-grid">
        {enterpriseProjects.map((project, index) => (
          <article className="enterprise-card" key={project.id}>
            <a className="enterprise-card__visual-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} staging website in a new tab`}>
              <ProjectVisual project={project} />
            </a>
            <div className="enterprise-card__body">
              <div className="enterprise-card__meta"><span>0{index + 1} / 09</span><span>{project.region}</span></div>
              <h3>{project.name}</h3>
              <p className="enterprise-card__category">{project.category}</p>
              <p className="enterprise-card__summary">{project.summary}</p>
              <ul className="enterprise-card__capabilities">
                {project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
              <a className="enterprise-card__link" href={project.href} target="_blank" rel="noreferrer">
                View staging website <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="enterprise-work__disclaimer">{enterpriseCaseStudyContext.note} Links point to the supplied staging environments and may require access or may change over time.</p>
    </section>
  );
}
