"use client";

import { useState } from "react";

interface LinkCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  gradient?: string;
  badge?: string;
  external?: boolean;
  delay?: number;
}

export default function LinkCard({
  href,
  icon,
  title,
  subtitle,
  gradient = "from-purple-500/20 to-pink-500/20",
  badge,
  external = true,
  delay = 0,
}: LinkCardProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        slide-up group relative block w-full
        glass glass-hover shimmer-btn press-effect
        rounded-2xl p-4 cursor-pointer no-underline
        delay-${delay}
      `}
      style={{ animationDelay: `${delay * 0.1}s` }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      {/* Gradient background on hover */}
      <div
        className={`
          absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient}
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        `}
      />

      <div className="relative flex items-center gap-4">
        {/* Icon container */}
        <div
          className={`
            flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
            bg-gradient-to-br ${gradient} text-white text-xl
            shadow-lg group-hover:scale-110 transition-transform duration-300
          `}
        >
          {icon}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-sm sm:text-base truncate">
              {title}
            </span>
            {badge && (
              <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-500/30 text-purple-300 border border-purple-500/30 font-medium">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-gray-400 text-xs sm:text-sm truncate mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-all duration-300 group-hover:translate-x-1">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 group-hover:text-white transition-colors duration-300"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}
