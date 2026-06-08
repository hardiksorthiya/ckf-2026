import '../../assets/home/Technologies.css';
import techMapSvg from '../../assets/images/home/tech-map.svg?raw';

// Add your logo images in: src/assets/images/home/
const techItems = [
  { name: 'React', image: 'react.png' },
  { name: 'Next.js', image: 'nextjs.png' },
  { name: 'Node.js', image: 'node.png' },
  { name: 'Python', image: 'python.png' },
  { name: 'AWS', image: 'aws.png' },
  { name: 'Azure', image: 'azure.png' },
  { name: 'html', image: 'html.png' },
  { name: 'css', image: 'css.png' },
  { name: 'bootstrap', image: 'bootstrap.png' },
  { name: 'Google Cloud', image: 'googlecloud.png' },
  { name: 'Docker', image: 'docker.png' },
];

function getTechImage(fileName) {
  return new URL(`../../assets/images/home/${fileName}`, import.meta.url).href;
}

export default function Technologies() {
  const loopItems = [...techItems, ...techItems];

  const renderTechCard = (tech, key, isHidden = false) => (
    <article className="tech-card d-flex align-items-center justify-content-center p-2 p-md-3" key={key} aria-hidden={isHidden}>
      <img src={getTechImage(tech.image)} alt={tech.name} className="tech-logo" />
    </article>
  );

  return (
    <section className="technologies-section py-5" id="technologies">
      <div className="container site-container">
        <div className="tech-strip p-3 p-md-4">
          <div
            className="tech-map-bg"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: techMapSvg }}
          />

          <div className="tech-strip-content">
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
      </div>
    </section>
  );
}
