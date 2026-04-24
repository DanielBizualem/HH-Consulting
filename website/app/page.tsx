"use client";
import { useState, useEffect } from 'react';
import { 
  Target, 
  Lightbulb, 
  Diamond, 
  ShieldCheck, 
  MapPin, 
  Ruler,
  Briefcase,
  TreePine,
  Pickaxe,
  FileSearch,
  Phone, 
  Mail, 
  Globe, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image,{ ImageProps } from 'next/image';
import FeasibilitySection from '@/components/FeasiblitySection';
import LocationFooter from '@/components/LocationFooter';
import Partners from '@/components/Partners';
import Certificate from '@/components/Certficate';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Expertise from '@/components/Experties';

const tower = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776068942/kebede_aapsef.png'

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

export default function HomePage() {

  return (
    <main className=" overflow-x-hidden font-sans text-slate-200 antialiased">
      
      <Hero/>
      {/* 1. WHO WE ARE */}
      <section id="about" className="w-full py-24 lg:py-20 bg-[#f8f9fa] font-poppins overflow-hidden font-sans text-slate-200 antialiased animate-border-glow">
        
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      
      {/* Content Side - Spans 7 columns on desktop */}
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="space-y-8">
          {/* Section Label */}
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#E5A343]" />
            <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.5em] text-[#E5A343] antialiased">
              Since 1992
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-6xl font-[800] text-slate-900 tracking-[-0.04em] leading-[0.9] antialiased">
            Who We <span className="text-slate-400">Are.</span>
          </h2>

          {/* Narrative Paragraphs */}
          <div className="space-y-8 text-slate-600">
            <p className="text-lg lg:text-[20px] leading-relaxed font-light tracking-tight border-l-4 border-slate-900 pl-6 py-2">
              A multidisciplinary firm based in Ethiopia, dedicated to providing 
              innovative, sustainable, and integrated solutions in architecture 
              and engineering.
            </p>

            <div className="pt-4">
              <h3 className="text-[11px] font-[800] uppercase tracking-[0.3em] text-slate-900 mb-4">
                Our Approach
              </h3>
              <p className="text-[15px] lg:text-[16px] leading-[1.8] font-normal text-slate-500 max-w-2xl">
                We combine visionary design with technical excellence to deliver impactful 
                projects. Our designs balance aesthetics, function, and environmental 
                responsibility, ensuring every project meets technical and social expectations.
              </p>
            </div>
          </div>

          {/* Team Link - Styled as a Button */}
          <div className="pt-8">
            <Link href="/staff" className="inline-flex items-center gap-6 group">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-slate-900 group-hover:text-[#E5A343] transition-colors">
                Meet our team
              </span>
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 group-hover:border-[#E5A343] transition-all">
                <ArrowRight size={18} className="text-slate-900 group-hover:text-[#E5A343] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Side - Spans 5 columns on desktop */}
      <div className="lg:col-span-5 order-1 lg:order-2">
        <div className="relative">
          {/* Decorative Background Box */}
          <div className="absolute -top-6 -right-6 w-full h-full border-[1px] border-slate-200 z-0" />
          
          <div className="relative h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden z-10 shadow-2xl">
             <ImageWithLoader 
              src={tower} 
              alt="HH Consulting Architects project" 
              fill
              className="object-cover scale-100 hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Floating Stat or Label */}
          <div className="absolute -bottom-8 -left-8 bg-white p-8 hidden md:block z-20 shadow-xl border-t-4 border-[#E5A343]">
            <p className="text-4xl font-[800] text-slate-900 mb-1">30+</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years of Experience</p>
          </div>
        </div>
      </div>

    </div>
    
  </div>
  
     </section>

 
     
     
     <Services/>

      {/* 2. MISSION, VISION, VALUE */}
      <Mission/>

      {/* 3. EXPERTISE */}
      <Expertise/>

      {/* 4. CERTIFICATIONS */}
    <Certificate/>
      {/* 5. CLIENTS */}
    <Partners/>
    <FeasibilitySection/>
    <LocationFooter/>
    </main>
  );
}

// Sub-components for cleaner structure
function CoreCard({ icon, title, text }: any) {
  return (
    <div className="group relative bg-[#1a2e44] p-8 md:p-12 transition-all duration-500 text-white">
      <div className="relative z-10">
        <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors">
          <div className="text-white">{icon}</div>
        </div>
        <h4 className="text-xl font-bold uppercase tracking-widest mb-6">{title}</h4>
        <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">{text}</p>
      </div>
    </div>
  );
}

function ExpertiseBox({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 md:p-10 hover:bg-slate-50 transition-all duration-300 group flex flex-col h-full border-r border-b border-gray-100">
      <div className="text-blue-600 mb-6 group-hover:-translate-y-1 transition-transform">{icon}</div>
      <h4 className="text-lg md:text-xl font-bold tracking-tight mb-4 text-slate-900 leading-tight">{title}</h4>
      <ul className="text-gray-500 text-xs md:text-sm space-y-2 list-disc ml-4">
        {Array.isArray(desc) ? desc.map((item: string, i: number) => <li key={i}>{item}</li>) : desc}
      </ul>
    </div>
  );
}

