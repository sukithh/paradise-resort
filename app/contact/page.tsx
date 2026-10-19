
import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pb-16 pt-24 text-center sm:pt-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-amber-500">
          We would love to hear from you
        </p>

        <h1 className="text-4xl font-light sm:text-6xl">
          Get in <span className="font-semibold text-amber-500">Touch</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
          Planning your perfect escape? Our team is here to help you with
          reservations, special requests, and any questions about your stay.
        </p>
      </section>

      {/* Contact details and form */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 md:grid-cols-2">
        <div className="rounded-3xl border border-amber-500/20 bg-white/[0.04] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-500">
            Contact information
          </p>

          <h2 className="mt-4 text-2xl font-semibold">
            Let us make your stay special
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            Reach out to us for bookings, enquiries, celebrations, or
            assistance with your resort experience.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <span className="text-xl">⌖</span>
              </div>
              <div>
                <h3 className="font-semibold">Our Location</h3>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Add your resort address here
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <span className="text-xl">☎</span>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Add your contact number here
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <span className="text-xl">✉</span>
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Add your official email here
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-amber-500/20 bg-black/30 p-5">
            <p className="text-sm font-medium text-amber-500">
              Your escape begins here
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Connect with our team and let us help you plan a memorable
              experience at Paradise Resort.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-3xl bg-white p-8 text-gray-900 shadow-2xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            Send us a message
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            How can we help?
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Fill in the details below and tell us how we can assist you.
          </p>

          <form
            action="mailto:YOUR_EMAIL_HERE"
            method="post"
            encType="text/plain"
            className="mt-8 space-y-5"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium"
              >
                Full name
              </label>
              <input
                id="contact-name"
                name="Name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>
              <input
                id="contact-email"
                name="Email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>
              <select
                id="contact-subject"
                name="Subject"
                defaultValue="Reservation enquiry"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              >
                <option>Reservation enquiry</option>
                <option>Room information</option>
                <option>Special occasion</option>
                <option>General enquiry</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="contact-message"
                name="Message"
                rows={5}
                placeholder="How can we help you?"
                required
                className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-black px-6 py-4 font-semibold text-white transition hover:bg-amber-600"
            >
              Send Message →
            </button>

            <p className="text-xs leading-5 text-gray-500">
              Email submission depends on your device's configured mail app.
              For reliable delivery, connect this form to a server-side email
              service.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Paradise Resort. All rights reserved.
      </footer>
    </main>
  );
}
