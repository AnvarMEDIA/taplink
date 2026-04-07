import ParticlesBackground from "@/components/ParticlesBackground";
import LinkCard from "@/components/LinkCard";
import SocialIcon from "@/components/SocialIcon";
import TrackVisit from "@/components/TrackVisit";
import { getContent } from "@/lib/content";
import { getIcon } from "@/lib/icons";

export const dynamic = "force-dynamic"; // always fresh after revalidatePath

export default async function Home() {
  const content = await getContent();
  const { profile, stats, products, cta, links, socials } = content;

  const enabledCta   = cta.filter(c => c.enabled);
  const enabledLinks = links.filter(l => l.enabled);
  const hasLinks     = enabledLinks.length > 0;
  const hasSocials   = socials.length > 0;
  const hasProducts  = products.length > 0;
  const hasStats     = stats.length > 0;

  // CTA grid: 1 button → full width, 2+ → 2 columns
  const ctaGridCls = enabledCta.length === 1 ? "grid grid-cols-1" : "grid grid-cols-2";

  // Stats grid: adapt columns to item count (max 3)
  const statsCols = Math.min(stats.length, 3) || 1;

  return (
    <main className="relative min-h-screen noise safe-bottom" style={{ background: "#0c0905" }}>
      <TrackVisit />
      <ParticlesBackground />

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div className="orb-1 absolute top-[6%] left-[5%] w-80 h-80 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />
        <div className="orb-2 absolute top-[50%] right-[3%] w-96 h-96 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)" }} />
        <div className="orb-3 absolute bottom-[5%] left-[20%] w-72 h-72 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(217,119,6,0.07) 0%, transparent 70%)" }} />
        <div className="top-line absolute top-0 left-0 right-0 h-[2px]" />
        <div className="stripe-bg absolute inset-0" />
      </div>

      {/* ── PAGE ── */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 pt-8 pb-12">
        <div className="w-full max-w-[390px] space-y-3">

          {/* ━━━ PROFILE CARD ━━━ */}
          <div className="su d1 glass rounded-3xl px-5 pt-8 pb-6 text-center">

            {/* Avatar */}
            <div className="relative inline-block mb-5">
              <div className="pulse-ring absolute inset-[-10px] rounded-full border border-orange-500/25" />
              <div className="pulse-ring-2 absolute inset-[-10px] rounded-full border border-red-500/15" />

              {/* Spinning ring */}
              <div className="avatar-ring absolute inset-[-4px] rounded-full"
                   style={{ background: "conic-gradient(from 0deg, #f97316 0%, #dc2626 40%, #f59e0b 70%, #f97316 100%)", padding: "2.5px", borderRadius: "50%" }}>
                <div className="w-full h-full rounded-full" style={{ background: "#0c0905" }} />
              </div>

              {/* Avatar: image or initials fallback */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden flex items-center justify-center"
                   style={{ background: profile.avatar ? "#fff" : "linear-gradient(135deg,#c2410c,#7f1d1d)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                {profile.avatar ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    width={112}
                    height={112}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <span className="text-white text-3xl font-black tracking-tight select-none">
                    {(profile.name || "MC").slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>

              {/* Live dot */}
              <div className="status-dot absolute bottom-1.5 right-1.5 w-[14px] h-[14px] rounded-full border-2"
                   style={{ background: "#f97316", borderColor: "#0c0905" }} />
            </div>

            {/* Name + verified */}
            <div className="flex items-center justify-center gap-2 mb-1">
              <h1 className="text-2xl font-black text-white tracking-tight">
                {profile.name || "METAL CITY"}
              </h1>
              {profile.verified && (
                <div className="tip flex-shrink-0" data-tip="Официальный аккаунт">
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

            {profile.username && (
              <p className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
                 style={{ color: "#f97316" }}>
                {profile.username}
              </p>
            )}

            {profile.bio && (
              <p className="text-sm leading-relaxed mb-4 mx-auto max-w-[280px]"
                 style={{ color: "#b07048" }}>
                {profile.bio}
              </p>
            )}

            {/* Hours */}
            {profile.status && (
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                   style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)" }}>
                <div className="status-dot w-1.5 h-1.5 rounded-full flex-shrink-0"
                     style={{ background: "#f97316" }} />
                <span className="text-[12px] font-semibold" style={{ color: "#fbbf24" }}>
                  {profile.status}
                </span>
              </div>
            )}
          </div>

          {/* ━━━ STATS ━━━ */}
          {hasStats && (
            <div className="su d2 glass rounded-2xl overflow-hidden">
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${statsCols}, 1fr)` }}>
                {stats.map((s, i) => (
                  <div key={i} className="text-center py-4"
                       style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(249,115,22,0.1)" : "none" }}>
                    <div className="text-xl font-black grad-text leading-none mb-1">{s.value}</div>
                    <div className="section-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ━━━ SOCIAL ICONS ━━━ */}
          {hasSocials && (
            <div className="su d3 flex justify-center gap-3 py-1">
              {socials.map(s => (
                <SocialIcon key={s.label} href={s.href} label={s.label} icon={getIcon(s.iconType, "sm")} />
              ))}
            </div>
          )}

          {/* ━━━ PRIMARY CTA ━━━ */}
          {enabledCta.length > 0 && (
            <div className={`su d4 ${ctaGridCls} gap-3`}>
              {enabledCta.map((btn, i) => (
                <a
                  key={btn.id}
                  href={btn.href}
                  target={btn.cls === "cta-call" ? "_self" : "_blank"}
                  rel={btn.cls === "cta-call" ? undefined : "noopener noreferrer"}
                  className={`cta-btn ${btn.cls} su`}
                  style={{ animationDelay: `${0.29 + i * 0.08}s` }}
                >
                  {getIcon(btn.iconType, "lg")}
                  <span>{btn.label}</span>
                </a>
              ))}
            </div>
          )}

          {/* ━━━ PRODUCTS ━━━ */}
          {hasProducts && (
            <div className="su d5 glass rounded-2xl px-4 py-4">
              <p className="section-label mb-3">Ассортимент</p>
              <div className="flex flex-wrap gap-2">
                {products.map((p, i) => (
                  <span key={i} className="prod-tag">{p}</span>
                ))}
              </div>
            </div>
          )}

          {/* ━━━ SECTION LABEL + LINKS ━━━ */}
          {hasLinks && (
            <>
              <div className="su d6 flex items-center gap-3 px-1">
                <div className="flex-1 divider" />
                <span className="section-label">Контакты и ссылки</span>
                <div className="flex-1 divider" />
              </div>

              <div className="space-y-2.5">
                {enabledLinks.map((link, i) => (
                  <LinkCard
                    key={link.id}
                    href={link.href}
                    title={link.title}
                    subtitle={link.subtitle}
                    iconBg={link.iconBg}
                    accentColor={link.accentColor}
                    badge={link.badge}
                    badgeGreen={link.badgeGreen}
                    external={link.external !== false}
                    icon={getIcon(link.iconType)}
                    delay={i + 7}
                  />
                ))}
              </div>
            </>
          )}

          {/* ━━━ FOOTER ━━━ */}
          <div className="su text-center pt-4 pb-2" style={{ animationDelay: "1.2s" }}>
            <div className="divider mb-4" />
            <p className="section-label" style={{ color: "#3d2010" }}>
              Created by{" "}
              <span className="grad-text" style={{ fontWeight: 900, letterSpacing: "0.05em" }}>MAZE</span>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
