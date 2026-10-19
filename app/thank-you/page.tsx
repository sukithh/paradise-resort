
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-neutral-950 px-4 py-12 text-white">
      <section className="w-full max-w-2xl rounded-3xl border border-amber-500/30 bg-gradient-to-b from-neutral-900 to-black px-5 py-12 text-center shadow-2xl sm:px-10 sm:py-16">
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-4xl text-amber-400">
          ✓
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 sm:text-sm">
          Your Voice Matters
        </p>

        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Thank You for Sharing
        </h1>

        <div className="mx-auto my-6 h-px w-24 bg-amber-500" />

        <p className="mx-auto max-w-lg text-base leading-8 text-gray-300 sm:text-lg">
          Your suggestion means a lot to us. Thank you for helping us make
          every Paradise Resort experience more memorable.
        </p>

        <p className="mt-6 text-sm italic leading-7 text-amber-200/80 sm:text-base">
          “The finest experiences are created when we listen, care, and grow
          together.”
        </p>

        <Link
          href="/experiences"
          className="mt-9 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-amber-500 px-7 py-3 font-semibold text-black transition hover:bg-amber-400 sm:w-auto"
        >
          Return to Experiences
        </Link>

        <p className="mt-8 text-xs tracking-wide text-gray-500">
          PARADISE RESORT · YOUR ESCAPE, OUR PASSION
        </p>
      </section>
    </main>
  );
}
