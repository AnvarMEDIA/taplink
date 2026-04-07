import ParticlesBackground from "@/components/ParticlesBackground";
import LinkCard from "@/components/LinkCard";
import SocialIcon from "@/components/SocialIcon";
import MusicPlayer from "@/components/MusicPlayer";

// ─────────────────────────────────────────────
// РЕДАКТИРУЙ ЗДЕСЬ
// ─────────────────────────────────────────────
const profile = {
  name: "Your Name",
  username: "@yourname",
  bio: "Creative developer & designer. Building cool things on the internet.",
  avatar: null as string | null,
  initials: "YN",
  verified: true,
  status: "Available for work",
};

const stats = [
  { label: "Проектов",    value: "42+" },
  { label: "Подписчиков", value: "10K" },
  { label: "Стран",       value: "30+" },
];

const links = [
  {
    href: "https://t.me/yourname",
    title: "Telegram",
    subtitle: "Написать напрямую",
    iconBg: "from-sky-600 to-blue-700",
    badge: "Активен",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    href: "https://instagram.com/yourname",
    title: "Instagram",
    subtitle: "Фото и сторис",
    iconBg: "from-pink-600 to-orange-600",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    href: "https://youtube.com/@yourname",
    title: "YouTube",
    subtitle: "Видео и туториалы",
    iconBg: "from-red-600 to-red-800",
    badge: "New",
    badgeRed: true,
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/yourname",
    title: "GitHub",
    subtitle: "Открытые проекты",
    iconBg: "from-gray-600 to-gray-800",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    href: "https://yourwebsite.com",
    title: "Портфолио",
    subtitle: "Мои работы и кейсы",
    iconBg: "from-orange-600 to-amber-700",
    badge: "Portfolio",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    iconBg: "from-emerald-700 to-teal-800",
    external: false,
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

const socials = [
  {
    href: "https://t.me/yourname", label: "Telegram",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
  },
  {
    href: "https://twitter.com/yourname", label: "X / Twitter",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    href: "https://instagram.com/yourname", label: "Instagram",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  },
  {
    href: "https://youtube.com/@yourname", label: "YouTube",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>,
  },
  {
    href: "https://tiktok.com/@yourname", label: "TikTok",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>,
  },
];
// ─────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#0c0905" }}>
      <ParticlesBackground />

      {/* Warm background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div className="orb-1 absolute top-[8%]  left-[8%]  w-80 h-80 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)" }} />
        <div className="orb-2 absolute top-[45%] right-[5%] w-96 h-96 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)" }} />
        <div className="orb-3 absolute bottom-[8%] left-[25%] w-72 h-72 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(217,119,6,0.07) 0%, transparent 70%)" }} />

        {/* Top accent line */}
        <div className="top-line absolute top-0 left-0 right-0 h-[2px]" />
        {/* Bottom accent line */}
        <div className="top-line absolute bottom-0 left-0 right-0 h-px opacity-40" />

        {/* Diagonal grid overlay */}
        <div className="stripe-bg absolute inset-0 opacity-60" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-10 pb-16">
        <div className="w-full max-w-sm sm:max-w-md space-y-4">

          {/* ── PROFILE ── */}
          <div className="su d1 text-center py-8 px-4">

            {/* Avatar */}
            <div className="relative inline-block mb-6">
              {/* Pulse rings */}
              <div className="pulse-ring absolute inset-[-10px] rounded-full border border-orange-500/30" />
              <div className="pulse-ring-2 absolute inset-[-10px] rounded-full border border-red-500/20" />

              {/* Rotating ring */}
              <div className="avatar-ring absolute inset-[-5px] rounded-full"
                   style={{ background: "conic-gradient(from 0deg, #f97316, #dc2626, #f59e0b, #f97316)", borderRadius: "50%", padding: "2px" }}>
                <div className="w-full h-full rounded-full" style={{ background: "#0c0905" }} />
              </div>

              {/* Avatar circle */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex items-center justify-center shadow-2xl"
                   style={{ background: "linear-gradient(135deg, #c2410c, #991b1b)", boxShadow: "0 0 40px rgba(249,115,22,0.25), 0 0 80px rgba(249,115,22,0.08)" }}>
                {profile.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-2xl font-black text-white tracking-tight">{profile.initials}</span>
                )}
              </div>

              {/* Status dot */}
              <div className="status-dot absolute bottom-1 right-1 w-4 h-4 rounded-full border-2"
                   style={{ background: "#f97316", borderColor: "#0c0905" }} />
            </div>

            {/* Name */}
            <div className="flex items-center justify-center gap-2 mb-1">
              <h1 className="text-[26px] font-black text-white tracking-tight uppercase">
                {profile.name}
              </h1>
              {profile.verified && (
                <div className="tip" data-tip="Verified">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="url(#vg)"/>
                    <path d="M7 12l3.5 3.5L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="vg" x1="0" y1="0" x2="24" y2="24">
                        <stop stopColor="#f97316"/><stop offset="1" stopColor="#dc2626"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>

            <p className="text-sm font-semibold mb-3 tracking-widest uppercase"
               style={{ color: "#f97316" }}>{profile.username}</p>

            <p className="text-sm leading-relaxed max-w-xs mx-auto mb-5"
               style={{ color: "#c4956a" }}>{profile.bio}</p>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border"
                 style={{ background: "rgba(249,115,22,0.08)", borderColor: "rgba(249,115,22,0.2)" }}>
              <div className="status-dot w-1.5 h-1.5 rounded-full" style={{ background: "#f97316" }} />
              <span className="text-xs font-medium" style={{ color: "#fdba74" }}>{profile.status}</span>
            </div>
          </div>

          {/* ── STATS ── */}
          <div className="su d2 rounded-2xl border overflow-hidden"
               style={{ background: "rgba(255,140,30,0.03)", borderColor: "rgba(249,115,22,0.1)" }}>
            <div className="grid grid-cols-3 divide-x divide-orange-900/30">
              {stats.map((s, i) => (
                <div key={s.label} className="text-center py-4 px-2"
                     style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(249,115,22,0.1)" : "none" }}>
                  <div className="text-[22px] font-black grad-text">{s.value}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider mt-0.5"
                       style={{ color: "#78502a" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SOCIAL ICONS ── */}
          <div className="su d3 flex justify-center gap-2.5 flex-wrap px-2">
            {socials.map(s => <SocialIcon key={s.label} {...s} />)}
          </div>

          {/* ── DIVIDER ── */}
          <div className="su d4 divider mx-4" />

          {/* ── MUSIC PLAYER ── */}
          <MusicPlayer />

          {/* ── DIVIDER ── */}
          <div className="su d5 divider mx-4" />

          {/* ── LINKS ── */}
          <div className="space-y-3">
            {links.map((link, i) => (
              <LinkCard key={link.href} {...link} delay={i + 5} />
            ))}
          </div>

          {/* ── FOOTER ── */}
          <div className="su text-center pt-6 pb-2" style={{ animationDelay: "1.4s", opacity: 0 }}>
            <div className="divider mb-5" />
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#4a3020" }}>
              Created by{" "}
              <span className="grad-text font-black">MAZE</span>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
