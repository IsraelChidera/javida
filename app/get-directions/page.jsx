import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import DirectionsGuide from "@/components/sections/DirectionsGuide";
import Container from "@/components/ui/Container";
import Ornament from "@/components/ui/Ornament";
import { wedding } from "@/lib/wedding";

const description = `How to get to ${wedding.venue.name}, ${wedding.venue.street}, ${wedding.venue.city}, Lagos — directions from within Lagos, other states and abroad.`;

export const metadata = {
  title: "Directions to the Venue",
  description,
  alternates: { canonical: "/get-directions" },
  openGraph: { title: "Directions to the Venue", description, url: "/get-directions" },
};

export default function DirectionsPage() {
  return (
    <>
      <Navbar solid />
      <main id="main" className="paper min-h-svh pb-24 pt-32 sm:pt-40">
        <Container>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Finding your way</p>
            <h1 className="mt-4 font-serif text-4xl font-light text-navy-900 sm:text-5xl">
              Directions to the <span className="font-script text-6xl text-gold-500">venue</span>
            </h1>
            <Ornament className="mt-6" />
            <p className="mt-6 leading-relaxed text-muted">
              <strong className="font-semibold text-navy-900">{wedding.venue.name}</strong>
              <br />
              {wedding.venue.street}, {wedding.venue.city}, {wedding.venue.region}.
            </p>
          </header>

          <DirectionsGuide />
        </Container>
      </main>
      <Footer />
    </>
  );
}
