"use client";
import { Diamond, Target, Lightbulb, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Mission() {
  const cards = [
    {
      title: "Mission",
      icon: <Target size={32} strokeWidth={1.5} />,
      content: "HH Consulting Architects and Engineers PLC is driven by a passion for automated project management solutions with architectural and civil engineering services.",
      dark: false
    },
    {
      title: "Vision",
      icon: <Lightbulb size={32} strokeWidth={1.5} />,
      content: "We strive to achieve innovative project management and quality control solutions for the local construction industry by creating partnership and creative working environments.",
      dark: false
    },
    {
      title: "Value",
      icon: <Diamond size={32} strokeWidth={1.5} />,
      content: [
        "Appropriate usage of time",
        "Developing behavioral qualities",
        "Serving customers in kind"
      ],
      dark: true
    }
  ];

  return (
    <section id="philosophy" className="w-full py-24 lg:py-7 bg-[#FAFBFC] font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* --- Section Header --- */}
        <header className="relative mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#E5A343]" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#E5A343] antialiased">
              Company Philosophy
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-[800] text-slate-900 tracking-tight leading-[0.9] mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            OUR <span className="text-[#E5A343]">CORES.</span>
          </h2>
          </motion.div>
        </header>

        {/* --- The Technical Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`group relative p-12 lg:p-16 flex flex-col justify-between transition-all duration-700 
                ${item.dark ? 'bg-[#0F172A] text-white' : 'hover:bg-slate-50 text-slate-900 border-r border-b border-slate-100'}`}
            >
              <div>
                <div className={`mb-12 p-4 w-fit rounded-2xl transition-transform duration-500 group-hover:scale-110 
                  ${item.dark ? 'bg-white/5 text-[#E5A343]' : 'bg-[#E5A343]/10 text-[#E5A343]'}`}>
                  {item.icon}
                </div>
                
                <h3 className="text-3xl font-bold tracking-tighter mb-6 uppercase">
                  {item.title}
                </h3>

                {Array.isArray(item.content) ? (
                  <ul className="space-y-4">
                    {item.content.map((val, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#E5A343]" />
                        <span className="text-slate-400 text-sm font-medium tracking-wide">
                          {val}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={`text-[15px] lg:text-[16px] leading-[1.8] font-normal 
                    ${item.dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.content}
                  </p>
                )}
              </div>

              {/* Subtle Bottom Accent */}
              <div className="mt-12 flex justify-between items-end">
                <span className={`text-[10px] font-black tracking-widest uppercase opacity-20 
                  ${item.dark ? 'text-white' : 'text-slate-900'}`}>
                  0{index + 1}
                </span>
                {!item.dark && (
                  <ArrowUpRight className="text-slate-200 group-hover:text-[#E5A343] transition-colors duration-300" size={24} />
                )}
              </div>
              
              {item.dark && (
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                   <Diamond size={120} strokeWidth={0.5} />
                </div>
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}