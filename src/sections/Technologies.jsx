import './Technologies.css';

const techItems = [
  { name: 'React', short: 'R', className: 'tech-react' },
  { name: 'Next.js', short: 'N', className: 'tech-next' },
  { name: 'Node.js', short: 'N', className: 'tech-node' },
  { name: 'Python', short: 'Py', className: 'tech-python' },
  { name: 'AWS', short: 'A', className: 'tech-aws' },
  { name: 'Azure', short: 'Az', className: 'tech-azure' },
  { name: 'Google Cloud', short: 'G', className: 'tech-gcp' },
  { name: 'Docker', short: 'D', className: 'tech-docker' },
  { name: 'Kubernetes', short: 'K', className: 'tech-k8s' },
];

export default function Technologies() {
  const loopItems = [...techItems, ...techItems];

  const renderTechCard = (tech, key, isHidden = false) => (
    <article className="tech-card d-flex align-items-center gap-2 px-2 px-md-3 py-2" key={key} aria-hidden={isHidden}>
      <span className={`tech-icon ${tech.className}`} aria-hidden="true">
        {tech.short}
      </span>
      <span className="tech-name">{tech.name}</span>
    </article>
  );

  return (
    <section className="technologies-section py-5" id="technologies">
      <div className="container site-container">
        <div className="tech-strip p-3 p-md-4">
          <div className="text-center mb-3 mb-md-4">
            <p className="tech-tag mb-1">TECHNOLOGIES WE WORK WITH</p>
            <h2 className="h5 fw-semibold text-white mb-0">
              Modern Technologies. Limitless Possibilities.
            </h2>
          </div>

          <div className="tech-carousel" role="region" aria-label="Technologies carousel">
            <div className="tech-track">
              {loopItems.map((tech, index) =>
                renderTechCard(tech, `${tech.name}-${index}`, index >= techItems.length)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
