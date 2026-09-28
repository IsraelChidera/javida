"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { wedding } from "@/lib/wedding";

const links = [
  { href: "/#details", label: "Details" },
  { href: "/#families", label: "Families" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/get-directions", label: "Directions" },
];

export default function Navbar({ solid = false }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const bar = scrolled || open ? "bg-navy-950/90 backdrop-blur-md shadow-lg shadow-navy-950/20" : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${bar}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main">
        <Link href="/" className="font-script text-3xl text-gold-400" onClick={() => setOpen(false)}>
          {wedding.hashtag.replace("#", "")}
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-xs font-semibold uppercase tracking-[0.25em] text-ivory/80 transition-colors hover:text-gold-400 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full text-2xl text-ivory md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <HiX /> : <HiOutlineMenuAlt4 />}
        </button>
      </nav>

      <div id="mobile-menu" className="md:hidden" hidden={!open}>
        <ul className="flex flex-col px-5 pb-8 pt-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ivory/10 py-4 font-serif text-2xl text-ivory transition-colors hover:text-gold-400"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
