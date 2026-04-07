"use client";

import { useEffect, useState } from "react";
import type { AnalyticsData, DayStats } from "@/lib/analytics";

// ─── helpers ──────────────────────────────────────────
function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000)     return (n / 1_000).toFixed(1)     + "K";
  return String(n);
}

function shortDate(iso: string): string {
  const [, m, d] = iso.split("-");
  return `${d}.${m}`;
}

function dayLabel(iso: string): string {
  const names = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  return names[new Date(iso + "T12:00:00").getDay()];
}

// ─── Sub-components ───────────────────────────────────

function StatCard({
  label, value, sub, color,
}: { label: string; value: number; sub?: string; color: string }) {
  return (
    <div className="rounded-2xl p-4 flex flex-col gap-1"
         style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(249,115,22,0.1)" }}>
      <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#9a6035" }}>{label}</p>
      <p className="text-2xl font-black" style={{ color }}>{fmt(value)}</p>
      {sub && <p className="text-[11px]" style={{ color: "#78502a" }}>{sub}</p>}
    </div>
  );
}

function BarChart({ data }: { data: DayStats[] }) {
  const maxV = Math.max(...data.map(d => d.visits), 1);
  return (
    <div>
      {/* Bars */}
      <div className="flex items-end gap-[5px]" style={{ height: 96 }}>
        {data.map((d, i) => {
          const isToday = i === data.length - 1;
          const hPct = Math.max(4, Math.round((d.visits / maxV) * 88));
          return (
            <div key={d.date} className="flex-1 flex flex-col items-center justify-end gap-0.5 group relative">
              {/* Tooltip */}
              <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 z-10
                              px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap
                              opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                   style={{ background: "#1a0e05", border: "1px solid rgba(249,115,22,0.3)", color: "#fbbf24" }}>
                {d.visits} визитов
                {d.unique > 0 && <><br />{d.unique} уник.</>}
              </div>
              {d.visits > 0 && (
                <span className="text-[9px] font-bold" style={{ color: "#9a6035" }}>
                  {d.visits}
                </span>
              )}
              <div
                className="w-full rounded-t-md transition-all duration-300"
                style={{
                  height: hPct,
                  background: isToday
                    ? "linear-gradient(to top, #c2410c, #fb923c)"
                    : d.visits > 0
                    ? "rgba(249,115,22,0.35)"
                    : "rgba(255,255,255,0.04)",
                  border: isToday ? "1px solid rgba(251,146,60,0.4)" : "none",
                }}
              />
            </div>
          );
        })}
      </div>
      {/* X labels */}
      <div className="flex gap-[5px] mt-1.5">
        {data.map((d, i) => (
          <div key={d.date} className="flex-1 text-center" style={{ color: i === data.length - 1 ? "#f97316" : "#4a2a10" }}>
            <div className="text-[9px] font-bold">{dayLabel(d.date)}</div>
            <div className="text-[8px]">{shortDate(d.date)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeviceBar({ label, value, total, color }: { label: string; value: number; total: number; color: string }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span style={{ color: "#c4956a" }}>{label}</span>
        <span className="font-bold" style={{ color: "#fbbf24" }}>{value} <span style={{ color: "#9a6035" }}>({pct}%)</span></span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div className="h-full rounded-full transition-all duration-500"
             style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

// ─── Main panel ───────────────────────────────────────
export default function AnalyticsPanel() {
  const [data, setData]       = useState<AnalyticsData | null>(null);
  const [error, setError]     = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/analytics")
      .then(r => r.json())
      .then(d => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("Не удалось загрузить данные"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-16 gap-3">
      <svg className="animate-spin" width="28" height="28" viewBox="0 0 24 24" fill="none"
           stroke="#f97316" strokeWidth="2.5">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
      </svg>
      <p className="text-sm" style={{ color: "#9a6035" }}>Загрузка статистики…</p>
    </div>
  );

  if (error) return (
    <div className="rounded-2xl p-5 text-center" style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.2)" }}>
      <p className="text-sm font-semibold" style={{ color: "#f87171" }}>{error}</p>
    </div>
  );

  if (!data) return null;

  const totalDevices = data.devices.mobile + data.devices.desktop + data.devices.other;

  return (
    <div className="space-y-4">

      {/* ── Summary cards ── */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Всего визитов"   value={data.total}       color="#f97316" />
        <StatCard label="Сегодня"         value={data.today}       color="#fb923c"
                  sub={data.uniqueToday > 0 ? `${data.uniqueToday} уникальных` : undefined} />
        <StatCard label="За 30 дней"      value={data.thisMonth}   color="#fbbf24" />
        <StatCard label="Уник. сегодня"   value={data.uniqueToday} color="#a3e635" />
      </div>

      {/* ── 7-day chart ── */}
      <div className="rounded-2xl p-4"
           style={{ background: "rgba(255,140,30,0.03)", border: "1px solid rgba(249,115,22,0.1)" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-4" style={{ color: "#f97316" }}>
          Последние 7 дней
        </p>
        {data.last7.every(d => d.visits === 0) ? (
          <p className="text-xs text-center py-6" style={{ color: "#4a2a10" }}>Данных пока нет</p>
        ) : (
          <BarChart data={data.last7} />
        )}
      </div>

      {/* ── 30-day sparkline ── */}
      <div className="rounded-2xl p-4"
           style={{ background: "rgba(255,140,30,0.03)", border: "1px solid rgba(249,115,22,0.1)" }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: "#f97316" }}>
          30 дней
        </p>
        <div className="flex items-end gap-0.5" style={{ height: 40 }}>
          {data.last30.map((d, i) => {
            const maxV = Math.max(...data.last30.map(x => x.visits), 1);
            const h = Math.max(2, Math.round((d.visits / maxV) * 36));
            const isToday = i === data.last30.length - 1;
            return (
              <div key={d.date} className="flex-1 rounded-sm"
                   style={{ height: h, background: isToday ? "#f97316" : d.visits > 0 ? "rgba(249,115,22,0.3)" : "rgba(255,255,255,0.04)" }} />
            );
          })}
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px]" style={{ color: "#4a2a10" }}>{shortDate(data.last30[0]?.date ?? "")}</span>
          <span className="text-[9px]" style={{ color: "#f97316" }}>сегодня</span>
        </div>
      </div>

      {/* ── Devices ── */}
      {totalDevices > 0 && (
        <div className="rounded-2xl p-4 space-y-3"
             style={{ background: "rgba(255,140,30,0.03)", border: "1px solid rgba(249,115,22,0.1)" }}>
          <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: "#f97316" }}>
            Устройства
          </p>
          <DeviceBar label="📱 Мобильные" value={data.devices.mobile}  total={totalDevices} color="linear-gradient(90deg,#f97316,#fb923c)" />
          <DeviceBar label="💻 Десктоп"   value={data.devices.desktop} total={totalDevices} color="linear-gradient(90deg,#3b82f6,#60a5fa)" />
          <DeviceBar label="❓ Прочее"    value={data.devices.other}   total={totalDevices} color="linear-gradient(90deg,#6b7280,#9ca3af)" />
        </div>
      )}

      {/* ── Referrers ── */}
      {data.referrers.length > 0 && (
        <div className="rounded-2xl p-4 space-y-2"
             style={{ background: "rgba(255,140,30,0.03)", border: "1px solid rgba(249,115,22,0.1)" }}>
          <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: "#f97316" }}>
            Источники трафика
          </p>
          {data.referrers.map((r, i) => {
            const maxC = data.referrers[0].count;
            const pct  = Math.round((r.count / maxC) * 100);
            return (
              <div key={r.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium truncate max-w-[200px]" style={{ color: "#c4956a" }}>
                    {i === 0 && "🔥 "}{r.name}
                  </span>
                  <span className="font-bold flex-shrink-0 ml-2" style={{ color: "#fbbf24" }}>{r.count}</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "rgba(249,115,22,0.5)" }} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── No data notice ── */}
      {data.total === 0 && (
        <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(249,115,22,0.04)", border: "1px dashed rgba(249,115,22,0.2)" }}>
          <p className="text-2xl mb-2">📊</p>
          <p className="text-sm font-semibold" style={{ color: "#9a6035" }}>Данных пока нет</p>
          <p className="text-xs mt-1" style={{ color: "#4a2a10" }}>Статистика появится после первых посещений сайта</p>
        </div>
      )}

    </div>
  );
}
