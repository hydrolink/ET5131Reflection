import { siteContent } from "../../../content/reflections";

export default function TakeawaysSection() {
  const { heading, insights, closingParagraph, closingQuote } =
    siteContent.takeaways;

  return (
    <div>
      <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-warmwhite mb-8">
        {heading}
      </h2>

      {/* Insights list */}
      <div className="space-y-4 mb-10">
        {insights.map((insight, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ember-500/15 border border-ember-500/30 flex items-center justify-center text-ember-400 text-sm font-medium">
              {i + 1}
            </span>
            <p className="text-warmgray leading-relaxed text-base pt-1">
              {insight}
            </p>
          </div>
        ))}
      </div>

      {/* Closing paragraph */}
      <p className="text-warmgray leading-relaxed text-base sm:text-lg mb-8">
        {closingParagraph}
      </p>

      {/* Closing quote */}
      {closingQuote && (
        <blockquote className="border-l-2 border-ember-500 pl-5 py-2 max-w-xl">
          <p className="font-heading italic text-ember-300/80 text-base sm:text-lg leading-relaxed">
            &ldquo;{closingQuote}&rdquo;
          </p>
        </blockquote>
      )}
    </div>
  );
}
