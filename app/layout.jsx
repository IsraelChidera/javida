import { Cormorant_Garamond, Great_Vibes, Manrope } from "next/font/google";
import "./globals.css";
import MusicToggle from "@/components/widgets/MusicToggle";
import { SITE_URL, coupleNames, wedding } from "@/lib/wedding";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = `${coupleNames} — The Wedding | ${wedding.hashtag}`;
const description = `Join us in celebrating the wedding of ${coupleNames} on ${wedding.dateLabel} at ${wedding.venue.name}, ${wedding.venue.city}, Lagos. Event details, directions and our photo gallery.`;
const ogImage = { url: "/gallery-18.jpg", width: 1367, height: 2048, alt: `${coupleNames} in traditional attire` };

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${coupleNames} ${wedding.hashtag}` },
  description,
  applicationName: `${wedding.hashtag} Wedding`,
  keywords: [
    "Jane and Victor wedding",
    "Javida25",
    "#Javida25",
    "Jane Victor David",
    "Ikorodu wedding",
    "Lagos wedding 2025",
    "Joint Life Christian Center",
    "Nigerian wedding",
  ],
  authors: [{ name: "Israel Chidera", url: "https://www.linkedin.com/in/israel-chidera-97bbab89/" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: `${coupleNames} ${wedding.hashtag}`,
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico", apple: "/gallery-18.jpg" },
  formatDetection: { telephone: true, address: true },
};

export const viewport = {
  themeColor: "#151d45",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `Wedding of ${coupleNames}`,
  description,
  startDate: wedding.date,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: [`${SITE_URL}${ogImage.url}`],
  url: SITE_URL,
  location: {
    "@type": "Place",
    name: wedding.venue.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: wedding.venue.street,
      addressLocality: wedding.venue.city,
      addressRegion: wedding.venue.region,
      addressCountry: wedding.venue.country,
    },
  },
  organizer: {
    "@type": "Person",
    name: coupleNames,
    telephone: wedding.contact.phoneIntl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <MusicToggle />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
