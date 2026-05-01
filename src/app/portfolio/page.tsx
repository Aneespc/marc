import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      <section className="container portfolio-header">
        <h1 className="headline-xl text-primary">Selected Works.</h1>
        <p className="body-lg text-secondary portfolio-desc">
          A curation of spaces defined by structural clarity and the intersection of light and material. From private sanctuaries to public monuments.
        </p>
      </section>

      <section className="container filter-section">
        <div className="filters">
          <button className="filter-btn active">All Projects</button>
          <button className="filter-btn">Residential</button>
          <button className="filter-btn">Commercial</button>
          <button className="filter-btn">Cultural</button>
        </div>
      </section>

      <section className="container portfolio-grid">
        {/* Large Main Feature */}
        <div className="portfolio-item item-main group">
          <div className="portfolio-img-wrapper aspect-[4/5]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2n15Zsa6sMqbg7KDSblve5FhfUIpnIioKVRGFqbJSvlO_UEzKSRMg8pYinXsd_l0itDKoEXfVoyMTIXpD9XCma3i_2lnD3zzWVB-VbaeyxFmm-pcHINQczsEd1W14jEP138frvhj7wqAJUCLM2bFN49hxYuR83LdJQZSxEiM1fal9fIfyKGpr2CSwEcium-ir5kzWbav1le2ifXrlTp_mfB_wwRp3Iqkt27TBgFrWK0LTUVBM3T7-_arpen9_-UcnAx7KgPcT34s" alt="Monolith Residence" className="portfolio-img" />
            <div className="portfolio-overlay">
              <span className="label-sm">01 — RESIDENTIAL</span>
              <h3 className="headline-md mt-2">The Monolith Residence</h3>
            </div>
          </div>
          <div className="portfolio-meta">
            <h3 className="headline-md">Monolith Residence</h3>
            <span className="label-sm text-secondary">ZURICH, CH</span>
          </div>
        </div>

        {/* Side Small Item */}
        <div className="portfolio-item item-side group">
          <div className="portfolio-img-wrapper aspect-square">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs-ny4JMx6bgiRRCEnNG2JhYVyu-8Pg3US05XmN5GFgWQwRZmBPs85FFMptGxgQxoBeaaxilhY95OrYrS9Avnl5g-aDht9Br_h3uaGzoN77riQgUfBtob3haS3TvlJSpJ48cs0NwDkzuTyijxw1lhuvO2P-Mlj3BHcu7FGoaeb1EeJ9kSvw8Qg9_piLbXtYb5NTj9l8E8iRxqOKQWpLiEjCu_2VuMrnaLkXPiajpByTrmnuu4UNs8L8yJHNd6wpOLA9kzosTlJ3O8" alt="Frame Gallery" className="portfolio-img" />
            <div className="portfolio-overlay">
              <span className="label-sm">02 — CULTURAL</span>
              <h3 className="headline-md mt-2">Frame Gallery</h3>
            </div>
          </div>
          <div className="portfolio-meta">
            <h3 className="headline-md">Frame Gallery</h3>
            <span className="label-sm text-secondary">BERLIN, DE</span>
          </div>
        </div>

        {/* Third Item - Wide Asymmetric */}
        <div className="portfolio-item item-wide group">
          <div className="portfolio-img-wrapper aspect-[3/4]">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUIpImwgXSBb5-lBC264PVUH8lBTrYcgKnsUnBiYF3PAYz_Ka1F_wYs_yLOBotrPnFDzlhzlYioKuwQNAsrYewKfU30nZVkGxr37Zerr1GMhxRjvzJQWXxyvGS1MIVlYtbIAXDPePyrykhLQ_sWjU928h0HK6uYMwIxgvnFS2JgSaDV3aPYLi69MzML3u9efKH9JC5JcWgzKQdSXv0IrokA413Wg18CBOwIRIANFijJLy603w-Iu3FPUtzJkjg5LKOa8DV5pfx4hA" alt="Vertex Tower" className="portfolio-img" />
            <div className="portfolio-overlay">
              <span className="label-sm">03 — COMMERCIAL</span>
              <h3 className="headline-md mt-2">Vertex Tower</h3>
            </div>
          </div>
          <div className="portfolio-meta">
            <h3 className="headline-md">Vertex Tower</h3>
            <span className="label-sm text-secondary">TOKYO, JP</span>
          </div>
        </div>

        {/* Fourth Item - Offset Large */}
        <div className="portfolio-item item-offset group">
          <div className="portfolio-img-wrapper aspect-video">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5KJK9j2J6qPBpd4wgVwyUaYtpYPbZVDdkQMEgFF3opjZEsCMeAx2BF1eXnMsSH2SW6RrTwJjZ0wyU6AwpuiFOejWjQUjEs1JaG5uX8HYC23W5ncIgYSHa2klt7ssbvwRSot94byZb9u5RFfwJoAReq3ID91JyZ4QV1ffbM8bYlrCdhnryF2qbmQ_akuCG_7sYFG_hMFpCtfe2qT4OtWiO5_YvqCMn1Wg1vKmE0mvjML86CDGohPAMWX6M5sqJc4bMJ2LIbq1ToL4" alt="Slate Headquarters" className="portfolio-img" />
            <div className="portfolio-overlay">
              <span className="label-sm">04 — COMMERCIAL</span>
              <h3 className="headline-md mt-2">Slate Headquarters</h3>
            </div>
          </div>
          <div className="portfolio-meta">
            <h3 className="headline-md">Slate Headquarters</h3>
            <span className="label-sm text-secondary">OSLO, NO</span>
          </div>
        </div>
      </section>

      <section className="journal-cta">
        <div className="container text-center">
          <span className="label-sm text-secondary uppercase tracking-widest">Process & Perspective</span>
          <h2 className="headline-lg text-primary italic mt-4 mb-8 max-w-2xl mx-auto">Capturing the soul of structures through the lens.</h2>
          <a href="#" className="explore-link">
            <span className="label-sm tracking-widest text-primary">EXPLORE THE JOURNAL</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
