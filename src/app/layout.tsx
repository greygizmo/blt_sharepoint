import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLT Advanced Manufacturing | Metal 3D Printing Solutions",
  description: "BLT Advanced Manufacturing delivers cutting-edge metal 3D printing solutions that transform how industries design, prototype, and produce complex metal parts.",
  keywords: "BLT, metal 3D printing, additive manufacturing, laser powder bed fusion, industrial 3D printing",
  authors: [{ name: "BLT Advanced Manufacturing" }],
  creator: "BLT Advanced Manufacturing",
  publisher: "BLT Advanced Manufacturing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="vertical-laser" />
        {children}
      </body>
    </html>
  );
} 