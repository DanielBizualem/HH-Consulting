"use client"
import { Maximize2, Layers, Compass, Ruler,ChevronDown, ChevronUp } from 'lucide-react';
import Image,{ ImageProps } from 'next/image';
import { useState } from 'react';
import Infrastructure from '@/components/Infrastructure';
import TerminalDesign from '@/components/TerminalDesign';
import Road from '@/components/Road';
import Irrigation from '@/components/Irrigation';
import Bridge from '@/components/Bridge';
import Others from '@/components/Other';
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

const project01 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065609/project01_svknej.png'
const table01 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065758/table01_nt0or9.png'
const project02 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065646/project02_ozu1jh.png'
const table02 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065762/table02_fiyzgr.png'
const project03 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065656/project03_dhqpty.png'
const table03 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065762/table03_xls7g0.png'
const project04 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065631/project04_xypncb.png'
const table04 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065763/table04_e3ckkl.png'
const project05 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065662/project05_jdmtym.png'
const table05 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065770/table05_ebi4hz.png'
const project06 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065646/project06_pyrthe.png'
const table06 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065766/table06_vo62bh.png'
const project07 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065654/project07_whagmp.png'
const table07 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065767/table07_mohqp9.png'
const project08 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065676/project08_unv8ym.png'
const project09 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065669/project09_moarck.png'
const project10 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065690/project10_squgnx.png'
const project11 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065703/project11_b5eovz.png'
const project12 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065709/project12_l7ljzi.png'
const project13 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065681/project13_iuioh6.png'
const project14 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065714/project14_rrikck.png'
const project15 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065721/project15_xawyqe.png'
const project16 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065714/project16_kmljoh.png'
const project17 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065720/project17_xkgno9.png'
const project18 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065727/project18_hazpyn.png'
const project19 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065741/project19_y2mtp7.png'
const project20 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065480/project20_gtuo8m.png'
const project21 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065754/project21_aronte.png'
const project22 = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065750/project22_xqkpom.png'


