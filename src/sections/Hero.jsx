import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero({ imageSrc }) {
  return (
    <section className="hero py-5">
      <div className="container site-container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 order-2 order-lg-1">
            <span className="hero-badge badge rounded-pill mb-3">
              <span className="text-warning">★</span> AI-Powered Solutions for the Future
            </span>

            <h1 className="display-5 fw-bold text-white mb-3">
              We Build. You Scale. We Transform Ideas Into{' '}
              <span className="hero-accent">Digital Reality.</span>
            </h1>

            <p className="text-secondary mb-4">
              CloudKodeForm delivers AI/ML solutions, cloud-native applications, and
              enterprise software that empower startups and enterprises to innovate,
              scale, and lead.
            </p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              <Link to="/services" className="btn-neon">
                Explore Our Services <span aria-hidden="true">→</span>
              </Link>
              <Link to="/contact" className="btn-neon-outline">
                Book a Consultation
              </Link>
            </div>
             </div>

          <div className="col-lg-6 order-1 order-lg-2 text-center">
            {imageSrc && (
              <img src={imageSrc} alt="CloudKodeForm digital solutions" className="img-fluid" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
