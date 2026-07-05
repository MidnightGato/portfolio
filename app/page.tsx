"use client";

import { useState, useEffect } from "react";

type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

const screenshots: Screenshot[] = [
  {
    src: "/screenshots/dashboard.png",
    alt: "Legacy Analytics main dashboard showing business health score",
    caption: "Business Health Score with 8 operational vitals",
  },
  {
    src: "/screenshots/tools.png",
    alt: "Tools dropdown showing 7 available analytics tools",
    caption: "Seven integrated analytics tools",
  },
  {
    src: "/screenshots/sales.png",
    alt: "Sales dashboard tool in action",
    caption: "Sales Dashboard with real-time data",
  },
  {
    src: "/screenshots/mobile.png",
    alt: "Mobile responsive view of Legacy Analytics",
    caption: "Fully responsive on mobile",
  },
];

export default function Portfolio() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setTheme("dark");
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@300;400;500;600&family=Noto+Serif+JP:wght@400;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Inter', system-ui, sans-serif;
          transition: background 0.4s ease, color 0.4s ease;
          min-height: 100vh;
        }

        body.light {
          background: linear-gradient(180deg, #F5F1E8 0%, #EDE8DC 100%);
          color: #2D3319;
          --matcha: #6B8E4E;
          --matcha-dark: #4A6B32;
          --matcha-tint: rgba(107, 142, 78, 0.12);
          --text: #2D3319;
          --text-soft: #556B2F;
          --divider: rgba(107, 142, 78, 0.3);
          --card-bg: rgba(255, 255, 255, 0.5);
          --card-border: rgba(107, 142, 78, 0.25);
          --placeholder-bg: rgba(237, 232, 220, 0.8);
          --btn-primary-text: #F5F1E8;
          --bg: #F5F1E8;
        }

        body.dark {
          background: linear-gradient(180deg, #1A1F2E 0%, #0F1420 100%);
          color: #E8ECD8;
          --matcha: #A8D57C;
          --matcha-dark: #C4E39A;
          --matcha-tint: rgba(168, 213, 124, 0.15);
          --text: #E8ECD8;
          --text-soft: #A8D57C;
          --divider: rgba(168, 213, 124, 0.2);
          --card-bg: rgba(30, 40, 60, 0.5);
          --card-border: rgba(168, 213, 124, 0.2);
          --placeholder-bg: rgba(20, 30, 50, 0.6);
          --btn-primary-text: #0F1420;
          --bg: #0F1420;
        }

        .portfolio {
          max-width: 880px;
          margin: 0 auto;
          padding: 32px 24px 64px;
          min-height: 100vh;
        }

        /* === NAV === */
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--divider);
          margin-bottom: 48px;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-monogram {
          width: 36px;
          height: 36px;
          border: 1.5px solid var(--matcha);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Fraunces', serif;
          font-size: 13px;
          color: var(--matcha);
          font-weight: 700;
        }

        .nav-since {
          font-family: 'Fraunces', serif;
          font-size: 12px;
          color: var(--matcha);
          letter-spacing: 0.15em;
          font-style: italic;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .nav-link {
          background: none;
          border: none;
          font-family: 'Fraunces', serif;
          font-size: 13px;
          font-style: italic;
          color: var(--text-soft);
          cursor: pointer;
          transition: color 0.2s;
          padding: 4px 0;
        }

        .nav-link:hover {
          color: var(--matcha);
        }

        .theme-toggle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--matcha);
          background: transparent;
          color: var(--matcha);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: all 0.3s;
        }

        .theme-toggle:hover {
          background: var(--matcha);
          color: var(--bg);
        }

        /* === HERO === */
        .hero {
          text-align: center;
          margin-bottom: 56px;
        }

        .hero-eyebrow {
          font-family: 'Noto Serif JP', serif;
          font-size: 12px;
          color: var(--matcha);
          letter-spacing: 0.3em;
          margin-bottom: 16px;
        }

        .hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          line-height: 1.05;
          color: var(--text);
        }

        .hero-tagline {
          font-family: 'Fraunces', serif;
          font-size: clamp(1rem, 2.2vw, 1.15rem);
          color: var(--text-soft);
          font-style: italic;
          margin-bottom: 32px;
        }

        .hero-ctas {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.03em;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          border: none;
        }

        .btn-primary {
          background: var(--matcha);
          color: var(--btn-primary-text);
        }

        .btn-primary:hover {
          background: var(--matcha-dark);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text);
          border: 1.5px solid var(--matcha);
        }

        .btn-secondary:hover {
          background: var(--matcha-tint);
        }

        /* === DIVIDER === */
        .ornament {
          text-align: center;
          margin: 48px 0;
        }

        .ornament-line {
          display: inline-block;
          width: 40px;
          height: 1px;
          background: var(--matcha);
          vertical-align: middle;
        }

        .ornament-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--matcha);
          border-radius: 50%;
          margin: 0 12px;
          vertical-align: middle;
        }

        /* === SECTION === */
        .section {
          margin-bottom: 48px;
        }

        .section-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: var(--matcha);
          letter-spacing: 0.25em;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .section-body {
          font-family: 'Fraunces', serif;
          font-size: 16px;
          line-height: 1.75;
          color: var(--text);
        }

        .section-body p {
          margin-bottom: 12px;
        }

        .section-body em {
          color: var(--matcha-dark);
          font-style: italic;
        }

        /* === INFO GRID === */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 32px;
        }

        .info-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 8px;
          padding: 16px;
          text-align: center;
        }

        .info-label {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          color: var(--matcha);
          letter-spacing: 0.2em;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .info-value {
          font-family: 'Fraunces', serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
        }

        .info-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--matcha);
          margin: 8px auto 0;
          box-shadow: 0 0 8px rgba(107,142,78,0.4);
        }

        /* === PROJECT CARD === */
        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 28px;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-title {
          font-family: 'Fraunces', serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.01em;
        }

        .project-meta {
          font-family: 'Fraunces', serif;
          font-size: 12px;
          color: var(--matcha);
          font-style: italic;
        }

        .project-subtitle {
          font-family: 'Fraunces', serif;
          font-size: 15px;
          color: var(--text-soft);
          font-style: italic;
          margin-bottom: 24px;
        }

        /* === SCREENSHOTS === */
        .screenshot-wrap {
          margin-bottom: 24px;
        }

        .screenshot-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .screenshot-arrow {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid var(--matcha);
          background: var(--card-bg);
          color: var(--matcha);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          backdrop-filter: blur(4px);
        }

        .screenshot-arrow:hover {
          background: var(--matcha);
          color: var(--btn-primary-text);
          transform: scale(1.05);
        }

        .screenshot-frame {
          flex: 1;
          min-width: 0;
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: var(--placeholder-bg);
          border: 1px dashed var(--matcha);
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--matcha);
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          text-align: center;
          padding: 16px;
        }

        .screenshot-frame img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .screenshot-caption {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: var(--text-soft);
          text-align: center;
          margin-top: 12px;
          font-style: italic;
        }

        .screenshot-nav {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 12px;
        }

        .screenshot-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--card-border);
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0;
        }

        .screenshot-dot.active {
          background: var(--matcha);
          width: 24px;
          border-radius: 4px;
        }

        /* === PROJECT DETAILS === */
        .project-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .detail-block {
          padding-left: 12px;
          border-left: 2px solid var(--matcha);
        }

        .detail-label {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          color: var(--matcha);
          letter-spacing: 0.2em;
          margin-bottom: 6px;
          font-weight: 500;
        }

        .detail-body {
          font-family: 'Fraunces', serif;
          font-size: 13px;
          color: var(--text);
          line-height: 1.65;
        }

        .tech-section {
          padding-top: 20px;
          border-top: 1px solid var(--card-border);
        }

        .tech-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tech-tag {
          background: var(--matcha-tint);
          color: var(--matcha-dark);
          padding: 5px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }

        /* === SKILLS === */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .skill-group-label {
          font-family: 'Fraunces', serif;
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 6px;
        }

        .skill-group-body {
          font-family: 'Fraunces', serif;
          font-size: 13px;
          color: var(--text-soft);
          line-height: 1.65;
        }

        /* === CONTACT === */
        .contact {
          text-align: center;
          padding: 32px 0;
          border-top: 1px solid var(--divider);
          margin-top: 48px;
        }

        .contact-links {
          display: flex;
          gap: 24px;
          justify-content: center;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .contact-link {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--text);
          text-decoration: none;
          padding: 8px 4px;
          border-bottom: 1px solid transparent;
          transition: all 0.2s;
        }

        .contact-link:hover {
          color: var(--matcha);
          border-bottom-color: var(--matcha);
        }

        .footer-tagline {
          font-family: 'Fraunces', serif;
          font-size: 12px;
          color: var(--matcha);
          font-style: italic;
          margin-top: 20px;
        }

        /* === RESPONSIVE === */
        @media (max-width: 700px) {
          .portfolio { padding: 20px 16px 48px; }
          .nav-links { gap: 12px; }
          .nav-link { font-size: 12px; }
          .info-grid { grid-template-columns: 1fr; }
          .project-details { grid-template-columns: 1fr; }
          .skills-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.2rem; }
          .screenshot-arrow {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }
          .screenshot-container { gap: 8px; }
        }
      `}</style>

      <div className="portfolio">
        {/* NAV */}
        <nav className="nav">
          <div className="nav-brand">
            <div className="nav-monogram">CL</div>
            <span className="nav-since">— since 2026</span>
          </div>
          <div className="nav-links">
            <button className="nav-link" onClick={() => scrollToSection("about")}>about</button>
            <button className="nav-link" onClick={() => scrollToSection("work")}>work</button>
            <button className="nav-link" onClick={() => scrollToSection("skills")}>skills</button>
            <button className="nav-link" onClick={() => scrollToSection("contact")}>contact</button>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? "☾" : "☀"}
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-eyebrow">— ポートフォリオ · PORTFOLIO —</div>
          <h1 className="hero-title">Cesar Lopez</h1>
          <p className="hero-tagline">Business analyst · turning data into solutions for the businesses that need them most</p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => scrollToSection("work")}>
              View work ↓
            </button>
            <a className="btn-secondary" href="/Cesar_Lopez_Resume.pdf" download>
              Download resume
            </a>
          </div>
        </section>

        {/* ORNAMENT */}
        <div className="ornament">
          <span className="ornament-line" />
          <span className="ornament-dot" />
          <span className="ornament-line" />
        </div>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="section-label">— 01 · ABOUT</div>
          <div className="section-body">
            <p>
              A Business Analytics student at the University of Texas Rio Grande Valley, studying at the <em>Robert C. Vackar College of Business & Entrepreneurship</em>. I focus on turning small business data into practical decisions.
            </p>
            <p>
              Bilingual in English and Spanish, currently learning Japanese. Membership Director on the 2026 Side Hustle Society Board of Directors at UTRGV.
            </p>
          </div>
        </section>

        {/* INFO GRID */}
        <div className="info-grid">
          <div className="info-card">
            <div className="info-label">STATUS</div>
            <div className="info-value">Available</div>
            <div className="info-dot" />
          </div>
          <div className="info-card">
            <div className="info-label">LOCATION</div>
            <div className="info-value">Edinburg, TX</div>
          </div>
          <div className="info-card">
            <div className="info-label">LANGUAGES</div>
            <div className="info-value">EN · ES · 日本語</div>
          </div>
        </div>

        {/* ORNAMENT */}
        <div className="ornament">
          <span className="ornament-line" />
          <span className="ornament-dot" />
          <span className="ornament-line" />
        </div>

        {/* FEATURED WORK */}
        <section className="section" id="work">
          <div className="section-label">— 02 · FEATURED WORK</div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-title">Legacy Analytics</div>
              <div className="project-meta">2026 · rgvlegacy.com</div>
            </div>
            <div className="project-subtitle">
              Giving family-owned businesses the analytics tools that only corporations used to have — so they can compete on the same level.
            </div>

            {/* SCREENSHOT CAROUSEL */}
            <div className="screenshot-wrap">
              <div className="screenshot-container">
                <button
                  className="screenshot-arrow"
                  onClick={prevScreenshot}
                  aria-label="Previous screenshot"
                >
                  ←
                </button>
                <div className="screenshot-frame">
                  <img
                    src={screenshots[currentScreenshot].src}
                    alt={screenshots[currentScreenshot].alt}
                  />
                </div>
                <button
                  className="screenshot-arrow"
                  onClick={nextScreenshot}
                  aria-label="Next screenshot"
                >
                  →
                </button>
              </div>
              <div className="screenshot-caption">
                {screenshots[currentScreenshot].caption}
              </div>
              <div className="screenshot-nav">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    className={`screenshot-dot ${i === currentScreenshot ? "active" : ""}`}
                    onClick={() => setCurrentScreenshot(i)}
                    aria-label={`View screenshot ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* PROJECT DETAILS */}
            <div className="project-details">
              <div className="detail-block">
                <div className="detail-label">◦ PROBLEM</div>
                <div className="detail-body">
                  Family businesses run on gut instinct because enterprise analytics tools are built for corporations — expensive, complex, and out of reach. Meanwhile, chains use data to outmaneuver them at every turn.
                </div>
              </div>
              <div className="detail-block">
                <div className="detail-label">◦ APPROACH</div>
                <div className="detail-body">
                  Interviewed local RGV business owners to understand how they actually make decisions. Designed tools around the data they already have — not the data enterprise software expects them to collect.
                </div>
              </div>
              <div className="detail-block">
                <div className="detail-label">◦ SOLUTION</div>
                <div className="detail-body">
                  A bilingual platform with 7 essential tools — sales, cash flow, expenses, taxes, funding, succession, reviews — in one place. Simple enough for a first-time user. Powerful enough to compete.
                </div>
              </div>
              <div className="detail-block">
                <div className="detail-label">◦ IMPACT</div>
                <div className="detail-body">
                  Created a pathway for small business owners who want to level up but never had the tools. Pivoted from gated tiers to a 14-day free trial after user feedback revealed conversion friction was the real barrier — not price.
                </div>
              </div>
            </div>

            {/* TECH STACK */}
            <div className="tech-section">
              <div className="detail-label" style={{marginBottom: "10px"}}>◦ TECH STACK</div>
              <div className="tech-tags">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Supabase</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Recharts</span>
                <span className="tech-tag">Tailwind</span>
              </div>
            </div>
          </div>
        </section>

        {/* ORNAMENT */}
        <div className="ornament">
          <span className="ornament-line" />
          <span className="ornament-dot" />
          <span className="ornament-line" />
        </div>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-label">— 03 · SKILLS</div>
          <div className="skills-grid">
            <div>
              <div className="skill-group-label">Data & Analytics</div>
              <div className="skill-group-body">SQL, Excel (advanced), Tableau, Power BI, Python, R</div>
            </div>
            <div>
              <div className="skill-group-label">Databases</div>
              <div className="skill-group-body">Supabase (PostgreSQL), Microsoft Access, Data Modeling, Data Cleaning</div>
            </div>
            <div>
              <div className="skill-group-label">Development</div>
              <div className="skill-group-body">TypeScript, Next.js, Recharts, Git</div>
            </div>
            <div>
              <div className="skill-group-label">Analytical</div>
              <div className="skill-group-body">Business Insights, Pattern Recognition, KPI Development, Dashboard Reporting</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="section-label" style={{marginBottom: "20px"}}>— 04 · GET IN TOUCH</div>
          <div className="contact-links">
            <a className="contact-link" href="mailto:celopez1995@gmail.com">Email</a>
            <a className="contact-link" href="https://linkedin.com/in/ceezertheking" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="contact-link" href="https://github.com/MidnightGato" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="contact-link" href="/Cesar_Lopez_Resume.pdf" download>Resume</a>
          </div>
          <div className="footer-tagline">— Made with a purpose in the Rio Grande Valley —</div>
        </section>
      </div>
    </>
  );
}