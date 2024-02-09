import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cuberto Clone Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-slate-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
