import { NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "@/lib/session";
import { getAnalytics } from "@/lib/analytics";

async function checkAuth(): Promise<boolean> {
  try {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
    return session.isAdmin === true;
  } catch {
    return false;
  }
}

export async function GET() {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }
  try {
    const data = await getAnalytics();
    return NextResponse.json(data);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
