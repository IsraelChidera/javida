import Image from "next/image";
import { FaCalendarDay, FaLocationDot } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import Countdown from "./Countdown";
import { wedding } from "@/lib/wedding";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy-950 pb-24 pt-28 text-ivory lg:flex lg:min-h-[min(100svh,58rem)] lg:items-center lg:pt-32"
    >
      {/* Ambient glow */}
      <div aria-hidden="true" className="absolute -left-40 top-20 -z-10 h-[32rem] w-[32rem] rounded-full bg-gold-500/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-40 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-navy-700/60 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="eyebrow !text-gold-400">The wedding celebration of</p>

          <h1 id="hero-title" className="mt-6 font-script leading-[0.95] text-gold-400">
            <span className="block text-7xl sm:text-8xl lg:text-9xl">{wedding.bride}</span>
            <span className="my-1 block font-serif text-3xl italic text-ivory/60 sm:text-4xl">&amp;</span>
            <span className="block text-7xl sm:text-8xl lg:text-9xl">{wedding.groom}</span>
          </h1>

          <div className="mt-10 flex flex-col items-center gap-3 text-sm text-ivory/80 sm:flex-row sm:justify-center sm:gap-8 lg:justify-start">
            <p className="flex items-center gap-2">
              <FaCalendarDay className="text-gold-400" aria-hidden="true" />
              <time dateTime={wedding.date}>{wedding.dateLabel}</time>
            </p>
            <p className="flex items-center gap-2">
              <FaLocationDot className="text-gold-400" aria-hidden="true" />
              {wedding.venue.city}, {wedding.venue.region}
            </p>
          </div>

          <div className="mt-10 flex justify-center lg:justify-start">
            <Countdown />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button href="#details" variant="gold">View details</Button>
            <Button href="/get-directions" variant="ghost">Get directions</Button>
          </div>
        </div>

        {/* Arch-framed portrait */}
        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:200ms] lg:max-w-md">
          <div aria-hidden="true" className="absolute -inset-3 translate-x-4 translate-y-4 rounded-t-full border border-gold-500/50" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full shadow-2xl shadow-black/40">
            <Image
              src="/gallery-18.jpg"
              alt="Jane and Victor smiling together in traditional red and white attire"
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover object-top"
            />
          </div>
          <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-500 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-navy-950 shadow-lg">
            {wedding.hashtag}
          </p>
        </div>
      </div>
    </section>
  );
}
