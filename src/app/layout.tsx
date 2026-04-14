import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://capturemoment.fitrie-server.xyz";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Capture The Moment",
    template: "%s | Capture The Moment",
  },
  description: "Capture the moment by Fitrie 😊",

  applicationName: "Capture The Moment",
  authors: [{ name: "Fitrie" }],
  creator: "Fitrie",
  publisher: "Fitrie",
  keywords: ["photography", "moments", "capture", "fitrie"],

  // Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Capture The Moment",
    title: "Capture The Moment",
    description: "Capture the moment by Fitrie 😊",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",       // place a 1200×630 image in /public
        width: 1200,
        height: 630,
        alt: "Capture The Moment – by Fitrie",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Capture The Moment",
    description: "Capture the moment by Fitrie 😊",
    images: ["/og-image.jpg"],
    creator: "@fitrie",            // replace with real handle or remove
  },

  // PWA / browser chrome
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",

  // Verification (add tokens if you use these services)
  // verification: {
  //   google: "xxxx",
  //   yandex: "xxxx",
  // },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
