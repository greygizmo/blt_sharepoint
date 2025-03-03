import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Load Space Grotesk from Google Fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

// Load Winston locally
const winston = localFont({
  src: "../public/fonts/Winston-BlackItalic.ttf",
  variable: "--font-winston",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLT Advanced Manufacturing",
  description: "BLT Advanced Manufacturing delivers cutting-edge 3D printing solutions for aerospace, medical, automotive, and energy industries with our proprietary metal additive processes.",
  keywords: ["3D printing", "additive manufacturing", "metal 3D printing", "industrial 3D printing", "aerospace manufacturing", "medical device manufacturing"],
  authors: [{ name: "BLT Manufacturing Solutions" }],
  creator: "BLT",
  publisher: "BLT Manufacturing Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Determine the base path for assets based on environment
  const basePath = process.env.NODE_ENV === 'production' ? '/BLT' : '';
  
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${winston.variable} font-sans`}>
      <head>
        {/* This base tag helps with GitHub Pages deployment */}
        <base href={basePath + '/'} />
      </head>
      <body className="min-h-screen bg-black text-white">
        <div className="vertical-laser h-screen">
          <div className="absolute top-1/2 left-0 w-full h-[10px] bg-blt-orange laser-glow"></div>
        </div>
        {children}
      </body>
    </html>
  );
} 