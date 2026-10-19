
import Navbar from "../../components/Navbar";
import BookingForm from "../../components/BookingForm";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <Navbar />

      <section className="bg-neutral-950 px-6 py-16 text-center text-white sm:py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-300">
          Reservations
        </p>

        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Book Your Stay
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-gray-300">
          Your perfect getaway at Paradise Resort begins here.
          Choose your dates, room, and number of guests.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <BookingForm />
      </section>

      <footer className="border-t border-gray-200 bg-white px-6 py-6 text-center text-sm text-gray-500">
        © 2026 Paradise Resort. All rights reserved.
      </footer>
    </main>
  );
}
