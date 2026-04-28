'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = [
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777369260/ber01_owlno7.jpg', 
    title: "Principal Design & Planning Studio", 
    link: "/building-design/",
    location: "Adama, Ethiopia", 
    category: "Healthcare Infrastructure", 
    stat: "Public Health" 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777369273/ber03_l9euvo.jpg', 
    title: "Architectural Innovation Laboratory", 
    link: "/building-design",
    location: "Bishoftu, Ethiopia", 
    category: "Resilient Architectural Design", 
    stat: "Hospitality" 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777369246/ber02_ztvx7v.jpg', 
    title: "Sustainable Engineering Hub", 
    link: "/building-design",
    location: "Haramaya, Ethiopia", 
    category: "Sustainability & Function", 
    stat: "Institutional" 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777369242/ber04_i5etl7.jpg', 
    title: "Integrated Project Management Center", 
    link: "/building-design",
    location: "Haramaya, Ethiopia", 
    category: "Educational Landmark Development", 
    stat: "Education" 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777371366/construction01_evsrsy.png', 
    title: "Digital Construction & Simulation Suite", 
    link: "/building-design",
    location: "Addis Ababa, Ethiopia", 
    category: "Advanced Structural Modeling", 
    stat: "Urban Development" 
  }
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
        if (prev >= 99.9) {
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
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
          }`}
        >
          <Image 
            src={slide.src} 
            alt={slide.title} 
            fill 
            priority={index === 0} 
            className="object-cover brightness-[0.5] contrast-[1.1]" 
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

          <h1 className="text-4xl md:text-7xl font-black tracking-[-0.05em] leading-[0.85] mb-10 uppercase animate-reveal-main">
            {slides[currentSlide].title}
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in-delayed">
            <Link href={slides[currentSlide].link}>
              <button className="group flex items-center gap-4 px-10 py-5 bg-[#E5A343] text-slate-950 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-300">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </Link>

            <div className="flex flex-col border-l border-white/20 pl-8">
                <span className="text-[10px] uppercase tracking-widest text-[#E5A343] mb-1 opacity-70">Focus Area</span>
                <p className="text-slate-300 font-medium tracking-widest text-xs uppercase">
                  {slides[currentSlide].category}
                </p>
            </div>
          </div>
        </div>

        {/* SIDE INFO PANEL */}
        <div className="absolute right-12 bottom-32 hidden lg:block w-72 border-l border-[#E5A343]/30 pl-8">
          <div className="mb-8">
             <p className="text-[10px] uppercase tracking-widest text-[#E5A343] mb-2 opacity-70">Project Location</p>
             <p className="text-xl font-light tracking-tight">{slides[currentSlide].location}</p>
          </div>
        </div>
      </div>

      {/* 3. MINIMALIST NAVIGATION (Replacing the grid) */}
      <div className="absolute bottom-12 left-0 w-full z-30 flex justify-center items-center gap-6">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => handleManualClick(i)}
            className="group relative flex items-center gap-3 transition-all"
          >
            {/* Number Indicator */}
            <span className={`text-[10px] font-bold tracking-tighter transition-colors duration-500 ${
              i === currentSlide ? "text-[#E5A343]" : "text-white/30 group-hover:text-white/60"
            }`}>
              0{i + 1}
            </span>
            
            {/* Progress Bar (Minimal Line) */}
            <div className="relative w-12 h-[2px] bg-white/10 overflow-hidden">
              {i === currentSlide && (
                <div 
                  className="absolute top-0 left-0 h-full bg-[#E5A343] transition-none"
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
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
        .animate-reveal-main { animation: reveal-main 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-sub { animation: reveal-sub 0.8s ease-out forwards; }
        .animate-fade-in-delayed { opacity: 0; animation: fade-in 1s ease-out 0.8s forwards; }
      `}</style>
    </section>
  );
}