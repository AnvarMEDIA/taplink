"use client";

interface LinkCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  iconBg?: string;
  badge?: string;
  badgeRed?: boolean;
  external?: boolean;
  delay?: number;
}

export default function LinkCard({
  href,
  icon,
  title,
  subtitle,
  iconBg = "from-orange-600 to-red-700",
  badge,
  badgeRed = false,
  external = true,
  delay = 0,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="su shimmer card-hover press block w-full glass rounded-2xl p-[1px] no-underline"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {/* Inner */}
      <div className="rounded-2xl px-4 py-3.5 flex items-center gap-4"
           style={{ background: "linear-gradient(135deg, rgba(255,140,30,0.04) 0%, rgba(220,38,38,0.02) 100%)" }}>

        {/* Icon */}
        <div className={`
          flex-shrink-0 w-12 h-12 rounded-xl
          bg-gradient-to-br ${iconBg}
          flex items-center justify-center text-white text-[18px]
          shadow-lg icon-glow
          transition-transform duration-300 group-hover:scale-110
        `}>
          {icon}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white font-bold text-[15px] tracking-wide">{title}</span>
            {badge && (
              <span className={`badge ${badgeRed ? "badge-red" : ""}`}>{badge}</span>
            )}
          </div>
          {subtitle && (
            <p className="text-[#a07050] text-xs mt-0.5 truncate">{subtitle}</p>
          )}
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                        bg-white/5 transition-all duration-300
                        group-hover:bg-orange-500/15">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
               stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </a>
  );
}
