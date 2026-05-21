import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://trinityarc.jp"),
  title: "Trinity Arc合同会社 | 内装工事業者向けSaaS",
  description:
    "Trinity Arc合同会社は、内装工事業者の業務効率化を支える3つのSaaSプロダクト「セコカン」「ラクロス」「キドリン」を提供しています。",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    url: "https://trinityarc.jp",
    type: "website",
    siteName: "Trinity Arc",
    title: "Trinity Arc合同会社 | 内装工事業者向けSaaS",
    description:
      "内装工事業者の業務効率化を支える3つのSaaSプロダクト「セコカン」「ラクロス」「キドリン」を提供しています。",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable}`}
    >
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: "var(--font-noto-sans-jp), var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
