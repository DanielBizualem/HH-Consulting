'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = [
  { 
    src: 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777369260/ber01_owlno7.jpg', 
    title: "Designing the Future of Infrastructure & Cities", 
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
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-slate-900 font-sans text-white">
      
      {/* 1. BACKGROUND LAYER WITH GRADIENT OVERLAY */}
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <Image 
            src={slide.src} 
            alt={slide.title} 
            fill 
            priority={index === 0} 
            quality={100}
            className="object-cover" 
          />
          {/* Professional Overlay: Darker on mobile, subtle gradient on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:from-black/60 lg:via-transparent lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* 2. CONTENT LAYER */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div key={currentSlide} className="max-w-3xl">
          <div className="overflow-hidden mb-4">
            <span className="block text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-[#C59D5F] animate-reveal-sub">
              Engineering Excellence
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8 uppercase animate-reveal-main">
            {slides[currentSlide].title.split(' ').map((word, i) => (
               <span key={i} className={i > 2 ? "text-[#C59D5F]" : "text-white"}>{word} </span>
            ))}
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 animate-fade-in-delayed">
            <Link href={slides[currentSlide].link}>
              <button className="group relative overflow-hidden px-8 py-4 bg-[#C59D5F] text-white font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black">
                <span className="relative z-10 flex items-center gap-3">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
            </Link>

            <div className="flex flex-col border-l border-white/30 pl-6">
                <span className="text-[9px] uppercase tracking-widest text-white/50 mb-1 font-bold">Focus Area</span>
                <p className="text-white font-medium tracking-wide text-sm">
                  {slides[currentSlide].category}
                </p>
            </div>
          </div>
        </div>

        {/* SIDE INFO PANEL - Responsive adjustment */}
        <div className="absolute right-12 bottom-32 hidden xl:block w-72 border-l border-[#C59D5F] pl-8">
          <div className="mb-4">
              <p className="text-[10px] uppercase tracking-widest text-[#C59D5F] mb-2 font-bold">Current Location</p>
              <p className="text-xl font-bold tracking-tight text-white">{slides[currentSlide].location}</p>
          </div>
        </div>
      </div>

      {/* 3. PROGRESS NAVIGATION - Fixed for all screens */}
      <div className="absolute bottom-8 left-0 w-full z-30 flex justify-center items-center gap-3 sm:gap-6 px-6">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => handleManualClick(i)}
            className="group flex items-center gap-2 outline-none"
          >
            <span className={`text-[10px] font-bold transition-colors duration-500 ${
              i === currentSlide ? "text-[#C59D5F]" : "text-white/40"
            }`}>
              0{i + 1}
            </span>
            
            <div className="relative w-10 sm:w-16 md:w-24 h-[2px] bg-white/20 overflow-hidden">
              {i === currentSlide && (
                <div 
                  className="absolute top-0 left-0 h-full bg-[#C59D5F]"
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes reveal-main {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes reveal-sub {
          from { opacity: 0; letter-spacing: 1em; transform: translateY(10px); }
          to { opacity: 1; letter-spacing: 0.4em; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-reveal-main { animation: reveal-main 1s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animate-reveal-sub { animation: reveal-sub 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animate-fade-in-delayed { opacity: 0; animation: fade-in 1.5s ease-out 0.6s forwards; }
      `}</style>
    </section>
  );
}