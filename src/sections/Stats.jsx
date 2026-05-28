import './Stats.css';

const statsItems = [
  { icon: 'users', value: '50+', label: 'Happy Clients' },
  { icon: 'briefcase', value: '120+', label: 'Projects Delivered' },
  { icon: 'award', value: '5+', label: 'Years of Experience' },
  { icon: 'globe', value: '20+', label: 'Countries Served' },
];

function StatIcon({ icon }) {
  const common = {
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: '1.8',
    stroke: 'currentColor',
    className: 'stat-line-icon',
    'aria-hidden': true,
  };

  switch (icon) {
    case 'users':
      return (
        <svg {...common}>
          <path d="M16 19a4 4 0 0 0-8 0M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M20 18a3 3 0 0 0-2.3-2.9M17.5 8.5a2.5 2.5 0 1 1 0 5" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...common}>
          <rect x="3.5" y="7.5" width="17" height="11" rx="2" />
          <path d="M9 7.5v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M3.5 12h17" />
        </svg>
      );
    case 'award':
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="3.5" />
          <path d="M9.5 12.5 8 19l4-2 4 2-1.5-6.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" />
        </svg>
      );
  }
}

export default function Stats() {
  return (
    <section className="stats-section py-5">
      <div className="container site-container">
        <div className="stats-wrap p-3 p-md-4">
          <div className="row g-3 g-md-4">
            {statsItems.map((item) => (
              <div className="col-12 col-sm-6 col-lg-3" key={item.label}>
                <article className="stat-card h-100 d-flex align-items-center gap-3">
                  <span className="stat-icon-wrap">
                    <StatIcon icon={item.icon} />
                  </span>
                  <div>
                    <p className="stat-value mb-0">{item.value}</p>
                    <p className="stat-label mb-0">{item.label}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
