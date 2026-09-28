"use client";

import { useEffect, useRef, useState } from "react";
import { HiMusicNote } from "react-icons/hi";
import { HiSpeakerXMark } from "react-icons/hi2";

// Opt-in background music. Browsers block unsolicited audio and guests often open
// the site in quiet places, so playback only starts when the guest asks for it.
export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => () => audioRef.current?.pause(), []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.volume = 0.5;
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause music" : "Play our song"}
        className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-navy-900/90 py-3 pl-3 pr-4 text-ivory shadow-xl shadow-navy-950/30 ring-1 ring-gold-500/40 backdrop-blur-md transition-transform duration-300 hover:scale-105"
      >
        <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gold-500 text-navy-950">
          {!playing && <span className="absolute inset-0 animate-ping rounded-full bg-gold-500/60" />}
          {playing ? <HiSpeakerXMark className="relative" /> : <HiMusicNote className="relative" />}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">{playing ? "Pause" : "Play our song"}</span>
      </button>
    </>
  );
}
