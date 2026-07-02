export default function About() {
  return (
    <section id="about" className="relative bg-cream-panel py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            About the Festival
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-indigo-deep md:text-5xl">
            A gathering rooted in the Gita,
            <span className="text-maroon"> built for the world.</span>
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-ink/75 md:text-lg">
            The Manchester Gita Festival brings together seekers, scholars, families
            and children for five days of reflection and celebration. Organised by{" "}
            <span className="font-semibold text-maroon-dark">GIEO Gita</span> — the
            Global Inspiration &amp; Enlightenment Organization of Bhagwad Gita —
            the festival carries forward a tradition of sharing the Gita&rsquo;s
            teachings across communities and continents.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/75 md:text-lg">
            From quiet morning satsang to an evening of music and devotion, every
            moment is shaped around one intention: timeless values, offered freely,
            in the spirit of global harmony.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.gieogita.org.uk"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-maroon/30 px-6 py-2.5 font-body text-sm font-semibold text-maroon-dark transition-colors hover:bg-maroon/5"
            >
              www.gieogita.org.uk
            </a>
            <a
              href="https://www.manchestergitafestival.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-maroon/30 px-6 py-2.5 font-body text-sm font-semibold text-maroon-dark transition-colors hover:bg-maroon/5"
            >
              www.manchestergitafestival.com
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {[
            {
              title: "Founded on Wisdom",
              body: "Every session is grounded in the verses of the Bhagavad Gita, brought to life through discourse and dialogue.",
            },
            {
              title: "Community First",
              body: "Open to families, students, and elders alike — a shared space for reflection across generations.",
            },
            {
              title: "Global Reach",
              body: "Part of a worldwide series of Gita gatherings connecting communities from India to the UK.",
            },
            {
              title: "Free Spirit",
              body: "Rooted in seva, the festival is offered in a spirit of service to the wider Manchester community.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gold/30 bg-cream p-6 shadow-sm transition-shadow hover:shadow-gold"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-maroon-gradient font-devanagari text-gold-light">
                ॐ
              </div>
              <h3 className="font-display text-lg font-semibold text-indigo-deep">
                {card.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
