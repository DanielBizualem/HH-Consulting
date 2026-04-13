"use client";
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
import Image from 'next/image';
const logo = 'https://res.cloudinary.com/djxfy60tt/image/upload/v1776075384/company_logo_bwxvyo.png'

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
  {name:'Others',href:'/building-design#others'}
]
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinkStyle = cn(
    "text-[14px] font-medium tracking-wide transition-all duration-300 relative py-1",
    scrolled ? "text-slate-900" : "text-slate-700"
  );
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  return (
    <nav className={cn(
      "fixed top-0 w-full z-[100] transition-all duration-300 px-6 lg:px-20",
      (scrolled || isOpen) 
        ? "bg-white py-2 border-b border-gray-100 shadow-sm" 
        : "bg-transparent py-4" 
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12">
        
        {/* Logo */}
        <Link href="/" className="flex items-center group">
            <Image 
              src={logo} 
              alt='company logo' 
              width={180} 
              height={85}
              className="object-contain"
              priority
            />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <Link href="/" className={cn(navLinkStyle, "flex items-center gap-1")}>
              Home
              <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform" />
              {pathname === '/' && (
                <div className="absolute -bottom-0.5 left-0 w-full h-[2.5px] bg-blue-600 rounded-full" />
              )}
            </Link>

            <div className="absolute top-full -left-4 w-64 bg-white border border-gray-100 shadow-xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
              {homeLinks.map((item) => (
                <Link key={item.name} href={item.href} className="block px-6 py-2 text-[12px] font-medium text-slate-500 hover:text-blue-600 hover:bg-slate-50">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
          <Link href="/building-design" className={cn(navLinkStyle, "flex items-center gap-1")}>
              Building Design
              <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform" />
              {pathname === '/building-design' && (
                <div className="absolute -bottom-0.5 left-0 w-full h-[2.5px] bg-blue-600 rounded-full" />
              )}
            </Link>
            <div className="absolute top-full -left-4 w-64 bg-white border border-gray-100 shadow-xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
              {buildings.map((item) => (
                <Link key={item.name} href={item.href} className="block px-6 py-2 text-[12px] font-medium text-slate-500 hover:text-blue-600 hover:bg-slate-50">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/staff" className={navLinkStyle}>
            Our Team
            {pathname === '/staff' && <div className="absolute -bottom-0.5 left-0 w-full h-[2.5px] bg-blue-600 rounded-full" />}
          </Link>
          
          <Link href="/events" className={navLinkStyle}>
            Events
            {pathname === '/events' && <div className="absolute -bottom-0.5 left-0 w-full h-[2.5px] bg-blue-600 rounded-full" />}
          </Link>
        </div>

        {/* Mobile Toggle - Ensure color is always visible */}
        <button 
          className="lg:hidden p-1 text-slate-900 z-[160]" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Solid Background Fix */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-[150] lg:hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
            
            {/* HOME SECTION */}
            <div className="border-b border-slate-50 pb-2">
              <button 
                onClick={() => toggleSection('home')}
                className="w-full flex items-center justify-between py-3 text-md font-medium text-slate-900 tracking-tight"
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
                    <Link 
                      key={item.name} 
                      href={item.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-slate-500 text-sm font-normal uppercase tracking-widest hover:text-blue-600 transition-colors py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* BUILDING DESIGN SECTION */}
            <div className="border-b border-slate-50 pb-2">
              <button 
                onClick={() => toggleSection('building')}
                className="w-full flex items-center justify-between py-3 text-md font-medium text-slate-900 tracking-tight"
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
                    <Link 
                      key={item.name} 
                      href={item.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-slate-500 text-sm font-normal uppercase tracking-widest hover:text-blue-600 transition-colors py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* STATIC LINKS */}
            <div className="">
              <Link 
                href="/staff" 
                onClick={() => setIsOpen(false)} 
                className="flex items-center text-md font-medium text-slate-700 px-1"
              >
                Our Team
              </Link>
              <Link 
                href="/events" 
                onClick={() => setIsOpen(false)} 
                className="flex items-center py-5 text-md font-medium text-slate-700 px-1"
              >
                Events
              </Link>
            </div>

          </div>
          
          {/* BRANDING FOOTER */}
          <div className="p-8 bg-slate-50 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
              HH Consulting Architects
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}