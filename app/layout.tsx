import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#08080a",
};

export const metadata: Metadata = {
  title: "Visual Vortex",
  description: "A content growth firm building systems that scale creators & brands.",
  openGraph: {
    title: "Visual Vortex",
    description: "A content growth firm building systems that scale creators & brands.",
    url: "https://www.visualvrtx.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Visual Vortex",
    description: "A content growth firm building systems that scale creators & brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
