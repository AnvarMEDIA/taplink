import { NextRequest, NextResponse } from "next/server";
import { trackVisit } from "@/lib/analytics";

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const ip = getIp(request);

  let body: { referrer?: string; ua?: string } = {};
  try { body = await request.json(); } catch { /* ignore */ }

  const referrer = body.referrer ?? "";
  const ua = body.ua ?? request.headers.get("user-agent") ?? "";

  // Fire-and-forget — don't block response on Redis write
  void trackVisit(ip, referrer, ua);

  return NextResponse.json({ ok: true });
}
