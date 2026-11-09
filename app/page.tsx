import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
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
              </div>
            </div>
          </div>
          <p className="hero__scroll" aria-hidden="true">
            <span>Scroll</span>
            <span className="hero__scroll-line" />
            <span>↓</span>
          </p>
        </section>
      </main>
    </>
  );
}
