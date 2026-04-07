"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  token: string;
}

export default function LoginForm({ token }: Props) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, token }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push(`/admin/${token}/dashboard`);
        router.refresh();
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        setError(data.error ?? "Ошибка входа");
        setPassword("");
      }
    } catch {
      setError("Ошибка соединения");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
         style={{ background: "#0c0905" }}>

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-80 h-80 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-xl"
               style={{ background: "linear-gradient(135deg, #c2410c, #7f1d1d)" }}>
            <svg width="32" height="32" viewBox="0 0 200 200" fill="none">
              <polygon points="28,38 42,18 52,18 52,30 46,30 46,138 52,138 52,150 42,170 28,150 34,138 34,30" fill="white"/>
              <polygon points="172,38 158,18 148,18 148,30 154,30 154,138 148,138 148,150 158,170 172,150 166,138 166,30" fill="white"/>
              <path d="M 148,42 A 58,58 0 1,0 148,158" stroke="white" strokeWidth="11" fill="none"/>
              <path d="M 136,56 A 43,43 0 1,0 136,144" stroke="white" strokeWidth="9" fill="none"/>
              <path d="M 72,93 L 84,108 L 112,72" stroke="white" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-xl font-black text-white tracking-wide uppercase">Metal City</h1>
          <p className="text-xs mt-1 font-medium tracking-widest uppercase"
             style={{ color: "#f97316" }}>Admin Panel</p>
        </div>

        {/* Card */}
        <form onSubmit={handleSubmit}
              className="rounded-2xl p-6 space-y-4"
              style={{ background: "rgba(255,140,30,0.04)", border: "1px solid rgba(249,115,22,0.12)" }}>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2"
                   style={{ color: "#9a6035" }}>
              Пароль
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              required
              autoFocus
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200 disabled:opacity-50"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: error ? "1px solid rgba(220,38,38,0.5)" : "1px solid rgba(249,115,22,0.15)",
                caretColor: "#f97316",
              }}
              onFocus={(e) => {
                e.target.style.border = "1px solid rgba(249,115,22,0.5)";
                e.target.style.boxShadow = "0 0 0 3px rgba(249,115,22,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.border = error
                  ? "1px solid rgba(220,38,38,0.5)"
                  : "1px solid rgba(249,115,22,0.15)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
                 style={{ background: "rgba(220,38,38,0.1)", border: "1px solid rgba(220,38,38,0.25)", color: "#fca5a5" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {error}
              {attempts > 0 && attempts < 5 && (
                <span className="ml-auto text-xs opacity-60">
                  {5 - attempts} попыток осталось
                </span>
              )}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 rounded-xl font-bold text-sm text-white uppercase tracking-wider
                       transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: loading
                ? "rgba(249,115,22,0.5)"
                : "linear-gradient(135deg, #ea580c, #c2410c)",
              boxShadow: loading ? "none" : "0 4px 20px rgba(234,88,12,0.3)",
            }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                Вход...
              </span>
            ) : (
              "Войти"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-xs" style={{ color: "#3d2010" }}>
          Created by{" "}
          <span className="font-black" style={{
            background: "linear-gradient(90deg, #f97316, #f59e0b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>MAZE</span>
        </p>
      </div>
    </div>
  );
}
