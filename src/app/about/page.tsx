import "./about.css";

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-text">
            <span className="label-sm text-on-primary-container">ESTABLISHED 2018</span>
            <h1 className="headline-xl text-primary mt-8">
              Architectures <br />
              <span className="italic">Capturing</span> <br />
              Architecture.
            </h1>
            <p className="body-lg text-secondary mt-8 max-w-md">
              Based in the vibrant landscapes of Kerala and the brutalist pulses of Bangalore, Marc Frames is a photographic practice dedicated to the silent dialogue between form and light.
            </p>
            <div className="about-meta mt-16">
              <div className="meta-block">
                <span className="label-sm text-on-tertiary-container">Presence</span>
                <span className="body-md font-medium">Kerala / Bangalore</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-block">
                <span className="label-sm text-on-tertiary-container">Focus</span>
                <span className="body-md font-medium">Minimalism</span>
              </div>
            </div>
          </div>
          <div className="about-hero-img-wrapper">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaLQ0Ayq0sMmNEqVLCakcHpWI7UZ7b2xphwALDw94Q1ESB_zgt3QmaOg5dvNx0YG7g26SMGL2Y9dMY4qwPkLTZQKN4sAKSI-x-OeOsRk7ooMZeVsRZmYyXH0d9jeN1n6m-6S5euwLe7Yj3-CI86SPdulXp0cw4U6RivxiB3wtTGxGznPqP6ecDYuzlvMywN1cspcKpnaXkguw-kdaWQLSS-SfnVYFE2X_dXfOT42A_AOd_dyMvhXT_Q_yDWQ-SmmOJ8f3uKtaTaQw"
              alt="Stark architectural interior"
              className="about-hero-img"
            />
            <div className="about-hero-overlay"></div>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="container vision-grid">
          <div className="vision-heading">
            <h2 className="headline-md text-primary">The Vision</h2>
          </div>
          <div className="vision-content">
            <p className="headline-lg text-primary vision-quote">
              "We do not just photograph buildings; we document the soul of the void."
            </p>
            <p className="body-lg text-secondary vision-desc">
              Our practice is rooted in the belief that geometry is the language of thought. By isolating shadows and highlighting the tectonic precision of modern design, we create frames that serve as a timeless archive of human ingenuity.
            </p>

            <div className="vision-cases">
              <div className="case-item">
                <div className="case-img-wrapper">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtzVvFcCp0tVPi6s21ycjLtDZ9BDmVyNWuDIj-rRLAXOAxlJOtiC7kqM_YfhBxIhP81_WrSqP_QaNPGsQEKDW-F7pJHYbZPblH0saDZHjjP2qNZZRL4ZXFceF0zdRD_v0k9zFvwqT7992zz4mrMGKpFd4b-I9DWFJyEEbn91wXVtuW5_Xve9gzLcb_2ZAQy8FjuePuLZ_qeHW_H43vMgxRM3cbXEGf5uxssmx_NFf6ikhBUb7jbqHRTi0L_CqDWq-_bwqK1wJGrd8" alt="Structural Rhythm" />
                </div>
                <h3 className="label-sm mt-4 tracking-widest uppercase">Structural Rhythm</h3>
                <p className="body-md text-on-surface-variant mt-4">Exploring the repetition of elements that define the character of high-end Bangalore skyscrapers.</p>
              </div>
              <div className="case-item case-item-offset">
                <div className="case-img-wrapper">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2snXreiea4DjuaqCi44PGVpgeSadahb56ufAIMcTC9NcbS1-_gC5qcc_KVu7LgZP8g0Y-Fmg1sTc_oUYfo6owEm-i9GjZcwqmtQI2N91WVskl8SaJVvOXTG6WdwBbHo1WmNFKGA9okDlUi0EQVSn7p6nDu6_UFy16_jnxX888WMaPJMF4gAkNGpZ3j99n--JuXi_aazhu2VMxn8oi-Y1SqwtS0phLvca3JEkhFdCJg_8QwoWVI2vaYBFVYc7f42KTDyx9tp1I65A" alt="The Vernacular Shift" />
                </div>
                <h3 className="label-sm mt-4 tracking-widest uppercase">The Vernacular Shift</h3>
                <p className="body-md text-on-surface-variant mt-4">Capturing the evolution of tropical modernism within the lush landscapes of coastal Kerala.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-footer section">
        <div className="container text-center max-w-2xl mx-auto">
          <span className="label-sm text-on-tertiary-container">PHILOSOPHY</span>
          <h2 className="headline-lg text-primary italic mt-8">Geometry & Shadows</h2>
          <p className="body-md text-secondary mt-8">
            Every frame is a deliberate choice. We wait for the sun to hit the exact degree where the shadow of a column creates a perfect diagonal. We believe in the "slow photography" movement—taking the time to understand the architect's original intent before pressing the shutter.
          </p>
          <div className="mt-8">
            <button className="btn btn-primary">Our Portfolio</button>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container partners-grid">
          <span className="partner-name">Architectural Digest</span>
          <span className="partner-name">Dezeen</span>
          <span className="partner-name">Elle Decor</span>
          <span className="partner-name">Wallpaper*</span>
        </div>
      </section>
    </>
  );
}
