"use client";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="tip soc-icon w-11 h-11 rounded-full flex items-center justify-center
                 bg-white/[0.03] text-[#c07040] hover:text-[#f97316]
                 transition-colors duration-300"
      data-tip={label}
    >
      {icon}
    </a>
  );
}
