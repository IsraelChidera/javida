import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Ornament from "@/components/ui/Ornament";
import { wedding } from "@/lib/wedding";

export default function Families() {
  return (
    <section id="families" aria-labelledby="families-title" className="bg-cream py-24 sm:py-32">
      <Container className="grid items-center gap-24 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
          <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-[2rem]">
            <Image src="/gallery-6.jpg" alt="Jane in a red rose-sleeved traditional gown" fill sizes="(min-width: 1024px) 14rem, 45vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
            <Image src="/gallery-11.jpg" alt="Jane and Victor embracing in front of the church" fill sizes="(min-width: 1024px) 14rem, 45vw" className="object-cover" />
          </div>
          <span aria-hidden="true" className="absolute -bottom-14 left-1/2 z-10 -translate-x-1/2 font-script text-7xl text-gold-500 [text-shadow:0_2px_12px_var(--color-cream)]">
            Forever
          </span>
        </Reveal>

        <Reveal delay={150} className="text-center lg:text-left">
          <p className="eyebrow">With joyful hearts</p>
          <h2 id="families-title" className="mt-4 font-serif text-4xl font-light leading-tight text-navy-900 sm:text-5xl">
            Together with their <em className="gold-text not-italic font-script text-6xl pr-3">families</em>
          </h2>
          <Ornament className="mt-6 lg:justify-start" />
          <p className="mt-6 leading-relaxed text-muted">
            The families of the bride and groom request the pleasure of your company as{" "}
            {wedding.bride} and {wedding.groom} begin their journey as husband and wife.
          </p>

          <ul className="mt-10 space-y-5">
            {wedding.families.map((f) => (
              <li key={f.head} className="rounded-2xl border border-gold-500/25 bg-white/60 p-6 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">The family of</p>
                <p className="mt-2 font-serif text-2xl text-navy-900">{f.head}</p>
                <p className="mt-1 text-sm text-muted">{f.origin}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
