"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try autoplay muted (many browsers allow muted autoplay)
    audio.muted = true;
    audio.volume = 0.5;
    audio.play().catch(() => {
      console.log("Autoplay blocked, waiting for user interaction...");
    });

    // Unlock audio on first interaction
    const startMusic = () => {
      if (audio.paused) {
        audio.muted = false; // unmute
        audio.play().catch((err) => {
          console.warn("Play failed:", err);
        });
      }

      // Remove listeners after first play
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("keydown", startMusic);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);
    window.addEventListener("keydown", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("keydown", startMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      loop
      hidden   // 👈 better than style={{ display: "none" }}
      preload="auto"
    />
  );
}
