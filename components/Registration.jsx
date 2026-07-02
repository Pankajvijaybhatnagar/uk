export default function Registration() {
  return (
    <section id="register" className="relative overflow-hidden bg-maroon-gradient py-20 text-cream md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-10 divider-diyas" />
      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-10">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
          Save the Date
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">
          25<sup className="text-2xl md:text-3xl">th</sup> — 29<sup className="text-2xl md:text-3xl">th</sup>{" "}
          August 2026
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-cream/80 md:text-lg">
          Reserve your place at the Manchester Gita Festival and join a community
          celebrating five days of wisdom, culture, and devotion.
        </p>

        {/* <div className="mx-auto mt-12 flex max-w-lg flex-col items-center gap-8 rounded-3xl border border-gold/40 bg-cream/10 p-8 backdrop-blur-sm sm:flex-row sm:text-left">
          <QRPlaceholder />
          <div>
            <p className="font-display text-xl font-semibold text-gold-light">
              Scan to Register
            </p>
            <p className="mt-2 font-body text-sm text-cream/75">
              Point your camera at the code to open the registration form, or use
              the button below.
            </p>
            <a
              href="https://www.manchestergitafestival.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-gold px-7 py-3 font-body text-sm font-semibold text-maroon-dark shadow-gold transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Register Now
            </a>
          </div>
        </div> */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-body text-sm text-cream/80">
          <a href="https://www.gieogita.org.uk" target="_blank" rel="noreferrer" className="hover:text-gold-light">
            www.gieogita.org.uk
          </a>
          <span className="text-gold/50">|</span>
          <a href="https://www.manchestergitafestival.com" target="_blank" rel="noreferrer" className="hover:text-gold-light">
            www.manchestergitafestival.com
          </a>
        </div>
      </div>
    </section>
  );
}

// Deterministic decorative stand-in QR pattern (not a functional code) styled to match the brand.
const QR_PATTERN = [
  1,1,1,1,1,1,1, 0,1,0,0,1,0,1, 1,0,0,1,0,0,1, 1,0,1,0,0,1,1,
  1,0,0,1,0,0,1, 0,1,1,0,1,1,0, 1,1,1,1,1,1,1,
];

function QRPlaceholder() {
  return (
    <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl border border-gold/50 bg-cream p-3 shadow-gold">
      <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-[2px]">
        {QR_PATTERN.map((filled, i) => (
          <div
            key={i}
            className={`rounded-[1px] ${filled ? "bg-maroon" : "bg-transparent"}`}
          />
        ))}
      </div>
    </div>
  );
}
