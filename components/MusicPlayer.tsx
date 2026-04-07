"use client";

import { useState } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="su d9 glass rounded-2xl p-4 flex items-center gap-4
                    border border-orange-500/10 hover:border-orange-500/25
                    transition-colors duration-300">
      {/* Album art */}
      <div className="relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden
                      bg-gradient-to-br from-orange-700 to-red-800 shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity="0.7">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        {playing && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="flex items-end gap-0.5 h-5">
              {[1,2,3,4].map(i => (
                <div key={i} className="bar w-[3px] rounded-full"
                     style={{ height: "4px", background: "#f97316" }} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-bold text-sm truncate tracking-wide">Now Playing</p>
        <p className="text-[#a07050] text-xs truncate">Your Favourite Track</p>
        <div className="mt-2 h-0.5 bg-white/8 rounded-full overflow-hidden">
          <div className="h-full rounded-full w-[38%]"
               style={{ background: "linear-gradient(90deg, #f97316, #dc2626)" }} />
        </div>
      </div>

      {/* Play/pause */}
      <button
        onClick={() => setPlaying(!playing)}
        className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center
                   bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/20
                   transition-all duration-200 active:scale-90"
      >
        {playing ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#f97316">
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#f97316" style={{ marginLeft: "2px" }}>
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        )}
      </button>
    </div>
  );
}
