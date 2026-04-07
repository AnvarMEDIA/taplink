"use client";

interface LinkCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  iconBg?: string;
  accentColor?: string;
  badge?: string;
  badgeGreen?: boolean;
  external?: boolean;
  delay?: number;
}

export default function LinkCard({
  href,
  icon,
  title,
  subtitle,
  iconBg = "from-orange-600 to-red-700",
  accentColor = "#f97316",
  badge,
  badgeGreen = false,
  external = true,
  delay = 0,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="su link-card"
      style={
        { "--accent": accentColor, animationDelay: `${delay * 0.08}s` } as React.CSSProperties
      }
    >
      {/* Icon */}
      <div className={`icon-box bg-gradient-to-br ${iconBg} shadow-lg`}>
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-white font-bold text-[15px] leading-tight truncate">
            {title}
          </span>
          {badge && (
            <span className={`badge ${badgeGreen ? "badge-green" : ""}`}>
              {badge}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-[13px] mt-0.5 truncate" style={{ color: "#9a6035" }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Arrow */}
      <div className="card-arrow">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5"
             strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </a>
  );
}
