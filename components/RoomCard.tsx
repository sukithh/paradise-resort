type RoomCardProps = {
  image: string;
  name: string;
  description: string;
  price: string;
};

export default function RoomCard({
  image,
  name,
  description,
  price,
}: RoomCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-500/15 bg-[#11110f] shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-950/20">
      {/* Room image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-300 backdrop-blur-sm">
          Paradise Resort
        </span>
      </div>

      {/* Room details */}
      <div className="p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-400 sm:text-2xl">
          {name}
        </h3>

        <p className="mt-3 min-h-12 text-sm leading-7 text-gray-400 sm:text-base">
          {description}
        </p>

        <div className="my-6 h-px bg-gradient-to-r from-amber-500/40 via-white/10 to-transparent" />

        {/* Price and booking link */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Starting from
            </p>

            <p className="mt-1 text-xl font-semibold text-amber-400 sm:text-2xl">
              {price}
              <span className="ml-1 text-xs font-normal text-gray-400">
                / night
              </span>
            </p>
          </div>

          <a
            href="/booking"
            className="inline-flex items-center justify-center rounded-full border border-amber-400 bg-amber-400 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:border-amber-300 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#11110f]"
          >
            Book Room <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}