import '../../assets/home/Contact.css';

// Upload your image to: public/contact-visual.png
export default function Contact({ imageSrc = '/contact-visual.png' }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container site-container">
        <div className="row g-4 g-xl-5 align-items-stretch">
          <div className="col-lg-3">
            <p className="contact-tag mb-2">LET&apos;S TALK</p>
            <h2 className="h3 fw-bold text-white mb-3">Have a Project in Mind?</h2>
            <p className="contact-intro text-secondary mb-4">
              We&apos;re here to help you bring your ideas to life. Let&apos;s discuss how we can work
              together.
            </p>

            <ul className="list-unstyled contact-list mb-0">
              <li className="d-flex align-items-start gap-2 mb-3">
                <span className="contact-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="contact-line-icon">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <a href="mailto:hello@cloudkodeform.com" className="contact-link">
                  hello@cloudkodeform.com
                </a>
              </li>
              <li className="d-flex align-items-start gap-2 mb-3">
                <span className="contact-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="contact-line-icon">
                    <path d="M6.5 4h11l1 5.5-6.5 4-6.5-4 1-5.5Z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 19.5h8" strokeLinecap="round" />
                  </svg>
                </span>
                <a href="tel:+13023156605" className="contact-link">
                  +1 (302) 315-6605
                </a>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="contact-icon-wrap" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="contact-line-icon">
                    <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="11" r="2.2" />
                  </svg>
                </span>
                <span className="contact-link">Wilmington, Delaware, USA</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control contact-input" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control contact-input" placeholder="Your Email" required />
                </div>
                <div className="col-12">
                  <input type="text" className="form-control contact-input" placeholder="Your Subject" required />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control contact-input contact-textarea"
                    rows="5"
                    placeholder="Your Message"
                    required
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn-neon">
                    Send Message <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <div className="contact-visual-wrap text-center w-100">
              <img
                src={imageSrc}
                alt="Contact illustration"
                className="img-fluid contact-visual"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
