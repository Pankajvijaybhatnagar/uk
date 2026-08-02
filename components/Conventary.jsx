import DiyaDivider from "./DiyaDivider";

const SCHEDULE = [
  {
    name: "Gita Yagya",
    time: "8:00 AM",
    desc: "Each morning begins with the sacred Gita Yagya, a Vedic fire ceremony offered in devotion and remembrance.",
    color: "from-maroon to-maroon-dark",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M13 4c1 2 3 3.5 3 6.2 0 1.9-1.3 3.3-3 3.3s-3-1.4-3-3.3C10 7.5 12 6 13 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <ellipse cx="13" cy="19" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: "Breakfast",
    time: "After Yagya",
    desc: "Following the Yagya, devotees are warmly invited to join together for breakfast in a spirit of fellowship.",
    color: "from-saffron to-[#B5501A]",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="6" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 20h8M13 18v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProgramHighlights() {
  return (
    <section id="program" className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Content */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
              Gita Festival
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-indigo-deep md:text-5xl">
              Gita Yagya{" "}
              <span className="text-maroon">25th – 29th August 2026</span>
            </h2>

            <p className="mt-4 font-body text-base leading-relaxed text-ink/70 md:text-lg">
              Join us each morning for the sacred Gita Yagya, a Vedic fire
              ceremony held daily at 8am, followed by breakfast in the spirit
              of fellowship and devotion.
            </p>

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-gold/30 bg-cream-panel px-5 py-4 shadow-sm">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="mt-0.5 shrink-0 text-saffron"
              >
                <path
                  d="M11 20s7-6.2 7-11.6A7 7 0 1 0 4 8.4C4 13.8 11 20 11 20Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="11" cy="8.4" r="2.4" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <p className="font-body text-sm leading-relaxed text-ink/75 md:text-base">
                For information on daily location, please contact Aneet Kapoor
                at +44 7779 159353.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {SCHEDULE.map((p) => (
                <div
                  key={p.name}
                  className="group flex items-start gap-4 rounded-2xl border border-gold/30 bg-cream-panel p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-gold"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-cream`}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h3 className="font-display text-lg font-semibold text-indigo-deep">
                        {p.name}
                      </h3>
                      <span className="font-body text-xs font-semibold uppercase tracking-wide text-saffron">
                        {p.time}
                      </span>
                    </div>
                    <p className="mt-1 font-body text-sm leading-relaxed text-ink/65">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10" />
            <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-saffron/10" />
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-cream-panel p-3 shadow-gold">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="gita-yagya.jpeg"
                  alt="Gita Yagya"
                  className="aspect-[1/1] w-full object-cover"
                />
              </div>
            
            </div>
          </div>
        </div>

     
      </div>
    </section>
  );
}