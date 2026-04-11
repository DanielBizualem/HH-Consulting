import { Maximize2, Layers, Compass, Ruler } from 'lucide-react';
import Image from 'next/image';
import project01 from '../../public/project01.png'
import table01 from '../../public/table01.png'
import project02 from '../../public/project02.png'
import table02 from '../../public/table02.png'
import project03 from '../../public/project03.png'
import table03 from '../../public/table03.png'
import project04 from '../../public/project04.png'
import table04 from '../../public/table04.png'
import project05 from '../../public/project05.png'
import table05 from '../../public/table05.png'
import project06 from '../../public/project06.png'
import table06 from '../../public/table06.png'
import project07 from '../../public/project07.png'
import table07 from '../../public/table07.png'
import project08 from '../../public/project08.png'
import project10 from '../../public/project10.png'
import project11 from '../../public/project11.png'
import project12 from '../../public/project12.png'
import project13 from '../../public/project13.png'
import project14 from '../../public/project14.png'
import project15 from '../../public/project15.png'
import project16 from '../../public/project16.png'
import project17 from '../../public/project17.png'
import project18 from '../../public/project18.png'
import project19 from '../../public/project19.png'
import project20 from '../../public/project20.png'
import project21 from '../../public/project21.png'
import project22 from '../../public/project22.png'


