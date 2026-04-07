"use client";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color?: string;
}

export default function SocialIcon({ href, icon, label, color = "hover:bg-purple-500/20 hover:border-purple-500/40" }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        tooltip group
        w-11 h-11 rounded-full flex items-center justify-center
        glass border border-white/10
        ${color}
        transition-all duration-300
        hover:scale-110 hover:shadow-lg
        active:scale-95
        text-gray-300 hover:text-white
      `}
      data-tip={label}
    >
      {icon}
    </a>
  );
}
