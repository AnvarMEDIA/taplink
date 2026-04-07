import getRedis from "./redis";

const CONTENT_KEY = "site:content";

export interface LinkItem {
  id: string;
  href: string;
  title: string;
  subtitle: string;
  iconBg: string;
  accentColor: string;
  iconType: string;
  badge?: string;
  badgeGreen?: boolean;
  external?: boolean;
  enabled: boolean;
}

export interface CtaItem {
  id: string;
  href: string;
  label: string;
  cls: string;
  iconType: string;
  enabled: boolean;
}

export interface SocialItem {
  href: string;
  label: string;
  iconType: string;
}

export interface SiteContent {
  profile: {
    name: string;
    username: string;
    bio: string;
    avatar: string;
    status: string;
    verified: boolean;
  };
  stats: { label: string; value: string }[];
  products: string[];
  links: LinkItem[];
  cta: CtaItem[];
  socials: SocialItem[];
}

export const defaultContent: SiteContent = {
  profile: {
    name: "METAL CITY",
    username: "@metalcity_uz",
    bio: "Оптовая и розничная продажа металлопроката в Ташкенте. Трубы, арматура, швеллер, профиль и фасонные изделия.",
    avatar:
      "https://play-lh.googleusercontent.com/W8Vvm1dDt5p9J_aOj0c5oiTsxfneKxRgWnPPgHvNlR8j95j-Sdx04zjBSqzWSEjTsyE",
    status: "Пн–Сб · 09:00–18:00",
    verified: true,
  },
  stats: [
    { label: "Позиций", value: "500+" },
    { label: "Лет опыта", value: "10+" },
    { label: "Клиентов", value: "1K+" },
  ],
  products: ["Трубы", "Арматура", "Швеллер", "Уголок", "Профиль", "Лист", "Балка", "Фасонные"],
  cta: [
    {
      id: "cta-call",
      href: "tel:+998950810000",
      label: "Позвонить",
      cls: "cta-call",
      iconType: "phone",
      enabled: true,
    },
    {
      id: "cta-telegram",
      href: "https://t.me/metalcity_uz",
      label: "Telegram",
      cls: "cta-telegram",
      iconType: "telegram",
      enabled: true,
    },
  ],
  links: [
    {
      id: "link-whatsapp",
      href: "https://wa.me/998950810000",
      title: "WhatsApp",
      subtitle: "Написать в WhatsApp",
      iconBg: "from-green-600 to-emerald-700",
      accentColor: "#22c55e",
      iconType: "whatsapp",
      enabled: true,
    },
    {
      id: "link-instagram",
      href: "https://www.instagram.com/metalcity_uz/",
      title: "Instagram",
      subtitle: "@metalcity_uz · Фото и видео",
      iconBg: "from-pink-600 to-orange-500",
      accentColor: "#ec4899",
      iconType: "instagram",
      enabled: true,
    },
    {
      id: "link-website",
      href: "https://metalcity.uz",
      title: "Сайт metalcity.uz",
      subtitle: "Каталог и прайс-лист",
      iconBg: "from-orange-600 to-amber-600",
      accentColor: "#f97316",
      iconType: "website",
      badge: "Каталог",
      enabled: true,
    },
    {
      id: "link-playstore",
      href: "https://play.google.com/store/apps/details?id=uz.bdmgroup.metalcity",
      title: "Приложение",
      subtitle: "Metal City · Google Play",
      iconBg: "from-emerald-600 to-teal-700",
      accentColor: "#10b981",
      iconType: "playstore",
      badge: "App",
      badgeGreen: true,
      enabled: true,
    },
    {
      id: "link-map",
      href: "https://yandex.uz/maps/?text=Ташкент+ТКАД+99А",
      title: "Наш адрес",
      subtitle: "Ташкент, Учтепа, ТКАД 99А",
      iconBg: "from-red-600 to-rose-700",
      accentColor: "#ef4444",
      iconType: "map",
      enabled: true,
    },
  ],
  socials: [
    { href: "https://t.me/metalcity_uz", label: "Telegram", iconType: "telegram" },
    { href: "https://www.instagram.com/metalcity_uz/", label: "Instagram", iconType: "instagram" },
    { href: "https://wa.me/998950810000", label: "WhatsApp", iconType: "whatsapp" },
    { href: "https://metalcity.uz", label: "Сайт", iconType: "website" },
    {
      href: "https://play.google.com/store/apps/details?id=uz.bdmgroup.metalcity",
      label: "Google Play",
      iconType: "playstore",
    },
  ],
};

export async function getContent(): Promise<SiteContent> {
  try {
    const redis = getRedis();
    const raw = await redis.get(CONTENT_KEY);
    if (raw) {
      const data: SiteContent = typeof raw === "string" ? JSON.parse(raw) : (raw as SiteContent);
      return data;
    }
  } catch {
    // Redis not configured or error — fall back to defaults
  }
  return defaultContent;
}

export async function saveContent(content: SiteContent): Promise<void> {
  if (!process.env.kv_KV_REST_API_URL || !process.env.kv_KV_REST_API_TOKEN) {
    throw new Error("kv_KV_REST_API_URL или kv_KV_REST_API_TOKEN не настроены в Vercel");
  }
  const redis = getRedis();
  await redis.set(CONTENT_KEY, JSON.stringify(content));
}
