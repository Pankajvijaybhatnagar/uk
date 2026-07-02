export default function GuideProfile() {
  return (
    <section id="guide" className="relative overflow-hidden bg-maroon-gradient py-20 text-cream md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-10 divider-diyas" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Portrait frame (illustrative, no photo) */}
        <div className="mx-auto w-full max-w-sm">
          <div className="relative rounded-[2rem] border-2 border-gold/50 bg-cream/5 p-3 shadow-gold backdrop-blur-sm">
            <div className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] border border-gold/40 bg-gradient-to-b from-cream/10 to-transparent">
              <GuideMonogram />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-gold/50 bg-maroon-dark px-6 py-2 shadow-gold">
              <p className="whitespace-nowrap font-display text-sm font-semibold tracking-wide text-gold-light">
                Shri Krishan Kripa
              </p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Spiritual Guide
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
            Under the Grace of
            <span className="block font-script text-5xl font-normal text-gold-light md:text-6xl">
              Shri Krishan Kripa
            </span>
          </h2>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-cream/85 md:text-lg">
            The festival is graced by the presence and blessings of Shri Krishan
            Kripa, whose guidance has shaped GIEO Gita&rsquo;s mission of carrying
            the Bhagavad Gita&rsquo;s teachings to communities across the world.
          </p>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-cream/85 md:text-lg">
            Through satsang and conference sessions across the five days, attendees
            will have the opportunity to receive discourse, ask questions, and
            take part in collective moments of reflection and devotion.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-xl border border-gold/40 bg-cream/10 px-5 py-4">
              <p className="font-display text-2xl font-bold text-gold-light">GIEO GITA</p>
              <p className="font-body text-xs uppercase tracking-wide text-cream/70">
                Global Inspiration &amp; Enlightenment Organization of Bhagwad Gita
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuideMonogram() {
  return (
  <>
  <img
    src="/b.png"
    alt="Guide Monogram"
    className="w-full h-full object-cover"
  />

  </>
  );
}
