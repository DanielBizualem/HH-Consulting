import React from 'react';
import Image from 'next/image';
import { 
  Building2, Map, HardHat, ClipboardCheck, 
  MapPin, Leaf, Construction, Truck, Droplets, CheckCircle2 
} from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Building Design", desc: "Architectural, Structural, MEP", icon: <Building2 size={24} /> },
    { title: "Urban Design & Planning", desc: "Urban design & planning works", icon: <Map size={24} /> },
    { title: "Infrastructure", desc: "General civil infrastructure", icon: <HardHat size={24} /> },
    { title: "Terminal Design", desc: "Transport hub specifications", icon: <Truck size={24} /> },
    { title: "Road Works", desc: "Highways & local roads", icon: <Construction size={24} /> },
    { title: "Irrigation", desc: "Water management systems", icon: <Droplets size={24} /> },
    { title: "Feasibility Study", desc: "Planning & analysis", icon: <ClipboardCheck size={24} /> },
    { title: "Topography Survey", desc: "Accurate land & site data", icon: <MapPin size={24} /> },
    { title: "Landscape Design", desc: "Outdoor & environmental", icon: <Leaf size={24} /> },
    { title: "Contract Admin", desc: "Quality Control & Supervision", icon: <CheckCircle2 size={24} /> },
  ];

  return (
    <section className="relative py-12 md:py-20 bg-[#F1F3F6] font-sans antialiased overflow-hidden" id='service'>
      
      {/* CONSTRUCTION BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          // You can replace this URL with your specific construction site image
          src="https://res.cloudinary.com/djxfy60tt/image/upload/v1777371366/construction01_evsrsy.png" 
          alt="Construction Background"
          fill
          className="object-cover opacity-5 md:opacity-[0.08]"
          priority
        />
        {/* Soft Gradient to blend the background edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F1F3F6] via-transparent to-[#F1F3F6]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-18">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                OUR <span className="text-[#E5A343]">SERVICE.</span>
              </h2>
          <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
            Comprehensive Engineering & Design Solutions
          </p>
        </div>

        {/* Mobile: 2 Columns | Desktop: 3 Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((item, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center text-center p-5 md:p-8 bg-white/80 backdrop-blur-md rounded-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-3 md:mb-4 text-[#C59D5F] group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <div className="space-y-1">
                <h3 className="text-[12px] md:text-lg font-black text-[#1A1A1A] leading-tight">
                  {item.title}
                </h3>
                <p className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-tight leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}