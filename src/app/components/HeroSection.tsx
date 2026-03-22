import { siteContent } from "../../../content/reflections";
import EmberParticles from "./EmberParticles";
import CampfireGlow from "./CampfireGlow";
import AudioPlayer from "./AudioPlayer";

export default function HeroSection() {
  const { heading, subtitle, ctaText } = siteContent.hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background effects */}
      <EmberParticles />
      <CampfireGlow />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
        {/* Decorative campfire icon */}
        <div className="text-5xl sm:text-6xl mb-2 motion-safe:animate-glow-pulse rounded-full">
          {"\uD83D\uDD25"}
        </div>

        {/* Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-warmwhite leading-tight tracking-tight">
          {heading}
        </h1>

        {/* Subtitle */}
        <p className="text-warmgray text-lg sm:text-xl max-w-lg leading-relaxed">
          {subtitle}
        </p>

        {/* Audio Player */}
        <AudioPlayer />

        {/* CTA Button */}
        <a
          href="#about"
          className="inline-flex items-center gap-2 mt-4 px-8 py-3.5 rounded-full bg-ember-500/15 border border-ember-500/30 text-ember-300 hover:bg-ember-500/25 hover:border-ember-500/50 hover:text-ember-200 transition-all duration-300 text-sm sm:text-base font-medium"
        >
          {ctaText}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M8 3v10M4 9l4 4 4-4" />
          </svg>
        </a>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-night-950))",
        }}
      />
    </section>
  );
}
