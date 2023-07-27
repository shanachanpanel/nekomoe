import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import React from "react";
import NextTopLoader from "nextjs-toploader";
import Logo from "@/components/Logo";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: {
    default: "Nekomoe",
    template: "%s | Nekomoe",
  },
  description: "Nonton anime subtitle Indonesia Gratis!",
  openGraph: {
    title: "Nekomoe",
    description: "Nonton anime subtitle Indonesia Gratis!",
    url: process.env.BASE_URL,
    siteName: "Nekomoe",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Nekomoe",
    card: "summary_large_image",
  },
  verification: {
    google: "3v0dsIPpvXYg0uLN3qF9I-1rOsCAcI1roNu2C0oPk64",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color="#ff0080" showSpinner={false} />
        <Providers>
          {children}
          <footer className="h-[10vh] p-1">
            <div className="flex justify-between w-full">
              <div></div>
              <Link href={"/"}>
                <div className="flex flex-col items-center justify-center">
                  <Logo className="w-10 h-10" />
                  <div className="font-bold text-xl text-foreground/50">
                    Neko<span className="text-green-400">moe</span>
                  </div>
                </div>
              </Link>
              <div></div>
            </div>
          </footer>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
