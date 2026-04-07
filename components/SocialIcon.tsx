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
      className="tip soc-icon"
      data-tip={label}
    >
      {icon}
    </a>
  );
}
