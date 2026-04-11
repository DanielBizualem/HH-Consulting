"use client";
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
import Image from 'next/image';
import logo from '../public/company_logo.png'

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

  const navLinkStyle = cn(
    "text-[14px] font-medium tracking-wide transition-all duration-300 relative py-1",
    scrolled ? "text-slate-900" : "text-slate-700"
  );

  return (
    <nav className={cn(
      "fixed top-0 w-full z-[100] transition-all duration-300 px-6 lg:px-20",
      // MINIMIZED PADDING: changed from py-4/py-8 to py-1/py-2
      scrolled 
        ? "bg-white/95 backdrop-blur-md py-2 border-b border-gray-100 shadow-sm" 
        : "bg-transparent py-4" 
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12"> {/* Fixed small height container */}
        
        {/* Logo - Scaled down for slim profile */}
        <Link href="/" className="flex items-center group">
            <Image 
              src={logo} 
              alt='company logo' 
              width={180} // Reduced further for immediate slimness
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

        {/* Mobile Toggle */}
        <button className="lg:hidden p-1 text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[50px] bg-white z-50 p-8 flex flex-col gap-6 lg:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-blue-600">Home</Link>
          <div className="pl-4 space-y-4 border-l border-gray-100">
            {homeLinks.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block text-gray-500 text-sm">{item.name}</Link>
            ))}
          </div>
          <Link href="/staff" onClick={() => setIsOpen(false)} className="text-lg font-medium">Our Team</Link>
          <Link href="/events" onClick={() => setIsOpen(false)} className="text-lg font-medium">Events</Link>
          <Link href="/building-design" onClick={() => setIsOpen(false)} className="text-lg font-medium text-blue-600">Building Design</Link>
        </div>
      )}
    </nav>
  );
}