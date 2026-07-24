export default function Venue() {
  return (
    <section id="venue" className="relative bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:px-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <img
            src="/c.png"
            alt="Venue preview"
            className="h-auto w-full rounded-[1.5rem] object-cover shadow-gold"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            Venue
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-indigo-deep md:text-5xl">
            In the Heart of Manchester
          </h2>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-ink/75 md:text-lg">
            The Manchester Gita Festival will be held across a central Manchester
            venue, welcoming attendees from across the UK and beyond. Full venue
            details, directions, and accommodation guidance will be shared with
            registered guests closer to the date.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gold/30 bg-cream-panel p-5">
              <p className="font-display text-lg font-semibold text-maroon-dark">When</p>
              <p className="mt-1 font-body text-sm text-ink/70">25 – 30 August 2026</p>
            </div>
            <div className="rounded-xl border border-gold/30 bg-cream-panel p-5">
              <p className="font-display text-lg font-semibold text-maroon-dark">Where</p>
              <p className="mt-1 font-body text-sm text-ink/70">Manchester, United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
