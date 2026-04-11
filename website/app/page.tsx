"use client"; // Required for interval logic
import { useState, useEffect } from 'react';
import { 
  Target, 
  Lightbulb, 
  Diamond, 
  ShieldCheck, 
  MapPin, 
  Ruler,
  Briefcase,
  TreePine,
  Pickaxe,
  FileSearch,
  Phone, 
  Mail, 
  Globe, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Slideshow Imports
import slide01 from '../public/01.png'
import slide02 from '../public/02.png'
import slide03 from '../public/03.png'
import slide04 from '../public/04.png'
import slide05 from '../public/05.png'

import tower from '../public/kebede-tower.png'
import airline from '../public/airline.png'
import airline2 from '../public/airline02.png'
import certificate03 from '../public/certificate03.png'
import certificate04 from '../public/certificate04.png'
import certificate05 from '../public/certificate05.png'
import certificate06 from '../public/certificate06.png'
import haramaya from '../public/haramaya.png'
import addis from '../public/addis.png'
import bule from '../public/bule.jpeg'
import central from '../public/central.png'
import ethioairline from '../public/ethioairline.png'
import insa from '../public/insa.jpeg'
import sam from '../public/sam.png'
import city from '../public/city.jpeg'
import experiance from '../public/experiance.jpeg'
import nurbelay from '../public/nurbelay.jpeg'
import eco from '../public/eco.jpeg'
import habesha from '../public/habesha.jpeg'
import remeda from '../public/remeda.png'
import ecole from '../public/ecole.jpeg'
import rift from '../public/riftvalley.jpeg'
import elsewedy from '../public/elsewedy.jpeg'

const slides = [
  { src: slide01, title: "Dr. Ali Birra Comprehensive Hospital", location: "Innovative Healthcare Infrastructure" },
  { src: slide02, title: "Dr. Ali Birra Guest House", location: "Resilient Architectural Design" },
  { src: slide03, title: "Modern Urban Living", location: "Structural Excellence" },
  { src: slide04, title: "Haramaya Guest House", location: "Sustainability & Function" },
  { src: slide05, title: "Haramaya University Project", location: "Educational Landmark Development" },
];

const certificates = [
  { src: airline, alt: "Ethiopian Airlines Appreciation" },
  { src: airline2, alt: "Regional Appreciation Certificate" },
  { src: certificate03, alt: "ECEAA Membership" },
  { src: certificate04, alt: "Belsty Trading Recognition" },
  { src: certificate05, alt: "Professional Accreditation" },
  { src: certificate06, alt: "Technical Certification" },
]

const partners = [
  { src: haramaya, alt: 'Haramaya University' },
  { src: addis, alt: 'Addis Ababa University' },
  { src: bule, alt: 'Bule Hora University' },
  { src: central, alt: 'Central' },
  { src: ethioairline, alt: 'Ethiopian Airlines' },
  { src: insa, alt: 'INSA' },
  { src: sam, alt: 'SAM' },
  { src: city, alt: 'City Administration' },
  { src: experiance, alt: 'Experience' },
  { src: nurbelay, alt: 'Nurbelay' },
  { src: eco, alt: 'Eco' },
  { src: habesha, alt: 'Habesha' },
  { src: remeda, alt: 'Remeda' },
  { src: ecole, alt: 'Ecole' },
  { src: rift, alt: 'Rift Valley' },
  { src: elsewedy, alt: 'Elsewedy Electric' },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    // CHANGE 1: Reduced pt-32 to pt-16 (matches your new slim navbar)
    <main className="pt-18 bg-white">
      
      {/* PROFESSIONAL SLIDESHOW LANDING PAGE */}
      {/* CHANGE 2: Increased height to h-screen or h-[90vh] to fill the space */}
      <section className="relative w-full h-[80vh] lg:h-[90vh] overflow-hidden bg-slate-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className="object-cover transition-transform duration-[10000ms]"
              // Reduced scaling intensity slightly for better clarity
              style={{ transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.0)' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/10" />
            
            <div className="absolute bottom-20 left-6 lg:left-20 max-w-3xl text-white">
              <p className="text-blue-400 font-bold tracking-[0.4em] uppercase text-xs mb-4">
                {slide.location}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                {slide.title}
              </h1>
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <div className="absolute bottom-10 right-6 lg:right-20 flex gap-4">
          <button onClick={prevSlide} className="p-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-6 lg:left-20 flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-500 rounded-full ${i === currentSlide ? "w-12 bg-blue-500" : "w-4 bg-white/30"}`}
            />
          ))}
        </div>
      </section>

      {/* ... the rest of your sections remain the same ... */}
      
      {/* 1. WHO WE ARE */}
      <section id="about" className="px-6 lg:px-20 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-gray-400 mb-8">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-lg mb-8">
              A multidisciplinary firm based in Ethiopia, dedicated to providing innovative, sustainable, and integrated solutions in architecture and engineering. We combine visionary design with technical excellence to deliver impactful and resilient projects across Ethiopia and beyond.
            </p>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">
              OUR APPROACH
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-lg mb-8">
              We are committed to excellence, sustainability, and innovation. Our designs balance aesthetics, function, and environmental responsibility. We work closely with clients, stakeholders, and communities to ensure every project meets technical, regulatory, and social expectations.
            </p>
            <Link href="/staff" className="text-sm font-bold uppercase tracking-widest text-blue-600 flex items-center gap-2 group mt-auto">
              Meet our team <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="relative h-full min-h-[400px] rounded-sm overflow-hidden border border-slate-100 shadow-md">
            <Image 
              src={tower} 
              alt="HH Consulting Architects architectural project" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. MISSION, VISION, VALUE */}
      <section id="profile" className="px-6 lg:px-20 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="flex justify-center text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-gray-400">
              Our Cores
           </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-slate-100 border border-slate-100 shadow-2xl">
          <div className="group relative bg-[#1a2e44] p-12 transition-all duration-500 text-white">
            <div className="relative z-10">
              <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                <Target className="text-white" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-widest mb-6">Mission</h4>
              <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                HH Consulting Architects and Engineers plc is driven by a passion for automated project management solutions with architectural and civil engineering services. Implements innovative ideas across multiple services and lines of business to contribute towards promoting efficient and economical project management and quality control solutions.
              </p>
            </div>
          </div>

          <div className="group relative bg-[#1a2e44] p-12 transition-all duration-500 text-white border-x border-white/5">
            <div className="relative z-10">
              <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                <Lightbulb className="text-white" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-widest mb-6">Vision</h4>
              <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                We strive to achieve innovative project management and quality control solutions for the local construction industry. And also we implement a proper contract administration and design supervision methods by creating partnership and creative working environment.
              </p>
            </div>
          </div>

          <div className="group relative bg-[#1a2e44] p-12 transition-all duration-500 text-white">
            <div className="relative z-10">
              <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center mb-8 group-hover:border-white transition-colors">
                <Diamond className="text-white" size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold uppercase tracking-widest mb-6">Value</h4>
              <ul className="text-slate-300 text-sm space-y-4 group-hover:text-white transition-colors">
                <li className="flex items-start gap-3 italic">
                  <span className="text-blue-400 font-bold">•</span> Appropriate usage of time
                </li>
                <li className="flex items-start gap-3 italic">
                  <span className="text-blue-400 font-bold">•</span> Developing the behavioral qualities of a good entrepreneurship
                </li>
                <li className="flex items-start gap-3 italic">
                  <span className="text-blue-400 font-bold">•</span> Serving customers in kind
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE */}
      <section id="expertise" className="px-6 lg:px-20 py-6 max-w-7xl mx-auto">
        <h2 className="flex justify-center text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-gray-400 mb-8">
              Professional Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          <ExpertiseBox id="feasibility" icon={<Ruler size={32} strokeWidth={1.5} />} title="Architectural and Engineering Design" desc={
            <ul className="space-y-2 mt-2 list-disc">
              <li >Architectural Design</li>
              <li >Structural Engineering</li>
              <li >Electrical and Mechanical Systems Design</li>
              <li >Sanitary and Plumbing Systems</li>
            </ul>
          }/>
          <ExpertiseBox id="feasibility" icon={<Pickaxe size={32} strokeWidth={1.5}/>} title="Infrastructure & Civil Engineering" desc={
            <ul className="space-y-2 mt-2 list-disc">
              <li >Road and Highway Design</li>
              <li >Bridge and Transportation Structures</li>
              <li >Irrigation and Water Resource Engineering</li>
              <li >Infrastructure Master Planning</li>
            </ul>
          }/>
          <ExpertiseBox id="feasibility" icon={<TreePine size={32} strokeWidth={1.5}/>} title="Urban & Environmental Service" desc={
            <ul className="space-y-2 mt-2 list-disc">
              <li >Urban and Regional Master Plans</li>
              <li >Environmental Impact Assessments (EIA)</li>
              <li >Landscape Architecture and Design</li>
              <li >Topographic Surveys</li>
            </ul>
          }/>
          <ExpertiseBox id="feasibility" icon={<FileSearch size={32} strokeWidth={1.5} />} title="Feasibility & Planning" desc={
            <ul className="space-y-2 mt-2 list-disc">
              <li >Feasibility Studies for Public and Private Projects</li>
              <li >Strategic Planning and Site Analysis</li>
              <li >Concept Development and Cost Estimations</li>
            </ul>
          }/>
          <ExpertiseBox id="feasibility" icon={<Briefcase size={32} strokeWidth={1.5}/>} title="Construction Supervision & Project Management" desc={
            <ul className="space-y-2 mt-2 list-disc">
              <li >Contract Administration</li>
              <li >Quality Control and Assurance</li>
              <li >Site Supervision</li>
              <li >Project Scheduling and Monitoring</li>
            </ul>
          }/>
        </div>
      </section>

      <section id="certificates" className="w-full py-6 bg-white">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="mb-16 text-center lg:text-left">
              <h2 className="flex gap-2 justify-center text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-gray-400">
                   <ShieldCheck /> Our Certifications
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {certificates.map((cert, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-[4/3] bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-4"
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain p-2  transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 bg-white/95 px-2 py-1 shadow-sm">
                      {cert.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section id="clients" className="w-full py-24 bg-slate-50 border-t border-gray-100">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-gray-400">
              Partners & Potential Clients
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group bg-white w-[160px] h-[120px] md:w-[200px] md:h-[140px] flex items-center justify-center p-4 border border-slate-200 rounded-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={partner.src} 
                    alt={partner.alt}
                    fill
                    {...(index === 0 && { priority: true })}
                    sizes="200px"
                    className="object-contain object-center transition-transform duration-500 scale-100 group-hover:scale-110"
                    style={{ opacity: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="px-6 lg:px-20 py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-12">Location</h2>
            <div className="space-y-8">
              <ContactItem icon={<MapPin />} title="Address" content="Ethiopia, Addis Ababa, 22 Mazoriya, Efrata building , 3rd floor" />
              <ContactItem icon={<Phone />} title="Phone" content="011 8683830, +251 913592121" />
              <ContactItem icon={<Mail />} title="Email" content="hhconsultingarchitectengineers@gmail.com " />
              <ContactItem icon={<Globe />} title="Website" content="www.hhconsulting.et" />
            </div>
          </div>
          <div className="h-80 bg-slate-800 rounded-sm border border-slate-700 flex items-center justify-center text-slate-500 italic">
            [Google Maps Integration]
          </div>
        </div>
      </section>
    </main>
  );
}

function ExpertiseBox({ icon, title, desc, id }: any) {
  return (
    <div id={id} className="bg-white p-10 hover:bg-slate-50 transition-all duration-300 group flex flex-col h-full border-r border-b border-gray-100">
      <div className="text-blue-600 mb-6 group-hover:-translate-y-1 transition-transform">
        {icon}
      </div>
      <h4 className="text-xl font-bold tracking-tight mb-4 text-slate-900 leading-tight">
        {title}
      </h4>
      <div className="text-gray-500 text-sm leading-relaxed">
        {desc}
      </div>
    </div>
  );
}

function ContactItem({ icon, title, content }: any) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="text-blue-400 mt-1 transition-transform group-hover:scale-110">{icon}</div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{title}</p>
        <p className="text-lg font-light">{content}</p>
      </div>
    </div>
  );
}