type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <article className="group h-full rounded-2xl border border-amber-500/15 bg-[#11110f] p-7 text-center shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-[#15140f] hover:shadow-xl hover:shadow-amber-950/20 sm:p-8">
      {/* Icon */}
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-4xl transition-all duration-300 group-hover:border-amber-400/40 group-hover:bg-amber-400/15 group-hover:scale-105">
        <span role="img" aria-label={title}>
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-400">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-7 text-gray-400 sm:text-base">
        {description}
      </p>

      {/* Decorative accent */}
      <div className="mx-auto mt-6 h-0.5 w-10 rounded-full bg-amber-400/60 transition-all duration-300 group-hover:w-16 group-hover:bg-amber-400" />
    </article>
  );
}