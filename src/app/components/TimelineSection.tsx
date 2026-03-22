import { siteContent } from "../../../content/reflections";
import TimelineEntry from "./TimelineEntry";

export default function TimelineSection() {
  const { heading, entries } = siteContent.timeline;

  return (
    <div>
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-warmwhite mb-10">
        {heading}
      </h2>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:grid gap-4 relative" style={{ gridTemplateColumns: `repeat(${entries.length}, 1fr)` }}>
        {/* Connecting line behind dots — spans between first and last dot centers */}
        <div
          className="absolute top-[5px] h-px bg-night-700 z-0"
          style={{
            left: `${100 / (2 * entries.length)}%`,
            right: `${100 / (2 * entries.length)}%`,
          }}
        />

        {entries.map((entry, i) => (
          <div key={i} className="flex flex-col items-center text-center px-2">
            {/* Dot */}
            <div className="w-3 h-3 rounded-full bg-ember-500 ring-4 ring-night-950 z-10 flex-shrink-0 mb-5" />
            {/* Date */}
            <span className="text-warmgray-dark text-xs font-medium uppercase tracking-wider mb-1">
              {entry.date}
            </span>
            {/* Title */}
            <h3 className="font-heading text-sm font-semibold text-warmwhite mb-2">
              {entry.title}
            </h3>
            {/* Content */}
            <p className="text-warmgray text-xs leading-relaxed">
              {entry.content}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden ml-1">
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
