"use client"
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Users, Lightbulb, Award, Star, Wallet, Target, ArrowRight } from 'lucide-react';

/** * 1. IMAGE ASSETS & DATA 
 * Defined outside the component to ensure accessibility
 */
const recognition = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065819/staff_recognition_wkn4nd.png';
const paymentDept = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065590/payement_dept_rbdpqz.png';
const designDept = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065576/design_dept_nqbogc.png';

const general_manager = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776111899/general_manager_kbctoq.png';
const deputy = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776111904/dupy_general_manager_xbfrqp.png';
const receptionist01 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776111885/receptionist_bqpgce.png';
const receptionist02 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776111880/receptionist01_jwm6xm.png';
const staff_members = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776111903/staff_member_vhs8ea.png';
const logo = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776110480/favicon-Photoroom_a5bibi.png'
const staff = [
  { src: general_manager, alt: "general_manager" },
  { src: deputy, alt: 'deputy_general_manager' },
  { src: receptionist01, alt: 'receptionist01' },
  { src: receptionist02, alt: 'receptionist02' },
  { src: staff_members, alt: 'staff_members' },
];

/** * 2. HELPER COMPONENTS
 */
const ImageWithLoader = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative w-full h-full min-h-[100px] flex items-center justify-center bg-slate-50 overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 z-10">
          <div className="w-6 h-6 border-2 border-slate-200 border-t-[#E5A343] rounded-full animate-spin" />
        </div>
      )}
      <Image
        {...props}
        onLoadingComplete={() => setIsLoading(false)}
        className={`${props.className} ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100 transition-all duration-700'}`}
      />
    </div>
  );
};

function StaffCard({ member, label }: { member: any, label: string }) {
  return (
    <div className="group relative bg-white aspect-[4/4] overflow-hidden">
      <ImageWithLoader src={member.src} alt={member.alt} width={520} height={520} className="transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-[9px] font-black text-[#E5A343] tracking-[0.3em] uppercase">{label}</span>
        <h5 className="text-white text-lg font-bold tracking-tight mt-1 capitalize">
          {member.alt.replace(/_/g, ' ')}
        </h5>
      </div>
      
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#E5A343] opacity-0 group-hover:opacity-100 transition-all duration-700" />
    </div>
  );
}

/** * 3. MAIN PAGE COMPONENT
 */
export default function StaffPage() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      
      {/* HEADER: Architectural Title Block */}
      <header className="relative pt-40 pb-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:40px_40px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-15">
            <div className="">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-[#E5A343]" />
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E5A343]">
                  Human Capital
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-[900] tracking-tighter text-slate-900 leading-[0.85] mb-8">
                THE <span className="text-[#E5A343]">TEAMS</span> <br />
                <span className="text-slate-200">VISIONARIES</span>
              </h1>
            </div>
            <div className="flex lg:max-w-sm pb-4 items-center">
              <p className="text-slate-500 leading-relaxed font-medium border-l-2 border-slate-100 pl-6">
                "A multidisciplinary collective of architects and engineers dedicated to visionary design and technical excellence across Ethiopia."
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* STAFF GALLERY */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Tier 1: Leadership */}
        <div className="mb-24">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10 text-center">
            Executive Leadership
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 max-w-4xl mx-auto">
            {staff.filter(m => m.alt.includes('manager')).map((member, index) => (
              <StaffCard key={index} member={member} label="Leadership" />
            ))}
          </div>
        </div>

        {/* Tier 2: Administration */}
        <div className="mb-24">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10 text-center">
            Front Office & Administration
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 max-w-4xl mx-auto">
            {staff.filter(m => m.alt.includes('receptionist')).map((member, index) => (
              <StaffCard key={index} member={member} label="Admin" />
            ))}
          </div>
        </div>

        {/* Tier 3: Technical Team (Full Width) */}
        <div className="group relative aspect-video overflow-hidden border border-slate-200 bg-slate-50">
           {staff.filter(m => m.alt.includes('staff_member')).map((member, index) => (
             <ImageWithLoader 
               key={index}
               src={member.src} 
               alt={member.alt} 
               fill 
               className="transition-transform duration-1000 group-hover:scale-105" 
             />
           ))}
           <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 border-l-4 border-[#E5A343]">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Technical Engineering Corps</span>
           </div>
        </div>
      </section>

      {/* DEPARTMENT SPOTLIGHTS */}
      <section className="py-24 space-y-32 max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Design Dept */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-black text-[#E5A343] tracking-[0.4em] uppercase">Department 01</span>
            <h3 className="text-4xl font-extrabold tracking-tighter text-slate-900 mt-4 mb-6">Design & Architecture</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Our visionaries translate abstract concepts into tangible, resilient architectural designs, balancing aesthetics, function, and sustainability.
            </p>
          </div>
          <div className="lg:col-span-7 relative aspect-video group overflow-hidden border-8 border-slate-50 shadow-2xl">
            <ImageWithLoader src={designDept} alt="Design Dept" fill />
          </div>
        </div>

        {/* Contract Dept */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 relative aspect-video border-8 border-slate-50 shadow-2xl">
            <ImageWithLoader src={paymentDept} alt="Payment Dept" fill />
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <span className="text-[10px] font-black text-[#E5A343] tracking-[0.4em] uppercase">Department 02</span>
            <h3 className="text-4xl font-extrabold tracking-tighter text-slate-900 mt-4 mb-6">Contract & Quality Control</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Ensuring efficient and economical project management through meticulous contract administration and robust quality control solutions.
            </p>
          </div>
        </div>
      </section>

      {/* RECOGNITION FEATURE */}
      <section className="bg-slate-50 py-32 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-[0.05]">
          <Star size={200} className="text-[#E5A343]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
               <Award size={32} className="text-[#E5A343] stroke-1" />
               <div className="h-px w-12 bg-[#E5A343]/50" />
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-slate-900 mb-8 ">Celebrating <br/> Excellence.</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              "We foster a creative work environment where outstanding performance is recognized as fundamental to our engineering legacy."
            </p>
          </div>
          <div className="relative aspect-[4/3] border-[12px] border-slate-900 shadow-3xl overflow-hidden rounded-sm">
            <ImageWithLoader 
              src={recognition} 
              alt="Recognition" 
              fill 
              className="hover:grayscale-0 transition-all duration-700" 
            />
          </div>
        </div>
      </section>

      {/* CORES RECAP */}
      <footer className="bg-[#1a364b] text-white py-20 px-6 flex flex-col items-center justify-center text-center">
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