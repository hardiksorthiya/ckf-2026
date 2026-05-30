import { Link } from 'react-router-dom';
import './Cta.css';

export default function Cta() {
  return (
    <section className="cta-section py-5">
      <div className="container site-container">
        <div className="cta-banner p-3 p-md-4">
          <div className="row align-items-center g-4">
            <div className="col-auto">
              <span className="cta-icon-wrap" aria-hidden="true">
                <svg className="cta-rocket-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2.5 9 11h6L12 2.5Z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11H6.5a1.5 1.5 0 0 0 0 3H9M15 11h2.5a1.5 1.5 0 0 1 0 3H15" strokeLinecap="round" />
                  <path d="M10 14v5.5M14 14v5.5M8.5 21.5h7" strokeLinecap="round" />
                </svg>
              </span>
            </div>

            <div className="col">
              <p className="cta-tag mb-2">READY TO BUILD SOMETHING AMAZING?</p>
              <h2 className="h4 fw-bold text-white mb-2">Let&apos;s Build the Future Together</h2>
              <p className="cta-desc mb-0">
                Share your ideas and we&apos;ll turn them into powerful digital solutions.
              </p>
            </div>

            <div className="col-12 col-lg-auto text-lg-end">
              <Link to="/contact" className="btn-neon">
                Start Your Project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
