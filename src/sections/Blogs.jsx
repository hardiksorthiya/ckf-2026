import './Blogs.css';

const blogItems = [
  {
    title: 'How AI is Transforming Business Operations',
    excerpt: 'Discover practical ways AI automates workflows and improves decision-making.',
    date: 'May 2026',
    tag: 'AI',
  },
  {
    title: 'Cloud Migration Checklist for Modern Startups',
    excerpt: 'A simple step-by-step guide for moving your apps to scalable cloud platforms.',
    date: 'May 2026',
    tag: 'Cloud',
  },
  {
    title: 'UI/UX Trends That Increase User Retention',
    excerpt: 'Explore design patterns that make digital products more engaging and intuitive.',
    date: 'Apr 2026',
    tag: 'Design',
  },
  {
    title: 'Why DevOps is Essential for Fast Product Growth',
    excerpt: 'See how CI/CD and automation help teams ship features with better reliability.',
    date: 'Apr 2026',
    tag: 'DevOps',
  },
  {
    title: 'Building Secure APIs for Enterprise Applications',
    excerpt: 'Best practices to protect data, users, and connected systems through APIs.',
    date: 'Mar 2026',
    tag: 'API',
  },
  {
    title: 'Data Analytics Basics for Product Teams',
    excerpt: 'Learn which metrics matter most and how to turn data into product insights.',
    date: 'Mar 2026',
    tag: 'Analytics',
  },
];

export default function Blogs() {
  const blogsPerSlide = 3;
  const blogSlides = [];

  for (let i = 0; i < blogItems.length; i += blogsPerSlide) {
    blogSlides.push(blogItems.slice(i, i + blogsPerSlide));
  }

  return (
    <section className="blogs-section py-5" id="blog">
      <div className="container site-container">
        <div className="text-center mb-4">
          <p className="blogs-tag mb-2">LATEST INSIGHTS</p>
          <h2 className="h3 fw-bold text-white mb-2">From Our Blog</h2>
          <p className="blogs-subtitle text-secondary mb-0">
            Useful insights about technology, product building, and digital growth.
          </p>
        </div>

        <div id="blogCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2800">
          <div className="carousel-indicators">
            {blogSlides.map((_, index) => (
              <button
                type="button"
                data-bs-target="#blogCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
                key={`indicator-${index}`}
              />
            ))}
          </div>

          <div className="carousel-inner">
            {blogSlides.map((slideBlogs, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={`slide-${index}`}>
                <div className="blog-slide">
                  <div className="row g-3">
                    {slideBlogs.map((blog) => (
                      <div className="col-12 col-md-6 col-lg-4" key={blog.title}>
                        <article className="blog-card h-100 p-3 p-md-4">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span className="blog-chip">{blog.tag}</span>
                            <small className="text-secondary">{blog.date}</small>
                          </div>
                          <h3 className="h5 text-white mb-2">{blog.title}</h3>
                          <p className="text-secondary mb-3">{blog.excerpt}</p>
                          <button type="button" className="btn-neon-link">
                            Read More <span aria-hidden="true">→</span>
                          </button>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#blogCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
