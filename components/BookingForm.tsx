"use client";

import { useState } from "react";
import LuxuryDatePicker from "./LuxuryDatePicker";

const ROOM_PRICES: Record<string, number> = {
  "Deluxe Garden Room": 8000,
  "Luxury Suite": 12000,
  "Private Villa": 18000,
};

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [room, setRoom] = useState("Deluxe Garden Room");
  const [message, setMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const today = getToday();

  const nights =
    checkIn && checkOut && checkOut > checkIn
      ? Math.round(
          (new Date(`${checkOut}T00:00:00`).getTime() -
            new Date(`${checkIn}T00:00:00`).getTime()) /
            86400000
        )
      : 0;

  const total = nights * ROOM_PRICES[room];

  const inputClass =
    "w-full min-w-0 rounded-xl border border-white/10 bg-[#0b0b0a] px-4 py-3.5 text-white outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20";

  const labelClass = "mb-2 block text-sm font-medium text-gray-200";

  function handleAvailability() {
    setConfirmed(false);
    setBookingId("");

    if (!checkIn || !checkOut) {
      setMessage("Please select your check-in and check-out dates.");
      return;
    }

    if (checkIn < today) {
      setMessage("Check-in cannot be in the past.");
      return;
    }

    if (checkOut <= checkIn) {
      setMessage("Check-out must be after check-in.");
      return;
    }

    setMessage(
      `${room} can be requested for ${guests} guest(s), from ${checkIn} to ${checkOut}.`
    );
  }

  function handleBooking() {
    if (!checkIn || !checkOut || checkIn < today || checkOut <= checkIn) {
      setMessage("Please select valid check-in and check-out dates.");
      setConfirmed(false);
      return;
    }

    setBookingId(`PR-${Math.floor(100000 + Math.random() * 900000)}`);
    setConfirmed(true);
    setMessage("");
  }

  return (
    <section className="rounded-3xl border border-amber-500/20 bg-[#11110f] p-5 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
      <header className="mb-8 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400 sm:text-sm">
          Reservations
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Book Your <span className="text-amber-400">Stay</span>
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
          Plan your perfect getaway at Paradise Resort.
        </p>
      </header>

      {/* All booking fields share one responsive grid. */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        <LuxuryDatePicker
          label="Check-in"
          value={checkIn}
          minDate={today}
          onChange={(date) => {
            setCheckIn(date);
            if (checkOut && checkOut <= date) setCheckOut("");
            setConfirmed(false);
            setMessage("");
          }}
        />

        <LuxuryDatePicker
          label="Check-out"
          value={checkOut}
          minDate={checkIn || today}
          onChange={(date) => {
            setCheckOut(date);
            setConfirmed(false);
            setMessage("");
          }}
        />

        <div>
          <label htmlFor="booking-guests" className={labelClass}>
            Guests
          </label>
          <select
            id="booking-guests"
            value={guests}
            onChange={(event) => {
              setGuests(event.target.value);
              setConfirmed(false);
              setMessage("");
            }}
            className={inputClass}
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6+ Guests</option>
          </select>
        </div>

        <div>
          <label htmlFor="booking-room" className={labelClass}>
            Room Type
          </label>
          <select
            id="booking-room"
            value={room}
            onChange={(event) => {
              setRoom(event.target.value);
              setConfirmed(false);
              setMessage("");
            }}
            className={inputClass}
          >
            <option>Deluxe Garden Room</option>
            <option>Luxury Suite</option>
            <option>Private Villa</option>
          </select>
        </div>
      </div>

      {/* Price summary */}
      <div className="mt-8 rounded-2xl border border-amber-500/20 bg-black/30 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-white">{room}</p>
            <p className="mt-1 text-xs text-gray-400">
              ₹{ROOM_PRICES[room].toLocaleString("en-IN")} per night
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Estimated total
            </p>
            <p className="mt-1 text-2xl font-bold text-amber-400 sm:text-3xl">
              ₹{total.toLocaleString("en-IN")}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {nights} night(s)
            </p>
          </div>
        </div>

        <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-gray-500">
          Estimated room cost only. Actual availability, taxes, and extra
          guest charges have not been verified.
        </p>
      </div>

      <button
        type="button"
        onClick={handleAvailability}
        className="mt-6 w-full rounded-full bg-amber-400 px-6 py-4 font-semibold text-black transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#11110f]"
      >
        Check Availability →
      </button>

      {message && (
        <p
          role="status"
          className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-center text-sm leading-6 text-amber-200"
        >
          {message}
        </p>
      )}

      {message.includes("can be requested") && !confirmed && (
        <button
          type="button"
          onClick={handleBooking}
          className="mt-4 w-full rounded-full border border-amber-400/40 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-amber-400/10 hover:text-amber-300"
        >
          Continue with Booking →
        </button>
      )}

      {confirmed && (
        <div
          role="status"
          className="mt-8 rounded-2xl border border-amber-400/30 bg-black/30 p-5 sm:p-7"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-3xl text-amber-400">
            ✓
          </div>

          <h3 className="text-2xl font-semibold text-white sm:text-3xl">
            Booking Request Created
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            This reference was created in your browser session. Contact the
            resort to verify availability and finalize your stay.
          </p>

          <p className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm font-semibold text-amber-300">
            Reference ID: {bookingId}
          </p>

          <div className="mt-6 space-y-3 text-sm text-gray-300">
            <p><span className="font-medium text-white">Room:</span> {room}</p>
            <p><span className="font-medium text-white">Guests:</span> {guests}</p>
            <p><span className="font-medium text-white">Check-in:</span> {checkIn}</p>
            <p><span className="font-medium text-white">Check-out:</span> {checkOut}</p>
            <p><span className="font-medium text-white">Nights:</span> {nights}</p>
            <p>
              <span className="font-medium text-white">Estimated total:</span>{" "}
              <span className="font-semibold text-amber-400">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}