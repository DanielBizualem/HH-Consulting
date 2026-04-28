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
import Link from 'next/link';

export default function Expertise() {
  const expertiseData = [
    {
      icon: <Ruler size={42} weight="thin" />,
      title: "Architectural & Engineering",
      list: ["Architectural Design", "Structural Engineering", "Electrical Systems", "Sanitary & Plumbing"]
    },
    {
      icon: <RoadHorizon size={42} weight="thin" />,
      title: "Infrastructure & Roads",
      list: ["Road & Highway Design", "Bridge Engineering", "Irrigation Systems", "Master Planning"]
    },
    {
      icon: <Tree size={42} weight="thin" />,
      title: "Urban & Environmental",
      list: ["Regional Master Plans", "EIA Assessments", "Landscape Design", "Topographic Surveys"]
    },
    {
      icon: <ClipboardText size={42} weight="thin" />,
      title: "Feasibility & Planning",
      list: ["Public/Private Feasibility", "Strategic Site Analysis", "Market Analysis", "Cost Estimations"]
    },
    {
      icon: <BriefcaseMetal size={42} weight="thin" />,
      title: "Project Management",
      list: ["Contract Administration", "Quality Control", "Site Supervision", "Project Scheduling"]
    }
  ];

  return (
    <section id="expertise" className="w-full lg:pt-18 bg-[#FAFBFC] font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* --- Section Header --- */}
        <header className="relative mt-15 sm:mt-0 mb-5 md:mb-24 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#E5A343]" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#E5A343] antialiased">
              Disciplines
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-[800] text-slate-900 tracking-tight leading-[0.9] antialiased"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            PROFESSIONAL <span className="text-[#E5A343]">EXPERTISE.</span>
          </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-slate-500 text-lg leading-relaxed max-w-xl"
          >
            Providing comprehensive technical solutions across the built environment, 
            leveraging automation and engineering excellence.
          </motion.p>
        </header>

        {/* --- Expertise Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
          
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-12 lg:p-16 h-full flex flex-col justify-between overflow-hidden transition-all duration-700 ease-in-out"
            >
              {/* Hover Background Accent */}
              <div className="absolute inset-0 bg-[#0F172A] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo" />

              <div className="relative z-10">
                {/* Number Accent */}
                <span className="block text-[10px] font-black text-slate-300 group-hover:text-white/20 tracking-[0.3em] mb-12 transition-colors">
                  CORE DISCIPLINE — 0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-10 text-[#E5A343] group-hover:text-white transition-all duration-500 transform group-hover:scale-110 origin-left">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-white mb-8 leading-tight transition-colors">
                  {item.title}
                </h3>

                {/* List Items */}
                <ul className="space-y-4">
                  {item.list.map((sub, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="h-px w-3 bg-[#E5A343] group-hover:bg-white/40 group-hover:w-6 transition-all duration-500" />
                      <span className="text-slate-500 group-hover:text-slate-400 text-sm font-medium tracking-wide transition-colors">
                        {sub}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Decoration */}
              <div className="relative z-10 mt-16 pt-8 border-t border-slate-100 group-hover:border-white/10 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white/40">
                  Engineering Standards
                </span>
                <ArrowUpRight 
                  className="text-slate-300 group-hover:text-[#E5A343] transition-colors" 
                  size={20} 
                  weight="bold"
                />
              </div>
            </motion.div>
          ))}

          {/* Empty "Contact" CTA Cell to balance the 3-column grid if you have 5 items */}
          <div className="hidden lg:flex p-12 lg:p-16 bg-[#E5A343] flex-col justify-center items-center text-center">
            <h4 className="text-white text-2xl font-bold mb-4">Start a Project</h4>
            <p className="text-white/80 text-sm mb-8">Ready to bring your vision to life?</p>
            <Link href="/#location" className="px-8 py-3 bg-[#0F172A] text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}