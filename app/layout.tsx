import type { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="en" className="font-space-grotesk">
      <body className="min-h-screen bg-black text-white">
        <div className="vertical-laser h-screen">
          <div className="absolute top-1/2 left-0 w-full h-[10px] bg-blt-orange laser-glow"></div>
        </div>
        {children}
      </body>
    </html>
  );
} 