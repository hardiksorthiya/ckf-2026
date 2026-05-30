import { Link } from 'react-router-dom';
import './Services.css';

const serviceItems = [
  {
    icon: 'brain',
    title: 'AI / ML Solutions',
    desc: 'Smart machine learning systems that improve products and automate workflows.',
  },
  {
    icon: 'code',
    title: 'Web & App Development',
    desc: 'Modern, responsive websites and applications built for real business goals.',
  },
  {
    icon: 'mobile',
    title: 'Mobile App Development',
    desc: 'Fast and reliable Android and iOS apps with smooth user experiences.',
  },
  {
    icon: 'cloud',
    title: 'Cloud Engineering',
    desc: 'Scalable cloud architecture and deployment pipelines for reliable performance.',
  },
  {
    icon: 'design',
    title: 'UI / UX Design',
    desc: 'Clean and user-focused interfaces that increase engagement and conversions.',
  },
  {
    icon: 'building',
    title: 'Enterprise Software',
    desc: 'Secure software platforms customized for enterprise operations and growth.',
  },
  {
    icon: 'devops',
    title: 'DevOps & Automation',
    desc: 'CI/CD automation and infrastructure processes for faster and safer releases.',
  },
  {
    icon: 'api',
    title: 'API Integration',
    desc: 'Secure integrations between tools, platforms, and third-party services.',
  },
  {
    icon: 'data',
    title: 'Data Analytics',
    desc: 'Actionable dashboards and analytics insights to support better decisions.',
  },
  {
    icon: 'shield',
    title: 'Consulting & Strategy',
    desc: 'Technical consulting and product strategy to make smarter technology decisions.',
  },
  {
    icon: 'support',
    title: 'Support & Maintenance',
    desc: 'Continuous monitoring, updates, and support to keep systems healthy.',
  },
];

function ServiceIcon({ icon }) {
  const common = {
    fill: 'none',
    viewBox: '0 0 24 24',
    strokeWidth: '1.8',
    stroke: 'currentColor',
    className: 'service-line-icon',
    'aria-hidden': true,
  };

  switch (icon) {
    case 'brain':
      return (
        <svg {...common}>
          <path d="M9 7a3 3 0 0 1 6 0v1a2.8 2.8 0 0 1 2.8 2.8A3.2 3.2 0 0 1 15 14v2a3 3 0 1 1-6 0v-2a3.2 3.2 0 0 1-2.8-3.2A2.8 2.8 0 0 1 9 8V7Z" />
          <path d="M12 9v8M9 12h6" />
        </svg>
      );
    case 'code':
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
        </svg>
      );
    case 'mobile':
      return (
        <svg {...common}>
          <rect x="7" y="3.5" width="10" height="17" rx="2" />
          <path d="M10 6.5h4M11.5 17h1" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M7 18h10a4 4 0 1 0-.6-7.95A5.5 5.5 0 0 0 6 11a3.5 3.5 0 0 0 1 7Z" />
        </svg>
      );
    case 'design':
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="8" r="3" />
          <circle cx="8" cy="16" r="3" />
          <path d="M11 8h2M8 11v2M14 10l-4 4" />
        </svg>
      );
    case 'building':
      return (
        <svg {...common}>
          <path d="M4 20h16M6 20V6l6-2 6 2v14M9 10h1m-1 3h1m4-3h1m-1 3h1" />
        </svg>
      );
    case 'devops':
      return (
        <svg {...common}>
          <circle cx="8" cy="12" r="2.5" />
          <circle cx="16" cy="7" r="2.5" />
          <circle cx="16" cy="17" r="2.5" />
          <path d="M10.2 10.6 13.8 8.4M10.2 13.4l3.6 2.2" />
        </svg>
      );
    case 'api':
      return (
        <svg {...common}>
          <rect x="3.5" y="6" width="17" height="12" rx="2" />
          <path d="M7 10v4M11 10v4M15 10v4M19 10v4" />
        </svg>
      );
    case 'data':
      return (
        <svg {...common}>
          <path d="M4 19h16M7 16V9M12 16V6M17 16v-4" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3.5 5.5 6v5.5c0 4.6 3.4 7.6 6.5 9 3.1-1.4 6.5-4.4 6.5-9V6L12 3.5Z" />
          <path d="m9.5 12 1.8 1.8L14.8 10.3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4 12h16M12 4v16" />
        </svg>
      );
  }
}

export default function Services() {
  const topRowServices = serviceItems.slice(0, 6);
  const bottomRowServices = serviceItems.slice(6);

  const renderCard = (item) => (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-2" key={item.title}>
      <article className="service-card h-100 p-3 p-md-4">
        <div className="service-icon-wrap mb-3">
          <ServiceIcon icon={item.icon} />
        </div>
        <h3 className="h6 fw-semibold text-white mb-2">{item.title}</h3>
        <p className="small text-secondary mb-3">{item.desc}</p>
        <Link to="/services" className="btn-neon-link">
          Learn More <span aria-hidden="true">→</span>
        </Link>
      </article>
    </div>
  );

  return (
    <section className="services-section py-5" id="services">
      <div className="container site-container">
        <div className="text-center mb-4">
          <p className="services-tag mb-2">WHAT WE DO</p>
          <h2 className="h3 h2-md text-white fw-bold mb-2">End-to-End Digital Solutions</h2>
          <p className="services-subtitle text-secondary mb-0">
            From idea to deployment, we build intelligent and scalable digital products.
          </p>
        </div>

        <div className="row services-row-gap mb-3 mb-md-4">{topRowServices.map(renderCard)}</div>

        <div className="row services-row-gap justify-content-center">
          {bottomRowServices.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
