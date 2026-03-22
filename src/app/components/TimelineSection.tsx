import { siteContent } from "../../../content/reflections";
import TimelineEntry from "./TimelineEntry";

export default function TimelineSection() {
  const { heading, entries } = siteContent.timeline;

  return (
    <div>
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-warmwhite mb-10">
        {heading}
      </h2>

      <div className="ml-1">
        {entries.map((entry, i) => (
          <TimelineEntry
            key={i}
            entry={entry}
            isLast={i === entries.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
