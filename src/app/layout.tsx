import type { Metadata, Viewport } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Grocery Challenge Arena - Win Big Prizes!",
  description: "Complete weekly grocery challenges, unlock exclusive rewards, and compete for massive prizes up to $1M. Join the ultimate grocery gaming experience.",
  keywords: "grocery challenge, rewards, prizes, gaming, weekly challenges",
  openGraph: {
    title: "Grocery Challenge Arena - Win Big Prizes!",
    description: "Complete weekly grocery challenges, unlock exclusive rewards, and compete for massive prizes up to $1M.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-900 text-white ">
        {children}
      </body>
    </html>
  );
}