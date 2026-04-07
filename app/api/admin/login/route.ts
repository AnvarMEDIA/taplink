import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/lib/session";
import getRedis from "@/lib/redis";

const MAX_ATTEMPTS = 5;
const BLOCK_SECONDS = 15 * 60; // 15 minutes

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimitKey = `ratelimit:login:${ip}`;

  // Rate limit check
  try {
    const redis = getRedis();
    const attempts = await redis.get<number>(rateLimitKey) ?? 0;
    if (attempts >= MAX_ATTEMPTS) {
      return NextResponse.json(
        { error: "Слишком много попыток. Подождите 15 минут." },
        { status: 429 }
      );
    }
  } catch {
    // Redis unavailable — allow through (fail open for rate limit only)
  }

  // Parse body
  let body: { password?: string; token?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Неверный запрос" }, { status: 400 });
  }

  const { password, token } = body;

  // Validate secret token (secret URL component)
  const validToken = process.env.ADMIN_SECRET_PATH;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (!validToken || !validPassword) {
    return NextResponse.json({ error: "Сервер не настроен" }, { status: 500 });
  }

  const tokenMatch = token === validToken;
  const passwordMatch = password === validPassword;

  if (!tokenMatch || !passwordMatch) {
    // Increment failed attempts
    try {
      const redis = getRedis();
      await redis.incr(rateLimitKey);
      await redis.expire(rateLimitKey, BLOCK_SECONDS);
    } catch {
      // ignore
    }
    return NextResponse.json({ error: "Неверный пароль" }, { status: 401 });
  }

  // Clear rate limit on success
  try {
    const redis = getRedis();
    await redis.del(rateLimitKey);
  } catch {
    // ignore
  }

  // Create session
  const response = NextResponse.json({ ok: true });
  const session = await getIronSession<SessionData>(request, response, sessionOptions);
  session.isAdmin = true;
  session.token = token;
  await session.save();

  return response;
}
