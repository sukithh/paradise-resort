
"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Experiences", href: "/experiences" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-50 w-full max-w-full text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="shrink-0 text-xl font-bold leading-tight sm:text-2xl"
          aria-label="Paradise Resort home"
          onClick={() => setMenuOpen(false)}
        >
          Paradise Resort
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop booking button */}
        <a
          href="/booking"
         className="hidden shrink-0 rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:bg-amber-400 lg:inline-flex lg:px-6"
        >
          Book Now
        </a>

        {/* Mobile and tablet controls */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href="/booking"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-400 sm:px-5"
          >
            Book Now
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 text-2xl transition hover:bg-white/10"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile and tablet menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mx-4 rounded-2xl border border-white/15 bg-black/95 p-3 shadow-2xl backdrop-blur-xl sm:mx-6 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-base transition hover:bg-white/10 hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
