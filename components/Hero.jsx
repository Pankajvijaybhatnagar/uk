import DiyaDivider from "./DiyaDivider";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pb-16 pt-28 md:pb-24 md:pt-36"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-maroon/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Copy column */}
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream-panel px-4 py-1.5 shadow-sm">
            <span className="font-devanagari text-sm text-maroon">ॐ</span>
            <span className="font-body text-xs font-medium uppercase tracking-[0.18em] text-maroon-dark">
              Graced by Gita Manishi Swami Shri Gyananand ji Maharaj
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] text-indigo-deep sm:text-6xl">
            Manchester
            <span className="block bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent">
              Gita Festival
            </span>
          </h1>

          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/75 md:text-lg">
            Five days of satsang, scholarly conference, cultural celebration, and
            devotional gathering — bringing the wisdom of the Bhagavad Gita to the
            heart of Manchester.
          </p>

          <div className="mt-3 font-script text-3xl text-maroon md:text-4xl">
            Spiritual Wisdom. Timeless Values. Global Harmony.
          </div>

          {/* Date badge */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-gold/50 bg-cream-panel px-5 py-3 shadow-gold">
              <div className="flex h-11 w-11 flex-col items-center justify-center rounded-lg bg-maroon-gradient text-cream">
                <span className="text-[10px] font-semibold uppercase leading-none">Aug</span>
                <span className="font-display text-lg font-bold leading-none">25</span>
              </div>
              <div className="leading-tight">
                <p className="font-body text-sm font-semibold text-indigo-deep">
                  25 – 30 August 2026
                </p>
                <p className="font-body text-xs text-ink/60">Manchester, United Kingdom</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="rounded-full bg-maroon px-8 py-3.5 font-body text-sm font-semibold text-cream shadow-gold transition-transform hover:-translate-y-0.5 hover:bg-maroon-light"
            >
              Reserve Your Place
            </a>
            <a
              href="#program"
              className="rounded-full border border-maroon/30 px-8 py-3.5 font-body text-sm font-semibold text-maroon-dark transition-colors hover:bg-maroon/5"
            >
              Explore the Program
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8 border-t border-gold/30 pt-6">
            {[
              ["5", "Days of Celebration"],
              ["4", "Signature Programs"],
              ["1", "Global Community"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-bold text-maroon">{num}</p>
                <p className="font-body text-xs uppercase tracking-wide text-ink/60">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration column */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative rounded-[2rem] border border-gold/30 bg-cream-panel p-6 shadow-gold">
            <HeroIllustration />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-gold/40 bg-maroon-gradient px-5 py-3 shadow-gold sm:block">
            <p className="font-script text-2xl text-gold-light">Save the Date</p>
          </div>
        </div>
      </div>

      <div className="relative mt-16 px-5 md:px-10">
        <DiyaDivider />
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    // <svg viewBox="0 0 480 420" className="w-full" role="img" aria-label="Manchester skyline blending into a temple silhouette beneath a rising sun">
    //   <defs>
    //     <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
    //       <stop offset="0%" stopColor="#F3E5C4" />
    //       <stop offset="100%" stopColor="#FBF3E4" />
    //     </linearGradient>
    //     <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
    //       <stop offset="0%" stopColor="#E4C878" />
    //       <stop offset="70%" stopColor="#C89B3C" stopOpacity="0.6" />
    //       <stop offset="100%" stopColor="#C89B3C" stopOpacity="0" />
    //     </radialGradient>
    //   </defs>

    //   <rect width="480" height="420" fill="url(#skyGrad)" rx="24" />
    //   <circle cx="240" cy="150" r="110" fill="url(#sunGrad)" />
    //   <circle cx="240" cy="150" r="52" fill="#F3E5C4" stroke="#C89B3C" strokeWidth="2" />

    //   {/* Manchester skyline silhouettes */}
    //   <g fill="#332166" opacity="0.85">
    //     <rect x="20" y="260" width="26" height="120" />
    //     <rect x="52" y="230" width="20" height="150" />
    //     <rect x="80" y="270" width="30" height="110" />
    //     <polygon points="380,380 380,240 396,220 412,240 412,380" />
    //     <rect x="416" y="260" width="24" height="120" />
    //     <rect x="360" y="290" width="18" height="90" />
    //   </g>

    //   {/* Central temple shikhara silhouette merging with skyline */}
    //   <g fill="#6E1423">
    //     <polygon points="240,190 220,300 260,300" />
    //     <rect x="205" y="300" width="70" height="80" />
    //     <polygon points="240,170 232,192 248,192" fill="#DD6B20" />
    //     <rect x="234" y="160" width="12" height="14" fill="#C89B3C" />
    //   </g>

    //   {/* Ground line */}
    //   <rect x="0" y="380" width="480" height="4" fill="#C89B3C" opacity="0.5" />

    //   {/* Flute silhouette accent (Krishna motif) */}
    //   <g transform="translate(150,340) rotate(-8)" stroke="#241548" strokeWidth="4" strokeLinecap="round">
    //     <line x1="0" y1="0" x2="90" y2="0" />
    //     <circle cx="18" cy="0" r="1.6" fill="#241548" />
    //     <circle cx="34" cy="0" r="1.6" fill="#241548" />
    //     <circle cx="50" cy="0" r="1.6" fill="#241548" />
    //   </g>

    //   {/* Om accent */}
    //   <text x="240" y="160" textAnchor="middle" fontSize="20" fill="#8C2135" fontFamily="var(--font-devanagari)">
    //     ॐ
    //   </text>
    // </svg>
    <img
      src="/a.jpeg"
      alt="Manchester skyline blending into a temple silhouette beneath a rising sun"
      className="w-full rounded-[2rem] object-cover"
    />
  );
}
