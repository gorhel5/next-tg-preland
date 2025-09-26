import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TelegramNotifier from "@/components/TelegramNotifier/TelegramNotifier";
import Header from "@/components/Header/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CardXabar Ilova",
  description:
    "Получайте информацию о платежах по банковским картам Uzcard в своем приложении! контролируйте баланс 24/7!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TelegramNotifier />
        <SpeedInsights />
        <Header />
        {children}
      </body>
    </html>
  );
}
