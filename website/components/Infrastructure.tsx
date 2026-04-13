"use client";
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

// Assets
const tiya_heritage = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776086561/tiya_heritage_oxej6r.png';
const tiya_details = [
  'https://res.cloudinary.com/djxfy60tt/image/upload/v1776086036/tiya_01_ptrtde.png',
  'https://res.cloudinary.com/djxfy60tt/image/upload/v1776086034/tiya_02_y6lq12.png',
  'https://res.cloudinary.com/djxfy60tt/image/upload/v1776086042/tiya_03_rznlfy.png'
];
const haramaya_admin = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776086329/haramaya_admin_zcvghp.png';
const experiance_text = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776091003/expere_text_s0oidp.png';
const suko = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776086314/suko_dtygnx.png';
const experiance = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776086328/experiance_clothing_cqnvzq.png';
const suko_text = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776091005/suko_text_pq42ze.png';
const haramaya_detail = [
  'https://res.cloudinary.com/djxfy60tt/image/upload/v1776089159/haramaya_recognition_tf5mdx.png',
  'https://res.cloudinary.com/djxfy60tt/image/upload/v1776086358/haramaya_admin02_dwrqaz.png'
];

const ImageWithLoader = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[150px] flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-100/50">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 z-10">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-600 animate-pulse">
            Loading...
          </span>
        </div>
      )}
      <Image
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        className={`${props.className} transition-all duration-700 ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
      />
    </div>
  );
};

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="w-full py-12 md:py-24 bg-white scroll-mt-[60px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* === SECTION 1: TIYA HERITAGE === */}
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Infrastructure
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light border-l border-blue-600 pl-5">
              At HH Consulting Architects & Engineers, we design infrastructure that powers 
              progress while honoring Ethiopia&apos;s cultural and environmental legacy.
            </p>
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Main Heritage Image */}
          <div className="md:col-span-8 lg:col-span-9 relative aspect-[4/3] md:aspect-auto md:h-[600px]">
            <ImageWithLoader 
              src={tiya_heritage} 
              alt="Tiya World Heritage Site" 
              fill
              className="object-cover" 
            />
          </div>

          {/* Detail Images Stack */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-4 md:gap-6">
            {tiya_details.map((src, index) => (
              <div key={index} className="relative aspect-video md:flex-1 md:aspect-auto md:min-h-0">
                <ImageWithLoader 
                  src={src} 
                  alt={`Tiya detail ${index + 1}`} 
                  fill
                  className="object-cover" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* === SECTION 2: HARAMAYA UNIVERSITY === */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-12 items-end mt-20 md:mt-32">
          <div className="lg:col-span-7">
             <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-3">
              Educational Facilities
            </h2>
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              Haramaya University <br className="hidden md:block"/> Admin Building
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          
          {/* Main Admin Image */}
          <div className="md:col-span-8 lg:col-span-9 relative aspect-[4/3] md:aspect-auto md:h-[600px]">
            <ImageWithLoader 
              src={haramaya_admin} 
              alt="Haramaya University Admin Building" 
              fill
              className="object-cover" 
            />
          </div>
          
          {/* Detail Images Stack */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-4 md:gap-6">
            {haramaya_detail.map((src, index) => (
              <div key={index} className="relative aspect-video md:flex-1 md:aspect-auto md:min-h-0">
                <ImageWithLoader 
                  src={src} 
                  alt={`Haramaya detail ${index + 1}`} 
                  fill
                  className="object-cover" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* === SECTION 3: RETAIL EXPERIENCE (Stacked Rows) === */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-12 items-end mt-20 md:mt-32">
          <div className="lg:col-span-7">
            
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              Experience Clothing
            </h1>
          </div>
        </div>

        {/* Experience Clothing Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            {/* Left Image (Portrait Context) */}
            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] overflow-hidden">
              <ImageWithLoader 
                src={experiance} 
                alt="Experience Clothing Store Interior" 
                fill
                className="object-cover" 
              />
            </div>

            {/* Right Image (Brand Story/Detail) */}
            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] overflow-hidden bg-slate-100 rounded-xl">
              <ImageWithLoader 
                src={experiance_text} 
                alt="Experience Clothing" 
                fill
                className="object-contain p-8 md:p-12" // object-contain is better for text assets
              />
            </div>
        </div>

        {/* Suko Row (Mirrored Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Left Image (Brand Story/Detail) */}
            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] overflow-hidden bg-slate-100 rounded-xl">
              <ImageWithLoader 
                src={suko_text} 
                alt="Suko Brand Context" 
                fill
                className="object-contain p-8 md:p-12"
              />
            </div>

            {/* Right Image (Portrait Context) */}
            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] overflow-hidden">
              <ImageWithLoader 
                src={suko} 
                alt="Suko Store Environment" 
                fill
                className="object-cover" 
              />
            </div>
        </div>

      </div>
    </section>
  );
}