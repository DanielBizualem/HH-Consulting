"use client";
import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Presentation, Trees, HardHat, ArrowRight } from 'lucide-react';

// --- SITE IMAGES (.png) ---
import site01 from '@/public/site01.png'
import site02 from '@/public/site02.png'
import site03 from '@/public/site03.png'
import site04 from '@/public/site04.png'
import site05 from '@/public/site05.png'

// --- PRESENTATION IMAGES (.png) ---
import presentation01 from '@/public/presentaion01.png' 
import presentation02 from '@/public/presentation02.png'
import presentation03 from '@/public/presentation03.png'
import presentation04 from '@/public/presentation04.png'

// --- RETREAT IMAGES (.png) ---
import kuriftu01 from '@/public/kuriftu01.png'
import kuriftu02 from '@/public/kuriftu02.png'

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
    <main className="min-h-screen bg-white pb-20">
      {/* Updated Header: White background with subtle slate border */}
      <header className="pt-30  bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
            <Calendar size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Company Life</span>
          </div>
          <h1 className="flex justify-center text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-900">
            Events & <span className="text-blue-600 ml-3">Milestones</span>
          </h1>
          <p className="flex justify-center text-slate-500 text-lg max-w-2xl leading-relaxed">
            Exploring the moments that define HH Consulting's culture and expertise.
          </p>
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
                    <Image
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
    </main>
  );
}