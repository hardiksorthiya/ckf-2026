import './Process.css';

const processSteps = [
  {
    icon: 'discover',
    step: '01',
    title: 'Discover',
    desc: 'Understanding your goals and business challenges.',
  },
  {
    icon: 'plan',
    step: '02',
    title: 'Plan',
    desc: 'Strategize and create a roadmap for success.',
  },
  {
    icon: 'build',
    step: '03',
    title: 'Build',
    desc: 'Design, develop and test with agility.',
  },
  {
    icon: 'deploy',
    step: '04',
    title: 'Deploy',
    desc: 'Launch with precision and performance.',
  },
  {
    icon: 'support',
    step: '05',
    title: 'Support',
    desc: 'Ongoing support to ensure long-term success.',
  },
];

function ProcessIcon({ icon }) {
  const common = {
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: '1.8',
    stroke: 'currentColor',
    className: 'process-line-icon',
    'aria-hidden': true,
  };

  switch (icon) {
    case 'discover':
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M9 8h6M9 12h4M10.5 16l-1.5 3 2.5-1.5 2.5 1.5-1.5-3" />
        </svg>
      );
    case 'plan':
      return (
        <svg {...common}>
          <path d="M4 18h16M6 16V8l6-3 6 3v8" />
          <path d="M12 5v13M9 10h6" />
        </svg>
      );
    case 'build':
      return (
        <svg {...common}>
          <path d="M12 3l7 4v10H5V7l7-4Z" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      );
    case 'deploy':
      return (
        <svg {...common}>
          <path d="M7 18h10a4 4 0 1 0-.6-7.95A5.5 5.5 0 0 0 6 11a3.5 3.5 0 0 0 1 7Z" />
          <path d="M12 8v8M9 11l3-3 3 3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
  }
}

export default function Process() {
  return (
    <section className="process-section py-5">
      <div className="container site-container">
        <div className="text-center mb-4 mb-md-5">
          <p className="process-tag mb-2">OUR PROCESS</p>
          <h2 className="h3 fw-bold text-white mb-0">From Idea to Impact</h2>
        </div>

        <div className="process-steps row g-4 g-lg-0">
          {processSteps.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg process-step-col" key={item.title}>
              <article className="process-step text-center h-100">
                <div className="process-icon-row">
                  {index > 0 && <span className="process-connector d-none d-lg-block" aria-hidden="true" />}
                  <span className="process-icon-wrap">
                    <ProcessIcon icon={item.icon} />
                  </span>
                </div>
                <h3 className="process-title mb-2">
                  <span className="process-number">{item.step}.</span> {item.title}
                </h3>
                <p className="process-desc mb-0">{item.desc}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