export default function BuildingDesignPage() {
  const [showMore, setShowMore] = useState(false);
  return (
    <main className="min-h-screen bg-white pt-32">
      <div className="px-6 lg:px-20 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-20 border-b border-gray-100 pb-12">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-4 block">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-[1.1] md:leading-tight">
              Building Design <span className="italic text-gray-400">&</span> Architecture
          </h1>
          <p className="text-md max-w-2xl leading-relaxed">
          At HH Consulting Architects and Engineers,
          We transcend conventional aesthetics by seamlessly weaving Ethiopian heritage, innovative sustainability, and human-centric functionality into every structure. Our designs are not merely buildings — they are dynamic narratives of culture, resilience, and progress.
          </p>
          <div className='flex mt-5 ml-8'>
            <ul className='flex flex-col list-disc gap-3 text-md'>
                <li>Building Design (Architectural, Structural, 
                 Electrical, Sanitary, Mechanical, and more)
                 </li>
                 <li>
                 Urban Design and Planning Works
                 </li>
                 <li>
                 Topography Survey
                 </li>
                 <li>
                 Landscape Design and Specification
                 </li>
                 <li>
                 Contract Administration and Supervision/ 
                  Quality Control
                 </li>
            </ul>
          </div>
        </header>

        {/* 1. ARCHITECTURAL APPROACH (The "How") */}
        <section className="grid md:grid-cols-4 gap-8 mb-32">
          <ApproachCard icon={<Ruler size={20} />} title="Precision" desc="Exact technical drafting." />
          <ApproachCard icon={<Compass size={20} />} title="Context" desc="Site-specific orientation." />
          <ApproachCard icon={<Layers size={20} />} title="Structure" desc="Optimized material load." />
          <ApproachCard icon={<Maximize2 size={20} />} title="Scale" desc="Human-centric proportions." />
        </section>

        {/* 2. PROJECT GALLERY */}
    <section className="space-y-32">
          
          {/* Project 01 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-7 aspect-[16/10] relative rounded-xl overflow-hidden">
              <ImageWithLoader src={project01} alt="Project 01" fill className="object-cover" />
            </div>
            <div className="lg:col-span-5">
              <ImageWithLoader src={table01} alt="Table 01" width={1024} height={576} className="rounded-lg" />
            </div>
          </div>

          {/* Project 02 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ImageWithLoader src={table02} alt="Table 02" width={1024} height={576} className="rounded-lg" />
            </div>
            <div className="lg:col-span-7 aspect-[16/10] relative rounded-xl overflow-hidden order-1 lg:order-2">
              <ImageWithLoader src={project02} alt="Project 02" fill className="object-cover" />
            </div>
          </div>

          {/* Project 03 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-7 aspect-[16/10] relative rounded-xl overflow-hidden">
              <ImageWithLoader src={project03} alt="Project 03" fill className="object-cover" />
            </div>
            <div className="lg:col-span-5">
              <ImageWithLoader src={table03} alt="Table 03" width={1024} height={576} className="rounded-lg" />
            </div>
          </div>

          {/* Project 04 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ImageWithLoader src={table04} alt="Table 04" width={1024} height={576} className="rounded-lg" />
            </div>
            <div className="lg:col-span-7 aspect-[16/10] relative rounded-xl overflow-hidden order-1 lg:order-2">
              <ImageWithLoader src={project04} alt="Project 04" fill className="object-cover" 
              />
            </div>
          </div>

          {/* Project 05 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-7 aspect-[16/10] relative rounded-xl overflow-hidden">
              <ImageWithLoader 
                src={project05} 
                alt="Project 05" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="lg:col-span-5">
              <ImageWithLoader 
                src={table05} 
                alt="Table 05" 
                width={1024} 
                height={576} 
                className="rounded-lg" 
              />
            </div>
          </div>

          {/* Project 06 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ImageWithLoader 
                src={table06} 
                alt="Table 06" 
                width={1024} 
                height={576} 
                className="rounded-lg shadow-sm" 
              />
            </div>
            <div className="lg:col-span-7 aspect-[16/10] relative rounded-xl overflow-hidden order-1 lg:order-2 shadow-md">
              <ImageWithLoader 
                src={project06} 
                alt="Project 06" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* PROJECT 07 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group">
              <div className="lg:col-span-7 aspect-[16/10] relative rounded-xl overflow-hidden">
                <ImageWithLoader 
                  src={project07} 
                  alt="Project 07" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="lg:col-span-5">
                <ImageWithLoader 
                  src={table07} 
                  alt="Table 07" 
                  width={1024} 
                  height={576} 
                  className="rounded-lg" 
                />
              </div>
          </div>


          {showMore && (
            <div className="space-y-32">
              
              <div className="grid lg:grid-cols-12 gap-12 items-center group">
                {/* ... your existing Project 13 code ... */}
              </div>

              <div className="grid lg:grid-cols-12 gap-12 items-center group">
 
            <div className="lg:col-span-5 flex flex-col order-1"> {/* order-1 on desktop */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Haramaya Project Details</h3>
                <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
              </div>
              <div className="space-y-4">
                {[
                  { label: "Country", value: "Ethiopia" },
                  { label: "Location", value: "Haramaya" },
                  { label: "Client", value: "Haramaya University" },
                  { label: "Staff Provided", value: "Architects, Engineers, CAD experts" },
                  { label: "Team Size", value: "9 Professionals" },
                  { label: "Start Date", value: "June 2021" },
                  { label: "Duration", value: "18+ Months" },
                  { label: "Service Value", value: "Birr 1,400,000.00" },
                  { label: "Associated Consultants", value: "HH Consulting" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section - RIGHT Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 relative rounded-2xl shadow-xl border border-slate-100 order-2 overflow-hidden">
              <ImageWithLoader 
                src={project08} 
                alt="Haramaya University" 
                fill 
                className="object-cover" 
              />
            </div>
             </div>
             {/** Project 09 */}
             <div className="grid lg:grid-cols-12 gap-12 items-center group">
                <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
                  <ImageWithLoader 
                    src={project09} 
                    alt="ECOLE DES LUMIERES" 
                    fill
                  />
                </div>
                  <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">ECOLE DES LUMIERES SCHOOL</h3>
                      <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
                    </div>

                    <div className="space-y-4">
                      {[
                        { label: "Country", value: " Djibouti" },
                        { label: "Location", value: "Rep de Djibouti" },
                        { label: "Client", value: "Ecole des Lumieres" },
                        { label: "Staff Provided", value: "Architects, Engineers, and CAD experts" },
                        { label: "Team Size", value: "10" },
                        { label: "Duration", value: " a minimum of 2 Months till completion" },
                        {label:"Start Date",value:"June, 2020"},
                        { label: "Service Value", value: " USD 25,000" },
                        { label: "Associated Consultants", value: "HH Consulting Architects & Engineers" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            {item.label}
                          </span>
                          <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-12 items-center group">
                <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
                  <ImageWithLoader 
                    src={project10} 
                    alt="NISS BUILDING" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                  <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">NISS BUILDING</h3>
                      <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
                    </div>

                    <div className="space-y-4">
                      {[
                        { label: "Country", value: "Ethiopia" },
                        { label: "Location", value: "Addis Ababa" },
                        { label: "Client", value: "Ethiopian Airline Group" },
                        { label: "Staff Provided", value: "Architects, Resident Engineer, Mechanical Engineer, Project Engineer, Structural Engineer, Sanitary Engineer, Electrical Engineer, Electromechanical Office Engineer, Forman" },
                        { label: "Team Size", value: "54 Engineer Professionals" },
                        { label: "Duration", value: "5 Months" },
                        { label: "Service Value", value: "Bir- R:7,903,83.19" },
                        { label: "Associated Consultants", value: "HH Consulting Architects & Engineers" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            {item.label}
                          </span>
                          <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-12 items-center group">
                {/* Content Section - LEFT Side */}
                <div className="lg:col-span-5 flex flex-col order-1"> {/* order-1 on desktop */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">CITY LIGHT REAL STATE</h3>
                    <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Country", value: "Ethiopia" },
                      { label: "Location", value: "Addis Ababa, Around Jemo" },
                      { label: "Client", value: "CITY LIGHT" },
                      { label: "Staff Provided", value: "Architects and Engineers" },
                      { label: "Team Size", value: "9 Professionals" },
                      { label: "Start Date", value: "MARCH 2016" },
                      { label: "Duration", value: "Three Months for design" },
                      { label: "Service Value", value: "ONE BILLION" },
                      { label: "Associated Consultants", value: "HH Consulting" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Section - RIGHT Side */}
                <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2">
                  <ImageWithLoader 
                    src={project11} 
                    alt="CITY LIGHT REAL STATE" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-12 items-center group">
                <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
                  <ImageWithLoader 
                    src={project12} 
                    alt="GREENLAND AND TOUR HOTEL PLC." 
                    fill 
                    className="object-cover" 
                  />
                </div>

                {/* Content Section - Right Side */}
                <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">GREENLAND AND TOUR HOTEL PLC.</h3>
                    <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Country", value: "Ethiopia" },
                      { label: "Location", value: "Addis Ababa" },
                      { label: "Client", value: "Greenland Tour and Hotel PLC" },
                      { label: "Staff Provided", value: "Architects and CAD Experts" },
                      { label: "Team Size", value: "09 Professionals" },
                      { label: "Start Date", value: "July 2015" },
                      { label: "Duration", value: "One Month" },
                      { label: "Service Value", value: "Birr: 19,000,000" },
                      { label: "Associated Consultants", value: "HH Consulting Architects & Engineers" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-12 items-center group">
                <div className="lg:col-span-5 flex flex-col order-1"> {/* order-1 on desktop */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">BULE HORA UNIVERSITY INT. STADIUM</h3>
                    <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Country", value: "Ethiopia" },
                      { label: "Location", value: "Oromia, Bulehora" },
                      { label: "Client", value: "Bule Hora" },
                      { label: "Staff Provided", value: "Architects, Engineers, and CAD Experts" },
                      { label: "Team Size", value: "9 Professionals" },
                      { label: "Start Date", value: "April 2022" },
                      { label: "Duration", value: "Four Months for Design" },
                      { label: "Service Value", value: "4 Billion" },
                      { label: "Associated Consultants", value: "HH Consulting" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {item.label}
                        </span>
                        <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Section - RIGHT Side */}
                <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2"> {/* order-2 on desktop */}
                  <ImageWithLoader 
                    src={project13} 
                    alt="BULE HORA UNIVERSITY INT. STADIUM" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-12 items-center group">
              <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
                <ImageWithLoader 
                  src={project14} 
                  alt="BULE HORA UNIVERSITY" 
                  fill 
                  className="object-cover" 
                />
              </div>

              {/* Content Section - Right Side */}
              <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">BULE HORA UNIVERSITY</h3>
                  <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Country", value: "Ethiopia" },
                    { label: "Location", value: "Bulehora" },
                    { label: "Client", value: "Bule Hora University" },
                    { label: "Staff Provided", value: "Architects, Engineers, and CAD Experts" },
                    { label: "Team Size", value: "09 Professionals" },
                    { label: "Start Date", value: "April 2019" },
                    { label: "Duration", value: "One Month" },
                    { label: "Service Value", value: "7 Billion" },
                    { label: "Associated Consultants", value: "HH Consulting Architects & Engineers" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center group">
              <div className="lg:col-span-5 flex flex-col order-1"> {/* order-1 on desktop */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">BIRHANU AMARE MIXED-USE</h3>
                  <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Country", value: "Ethiopia" },
                    { label: "Location", value: "Addis Ababa" },
                    { label: "Client", value: "Birhanu Amare" },
                    { label: "Staff Provided", value: "Architects and CAD experts" },
                    { label: "Team Size", value: "9 Professionals" },
                    { label: "Start Date", value: "July 2015" },
                    { label: "Duration", value: "ONE Months" },
                    { label: "Service Value", value: "Birr: 520,020,080" },
                    { label: "Associated Consultants", value: "HH Consulting" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section - RIGHT Side */}
              <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2">
                <ImageWithLoader 
                  src={project15} 
                  alt="BIRHANU AMARE MIXED-USE" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <ImageWithLoader 
                src={project16} 
                alt="BM HOUSING CORPORATION" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Content Section - Right Side */}
            <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">BM HOUSING CORPORATION</h3>
                <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
              </div>

              <div className="space-y-4">
                {[
                  { label: "Country", value: "Ethiopia" },
                  { label: "Location", value: "Addis Abeba" },
                  { label: "Client", value: "BM Housing Corporation 3B+G+12" },
                  { label: "Staff Provided", value: "Architects and CAD experts" },
                  { label: "Team Size", value: "09 Professionals" },
                  { label: "Start Date", value: "July 2017" },
                  { label: "Duration", value: "One Month" },
                  { label: "Service Value", value: "Birr: 10,000,000" },
                  { label: "Associated Consultants", value: "HH Consulting Architects & Engineers" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-5 flex flex-col order-1"> {/* order-1 on desktop */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">HOTEL APARTMENT</h3>
                <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
              </div>
              <div className="space-y-4">
                {[
                  { label: "Country", value: "Ethiopia" },
                  { label: "Location", value: "Addis Ababa" },
                  { label: "Client", value: "Ato Asebe" },
                  { label: "Staff Provided", value: "architects, Engineers, And Cad Experts" },
                  { label: "Team Size", value: "No Staff" },
                  { label: "Duration", value: "A Minimum Of 2 Months Till Completion" },
                  { label: "Associated Consultants", value: "HH Consulting" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section - RIGHT Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2">
              <ImageWithLoader 
                src={project17} 
                alt="HOTEL APARTMENT" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <ImageWithLoader 
                src={project18} 
                alt="MERKATO MIXED-USE" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Content Section - Right Side */}
            <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">MERKATO MIXED-USE</h3>
                <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
              </div>

              <div className="space-y-4">
                {[
                  { label: "Country", value: "Ethiopia" },
                  { label: "Location", value: "Addis Abeba" },
                  { label: "Client", value: "Ato Getachew" },
                  { label: "Staff Provided", value: "architects, Engineers, And Cad Experts" },
                  { label: "Team Size", value: "No staff" },
                  { label: "Duration", value: "A Minimum Of 2 Months Till Completion" },
                  { label: "Associated Consultants", value: "HH Consulting Architects & Engineers" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-5 flex flex-col order-1"> {/* order-1 on desktop */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">HAZAL REAL STATE</h3>
                <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
              </div>
              <div className="space-y-4">
                {[
                  { label: "Country", value: "Ethiopia" },
                  { label: "Location", value: "Addis Ababa" },
                  { label: "Client", value: "Hazal Real Esteat" },
                  { label: "Staff Provided", value: "Architects and CAD experts" },
                  { label: "Team Size", value: "9 Professionals" },
                  { label: "Start Date", value: "DEC 2017" },
                  { label: "Duration", value: "ONE Months" },
                  { label: "Service Value", value: "Birr: 19,000,000" },
                  { label: "Associated Consultants", value: "HH Consulting" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section - RIGHT Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2">
              <ImageWithLoader 
                src={project19} 
                alt="HAZAL REAL STATE" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <ImageWithLoader 
                src={project20} 
                alt="BM HOUSING PLC" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Content Section - Right Side */}
            <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">BM HOUSING PLC</h3>
                <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
              </div>

              <div className="space-y-4">
                {[
                  { label: "Country", value: "Ethiopia" },
                  { label: "Location", value: "Addis Abeba" },
                  { label: "Client", value: "ASBATE PLC" },
                  { label: "Staff Provided", value: "Architects and CAD experts" },
                  { label: "Team Size", value: "09 Professionals" },
                  { label: "Start Date", value: "MARCH 2015" },
                  { label: "Duration", value: "Two Months" },
                  { label: "Service Value", value: "Birr: 189,000,000" },
                  { label: "Associated Consultants", value: "HH Consulting Architects & Engineers" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-5 flex flex-col order-1"> {/* order-1 on desktop */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">MERKATO COMMERCIAL</h3>
                <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
              </div>
              <div className="space-y-4">
                {[
                  { label: "Country", value: "Ethiopia" },
                  { label: "Location", value: "Addis Ababa" },
                  { label: "Client", value: "Ato Getachew" },
                  { label: "Staff Provided", value: "Architects, Engineers, and CAD Experts" },
                  { label: "Team Size", value: "No staff" },
                  { label: "Duration", value: "A Minimum Of 2 Months Till Completion" },
                  { label: "Associated Consultants", value: "HH Consulting" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section - RIGHT Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2">
              <ImageWithLoader 
                src={project21} 
                alt="MERKATO COMMERCIAL" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <ImageWithLoader 
                src={project22} 
                alt="MIXED COMMERCIAL" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Content Section - Right Side */}
            <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">MIXED COMMERCIAL</h3>
                <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full" />
              </div>

              <div className="space-y-4">
                {[
                  { label: "Country", value: "Ethiopia" },
                  { label: "Location", value: "Addis Ababa; addis ketema subcity" },
                  { label: "Client", value: "Akebabi Malmat P.L.C" },
                  { label: "Staff Provided", value: "Contract Administrators, Resident Engineers, and Quantity surveyors" },
                  { label: "Team Size", value: "09" },
                  { label: "Associated Consultants", value: "HH Consulting Architects & Engineers" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-700 text-right max-w-[200px]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

    </div>
          )}

          <div className="flex justify-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="group flex flex-col items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs transition-all hover:text-blue-800"
            >
              <span>{showMore ? "See Less" : "See More Projects"}</span>
              <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                {showMore ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
          </div>
            
          
    </section>
        {/** 3. Infrastructure */}
        <section>
        <Infrastructure/>
        </section>
        {/* 4.Terminal Design*/}
        <section>
          <TerminalDesign/>
        </section>
        {/**5. Road Construction */}
        <section>
          <Road/>
        </section>
        {/**6.Irrigation Work */}
        <section>
          <Irrigation/>
        </section>
        {/**7. Bride design */}
        <section>
          <Bridge/>
        </section>
        {/** Others */}
        <section>
          <Others/>
        </section>
          
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
        "We create with heart, and build with mind"
      </p>
      
      {/* Optional: Developer Credit / Copyright */}
      <div className="mt-16 pt-8 border-t border-white/10 w-full max-w-4xl text-xs text-slate-500 uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} HH Consulting. All Rights Reserved.
      </div>
    </footer>
    </main>
  );
}

function ApproachCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-8 border border-gray-100 hover:border-blue-600 transition-colors cursor-default">
      <div className="text-blue-600 mb-6">{icon}</div>
      <h4 className="font-bold text-sm uppercase tracking-widest mb-2">{title}</h4>
      <p className="text-gray-400 text-xs">{desc}</p>
    </div>
  );
}