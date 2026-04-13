"use client";
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

// Assets
const bridge = [
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776105217/bridge_caqyrb.png', title: "Bridge-A" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776105207/bridge02_okcw34.png', title: "Bridge-B" },
];

const ImageWithLoader = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[180px] flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden group shadow-sm">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 animate-pulse">
            Loading...
          </span>
        </div>
      )}
      <Image
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        className={`${props.className} transition-all duration-1000 group-hover:scale-110 ${
          isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
      />
    </div>
  );
};

export default function Bridge() {
  return (
    <section id="bridge_design" className="w-full py-16 md:py-24 bg-white scroll-mt-[60px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-16 items-start lg:items-center">
          <div className="lg:col-span-6">
             <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-3">
              Infrastructure
            </h2>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Bridge <br className="md:hidden" /> Projects
            </h1>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-light border-l-2 border-blue-600 pl-5 md:pl-6">
              At HH Consulting Architects & Engineers, we design irrigation systems that transcend 
              mere water delivery—they are lifelines for Ethiopia&apos;s agricultural heritage, 
              ecological balance, and rural prosperity.
            </p>
          </div>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {bridge.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[16/10]">
              <ImageWithLoader 
                src={item.src} 
                alt={item.title} 
                fill 
                className="object-cover"
              />
              
              {/* Mobile-Friendly Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                <div className="translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-lg md:text-xl font-bold tracking-tight">{item.title}</p>
                  <div className="h-1 w-8 bg-blue-500 mt-2 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}