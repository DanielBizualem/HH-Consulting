// app/layout.tsx
import Navbar from "@/components/Navbar";
import TopLoader from "@/components/TopLoader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Suspense } from 'react';
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});


const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'] // Must include 800 for that extra-bold look
});
export const metadata: Metadata = {
  title: 'HH Consulting Architects and Engineers', // This replaces "localhost:3000"
  description: 'Innovative sustainability and human-centric architectural design.',
  icons: {
    icon: '/favicon.png', // Standard favicon
    apple: '/apple-touch-icon.png', // For iPhone home screens
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className={`${montserrat.className} font-poppins antialiased bg-white text-slate-900`}>
      <Suspense fallback={null}>
          <TopLoader />
        </Suspense>
        <Suspense fallback={<div className="h-20" />}>
          <Navbar />
        </Suspense>
        {/* The transition class is applied here */}
        <main className="page-transition">
        <Suspense fallback={<div>Loading...</div>}>   {/* ← Add this */}
          {children}
        </Suspense>
        </main>
      </body>
    </html>
  );
}