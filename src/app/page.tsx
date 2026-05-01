import Image from "next/image";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img
            className="hero-img"
            alt="A cinematic architectural interior"
            src="/images/home-hero.png"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <p className="hero-subtitle label-sm">ESTABLISHED 2020</p>
          <h1 className="hero-title headline-xl">
            architects capturing architecture
          </h1>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      <section className="container section philosophy">
        <div className="philosophy-grid">
          <div className="philosophy-text">
            <span className="label-sm philosophy-label">THE PHILOSOPHY</span>
            <h2 className="headline-lg philosophy-heading">Structural Silence</h2>
            <p className="body-lg philosophy-desc">
              Our practice is defined by the intersection of light, shadow, and the stillness between walls. We do not just document buildings; we capture the intent of the architect.
            </p>
            <p className="body-md philosophy-subdesc">
              Based in Kochi, serving international design firms with a focus on editorial and archival excellence.
            </p>
            <div className="philosophy-btn-wrapper">
              <button className="btn btn-primary">Read the Journal</button>
            </div>
          </div>
          <div className="philosophy-img-wrapper">
            <div className="philosophy-img-container">
              <img
                className="philosophy-img"
                alt="Interior of a modern concrete building"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYrqHu-P8NPqgjOUf-SsnHBa6Axj9JpAZyFqp4WOJYhZBGDAA_ATWiAkvcQGpKxEIJEKv87DXu74cbMUFAKCx7CgwfqM1yEBAmATJ_3C2Y-8BhNfn5qICO91Wqi1LMYED1YFq2QJhaj1cTsIcgTok_h9xd0_HpsI82PgjcAqKWdOWnB7vXdRaBuoxKFEVMYYP4WcYN7ksMRAP5_5whx_M3P7Gl1nkA8hjIhbzGELHAwyx8uoZCDMbmROD4Gv3Yyyy4dMSTHt-bC50"
              />
              <div className="philosophy-caption">
                <p className="label-sm">CASE STUDY 01</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured section">
        <div className="container">
          <div className="featured-header">
            <div>
              <span className="label-sm featured-label">FEATURED ARCHIVE</span>
              <h2 className="headline-lg featured-heading">Pavilion of Shadows</h2>
            </div>
            <div className="featured-count headline-md">01 / 12</div>
          </div>
          <div className="featured-banner">
            <img
              className="featured-banner-img"
              alt="Wide panoramic shot of a minimalist wooden and glass pavilion"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHX7Z57M0QI1u8eluoPlFt0kDIurUYjSLi2UV9WJV8iF8fuVTftDELjRzfn6ekcdfG0NUnpE2fdagq5GxQ_f-llNAqUjFw9CKw7J0z7m535yB5q0DpEsHBMgJLou5uvY283OzwXxG7tes_D36Gk8hSm1GtTxoxvuPmPJVGkYgR9D6pF8kW8P878CjLL0HUWxzZcFHepYqyXWNN7NnJ5Nl5-fxqBGXG7nl19De06cPTaeb8suybjwYLBV8yOEuJ7YMYvUr8yrV4C3I"
            />
            <div className="featured-banner-overlay">
              <span className="featured-btn label-sm">View Collection</span>
            </div>
          </div>
          <div className="featured-meta">
            <div className="meta-item">
              <p className="label-sm">LOCATION</p>
              <p className="body-md">Kochi, Banglore</p>
            </div>
            <div className="meta-item">
              <p className="label-sm">ARCHITECT</p>
              <p className="body-md">Aneespc & Associates</p>
            </div>
            <div className="meta-item">
              <p className="label-sm">YEAR</p>
              <p className="body-md">2023</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section text-center">
        <h3 className="headline-lg services-heading">The Frame is the Medium.</h3>
        <div className="services-grid">
          <div className="service-item">
            <h4 className="label-sm">Editorial Photography</h4>
            <p className="body-md">Capturing the life of buildings for major global publications and digital journals.</p>
          </div>
          <div className="service-item">
            <h4 className="label-sm">Film Documentation</h4>
            <p className="body-md">Motion sequences that reveal the spatial rhythm and temporal shifts of architecture.</p>
          </div>
          <div className="service-item">
            <h4 className="label-sm">Archival Books</h4>
            <p className="body-md">Custom curated print volumes documenting the full evolution of landmark projects.</p>
          </div>
        </div>
      </section>

      <section className="container section gallery-teaser">
        <div className="gallery-grid">
          <div className="gallery-item item-1">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2DJ2aMVgIWt_gCISAdD2JOejoo3WmP8XUX5hTsNq1A1MX4tZC4L5jygnSUgKqpCBAur_erNJWg2YpgVPXVNMzyC5xyW4aDcanKvYGG_Udn-IP8Cl_C9vJaVBOo7Q5lXqZv7dWqIhFAFcXsyweLAN7tJcZirI-X-Hqtfw0ptYZGOn6QXukpdi1tsqfYT56mu1VNnQmXpfoy4E1SxnJS3-ADCznSavRucPJ8BLPMOoEjxNsC37VWt-JjMeAuWUJoPgYKCONeM0p72s"
              alt="Abstract architectural detail"
            />
          </div>
          <div className="gallery-item item-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwMHZXTAZOBXMu48H5vtA91BMzB-pt6gla8ugS5v6X2Fy8zMqvw9QJvGQIPS9gE9PsF5vKvy-N5MwMzY7--IIGw15RntithK2-lPMnB5wAJI4IwBnhZ90lzNbHVlUKJQ9_ZYCYuGZ492L3vyQoTh9aOzFmamy1SS9334tjtMKyDAFD1d1Ebfjnb7Ll-_hB8FKxYOw-T4tvNrqAVuGjgGK1cGWa7EcFG04W2pwzF2Cw5XvNWFEg4AqNupa-vyKV0noefNYx3SsENSE"
              alt="Concrete wall"
            />
          </div>
          <div className="gallery-item item-3">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtgYy3Fe-1VgZD_3A4ZJaBRgX5Yex7mm2p5Os1KTDsgBziFLY_tZ-VkNjr0Qn6WxfzA14WbmwMTsEE2THaBWhU7xiQadcWbOOYYW0ixZIQvZXIbArAK6i1AhoY1WImb_ZqfNWU4Ck_eMuu6TPj7GzVyYHxzM8xj3hpDhyc-EjRbTbMh16eBpcix3z0me9qoLolcRNE1r8SLDkCrIyROhSBp5eGEj75ZsSYF9mvpBGNlz_V5UfJncMarUu7Z2w708_p2W5ojRTCWMg"
              alt="Minimal room"
            />
          </div>
          <div className="gallery-item item-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzEfI7p5ZhGPW7LreRQD2WsmO_rVDIcb2D42yCY-RZI5a8eOIbGqhUuRfUCwSxiyXkBr0PHb-TGv8EVNMQn9zpcKmrESCxQUP8ZRLPYeCDBGcEVOtfohnU634n4C7EEJwCVKS8gGDuTvfB3uNmI2s8ebd_-3jsRtiwoQjKinHF0eT7gXlG3VXmtKRzcbbsuJ1n-Z-WXL2lLP0VC0jqwjaBTpiFIHDSNrYXMBkNil0ShJ8Kl7MtVvSEw9MXxMuTIRW3RwR-fjMrnTM"
              alt="Modern house facade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
