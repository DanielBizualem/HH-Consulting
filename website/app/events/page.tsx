"use client";
import React, { useState } from 'react';
import Image,{ ImageProps } from 'next/image';
import { Calendar, MapPin, Presentation, Trees, HardHat, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';
const logo = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776110480/favicon-Photoroom_a5bibi.png'
const ImageWithLoader = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[50px] flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 animate-pulse">
            Loading...
          </span>
        </div>
      )}
      <Image
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        className={`${props.className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
      />
    </div>
  );
};

// --- SITE IMAGES (.png) ---
const site01 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065778/site01_bc6eid.png'
const site02 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065759/site02_nmlw3q.png'
const site03 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065759/site03_zhbdtz.png'
const site04 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065811/site04_maqctu.png'


// --- PRESENTATION IMAGES (.png) ---
const presentation01 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065559/presentaion01_ay1ru7.png' 
const presentation02 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065546/presentation02_honqb3.png'
const presentation03 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065561/presentation03_avrtxw.png'
const presentation04 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065600/presentation04_zhfnnt.png'

// --- RETREAT IMAGES (.png) ---
const kuriftu01 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065596/kuriftu01_c7qeds.png'
const kuriftu02 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065560/kuriftu02_dteg5h.png'


const events = [
  {
    category: "Technical Excellence",
    title: "Site Inspection & Field Studies",
    description: "Our engineering team conducts regular on-site visits to ensure structural integrity and design compliance across our various projects in the region.",
    icon: <HardHat className="text-orange-500" size={20} />,
    images: [site01, site02, site03, site04], 
    color: "bg-orange-50"
  },
  {
    category: "Knowledge Sharing",
    title: "Design Presentations & Seminars",
    description: "Internal workshops where our architects and engineers present innovative design solutions and project feasibility studies to stakeholders.",
    icon: <Presentation className="text-blue-500" size={20} />,
    images: [presentation01, presentation02, presentation03, presentation04],
    color: "bg-blue-50"
  },
  {
    category: "Corporate Culture",
    title: "Annual Team Retreat: Kuriftu",
    description: "Fostering team synergy and recharging our creative energy during our annual corporate getaway at Kuriftu Resorts.",
    icon: <Trees className="text-green-500" size={20} />,
    images: [kuriftu01, kuriftu02],
    color: "bg-green-50"
  }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Updated Header: White background with subtle slate border */}
      <header className="relative pt-32 pb-16 bg-white border-b border-slate-200 overflow-hidden font-poppins">
  {/* BACKGROUND: Technical Grid & Coordinates */}
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:40px_40px]" />
    {/* Coordinate Markers */}
    <span className="absolute top-4 left-4 text-[9px] font-mono text-slate-400">X: 08°33′N</span>
    <span className="absolute top-4 right-4 text-[9px] font-mono text-slate-400">Y: 39°16′E</span>
    <div className="absolute bottom-0 left-1/2 w-px h-full bg-slate-100" />
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
    <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
      
      {/* LEFT COLUMN: The "Drawing Title" */}
      <div className="flex-1">
        
        <h1 className="text-4xl md:text-6xl font-[900] tracking-tighter text-slate-900 leading-[0.8] mb-8">
          EVENTS <span className="text-[#E5A343]">+</span><br />
          <span className="text-slate-200">MILESTONES</span>
        </h1>

      </div>

      {/* RIGHT COLUMN: The "Specification" */}
      <div className="lg:max-w-md mt-auto">
        <div className="relative p-8 border border-slate-100 bg-slate-50/50 backdrop-blur-sm">
          {/* Architectural Corner Bracket */}
          <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-[#E5A343]" />
          
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
            At <span className="text-slate-900 font-bold">HH Consulting</span>, we treat every event as a structural component. These milestones represent the foundation of our corporate synergy and the elevation of our engineering expertise.
          </p>
          
          <div className="mt-6 flex items-center gap-2 group cursor-pointer">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#E5A343]">
              View Project Logs
            </span>
            <div className="h-[1px] flex-1 bg-slate-200 group-hover:bg-[#E5A343] transition-colors" />
          </div>
        </div>
      </div>

    </div>

    {/* DECORATIVE: Floor Plan Line */}
    <div className="absolute bottom-0 right-0 h-px w-2/3 bg-gradient-to-l from-[#E5A343] to-transparent" />
  </div>
</header>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 mt-20 relative z-20">
        <div className="space-y-25">
          {events.map((event, index) => (
            <section key={index} className="group">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                  <div className={`inline-flex items-center gap-2 p-2 rounded-lg ${event.color} mb-4`}>
                    {event.icon}
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">{event.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{event.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{event.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {event.images.map((img, i) => (
                  <div 
                    key={i} 
                    className={`relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200 group-hover:shadow-xl transition-all duration-500 
                      ${i === 0 ? 'lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto' : 'aspect-square'}`}
                  >
                    <ImageWithLoader
                      src={img}
                      alt={`${event.title} - ${i}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <p className="text-white text-xs font-medium flex items-center gap-2">
                           <MapPin size={12} /> HH Consulting
                        </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <footer className="bg-[#1a364b] text-white py-20 px-6 flex flex-col items-center justify-center text-center mt-10">
      {/* Logo Container */}
      <div className="mb-8 relative w-20 h-20">
        <Image 
          src={logo} // Ensure your logo import matches this variable name
          alt="HH Consulting Logo" 
          fill 
          className="object-contain brightness-0 invert" // Inverts to white if the original is dark
        />
      </div>

      {/* Company Name English */}
      <h2 className="text-lg md:text-xl font-medium tracking-[0.15em] uppercase mb-2">
        HH Consulting Architects & Engineers PLC.
      </h2>

      {/* Company Name Amharic */}
      <h2 className="text-xl md:text-2xl font-bold mb-12">
        ኤች ኤች አማካሪ አርክቴክቶች እና መሐንዲሶች
      </h2>

      {/* Slogan */}
      <p className="text-slate-300 text-base md:text-lg font-light italic tracking-wide">
        "For any international projects, we are 
          your dedicated global partner in 
          design and construction supervision."
      </p>
      
      {/* Optional: Developer Credit / Copyright */}
      <div className="mt-16 pt-8 border-t border-white/10 w-full max-w-4xl text-xs text-slate-500 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} HH Consulting. All Rights Reserved.
      </div>
    </footer>
    </main>
  );
}