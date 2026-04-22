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
      <section id="profile" className="w-full py-12 lg:py-18 bg-white font-poppins border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
    
    {/* Section Header */}
    <div className="mb-16 md:mb-24">
      <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.5em] text-[#E5A343] block mb-4 antialiased">
        Company Philosophy
      </span>
      <h2 className="text-4xl lg:text-6xl font-[800] text-slate-900 tracking-[-0.03em] leading-none mb-8 antialiased">
        Our <span className="text-[#E5A343]">Cores.</span>
      </h2>
      <div className="h-[4px] w-12 bg-slate-900" />
    </div>

    {/* The Technical Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-slate-200">
      
      {/* Mission Card */}
      <div className="group relative p-10 md:p-14 border-r border-b border-slate-200 hover:bg-slate-50 transition-all duration-500">
        <div className="mb-10 text-[#E5A343]">
          <Target size={40} strokeWidth={1} />
        </div>
        <h3 className="text-2xl font-[700] tracking-tight text-slate-900 mb-6 uppercase">
          Mission
        </h3>
        <p className="text-slate-500 text-[15px] lg:text-[16px] leading-[1.8] font-normal">
          HH Consulting Architects and Engineers PLC is driven by a passion for automated project management solutions with architectural and civil engineering services.
        </p>
      </div>

      {/* Vision Card */}
      <div className="group relative p-10 md:p-14 border-r border-b border-slate-200 hover:bg-slate-50 transition-all duration-500">
        <div className="mb-10 text-[#E5A343]">
          <Lightbulb size={40} strokeWidth={1} />
        </div>
        <h3 className="text-2xl font-[700] tracking-tight text-slate-900 mb-6 uppercase">
          Vision
        </h3>
        <p className="text-slate-500 text-[15px] lg:text-[16px] leading-[1.8] font-normal">
          We strive to achieve innovative project management and quality control solutions for the local construction industry by creating partnership and creative working environments.
        </p>
      </div>

      {/* Value Card - Dark Accent */}
      <div className="group relative p-10 md:p-14 border-r border-b border-slate-900 bg-[#1a2e44] text-white overflow-hidden">
        {/* Subtle Decorative Background Text */}
        <span className="absolute -bottom-4 -right-4 text-white/[0.03] text-8xl font-black select-none">
          VALUE
        </span>
        
        <div className="mb-10 text-[#E5A343]">
          <Diamond size={40} strokeWidth={1} />
        </div>
        <h3 className="text-2xl font-[700] tracking-tight mb-8 uppercase">
          Value
        </h3>
        <ul className="space-y-5">
          {[
            "Appropriate usage of time",
            "Developing behavioral qualities",
            "Serving customers in kind"
          ].map((val, i) => (
            <li key={i} className="flex items-center gap-4 group/item">
              <div className="h-[1px] w-4 bg-[#E5A343] transition-all group-hover/item:w-8" />
              <span className="text-slate-300 text-[14px] lg:text-[15px] font-medium tracking-wide">
                {val}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
      </section>

      {/* 3. EXPERTISE */}
      <section id="expertise" className="w-full py-12 lg:py-18 bg-white font-poppins border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
    
    {/* Section Header */}
    <div className="mb-20">
      <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.5em] text-[#E5A343] block mb-4 antialiased">
        Disciplines
      </span>
      <h2 className="text-4xl lg:text-6xl font-[800] text-slate-900 tracking-[-0.03em] leading-none mb-8 antialiased">
        Professional <span className="text-slate-400">Expertise.</span>
      </h2>
      <div className="h-[4px] w-12 bg-slate-900" />
    </div>

    {/* Expertise Grid - Technical Blueprint Style */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
      {[
        {
          icon: <Ruler size={36} strokeWidth={1} />,
          title: "Architectural & Engineering",
          desc: ["Architectural Design", "Structural Engineering", "Electrical Systems", "Sanitary & Plumbing"]
        },
        {
          icon: <Pickaxe size={36} strokeWidth={1} />,
          title: "Infrastructure",
          desc: ["Road & Highway Design", "Bridges", "Irrigation", "Master Planning"]
        },
        {
          icon: <TreePine size={36} strokeWidth={1} />,
          title: "Urban & Environmental",
          desc: ["Regional Master Plans", "EIA Assessments", "Landscape Design", "Topographic Surveys"]
        },
        {
          icon: <FileSearch size={36} strokeWidth={1} />,
          title: "Feasibility & Planning",
          desc: ["Public/Private Feasibility", "Strategic Site Analysis", "Cost Estimations"]
        },
        {
          icon: <Briefcase size={36} strokeWidth={1} />,
          title: "Project Management",
          desc: ["Contract Administration", "Quality Control", "Site Supervision", "Scheduling"]
        }
      ].map((item, index) => (
        <div 
          key={index} 
          className="group p-10 lg:p-14 border-r border-b border-slate-200 hover:bg-[#1a2e44] transition-all duration-700 ease-in-out relative overflow-hidden"
        >
          {/* Subtle Background Number */}
          <span className="absolute top-6 right-8 text-slate-100 group-hover:text-white/5 text-5xl font-[800] transition-colors">
            0{index + 1}
          </span>

          <div className="relative z-10">
            {/* Icon - Gold Accent */}
            <div className="mb-10 text-[#E5A343] group-hover:text-white transition-colors duration-500">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-[700] tracking-tight text-slate-900 group-hover:text-white mb-6 uppercase leading-snug">
              {item.title}
            </h3>

            {/* Disciplines List */}
            <ul className="space-y-3">
              {item.desc.map((sub, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-[1px] w-3 bg-[#E5A343] group-hover:bg-white/40 group-hover:w-5 transition-all" />
                  <span className="text-slate-500 group-hover:text-slate-300 text-[13px] lg:text-[14px] font-medium tracking-wide">
                    {sub}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

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