export default function BuildingDesignPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
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
            <div className="lg:col-span-7 aspect-[16/10] bg-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs uppercase tracking-widest">
                <Image src={project01} alt="Project 01" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <Image src={table01} alt="table 01" className="w-full h-auto mt-4 mb-6 object-cover" />
            </div>
          </div>

          {/* Project 02 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group flex-row-reverse">
            <div className="lg:col-span-5 text-right flex flex-col items-end">
              <Image src={table02} alt="table 02" className="w-full h-auto mt-4 mb-6 object-cover" />
            </div>
            <div className="lg:col-span-7 aspect-[16/10] bg-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs uppercase tracking-widest">
                <Image src={project02} alt="Project 02" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

          {/* Project 03 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-7 aspect-[16/10] bg-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs uppercase tracking-widest">
                <Image src={project03} alt="Project 03" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <Image src={table03} alt="table 03" className="w-full h-auto mt-4 mb-6 object-cover" />
            </div>
          </div>

          {/* Project 04 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group flex-row-reverse">
            <div className="lg:col-span-5 text-right flex flex-col items-end">
              <Image src={table04} alt="table 04" className="w-full h-auto mt-4 mb-6 object-cover" />
            </div>
            <div className="lg:col-span-7 aspect-[16/10] bg-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs uppercase tracking-widest">
                <Image src={project04} alt="Project 04" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

          {/* Project 05 */}
          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-7 aspect-[16/10] bg-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs uppercase tracking-widest">
                <Image src={project05} alt="Project 05" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <Image src={table05} alt="table 05" className="w-full h-auto mt-4 mb-6 object-cover" />
            </div>
          </div>

          {/* Project 06 */}
        <div className="grid lg:grid-cols-12 gap-12 items-center group flex-row-reverse">
            <div className="lg:col-span-5 text-right flex flex-col items-end">
              <Image src={table06} alt="table 06" className="w-full h-auto mt-4 mb-6 object-cover" />
            </div>
            <div className="lg:col-span-7 aspect-[16/10] bg-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs uppercase tracking-widest">
                <Image src={project06} alt="Project 06" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            <div className="lg:col-span-7 aspect-[16/10] bg-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs uppercase tracking-widest">
                <Image src={project07} alt="Project 07" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <Image src={table07} alt="table 07" className="w-full h-auto mt-4 mb-6 object-cover" />
            </div>
          </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center group">
              {/* Content Section - LEFT Side */}
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
              <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2"> {/* order-2 on desktop */}
                <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                  <Image 
                    src={project08} // Ensure 'haramaya' is imported or defined
                    alt="Haramaya University Project" 
                    fill
                    
                  />
                </div>
              </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            {/* Image Section - Left Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                <Image 
                  src={project10} // Using the file name you provided
                  alt="NISS
                  BUILDING" 
                  fill
                  className="object-cover" 
                />
              </div>
            </div>

            {/* Content Section - Right Side */}
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
              <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2"> {/* order-2 on desktop */}
                <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                  <Image 
                    src={project11} // Ensure 'haramaya' is imported or defined
                    alt="CITY LIGHT
                    REAL STATE" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            {/* Image Section - Left Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                <Image 
                  src={project12} // Using the file name you provided
                  alt="GREENLAND AND TOUR  
                  HOTEL PLC." 
                  fill
                  className="object-cover" 
                />
              </div>
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
              {/* Content Section - LEFT Side */}
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
                <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                  <Image 
                    src={project13} // Ensure 'haramaya' is imported or defined
                    alt="BULE HORA UNIVERSITY
                    INT. STADIUM" 
                    fill
                    
                  />
                </div>
              </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            {/* Image Section - Left Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                <Image 
                  src={project14} // Using the file name you provided
                  alt="BULE HORA 
                  UNIVERSITY" 
                  fill
                  
                />
              </div>
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
              {/* Content Section - LEFT Side */}
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
              <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2"> {/* order-2 on desktop */}
                <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                  <Image 
                    src={project15} // Ensure 'haramaya' is imported or defined
                    alt="BIRHANU AMARE
                    MIXED-USE" 
                    fill
                    
                  />
                </div>
              </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            {/* Image Section - Left Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                <Image 
                  src={project16} // Using the file name you provided
                  alt="BM HOUSING
                  CORPORATION" 
                  fill
                 
                />
              </div>
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
              {/* Content Section - LEFT Side */}
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
              <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2"> {/* order-2 on desktop */}
                <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                  <Image 
                    src={project17} // Ensure 'haramaya' is imported or defined
                    alt="OTEL
                    APARTMENT" 
                    fill
                    
                  />
                </div>
              </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            {/* Image Section - Left Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                <Image 
                  src={project18} // Using the file name you provided
                  alt="MERKATO
                  MIXED-USE" 
                  fill
                  
                />
              </div>
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
              {/* Content Section - LEFT Side */}
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
              <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2"> {/* order-2 on desktop */}
                <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                  <Image 
                    src={project19} // Ensure 'haramaya' is imported or defined
                    alt="HAZAL
                    REAL STATE" 
                    fill
                    
                  />
                </div>
              </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            {/* Image Section - Left Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                <Image 
                  src={project20} // Using the file name you provided
                  alt="BM HOUSING
                  PLC" 
                  fill
                 
                />
              </div>
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
              {/* Content Section - LEFT Side */}
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
              <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2"> {/* order-2 on desktop */}
                <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                  <Image 
                    src={project21} // Ensure 'haramaya' is imported or defined
                    alt="MERKATO
                    COMMERCIAL" 
                    fill
                    
                  />
                </div>
              </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center group">
            {/* Image Section - Left Side */}
            <div className="lg:col-span-7 aspect-[16/10] bg-slate-100 overflow-hidden rounded-2xl shadow-xl border border-slate-100 relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105">
                <Image 
                  src={project22} // Using the file name you provided
                  alt="MIXED
                  COMMERCIAL" 
                  fill
                />
              </div>
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

        </section>

        

          

        {/* 3. DESIGN SERVICES LIST */}
        <section className="mt-40 bg-slate-900 text-white p-12 lg:p-20">
          <h2 className="text-2xl font-light mb-12">Building Design Specialized Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ul className="space-y-4 text-slate-400 text-sm italic">
              <li>— Conceptual Design</li>
              <li>— 3D Rendering & Visualization</li>
              <li>— Schematic Design</li>
            </ul>
            <ul className="space-y-4 text-slate-400 text-sm italic">
              <li>— Construction Documentation</li>
              <li>— Building Information Modeling (BIM)</li>
              <li>— Interior Architecture</li>
            </ul>
            <ul className="space-y-4 text-slate-400 text-sm italic">
              <li>— Renovation & Retrofitting</li>
              <li>— Landscape Integration</li>
              <li>— Structural Systems Audit</li>
            </ul>
          </div>
        </section>

      </div>
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