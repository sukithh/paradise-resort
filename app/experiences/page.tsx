
"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import SuggestionForm from "@/components/SuggestionForm";

const experiences = [
  {
    title: "Poolside Relaxation",
    description:
      "Unwind by the pool, soak up the sunshine, and enjoy a refreshing escape.",
    icon: "🏊",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Nature Walks",
    description:
      "Explore lush tropical gardens and enjoy peaceful walks surrounded by nature.",
    icon: "🌿",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Fine Dining",
    description:
      "Enjoy memorable meals with delicious flavours and a relaxing atmosphere.",
    icon: "🍽️",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Wellness & Spa",
    description:
      "Recharge your body and mind with a calming wellness experience.",
    icon: "🧖",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Romantic Getaways",
    description:
      "Create special memories with a private, peaceful resort escape.",
    icon: "❤️",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Outdoor Adventures",
    description:
      "Make the most of your stay with outdoor activities and fresh air.",
    icon: "🌄",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ExperiencesPage() {
  const [selectedExperience, setSelectedExperience] =
    useState<(typeof experiences)[number] | null>(null);

  return (
    <main className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#0b0b0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden px-4 pb-16 pt-32 text-center sm:min-h-[440px] sm:px-6 sm:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/40 via-[#11110f] to-[#0b0b0a]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 sm:text-sm sm:tracking-[0.4em]">
            Discover Paradise
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Resort <span className="text-amber-400">Experiences</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Make every moment memorable with relaxing escapes, delicious
            dining, and experiences inspired by nature.
          </p>

          <div className="mx-auto mt-7 h-0.5 w-16 rounded-full bg-amber-400/80" />
        </div>
      </section>

      {/* Experience cards */}
      <section className="bg-[#0b0b0a] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              Moments Worth Remembering
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Discover Your Kind of Paradise
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Explore our experiences and picture your perfect getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {experiences.map((experience, index) => (
              <article
                key={experience.title}
                className="group min-w-0 overflow-hidden rounded-3xl border border-amber-500/15 bg-[#11110f] shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-950/20"
              >
                {/* Experience photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-amber-300 backdrop-blur-sm">
                    Experience {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card details */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-2xl">
                      {experience.icon}
                    </span>

                    <h2 className="min-w-0 break-words text-xl font-semibold text-white transition-colors group-hover:text-amber-400">
                      {experience.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-6">
                    

                    <a
                      href="/booking"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#11110f]"
                    >
                      Plan Your Stay <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo preview modal */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedExperience(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelectedExperience(null);
          }}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedExperience.title} photo`}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-amber-500/30 bg-[#11110f] shadow-2xl shadow-black/50"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedExperience(null)}
              aria-label="Close photo preview"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/70 text-2xl text-white transition hover:border-amber-400 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              ×
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black">
              <img
                src={selectedExperience.image}
                alt={selectedExperience.title}
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
                  Paradise Resort
                </p>
                <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  {selectedExperience.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {selectedExperience.description}
                </p>
              </div>

              <a
                href="/booking"
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
              >
                Book Your Stay →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Suggestions */}
      <section className="relative overflow-hidden border-y border-amber-500/15 bg-[#11110f] px-4 py-16 sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-700/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-3xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 sm:tracking-[0.4em]">
              Your Voice Matters
            </p>

            <h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl">
              Help Us Make{" "}
              <span className="font-semibold text-amber-400">Paradise</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Every exceptional stay begins with listening. Share your ideas
              and help us create even more extraordinary experiences.
            </p>
          </div>

          <SuggestionForm />

          <div className="mt-14 text-center sm:mt-16">
            <div className="mx-auto mb-7 h-px w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            <p className="text-xl font-light italic leading-relaxed text-gray-200 sm:text-3xl">
              “Where luxury meets nature,
              <span className="text-amber-400">
                {" "}and extraordinary moments become timeless memories.
              </span>
              ”
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 sm:tracking-[0.4em]">
              Paradise Resort
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/20 bg-[#080807] px-4 py-8 text-center sm:px-6">
        <a
          href="/"
          className="font-semibold tracking-wide text-white transition hover:text-amber-400"
        >
          Paradise <span className="text-amber-400">Resort</span>
        </a>

        <p className="mt-2 text-sm text-gray-500">
          Escape to Paradise. Experience Luxury.
        </p>

        <p className="mt-5 text-xs text-gray-500">
          © {new Date().getFullYear()} Paradise Resort. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
