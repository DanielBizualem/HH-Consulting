import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = [
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776067690/01_b2dwqc.png', 
    title: "Dr. Ali Birra Comprehensive Hospital", 
    link: "/building-design/",
    location: "Adama, Ethiopia", 
    category: "Healthcare Infrastructure", 
    stat: "Public Health" 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776068337/02_c1hfzw.png', 
    title: "Dr. Ali Birra Guest House", 
    link: "/building-design",
    location: "Bishoftu, Ethiopia", 
    category: "Resilient Architectural Design", 
    stat: "Hospitality" 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065501/03_s2lall.png', 
    title: "Modern Urban Living", 
    link: "/building-design",
    location: "Urban Center", 
    category: "Structural Excellence", 
    stat: "Residential" 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065507/04_qtg4ka.png', 
    title: "Haramaya Guest House", 
    link: "/building-design",
    location: "Haramaya, Ethiopia", 
    category: "Sustainability & Function", 
    stat: "Institutional" 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776065527/05_nyk5tt.png', 
    title: "Haramaya University Project", 
    link: "/building-design",
    location: "Haramaya, Ethiopia", 
    category: "Educational Landmark Development", 
    stat: "Education" 
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideDuration = 6000; 
    const intervalTime = 50;    
    const increment = (intervalTime / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleManualClick = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-950 font-sans text-white">
      
      {/* 1. BACKGROUND LAYER */}
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
          }`}
        >
          <Image 
            src={slide.src} 
            alt={slide.title} 
            fill 
            priority 
            className="object-cover brightness-[0.6] contrast-[1.1]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* 2. CONTENT LAYER */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div key={currentSlide} className="max-w-5xl">
          <div className="overflow-hidden mb-6">
            <span className="block text-[11px] font-black uppercase tracking-[0.6em] text-[#E5A343] animate-reveal-sub">
              Worldwide Consulting
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-[0.85] mb-10 uppercase animate-reveal-main">
            {slides[currentSlide].title}
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in-delayed">
            <Link href={slides[currentSlide].link}>
              <button className="group flex items-center gap-4 px-3 md:px-12 py-5 bg-[#E5A343] text-slate-950 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all duration-300">
                Explore Projects
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2.5} 
                  stroke="currentColor" 
                  className="w-4 h-4 transition-transform group-hover:translate-x-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </Link>

            <div className="flex flex-col border-l border-white/20 pl-8">
               <span className="text-[10px] uppercase tracking-widest text-[#E5A343] mb-1">Current Sector</span>
               <p className="text-slate-300 font-medium tracking-widest text-xs uppercase">
                 {slides[currentSlide].category}
               </p>
            </div>
          </div>
        </div>

        {/* 3. SIDE INFO PANEL */}
        <div className="absolute right-12 bottom-32 hidden lg:block w-72 border-l border-[#E5A343]/30 pl-8">
          <div className="mb-8">
             <p className="text-[10px] uppercase tracking-widest text-[#E5A343] mb-2 opacity-70">Location</p>
             <p className="text-xl font-light tracking-tight">{slides[currentSlide].location}</p>
          </div>
          <div>
             <p className="text-[10px] uppercase tracking-widest text-[#E5A343] mb-2 opacity-70">Infrastructure Scale</p>
             <p className="text-xl font-light tracking-tight">{slides[currentSlide].stat}</p>
          </div>
        </div>
      </div>

      {/* --- ADDED: PROFESSIONAL SCROLL INDICATOR --- */}
      <div className="absolute bottom-[110px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 animate-fade-in-delayed hidden md:flex">
        <div className="w-[20px] h-[32px] border border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-[#E5A343] rounded-full animate-scroll-dot" />
        </div>
        <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 font-bold">Scroll</span>
      </div>

      {/* 4. DASHBOARD NAVIGATION */}
      <div className="absolute bottom-0 left-0 w-full grid grid-cols-5 h-20 md:h-24 bg-slate-950/40 backdrop-blur-2xl z-30">
        {slides.map((slide, i) => (
          <button 
            key={i} 
            onClick={() => handleManualClick(i)}
            className={`relative flex flex-col items-center justify-center border-r border-white/10 transition-all ${
              i === currentSlide ? "bg-white/5" : "opacity-40 hover:opacity-100"
            }`}
          >
            <span className={`text-[10px] font-bold tracking-widest mb-1 ${i === currentSlide ? "text-[#E5A343]" : "text-white"}`}>
              0{i + 1}
            </span>
            <span className="hidden md:block text-[8px] uppercase tracking-tighter text-white/40 truncate px-4">
              {slide.title.split(' ')[0]}...
            </span>
            {i === currentSlide && (
              <div 
                className="absolute bottom-0 left-0 h-[4px] bg-[#E5A343] shadow-[0_0_20px_rgba(229,163,67,0.5)] transition-none" 
                style={{ width: `${progress}%` }} 
              />
            )}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes reveal-main {
          from { opacity: 0; transform: translateY(80px) skewY(2deg); }
          to { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        @keyframes reveal-sub {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scroll-dot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-reveal-main { animation: reveal-main 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-sub { animation: reveal-sub 0.8s ease-out forwards; }
        .animate-fade-in-delayed { opacity: 0; animation: fade-in 1s ease-out 0.8s forwards; }
        .animate-scroll-dot { animation: scroll-dot 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}