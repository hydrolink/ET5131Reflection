"use client";

import { useRef, useState, useCallback } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.volume = volume;
      audio.play().catch(() => {
        // Browser blocked autoplay — user will need to click again
      });
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, volume]);

  const handleVolume = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = parseFloat(e.target.value);
      setVolume(v);
      if (audioRef.current) {
        audioRef.current.volume = v;
      }
    },
    []
  );

  return (
    <div className="flex items-center gap-3 rounded-full bg-night-800/60 backdrop-blur-md border border-night-700 px-4 py-2.5 sm:px-5 sm:py-3">
      <audio ref={audioRef} src="/audio/lofi-ambient.mp3" loop preload="none" />

      {/* Play / Pause button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}
        aria-pressed={isPlaying}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-ember-500/20 hover:bg-ember-500/30 transition-colors text-ember-400 hover:text-ember-300 flex-shrink-0"
      >
        {isPlaying ? (
          // Pause icon
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <rect x="3" y="2" width="4" height="12" rx="1" />
            <rect x="9" y="2" width="4" height="12" rx="1" />
          </svg>
        ) : (
          // Play icon
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M4 2.5v11l9-5.5L4 2.5z" />
          </svg>
        )}
      </button>

      {/* Label */}
      <span className="text-warmgray text-xs sm:text-sm whitespace-nowrap select-none">
        {isPlaying ? "Playing..." : "Ambient Music"}
      </span>

      {/* Volume slider */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={volume}
        onChange={handleVolume}
        aria-label="Volume"
        className="w-16 sm:w-20 cursor-pointer"
      />
    </div>
  );
}
