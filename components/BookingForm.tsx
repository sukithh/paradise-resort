"use client";

import { useState } from "react";

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [room, setRoom] = useState("Deluxe Garden Room");
  const [message, setMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const roomPrices: { [key: string]: number } = {
  "Deluxe Garden Room": 8000,
  "Luxury Suite": 12000,
  "Private Villa": 18000,
};
const calculateNights = () => {
  if (!checkIn || !checkOut) {
    return 0;
  }

  const start = new Date(checkIn);
  const end = new Date(checkOut);

  const difference = end.getTime() - start.getTime();

  const nights = difference / (1000 * 60 * 60 * 24);

  return nights > 0 ? nights : 0;
};
const calculateTotal = () => {
  const nights = calculateNights();
  const pricePerNight = roomPrices[room];

  return nights * pricePerNight;
};
const handleAvailability = () => {
  if (!checkIn || !checkOut) {
    setMessage("Please select your check-in and check-out dates.");
    return;
  }

  const start = new Date(checkIn);
  const end = new Date(checkOut);

  if (end <= start) {
    setMessage("Check-out date must be after check-in date.");
    return;
  }

  setMessage(
    `${room} is available for ${guests} guest(s) from ${checkIn} to ${checkOut}.`
  );
};
const handleBooking = () => {
  const id = `PR-${Math.floor(100000 + Math.random() * 900000)}`;

  setBookingId(id);
  setConfirmed(true);
  setMessage("Your booking has been confirmed successfully!");
};
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <div className="mb-8 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
          Reservations
        </p>

        <h2 className="text-3xl font-bold">
          Book Your Stay
        </h2>

        <p className="mt-3 text-gray-600">
          Plan your perfect getaway at Paradise Resort.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-medium">
            Check-in
          </label>

          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Check-out
          </label>

          <input
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Guests
          </label>

          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
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
          <label className="mb-2 block font-medium">
            Room Type
          </label>

          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          >
            <option>Deluxe Garden Room</option>
            <option>Luxury Suite</option>
            <option>Private Villa</option>
          </select>
        </div>

      </div>

   <button
  type="button"
  onClick={handleAvailability}
  className="mt-8 w-full rounded-full bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
>
  Check Availability
</button>
{message && !confirmed && checkIn && checkOut && (
  <button
    type="button"
    onClick={handleBooking}
    className="mt-4 w-full rounded-full bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
  >
    Confirm Booking
  </button>
)}
<div className="mt-6 text-center">
  <p className="text-sm text-gray-500">
    Total Price
  </p>

  <p className="mt-1 text-3xl font-bold">
    ₹{calculateTotal().toLocaleString("en-IN")}
  </p>
</div>

{confirmed ? (
  <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
    <div className="mb-3 text-4xl">
      ✓
    </div>

    <h3 className="text-2xl font-bold text-green-800">
      Booking Confirmed!
    </h3>
    <p className="mt-2 text-sm font-semibold tracking-wider text-green-700">
  Booking ID: {bookingId}
</p>

    <p className="mt-2 text-green-700">
      Your stay at Paradise Resort has been successfully booked.
    </p>

    <div className="mt-6 space-y-2 text-left">
      <p>
        <span className="font-semibold">Room:</span> {room}
      </p>

      <p>
        <span className="font-semibold">Guests:</span> {guests}
      </p>

      <p>
        <span className="font-semibold">Check-in:</span> {checkIn}
      </p>

      <p>
        <span className="font-semibold">Check-out:</span> {checkOut}
      </p>

      <p>
        <span className="font-semibold">Total:</span>{" "}
        ₹{calculateTotal().toLocaleString("en-IN")}
      </p>
    </div>
  </div>
) : (
  message && (
    <p className="mt-6 text-center font-medium text-green-700">
      {message}
    </p>
  )
)}
</div>
  );
}
