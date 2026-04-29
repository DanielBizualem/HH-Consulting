"use client";
import React from 'react';
import { 
  Ruler, 
  RoadHorizon, 
  Tree, 
  ClipboardText, 
  BriefcaseMetal, 
  ArrowUpRight 
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const constructionVisual = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777376152/expertise_image_bfydpj.jpg';

export default function Expertise() {
  const expertiseData = [
    {
      icon: <Ruler size={24} weight="bold" />,
      title: "Architectural & Engineering",
      list: ["Architectural Design", "Structural Engineering", "Electrical Systems", "Sanitary & Plumbing"]
    },
    {
      icon: <RoadHorizon size={24} weight="bold" />,
      title: "Infrastructure & Roads",
      list: ["Road & Highway Design", "Bridge Engineering", "Irrigation Systems", "Master Planning"]
    },
    {
      icon: <Tree size={24} weight="bold" />,
      title: "Urban & Environmental",
      list: ["Regional Master Plans", "EIA Assessments", "Landscape Design", "Topographic Surveys"]
    },
    {
      icon: <ClipboardText size={24} weight="bold" />,
      title: "Feasibility & Planning",
      list: ["Public/Private Feasibility", "Strategic Site Analysis", "Market Analysis", "Cost Estimations"]
    },
    {
      icon: <BriefcaseMetal size={24} weight="bold" />,
      title: "Project Management",
      list: ["Contract Administration", "Quality Control", "Site Supervision", "Project Scheduling"]
    }
  ];

  return (
    <section id="expertise" className='w-full min-h-screen flex flex-col overflow-hidden bg-[#0f172a] gap-8 mt-5'>
      
      <header className="flex flex-col w-full justify-center items-start pt-15 gap-2">
            <div className="flex items-start gap-4">
              
              <h2 className="font-black uppercase tracking-[0.4em] text-white self-start ml-5 sm:ml-20 text-2xl md:text-4xl">
                Our <span className='text-[#E5A343]'>Expertise</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl font-bold tracking-tight leading-tight text-white self-start ml-5 sm:ml-20">
              Comprehensive Engineering <br /> & Design Solutions
            </p>
      </header>
      <div className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#0f172a]">
            {/* --- LEFT SIDE: ALL 5 DATA CATEGORIES --- */}
          <div className="w-full lg:w-3/5 px-8 md:p-10 lg:px-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              {/* Scrollable/Auto-stacking area for all 5 items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {expertiseData.map((section, idx) => (
                  <div key={idx} className="group">
                    <h3 className="flex items-center gap-3 text-lg font-bold mb-4 text-slate-100 group-hover:text-[#E5A343] transition-colors">
                      <span className="text-[#E5A343]">{section.icon}</span>
                      {section.title}
                    </h3>
                    
                    <ul className="space-y-2 pl-9 border-l border-white/10">
                        {/* Update 'items' to 'list' to match your expertiseData structure */}
                        {section.list.map((item, i) => (
                          <li key={i} className="text-slate-400 text-sm hover:text-white transition-colors cursor-default">
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: THE VISUAL --- */}
          <div className="flex flex-col w-full lg:w-2/5 relative min-h-[250px] mr-10 lg:min-h-screen mt-3">
            <Image 
              src={constructionVisual} 
              alt="Engineering Excellence"
              width={950}
              height={1250}
              className="brightness-75 contrast-125 mr-10"
              priority
            />
          </div>
      </div>

    </section>
  );
}