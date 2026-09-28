import Image from "next/image";
import { gallery } from "@/lib/wedding";

// Infinite, CSS-only photo ribbon. The list is duplicated so the loop is seamless;
// the second copy is hidden from assistive tech. Pauses on hover.
export default function PhotoMarquee() {
  const photos = gallery.slice(0, 10);

  return (
    <div aria-hidden="true" className="group overflow-hidden bg-navy-950 py-6">
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {[...photos, ...photos].map((p, i) => (
          <div key={i} className="relative h-56 w-40 shrink-0 overflow-hidden rounded-2xl sm:h-72 sm:w-52">
            <Image src={p.src} alt="" fill sizes="13rem" className="object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
