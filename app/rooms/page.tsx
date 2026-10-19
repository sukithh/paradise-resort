import Navbar from "../../components/Navbar";
export default function RoomsPage() {
  const rooms = [
    {
      name: "Deluxe Garden Room",
      price: "₹8,000",
      description: "A peaceful room with beautiful views of our tropical gardens.",
    },
    {
      name: "Luxury Suite",
      price: "₹12,000",
      description: "A spacious suite designed for comfort, privacy and relaxation.",
    },
    {
      name: "Private Villa",
      price: "₹18,000",
      description: "Enjoy your own private villa surrounded by nature and tranquility.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
        <Navbar />
      <section className="bg-neutral-950 px-6 py-20 text-center text-white">
        <p className="mb-4 tracking-[0.3em] text-gray-300">
          YOUR STAY, YOUR WAY
        </p>
        <h1 className="text-4xl font-bold md:text-6xl">
          Rooms & Suites
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-gray-300">
          Discover your perfect escape at Paradise Resort.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
        {rooms.map((room) => (
          <article
            key={room.name}
            className="rounded-2xl border border-gray-200 p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold">{room.name}</h2>
            <p className="mt-4 leading-7 text-gray-600">
              {room.description}
            </p>
            <p className="mt-6 text-xl font-bold">{room.price} / night</p>
            <a
              href="/#booking"
              className="mt-6 inline-block rounded-full bg-black px-6 py-3 font-semibold text-white"
            >
              Book Your Stay
            </a>
          </article>
        ))}
      </section>

      <footer className="border-t border-gray-200 px-6 py-8 text-center text-gray-500">
        Paradise Resort
      </footer>
    </main>
  );
}
