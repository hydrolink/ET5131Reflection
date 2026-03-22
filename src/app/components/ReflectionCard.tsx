import type { PersonalReflection } from "../../../content/reflections";

interface ReflectionCardProps {
  reflection: PersonalReflection;
}

export default function ReflectionCard({ reflection }: ReflectionCardProps) {
  return (
    <article className="bg-night-800/50 rounded-2xl p-6 sm:p-8 border border-night-700/50">
      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-warmwhite mb-4">
        {reflection.title}
      </h3>

      <p className="text-warmgray leading-relaxed text-base mb-5">
        {reflection.content}
      </p>

      {reflection.quote && (
        <blockquote className="border-l-2 border-ember-500 pl-4 py-1">
          <p className="font-heading italic text-ember-300/90 text-sm sm:text-base leading-relaxed">
            &ldquo;{reflection.quote}&rdquo;
          </p>
        </blockquote>
      )}
    </article>
  );
}
