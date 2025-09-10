"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5; 
      audio.play().catch(() => {}); // Try to play on mount
    }
  }, []);

  return (
    <audio ref={audioRef} src="/music.mp3" autoPlay loop hidden />
  );
}
