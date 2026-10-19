import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import RoomCard from "../components/RoomCard";

export default function Home() {
  return (
    <main className="w-full min-w-0 max-w-full overflow-x-clip bg-[#0b0b0a] text-white">
      {/* Hero */}
      <section className="relative isolate flex min-h-[680px] w-full items-center justify-center overflow-hidden sm:min-h-[720px] lg:min-h-screen">
        <img
          src="/images/hero.jpg"
          alt="Paradise Resort surrounded by tropical nature"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#0b0b0a]/80" />

        <Navbar />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-8 pt-28 text-center text-white sm:px-6 sm:pt-32 lg:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-amber-300 sm:text-sm">
            A world of comfort and tranquility
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to <span className="text-amber-400">Paradise</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/90 sm:mt-6 sm:text-lg md:text-xl">
            Experience luxury, comfort and nature.
          </p>

          <a
            href="/booking"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-amber-400 bg-amber-400 px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-black/20 transition duration-300 hover:border-amber-300 hover:bg-amber-300 sm:px-8 sm:text-base"
          >
            Book Your Stay <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-[#0b0b0a] to-transparent" />
      </section>

      {/* Features */}
      <section className="w-full overflow-hidden bg-[#0b0b0a] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 sm:text-sm">
              Discover the Difference
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Why Choose <span className="text-amber-400">Paradise?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Thoughtful details, exceptional comfort, and memorable
              experiences in one peaceful destination.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <FeatureCard
              icon="🏊"
              title="Swimming Pool"
              description="Relax and enjoy our beautiful swimming pool surrounded by nature."
            />

            <FeatureCard
              icon="🍽️"
              title="Fine Dining"
              description="Enjoy delicious meals prepared with fresh and local ingredients."
            />

            <FeatureCard
              icon="🌿"
              title="Nature Experiences"
              description="Discover peaceful surroundings and unforgettable outdoor experiences."
            />
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="w-full overflow-hidden border-y border-white/5 bg-[#11110f] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 sm:text-sm">
              Stay With Us
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Our Rooms <span className="text-amber-400">&amp; Suites</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Find your own peaceful retreat, designed for comfort,
              relaxation, and privacy.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            <RoomCard
              image="/images/deluxe-room.jpg"
              name="Deluxe Garden Room"
              description="A peaceful room with beautiful views of our tropical gardens."
              price="₹8,000"
            />

            <RoomCard
              image="/images/suite.jpg"
              name="Luxury Suite"
              description="A spacious suite designed for comfort, privacy and relaxation."
              price="₹12,000"
            />

            <RoomCard
              image="/images/villa.jpg"
              name="Private Villa"
              description="Enjoy your own private villa surrounded by nature and tranquility."
              price="₹18,000"
            />
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <a
              href="/rooms"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-amber-400/50 px-7 py-3 text-sm font-semibold text-amber-300 transition duration-300 hover:border-amber-400 hover:bg-amber-400 hover:text-black sm:text-base"
            >
              Explore All Rooms <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking call to action */}
      <section className="relative isolate w-full overflow-hidden bg-[#0b0b0a] px-4 py-16 text-center text-white sm:px-6 sm:py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/25 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 sm:text-sm">
            Your Escape Awaits
          </p>

          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Ready for Your <span className="text-amber-400">Perfect Getaway?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Discover a place to relax, reconnect with nature, and create
            unforgettable memories.
          </p>

          <a
            href="/booking"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:bg-amber-300 sm:px-8 sm:text-base"
          >
            Reserve Your Escape <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-amber-500/20 bg-[#080807] px-4 py-9 text-center text-sm text-gray-400 sm:px-6">
        <a
          href="/"
          className="text-lg font-bold tracking-wide text-white transition hover:text-amber-400"
        >
          Paradise <span className="text-amber-400">Resort</span>
        </a>

        <p className="mt-3 text-sm text-gray-500">
          Escape to Paradise. Experience Luxury.
        </p>

        <div className="mx-auto my-5 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

        <p className="text-xs leading-6 sm:text-sm">
          © {new Date().getFullYear()} Paradise Resort. All rights reserved.
        </p>
      </footer>
    </main>
  );
}