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
    <section className="relative py-24 font-sans antialiased overflow-hidden bg-slate-50">
      
      {/* PROFESSIONAL BACKGROUND LAYER */}
      {/* CHANGED: added 'hidden md:block' to hide on small screens and show on medium+ */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="https://res.cloudinary.com/djxfy60tt/image/upload/v1776890922/globe_u2i4yv.png" 
          alt="Background Pattern"
          fill
          className="object-cover opacity-15"
          priority
        />
        
        {/* Architectural Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#E5A343] pl-6">
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#E5A343] block mb-2">
            Our Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            OUR <span className="text-[#E5A343]">SERVICES.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-md hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 ease-out"
            >
              {/* Subtle Numbering */}
              <span className="text-4xl font-black text-slate-100 group-hover:text-[#E5A343]/10 transition-colors duration-500 absolute top-4 right-6">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>

              <div className="relative z-10 mt-4">
                <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-slate-900">
                  {service}
                </h3>
                
                {/* Decorative Accent Line */}
                <div className="mt-4 h-[2px] w-8 bg-slate-200 group-hover:w-16 group-hover:bg-[#E5A343] transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}