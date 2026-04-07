import { SessionOptions } from "iron-session";

export interface SessionData {
  isAdmin: boolean;
  token: string;
}

export const sessionOptions: SessionOptions = {
  cookieName: "mc_admin_session",
  password: process.env.SESSION_SECRET ?? "fallback_secret_change_me_in_env",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 8, // 8 hours
  },
};

