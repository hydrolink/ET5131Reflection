import type { LectureReflection } from "../../../content/reflections";

interface LectureCardProps {
  lecture: LectureReflection;
}

export default function LectureCard({ lecture }: LectureCardProps) {
  return (
    <article className="bg-night-800 rounded-2xl p-6 border border-night-700 hover:border-ember-500/30 transition-all duration-300 hover:shadow-[0_0_24px_rgba(249,115,22,0.08)]">
      {/* Icon */}
      <div className="text-3xl mb-4">{lecture.icon}</div>

      {/* Title */}
      <h3 className="font-heading text-xl font-semibold text-warmwhite mb-3">
        {lecture.title}
      </h3>

      {/* Summary */}
      <p className="text-warmgray text-sm leading-relaxed mb-4">
        {lecture.summary}
      </p>

      {/* Reflection points */}
      <ul className="space-y-2">
        {lecture.reflectionPoints.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-warmgray-dark"
          >
            <span className="text-ember-500 mt-1 flex-shrink-0">&#x2022;</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
