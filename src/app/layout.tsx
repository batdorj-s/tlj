import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { BottomNav } from "@/components/bottom-nav";
import { CartFAB } from "@/components/cart-fab";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tous Les Jours Mongolia",
  description: "Өдөр бүр шинэ. Франц-ази бэйкери — талх, бялуу, кофе, амттан.",
  appleWebApp: {
    capable: true,
    title: "TLJ",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#b82a2a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${bodoniModa.variable} ${jost.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink font-body">
        <MotionProvider>
          <Navbar />
          <main className="flex-1 pb-16">{children}</main>
          <SiteFooter />
          <BottomNav />
        </MotionProvider>
        <CartFAB />
      </body>
    </html>
  );
}
