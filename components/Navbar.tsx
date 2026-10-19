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
    <nav className="absolute inset-x-0 top-0 z-50 w-full text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          aria-label="Paradise Resort home"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 text-xl font-bold leading-tight tracking-wide transition-colors duration-300 hover:text-amber-400 sm:text-2xl"
        >
          Paradise <span className="text-amber-400">Resort</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-white/85 transition-colors duration-300 hover:text-amber-400 xl:text-base"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop booking button */}
        <a
          href="/booking"
          className="hidden shrink-0 rounded-full border border-amber-400 bg-amber-400 px-6 py-3 font-semibold text-black shadow-lg shadow-amber-950/20 transition duration-300 hover:border-amber-300 hover:bg-amber-300 lg:inline-flex"
        >
          Book Your Stay
        </a>

        {/* Mobile and tablet controls */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href="/booking"
            className="rounded-full border border-amber-400 bg-amber-400 px-3 py-2.5 text-sm font-semibold text-black transition duration-300 hover:bg-amber-300 sm:px-5"
          >
            Book Now
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/50 bg-black/60 text-2xl text-amber-400 transition duration-300 hover:bg-amber-400/10"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile and tablet menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mx-4 rounded-2xl border border-amber-400/20 bg-[#0b0b0a]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:mx-6 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-base text-white/90 transition-colors duration-300 hover:bg-amber-400/10 hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-xl bg-amber-400 px-4 py-3 text-center font-semibold text-black transition-colors duration-300 hover:bg-amber-300"
          >
            Book Your Stay →
          </a>
        </div>
      )}
    </nav>
  );
}