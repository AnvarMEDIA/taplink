"use client";

import { useEffect } from "react";

// Module-level flag: prevents double-fire in React StrictMode dev
let didTrack = false;

export default function TrackVisit() {
  useEffect(() => {
    if (didTrack) return;
    didTrack = true;

    // Also deduplicate within the browser session
    try {
      if (sessionStorage.getItem("mc:v")) return;
      sessionStorage.setItem("mc:v", "1");
    } catch { /* private browsing */ }

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        referrer: document.referrer,
        ua: navigator.userAgent,
      }),
    }).catch(() => {});
  }, []);

  return null;
}
