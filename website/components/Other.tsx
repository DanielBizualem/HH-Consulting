"use client";
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

// Assets
const others = [
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776106092/habesha_steel_syshkx.png', title: "Habesha Steel" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776106096/tomato_factory_b9x9vk.png', title: "Tomato Factory" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776106107/food_complex_fnu5ry.png', title: "Food Complex" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776106121/djibuti_guafon.png', title: "INSTITUTE OF AFRICA" },
];

const ImageWithLoader = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[200px] flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden group shadow-sm">
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

export default function Others() {
  return (
    <section id="others" className="w-full md:py-24 bg-white scroll-mt-[60px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                Others
            </h1>
          </div>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {others.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
              <ImageWithLoader 
                src={item.src} 
                alt={item.title} 
                fill 
                
              />
              
              {/* Overlay Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-xl font-bold tracking-tight">{item.title}</p>
                  <div className="h-1 w-8 bg-blue-500 mt-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}