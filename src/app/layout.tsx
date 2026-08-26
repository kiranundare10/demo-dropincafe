import Providers from "@/provider";
import "./globals.css";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Caladea } from "next/font/google";
import { getSiteUrl } from "@/lib/env";
import TawkTo from "@/components/TawkTo";
import Script from "next/script";

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caladea",
});

const BASE_URL = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: "Drop In Cafe", template: "%s | Drop In Cafe" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    siteName: "Drop In Cafe",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning className={caladea.variable}>
      <body>
        <Providers>{children}</Providers>

        {/* Google Analytics + Google Ads Tags */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9RH2VXWDC4"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9RH2VXWDC4');
            gtag('config', 'AW-1020502103');
            gtag('config', 'AW-18174541759');`}
        </Script>

        <TawkTo />
      </body>
    </html>
  );
}
