"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/lib/wedding";

const INITIAL = 9;

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const dialogRef = useRef(null);
  const touchX = useRef(null);

  const photos = showAll ? gallery : gallery.slice(0, INITIAL);
  const open = index !== null;

  const go = useCallback((step) => setIndex((i) => (i + step + gallery.length) % gallery.length), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const current = open ? gallery[index] : null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="paper py-24 sm:py-32">
      <Container>
        <SectionHeading id="gallery-title" eyebrow="Our moments" title="A Glimpse of" script="our love story">
          A few of our favourite memories. Tap any photo to view it full screen.
        </SectionHeading>

        <ul className="columns-2 gap-3 sm:gap-4 md:columns-3">
          {photos.map((p, i) => (
            <li key={p.src} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-cream"
                aria-label={`View photo: ${p.alt}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            </li>
          ))}
        </ul>

        {gallery.length > INITIAL && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll((s) => !s)}
              className="rounded-full border border-navy-900 px-8 py-3.5 text-sm font-semibold tracking-wide text-navy-900 transition-colors hover:bg-navy-900 hover:text-ivory"
            >
              {showAll ? "Show fewer photos" : `View all ${gallery.length} photos`}
            </button>
          </div>
        )}
      </Container>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
        aria-label="Photo viewer"
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {current && (
          <div className="pointer-events-none flex h-full items-center justify-center p-4 sm:p-16">
            <figure className="pointer-events-auto relative flex h-full w-full max-w-4xl flex-col items-center justify-center">
              <div className="relative min-h-0 w-full flex-1">
                <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
              </div>
              <figcaption className="mt-4 text-center text-sm text-ivory/70">
                {current.alt} <span className="ml-2 text-ivory/40">{index + 1} / {gallery.length}</span>
              </figcaption>
            </figure>

            <button type="button" onClick={() => setIndex(null)} aria-label="Close" className="pointer-events-auto absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-ivory/10 text-2xl text-ivory hover:bg-ivory/20">
              <HiX />
            </button>
            <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="pointer-events-auto absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 text-3xl text-ivory hover:bg-ivory/20 sm:grid sm:left-6">
              <HiChevronLeft />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next photo" className="pointer-events-auto absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 text-3xl text-ivory hover:bg-ivory/20 sm:grid sm:right-6">
              <HiChevronRight />
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}
