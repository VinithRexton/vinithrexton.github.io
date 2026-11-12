const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vinith-rexton-p-2968371b2/' },
  { label: 'GitHub', href: 'https://github.com/VinithRexton' },
  { label: 'Email', href: 'mailto:vinithuiux@gmail.com' },
];

export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy" id="about">
        <div className="eyebrow"><span className="eyebrow__dot" /> Lead Frontend Engineer <span className="eyebrow__divider">/</span> Chennai, India</div>
        <p className="hero-kicker">Hello, I'm Vinith Rexton</p>
        <h1 id="hero-title">I build digital experiences <em>where engineering meets design.</em></h1>
        <p className="hero-description">
          I’m a Lead Frontend Engineer focused on scalable interfaces, thoughtful component architecture and accessible web experiences. I turn complex product requirements into polished, production-ready UI.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#work">Explore selected work <span aria-hidden="true">↗</span></a>
          <a className="button button--secondary" href="mailto:vinithuiux@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}>{link.label}<span aria-hidden="true">↗</span></a>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="Temporary profile portrait placeholder">
        <div className="portrait-frame">
          <div className="portrait-grid" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit--one" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit--two" aria-hidden="true" />
          <div className="portrait-monogram">VR<span>.</span></div>
          <div className="portrait-caption"><span>PROFILE IMAGE</span><span>PLACEHOLDER · 01</span></div>
        </div>
        <div className="visual-note"><span className="visual-note__line" />Design-minded. Engineering-led.</div>
      </div>

      <div className="hero-meta" aria-label="Professional highlights">
        <div><span className="meta-label">Experience</span><strong>5+ years</strong></div>
        <div><span className="meta-label">Currently</span><strong>Bounteous × Accolite</strong></div>
        <div><span className="meta-label">Project</span><strong>Radancy</strong></div>
        <a href="#expertise" className="scroll-cue"><span>Scroll to explore</span><span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
