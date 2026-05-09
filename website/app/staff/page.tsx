"use client";
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Award, Shield, Rocket, Users } from 'lucide-react';

/** * 1. IMAGE ASSETS & DATA */
const recognition = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065819/staff_recognition_wkn4nd.png';
const logo = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776110480/favicon-Photoroom_a5bibi.png';

const individualStaff = [
  { src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776111899/general_manager_kbctoq.png', alt: "General Manager", category: 'leadership', name: "HAILEMICHAEL SOLOMON" },
  { src: "https://res.cloudinary.com/djxfy60tt/image/upload/v1778242733/operation_manager_on9dvh.jpg", alt: 'Operation Manager', category: 'leadership', name: "HIWOT MEZGEBU" },
  { src: "https://res.cloudinary.com/djxfy60tt/image/upload/v1778242733/receptionist_upsant.jpg", alt: 'Receptionist', category: 'admin', name: "Blen Melaku" },
  { src: "https://res.cloudinary.com/djxfy60tt/image/upload/v1778243230/humanResource_kygccl.png", alt: 'Human Resource', category: 'admin', name: "SOLOMON HAILU" },
  { src: "https://res.cloudinary.com/djxfy60tt/image/upload/v1778243223/IT_department_q7lgzo.png", alt: 'IT Department', category: 'technical', name: "Dawit Endale" },
  { src: "https://res.cloudinary.com/djxfy60tt/image/upload/v1778242722/bid_department_djghte.jpg", alt: 'Bid Department', category: 'technical', name: "Kidist Tekilu" },
  { src: "https://res.cloudinary.com/djxfy60tt/image/upload/v1778243230/ScadDepartment_fj1n50.png", alt: 'Scad Department', category: 'technical', name: "Teamir Wondosen" },
  { src: "https://res.cloudinary.com/djxfy60tt/image/upload/v1778242728/Scad_department_okxusf.jpg", alt: 'Scad Department', category: 'technical', name: "Estifanos Mokonen" },
  {src:"https://res.cloudinary.com/djxfy60tt/image/upload/v1778317962/Finance_Department_j2utsm.jpg", alt:"Finance Department", category:"technical",name:"Dawit Biniam"}
];

/** * 2. HELPER COMPONENTS */
const ImageWithLoader = ({ className, ...props }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative w-full h-full bg-slate-50 overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10">
          <div className="w-6 h-6 border-2 border-slate-200 border-t-[#E5A343] rounded-full animate-spin" />
        </div>
      )}
      <Image
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        className={`${className} transition-all duration-700 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
      />
    </div>
  );
};

function StaffCard({ member }: { member: any }) {
  return (
    <div className="group relative bg-white aspect-[3/4] sm:aspect-[4/5] overflow-hidden border border-slate-100 shadow-sm">
      <ImageWithLoader 
        src={member.src}
        alt={member.alt}
        fill 
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-top transition-transform duration-1000 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <span className="text-[10px] sm:text-[12px] font-black text-[#E5A343] tracking-[0.2em] sm:tracking-[0.4em] uppercase block">
          {member.name}
        </span>
        <h5 className="text-white text-sm sm:text-md font-bold tracking-tight uppercase italic mt-1 leading-tight">
          {member.alt}
        </h5>
      </div>
    </div>
  );
}

/** * 3. MAIN PAGE COMPONENT */
export default function StaffPage() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
      
      {/* HEADER */}
      <header className="relative pt-24 pb-16 md:pt-40 md:pb-24 bg-white border-b border-slate-200">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-15">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-2 h-2 bg-[#E5A343]" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#E5A343]">
                  Human Capital
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-[900] tracking-tighter text-slate-900 leading-[0.9] mb-6">
                THE <span className="text-[#E5A343]">TEAMS</span> <br />
                <span className="text-slate-200">VISIONARIES</span>
              </h1>
            </div>
            <div className="flex lg:max-w-sm items-center">
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium border-l-2 border-slate-100 pl-6">
                "A multidisciplinary collective of architects and engineers dedicated to visionary design and technical excellence across Ethiopia."
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* GALLERY */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-20 space-y-20 md:space-y-24">
        {/* Leadership - 1 col on mobile, 2 on desktop */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
            <Shield size={14} className="text-[#E5A343]" /> Executive Leadership
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-32">
            {individualStaff.filter(m => m.category === 'leadership').map((m, i) => <StaffCard key={i} member={m} />)}
          </div>
        </div>

        {/* Operations - 2 cols on mobile, 3 on md, 4 on lg */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
            <Rocket size={14} className="text-[#E5A343]" /> Core Operations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {individualStaff.filter(m => m.category !== 'leadership').map((m, i) => <StaffCard key={i} member={m} />)}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
<section className="bg-slate-50 py-16 md:py-32 border-y border-slate-100 mt-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
    
    <div className="text-center lg:text-left">
      <Award size={32} className="text-[#E5A343] mb-6 md:mb-8 mx-auto lg:mx-0" />
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6 md:mb-8 italic uppercase">
        Excellence.
      </h2>
      <p className="text-slate-600 font-medium">
        Outstanding performance is fundamental to our engineering legacy.
      </p>
    </div>

    {/* The Image Container */}
    <div className="relative aspect-[4/3] border-[8px] md:border-[12px] border-slate-900 shadow-2xl overflow-hidden bg-white">
      <ImageWithLoader 
        src={recognition} 
        alt="Recognition" 
        fill 
        sizes="(max-width: 1024px) 100vw, 50vw"
        // Using object-contain instead of object-cover
        className="object-contain p-4 transition-all duration-1000"
      />
    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-[#1a364b] text-white py-16 md:py-20 px-6 text-center flex flex-col items-center">
        <div className="mb-6 relative w-16 h-16 md:w-20 md:h-20 brightness-0 invert opacity-80">
          <Image src={logo} alt="HH Consulting Logo" fill className="object-contain" />
        </div>
        <h2 className="text-xs md:text-sm font-medium tracking-[0.1em] md:tracking-[0.15em] uppercase mb-2">HH Consulting Architects & Engineers PLC.</h2>
        <h2 className="text-lg md:text-xl font-bold mb-10 md:mb-12">ኤች ኤች አማካሪ አርክቴክቶች እና መሐንዲሶች</h2>
        <div className="w-full max-w-4xl pt-8 border-t border-white/10 text-[10px] text-slate-500 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} HH Consulting. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}