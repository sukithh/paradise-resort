
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import RoomCard from "../components/RoomCard";

export default function Home() {
  return (
    <main className="w-full min-w-0 max-w-full overflow-x-clip bg-white">
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[680px] w-full items-center justify-center overflow-hidden sm:min-h-[720px] lg:min-h-screen">
        <img
          src="/images/hero.jpg"
          alt="Paradise Resort surrounded by tropical nature"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/45" />

        <Navbar />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-8 pt-28 text-center text-white sm:px-6 sm:pt-32 lg:px-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.3em]">
            Welcome to Paradise
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Escape to Paradise
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/90 sm:mt-6 sm:text-lg md:text-xl">
            Experience luxury, comfort and nature.
          </p>

          <a
            href="/booking"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-amber-400 sm:px-8 sm:text-base"
          >
            Book Your Stay
          </a>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/30 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="w-full overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
              Discover the Difference
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Why Choose Paradise?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Everything you need for a relaxing and unforgettable stay.
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

      {/* Rooms Section */}
      <section className="w-full overflow-hidden bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
              Stay With Us
            </p>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Our Rooms &amp; Suites
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Choose the perfect space for your relaxing getaway.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            <RoomCard
              image="/images/deluxe-room.jpg"
              name="Deluxe Garden Room"
              description="A peaceful room with beautiful views of our tropical gardens."
              price="₹8,000 / night"
            />

            <RoomCard
              image="/images/suite.jpg"
              name="Luxury Suite"
              description="A spacious suite designed for comfort, privacy and relaxation."
              price="₹12,000 / night"
            />

            <RoomCard
              image="/images/villa.jpg"
              name="Private Villa"
              description="Enjoy your own private villa surrounded by nature and tranquility."
              price="₹18,000 / night"
            />
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <a
              href="/rooms"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-gray-900 px-7 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white sm:text-base"
            >
              Explore All Rooms
            </a>
          </div>
        </div>
      </section>

      {/* Booking Call to Action */}
      <section className="w-full bg-neutral-950 px-4 py-14 text-center text-white sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-amber-400 sm:text-sm sm:tracking-[0.3em]">
            Your Escape Awaits
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Ready for Your Perfect Getaway?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
            Discover a place to relax, reconnect with nature, and create
            unforgettable memories.
          </p>

          <a
            href="/booking"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-amber-400 sm:px-8 sm:text-base"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-amber-100 bg-neutral-950 px-4 py-8 text-center text-sm text-gray-300 sm:px-6">
        <p className="font-semibold tracking-wide text-white">
          Paradise Resort
        </p>

        <p className="mt-2">Escape to Paradise. Experience Luxury.</p>

        <div className="mx-auto my-5 h-px w-full max-w-xs bg-amber-700/60" />

        <p className="text-xs leading-6 sm:text-sm">
          © {new Date().getFullYear()} Paradise Resort. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
