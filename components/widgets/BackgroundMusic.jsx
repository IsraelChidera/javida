"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      // Start muted for autoplay policy, then unmute on interaction
      audio.muted = true;
      audio.load();

      const startMusic = () => {
        if (audio.paused) {
          audio.muted = false;
          audio.volume = 0.5;
          audio.play().catch(() => {});
        }
        window.removeEventListener("touchstart", startMusic);
        window.removeEventListener("scroll", startMusic);
        window.removeEventListener("click", startMusic);
        window.removeEventListener("keydown", startMusic);
      };

      window.addEventListener("touchstart", startMusic, { passive: true });
      window.addEventListener("scroll", startMusic, { passive: true });
      window.addEventListener("click", startMusic);
      window.addEventListener("keydown", startMusic);

      return () => {
        window.removeEventListener("touchstart", startMusic);
        window.removeEventListener("scroll", startMusic);
        window.removeEventListener("click", startMusic);
        window.removeEventListener("keydown", startMusic);
      };
    }, []);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      loop
        style={{ display: "none" }}
      preload="auto"
    />
  );
}
