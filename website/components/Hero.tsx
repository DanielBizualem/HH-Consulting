'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = [
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777369260/ber01_owlno7.jpg', 
    title: "Designing the Future of Infrastructure & Cites", 
    link: "/building-design",
    location: "Adama, Ethiopia", 
    category: "Healthcare Infrastructure", 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777369273/ber03_l9euvo.jpg', 
    title: "Architectural Innovation Laboratory", 
    link: "/building-design",
    location: "Bishoftu, Ethiopia", 
    category: "Resilient Architectural Design", 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777369246/ber02_ztvx7v.jpg', 
    title: "Sustainable Engineering Hub", 
    link: "/building-design",
    location: "Haramaya, Ethiopia", 
    category: "Sustainability & Function", 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777369242/ber04_i5etl7.jpg', 
    title: "Integrated Project Management Center", 
    link: "/building-design",
    location: "Haramaya, Ethiopia", 
    category: "Educational Landmark Development", 
  },
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777371366/construction01_evsrsy.png', 
    title: "Digital Construction & Simulation Suite", 
    link: "/building-design",
    location: "Addis Ababa, Ethiopia", 
    category: "Advanced Structural Modeling", 
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
    <section className="relative w-full h-screen overflow-hidden bg-white font-sans text-slate-900">
      
      {/* 1. BACKGROUND LAYER (100% Crisp - No Overlays) */}
      {slides.map((slide, index) => (
  <div 
    key={index} 
    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
      index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
    }`}
  >
    <Image 
      src={slide.src} 
      alt={slide.title} 
      fill 
      priority={true} 
      quality={100} // Force maximum quality
      unoptimized={true} // Prevents Next.js from resizing/blurring the source
      className="object-cover" 
    />
  </div>
))}

      {/* 2. CONTENT LAYER */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div key={currentSlide} className="max-w-4xl">
          <div className="overflow-hidden mb-4">
            <span 
              className="block text-[11px] font-black uppercase tracking-[0.5em] text-[#B8860B] animate-reveal-sub"
              style={{ textShadow: '0 1px 4px rgba(255,255,255,0.8)' }}
            >
              Engineering Excellence
            </span>
          </div>

          <h1 
            className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] mb-10 uppercase animate-reveal-main text-slate-900"
            style={{ textShadow: '0 2px 15px rgba(255,255,255,0.9)' }}
          >
            {slides[currentSlide].title}
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in-delayed">
            <Link href={slides[currentSlide].link}>
              <button className="group flex items-center gap-4 px-10 py-5 bg-[#B8860B] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-900 transition-all duration-300 shadow-2xl">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </Link>

            <div className="flex flex-col border-l-2 border-[#B8860B] pl-8">
                <span className="text-[10px] uppercase tracking-widest text-[#B8860B] mb-1 font-bold">Focus Area</span>
                <p className="text-slate-800 font-bold tracking-wide text-sm bg-white/40 backdrop-blur-sm px-1">
                  {slides[currentSlide].category}
                </p>
            </div>
          </div>
        </div>

        {/* SIDE INFO PANEL */}
        <div className="absolute right-12 bottom-32 hidden lg:block w-72 border-l-2 border-[#B8860B] pl-8">
          <div className="mb-8">
              <p className="text-[10px] uppercase tracking-widest text-[#B8860B] mb-2 font-bold">Project Location</p>
              <p className="text-xl font-bold tracking-tight text-slate-900 bg-white/30 backdrop-blur-[2px]">{slides[currentSlide].location}</p>
          </div>
        </div>
      </div>

      {/* 3. RESPONSIVE NAVIGATION */}
      <div className="absolute bottom-10 left-0 w-full z-30 flex justify-center items-center gap-2 sm:gap-4 md:gap-6 px-4">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => handleManualClick(i)}
            className="group relative flex items-center gap-2 transition-all"
          >
            <span className={`text-[10px] font-black tracking-tighter transition-colors duration-500 ${
              i === currentSlide ? "text-[#B8860B]" : "text-slate-800"
            }`}>
              0{i + 1}
            </span>
            
            <div className="relative w-8 sm:w-12 md:w-20 h-[3px] bg-slate-900/10 overflow-hidden rounded-full">
              {i === currentSlide && (
                <div 
                  className="absolute top-0 left-0 h-full bg-[#B8860B] transition-none"
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes reveal-main {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes reveal-sub {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-reveal-main { animation: reveal-main 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-reveal-sub { animation: reveal-sub 0.6s ease-out forwards; }
        .animate-fade-in-delayed { opacity: 0; animation: fade-in 1s ease-out 0.4s forwards; }
      `}</style>
    </section>
  );
}