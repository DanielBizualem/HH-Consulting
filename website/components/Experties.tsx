"use client";
import React from 'react';
import { 
  Ruler, 
  RoadHorizon, 
  Tree, 
  ClipboardText, 
  BriefcaseMetal 
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const constructionVisual = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777376152/expertise_image_bfydpj.jpg';

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Expertise() {
  const expertiseData = [
    {
      icon: <Ruler size={24} weight="bold" />,
      title: "Architectural & Engineering Design",
      list: ["Architectural Design", "Structural Engineering", "Electrical & Mechanical Systems", "Plumbing Systems"],
      glass: true 
    },
    {
      icon: <RoadHorizon size={24} weight="bold" />,
      title: "Infrastructure & Civil Engineering",
      list: ["Roads & Highways", "Bridges", "Irrigation", "Master Planning"]
    },
    {
      icon: <Tree size={24} weight="bold" />,
      title: "Urban & Environmental",
      list: ["Urban Planning", "Impact (EIA)", "Landscapes", "Master Planning", "Topographic Surveys"]
    },
    {
      icon: <ClipboardText size={24} weight="bold" />,
      title: "Feasibility & Planning",
      list: ["Public/Private Feasibility", "Strategic Site Analysis", "Market Analysis", "Cost Estimations"],
      isHalf: true
    },
    {
      icon: <BriefcaseMetal size={24} weight="bold" />,
      title: "Project Management",
      list: ["Contract Administration", "Quality Control", "Site Supervision", "Project Scheduling"],
      isHalf: true
    }
  ];

  return (
    <section id="expertise" className='w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#1a2332]'>
      
      {/* --- LEFT / TOP SIDE: DARK BLUE CONTENT --- */}
      <div className="w-full lg:w-[55%] px-6 pt-16 pb-20 md:p-20 lg:pl-24 flex flex-col justify-center relative z-10">
        <header className="mb-10 relative z-10 text-center lg:text-left">
          <h2 className="font-bold uppercase tracking-[0.2em] text-white text-2xl md:text-4xl mb-2">
            Our <span className='text-white'>Expertise</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base tracking-wide font-medium">
            Comprehensive Engineering & Design Solutions
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10 max-w-5xl">
          {expertiseData.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "p-6 rounded-lg transition-all duration-500",
                section.glass ? "bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl" : "",
                !section.isHalf ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <h3 className="flex items-center gap-3 text-lg font-bold mb-4 text-white">
                <span className="text-[#C59D5F]">{section.icon}</span>
                {section.title}
              </h3>
              
              <ul className={cn(
                "grid gap-x-8 gap-y-2 pl-9",
                !section.isHalf && section.list.length > 4 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"
              )}>
                {section.list.map((item, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="opacity-50 font-bold">-</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- RIGHT / BOTTOM SIDE: LIGHT BACKGROUND --- */}
      <div className="w-full lg:w-[45%] relative bg-[#f8fafc] flex flex-col items-center justify-start p-6 pt-0 lg:pt-32">
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
        
        {/* 
            MOBILE: Negative margin-top pulls image UP into the blue section 
            DESKTOP: Negative margin-left pulls image LEFT into the blue section
        */}
        <div className="relative w-full max-w-lg -mt-12 lg:mt-0 lg:-ml-32 flex flex-col items-center gap-10 z-20">
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full relative group px-4 lg:px-0"
          >
            {/* Centered Image with White Border */}
            <div className="relative z-10 shadow-[0_30px_70px_rgba(0,0,0,0.25)] rounded-lg overflow-hidden border-[6px] md:border-[8px] border-white bg-white mx-auto transition-transform duration-500">
              <Image 
                src={constructionVisual} 
                alt="Engineering Visual"
                width={1200} 
                height={1400}
                className="object-cover w-full h-auto brightness-105 contrast-105"
                priority
              />
            </div>
            
            {/* Shadow decoration (Hidden on mobile for cleaner alignment) */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-full h-full bg-[#1a2332]/10 rounded-lg -z-0" />
          </motion.div>

          {/* Button aligned perfectly centered under the image on mobile */}
          <Link href="/building-design" className="w-full flex justify-center">
            <button className="bg-[#b38b59] hover:bg-[#9a764a] text-white px-14 py-4 rounded-sm text-[12px] font-bold uppercase tracking-[0.3em] transition-all shadow-xl active:scale-95 z-30 mb-12 lg:mb-0">
              Projects
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
}