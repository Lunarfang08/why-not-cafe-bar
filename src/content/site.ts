export const site = {
  name: "Why Not?",
  tagline: "Cafe-bar",
  headline: "Quirky family-run cafe-bar in Boothstown",
  bio: "Friendly service, unique décor, and a little getaway from the busy life — with a beer garden, vinyl lounge, and free grassroots live music.",
  phone: "07970 944119",
  phoneHref: "tel:+447970944119",
  address: {
    line1: "29 Leigh Road",
    line2: "Boothstown, Worsley",
    city: "Manchester M28 1HP",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=29+Leigh+Road+Boothstown+Worsley+Manchester+M28+1HP",
    embedUrl:
      "https://maps.google.com/maps?q=29+Leigh+Road,+Boothstown,+Worsley,+Manchester+M28+1HP&z=15&output=embed",
  },
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "Closed" },
    { day: "Wednesday", time: "12–9pm" },
    { day: "Thursday", time: "12–10pm" },
    { day: "Friday", time: "12–10pm" },
    { day: "Saturday", time: "10am–11pm" },
    { day: "Sunday", time: "10am–5pm" },
  ],
  social: {
    instagram: "https://www.instagram.com/whynot_cafebar/",
    facebook: "https://www.facebook.com/p/Why-Not-cafe-bar-100049515740943/",
    tripadvisor:
      "https://www.tripadvisor.co.uk/Restaurant_Review-g187069-d13322884-Reviews-Why_Not_Cafe_bar-Manchester_Greater_Manchester_England.html",
  },
  stats: {
    followers: "4.2k",
    rating: "4.7",
  },
} as const;

export const menuHighlights = [
  {
    id: "tiger",
    name: "Tiger Loaf Chip Barms",
    description:
      "Half a tiger loaf stuffed with seasoned triple-cooked chips and gravy — or curry sauce if that's your vibe.",
    image: "/images/chips.jpg",
    tag: "Signature",
  },
  {
    id: "breakfast",
    name: "All-Day Sunday Breakfast",
    description:
      "Full English, breakfast wraps and barms. Served 10am–4pm when you need it most.",
    image: "/images/breakfast.jpg",
    tag: "Brunch",
  },
  {
    id: "naan",
    name: "Tear & Share Loaded Naan",
    description:
      "Spicy brisket & ham with buffalo heat, or Garlic Greek with feta, tzatziki and olives. Jalapeños optional.",
    image: "/images/naan.jpg",
    tag: "Share",
  },
  {
    id: "pies",
    name: "Pies & Pasties",
    description:
      "Steak & ale, chicken & mushroom, cauliflower cheese — with mushy peas or beans on the side.",
    image: "/images/pie.jpg",
    tag: "Comfort",
  },
  {
    id: "drinks",
    name: "Drinks & Cocktails",
    description:
      "Local beers, Boothstown G&Ts, colourful cocktails and a vinyl lounge soundtrack.",
    image: "/images/cocktail.jpg",
    tag: "Bar",
  },
] as const;

export const vibePoints = [
  {
    title: "Quirky through and through",
    text: "Unique décor, colourful garden tables, and a personality you won't find in a chain.",
  },
  {
    title: "Beer garden & vinyl lounge",
    text: "Sunny garden seats, sheltered spots, and a vinyl lounge that keeps the energy right.",
  },
  {
    title: "Family-run, properly friendly",
    text: "Warm service, cooked-to-order food, and a hidden gem locals keep coming back to.",
  },
] as const;

export const musicNotes = [
  {
    title: "Garden gigs",
    text: "Free grassroots live music in the beer garden — booking often essential.",
    image: "/images/live-music.jpg",
  },
  {
    title: "Vinyl lounge",
    text: "Spin nights and late lounge vibes when the garden packs up.",
    image: "/images/vinyl.jpg",
  },
  {
    title: "Message for listings",
    text: "Acts change weekly. Slide into Instagram DMs for what's on next.",
    image: "/images/garden.jpg",
  },
] as const;

export const gallery = [
  { src: "/images/gallery-1.jpg", alt: "Cafe atmosphere and plating", tall: false },
  { src: "/images/gallery-2.jpg", alt: "Dinner table mood", tall: true },
  { src: "/images/gallery-3.jpg", alt: "Bar pour and glassware", tall: true },
  { src: "/images/gallery-4.jpg", alt: "Evening bar energy", tall: false },
  { src: "/images/gallery-5.jpg", alt: "Cocktails and candlelight", tall: false },
  { src: "/images/gallery-6.jpg", alt: "Restaurant interior", tall: true },
  { src: "/images/garden.jpg", alt: "Beer garden seating", tall: false },
  { src: "/images/breakfast.jpg", alt: "Full English breakfast", tall: false },
] as const;
