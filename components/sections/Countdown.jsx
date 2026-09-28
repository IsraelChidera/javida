"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding";

const target = new Date(wedding.date).getTime();

function split(ms) {
  const s = Math.floor(Math.abs(ms) / 1000);
  return [
    { label: "Days", value: Math.floor(s / 86400) },
    { label: "Hours", value: Math.floor((s % 86400) / 3600) },
    { label: "Minutes", value: Math.floor((s % 3600) / 60) },
    { label: "Seconds", value: s % 60 },
  ];
}

// Counts down to the wedding; once it has passed, counts up how long the couple has been married.
// Time is read only after mount so server and client HTML always match.
export default function Countdown() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = now === null ? 0 : target - now;
  const married = now !== null && diff <= 0;
  const units = split(diff);

  return (
    <div>
      <p className="eyebrow !text-gold-400">
        {now === null ? " " : married ? "Happily married for" : "Counting down to forever"}
      </p>
      <dl className="mt-4 grid max-w-md grid-cols-4 gap-2 sm:gap-3">
        {units.map((u) => (
          <div
            key={u.label}
            className="flex flex-col-reverse rounded-2xl border border-ivory/10 bg-ivory/5 px-2 py-3 text-center backdrop-blur-sm"
          >
            <dt className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/50">{u.label}</dt>
            <dd className="font-serif text-3xl font-light tabular-nums text-ivory sm:text-4xl">
              {now === null ? "–" : String(u.value).padStart(2, "0")}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
