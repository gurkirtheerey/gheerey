import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gurkirt Heerey",
  description: "Gurkirt Heerey's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiase leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
