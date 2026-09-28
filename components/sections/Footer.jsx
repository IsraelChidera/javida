import Link from "next/link";
import { coupleNames, wedding } from "@/lib/wedding";

export default function Footer() {
  return (
    <footer className="bg-navy-950 pb-10 pt-20 text-center text-ivory">
      <p className="font-script text-6xl text-gold-400">{coupleNames}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-ivory/50">
        <time dateTime={wedding.date}>14 · 09 · 2025</time> &nbsp;·&nbsp; {wedding.venue.city}, {wedding.venue.region}
      </p>
      <p className="mt-6 text-sm text-ivory/60">
        Share your photos with <span className="font-semibold text-gold-400">{wedding.hashtag}</span>
      </p>

      <nav aria-label="Footer" className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ivory/60">
        <Link href="/#details" className="hover:text-gold-400">Details</Link>
        <Link href="/#gallery" className="hover:text-gold-400">Gallery</Link>
        <Link href="/get-directions" className="hover:text-gold-400">Directions</Link>
      </nav>

      <p className="mt-12 border-t border-ivory/10 pt-8 text-xs text-ivory/40">
        Designed &amp; developed with love by{" "}
        <a
          href="https://www.linkedin.com/in/israel-chidera-97bbab89/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory/70 underline underline-offset-4 hover:text-gold-400"
        >
          Israel Chidera
        </a>
      </p>
    </footer>
  );
}
