import ParticlesBackground from "@/components/ParticlesBackground";
import LinkCard from "@/components/LinkCard";
import SocialIcon from "@/components/SocialIcon";

// ─────────────────────────────────────────────
// METAL CITY — CONTENT
// ─────────────────────────────────────────────
const profile = {
  name: "METAL CITY",
  username: "@metalcity_uz",
  bio: "Оптовая и розничная продажа металлопроката в Ташкенте. Трубы, арматура, швеллер, профиль и фасонные изделия.",
  avatar: null as string | null,
  initials: "MC",
  verified: true,
  status: "Пн–Сб · 09:00 – 18:00",
};

const stats = [
  { label: "Позиций",   value: "500+" },
  { label: "Лет опыта", value: "10+"  },
  { label: "Клиентов",  value: "1K+"  },
];

const links = [
  {
    href: "tel:+998950810000",
    title: "Позвонить",
    subtitle: "+998 (95) 081-00-00",
    iconBg: "from-orange-600 to-red-700",
    badge: "Быстро",
    external: false,
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
      </svg>
    ),
  },
  {
    href: "https://wa.me/998950810000",
    title: "WhatsApp",
    subtitle: "Написать в WhatsApp",
    iconBg: "from-green-600 to-emerald-700",
    badge: "Онлайн",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    href: "https://t.me/metalcity_uz",
    title: "Telegram",
    subtitle: "@metalcity_uz",
    iconBg: "from-sky-600 to-blue-700",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/metalcity_uz/",
    title: "Instagram",
    subtitle: "@metalcity_uz · Фото и видео",
    iconBg: "from-pink-600 to-orange-600",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    href: "https://metalcity.uz",
    title: "Сайт metalcity.uz",
    subtitle: "Каталог и прайс-лист",
    iconBg: "from-orange-600 to-amber-700",
    badge: "Каталог",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    href: "https://play.google.com/store/apps/details?id=uz.bdmgroup.metalcity",
    title: "Приложение",
    subtitle: "Metal City · Google Play",
    iconBg: "from-emerald-600 to-teal-700",
    badge: "App",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.54 1.1C.2 1.42 0 1.96 0 2.67v18.67c0 .71.2 1.25.54 1.57l.08.08 10.46-10.46v-.25L.62 1.03l-.08.07zm20.1 9.1l-2.98-1.72-3.04 3.04 3.04 3.04 3-1.73c.86-.49.86-1.3-.02-1.63zM4.17.24l12.6 7.27-2.72 2.72L3.18.44C3.48.27 3.87.08 4.17.24z"/>
      </svg>
    ),
  },
  {
    href: "https://yandex.uz/maps/?text=Ташкент+ТКАД+99А",
    title: "Наш адрес",
    subtitle: "Ташкент, Учтепа, ТКАД 99А",
    iconBg: "from-red-600 to-rose-700",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

const socials = [
  {
    href: "https://www.instagram.com/metalcity_uz/",
    label: "Instagram",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
  },
  {
    href: "https://t.me/metalcity_uz",
    label: "Telegram",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
  },
  {
    href: "https://wa.me/998950810000",
    label: "WhatsApp",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>,
  },
  {
    href: "https://metalcity.uz",
    label: "Сайт",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    href: "https://play.google.com/store/apps/details?id=uz.bdmgroup.metalcity",
    label: "Google Play",
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.54 1.1C.2 1.42 0 1.96 0 2.67v18.67c0 .71.2 1.25.54 1.57l.08.08 10.46-10.46v-.25L.62 1.03l-.08.07zm20.1 9.1l-2.98-1.72-3.04 3.04 3.04 3.04 3-1.73c.86-.49.86-1.3-.02-1.63zM4.17.24l12.6 7.27-2.72 2.72L3.18.44C3.48.27 3.87.08 4.17.24z"/></svg>,
  },
];
// ─────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#0c0905" }}>
      <ParticlesBackground />

      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div className="orb-1 absolute top-[8%] left-[8%] w-80 h-80 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)" }} />
        <div className="orb-2 absolute top-[45%] right-[5%] w-96 h-96 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)" }} />
        <div className="orb-3 absolute bottom-[8%] left-[25%] w-72 h-72 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(217,119,6,0.07) 0%, transparent 70%)" }} />
        <div className="top-line absolute top-0 left-0 right-0 h-[2px]" />
        <div className="top-line absolute bottom-0 left-0 right-0 h-px opacity-40" />
        <div className="stripe-bg absolute inset-0 opacity-60" />
      </div>

      {/* MAIN */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-10 pb-16">
        <div className="w-full max-w-sm sm:max-w-md space-y-4">

          {/* ── PROFILE ── */}
          <div className="su d1 text-center py-8 px-4">

            {/* Logo / Avatar */}
            <div className="relative inline-block mb-6">
              <div className="pulse-ring absolute inset-[-10px] rounded-full border border-orange-500/30" />
              <div className="pulse-ring-2 absolute inset-[-10px] rounded-full border border-red-500/20" />

              {/* Rotating ring */}
              <div className="avatar-ring absolute inset-[-5px] rounded-full"
                   style={{ background: "conic-gradient(from 0deg, #f97316, #dc2626, #f59e0b, #f97316)", padding: "2px", borderRadius: "50%" }}>
                <div className="w-full h-full rounded-full" style={{ background: "#0c0905" }} />
              </div>

              {/* MC monogram */}
              <div className="relative w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-2xl select-none"
                   style={{ background: "linear-gradient(135deg, #c2410c, #7f1d1d)", boxShadow: "0 0 40px rgba(249,115,22,0.25), 0 0 80px rgba(249,115,22,0.08)" }}>
                <span className="text-white font-black text-[13px] tracking-[0.2em] leading-none">METAL</span>
                <span className="font-black text-[22px] leading-tight tracking-widest"
                      style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  CITY
                </span>
              </div>

              {/* Online dot */}
              <div className="status-dot absolute bottom-1 right-1 w-4 h-4 rounded-full border-2"
                   style={{ background: "#f97316", borderColor: "#0c0905" }} />
            </div>

            {/* Name */}
            <div className="flex items-center justify-center gap-2 mb-1">
              <h1 className="text-[26px] font-black text-white tracking-tight uppercase">
                {profile.name}
              </h1>
              {profile.verified && (
                <div className="tip" data-tip="Официальный аккаунт">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="url(#vg)" />
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

            <p className="text-sm font-semibold mb-3 tracking-widest uppercase" style={{ color: "#f97316" }}>
              {profile.username}
            </p>
            <p className="text-sm leading-relaxed max-w-xs mx-auto mb-5" style={{ color: "#c4956a" }}>
              {profile.bio}
            </p>

            {/* Hours badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border"
                 style={{ background: "rgba(249,115,22,0.08)", borderColor: "rgba(249,115,22,0.2)" }}>
              <div className="status-dot w-1.5 h-1.5 rounded-full" style={{ background: "#f97316" }} />
              <span className="text-xs font-medium" style={{ color: "#fdba74" }}>{profile.status}</span>
            </div>
          </div>

          {/* ── STATS ── */}
          <div className="su d2 rounded-2xl border overflow-hidden"
               style={{ background: "rgba(255,140,30,0.03)", borderColor: "rgba(249,115,22,0.1)" }}>
            <div className="grid grid-cols-3">
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

          {/* ── PRODUCTS BADGE ── */}
          <div className="su d4 glass rounded-2xl px-5 py-4 border border-orange-500/10">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "#78502a" }}>
              Ассортимент
            </p>
            <div className="flex flex-wrap gap-2">
              {["Трубы", "Арматура", "Швеллер", "Уголок", "Профиль", "Лист", "Балка", "Фасонные"].map(p => (
                <span key={p} className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", color: "#fdba74" }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div className="su d5 divider mx-4" />

          {/* ── LINKS ── */}
          <div className="space-y-3">
            {links.map((link, i) => (
              <LinkCard key={link.href} {...link} delay={i + 5} />
            ))}
          </div>

          {/* ── FOOTER ── */}
          <div className="su text-center pt-6 pb-2" style={{ animationDelay: "1.6s", opacity: 0 }}>
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
