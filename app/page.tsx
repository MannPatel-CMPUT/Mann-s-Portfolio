import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { GitHubLink } from "@/components/github-link";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">
        <section className="hero" id="about" aria-labelledby="hero-title">
          <Image
            className="hero__image"
            src="/images/nyc-skyline.jpg"
            alt="Lower Manhattan and the Brooklyn Bridge across the East River beneath an overcast sky"
            fill
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="hero__veil" aria-hidden="true" />
          <div className="hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">Computing Science · University of Alberta</p>
              <h1 className="hero__title" id="hero-title">
                Mann Patel
              </h1>
              <p className="hero__role">Software Developer</p>
              <p className="hero__description">
                Computing Science student at the University of Alberta, building full-stack
                applications, AI-powered systems, and practical tools that solve real-world
                problems.
              </p>
              <div className="hero__actions">
                <ActionLink href="#projects" variant="primary">
                  View projects
                </ActionLink>
                <ActionLink href="#contact" variant="secondary">
                  Get in touch
                </ActionLink>
                <div className="hero__social">
                  <GitHubLink />
                </div>
              </div>
            </div>
          </div>
          <p className="hero__scroll" aria-hidden="true">
            <span>Scroll</span>
            <span className="hero__scroll-line" />
            <span>↓</span>
          </p>
        </section>

        <section className="about-section" id="about-details" aria-labelledby="about-heading">
          <div className="about-section__inner">
            <header className="about-section__header">
              <p className="eyebrow">01 — About</p>
              <h2 className="about-section__title" id="about-heading">
                Building things that <em>actually matter.</em>
              </h2>
            </header>

            <div className="about-section__grid">
              <p className="about-section__intro">
                I’m a software developer and Computing Science student at the University of Alberta.
                I’m interested in full-stack applications, backend engineering, cloud infrastructure,
                AI/ML systems, and software automation.
              </p>

              <ul className="about-section__interests" aria-label="Areas of interest">
                <li>
                  <h3>Backend &amp; Cloud Engineering</h3>
                  <p>Backend engineering and cloud infrastructure.</p>
                </li>
                <li>
                  <h3>Full-Stack Development</h3>
                  <p>Full-stack applications across client and server.</p>
                </li>
                <li>
                  <h3>AI &amp; Software Automation</h3>
                  <p>AI/ML systems and practical software automation.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p>© 2026 Mann Patel</p>
        <p>Edmonton, AB · Canada</p>
      </footer>
    </>
  );
}
