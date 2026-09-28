import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Details from "@/components/sections/Details";
import PhotoMarquee from "@/components/sections/PhotoMarquee";
import Families from "@/components/sections/Families";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Details />
        <PhotoMarquee />
        <Families />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
