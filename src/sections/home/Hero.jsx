import { Link } from 'react-router-dom';
import '../../assets/home/Hero.css';
import heroImage from '../../assets/images/topq.png';
import heroImageOne from '../../assets/images/webde.png';
import heroImageTwo from '../../assets/images/mobile.png';
import heroImageThree from '../../assets/images/ais.png';
import heroImageFour from '../../assets/images/cloudc.png';

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

          <div className="col-lg-6 order-1 order-lg-2 text-center position-relative">
            <img src={heroImage} alt="CloudKodeForm digital solutions" className="img-fluid" />
            <div className="hero-image-container hero-one">
              <img src={heroImageOne} alt="CloudKodeForm digital solutions" className="img-fluid" />
              <p className="hero-image-container-one-text mb-0">Web Development</p>
            </div>
            <div className="hero-image-container hero-two">
              <img src={heroImageTwo} alt="CloudKodeForm digital solutions" className="img-fluid" />
              <p className="hero-image-container-two-text mb-0">Mobile App Development</p>
            </div>
            <div className="hero-image-container-two hero-three">
              <img src={heroImageThree} alt="CloudKodeForm digital solutions" className="img-fluid" />
              <p className="hero-image-container-three-text mb-0">AI/ML Solutions</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
