"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Program", href: "/" },
  { label: "Guide", href: "/" },
  // { label: "Schedule", href: "#schedule" },
  { label: "Venue", href: "/" },
  { label: "Date", href: "/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(74,13,24,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-gold bg-cream/90 shadow-gold sm:h-14 sm:w-14">
            <img
              src="/logo.png"
              alt="GIEO GITA logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold tracking-wide text-maroon-dark md:text-xl">
              GIEO GITA
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-deep/70 md:text-[11px]">
              Manchester Gita Festival
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium tracking-wide text-ink/80 transition-colors hover:text-maroon"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#register"
            className="rounded-full bg-maroon px-6 py-2.5 font-body text-sm font-semibold text-cream shadow-gold transition-transform hover:-translate-y-0.5 hover:bg-maroon-light"
          >
            Save Your Seat
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-maroon/20 text-maroon lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gold/30 bg-cream px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-sm font-medium text-ink/80 hover:bg-gold/10 hover:text-maroon"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-maroon px-6 py-3 text-center font-body text-sm font-semibold text-cream"
            >
              Save Your Seat
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
