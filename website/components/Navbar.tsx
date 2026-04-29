"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Home, Layout, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
import Image from 'next/image';

const logo = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1777490867/Company_logo01-Photoroom_lihhwg.png'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const homeLinks = [
  { name: 'Mission, Vision, Value', href: '/#profile' },
  { name: 'Who We Are', href: '/#about' },
  { name: 'Our Expertise', href: '/#expertise' },
  { name: 'Certificates', href: '/#certificates' },
  { name: 'Potential Clients', href: '/#clients' },
  { name: 'Feasibility Study', href: '/#feasibility_study' },
  { name: 'Location', href: '/#location' },
];

const buildings = [
  { name: 'Infrastructure', href: '/building-design#infrastructure' },
  { name: 'Terminal Design', href: '/building-design#terminal_design' },
  { name: 'Road Construction', href: '/building-design#road_construction' },
  { name: 'Irrigation Work', href: '/building-design#irrigation_work' },
  { name: 'Bridge Design', href: '/building-design#bridge_design' },
  { name: 'Others', href: '/building-design#others' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  // Always use dark text since the background is now always white
  const navLinkStyle = cn(
    "text-[12px] uppercase font-bold tracking-[0.2em] transition-all duration-300 relative py-1 text-slate-900 hover:text-blue-600"
  );

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 lg:px-10",
        "bg-white shadow-sm", // Forced white background for all screens
        scrolled ? "py-3" : "py-3 lg:py-3" // Subtle height transition on scroll
      )}>
        <div className="max-w-7xl h-10 mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src={logo} 
              alt='company logo' 
              width={205} 
              height={75}
              className="w-50 md:w-45 lg:w-55.75 h-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="relative group">
              <Link href="/" className={navLinkStyle}>
                <span className="flex items-center gap-1">
                  Home
                  <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />
                </span>
                {pathname === '/' && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded-full" />}
              </Link>
              <div className="absolute top-full -left-4 w-64 bg-white border border-gray-100 shadow-xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
                {homeLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="block px-6 py-2 text-[10px] uppercase tracking-widest font-semibold text-slate-500 hover:text-blue-600 hover:bg-slate-50">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <Link href="/building-design" className={navLinkStyle}>
                <span className="flex items-center gap-1">
                  Building Design
                  <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform" />
                </span>
                {pathname === '/building-design' && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded-full" />}
              </Link>
              <div className="absolute top-full -left-4 w-64 bg-white border border-gray-100 shadow-xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
                {buildings.map((item) => (
                  <Link key={item.name} href={item.href} className="block px-6 py-2 text-[10px] uppercase tracking-widest font-semibold text-slate-500 hover:text-blue-600 hover:bg-slate-50">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/staff" className={navLinkStyle}>Our Team</Link>
            <Link href="/events" className={navLinkStyle}>Events</Link>
            
            <Link href="/#location" className="hidden lg:block px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-500 ml-4">
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden flex items-center justify-center bg-[#C59D5F] text-white rounded-md p-1 shadow-sm z-[160] self-center mr-4" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {isOpen && (
          <div className="fixed inset-0 top-[68px] bg-white z-[150] lg:hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
              
              <div className="border-b border-slate-50 pb-2">
                <button onClick={() => toggleSection('home')} className="w-full flex items-center justify-between py-3 text-[12px] uppercase tracking-[0.2em] font-bold text-slate-900">
                  <div className="flex items-center gap-3">
                    <span className={`w-1 h-5 rounded-full transition-colors ${openSection === 'home' ? 'bg-blue-600' : 'bg-slate-200'}`} />
                    Home
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openSection === 'home' ? 'rotate-180' : ''}`} size={18} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSection === 'home' ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-1 gap-4 pl-5 border-l border-slate-100 ml-1">
                    {homeLinks.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold hover:text-blue-600 transition-colors py-1">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-b border-slate-50 pb-2">
                <button onClick={() => toggleSection('building')} className="w-full flex items-center justify-between py-3 text-[12px] uppercase tracking-[0.2em] font-bold text-slate-900">
                  <div className="flex items-center gap-3">
                    <span className={`w-1 h-5 rounded-full transition-colors ${openSection === 'building' ? 'bg-blue-600' : 'bg-slate-200'}`} />
                    Building Design
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openSection === 'building' ? 'rotate-180' : ''}`} size={18} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSection === 'building' ? 'max-h-[800px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-1 gap-4 pl-5 border-l border-slate-100 ml-1">
                    {buildings.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold hover:text-blue-600 transition-colors py-1">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 py-4">
                <Link href="/staff" onClick={() => setIsOpen(false)} className="text-[12px] uppercase tracking-[0.2em] font-bold text-slate-700 px-4">Our Team</Link>
                <Link href="/events" onClick={() => setIsOpen(false)} className="text-[12px] uppercase tracking-[0.2em] font-bold text-slate-700 px-4">Events</Link>
              </div>
            </div>
            
            <div className="p-8 bg-slate-50 text-center">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">HH Consulting Architects</p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}