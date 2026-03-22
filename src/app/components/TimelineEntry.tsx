import type { TimelineEntry as TimelineEntryType } from "../../../content/reflections";

interface TimelineEntryProps {
  entry: TimelineEntryType;
  isLast: boolean;
}

export default function TimelineEntry({ entry, isLast }: TimelineEntryProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-ember-500 ring-4 ring-night-950 z-10" />
        {!isLast && (
          <div className="w-0.5 flex-1 bg-night-700 mt-1" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
        <span className="text-warmgray-dark text-xs font-medium uppercase tracking-wider">
          {entry.date}
        </span>
        <h3 className="font-heading text-lg font-semibold text-warmwhite mt-1 mb-2">
          {entry.title}
        </h3>
        <p className="text-warmgray text-sm leading-relaxed max-w-lg">
          {entry.content}
        </p>
      </div>
    </div>
  );
}
