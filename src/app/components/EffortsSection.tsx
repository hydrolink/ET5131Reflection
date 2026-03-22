import { siteContent } from "../../../content/reflections";
import LectureCard from "./LectureCard";

export default function EffortsSection() {
  const { heading, intro, lectures } = siteContent.efforts;

  return (
    <div>
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-warmwhite mb-4">
        {heading}
      </h2>
      <p className="text-warmgray leading-relaxed text-base sm:text-lg mb-10">
        {intro}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lectures.map((lecture, i) => (
          <LectureCard key={i} lecture={lecture} />
        ))}
      </div>
    </div>
  );
}
