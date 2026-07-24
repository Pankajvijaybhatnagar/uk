// lib/events-data.js
//
// SINGLE SOURCE OF TRUTH for every event page.
// The [slug] page reads from here — to add a new event, add one object below.
// Nothing in the page template needs to change.

export const EVENTS = [
  {
    slug: "satsang-mornings",
    name: "Satsang",
    tagline: "Morning Reflection",
    shortDesc:
      "Morning gatherings of shared reflection — chanting, silence, and discourse on the Gita's verses.",
    heroImage: "/images/events/satsang-hero.jpg",
    gallery: [
      "/images/events/satsang-1.jpg",
      "/images/events/satsang-2.jpg",
      "/images/events/satsang-3.jpg",
    ],
    color: "[#F2E3C7]",
    date: "25–30 August 2026",
    time: "7:00 AM – 8:30 AM, daily",
    venue: "Main Hall, Manchester Gita Festival",
    body: [
      "Each morning of the festival opens in stillness. Before the day's talks and performances begin, devotees gather for Satsang — a quiet communion of chanting, silence, and reflection on the verses of the Bhagavad Gita.",
      "Led by senior sevaks and visiting scholars, these sessions are less a lecture and more a shared breath: a verse is read, sat with, and only then discussed. Newcomers and long-time practitioners sit side by side, and no prior knowledge of Sanskrit or the Gita is required.",
      "Satsang closes with a short guided meditation, setting an unhurried tone that carries through the rest of each festival day.",
    ],
    highlights: [
      "Daily chanting of select Gita verses",
      "Guided silence and reflection",
      "Open discourse — questions welcome",
      "Suitable for all levels, no prior study needed",
    ],
    registrationLink: "https://forms.gieogita.org.uk/register?event=satsang-mornings",
    seoDescription:
      "Join daily Satsang mornings at the Manchester Gita Festival 2026 — chanting, silence, and reflection on the Bhagavad Gita's verses. Register now.",
  },
  {
    slug: "gita-conference",
    name: "Conference",
    tagline: "Scholarly Dialogue",
    shortDesc:
      "Scholarly discourse and dialogue with spiritual leaders exploring the Gita's relevance today.",
    heroImage: "/images/events/conference-hero.jpg",
    gallery: [
      "/images/events/conference-1.jpg",
      "/images/events/conference-2.jpg",
      "/images/events/conference-3.jpg",
    ],
    color: "[#F2E3C7]",
    date: "26–28 August 2026",
    time: "2:00 PM – 5:00 PM",
    venue: "Conference Hall, Manchester Gita Festival",
    body: [
      "The Conference brings together scholars, monks, and spiritual leaders from across the UK and India to explore what the Bhagavad Gita still has to say to a modern, fast-moving world.",
      "Across three afternoons, panel discussions and keynote talks examine the Gita's teachings on duty, detachment, ethics, and inner steadiness — and open the floor for audience questions after every session.",
      "Sessions are held in English with Hindi interpretation available, and recordings are made accessible afterward for those who cannot attend in person.",
    ],
    highlights: [
      "Keynote talks from visiting scholars",
      "Panel discussions with Q&A",
      "English sessions, Hindi interpretation available",
      "Recorded for later viewing",
    ],
    registrationLink: "https://forms.gieogita.org.uk/register?event=gita-conference",
    seoDescription:
      "Attend the Gita Conference at the Manchester Gita Festival 2026 — talks and panel discussions with spiritual leaders on the Bhagavad Gita's relevance today.",
  },
  {
    slug: "cultural-program",
    name: "Cultural Program",
    tagline: "Living Stories",
    shortDesc:
      "Dance, drama and music from young performers, bringing the Gita's stories vividly to life.",
    heroImage: "/images/events/cultural-hero.jpg",
    gallery: [
      "/images/events/cultural-1.jpg",
      "/images/events/cultural-2.jpg",
      "/images/events/cultural-3.jpg",
    ],
    color: "[#F2E3C7]",
    date: "27–30 August 2026",
    time: "6:00 PM – 8:00 PM",
    venue: "Open-air Stage, Manchester Gita Festival",
    body: [
      "Every evening, the festival grounds turn into a stage. Young performers from the community bring scenes from the Mahabharata and the Gita to life through dance, drama, and live music.",
      "Months of rehearsal come together in performances that are as much about devotion as they are about craft — costumes, choreography, and storytelling all built around a single evening's telling of an eternal story.",
      "Programs are family-friendly and free to attend for all registered festival visitors.",
    ],
    highlights: [
      "Classical and folk dance performances",
      "Dramatized retellings of the Mahabharata",
      "Live music and vocal performances",
      "Family-friendly, open to all ages",
    ],
    registrationLink: "https://forms.gieogita.org.uk/register?event=cultural-program",
    seoDescription:
      "Experience the Cultural Program at the Manchester Gita Festival 2026 — dance, drama, and music bringing the Bhagavad Gita's stories to life.",
  },
  {
    slug: "devotional-gatherings",
    name: "Devotional Gatherings",
    tagline: "Evenings of Devotion",
    shortDesc:
      "Evenings of kirtan and aarti under lamplight, closing each day in collective devotion.",
    heroImage: "/images/events/devotional-hero.jpg",
    gallery: [
      "/images/events/devotional-1.jpg",
      "/images/events/devotional-2.jpg",
      "/images/events/devotional-3.jpg",
    ],
    color: "[#F2E3C7]",
    date: "25–30 August 2026",
    time: "8:30 PM – 9:30 PM, daily",
    venue: "Main Hall, Manchester Gita Festival",
    body: [
      "As each festival day winds down, the community gathers once more — this time for kirtan and aarti under lamplight. Voices rise together, diyas are lit, and the day's teachings settle into the heart.",
      "These gatherings are unstructured and inclusive: no musical training is required to join the chanting, and visitors are welcome to simply sit and watch the aarti if they prefer.",
      "It is, by design, the softest and quietest part of the day — a closing rather than a climax.",
    ],
    highlights: [
      "Evening kirtan, open to all voices",
      "Aarti under lamplight",
      "No experience or preparation needed",
      "A quiet close to each festival day",
    ],
    registrationLink: "https://forms.gieogita.org.uk/register?event=devotional-gatherings",
    seoDescription:
      "Join the Devotional Gatherings at the Manchester Gita Festival 2026 — evening kirtan and aarti under lamplight. Register now.",
  },
];

export function getEventBySlug(slug) {
  return EVENTS.find((e) => e.slug === slug) || null;
}

export function getAllSlugs() {
  return EVENTS.map((e) => e.slug);
}