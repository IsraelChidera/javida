// Single source of truth for all wedding content.
// Update details here — every section, metadata and structured data reads from this file.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://javida.vercel.app").replace(/\/$/, "");

export const wedding = {
  hashtag: "#Javida25",
  bride: "Jane",
  groom: "Victor",
  surname: "David",
  // 14 September 2025, 10:00 WAT (UTC+1)
  date: "2025-09-14T10:00:00+01:00",
  dateLabel: "Sunday, 14th September 2025",
  timeLabel: "10:00 AM",
  colours: [
    { name: "Navy Blue", hex: "#1B2554" },
    { name: "Gold", hex: "#C6A15B" },
  ],
  contact: {
    phone: "09139388122",
    phoneIntl: "+2349139388122",
  },
  venue: {
    name: "Joint Life Christian Center",
    street: "Adeyeri Owuye Street, behind Zenith Bank, Benson Bus-Stop",
    city: "Ikorodu",
    region: "Lagos",
    country: "NG",
    get full() {
      return `${this.name}, ${this.street}, ${this.city}, ${this.region}`;
    },
  },
  families: [
    {
      head: "Pastor Romanus Nweke",
      origin: "Umuche-Ugwulangwu, Ohaozara LGA, Ebonyi State",
    },
    {
      head: "Mr. Echendu Francis",
      origin: "Umudim, Nnewi North LGA, Anambra State",
    },
  ],
};

export const coupleNames = `${wedding.bride} & ${wedding.groom}`;

export const mapsQuery = encodeURIComponent(
  `${wedding.venue.name}, ${wedding.venue.street}, ${wedding.venue.city}, Lagos, Nigeria`
);
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbed = `https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`;

export const gallery = [
  { src: "/gallery-18.jpg", w: 1367, h: 2048, alt: "Jane and Victor smiling together in traditional red and white Igbo attire" },
  { src: "/gallery-9.jpg", w: 1367, h: 2048, alt: "Victor laughing with his arm around Jane at their introduction ceremony" },
  { src: "/gallery-6.jpg", w: 1367, h: 2048, alt: "Jane in a red rose-sleeved traditional gown" },
  { src: "/gallery-11.jpg", w: 720, h: 1079, alt: "Jane and Victor embracing in front of the church" },
  { src: "/gallery-7.jpg", w: 1367, h: 2048, alt: "Portrait of the couple, Jane and Victor" },
  { src: "/gallery-12.jpg", w: 720, h: 1079, alt: "Jane and Victor posing together" },
  { src: "/gallery-10.jpg", w: 1367, h: 2048, alt: "Candid moment of Jane and Victor" },
  { src: "/gallery-13.jpg", w: 720, h: 1079, alt: "Jane and Victor sharing a smile" },
  { src: "/gallery-8.jpg", w: 1024, h: 1280, alt: "Jane and Victor photographed during their celebration" },
  { src: "/gallery-14.jpg", w: 720, h: 1079, alt: "The couple in coordinated outfits" },
  { src: "/gallery-2.jpg", w: 719, h: 1080, alt: "Pre-wedding portrait of Jane and Victor" },
  { src: "/gallery-15.jpg", w: 720, h: 1079, alt: "Jane and Victor standing side by side" },
  { src: "/gallery-19.jpg", w: 1488, h: 2048, alt: "Jane and Victor on their special day" },
  { src: "/gallery-16.jpg", w: 720, h: 1079, alt: "Jane and Victor laughing together" },
  { src: "/gallery-3.jpg", w: 952, h: 1280, alt: "Portrait of Jane and Victor" },
  { src: "/gallery-20.jpg", w: 810, h: 1024, alt: "Jane and Victor celebrating their union" },
  { src: "/gallery-17.jpg", w: 675, h: 900, alt: "A tender moment between Jane and Victor" },
];

export const directions = [
  {
    id: "lagos",
    label: "I'm in Lagos",
    title: "Getting there within Lagos",
    steps: [
      "Board a bus to Ikorodu Garage from TBS/CMS BRT Station, Oshodi (Charity Bus Stop or Oshodi BRT Terminal 3), Ketu Bus Stop, or Costain BRT Terminal — each is a direct one-bus route.",
      "Alight at Benson Bus Stop.",
      "Look for Zenith Bank by the roadside — the church hall is just behind it on Adeyeri Owuye Street.",
    ],
  },
  {
    id: "nigeria",
    label: "Outside Lagos",
    title: "Travelling from another state",
    steps: [
      "Take a bus or flight into Lagos.",
      "From any major terminal, head to Oshodi, Ketu or Costain and board a bus to Ikorodu Garage.",
      "Alight at Benson Bus Stop — the venue is behind Zenith Bank.",
    ],
  },
  {
    id: "abroad",
    label: "Outside Nigeria",
    title: "Flying in from abroad",
    steps: [
      "Arrive at Murtala Muhammed International Airport (LOS), Lagos.",
      "Take a taxi or ride-hailing service (Uber, Bolt) to Benson Bus Stop, Ikorodu — or share the map link below with your driver.",
      "The church hall is behind Zenith Bank on Adeyeri Owuye Street.",
    ],
  },
];
