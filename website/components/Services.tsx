import Image from 'next/image';

export default function Services() {
  const services = [
    "Building Design",
    "Urban Design and Planning",
    "Infrastructure",
    "Terminal Design",
    "Road Works",
    "Irrigation",
    "Feasibility Study",
    "Topography Survey",
    "Landscape Design and Specification",
    "Contract Administration and Supervision(Quality Control)"
  ];

  return (
    <section className="relative py-15 md:py-18 font-sans antialiased overflow-hidden bg-slate-50">
      
      {/* PROFESSIONAL BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/djxfy60tt/image/upload/v1776890922/globe_u2i4yv.png" 
          alt="Background Pattern"
          fill
          className="object-cover opacity-10 md:opacity-15"
          priority
        />
        
        {/* Architectural Grid Overlay - Responsive density */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
        
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="mb-12 md:mb-16 border-l-4 border-[#E5A343] pl-5 md:pl-6">
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-[#E5A343] block mb-2">
            Our Excellence
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            OUR <span className="text-[#E5A343]">SERVICES.</span>
          </h2>
        </div>

        {/* Services Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-6 md:p-8 rounded-xl md:rounded-2xl border border-slate-200/60 bg-white/90 backdrop-blur-md hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 ease-out"
            >
              {/* Subtle Numbering: Smaller on mobile */}
              <span className="text-3xl md:text-4xl font-black text-slate-50 group-hover:text-[#E5A343]/10 transition-colors duration-500 absolute top-4 right-6 select-none">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>

              <div className="relative z-10 mt-2 md:mt-4">
                <h3 className="text-base md:text-lg font-bold text-slate-800 leading-snug group-hover:text-slate-900">
                  {service}
                </h3>
                
                {/* Decorative Accent Line */}
                <div className="mt-4 h-[2px] w-6 bg-slate-200 group-hover:w-12 group-hover:bg-[#E5A343] transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}