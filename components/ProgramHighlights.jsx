import DiyaDivider from "./DiyaDivider";

const PROGRAMS = [
  {
    name: "Satsang",
    desc: "Morning gatherings of shared reflection — chanting, silence, and discourse on the Gita's verses.",
    color: "from-[#2E5266] to-[#1E3A47]",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M13 8v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Conference",
    desc: "Scholarly discourse and dialogue with spiritual leaders exploring the Gita's relevance today.",
    color: "from-saffron to-[#B5501A]",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="6" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 20h8M13 18v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Cultural Program",
    desc: "Dance, drama and music from young performers, bringing the Gita's stories vividly to life.",
    color: "from-[#6B3FA0] to-[#4A2A70]",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path
          d="M8 6c0 4-3 4-3 8s3 4 3 8M18 6c0 4 3 4 3 8s-3 4-3 8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="13" cy="13" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: "Devotional Gatherings",
    desc: "Evenings of kirtan and aarti under lamplight, closing each day in collective devotion.",
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
];

export default function ProgramHighlights() {
  return (
    <section id="program" className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            Five Days, Four Pillars
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-indigo-deep md:text-5xl">
            What to Expect
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/70 md:text-lg">
            Each day of the festival weaves together these four pillars — quiet
            reflection, thoughtful dialogue, joyful culture, and heartfelt devotion.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-cream-panel p-7 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-gold"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${p.color} text-cream`}
              >
                {p.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-indigo-deep">
                {p.name}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink/65">
                {p.desc}
              </p>
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/10 transition-transform group-hover:scale-125" />
            </div>
          ))}
        </div>

        <DiyaDivider className="mt-16" />
      </div>
    </section>
  );
}
