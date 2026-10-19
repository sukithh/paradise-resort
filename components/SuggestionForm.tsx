
"use client";

import { useState } from "react";

export default function SuggestionForm() {
  const [name, setName] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (suggestion.trim().length < 5) {
      setIsSuccess(false);
      setStatus("Please enter at least 5 characters.");
      return;
    }

    setIsSending(true);
    setStatus("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          suggestion: suggestion.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not send your suggestion.");
      }

      setIsSuccess(true);
      setStatus("Thank you! Your suggestion has been sent successfully.");
      setName("");
      setSuggestion("");
    } catch (error) {
      setIsSuccess(false);
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-3xl rounded-3xl border border-amber-500/30 bg-white p-6 shadow-2xl sm:p-10"
    >
      <label
        htmlFor="guest-name"
        className="mb-3 block text-lg font-semibold text-gray-900"
      >
        Your name <span className="text-sm font-normal text-gray-500">(optional)</span>
      </label>

      <input
        id="guest-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        maxLength={100}
        autoComplete="name"
        className="mb-6 w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
      />

      <label
        htmlFor="suggestion"
        className="mb-3 block text-lg font-semibold text-gray-900"
      >
        Share your suggestions
      </label>

      <textarea
        id="suggestion"
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
        placeholder="Tell us how we can make your stay more special..."
        rows={5}
        minLength={5}
        maxLength={1000}
        required
        className="w-full resize-y rounded-2xl border border-gray-200 bg-gray-50 p-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
      />

      <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-gray-500">
          Your feedback helps us create better experiences.
        </p>

        <button
          type="submit"
          disabled={isSending}
          className="rounded-full bg-black px-7 py-3 font-semibold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? "Sending..." : "Send Suggestion"}
        </button>
      </div>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-4 text-sm font-medium ${
            isSuccess ? "text-green-700" : "text-red-700"
          }`}
        >
          {status}
        </p>
      )}

      <p className="mt-8 text-center text-sm italic text-gray-500">
        “Every great escape begins with a thoughtful touch.”
      </p>
    </form>
  );
}
