const DAYS = [
  {
    date: "Aug 25",
    day: "Day One",
    title: "Inauguration & Opening Satsang",
    desc: "Lamp-lighting ceremony, welcome address, and an evening satsang setting the tone for the festival.",
  },
  {
    date: "Aug 26",
    day: "Day Two",
    title: "Gita Conference",
    desc: "Scholarly discourse and panel dialogue exploring the Bhagavad Gita's teachings in daily life.",
  },
  {
    date: "Aug 27",
    day: "Day Three",
    title: "Cultural Program",
    desc: "An afternoon of dance, drama and music performed by children and youth of the community.",
  },
  {
    date: "Aug 28",
    day: "Day Four",
    title: "Devotional Gathering",
    desc: "An evening of kirtan, bhajan and aarti, lit by rows of diyas beneath the Manchester sky.",
  },
  {
    date: "Aug 29",
    day: "Day Five",
    title: "Closing Ceremony & Mahaprasad",
    desc: "Closing blessings, vote of thanks, and a shared mahaprasad bringing the festival to its close.",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative bg-cream-panel py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            25 – 30 August 2026
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-indigo-deep md:text-5xl">
            Five Days of the Festival
          </h2>
        </div>

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gold/40 md:left-1/2 md:-ml-px" />

          <div className="space-y-10 md:space-y-14">
            {DAYS.map((d, i) => {
              const isRight = i % 2 === 1;
              return (
                <div key={d.date} className="relative md:grid md:grid-cols-2 md:gap-10">
                  {/* Marker */}
                  <div className="absolute left-0 top-0 z-10 md:left-1/2 md:-translate-x-1/2">
                    <span className="flex h-14 w-14 flex-col items-center justify-center rounded-full border-2 border-gold bg-cream text-maroon shadow-gold">
                      <span className="text-[9px] font-semibold uppercase leading-none">
                        {d.date.split(" ")[0]}
                      </span>
                      <span className="font-display text-base font-bold leading-none">
                        {d.date.split(" ")[1]}
                      </span>
                    </span>
                  </div>

                  {/* Spacer column for alternating layout on desktop */}
                  {isRight && <div className="hidden md:block" />}

                  <div
                    className={`ml-20 rounded-2xl border border-gold/30 bg-cream p-6 shadow-sm md:ml-0 ${
                      isRight ? "md:pl-14 md:text-left" : "md:pr-14 md:text-right"
                    }`}
                  >
                    <p className="font-body text-xs font-semibold uppercase tracking-wide text-saffron">
                      {d.day}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-indigo-deep">
                      {d.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">
                      {d.desc}
                    </p>
                  </div>

                  {!isRight && <div className="hidden md:block" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
