import ParticlesBackground from "@/components/ParticlesBackground";
import LinkCard from "@/components/LinkCard";
import SocialIcon from "@/components/SocialIcon";
import MusicPlayer from "@/components/MusicPlayer";

// ============================================================
// EDIT YOUR DATA HERE
// ============================================================
const profile = {
  name: "Your Name",
  username: "@yourname",
  bio: "Creative developer & designer. Building cool things on the internet ✨",
  avatar: null as string | null, // Set to image URL or null for initials
  avatarInitials: "YN",
  verified: true,
  status: "Available for work",
};

const stats = [
  { label: "Projects", value: "42+" },
  { label: "Followers", value: "10K" },
  { label: "Countries", value: "30+" },
];

const links = [
  {
    href: "https://t.me/yourname",
    title: "Telegram",
    subtitle: "Message me directly",
    gradient: "from-blue-500/20 to-cyan-500/20",
    badge: "Active",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    href: "https://instagram.com/yourname",
    title: "Instagram",
    subtitle: "Photos & stories",
    gradient: "from-pink-500/20 to-orange-500/20",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    href: "https://youtube.com/@yourname",
    title: "YouTube",
    subtitle: "Videos & tutorials",
    gradient: "from-red-500/20 to-orange-500/20",
    badge: "New",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/yourname",
    title: "GitHub",
    subtitle: "Open source projects",
    gradient: "from-gray-500/20 to-slate-500/20",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    href: "https://yourwebsite.com",
    title: "Portfolio",
    subtitle: "My work & case studies",
    gradient: "from-purple-500/20 to-indigo-500/20",
    badge: "Portfolio",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    href: "mailto:hello@yourname.com",
    title: "Email",
    subtitle: "hello@yourname.com",
    gradient: "from-emerald-500/20 to-teal-500/20",
    external: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

const socialLinks = [
  {
    href: "https://t.me/yourname",
    label: "Telegram",
    color: "hover:bg-blue-500/20 hover:border-blue-500/40",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    href: "https://twitter.com/yourname",
    label: "Twitter / X",
    color: "hover:bg-sky-500/20 hover:border-sky-500/40",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    href: "https://instagram.com/yourname",
    label: "Instagram",
    color: "hover:bg-pink-500/20 hover:border-pink-500/40",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/yourname",
    label: "LinkedIn",
    color: "hover:bg-blue-600/20 hover:border-blue-600/40",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    href: "https://tiktok.com/@yourname",
    label: "TikTok",
    color: "hover:bg-rose-500/20 hover:border-rose-500/40",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
      </svg>
    ),
  },
];
// ============================================================

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <ParticlesBackground />

      {/* Floating orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div className="orb-1 absolute top-[10%] left-[10%] w-72 h-72 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="orb-2 absolute top-[40%] right-[5%] w-96 h-96 rounded-full bg-pink-600/8 blur-3xl" />
        <div className="orb-3 absolute bottom-[10%] left-[30%] w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-10 pb-16">
        <div className="w-full max-w-sm sm:max-w-md space-y-4">

          {/* ── Profile Card ── */}
          <div className="slide-up delay-1 text-center py-8 px-4">
            {/* Avatar */}
            <div className="relative inline-block mb-5">
              {/* Pulse rings */}
              <div className="pulse-ring absolute inset-0 rounded-full border-2 border-purple-500/50 m-[-8px]" />
              <div className="pulse-ring absolute inset-0 rounded-full border-2 border-pink-500/30 m-[-8px]" style={{ animationDelay: "1s" }} />

              {/* Rotating gradient ring */}
              <div className="avatar-ring absolute inset-[-4px] rounded-full">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
                </div>
              </div>

              {/* Avatar */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl glow-purple">
                {profile.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-2xl font-bold text-white">{profile.avatarInitials}</span>
                )}
              </div>

              {/* Status dot */}
              <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#0a0a0f] status-dot" />
            </div>

            {/* Name & username */}
            <div className="flex items-center justify-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
              {profile.verified && (
                <div className="tooltip" data-tip="Verified">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="url(#vg)" />
                    <path d="M7 12l3.5 3.5L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="vg" x1="0" y1="0" x2="24" y2="24">
                        <stop stopColor="#a855f7"/>
                        <stop offset="1" stopColor="#ec4899"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>

            <p className="text-purple-400 text-sm font-medium mb-3">{profile.username}</p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto mb-5">{profile.bio}</p>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 status-dot" />
              <span className="text-gray-300 text-xs">{profile.status}</span>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className="slide-up delay-2 glass rounded-2xl p-4 grid grid-cols-3 gap-2 border border-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-1">
                <div className="text-xl font-bold gradient-text stat-value">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* ── Social icons ── */}
          <div className="slide-up delay-3 flex justify-center gap-2.5 flex-wrap px-2">
            {socialLinks.map((s) => (
              <SocialIcon key={s.label} {...s} />
            ))}
          </div>

          {/* ── Music player ── */}
          <MusicPlayer />

          {/* ── Links ── */}
          <div className="space-y-3">
            {links.map((link, i) => (
              <LinkCard
                key={link.href}
                {...link}
                delay={i + 4}
              />
            ))}
          </div>

          {/* ── Footer ── */}
          <div className="slide-up text-center pt-6 pb-2" style={{ animationDelay: "1.2s", opacity: 0 }}>
            <p className="text-gray-600 text-xs">
              Made with{" "}
              <span className="gradient-text font-medium">✦ love</span>
              {" "}& Next.js
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
