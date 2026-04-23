import React, { useEffect, useRef, useState } from 'react';

const FeasibilitySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // This makes the animation repeat on every scroll
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1, // Trigger earlier
        rootMargin: "-50px 0px" // Slight margin so it doesn't flicker at the very edge
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stages = [
    "Organizing high-level events and drafting comprehensive environmental policies",
    "Liaising with review board stakeholders to facilitate formal environmental assessments",
    "Strategic communication with stakeholders and the public regarding EIA processes",
    "Technical data analysis and professional report preparation",
    "Establishing detailed budgets and strategic work plans for project assessments",
    "Drafting policy and position papers on environmental impact assessment methodologies"
  ];

  return (
    <section 
      ref={sectionRef}
      id="feasibility_study" 
      className="relative isolate w-full py-24 lg:py-18 bg-white border-t border-gray-100 font-sans antialiased overflow-hidden"
    >
      <style>{`
        @keyframes slow-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        /* Reversible Scroll Animations */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        .scroll-reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-slow-rotate {
          animation: slow-rotate 60s linear infinite;
        }

        /* Title Mask Animation */
        .title-mask {
          overflow: hidden;
          display: block;
        }
        
        .title-text {
          display: block;
          transform: translateY(110%);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-reveal-visible .title-text {
          transform: translateY(0);
        }
      `}</style>

      {/* --- BACKGROUND GLOBE --- */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] pointer-events-none select-none -z-10 opacity-80 animate-slow-rotate">
        <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern15" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="0.75" fill="#475569" fillOpacity="0.5" />
            </pattern>
            <radialGradient id="globeFadeFinal" cx="50%" cy="50%" r="50%">
              <stop offset="30%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="globeMaskFinal">
              <circle cx="400" cy="400" r="380" fill="url(#globeFadeFinal)" />
            </mask>
          </defs>
          <circle cx="400" cy="400" r="380" fill="url(#dotPattern15)" mask="url(#globeMaskFinal)" />
          <circle cx="400" cy="400" r="385" fill="none" stroke="#E5A343" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="6 10" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* --- HEADER --- */}
        <div className={`relative mb-16 lg:mb-24 scroll-reveal ${isVisible ? 'scroll-reveal-visible' : ''}`}>
          <span className="absolute -top-10 -left-10 text-[120px] font-black text-slate-50 select-none -z-10">01</span>
          <div className="relative z-10">
            <span className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.4em] text-[#E5A343] block mb-6">Technical Excellence</span>
            <h2 className="text-5xl lg:text-7xl font-[800] text-slate-900 tracking-[-0.04em] leading-[1.05] mb-4 title-mask">
              <span className="title-text">Feasibility <span className="text-[#E5A343]">Study.</span></span>
            </h2>
          </div>
        </div>

        {/* --- INTRO --- */}
        <div 
          className={`max-w-3xl mb-20 scroll-reveal ${isVisible ? 'scroll-reveal-visible' : ''}`}
          style={{ transitionDelay: '150ms' }}
        >
          <p className="text-xl lg:text-[24px] text-slate-500 font-light border-l-4 border-[#E5A343]/20 pl-8 italic">
            Our resident engineer oversees critical environmental operations, ensuring compliance and strategic alignment across all project phases.
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {stages.map((service, index) => (
            <div 
              key={index} 
              className={`group relative flex flex-col pt-8 scroll-reveal ${isVisible ? 'scroll-reveal-visible' : ''}`}
              // When scrolling UP, the delay is still applied, which looks very smooth
              style={{ transitionDelay: isVisible ? `${200 + (index * 100)}ms` : '0ms' }}
            >
              <span className="text-6xl font-black text-slate-50 group-hover:text-slate-100 transition-colors absolute -top-4 -left-2 -z-10">
                0{index + 1}
              </span>
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-[#E5A343] uppercase tracking-[0.3em] mb-4 block">Process Stage</span>
                <p className="text-slate-700 text-[16px] lg:text-[18px] leading-[1.7] font-medium group-hover:text-slate-900 transition-colors">
                  {service}
                </p>
                <div className="mt-6 h-[1px] w-full bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#E5A343] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeasibilitySection;