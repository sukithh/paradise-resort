
"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

const quickQuestions = [
  "What are your room prices?",
  "What experiences do you offer?",
  "How can I book a stay?",
  "How can I contact the resort?",
];

function getAnswer(question: string): string {
  const q = question.toLowerCase();

  if (
    q.includes("price") ||
    q.includes("cost") ||
    q.includes("rate") ||
    q.includes("room") ||
    q.includes("suite") ||
    q.includes("villa")
  ) {
    return "We currently list these accommodation options:\n\n• Deluxe Garden Room — ₹8,000 per night\n• Luxury Suite — ₹12,000 per night\n• Private Villa — ₹18,000 per night\n\nThese are displayed starting prices. Please contact the resort to confirm availability, taxes, and final rates.";
  }

  if (
    q.includes("experience") ||
    q.includes("activity") ||
    q.includes("activities") ||
    q.includes("do there") ||
    q.includes("things to do")
  ) {
    return "Explore our resort experiences:\n\n🏊 Poolside Relaxation\n🌿 Nature Walks\n🍽️ Fine Dining\n🧖 Wellness & Spa\n❤️ Romantic Getaways\n🌄 Outdoor Adventures\n\nVisit the Experiences page to discover more.";
  }

  if (
    q.includes("book") ||
    q.includes("reservation") ||
    q.includes("reserve") ||
    q.includes("availability") ||
    q.includes("available") ||
    q.includes("stay")
  ) {
    return "We'd love to help you plan your stay! Visit our Booking page to submit your booking request. Please note that submitting a request does not guarantee a reservation; availability and confirmation must be verified by the resort team.";
  }

  if (
    q.includes("contact") ||
    q.includes("phone") ||
    q.includes("call") ||
    q.includes("email") ||
    q.includes("address") ||
    q.includes("location") ||
    q.includes("reach")
  ) {
    return "You can find the resort's contact details on this page. Please note that the phone number, email address, and location currently contain example information and should be verified before you rely on them.";
  }

  if (
    q.includes("payment") ||
    q.includes("pay") ||
    q.includes("refund") ||
    q.includes("cancel") ||
    q.includes("cancellation")
  ) {
    return "For payment, cancellation, refund, or booking-policy details, please contact the resort team directly. I don't have verified policy information to provide.";
  }

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey") ||
    q.includes("good morning") ||
    q.includes("good evening")
  ) {
    return "Hello and welcome to Paradise Resort! ✨ How can I help you plan your getaway today?";
  }

  return "Thanks for your question! I can help with room prices, resort experiences, booking requests, and contact information. Try one of the suggested questions below, or contact the resort team for anything more specific.";
}

export default function ContactPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Welcome to Paradise Resort! ✨ I'm your virtual resort assistant. Ask me about our rooms, experiences, or booking requests.",
    },
  ]);

  function sendMessage(text: string) {
    const question = text.trim();

    if (!question) return;

    const answer = getAnswer(question);

    setMessages((current) => [
      ...current,
      { role: "user", text: question },
      { role: "assistant", text: answer },
    ]);

    setInput("");
  }

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
        {/* Contact Information */}
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
                <a
                  href="tel:+919876543210"
                  className="mt-1 inline-block text-sm text-gray-400 transition hover:text-amber-500"
                >
                  +91 98765 43210
                </a>
                <p className="mt-1 text-xs text-gray-500">
                  Example number — replace before launch
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <span className="text-xl">✉</span>
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:info@paradiseresort.example"
                  className="mt-1 inline-block break-all text-sm text-gray-400 transition hover:text-amber-500"
                >
                  info@paradiseresort.example
                </a>
                <p className="mt-1 text-xs text-gray-500">
                  Example address — replace before launch
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

        {/* Contact Form */}
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
            action="mailto:YOUR_REAL_EMAIL_HERE"
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
                autoComplete="name"
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
                autoComplete="email"
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
              This form uses your device's configured mail app. For reliable
              message delivery, connect it to a server-side email service.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Paradise Resort. All rights reserved.
      </footer>

      {/* Floating chat launcher */}
      <button
        type="button"
        onClick={() => setChatOpen((open) => !open)}
        aria-label={chatOpen ? "Close resort assistant" : "Open resort assistant"}
        aria-expanded={chatOpen}
        className="fixed bottom-5 right-5 z-[110] flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/50 bg-amber-400 text-black shadow-xl shadow-black/40 transition hover:scale-105 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#0b0b0a] sm:bottom-7 sm:right-7"
      >
        {chatOpen ? (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l1.7-3.5A8.5 8.5 0 1 1 21 11.5Z" />
            <path d="M8 11h.01M12 11h.01M16 11h.01" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {chatOpen && (
        <section
          aria-label="Paradise Resort virtual assistant"
          className="fixed bottom-24 right-3 z-[110] flex h-[min(590px,calc(100dvh-8rem))] w-[calc(100vw-1.5rem)] max-w-[390px] flex-col overflow-hidden rounded-3xl border border-amber-500/25 bg-[#11110f] shadow-2xl shadow-black/60 sm:bottom-28 sm:right-7"
        >
          <header className="flex items-center gap-3 border-b border-amber-500/20 bg-[#0b0b0a] p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xl text-black">
              ✦
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-white">Paradise Assistant</h2>
              <p className="mt-0.5 text-xs text-amber-400">
                Resort information · Instant replies
              </p>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
              className="rounded-lg px-2 py-1 text-xl text-gray-400 transition hover:text-white"
            >
              ×
            </button>
          </header>

          <div
            className="flex-1 space-y-4 overflow-y-auto p-4"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-sm bg-amber-400 text-black"
                      : "rounded-bl-sm border border-white/10 bg-white/[0.05] text-gray-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="pt-1">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                  Suggested questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      type="button"
                      key={question}
                      onClick={() => sendMessage(question)}
                      className="rounded-full border border-amber-500/30 px-3 py-2 text-left text-xs leading-5 text-amber-300 transition hover:bg-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="border-t border-amber-500/20 bg-[#0b0b0a] p-3"
          >
            <div className="flex items-end gap-2">
              <label htmlFor="assistant-message" className="sr-only">
                Ask Paradise Assistant a question
              </label>
              <textarea
                id="assistant-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage(input);
                  }
                }}
                rows={1}
                placeholder="Ask us anything..."
                className="max-h-24 min-h-11 flex-1 resize-y rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-amber-400"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] leading-4 text-gray-600">
              Automated answers based on website information.
            </p>
          </form>
        </section>
      )}
    </main>
  );
}
