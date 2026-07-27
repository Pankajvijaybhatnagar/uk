// app/events/[slug]/page.jsx
//
// ONE page template shared by every event. Next.js calls this once per slug
// (see generateStaticParams below) — only the data from lib/event-data.js changes.
//
// UPDATED: hero shows a SQUARE creative image (1080x1080) as a framed card.
// UPDATED: added optional sections — Programme, Coach Travel, Venue Information,
// FAQs, and Closing Message — all driven by optional fields on the event object.
// UPDATED: every field that isn't guaranteed to exist on every event (registrationLink,
// heroImage, shortDesc, body, highlights, date/time/venue, gallery, etc.) is now
// individually guarded, so missing content simply doesn't render — no empty
// headings, no broken buttons/links, no blank boxes. No new CSS was introduced;
// everything reuses the design tokens already established in this file.

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENTS, getEventBySlug, getAllSlugs } from "@/lib/event-data";

const SITE_URL = "https://manchestergitafestival.com";

// Pre-render a page for every event at build time
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Per-event SEO — title, description, Open Graph, canonical URL
export function generateMetadata({ params }) {
  const event = getEventBySlug(params.slug);
  if (!event) return {};

  const url = `${SITE_URL}/events/${event.slug}`;
  const description = event.seoDescription || event.shortDesc || event.name;

  return {
    title: `${event.name} | Manchester Gita Festival 2026`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${event.name} | Manchester Gita Festival 2026`,
      description,
      url,
      siteName: "Manchester Gita Festival",
      images: event.heroImage
        ? [{ url: `${SITE_URL}${event.heroImage}`, width: 1080, height: 1080 }]
        : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.name} | Manchester Gita Festival 2026`,
      description,
      images: event.heroImage ? [`${SITE_URL}${event.heroImage}`] : undefined,
    },
  };
}

