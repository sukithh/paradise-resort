
import Navbar from "../../components/Navbar";
import SuggestionForm from "@/components/SuggestionForm";

const experiences = [
  {
    title: "Poolside Relaxation",
    description:
      "Unwind by the pool, soak up the sunshine, and enjoy a refreshing escape.",
    icon: "🏊",
  },
  {
    title: "Nature Walks",
    description:
      "Explore lush tropical gardens and enjoy peaceful walks surrounded by nature.",
    icon: "🌿",
  },
  {
    title: "Fine Dining",
    description:
      "Enjoy memorable meals with delicious flavours and a relaxing atmosphere.",
    icon: "🍽️",
  },
  {
    title: "Wellness & Spa",
    description:
      "Recharge your body and mind with a calming wellness experience.",
    icon: "🧖",
  },
  {
    title: "Romantic Getaways",
    description:
      "Create special memories with a private, peaceful resort escape.",
    icon: "❤️",
  },
  {
    title: "Outdoor Adventures",
    description:
      "Make the most of your stay with outdoor activities and fresh air.",
    icon: "🌄",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="bg-neutral-950 px-6 py-20 text-center text-white">
        <p className="mb-4 tracking-[0.3em] text-gray-300">
          DISCOVER PARADISE
        </p>
        <h1 className="text-4xl font-bold md:text-6xl">
          Resort Experiences
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-gray-300">
          Make every moment memorable with relaxing escapes,
          delicious dining, and experiences inspired by nature.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 text-4xl">{experience.icon}</div>
            <h2 className="text-2xl font-semibold">
              {experience.title}
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              {experience.description}
            </p>
          </article>
        ))}
      </section>
<section className="relative overflow-hidden bg-[#11110f] px-6 py-24 sm:py-28">
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-700/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

  <div className="relative mx-auto max-w-3xl">
    <div className="mb-10 text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-amber-500">
        Your Voice Matters
      </p>

      <h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl">
        Help Us Make <span className="font-semibold text-amber-400">Paradise</span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-400">
        Every great experience begins with a thoughtful idea.
        Share your suggestions and help us make your next stay
        even more extraordinary.
      </p>
    </div>

    <SuggestionForm />

    <div className="mt-16 text-center">
      <div className="mx-auto mb-7 h-px w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <p className="text-xl font-light italic leading-relaxed text-gray-200 sm:text-3xl">
        “Where nature embraces luxury,
        <span className="text-amber-400"> and every moment becomes a memory.</span>”
      </p>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.4em] text-amber-500">
        Paradise Resort
      </p>
    </div>
  </div>
</section>

      <footer className="border-t border-gray-200 px-6 py-8 text-center text-gray-500">
        Paradise Resort
      </footer>
    </main>
    
  );
}


