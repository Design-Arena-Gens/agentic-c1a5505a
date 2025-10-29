import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LuxeCuts Studio — Modern Haircut & Color in Brooklyn",
  description:
    "LuxeCuts Studio delivers precision haircuts, lived-in color, and restorative treatments tailored to every texture in Williamsburg, Brooklyn.",
  keywords: [
    "Brooklyn hair salon",
    "modern haircut",
    "balayage",
    "barber",
    "hair color studio",
  ],
  openGraph: {
    title: "LuxeCuts Studio — Modern Haircut & Color in Brooklyn",
    description:
      "Experience elevated hair artistry with precision cuts, lived-in color, and restorative rituals at LuxeCuts Studio in Williamsburg.",
    url: "https://agentic-c1a5505a.vercel.app",
    siteName: "LuxeCuts Studio",
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
