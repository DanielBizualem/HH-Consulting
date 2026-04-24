"use client";
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Handshake } from "@phosphor-icons/react";

/* --- SHARED UTILITY: IMAGE LOADER --- */
const ImageWithLoader = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50/50 z-10">
          <div className="w-4 h-4 border border-slate-200 border-t-[#E5A343] rounded-full animate-spin" />
        </div>
      )}
      <Image
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        className={`${props.className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-all duration-700'}`}
      />
    </div>
  );
};

/* --- LOGO ASSETS --- */
const partners = [
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065509/haramaya_v6ls3p.png', alt: 'Haramaya University', name: "Haramaya Univ." },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065450/addis_hie23t.png', alt: 'Addis Ababa University', name: "Addis Abeba Univ." },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065770/bule_faqzdf.jpg', alt: 'Bule Hora University', name: "Bule Hora Univ." },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065769/central_cyfltn.png', alt: 'Central', name: "Central" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065497/ethioairline_hjydfn.png', alt: 'Ethiopian Airlines', name: "Ethiopian Airline" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065515/niss_rrwhix.png', alt: 'INSA', name: "NISS" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065724/sam_grfilx.png', alt: 'SAM', name: "SAM" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065482/city_yl0ays.jpg', alt: 'City Administration', name: "City Admin" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065498/experiance_ivwkno.jpg', alt: 'Experience', name: "Experience" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065515/nurbelay_knnjzg.jpg', alt: 'Nurbelay', name: "Nurbelay" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065491/eco_astaj2.jpg', alt: 'Eco', name: "Eco" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065508/habesha_ztaco5.jpg', alt: 'Habesha', name: "Habesha" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065722/remeda_iez8tk.png', alt: 'Remeda', name: "Remeda" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065494/ecole_xkd8hs.jpg', alt: 'Ecole', name: "Ecole" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065724/riftvalley_hafagl.jpg', alt: 'Rift Valley', name: "Rift Valley" },
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065495/elsewedy_rjthxq.jpg', alt: 'Elsewedy Electric', name: "Elsewedy" },
];

export default function Partners() {
  return (
    <section id="clients" className="w-full py-15 bg-white border-t border-slate-100 font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Handshake size={20} weight="thin" className="text-[#E5A343]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#E5A343] antialiased">
                Collaborations
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            PARTNERS & <span className="text-[#E5A343]">CLIENTS.</span>
          </h2>
          </div>
          
          <div className="h-px flex-1 bg-slate-100 hidden md:block mb-4 mx-8" />
          
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
            Engineering Excellence Worldwide
          </p>
        </div>
      </div>

      {/* --- Infinite Scroll Area --- */}
      <div className="relative group">
        {/* Gradient Fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex overflow-hidden py-16 border-y border-slate-50 bg-slate-50/30">
          <div className="flex animate-infinite-scroll whitespace-nowrap hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center px-12 md:px-20 group/item transition-all duration-500"
              >
                {/* Logo Frame: Monochrome by default, pops to color on hover */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-10 opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-700 ease-in-out">
                  <ImageWithLoader
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Technical Stamp Label */}
                <div className="relative flex flex-col items-center">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover/item:text-[#E5A343] transition-colors duration-500">
                    {partner.name}
                  </p>
                  <div className="mt-3 h-[1px] w-4 bg-slate-200 group-hover/item:w-12 group-hover/item:bg-[#E5A343] transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Infinite Scroll Keyframes --- */}
      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}