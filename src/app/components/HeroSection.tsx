"use client";

import { useEffect, useRef } from "react";
import { siteContent } from "../../../content/reflections";
import EmberParticles from "./EmberParticles";
import CampfireGlow from "./CampfireGlow";

export default function HeroSection() {
  const { heading, subtitle } = siteContent.hero;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      // Pause as soon as the hero is fully off screen
      { threshold: 0 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src="/audio/video/HeroBGvid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay so text remains readable over the video */}
      <div className="absolute inset-0 bg-night-950/55" />

      {/* Ember and glow effects layered on top of video */}
      <EmberParticles />
      <CampfireGlow />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
        {/* Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-warmwhite leading-tight tracking-tight drop-shadow-lg">
          {heading}
        </h1>

        {/* Subtitle */}
        <p className="text-warmgray text-lg sm:text-xl max-w-lg leading-relaxed drop-shadow">
          {subtitle.split("\n").map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </p>

        {/* CTA link */}
        <a
          href="#about"
          className="text-ember-300 hover:text-ember-200 transition-colors text-sm sm:text-base font-medium"
        >
          Begin reflection
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
