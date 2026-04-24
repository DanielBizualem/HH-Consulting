"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Home, Layout, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
import Image from 'next/image';

const logo = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776340102/company_logo-Photoroom_hmbhoz.png'

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
  const [showBottomNav, setShowBottomNav] = useState(false);
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Scroll logic for Top and Bottom Navbars
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      setShowBottomNav(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';
  const isDarkText = !isHomePage || scrolled || isOpen;

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinkStyle = cn(
    "text-[12px] uppercase font-bold tracking-[0.2em] transition-all duration-300 relative py-1",
    isDarkText ? "text-slate-900" : "text-white"
  );

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const mobileBottomLinks = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'Design', href: '/building-design', icon: <Layout size={18} /> },
    { name: 'Team', href: '/staff', icon: <Users size={18} /> },
    { name: 'Events', href: '/events', icon: <Calendar size={18} /> },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 lg:px-20 px-6",
        isDarkText 
          ? "bg-white py-3 shadow-sm" 
          : "bg-transparent py-5"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center h-12">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src={logo} 
              alt='company logo' 
              width={195} 
              height={75}
              className={cn(
               "w-35 md:w-42.5 lg:w-48.75 h-auto", 
                "object-contain transition-all", 
                !isDarkText && "brightness-0 invert"
              )}
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
            <Link href="/#location" className={cn("hidden lg:block px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] border transition-all duration-500 ml-4", isDarkText ? "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white" : "border-white/40 text-white hover:bg-white hover:text-slate-900")}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className={cn("lg:hidden p-2 z-[160]", (scrolled || isOpen || !isHomePage) ? "text-slate-900" : "text-white")} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY (Exactly as before) */}
        {isOpen && (
          <div className="fixed inset-0 top-[60px] bg-white z-[150] lg:hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
              
              {/* Home Sub-navigation Accordion */}
              <div className="border-b border-slate-50 pb-2">
                <button 
                  onClick={() => toggleSection('home')}
                  className="w-full flex items-center justify-between py-3 text-[12px] uppercase tracking-[0.2em] font-bold text-slate-900"
                >
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

              {/* Building Design Sub-navigation Accordion */}
              <div className="border-b border-slate-50 pb-2">
                <button 
                  onClick={() => toggleSection('building')}
                  className="w-full flex items-center justify-between py-3 text-[12px] uppercase tracking-[0.2em] font-bold text-slate-900"
                >
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

              {/* Other Main Links */}
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

      {/* SLIM FULL-WIDTH MOBILE BOTTOM NAVIGATION BAR */}
<div className={cn(
  "fixed bottom-0 left-0 right-0 z-[200] lg:hidden transition-all duration-500 w-full",
  showBottomNav && !isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
)}>
  <div className="bg-slate-900/95 backdrop-blur-md border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)] px-4 py-2 pb-5 flex justify-between items-center">
    {mobileBottomLinks.map((link) => {
      const isActive = pathname === link.href;
      return (
        <Link 
          key={link.name} 
          href={link.href}
          className={cn(
            "flex flex-col items-center justify-center transition-all duration-300 flex-1",
            isActive ? "text-[#E5A343]" : "text-slate-500"
          )}
        >
          <div className="p-1.5 transition-all">
            {link.icon}
          </div>
          <span className="text-[8px] font-black uppercase tracking-tighter leading-none">
            {link.name}
          </span>
        </Link>
      );
    })}
  </div>
</div>
    </>
  );
}