import { siteContent } from "../../../content/reflections";

export default function AboutSection() {
  const { heading, paragraphs } = siteContent.about;

  return (
    <div>
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-warmwhite mb-8">
        {heading}
      </h2>
      <div className="space-y-5">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-warmgray leading-relaxed text-sm sm:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
