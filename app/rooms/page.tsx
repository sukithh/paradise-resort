import Navbar from "../../components/Navbar";

const rooms = [
  {
    name: "Deluxe Garden Room",
    price: "₹8,000",
    image: "/images/deluxe-room.jpg",
    description:
      "A peaceful room with beautiful views of our tropical gardens.",
    features: ["Garden views", "King-size comfort", "Relaxing ambience"],
  },
  {
    name: "Luxury Suite",
    price: "₹12,000",
    image: "/images/suite.jpg",
    description:
      "A spacious suite designed for comfort, privacy and relaxation.",
    features: ["Spacious interiors", "Premium comfort", "Private relaxation"],
  },
  {
    name: "Private Villa",
    price: "₹18,000",
    image: "/images/villa.jpg",
    description:
      "Enjoy your own private villa surrounded by nature and tranquility.",
    features: ["Private retreat", "Nature surroundings", "Elevated luxury"],
  },
];

export default function RoomsPage() {
  return (
    <main className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#0b0b0a] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[370px] w-full items-center justify-center overflow-hidden px-4 pb-12 pt-32 text-center sm:min-h-[430px] sm:px-6 sm:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/40 via-[#11110f] to-[#0b0b0a]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        <Navbar />

        <div className="relative z-10 mx-auto w-full max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 sm:text-sm sm:tracking-[0.4em]">
            Your Stay, Your Way
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Rooms <span className="text-amber-400">&amp; Suites</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Discover your perfect escape at Paradise Resort, where comfort,
            privacy, and thoughtful luxury come together.
          </p>

          <div className="mx-auto mt-7 h-0.5 w-16 rounded-full bg-amber-400/80" />
        </div>
      </section>

      {/* Room collection */}
      <section className="w-full bg-[#0b0b0a] px-4 pb-20 pt-6 sm:px-6 sm:pt-10 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              Find Your Retreat
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              A Stay Made for You
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Explore our collection of inviting rooms, elegant suites, and
              private escapes.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {rooms.map((room) => (
              <article
                key={room.name}
                className="group min-w-0 overflow-hidden rounded-3xl border border-amber-500/15 bg-[#11110f] shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-950/20"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={room.image}
                    alt={room.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-amber-300 backdrop-blur-sm">
                    Paradise Collection
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 lg:p-7">
                  <h2 className="break-words text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-amber-400 sm:text-2xl">
                    {room.name}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                    {room.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {room.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <span className="mt-0.5 text-amber-400" aria-hidden="true">
                          ✦
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="my-6 h-px bg-gradient-to-r from-amber-500/40 via-white/10 to-transparent" />

                  {/* Price and CTA */}
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                        Starting from
                      </p>
                      <p className="mt-1 text-xl font-semibold text-amber-400 sm:text-2xl">
                        {room.price}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">per night</p>
                    </div>

                    <a
                      href="/booking"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border border-amber-400 bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:border-amber-300 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#11110f]"
                    >
                      Book Your Stay <span className="ml-2" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-amber-500/15 bg-[#11110f] px-4 py-14 text-center sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
          Your Escape Awaits
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
          Find Your Perfect Place to Unwind
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Make your next getaway a memorable one at Paradise Resort.
        </p>
        <a
          href="/booking"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-amber-300"
        >
          Reserve Your Stay →
        </a>
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