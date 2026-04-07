import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metal City | Металлопрокат в Ташкенте",
  description: "Оптовая и розничная продажа металлопроката. Трубы, арматура, швеллер, профиль — более 500 наименований на складе. Ташкент, ТКАД 99А.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚙️</text></svg>",
  },
  openGraph: {
    title: "Metal City | Металлопрокат в Ташкенте",
    description: "Более 500 наименований металлопроката на складе. Трубы, арматура, швеллер, профиль.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0c0905",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="noise">{children}</body>
    </html>
  );
}
