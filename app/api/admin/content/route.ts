import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/lib/session";
import { getContent, saveContent, SiteContent } from "@/lib/content";

async function checkAuth(request: NextRequest, response: NextResponse): Promise<boolean> {
  const session = await getIronSession<SessionData>(request, response, sessionOptions);
  return session.isAdmin === true;
}

// GET — load current content
export async function GET(request: NextRequest) {
  const response = NextResponse.next();
  if (!(await checkAuth(request, response))) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }
  const content = await getContent();
  return NextResponse.json(content);
}

// POST — save new content
export async function POST(request: NextRequest) {
  const res = NextResponse.next();
  if (!(await checkAuth(request, res))) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  let body: SiteContent;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Неверный JSON" }, { status: 400 });
  }

  // Basic validation
  if (!body.profile || !body.links || !body.stats) {
    return NextResponse.json({ error: "Неполные данные" }, { status: 400 });
  }

  await saveContent(body);
  return NextResponse.json({ ok: true });
}
