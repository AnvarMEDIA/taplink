"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { SiteContent, LinkItem, CtaItem } from "@/lib/content";
import { ICON_LABELS } from "@/lib/icons";

interface Props {
  initialContent: SiteContent;
  token: string;
}

type Tab = "profile" | "links" | "stats";
type ToastType = "success" | "error";

function Toast({ msg, type }: { msg: string; type: ToastType }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2
                    px-5 py-3 rounded-2xl text-sm font-semibold shadow-2xl animate-toast"
         style={{
           background: type === "success"
             ? "linear-gradient(135deg,#16a34a,#15803d)"
             : "linear-gradient(135deg,#dc2626,#991b1b)",
           border: `1px solid ${type === "success" ? "rgba(22,163,74,0.4)" : "rgba(220,38,38,0.4)"}`,
           color: "#fff",
           boxShadow: type === "success"
             ? "0 8px 32px rgba(22,163,74,0.3)"
             : "0 8px 32px rgba(220,38,38,0.3)",
         }}>
      {type === "success" ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      )}
      {msg}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5"
             style={{ color: "#9a6035" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls = `w-full px-3 py-2.5 rounded-xl text-white text-sm outline-none transition-all duration-200`;
const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(249,115,22,0.15)",
  caretColor: "#f97316",
} as React.CSSProperties;

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`${inputCls} ${props.className ?? ""}`}
      style={{ ...inputStyle, ...props.style }}
      onFocus={e => { e.target.style.border = "1px solid rgba(249,115,22,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.08)"; }}
      onBlur={e => { e.target.style.border = "1px solid rgba(249,115,22,0.15)"; e.target.style.boxShadow = "none"; }}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${inputCls} resize-none ${props.className ?? ""}`}
      style={{ ...inputStyle, ...props.style }}
      onFocus={e => { e.target.style.border = "1px solid rgba(249,115,22,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.08)"; }}
      onBlur={e => { e.target.style.border = "1px solid rgba(249,115,22,0.15)"; e.target.style.boxShadow = "none"; }}
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`${inputCls} cursor-pointer ${props.className ?? ""}`}
      style={{ ...inputStyle, ...props.style }}
      onFocus={e => { e.target.style.border = "1px solid rgba(249,115,22,0.5)"; }}
      onBlur={e => { e.target.style.border = "1px solid rgba(249,115,22,0.15)"; }}
    />
  );
}

export default function DashboardClient({ initialContent, token }: Props) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: ToastType } | null>(null);
  const [tab, setTab] = useState<Tab>("profile");
  const [expandedLink, setExpandedLink] = useState<string | null>(null);

  function showToast(msg: string, type: ToastType) {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        showToast("Сохранено успешно!", "success");
        router.refresh();
      } else {
        const d = await res.json();
        showToast(d.error ?? "Ошибка сохранения", "error");
      }
    } catch {
      showToast("Ошибка соединения", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push(`/admin/${token}`);
  }

  const setProfile = useCallback((key: string, val: string | boolean) => {
    setContent(c => ({ ...c, profile: { ...c.profile, [key]: val } }));
  }, []);

  const setStat = useCallback((i: number, key: "label" | "value", val: string) => {
    setContent(c => {
      const stats = [...c.stats];
      stats[i] = { ...stats[i], [key]: val };
      return { ...c, stats };
    });
  }, []);

  const setProduct = useCallback((i: number, val: string) => {
    setContent(c => {
      const products = [...c.products];
      products[i] = val;
      return { ...c, products };
    });
  }, []);

  const addProduct = useCallback(() => {
    setContent(c => ({ ...c, products: [...c.products, ""] }));
  }, []);

  const removeProduct = useCallback((i: number) => {
    setContent(c => ({ ...c, products: c.products.filter((_, idx) => idx !== i) }));
  }, []);

  const setLink = useCallback((id: string, key: keyof LinkItem, val: string | boolean) => {
    setContent(c => ({
      ...c,
      links: c.links.map(l => l.id === id ? { ...l, [key]: val } : l),
    }));
  }, []);

  const setCta = useCallback((id: string, key: keyof CtaItem, val: string | boolean) => {
    setContent(c => ({
      ...c,
      cta: c.cta.map(b => b.id === id ? { ...b, [key]: val } : b),
    }));
  }, []);

  const tabs: { key: Tab; label: string }[] = [
    { key: "profile", label: "Профиль" },
    { key: "links",   label: "Ссылки"  },
    { key: "stats",   label: "Контент" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#0c0905", fontFamily: "Inter, sans-serif" }}>
      {toast && <Toast msg={toast.msg} type={toast.type} />}

      {/* ── Header ── */}
      <div className="sticky top-0 z-40 flex items-center justify-between px-4 py-3"
           style={{ background: "rgba(12,9,5,0.95)", borderBottom: "1px solid rgba(249,115,22,0.12)", backdropFilter: "blur(16px)" }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
               style={{ background: "linear-gradient(135deg,#c2410c,#7f1d1d)" }}>
            <svg width="16" height="16" viewBox="0 0 200 200" fill="none">
              <polygon points="28,38 42,18 52,18 52,30 46,30 46,138 52,138 52,150 42,170 28,150 34,138 34,30" fill="white"/>
              <polygon points="172,38 158,18 148,18 148,30 154,30 154,138 148,138 148,150 158,170 172,150 166,138 166,30" fill="white"/>
              <path d="M 148,42 A 58,58 0 1,0 148,158" stroke="white" strokeWidth="18" fill="none"/>
            </svg>
          </div>
          <div>
            <p className="text-white text-sm font-black leading-none">Metal City</p>
            <p className="text-[10px] font-bold uppercase tracking-widest leading-none mt-0.5" style={{ color: "#f97316" }}>CMS</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Preview button */}
          <a href="/" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
             style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", color: "#fdba74" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Сайт
          </a>

          {/* Save button */}
          <button onClick={handleSave} disabled={saving}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide text-white transition-all duration-200 disabled:opacity-50"
                  style={{ background: saving ? "rgba(234,88,12,0.5)" : "linear-gradient(135deg,#ea580c,#c2410c)", boxShadow: saving ? "none" : "0 2px 12px rgba(234,88,12,0.3)" }}>
            {saving ? (
              <svg className="animate-spin" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
              </svg>
            )}
            {saving ? "..." : "Сохранить"}
          </button>

          {/* Logout */}
          <button onClick={handleLogout}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#9a6035" }}
                  title="Выйти">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="flex gap-1 px-4 pt-4">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
                  className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200"
                  style={{
                    background: tab === t.key ? "linear-gradient(135deg,rgba(249,115,22,0.2),rgba(220,38,38,0.1))" : "rgba(255,255,255,0.03)",
                    border: tab === t.key ? "1px solid rgba(249,115,22,0.3)" : "1px solid rgba(255,255,255,0.06)",
                    color: tab === t.key ? "#f97316" : "#9a6035",
                  }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="px-4 py-4 pb-24 space-y-4 max-w-2xl mx-auto">

        {/* ══ PROFILE TAB ══ */}
        {tab === "profile" && (
          <div className="space-y-4">
            <Section title="Профиль">
              <Field label="Название">
                <Input value={content.profile.name} onChange={e => setProfile("name", e.target.value)} />
              </Field>
              <Field label="Username">
                <Input value={content.profile.username} onChange={e => setProfile("username", e.target.value)} placeholder="@username" />
              </Field>
              <Field label="Описание (bio)">
                <Textarea rows={3} value={content.profile.bio} onChange={e => setProfile("bio", e.target.value)} />
              </Field>
              <Field label="Статус / часы работы">
                <Input value={content.profile.status} onChange={e => setProfile("status", e.target.value)} placeholder="Пн–Сб · 09:00–18:00" />
              </Field>
              <Field label="URL аватара">
                <Input value={content.profile.avatar} onChange={e => setProfile("avatar", e.target.value)} placeholder="https://..." />
              </Field>
              {content.profile.avatar && (
                <div className="flex items-center gap-3 pt-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={content.profile.avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover border-2" style={{ borderColor: "rgba(249,115,22,0.3)" }} />
                  <span className="text-xs" style={{ color: "#9a6035" }}>Предпросмотр аватара</span>
                </div>
              )}
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="relative">
                  <input type="checkbox" className="sr-only"
                         checked={content.profile.verified}
                         onChange={e => setProfile("verified", e.target.checked)} />
                  <div className="w-10 h-6 rounded-full transition-colors duration-200"
                       style={{ background: content.profile.verified ? "#f97316" : "rgba(255,255,255,0.1)" }}>
                    <div className="absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200"
                         style={{ transform: content.profile.verified ? "translateX(18px)" : "translateX(2px)" }} />
                  </div>
                </div>
                <span className="text-sm font-medium" style={{ color: "#c4956a" }}>
                  Значок «Официальный аккаунт»
                </span>
              </label>
            </Section>
          </div>
        )}

        {/* ══ LINKS TAB ══ */}
        {tab === "links" && (
          <div className="space-y-4">

            {/* CTA Buttons */}
            <Section title="Кнопки (CTA)">
              <p className="text-xs mb-3" style={{ color: "#78502a" }}>Большие кнопки вверху страницы</p>
              {content.cta.map(btn => (
                <div key={btn.id} className="rounded-xl p-4 space-y-3"
                     style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(249,115,22,0.08)" }}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{btn.label}</span>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <span className="text-xs" style={{ color: "#9a6035" }}>Активна</span>
                      <div className="relative">
                        <input type="checkbox" className="sr-only"
                               checked={btn.enabled}
                               onChange={e => setCta(btn.id, "enabled", e.target.checked)} />
                        <div className="w-8 h-5 rounded-full transition-colors"
                             style={{ background: btn.enabled ? "#f97316" : "rgba(255,255,255,0.1)" }}>
                          <div className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform"
                               style={{ transform: btn.enabled ? "translateX(14px)" : "translateX(2px)" }} />
                        </div>
                      </div>
                    </label>
                  </div>
                  <Field label="Ссылка">
                    <Input value={btn.href} onChange={e => setCta(btn.id, "href", e.target.value)} placeholder="tel:+998..." />
                  </Field>
                  <Field label="Текст кнопки">
                    <Input value={btn.label} onChange={e => setCta(btn.id, "label", e.target.value)} />
                  </Field>
                </div>
              ))}
            </Section>

            {/* Link cards */}
            <Section title="Карточки ссылок">
              <div className="space-y-2">
                {content.links.map(link => (
                  <div key={link.id} className="rounded-xl overflow-hidden"
                       style={{ border: "1px solid rgba(249,115,22,0.1)" }}>
                    {/* Header */}
                    <div
                      className="flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors duration-200"
                      style={{ background: expandedLink === link.id ? "rgba(249,115,22,0.06)" : "rgba(255,255,255,0.02)" }}
                      onClick={() => setExpandedLink(expandedLink === link.id ? null : link.id)}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white truncate">{link.title}</p>
                        <p className="text-xs truncate" style={{ color: "#78502a" }}>{link.href}</p>
                      </div>
                      <label className="flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                             onClick={e => e.stopPropagation()}>
                        <div className="relative">
                          <input type="checkbox" className="sr-only"
                                 checked={link.enabled}
                                 onChange={e => setLink(link.id, "enabled", e.target.checked)} />
                          <div className="w-8 h-5 rounded-full transition-colors"
                               style={{ background: link.enabled ? "#f97316" : "rgba(255,255,255,0.1)" }}>
                            <div className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform"
                                 style={{ transform: link.enabled ? "translateX(14px)" : "translateX(2px)" }} />
                          </div>
                        </div>
                      </label>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                           stroke="#9a6035" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                           style={{ transform: expandedLink === link.id ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>

                    {/* Expanded fields */}
                    {expandedLink === link.id && (
                      <div className="px-4 pb-4 space-y-3 border-t" style={{ borderColor: "rgba(249,115,22,0.1)" }}>
                        <div className="pt-3">
                          <Field label="Иконка">
                            <Select value={link.iconType} onChange={e => setLink(link.id, "iconType", e.target.value)}>
                              {Object.entries(ICON_LABELS).map(([k, v]) => (
                                <option key={k} value={k} style={{ background: "#1a0e05" }}>{v}</option>
                              ))}
                            </Select>
                          </Field>
                        </div>
                        <Field label="Заголовок">
                          <Input value={link.title} onChange={e => setLink(link.id, "title", e.target.value)} />
                        </Field>
                        <Field label="Подпись">
                          <Input value={link.subtitle} onChange={e => setLink(link.id, "subtitle", e.target.value)} />
                        </Field>
                        <Field label="Ссылка (URL)">
                          <Input value={link.href} onChange={e => setLink(link.id, "href", e.target.value)} />
                        </Field>
                        <Field label="Бейдж (необязательно)">
                          <Input value={link.badge ?? ""} onChange={e => setLink(link.id, "badge", e.target.value)} placeholder="New, Каталог, App..." />
                        </Field>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={!!link.badgeGreen}
                                 onChange={e => setLink(link.id, "badgeGreen", e.target.checked)}
                                 className="w-4 h-4 accent-orange-500" />
                          <span className="text-xs" style={{ color: "#9a6035" }}>Зелёный бейдж</span>
                        </label>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Section>
          </div>
        )}

        {/* ══ STATS/CONTENT TAB ══ */}
        {tab === "stats" && (
          <div className="space-y-4">
            <Section title="Статистика">
              {content.stats.map((s, i) => (
                <div key={i} className="grid grid-cols-2 gap-2">
                  <Field label={`Значение ${i + 1}`}>
                    <Input value={s.value} onChange={e => setStat(i, "value", e.target.value)} placeholder="500+" />
                  </Field>
                  <Field label="Подпись">
                    <Input value={s.label} onChange={e => setStat(i, "label", e.target.value)} placeholder="Позиций" />
                  </Field>
                </div>
              ))}
            </Section>

            <Section title="Ассортимент (теги)">
              <div className="space-y-2">
                {content.products.map((p, i) => (
                  <div key={i} className="flex gap-2">
                    <Input value={p} onChange={e => setProduct(i, e.target.value)} placeholder="Название товара" />
                    <button onClick={() => removeProduct(i)}
                            className="w-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-colors duration-200"
                            style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.2)", color: "#f87171" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </button>
                  </div>
                ))}
                <button onClick={addProduct}
                        className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                        style={{ background: "rgba(249,115,22,0.08)", border: "1px dashed rgba(249,115,22,0.3)", color: "#f97316" }}>
                  + Добавить категорию
                </button>
              </div>
            </Section>
          </div>
        )}

        {/* Floating save */}
        <div className="fixed bottom-6 right-4 z-40">
          <button onClick={handleSave} disabled={saving}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold text-white shadow-2xl transition-all duration-200 disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg,#ea580c,#c2410c)",
                    boxShadow: "0 8px 32px rgba(234,88,12,0.4)",
                  }}>
            {saving ? (
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/>
              </svg>
            )}
            {saving ? "Сохранение..." : "Сохранить"}
          </button>
        </div>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-4 space-y-4"
         style={{ background: "rgba(255,140,30,0.03)", border: "1px solid rgba(249,115,22,0.1)" }}>
      <h2 className="text-xs font-black uppercase tracking-widest" style={{ color: "#f97316" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
