import { createHash } from "crypto";
import getRedis from "./redis";

// ─── Redis key schema ────────────────────────────────
const K = {
  total:     "mc:a:total",
  day:       (d: string) => `mc:a:day:${d}`,
  udayMark:  (d: string, h: string) => `mc:a:um:${d}:${h}`,
  udayCount: (d: string) => `mc:a:uc:${d}`,
  devices:   "mc:a:devices",
  refs:      "mc:a:refs",
};

const TTL_90D = 90 * 24 * 3600;
const TTL_25H = 25 * 3600;

// ─── Helpers ─────────────────────────────────────────
export function dateStr(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() - offsetDays);
  return d.toISOString().split("T")[0]; // YYYY-MM-DD
}

function hashIp(ip: string): string {
  const salt = process.env.SESSION_SECRET ?? "mc_salt";
  return createHash("sha256").update(ip + salt).digest("hex").slice(0, 12);
}

function detectDevice(ua: string): "mobile" | "desktop" | "other" {
  if (/mobile|android|iphone|ipod|blackberry|windows phone/i.test(ua)) return "mobile";
  if (/tablet|ipad/i.test(ua)) return "mobile"; // tablets → mobile
  if (/mozilla|chrome|safari|firefox|edge/i.test(ua)) return "desktop";
  return "other";
}

function parseRef(referrer: string): string {
  if (!referrer) return "";
  try {
    const h = new URL(referrer).hostname.replace(/^www\./, "");
    return h || "";
  } catch {
    return "";
  }
}

// ─── Track one visit ─────────────────────────────────
export async function trackVisit(ip: string, referrer: string, ua: string): Promise<void> {
  try {
    const redis  = getRedis();
    const date   = dateStr();
    const device = detectDevice(ua);
    const ref    = parseRef(referrer);

    // Batch non-unique writes
    const p = redis.pipeline();
    p.incr(K.total);
    p.incr(K.day(date));
    p.expire(K.day(date), TTL_90D);
    p.hincrby(K.devices, device, 1);
    if (ref) p.hincrby(K.refs, ref, 1);
    await p.exec();

    // Unique visitor: set-if-not-exists marker
    const mark = K.udayMark(date, hashIp(ip));
    const isNew = await redis.set(mark, "1", { nx: true, ex: TTL_25H });
    if (isNew) {
      const p2 = redis.pipeline();
      p2.incr(K.udayCount(date));
      p2.expire(K.udayCount(date), TTL_90D);
      await p2.exec();
    }
  } catch {
    // Never crash the page for analytics
  }
}

// ─── Types ───────────────────────────────────────────
export interface DayStats {
  date:   string;
  visits: number;
  unique: number;
}

export interface AnalyticsData {
  total:       number;
  today:       number;
  uniqueToday: number;
  thisMonth:   number;
  last7:       DayStats[];
  last30:      DayStats[];
  devices: { mobile: number; desktop: number; other: number };
  referrers:   { name: string; count: number }[];
}

// ─── Read stats for admin ────────────────────────────
export async function getAnalytics(): Promise<AnalyticsData> {
  const redis  = getRedis();
  const dates  = Array.from({ length: 30 }, (_, i) => dateStr(i)); // [today, yesterday, ...]

  // Single pipeline: total + 30×(day, uniqueCount) + devices + refs
  // Indices: 0=total, 1+i*2=day[i], 2+i*2=ucount[i], 61=devices, 62=refs
  const p = redis.pipeline();
  p.get(K.total);
  for (const d of dates) {
    p.get(K.day(d));
    p.get(K.udayCount(d));
  }
  p.hgetall(K.devices);
  p.hgetall(K.refs);
  const res = await p.exec() as unknown[];

  const total  = Number(res[0] ?? 0);
  const devRaw = (res[61] ?? {}) as Record<string, string>;
  const refRaw = (res[62] ?? {}) as Record<string, string>;

  // Build per-day stats (index 0 = today)
  const dayStats: DayStats[] = dates.map((date, i) => ({
    date,
    visits: Number(res[1 + i * 2] ?? 0),
    unique: Number(res[2 + i * 2] ?? 0),
  }));

  const last30 = [...dayStats].reverse(); // oldest → newest
  const last7  = last30.slice(-7);
  const thisMonth = dayStats.reduce((s, d) => s + d.visits, 0);

  const devices = {
    mobile:  Number(devRaw?.mobile  ?? 0),
    desktop: Number(devRaw?.desktop ?? 0),
    other:   Number(devRaw?.other   ?? 0),
  };

  const referrers = Object.entries(refRaw ?? {})
    .map(([name, count]) => ({ name, count: Number(count) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return { total, today: dayStats[0]?.visits ?? 0, uniqueToday: dayStats[0]?.unique ?? 0,
           thisMonth, last7, last30, devices, referrers };
}
