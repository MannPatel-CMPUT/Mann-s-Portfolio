"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

function LinkList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="site-nav__links">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} onClick={onNavigate}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateScrollState = () => {
      const nextValue = window.scrollY > 24;
      setIsScrolled((currentValue) => (currentValue === nextValue ? currentValue : nextValue));
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const headerClassName = `site-nav${isScrolled ? " site-nav--scrolled" : ""}`;

  return (
    <header className={headerClassName}>
      <div className="site-nav__bar">
        <Link className="site-nav__monogram" href="#about" aria-label="Mann Patel, home">
          MP
        </Link>

        <nav className="site-nav__desktop" aria-label="Primary navigation">
          <LinkList />
        </nav>

        <button
          ref={menuButtonRef}
          className="site-nav__toggle"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="site-nav__toggle-lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <nav
        className="site-nav__mobile"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
      >
        <LinkList onNavigate={() => setIsMenuOpen(false)} />
      </nav>
    </header>
  );
}
