"use client";

import { useRef, useState } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import { directions, mapsEmbed, mapsLink, wedding } from "@/lib/wedding";

// Accessible tabs (WAI-ARIA tabs pattern) for "where are you coming from?" + embedded map.
export default function DirectionsGuide() {
  const [active, setActive] = useState(directions[0].id);
  const tabRefs = useRef([]);
  const current = directions.find((d) => d.id === active);

  const onKeyDown = (e, i) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (i + step + directions.length) % directions.length;
    setActive(directions[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="rounded-3xl border border-gold-500/20 bg-white/80 p-6 shadow-xl shadow-navy-900/5 sm:p-10">
        <p className="eyebrow">Where are you coming from?</p>

        <div role="tablist" aria-label="Your starting point" className="mt-5 flex flex-wrap gap-2 rounded-full bg-cream p-1.5">
          {directions.map((d, i) => {
            const selected = d.id === active;
            return (
              <button
                key={d.id}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`tab-${d.id}`}
                aria-selected={selected}
                aria-controls={`panel-${d.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(d.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`flex-1 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  selected ? "bg-navy-900 text-ivory shadow-md" : "text-navy-900/70 hover:text-navy-900"
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>

        <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} className="mt-8" tabIndex={0}>
          <h2 className="font-serif text-3xl text-navy-900">{current.title}</h2>
          <ol className="mt-6 space-y-5">
            {current.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-500 font-serif text-lg text-navy-950">
                  {i + 1}
                </span>
                <p className="pt-1 leading-relaxed text-ink/80">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-gold-500/20 pt-8">
          <Button href={mapsLink}>
            <FaLocationArrow aria-hidden="true" /> Navigate with Google Maps
          </Button>
          <Button href={`tel:${wedding.contact.phoneIntl}`} variant="outline">
            <FaPhone aria-hidden="true" /> Call {wedding.contact.phone}
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gold-500/20 bg-cream shadow-xl shadow-navy-900/5">
        <iframe
          title={`Map showing ${wedding.venue.name}, ${wedding.venue.city}`}
          src={mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-80 w-full border-0 lg:h-full lg:min-h-[32rem]"
        />
      </div>
    </div>
  );
}
