// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopLoader from "@/components/TopLoader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        <TopLoader/>
        <Navbar />
        {/* The transition class is applied here */}
        <main className="page-transition">
          {children}
        </main>
      </body>
    </html>
  );
}