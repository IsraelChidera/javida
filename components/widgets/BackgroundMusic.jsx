"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  const startMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch(() => {
        console.log("Autoplay blocked until user interacts.");
      });
    }
  };

  useEffect(() => {
    startMusic();

    const resumeOnUserAction = () => startMusic();
    window.addEventListener("click", resumeOnUserAction);
    window.addEventListener("keydown", resumeOnUserAction);

    return () => {
      window.removeEventListener("click", resumeOnUserAction);
      window.removeEventListener("keydown", resumeOnUserAction);
    };
  }, []);

  return <audio ref={audioRef} src="/music.mp3" loop hidden />;
}
