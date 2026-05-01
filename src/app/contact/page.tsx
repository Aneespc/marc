import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="container contact-hero">
        <h1 className="headline-xl text-primary">Capturing the soul of structures through a lens of quiet precision.</h1>
        <p className="body-lg text-secondary contact-hero-desc">We provide specialized visual services for architects and interior designers who seek an editorial approach to their built work.</p>
      </section>

      <section className="container services-section">
        <div className="services-grid">
          <div className="services-header">
            <span className="label-sm text-on-tertiary-container uppercase tracking-widest">Our Expertise</span>
            <h2 className="headline-lg text-primary">Services</h2>
          </div>
          <div className="services-list">
            <div className="service-item group">
              <div className="service-content">
                <h3 className="headline-md text-primary">Architectural Photography</h3>
                <p className="body-md text-secondary">A study of light, shadow, and structural integrity. We focus on the deliberate lines and contextual relationships of every project.</p>
              </div>
              <span className="arrow">→</span>
            </div>
            <div className="service-item group">
              <div className="service-content">
                <h3 className="headline-md text-primary">Interior Styling</h3>
                <p className="body-md text-secondary">Curated compositions that highlight material tactile quality and spatial flow, ensuring the interior feels lived-in yet architecturally pure.</p>
              </div>
              <span className="arrow">→</span>
            </div>
            <div className="service-item group">
              <div className="service-content">
                <h3 className="headline-md text-primary">Drone Documentation</h3>
                <p className="body-md text-secondary">High-resolution aerial perspectives that map the site’s topography and the building’s footprint within its natural or urban landscape.</p>
              </div>
              <span className="arrow">→</span>
            </div>
            <div className="service-item group">
              <div className="service-content">
                <h3 className="headline-md text-primary">Spatial Cinematography</h3>
                <p className="body-md text-secondary">Slow-paced, atmospheric film that traces the journey of a person moving through the space, emphasizing rhythm and atmosphere.</p>
              </div>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container artistic-break">
        <div className="artistic-wrapper">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT-QAuQvcVsuKRimR_uRzek9PMMVkUQmcJG9JpVd7TOoMmUc7Em480m2l6Y_xzpIcTDbUgba769tvIUVM11LLopi-Z-2bBcc50PatZ1TNgS6ff1YEZ_5poQ44wl5fhRdvDawy2RkvYckRcictbi6wXN5DXgTvvX1DkkxsSUt4bnHO40P9naR-d2Jsp6R4M6f9RUkQbuHm5y0dLi0Ptnu8Za47mlP9T1Rh5sM_bxN1c1VYIUKeu-KS06YELqUC3KTkjFMzVhNANINQ" alt="Architectural mood" className="artistic-img" />
          <div className="artistic-overlay">
            <div className="artistic-quote-box">
              <p className="headline-md italic text-primary-fixed-dim">"Architecture is the learned game, correct and magnificent, of forms assembled in the light."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="label-sm text-on-tertiary-container uppercase tracking-widest">Get in touch</span>
            <h2 className="headline-lg text-primary contact-title">Start a Project</h2>
            <div className="contact-offices">
              <div className="office">
                <h4 className="label-sm text-primary uppercase tracking-widest">Bangalore Studio</h4>
                <p className="body-md text-secondary mt-2">
                  Indiranagar, 12th Main<br />
                  Bangalore, KA 560038<br />
                  <span className="phone">+91 80 4920 1100</span>
                </p>
              </div>
              <div className="office">
                <h4 className="label-sm text-primary uppercase tracking-widest">Kerala Studio</h4>
                <p className="body-md text-secondary mt-2">
                  Fort Kochi, Coastal Road<br />
                  Kochi, KL 682001<br />
                  <span className="phone">+91 484 2210 500</span>
                </p>
              </div>
              <div className="office">
                <h4 className="label-sm text-primary uppercase tracking-widest">Inquiries</h4>
                <a href="mailto:studio@marcframes.com" className="body-lg text-primary email-link">studio@marcframes.com</a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="label-sm text-on-tertiary-container uppercase tracking-widest">Name</label>
                <input type="text" id="name" placeholder="Your Name" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="label-sm text-on-tertiary-container uppercase tracking-widest">Email Address</label>
                <input type="email" id="email" placeholder="email@example.com" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="label-sm text-on-tertiary-container uppercase tracking-widest">Message</label>
                <textarea id="message" rows={4} placeholder="How can we help?" className="form-textarea"></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Inquiry <span className="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
