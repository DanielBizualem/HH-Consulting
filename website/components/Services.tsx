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
      <section className="py-24 bg-white font-sans antialiased">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="mb-16 border-l-4 border-[#E5A343] pl-6">
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#E5A343] block mb-2">
              Our Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              OUR SERVICES
            </h2>
          </div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 ease-out"
              >
                {/* Subtle Numbering */}
                <span className="text-4xl font-black text-slate-100 group-hover:text-[#E5A343]/10 transition-colors duration-500 absolute top-4 right-6">
                  0{index + 1}
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