import { siteContent } from "../../../content/reflections";
import ReflectionCard from "./ReflectionCard";

export default function AuthenticitySection() {
  const { heading, intro, reflections } = siteContent.authenticity;

  return (
    <div>
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-warmwhite mb-4">
        {heading}
      </h2>
      <p className="text-warmgray leading-relaxed text-sm sm:text-base mb-10">
        {intro}
      </p>

      <div className="space-y-6">
        {reflections.map((reflection, i) => (
          <ReflectionCard key={i} reflection={reflection} />
        ))}
      </div>
    </div>
  );
}
