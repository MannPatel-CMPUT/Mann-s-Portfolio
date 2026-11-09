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
            src="/images/owner-supplied/nyc-skyline-under-dramatic-clouds.png"
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

        <section className="city-gallery" aria-labelledby="city-gallery-heading">
          <div className="city-gallery__inner">
            <header className="city-gallery__header">
              <p className="eyebrow">New York · In focus</p>
              <h2 className="city-gallery__title" id="city-gallery-heading">
                Details of a <em>city.</em>
              </h2>
              <p className="city-gallery__description">
                A few views of the places and everyday scenes behind the skyline.
              </p>
            </header>
            <div className="city-gallery__grid">
              <figure className="city-gallery__item city-gallery__item--workspace">
                <Image
                  src="/images/owner-supplied/workspace-laptop.png"
                  alt="A laptop and notebook on a desk overlooking the New York skyline"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <figcaption>At the desk</figcaption>
              </figure>
              <figure className="city-gallery__item city-gallery__item--bridge">
                <Image
                  src="/images/owner-supplied/brooklyn-bridge-detail.png"
                  alt="Stone tower and suspension cables of the Brooklyn Bridge beneath a cloudy sky"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <figcaption>Brooklyn Bridge</figcaption>
              </figure>
              <figure className="city-gallery__item city-gallery__item--street">
                <Image
                  src="/images/owner-supplied/rainy-midtown-street.png"
                  alt="Rainy Manhattan street with yellow taxis and autumn trees"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <figcaption>After the rain</figcaption>
              </figure>
              <figure className="city-gallery__item city-gallery__item--brick">
                <Image
                  src="/images/owner-supplied/brick-fire-escape.png"
                  alt="Fire escape on a red brick New York apartment building"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <figcaption>Brick &amp; iron</figcaption>
              </figure>
              <figure className="city-gallery__item city-gallery__item--subway">
                <Image
                  src="/images/owner-supplied/subway-entrance.png"
                  alt="Subway entrance framed by stonework and autumn trees"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <figcaption>Street level</figcaption>
              </figure>
              <figure className="city-gallery__item city-gallery__item--tower">
                <Image
                  src="/images/owner-supplied/water-tower-skyline.png"
                  alt="Rooftop water tower with the Empire State Building in the background"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <figcaption>Above the rooftops</figcaption>
              </figure>
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
