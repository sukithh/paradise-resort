"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-20">
      <div className="mx-auto max-w-md">

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <div className="mb-8 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-500">
              Paradise Resort
            </p>

            <h1 className="text-4xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-3 text-gray-600">
              Login to manage your bookings.
            </p>
          </div>

          <div className="space-y-6">

            <div>
              <label className="mb-2 block font-medium">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
            >
              Login
            </button>

          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-black hover:underline"
            >
              Create one
            </a>
          </p>

        </div>

      </div>
    </main>
  );
}