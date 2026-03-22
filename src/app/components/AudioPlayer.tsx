"use client";

import { useRef, useEffect } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;
    audio.play().catch(() => {
      // Browser blocked autoplay — will play on first click/tap/keypress
      const unlock = () => {
        audio.play().catch(() => {});
      };
      document.addEventListener("click", unlock, { once: true });
      document.addEventListener("keydown", unlock, { once: true });
      document.addEventListener("touchstart", unlock, { once: true });
      document.addEventListener("pointerdown", unlock, { once: true });
    });
  }, []);

  return (
    <audio ref={audioRef} src="/audio/lofi-ambient.mp3" loop preload="auto" />
  );
}
