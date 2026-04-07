import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { SessionData, sessionOptions } from "@/lib/session";
import { getContent, saveContent, SiteContent } from "@/lib/content";

async function checkAuth(): Promise<boolean> {
  try {
    const cookieStore = cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    return session.isAdmin === true;
  } catch {
    return false;
  }
}

// GET — load current content
export async function GET(_request: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }
  const content = await getContent();
  return NextResponse.json(content);
}

// POST — save new content
export async function POST(request: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  let body: SiteContent;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Неверный JSON" }, { status: 400 });
  }

  if (!body.profile || !body.links || !body.stats) {
    return NextResponse.json({ error: "Неполные данные" }, { status: 400 });
  }

  try {
    await saveContent(body);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[content] saveContent failed:", err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  // Immediately invalidate the cached home page
  revalidatePath("/");

  return NextResponse.json({ ok: true });
}
