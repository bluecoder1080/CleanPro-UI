import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CleanPro - Premium Laundry Service",
  description:
    "The new level of care for your wardrobe. Tough stains? We'll make your clothes flawless.",
  keywords: ["laundry", "dry cleaning", "premium service", "eco-friendly"],
  openGraph: {
    title: "CleanPro - Premium Laundry Service",
    description: "Experience laundry care like never before",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
