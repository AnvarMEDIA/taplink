"use client";

import { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="slide-up delay-9 glass rounded-2xl p-4 flex items-center gap-4 group hover:border-purple-500/30 transition-all duration-300 border border-white/5">
      {/* Album art */}
      <div className="relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
        {isPlaying && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="flex items-end gap-0.5 h-4">
              {[1,2,3,4].map((i) => (
                <div
                  key={i}
                  className="music-bar w-1 bg-white rounded-full"
                  style={{ height: "4px" }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Track info */}
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold truncate">Favourite Track</p>
        <p className="text-gray-400 text-xs truncate">Artist Name</p>
        <div className="mt-1.5 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[45%] transition-all duration-300" />
        </div>
      </div>

      {/* Play/Pause */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 active:scale-90"
      >
        {isPlaying ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "2px" }}>
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        )}
      </button>
    </div>
  );
}
