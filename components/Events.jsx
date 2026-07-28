"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import DiyaDivider from "./DiyaDivider";
import { EVENTS } from "@/lib/event-data";

/**
 * Cursive/display font — add once, globally, e.g. in app/layout.jsx or globals.css:
 *
 *   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500;1,600&display=swap');
 *
 * Then wire it into tailwind.config.js:
 *   fontFamily: { script: ['"Cormorant Garamond"', 'serif'] }
 *
 * NOTE: event content (name, tagline, image, description, registration link)
 * now lives in lib/events-data.js — the SAME file the /events/[slug] detail
 * pages read from. Edit an event there and it updates here and on its detail
 * page automatically. Nothing in this file needs to change to add a new event.
 */

export default function EventGallery() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Update arrow/dot state based on scroll position
  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 8);

    // figure out which card is closest to the left edge to drive the dots
    const cards = Array.from(track.children);
    if (cards.length === 0) return;

    let closestIndex = 0;
    let closestDistance = Infinity;
    cards.forEach((card, i) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.children[0];
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0");
    const scrollAmount = cardWidth + gap;

    track.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.children[index];
    if (!card) return;

    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  return (
    <section id="events" className="relative bg-[rgb(244,229,201)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            Five Days, Four Pillars
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-indigo-deep md:text-5xl">
            Festival Events
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink/70 md:text-lg">
            Each day of the festival weaves together these four pillars — quiet
            reflection, thoughtful dialogue, joyful culture, and heartfelt devotion.
          </p>
        </div>

        {/* Slider viewport */}
        <div className="relative mt-14">
          {/* Prev arrow */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollPrev}
            aria-label="Previous events"
            className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-cream-panel/95 p-2.5 text-maroon shadow-md backdrop-blur transition-all duration-300 hover:border-gold hover:bg-gold/10 disabled:pointer-events-none disabled:opacity-0 sm:flex md:-left-5"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollNext}
            aria-label="Next events"
            className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-cream-panel/95 p-2.5 text-maroon shadow-md backdrop-blur transition-all duration-300 hover:border-gold hover:bg-gold/10 disabled:pointer-events-none disabled:opacity-0 sm:flex md:-right-5"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Scroll track */}
          <div
            ref={trackRef}
            className="grid auto-cols-[minmax(78%,1fr)] grid-flow-col gap-2 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [scrollbar-width:none] sm:auto-cols-[minmax(48%,1fr)] lg:auto-cols-[minmax(25%,1fr)] [&::-webkit-scrollbar]:hidden"
          >
            {EVENTS.map((event) => (
              <div
                key={event.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/30 bg-cream-panel shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-gold snap-start"
              >
                {/* Image */}
                <div style={{ aspectRatio: "1/1" }} className="relative  w-full overflow-hidden">
                <Link  href={`/events/${event.slug}`} >
                
                
                
                  <Image
                    src={event.heroImage}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    
                  />
                  </Link>
                  {/* <div
                    className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-60 mix-blend-multiply`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" /> */}

                  {/* Diya glow accent, top right */}
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/20 blur-xl transition-transform duration-500 group-hover:scale-125" />

                  {/* Tagline overlay, cursive */}
                  {/* <p className="absolute bottom-3 left-4 font-script text-lg italic text-gold/90 tracking-wide drop-shadow-sm">
                    {event.tagline}
                  </p> */}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-indigo-deep">
                    {event.name}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink/65">
                    {event.shortDesc}
                  </p>

                  <Link
                    href={`/events/${event.slug}`}
                    className="group/btn mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gradient-to-r from-transparent to-transparent px-5 py-2 font-script text-base italic tracking-wide text-maroon transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:pr-4"
                  >
                    Read more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {EVENTS.map((event, i) => (
              <button
                key={event.slug}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to ${event.name}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-maroon" : "w-2 bg-maroon/25 hover:bg-maroon/40"
                }`}
              />
            ))}
          </div>
        </div>

        <DiyaDivider className="mt-16" />
      </div>
    </section>
  );
}