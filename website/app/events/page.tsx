"use client";
import React, { useState } from 'react';
import Image,{ ImageProps } from 'next/image';
import { Calendar, MapPin, Presentation, Trees, HardHat, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

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
          <h1 className="flex flex-wrap justify-center text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6 text-slate-900 text-center">
            Events & <span className="text-blue-600 ml-2 md:ml-3">Milestones</span>
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
    </main>
  );
}