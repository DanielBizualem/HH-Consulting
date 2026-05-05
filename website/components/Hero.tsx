'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Users, Menu } from 'lucide-react';

const desktop_bg = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777930215/hero_section_nhg5nc.jpg';
const mobile_bg = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777937122/mobile_view01_xgpxou.jpg'; 

export default function Hero() {
  return (
    <section className="relative w-full h-[400px] lg:h-[100vh] min-h-[350px] lg:min-h-[600px] overflow-hidden bg-white font-sans text-white">
      

      {/* 2. BACKGROUND LAYER - No top margin gap */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out overflow-hidden lg:mt-0">
        <div className="absolute inset-0 block lg:hidden">
          <Image 
            src={mobile_bg} 
            alt="Mobile Architecture View" 
            fill 
            quality={100}
            
            priority
          />
        </div>
        <div className="absolute inset-0 hidden lg:block">
          <Image 
            src={desktop_bg} 
            alt="Desktop Engineering View" 
            fill 
            quality={100}
            className="object-center" 
            
          />
        </div>
        
      </div>

      {/* 3. CONTENT LAYER - Adjusted padding for smaller height */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col pt-[40px] lg:pt-0 justify-center items-center lg:items-start sm:text-center lg:text-left">
        <div className="max-w-3xl">
          
          <div className="overflow-hidden mb-2">
            <span className="block text-[9px] md:text-[12px] font-bold uppercase tracking-[0.3em] text-slate-200 animate-reveal-sub">
              HH CONSULTING ARCHITECTS & ENGINEERS PLC
            </span>
          </div>

          <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] mb-6 animate-reveal-main max-w-sm md:max-w-none">
            Designing the Future of <br className="hidden md:block" />
            <span className="text-white">Infrastructure & Cities</span>
          </h1>

          <div className="flex flex-row items-center justify-center lg:justify-start gap-3 animate-fade-in-delayed w-full">
  <Link href="/#service" className="w-auto">
    <button className="bg-[#b38b59] hover:bg-[#9a764a] text-white px-4 py-3 rounded-sm text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.15em] lg:tracking-[0.3em] transition-all shadow-xl active:scale-95 z-30 lg:mb-0">
      Explore Services
    </button>
  </Link>

  <Link href="/#location" className="w-auto">
    <button className="bg-black/20 backdrop-blur-md border border-white/60 text-white px-6 py-3 rounded-sm text-[10px] sm:text-[12px] font-bold uppercase tracking-wider transition-all hover:bg-white/10 active:scale-95">
      Contact Us
    </button>
  </Link>
</div>
        </div>

        {/* GLASS CARD: Hidden on mobile */}
        {/* --- DARKER GLASS CARD SECTION --- */}
        <div className="absolute bottom-12 right-12 animate-fade-in-delayed hidden lg:block">
          <div className="relative group">
            {/* Upper part: Black/40 for a deeper glass look */}
            <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-t-lg p-6 flex items-center gap-4 min-w-[280px]">
              <span className="text-5xl font-black text-white tracking-tighter">20+</span>
              <div className="flex flex-col">
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/90">Projects</span>
                <span className="text-[10px] uppercase tracking-wider text-white/60">Completed Successfully</span>
              </div>
            </div>
            
            {/* Lower part: Black/50 to add depth to the base */}
            <div className="bg-black/40 backdrop-blur-lg border-x border-b border-white/10 rounded-b-lg p-4 flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-full">
                <Users size={16} className="text-[#C59D5F]" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80">
                Multi-disciplinary Experts
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes reveal-main {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes reveal-sub {
          from { opacity: 0; letter-spacing: 0.8em; }
          to { opacity: 1; letter-spacing: 0.3em; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-reveal-main { animation: reveal-main 1s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animate-reveal-sub { animation: reveal-sub 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animate-fade-in-delayed { opacity: 0; animation: fade-in 1.5s ease-out 0.8s forwards; }
      `}</style>
    </section>
  );
}