// lib/events-data.js
//
// SINGLE SOURCE OF TRUTH for every event page.
// The [slug] page reads from here — to add a new event, add one object below.
// Nothing in the page template needs to change.

export const EVENTS = [
{
  slug: "liverpool-satsang-evening",
  name: "Divine Gita Satsang – Liverpool",
  tagline: "Begin the Gita Festival 2026 with an Evening of Devotion & Wisdom",
  shortDesc:
    "Join us in Liverpool for an inspiring evening of Bhagwad Gita wisdom, devotional bhajans, cultural performances, Aarti and Priti Bhojan in the divine presence of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj.",

  heroImage: "/25aug.jpeg",

  color: "[#F2E3C7]",

  date: "Tuesday, 25 August 2026",
  time: "6:00 PM onwards",

  venue: "Shree Radha Krishna Temple, 253 Edge Lane, Edge Hill, Liverpool L7 9LB",

  body: [
    "Join us as the Gita Festival 2026 begins with a special evening of devotion, inspiration and timeless wisdom in Liverpool.",
    "Experience the uplifting teachings of the Bhagwad Gita in the divine presence of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj.",
    "The evening will include devotional bhajans, cultural performances, Gurudev's inspiring discourse and conclude with Aarti and Priti Bhojan. Everyone is warmly welcome."
  ],

  programme: [
    {
      time: "6:00 PM – 6:30 PM",
      title: "Bhajans"
    },
    {
      time: "6:30 PM",
      title: "Ganesh Vandana (Prarthana)"
    },
    {
      time: "6:40 PM",
      title: "Welcome by GIEO Gita UK, Introduction by HCO Liverpool & Honouring of Guests"
    },
    {
      time: "6:50 PM",
      title: "Cultural Performances"
    },
    {
      time: "7:10 PM",
      title: "Divine Discourse by Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj"
    },
    {
      time: "8:30 PM",
      title: "Aarti followed by Priti Bhojan"
    }
  ],

  highlights: [
    "Inspiring discourse by Maharaji",
    "Devotional Bhajans",
    "Bhagwad Gita wisdom",
    "Cultural performances",
    "Aarti",
    "Priti Bhojan",
    "A warm welcome for all"
  ],

  coachTravel: {
    title: "Coach Travel from Manchester",
    description:
      "To make it easier for devotees and families to attend, a coach service will be available from Manchester.",

    departure:
      "5:00 PM from Gita Bhavan Hindu Temple, 2311 Withington Road, Manchester",

    return:
      "The coach will depart Liverpool at approximately 9:15 PM, following the conclusion of the programme.",

    suggestedDonation: "£10 per person",

    note:
      "As coach places are limited, advance booking is essential. Please arrive at least 15 minutes before departure to allow sufficient time for boarding.",

    bookingLink:
      "https://www.gieogita.org/link/Coach-Liverpool-Gita-Satsang"
  },

  venueInformation:
    "Shree Radha Krishna Temple offers a welcoming environment with parking available nearby and is easily accessible by public transport. A location map and travel information will be provided on this page.",

  faqs: [
    {
      question: "Do I need to register?",
      answer: "No registration is required for the event itself."
    },
    {
      question: "Do I need to book the coach?",
      answer: "Yes. Coach spaces must be booked in advance."
    },
    {
      question: "Is there an entry fee?",
      answer: "No. The event is free to attend."
    },
    {
      question: "Will food be served?",
      answer: "Yes. Priti Bhojan will be served following Aarti."
    }
  ],

  closingMessage:
    "We look forward to welcoming you as you begin your Gita Festival 2026 journey with an inspiring evening of devotion, culture and the timeless wisdom of the Bhagwad Gita.",

  registrationLink:
    "",

  seoDescription:
    "Join Divine Gita Satsang – Liverpool on Tuesday, 25 August 2026 at Shree Radha Krishna Temple. Experience devotional bhajans, cultural performances, Bhagwad Gita discourse by Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj, Aarti, Priti Bhojan and coach travel from Manchester."
},
 {
  slug: "manchester-gita-festival",
  name: "Manchester Gita Festival",
  tagline: "An Evening of Devotion, Dharma & Divine Wisdom",
  shortDesc:
    "Join the flagship Manchester event of the Manchester Gita Festival 2026 featuring Bhagwad Gita wisdom, a special Raksha Bandhan Tribute to our Armed Forces and Emergency Services, devotional bhajans, cultural performances, Aarti and Priti Bhojan in the divine presence of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj.",

  heroImage: "/26aug.jpeg",

  color: "[#F2E3C7]",

  date: "Wednesday, 26 August 2026",
  time: "5:30 PM – 8:30 PM",

  venue: "Gita Bhavan Hindu Temple, 231 Withington Road, Manchester M16 8LU",

  body: [
    "Join us for the flagship Manchester event of the Manchester Gita Festival 2026, an inspiring evening celebrating the timeless wisdom of the Bhagwad Gita in the divine presence of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj.",
    "This year's Manchester gathering includes a special Raksha Bandhan Tribute to our Armed Forces and Emergency Services, honouring those who dedicate their lives to protecting our communities and nation.",
    "Inspired by the teachings of the Bhagwad Gita, this unique ceremony reflects the values of dharma (duty), courage, selfless service and sacrifice. Members of the Hindu community will tie Raksha Bandhan to invited servicemen and women as a mark of gratitude, respect and appreciation.",
    "The evening also features devotional bhajans, cultural performances, Maharaji's inspiring discourse, Aarti and concludes with Priti Bhojan. Everyone is warmly welcome."
  ],

  programme: [
    {
      time: "5:30 PM",
      title: "Welcome & Arrival of Guests"
    },
    {
      time: "5:30 PM – 6:00 PM",
      title: "Devotional Bhajans"
    },
    {
      time: "During Bhajans",
      title: "Arrival of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj"
    },
    {
      time: "During Bhajans",
      title: "Welcome of Armed Forces & Emergency Services Guests"
    },
    {
      time: "During Bhajans",
      title: "Maharaji honours each guest with a ceremonial scarf before they are seated on stage"
    },
    {
      time: "6:00 PM",
      title: "Ganesh Vandana"
    },
    {
      time: "6:05 PM",
      title: "Cultural Performances"
    },
    {
      time: "6:35 PM",
      title: "Welcome Address & Guest Introductions"
    },
    {
      time: "6:45 PM",
      title: "Raksha Bandhan Ceremony honouring our Armed Forces and Emergency Services"
    },
    {
      time: "7:00 PM",
      title: "Divine Discourse by Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj"
    },
    {
      time: "8:15 PM",
      title: "Aarti"
    },
    {
      time: "8:30 PM",
      title: "Priti Bhojan"
    }
  ],

  programmeNote:
    "Final timings may be subject to minor adjustments.",

  specialTribute: {
    title: "Special Raksha Bandhan Tribute",
    description:
      "One of the highlights of this year's Manchester event is a heartfelt Raksha Bandhan Tribute, recognising the dedication and sacrifice of members of the Armed Forces and Emergency Services.",
    body:
      "Drawing inspiration from the teachings of the Bhagwad Gita, we honour those who uphold their duty with courage, integrity and selfless service. During the ceremony, invited guests will receive a traditional Raksha Bandhan as a symbol of gratitude and respect from the Hindu community."
  },

  highlights: [
    "Divine discourse by Maharaji",
    "Devotional Bhajans",
    "Bhagwad Gita wisdom",
    "Raksha Bandhan Tribute",
    "Armed Forces & Emergency Services recognition",
    "Cultural performances",
    "Aarti",
    "Priti Bhojan",
    "A warm welcome for all"
  ],

  venueInformation:
    "Gita Bhavan Hindu Temple is one of the UK's leading centres for Sanatan Dharma and will host the flagship Manchester event of the festival. Information on parking, accessibility and nearby public transport will be available below.",

  faqs: [
    {
      question: "Do I need to register?",
      answer: "No. The event is free and open to everyone."
    },
    {
      question: "Is there coach travel?",
      answer: "No. As this event is taking place in Manchester, coach transport is not being provided."
    },
    {
      question: "Is there an entry fee?",
      answer: "No. Admission is free."
    },
    {
      question: "Will food be served?",
      answer: "Yes. Priti Bhojan will be served following the programme."
    }
  ],

  closingMessage:
    "Celebrate an unforgettable evening of devotion, culture and spiritual inspiration as we come together to honour both the timeless teachings of the Bhagwad Gita and the spirit of selfless service embodied by our Armed Forces and Emergency Services. Join us in Manchester for what promises to be one of the highlights of the Manchester Gita Festival 2026.",

  registrationLink: "",

  seoDescription:
    "Join the flagship Manchester Gita Festival 2026 on Wednesday, 26 August 2026 at Gita Bhavan Hindu Temple, Manchester. Experience Bhagwad Gita wisdom, a special Raksha Bandhan Tribute to Armed Forces and Emergency Services, devotional bhajans, cultural performances, Divine Discourse by Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj, Aarti and Priti Bhojan."
},
{
  slug: "yorkshire-gita-festival",
  name: "Yorkshire Gita Festival",
  tagline: "An Evening of Devotion, Wisdom & Spiritual Inspiration",
  shortDesc:
    "Join us in Bradford for the Yorkshire Gita Festival 2026 and experience the timeless wisdom of the Bhagwad Gita in the divine presence of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj, along with devotional bhajans, cultural performances and Priti Bhojan.",

  heroImage: "/28aug.jpeg",

  color: "[#F2E3C7]",

  date: "Friday, 28 August 2026",
  time: "6:00 PM onwards (Doors open at 6:30 PM)",

  venue: "Cedar Court Hotel, Mayo Avenue, Rooley Lane, Bradford BD5 8HW",

  body: [
    "Join us for an inspiring evening as the Yorkshire Gita Festival comes to Bradford as part of the Manchester Gita Festival 2026.",
    "Experience the timeless teachings of the Bhagwad Gita in the divine presence of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj, alongside devotional music, cultural performances and spiritual inspiration.",
    "Whether you are new to the Bhagwad Gita or have been studying its wisdom for many years, this evening offers a wonderful opportunity to reflect, reconnect and experience the joy of satsang with family and friends.",
    "Everyone is warmly welcome."
  ],

  programme: [
    {
      time: "6:00 PM",
      title: "Exhibition"
    },
    {
      time: "6:30 PM",
      title: "Devotional Bhajans"
    },
    {
      time: "7:00 PM",
      title: "Reception of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj & Dignitaries"
    },
    {
      time: "7:10 PM",
      title: "Traditional Lighting of the Lamp"
    },
    {
      time: "7:15 PM",
      title: "Ganesh Vandana"
    },
    {
      time: "7:25 PM",
      title: "Welcome Address"
    },
    {
      time: "7:30 PM",
      title: "Addresses by Invited Dignitaries"
    },
    {
      time: "7:45 PM",
      title: "Divine Discourse by Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj"
    },
    {
      time: "8:40 PM",
      title: "Final Reflections & Sankalp"
    },
    {
      time: "8:55 PM",
      title: "Vote of Thanks"
    },
    {
      time: "9:00 PM onwards",
      title: "Priti Bhojan"
    }
  ],

  programmeNote:
    "Final timings may be subject to minor adjustments.",

  highlights: [
    "Divine discourse by Maharaji",
    "Continuous recital of the 18 Chapters of the Bhagwad Gita (selected shlokas) before the programme",
    "Devotional Bhajans",
    "Traditional Lamp Lighting Ceremony",
    "Cultural performances",
    "Sankalp",
    "Priti Bhojan",
    "A warm welcome for all"
  ],

  coachTravel: {
    title: "Coach Travel from Greater Manchester",
    description:
      "Coach travel will be available for those wishing to attend the Yorkshire Gita Festival.",

    departure:
      "Gita Bhavan Hindu Temple, 361 Withington Road, Manchester, M20 4UX",

    departureTime:
      "To be confirmed",

    return:
      "Following the conclusion of the programme.",

    suggestedDonation:
      "£10 per person",

    note:
      "As places are limited, advance booking is essential.",

    bookingLink:
      "https://www.gieogita.org/link/Coach-Yorkshire-Gita-Festival"
  },

  venueInformation:
    "Cedar Court Hotel offers excellent conference facilities with ample parking and easy access from the motorway network, making it an ideal venue for devotees travelling from across Yorkshire and the North West. A location map, parking information and accessibility details will be available on this page.",

  faqs: [
    {
      question: "Do I need to register?",
      answer: "Registration is recommended to help us plan for attendance."
    },
    {
      question: "Do I need to book the coach?",
      answer: "Yes. Coach places must be booked in advance."
    },
    {
      question: "Is there an entry fee?",
      answer: "No. The event is free to attend."
    },
    {
      question: "Will food be served?",
      answer: "Yes. Priti Bhojan will be served following the programme."
    }
  ],

  closingMessage:
    "Join us in Bradford for an inspiring evening of Bhagwad Gita wisdom, devotional music, cultural celebration and spiritual upliftment in the divine presence of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj. Experience the timeless message of the Bhagwad Gita and become part of this special Yorkshire celebration during the Manchester Gita Festival 2026.",

  registrationLink:
    "https://www.gieogita.org/link/Yorkshire-Gita-Festival",

  coachBookingLink:
    "https://www.gieogita.org/link/Coach-Yorkshire-Gita-Festival",

  seoDescription:
    "Join the Yorkshire Gita Festival on Friday, 28 August 2026 at Cedar Court Hotel, Bradford. Experience Bhagwad Gita wisdom, devotional bhajans, cultural performances, traditional lamp lighting, Divine Discourse by Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj, Sankalp and Priti Bhojan. Register online and book coach travel from Greater Manchester."
},
  {
  slug: "london-shri-krishna-janmashtami-shobha-yatra",
  name: "London Shri Krishna Janmashtami Shobha Yatra",
  tagline: "Celebrate Shri Krishna Janmashtami with Thousands of Devotees",
  shortDesc:
    "Conclude the Manchester Gita Festival 2026 by joining one of the UK's largest Shri Krishna Janmashtami celebrations in London. Travel from Manchester for a joyful day of devotion, Darshan, fellowship and the grand Shobha Yatra in the divine presence of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj.",

  heroImage: "/30aug.jpeg",

  color: "[#F2E3C7]",

  date: "Sunday, 30 August 2026",
  time: "10:30 AM – 3:00 PM (Approximate Yatra timings)",

  venue: "Shree Ram Mandir, 22 King St, Southall, London",

  body: [
    "Conclude the Gita Festival 2026 by joining one of the UK's largest and most inspiring celebrations of Shri Krishna Janmashtami.",
    "The annual London Shobha Yatra brings together thousands of devotees, temples and Hindu organisations in a vibrant procession through the streets of Southall, celebrating the birth of Lord Shri Krishna with devotion, unity and joy.",
    "For over two decades, Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj has blessed this sacred occasion with His divine presence. We are delighted to once again be travelling together from Manchester to participate in this wonderful celebration.",
    "Following the Shobha Yatra, there will be an opportunity for Darshan of Maharaji, lunch and free time before returning to Manchester. Everyone is warmly welcome to join us."
  ],

  expectations: [
    "Coach travel from Manchester",
    "Participation in the London Shri Krishna Janmashtami Shobha Yatra",
    "Darshan of Maharaji",
    "Time to meet devotees from across the UK",
    "Lunch and free time",
    "A memorable conclusion to the Manchester Gita Festival 2026"
  ],

  itinerary: [
    {
      time: "7:00 AM",
      title: "Coach departs Gita Bhavan Hindu Temple, Manchester"
    },
    {
      time: "11:00 AM",
      title: "Arrive in London"
    },
    {
      time: "12:00 PM – 2:00 PM",
      title: "Shri Krishna Janmashtami Shobha Yatra"
    },
    {
      time: "2:00 PM onwards",
      title: "Lunch, Darshan of Maharaji & Free Time"
    },
    {
      time: "4:00 PM",
      title: "Coach departs London"
    },
    {
      time: "By 9:00 PM",
      title: "Approximate arrival back in Manchester"
    }
  ],

  itineraryNote:
    "Timings are approximate and may vary depending on traffic.",

  coachTravel: {
    title: "Coach Travel",
    description:
      "Coach travel has been arranged from Manchester to allow devotees and families to travel together for this special occasion.",
    note:
      "Places are limited and advance booking is essential.",
    bookingLink:
      "https://www.gieogita.org/link/Coach-London-Shobha-Yatra"
  },

  faqs: [
    {
      question: "Do I need to register?",
      answer: "Yes. Coach places must be booked in advance."
    },
    {
      question: "Is lunch included?",
      answer: "Lunch will be available during the visit to London."
    },
    {
      question: "Will refreshments be provided?",
      answer: "Light snacks will be provided during the coach journey to London."
    }
  ],

  closingMessage:
    "Join us as we conclude the Manchester Gita Festival 2026 with a joyful pilgrimage to London, celebrating Shri Krishna Janmashtami alongside thousands of devotees from across the country.",

  registrationLink:
    "",

  seoDescription:
    "Join the London Shri Krishna Janmashtami Shobha Yatra on Sunday, 30 August 2026 at Shree Ram Mandir, Southall. Travel from Manchester to celebrate Shri Krishna Janmashtami with thousands of devotees, receive Darshan of Pujya Gurudev HH Gita Manishi Swami Shri Gyananand Ji Maharaj, enjoy lunch and conclude the Manchester Gita Festival 2026."
},
];

export function getEventBySlug(slug) {
  return EVENTS.find((e) => e.slug === slug) || null;
}

export function getAllSlugs() {
  return EVENTS.map((e) => e.slug);
}