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
  { name: 'Feasibility Study', href: '/#feasibility' },
  { name: 'Environmental Assessment', href: '/#environmental' },
  { name: 'Location', href: '/#location' },
];

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

          <Link href="/staff" className={navLinkStyle}>
            Our Team
            {pathname === '/staff' && <div className="absolute -bottom-0.5 left-0 w-full h-[2.5px] bg-blue-600 rounded-full" />}
          </Link>
          
          <Link href="/events" className={navLinkStyle}>
            Events
            {pathname === '/events' && <div className="absolute -bottom-0.5 left-0 w-full h-[2.5px] bg-blue-600 rounded-full" />}
          </Link>

          <Link href="/building-design" className={cn(
            "text-[10px] font-bold uppercase tracking-[0.05em] px-4 py-1.5 transition-all",
            scrolled ? "bg-slate-900 text-white hover:bg-blue-600" : "bg-slate-800 text-white hover:bg-slate-700"
          )}>
            Building Design
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
          <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-8">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-bold text-blue-600">
              Home
            </Link>
            
            <div className="pl-4 space-y-5 border-l-2 border-slate-100">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Sections</p>
              {homeLinks.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-slate-600 text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-6 pt-4">
              <Link href="/staff" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-slate-900">
                Our Team
              </Link>
              <Link href="/events" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-slate-900">
                Events
              </Link>
              <Link 
                href="/building-design" 
                onClick={() => setIsOpen(false)} 
                className="block w-full text-center bg-blue-600 text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs shadow-lg"
              >
                Building Design
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}