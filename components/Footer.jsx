const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Liverpool", href: "/events/liverpool-satsang-evening" },
  { label: "Manchester", href: "/events/manchester-gita-festival" },
  // { label: "Schedule", href: "#schedule" },
  { label: "Bradford", href: "/events/yorkshire-gita-festival" },
  { label: "London", href: "/events/london-shri-krishna-janmashtami-shobha-yatra" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#fbf3e4] py-14 text-indigo-deep">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-gold bg-cream/90">
                <img
                  src="/logo.png"
                  alt="GIEO GITA logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-maroon-dark">GIEO GITA</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-indigo-deep/70">
                  Manchester Gita Festival
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-indigo-deep/75">
              Global Inspiration &amp; Enlightenment Organization of Bhagwad Gita —
              carrying the wisdom of the Gita to communities across the world.
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-black">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-sm text-indigo-deep/80 hover:text-maroon">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-black">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://www.gieogita.org.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-sm text-black hover:text-black"
                >
                  gieogita.org.uk
                </a>
              </li>
             
                <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-sm text-black hover:text-black"
                >
                 info@gieogita.org.uk
                </a>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <a
                  href="https://facebook.com/GIEOGITAUK"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 transition-colors hover:border-gold hover:text-maroon"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M10.5 5H12V2.6H10.2C8.6 2.6 7.4 3.8 7.4 5.4V6.8H6V9.2h1.4V13.4h2.4V9.2H11.5L11.8 6.8H9.8V5.5C9.8 5.2 10.1 5 10.5 5Z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/gieo_gita_uk"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/20 transition-colors hover:border-gold hover:text-maroon"
                >
                  
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="11.3" cy="4.7" r="0.7" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-center md:flex-row md:text-left">
          <p className="font-body text-xs text-indigo-deep/70">
            © 2026 GIEO Gita. All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
}