export default function EventPage({ params }) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  const hasRegistration = Boolean(event.registrationLink);
  const qrSrc = hasRegistration
    ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(
        event.registrationLink
      )}`
    : null;

  const hasDetails = Boolean(event.date || event.time || event.venue);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    ...(event.seoDescription || event.shortDesc
      ? { description: event.seoDescription || event.shortDesc }
      : {}),
    ...(event.date ? { startDate: event.date } : {}),
    ...(event.venue
      ? { location: { "@type": "Place", name: event.venue } }
      : {}),
    ...(event.heroImage ? { image: `${SITE_URL}${event.heroImage}` } : {}),
    url: `${SITE_URL}/events/${event.slug}`,
    ...(hasRegistration
      ? {
          offers: {
            "@type": "Offer",
            url: event.registrationLink,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };

  return (
    <>
      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[rgb(244,229,201)]">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden">
          {/* soft decorative backdrop so the section doesn't feel empty behind a small square image */}
          <div className={`absolute inset-0 bg-gradient-to-br ${event.color || "from-maroon to-maroon-dark"} opacity-90`} />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-maroon/30 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-5 py-10 md:px-10 md:py-16">
            {/* Back link */}
            <Link
              href="/#events"
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-black/25 px-4 py-2 font-body text-sm text-cream backdrop-blur-sm transition-colors hover:bg-black/40"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
             
            </Link>

            <div
              className={`grid grid-cols-1 items-center gap-10 md:gap-14 ${
                event.heroImage ? "md:grid-cols-[340px_1fr]" : ""
              }`}
            >
              {/* Square creative — framed card, never stretched. Only if a hero image exists */}
              {event.heroImage && (
                <div className="mx-auto w-full max-w-[340px] md:mx-0">
                  <div className="group relative aspect-square overflow-hidden rounded-3xl border-4 border-gold/70 bg-cream shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-rotate-1 hover:scale-[1.02]">
                    <Image
                      src={event.heroImage}
                      alt={event.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 80vw, 340px"
                      className="object-cover"
                    />
                    {/* thin inner gold hairline for a "framed poster" feel */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold/50" />
                  </div>
                </div>
              )}

              {/* Title block */}
              <div className="text-center md:text-left">
                {event.tagline && (
                  <p className="font-script text-2xl italic text-gold drop-shadow-sm md:text-3xl">
                    {event.tagline}
                  </p>
                )}
                <h1 className="mt-2 font-display text-4xl font-bold text-gold drop-shadow-md md:text-6xl">
                  {event.name}
                </h1>

                {hasDetails && (
                  <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                    {event.date && (
                      <span className="rounded-full bg-black/25 px-4 py-1.5 font-body text-sm text-cream backdrop-blur-sm">
                        {event.date}
                      </span>
                    )}
                    {event.time && (
                      <span className="rounded-full bg-black/25 px-4 py-1.5 font-body text-sm text-cream backdrop-blur-sm">
                        {event.time}
                      </span>
                    )}
                    {event.venue && (
                      <span className="rounded-full bg-black/25 px-4 py-1.5 font-body text-sm text-cream backdrop-blur-sm">
                        {event.venue}
                      </span>
                    )}
                  </div>
                )}

                {hasRegistration && (
                  <Link
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-maroon to-maroon-dark px-7 py-3 font-script text-lg italic tracking-wide text-cream shadow-lg transition-transform hover:scale-[1.03]"
                  >
                    Event Registration
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- CONTENT ---------- */}
        <section className="mx-auto max-w-6xl px-5 py-14 md:px-10 md:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px]">
            {/* Main content */}
            <div>
              {/* {event.shortDesc && (
                <p className="font-body text-lg leading-relaxed text-ink/80 md:text-xl">
                  {event.shortDesc}
                </p>
              )} */}

              {event.body?.length > 0 && (
                <div className="mt-8 space-y-5">
                  {event.body.map((para, i) => (
                    <p key={i} className="font-body text-base leading-relaxed text-ink/70 md:text-[17px]">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Highlights */}
              {event.highlights?.length > 0 && (
                <div className="mt-10 rounded-2xl border border-gold/30 bg-cream-panel p-7">
                  <h2 className="font-display text-xl font-semibold text-indigo-deep">
                    What to Expect
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {event.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-sm text-ink/70">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-saffron" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Programme */}
              {event.programme?.length > 0 && (
                <div className="mt-10 rounded-2xl border border-gold/30 bg-cream-panel p-7">
                  <h2 className="font-display text-xl font-semibold text-indigo-deep">
                    Programme
                  </h2>
                  <div className="mt-4 space-y-4">
                    {event.programme.map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-1 border-b border-gold/20 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-4"
                      >
                        {item.time && (
                          <span className="flex-shrink-0 font-body text-xs font-semibold uppercase tracking-wide text-maroon sm:w-40">
                            {item.time}
                          </span>
                        )}
                        {item.title && (
                          <span className="font-body text-sm text-ink/70">{item.title}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Coach Travel */}
              {event.coachTravel && (
                <div className="mt-10 rounded-2xl border-2 border-gold/50 bg-cream-panel p-7">
                  {event.coachTravel.title && (
                    <h2 className="font-display text-xl font-semibold text-indigo-deep">
                      {event.coachTravel.title}
                    </h2>
                  )}
                  {event.coachTravel.description && (
                    <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                      {event.coachTravel.description}
                    </p>
                  )}
                  {(event.coachTravel.departure ||
                    event.coachTravel.return ||
                    event.coachTravel.suggestedDonation) && (
                    <dl className="mt-5 space-y-3 font-body text-sm text-ink/70">
                      {event.coachTravel.departure && (
                        <div className="flex gap-3">
                          <dt className="w-28 flex-shrink-0 font-semibold text-maroon">Departure</dt>
                          <dd>{event.coachTravel.departure}</dd>
                        </div>
                      )}
                      {event.coachTravel.return && (
                        <div className="flex gap-3">
                          <dt className="w-28 flex-shrink-0 font-semibold text-maroon">Return</dt>
                          <dd>{event.coachTravel.return}</dd>
                        </div>
                      )}
                      {event.coachTravel.suggestedDonation && (
                        <div className="flex gap-3">
                          <dt className="w-28 flex-shrink-0 font-semibold text-maroon">Donation</dt>
                          <dd>{event.coachTravel.suggestedDonation}</dd>
                        </div>
                      )}
                    </dl>
                  )}
                  {event.coachTravel.note && (
                    <p className="mt-4 font-body text-xs italic text-ink/50">
                      {event.coachTravel.note}
                    </p>
                  )}
                  {event.coachTravel.bookingLink && (
                    <Link
                      href={event.coachTravel.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-maroon to-maroon-dark px-6 py-2.5 font-script text-base italic tracking-wide text-cream shadow-sm transition-transform hover:scale-[1.02]"
                    >
                      Book your Coach Seat
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  )}
                </div>
              )}

              {/* Gallery — square thumbnails to match the creative style */}
              {event.gallery?.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-indigo-deep">
                    Glimpses
                  </h2>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {event.gallery.map((src, i) => (
                      <div key={i} className="relative aspect-square overflow-hidden rounded-xl border border-gold/30">
                        <Image
                          src={src}
                          alt={`${event.name} — glimpse ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Venue Information */}
              {event.venueInformation?.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-indigo-deep">
                    Venue Information
                  </h2>
                  {/* <div className="mt-4 space-y-3">
                    {event.venueInformation.map((para, i) => (
                      <p key={i} className="font-body text-sm leading-relaxed text-ink/70">
                        {para}
                      </p>
                    ))}
                  </div> */}
                </div>
              )}

              {/* FAQs */}
              {event.faqs?.length > 0 && (
                <div className="mt-10 rounded-2xl border border-gold/30 bg-cream-panel p-7">
                  <h2 className="font-display text-xl font-semibold text-indigo-deep">
                    Frequently Asked Questions
                  </h2>
                  <div className="mt-4 space-y-5">
                    {event.faqs.map((faq, i) => (
                      <div key={i}>
                        {faq.question && (
                          <p className="font-body text-sm font-semibold text-maroon">
                            {faq.question}
                          </p>
                        )}
                        {faq.answer && (
                          <p className="mt-1 font-body text-sm text-ink/70">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Closing Message */}
              {event.closingMessage && (
                <div className="mt-12 rounded-2xl border border-gold/30 bg-cream-panel p-8 text-center">
                  <p className="font-script text-xl italic leading-relaxed text-maroon">
                    {event.closingMessage}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar — details + registration */}
            <aside className="lg:sticky lg:top-8 lg:h-fit">
              <div className="rounded-2xl border border-gold/40 bg-cream-panel p-6 shadow-sm">
                {hasDetails && (
                  <>
                    <h3 className="font-display text-lg font-semibold text-indigo-deep">
                      Event Details
                    </h3>
                    <dl className="mt-4 space-y-3 font-body text-sm text-ink/70">
                      {event.date && (
                        <div className="flex gap-3">
                          <dt className="font-semibold text-maroon">Date</dt>
                          <dd>{event.date}</dd>
                        </div>
                      )}
                      {event.time && (
                        <div className="flex gap-3">
                          <dt className="font-semibold text-maroon">Time</dt>
                          <dd>{event.time}</dd>
                        </div>
                      )}
                      {event.venue && (
                        <div className="flex gap-3">
                          <dt className="font-semibold text-maroon">Venue</dt>
                          <dd>{event.venue}</dd>
                        </div>
                      )}
                    </dl>
                  </>
                )}

                {/* {hasRegistration && (
                  <Link
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-maroon to-maroon-dark px-5 py-3 font-script text-lg italic tracking-wide text-cream shadow-sm transition-transform hover:scale-[1.02] ${
                      hasDetails ? "mt-6" : ""
                    }`}
                  >
                    Register Now
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                )} */}

                {/* QR scanner — only if there's a registration link to encode */}
                {hasRegistration && qrSrc && (
                  <div className="mt-6 flex flex-col items-center rounded-xl border border-gold/30 bg-cream p-4 text-center">
                    <p className="font-script text-base italic text-maroon">
                      Scan to register
                    </p>
                    <div className="mt-3 overflow-hidden rounded-lg border border-gold/40 bg-white p-2">
                      <Image
                        src={qrSrc}
                        alt={`QR code to register for ${event.name}`}
                        width={160}
                        height={160}
                        unoptimized
                      />
                    </div>
                    <p className="mt-2 font-body text-xs text-ink/50">
                      Point your camera to open the registration form
                    </p>
                  </div>
                )}

                {/* Coach travel quick link in sidebar too, if applicable */}
                {event.coachTravel?.bookingLink && (
                  <div className="mt-6 rounded-xl border border-gold/30 bg-cream p-4 text-center">
                    <p className="font-script text-base italic text-maroon">
                      Travelling from Manchester?
                    </p>
                    {event.coachTravel.suggestedDonation && (
                      <p className="mt-1 font-body text-xs text-ink/60">
                        Coach seats — {event.coachTravel.suggestedDonation}
                      </p>
                    )}
                    {/* <Link
                      href={event.coachTravel.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-maroon to-maroon-dark px-4 py-2 font-script text-sm italic tracking-wide text-cream shadow-sm transition-transform hover:scale-[1.02]"
                    >
                      Book Coach
                    </Link> */}
                  </div>
                )}
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}