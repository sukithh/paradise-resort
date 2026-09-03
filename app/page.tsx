import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import RoomCard from "../components/RoomCard";
import BookingForm from "../components/BookingForm";



export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="relative h-screen w-full">
        <img
          src="/images/hero.jpg"
          alt="Paradise Resort"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em]">
              Welcome to Paradise
            </p>

            <h1 className="text-5xl font-bold md:text-7xl">
              Escape to Paradise
            </h1>

            <p className="mt-6 text-lg md:text-xl">
              Experience luxury, comfort and nature.
            </p>

            <a
  href="#booking"
  className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-gray-200"
>
  Book Your Stay
</a>
          </div>
        </div>
      </section>
      <section className="px-8 py-20">

  <div className="mx-auto max-w-6xl">

    <div className="mb-12 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
        Discover the Difference
      </p>

      <h2 className="text-4xl font-bold">
        Why Choose Paradise?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        Everything you need for a relaxing and unforgettable stay.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">

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
<section className="bg-gray-50 px-8 py-20">

  <div className="mx-auto max-w-6xl">

    <div className="mb-12 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
        Stay With Us
      </p>

      <h2 className="text-4xl font-bold">
        Our Rooms & Suites
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        Choose the perfect space for your relaxing getaway.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">

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

   </div>

</section>

{/* Booking Section */}
<section id="booking" className="bg-gray-100 px-8 py-20">

  <div className="mx-auto max-w-4xl">

    <BookingForm />

  </div>

</section>

    </main>
  );
}